# AI CLI 工具社区动态日报 2026-07-31

> 生成时间: 2026-07-30 22:15 UTC | 覆盖工具: 12 个

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

---
### 2026-07-31 AI CLI 工具今日重點摘要
| 序号 | 工具 | 更新内容 | 链接 |
|------|------|----------|------|
| 1 | llama.cpp | 连续发布b10186-b10199共10个补丁版本，b10199支持服务端输入嵌入生成下一token，b10198新增Vulkan量化张量拼接，修复Apple Metal内存泄漏、KleidiAI字符串溢出等兼容性问题；合并PR#26347修复服务端鉴权开启时/v1/models接口泄露模型列表的安全漏洞 | [Release Notes](https://github.com/ggml-org/llama.cpp/releases) |
| 2 | Qwen Code | 发布v0.21.1-nightly预览版本，优化CI容器任务bash shell兼容性，合并PR#8132落地生产级桌面端封装能力，修复Git worktree下配置写入错误、Anthropic模型转换器无效thinking签名残留等bug | [Release Notes](https://github.com/QwenLM/qwen-code/releases) |
| 3 | OpenAI Codex | 发布3个Rust运行时预发布版本（rust-v0.147.0-alpha.2、rust-v0.146.0-alpha.9.2、rust-v0.146.0-alpha.9.1），底层落地的优化包括：支持企业自动化账户计划、跨环境命令路径解释修正、V8代码模式独立主机运行、沙箱权限配置统一化、流式输出缓冲区性能优化 | [Releases](https://github.com/openai/codex/releases) |
| 4 | GitHub Copilot CLI | 发布v1.0.76与v1.0.77-0两个版本，v1.0.77-0新增Web OAuth登录模式切换、grok-4.5模型支持、沙箱规则强制执行能力；v1.0.76新增插件/工具/LSP服务器的启用禁用控制，修复沙箱对macOS/Linux相对路径和符号链接的拦截规则执行问题，历史高优bug「大附件导致会话永久卡死」已修复关闭 | [Releases](https://github.com/github/copilot-cli/releases) |
| 5 | Codewhale（原DeepSeek-TUI） | 发布v0.9.2正式版本，完成项目更名，旧npm包`deepseek-tui`正式废弃，所有发行资产统一使用`codewhale`标识，同步修复权限校验、Fleet配置持久化、子代理监管、环境水母渲染等10余项问题 | [v0.9.2 Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.2) |
| 6 | Gemini CLI | 发布v0.55.0-nightly.20260730版本，合入PR#28599将模型429限流分类为终端错误避免客户端永久卡死，PR#28603将沙箱Dockerfile从Node 20升级到Node 22规避EOL组件安全风险 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases) |
| 7 | OpenCode | 发布v1.18.10版本，新增Modal模型自动发现能力，桌面端优化附件管理、Toast通知堆叠、Tab交互体验，合并PR#39758修复Web端打开项目无目录的问题，PR#39760落地Claude订阅OAuth认证能力 | [v1.18.10 Release](https://github.com/anomalyco/opencode/releases) |
| 8 | Pi | 发布v0.83.0版本，新增`pi auth print-api-key`/`pi auth print-bearer-token`凭证导出能力（含OAuth自动刷新与有效性校验），支持SSH场景下Headless OpenRouter登录，合并PR#7231落地Markdown API扩展代理消息渲染能力 | [v0.83.0 Release](https://github.com/badlogic/pi-mono/releases/tag/v0.83.0) |

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-07-31）

---

## 1. 热门 Skills 排行（按社区热度排序）
以下为热度最高的7个Skills PR，均为OPEN状态：
1. **PR #1298：skill-creator 核心评估脚本修复**  
   功能：解决 `run_eval.py` 全场景 recall=0% 的核心bug，同步修复Windows流读取、触发检测、并行worker问题，是skill-creator工具链的基础性修复。  
   讨论热点：该bug有10+独立复现，直接导致技能描述优化循环失效，是社区最关注的工具链问题。  
   链接：[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)
2. **PR #514：document-typography 文档排版质量控制技能**  
   功能：自动修复AI生成文档的孤

---

用户现在需要我生成Claude Code 2026-07-31的社区动态日报，首先得严格按照要求的结构来，先看给的数据：过去24小时没新Release，最新Issues是50条里选30，PR只有1条闭掉了。
首先第一部分今日速览，得抓重点：首先今天没新版本发布，然后社区 Issues 最火的是macOS听写粘贴文本的编辑功能需求（82评论282赞），然后还有一堆Windows平台的bug，还有Remote Control、定时任务、计费相关的投诉，另外还有几个功能需求比如技能共享、FIDO2多设备、内存配置这些，PR方面只有1条闭掉的第三方MCP相关的，没合并的。对，2-3句话就行，要准确。
然后第二部分版本发布，因为数据里说最新 Releases 过去24小时无，所以直接写“今日无新版本发布”，就行。
第三部分社区热点 Issues，要选10个最值得关注的，得按重要性排：第一个肯定是#3412，那个听写粘贴文本的增强需求，评论最多82，赞282，这个对无障碍、macOS用户太重要了，现在听写软件过来的文本是折叠的，没法改，影响 dictation 用户，比如用MacWhisper的，还有无障碍场景。然后第二个是#14828，Windows控制台闪屏的bug，50评论，是Windows用户的痛点，执行工具的时候闪，影响体验。第三个是#68429，那个计费账号删除的bug，15评论，这个很严重啊，用户误操作Pro升Max导致账号数据全删，退款卡住，没人工客服，属于账号安全类的重大问题。第四个是#77915，Remote Control断开失败的bug，15评论，null guard missing，现在远程控制断开就崩，影响远程协作场景，而且和后面几个Remote Control的issue可以关联。第五个是#79824，Artifact分享失败，5评论14赞，发布后的Artifact没法公开分享，影响内容分发，用户做文档、Mermaid图分享不了。第六个是#77817，Windows定时任务权限回归bug，v2.1.206之后无人值守的定时任务 broken，权限继承失败， falls back to Manual，这个对企业级自动化场景打击很大。第七个是#74113，后台agent不交付最终报告的bug，4评论5赞，后台跑的子任务跑完没结果，只能重ping，影响自动化工作流可靠性。第八个是#77788，WSL路径选择的回归bug，选WSL文件夹强制设成WSL环境，导致Chrome扩展和MCP插件崩，影响WSL用户的工作流。第九个是#81248，Cowork设备桥WebSocket周期性旋转的bug，每30分钟断一次，导致remote-devices MCP全掉，1000个工具注销，影响Cowork云协作的稳定性。第十个是#79217，auto-memory的MEMORY.md大小限制可配置的需求，1评论1赞，现在固定200行/25KB，大项目用户不够用，属于高频自定义需求。哦对，每个要说明为什么重要，社区反应，还要带链接。
然后第四部分重要PR进展，哦数据里只有1条PR，就是#82555，是闭掉的，标题是Claude/youtube instagram mcp yn2u6s，作者batuhunca-del，2026-07-30更新的，内容是第三方YouTube/Instagram的MCP实现相关，但是状态是CLOSED，没合并，所以要说明这个PR是第三方贡献的社交平台MCP服务端，但目前未合并，状态已关闭，没有进入主代码库。哦对，用户说选10个，但总共只有1条，那只能写这个，说明共1条未合并PR，就是这条，内容是什么，状态如何。
第五部分功能需求趋势，要从所有Issue里提炼：首先第一个是无障碍与输入体验优化，比如#3412的听写文本编辑，还有TUI的a11y标签，说明社区很关注无障碍、非键盘输入场景的体验。第二个是Windows平台稳定性修复，今天一堆Windows的issue：闪屏、定时任务、权限分类器、子进程工作目录问题，说明Windows是当前的稳定性重灾区，用户反馈集中。第三个是远程协作与Cowork功能健壮性，Remote Control断连、Cowork设备桥断连、会话共享的问题，说明Remote Control和Cowork是高频使用但bug多的模块。第四个是自动化任务可靠性，定时任务、后台agent、工作流子代理的问题，说明企业级自动化场景是核心使用场景，稳定性要求高。第五个是账户与计费体验优化，#68429的计费bug、Fable模型选型误触付费，说明账户安全和计费透明度的需求很高。第六个是技能与生态扩展，技能共享、用户组共享、FIDO2多设备、MCP插件兼容性的需求，说明社区希望扩展Claude Code的生态和自定义能力。第七个是上下文与记忆自定义，#79217的内存配置，说明大上下文、长期会话用户对记忆管理自定义的需求高。
第六部分开发者关注点，总结痛点和高频需求：首先是痛点：1. Windows平台回归bug频发，多个版本（2.1.206、2.1.217、2.1.220）都有不同模块的回归，影响生产环境使用；2. 远程协作与自动化任务可靠性不足，Remote Control断连、后台agent丢结果、定时任务调度异常，影响工作流稳定性；3. 计费与账户安全漏洞，存在误扣费、账号误删、无人工申诉渠道的问题，用户信任度受影响；4. MCP插件与平台兼容性问题，WSL、Windows、macOS不同平台下MCP服务器启动、工具加载异常，影响生态扩展。然后高频需求：1. 听写/粘贴文本的预编辑能力，覆盖无障碍、语音输入场景；2. Windows平台稳定性专项优化；3. 自动化任务（定时任务、后台agent）的可靠性增强，支持状态查询、错误提示；4. 技能共享与协作能力升级，支持组共享、编辑提议；5. 记忆与上下文配置自定义，满足不同规模项目的需求。
然后要注意语言简洁专业，适合技术开发者，每个Issue和PR带链接，还要注意时间是对应的，因为日报是2026-07-31的，数据是过去24小时到7月30日的，所以要标注清楚数据时间范围是过去24小时（截至2026-07-30）。
哦对，还要注意Issue里的标签，比如#3412是enhancement, a11y的，要提到无障碍属性。#68429是计费安全，要突出严重性。#77817是regression，回归bug，说明是新版本引入的。
还有PR那边只有一条，所以要说明“本次共统计到1条过去24小时更新的PR，具体如下”，然后列出来，说明状态是CLOSED，未合并，是第三方MCP相关的。
等下，有没有漏的？比如#82622那个Windows上Telegram MCP插件启动不 spawn 服务器的bug？哦我选10个的话，刚才列的10个是不是更优先？对，#3412是赞最多评论最多的，肯定第一个，然后#14828是Windows大bug，评论多，然后#68429是账号安全，严重，#77915是Remote Control，后面好几个相关的，#79824是Artifact分享，用户常用功能，#77817是Windows定时任务回归，#74113是后台agent，#77788是WSL回归，#81248是Cowork协作，#79217是功能需求里比较受欢迎的。对，这10个没问题。
然后今日速览要更准确：“今日（2026-07-31）Claude Code社区无新版本发布，过去24小时内社区讨论热度最高的需求为macOS听写粘贴文本的预编辑能力，相关Issue获282个赞、82条评论；同时Windows平台多模块回归bug、Remote Control/定时任务稳定性问题、计费账号安全漏洞成为用户反馈焦点，共50条Issue更新、1条未合并PR。” 对，这样就概括了。
然后版本发布部分直接写“### 版本发布
今日无新版本发布”，就行。
然后社区热点Issues，每个条目要标编号、标题、重要性说明、社区反应、链接。比如：
#### 1. Issue #3412：支持听写/粘贴文本块提交前查看编辑
- 重要性：解决macOS听写软件（如MacWhisper）、无障碍输入场景的核心痛点，当前粘贴文本以折叠块形式展示，用户无法修改内容，大幅影响语音输入、辅助技术用户的使用体验。
- 社区反应：获282个👍、82条评论，为过去24小时热度最高的Issue，带有`enhancement`、`area:a11y`标签，社区用户普遍呼吁优先支持。
- 链接：anthropics/claude-code Issue #3412
对，这样清晰。
然后其他的依次来，#14828那个Windows控制台闪屏，重要性：Windows用户高频反馈的体验问题，执行工具时控制台反复闪屏，影响长时间使用的视觉舒适度与操作连贯性。社区反应：50条评论，35个👍，带有`bug`、`has repro`标签，已有复现步骤，Windows用户反馈集中。链接：anthropics/claude-code Issue #14828
然后#68429，计费账号删除bug，重要性：严重的账户安全与计费问题，用户误操作Pro升级Max后触发账号+数据永久删除，退款流程陷入循环且无人工申诉渠道，直接威胁用户数据安全与信任。社区反应：15条评论，用户反馈问题至今未得到官方有效响应，带有`invalid`、`stale`标签但未关闭，持续引发讨论。链接：anthropics/claude-code Issue #68429
然后#77915，Remote Control断开失败，重要性：Remote Control/会话共享功能的核心缺陷，断开连接时触发空指针错误，导致远程协作场景下无法正常结束共享会话，影响跨设备协作体验。社区反应：15条评论，2个👍，跨Windows/macOS平台复现，与当日多Remote Control相关Issue形成关联反馈。链接：anthropics/claude-code Issue #77915
然后#79824，Artifact公开分享失败，重要性：影响内容分发能力，用户发布的含Mermaid图表的Markdown Artifact无法开启公开分享，反复操作提示“该版本无法公开分享”，阻碍技术内容的外部分享与协作。社区反应：5条评论，14个👍，带有可复现步骤，内容创作者反馈集中。链接：anthropics/claude-code Issue #79824
然后#77817，Windows定时任务权限回归，重要性：v2.1.206版本引入的回归bug，导致无人值守的定时任务无法继承默认权限配置，全部降级为手动执行模式，直接破坏企业级自动化工作流。社区反应：5条评论，1个👍，带有`regression`标签，自动化场景用户投诉集中。链接：anthropics/claude-code Issue #77817
然后#74113，后台agent不交付最终报告，重要性：后台子代理可靠性缺陷，长时间运行的后台任务完成后无法推送最终结果，仅能通过重ping恢复，导致自动化工作流结果缺失。社区反应：4条评论，5个👍，影响批量自动化任务场景的可用性。链接：anthropics/claude-code Issue #74113
然后#77788，WSL路径选择回归，重要性：v2.1.206后引入的回归bug，选择WSL路径时强制将环境标记为WSL，导致Chrome扩展、MCP等依赖本地环境的插件无法正常工作，破坏WSL用户的工作流。社区反应：3条评论，2个👍，带有`regression`标签，WSL开发场景用户反馈集中。链接：anthropics/claude-code Issue #77788
然后#81248，Cowork设备桥WebSocket周期性断开，重要性：Cowork云协作场景的核心稳定性问题，桌面端自2026-07-23版本起每27-33分钟自动旋转设备桥WebSocket，导致云会话中1000+ remote-devices MCP工具全部注销，协作中断。社区反应：2条评论，影响长时间Cowork会话的稳定性。链接：anthropics/claude-code Issue #81248
然后#79217，MEMORY.md大小限制可配置，重要性：高频自定义需求，当前auto-memory功能固定加载200行/25KB的MEMORY.md，大型项目的长期记忆需求无法满足，限制了大上下文、长期会话的使用体验。社区反应：1个👍、1条评论，面向大型项目开发者。链接：anthropics/claude-code Issue #79217
对，这10个够了。
然后第四部分重要PR进展，因为总共只有1条，所以写：
### 重要 PR 进展
本次共统计到1条过去24小时更新的PR，未合并进入主代码库：
#### PR #82555：YouTube/Instagram第三方MCP服务端实现
- 内容：由社区开发者贡献的第三方MCP服务端，支持YouTube、Instagram平台的内容抓取能力，可扩展Claude Code的生态工具链。
- 状态：已关闭（CLOSED），未合并。
- 链接：anthropics/claude-code PR #82555
然后第五部分功能需求趋势，要提炼：
### 功能需求趋势
从过去24小时的Issue反馈中，社区核心关注的功能方向包括：
1. **无障碍与输入体验优化**：围绕听写输入、TUI无障碍能力的改进需求热度最高，社区希望提升非键盘输入、辅助技术场景的兼容性。
2. **Windows平台稳定性专项修复**：当日Windows相关Issue占比近40%，涵盖控制台、定时任务、权限、子进程等多个模块，Windows平台的稳定性是当前社区最高优先级的修复项。
3. **远程协作与自动化任务可靠性**：Remote Control、Cowork、后台子代理、定时任务的稳定性问题反馈集中，企业级自动化、远程协作场景的可靠性需求持续上升。
4. **生态扩展与自定义能力**：技能共享（组共享、编辑提议）、多FIDO2设备支持、MCP插件兼容性、记忆配置自定义等需求，反映出社区希望提升Claude Code的生态开放性与自定义空间。
5. **计费与账户体验优化**：误扣费、账号删除无申诉渠道、模型选型误触付费等问题，显示出社区对账户安全、计费透明度的强烈需求。
然后第六部分开发者关注点：
### 开发者关注点
#### 高频痛点
1. **Windows平台回归bug频发**：近3个版本（2.1.206、2.1.217、2.1.220）均在Windows平台引入不同模块的回归bug，覆盖核心使用场景，严重影响生产环境使用。
2. **自动化任务可靠性不足**：定时任务调度异常、后台agent结果丢失、工作流子代理调用失败等问题，导致企业级自动化工作流无法稳定运行。
3. **账户安全与计费漏洞**：存在误操作导致账号数据删除、退款无门、模型选型误触付费的问题，且无有效的人工申诉渠道，用户信任度受损。
4. **跨平台兼容性问题**：WSL、Windows、macOS平台下MCP插件启动异常、工具加载失败、环境识别错误等问题频发，影响跨平台开发工作流。
#### 高频需求
1. 听写/粘贴文本的预编辑能力，覆盖无障碍与语音输入场景；
2. Windows平台全模块稳定性专项优化；
3. 自动化任务（定时任务、后台agent）增加状态查询、错误提示与重试机制；
4. 技能共享能力升级，支持用户组共享、协作编辑与版本管控；
5. 记忆、上下文等配置项开放自定义，满足不同规模项目的需求。
哦对，还要检查所有链接是不是对的，Issue的编号都对，PR的也对。然后语言要简洁专业，不要太口语化，适合技术开发者看。
等下，有没有要注意的？比如那个#68429的标签是invalid, stale，但是用户还是发了，而且评论15，说明还是有共鸣，所以要提到虽然标了stale但未关闭，持续有反馈。还有#3412的标签有area:a11y，所以要提到无障碍属性。
还有，今日速览里要提到过去24小时有50条Issue更新，其中展示30条，最热的那个是82评论282赞，对的。
哦对，开头要不要加个标题？比如“# Claude Code 社区动态日报 2026-07-31”，然后下面是数据说明：“数据来源：github.com/anthropics/claude-code | 统计范围：过去24小时（截至2026-07-30 23:59 UTC）”，这样更规范。
对，开头加这个，然后各部分按要求的来。
现在整理一下结构：
# Claude Code 社区动态日报 2026-07-31
> 数据来源：github.com/anthropics/claude-code | 统计范围：过去24小时（截至2026-07-30 23:59 UTC）

## 1. 今日速览
今日无新版本发布，过去24小时内社区讨论热度最高的需求为macOS听写粘贴文本的预编辑能力，相关Issue获282个赞、82条评论；同时Windows平台多模块回归bug、Remote Control/定时任务稳定性问题、计费账号安全漏洞成为用户反馈焦点，共50条Issue更新、1条未合并PR。

## 2. 版本发布
今日无新版本发布。

## 3. 社区热点 Issues（共10条，按热度排序）
1. **[#3412](anthropics/claude-code Issue #3412) 支持听写/粘贴文本块提交前查看编辑**
   - 重要性：解决macOS听写软件（如MacWhisper）、无障碍输入场景的核心痛点，当前粘贴文本以折叠块形式展示，用户无法修改内容，大幅影响语音输入、辅助技术用户的使用体验，带有`area:a11y`标签。
   - 社区反应：获282个👍、82条评论，为过去24小时热度最高的Issue，社区普遍呼吁优先落地该能力。
2. **[#14828](anthropics/claude-code Issue #14828) Windows平台：执行工具时控制台窗口闪屏**
   - 重要性：Windows用户高频反馈的体验问题，执行工具时控制台反复闪屏，影响长时间使用的视觉舒适度与操作连贯性，带有`has repro`标签已有明确复现步骤。
   - 社区反应：50条评论、35个👍，Windows用户反馈集中。
3. **[#68429](anthropics/claude-code Issue #68429) 计费/账号删除严重bug：误升级导致账号数据永久删除，退款无申诉渠道**
   - 重要性：严重的账户安全与计费问题，用户误操作Pro升级Max后触发账号+数据永久删除，退款流程陷入循环且无人工介入渠道，直接威胁用户数据安全与平台信任度。
   - 社区反应：15条评论，虽被标记`stale`但未关闭，持续引发用户投诉。
4. **[#77915](anthropics/claude-code Issue #77915) Remote Control断开连接时

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

用户现在需要我根据给的GitHub数据生成2026-07-31的OpenAI Codex社区动态日报，结构是要求的六个部分，还要中文简洁专业，附链接。首先先理清楚每个部分要填什么内容。
首先第一部分今日速览，得概括今天最重要的点，比如首先有三个Rust预发布版本上线，然后社区最火的是Windows端的各类bug，还有/undo功能回归的呼声最高，还有几个底层的性能、沙箱相关的PR合并了，还有企业级自动化账户的支持也提上来了？对，凑2-3句话就行，要准确。
然后第二部分版本发布，这里过去24小时有三个rust的alpha版本，分别是0.147.0-alpha.2，0.146.0-alpha.9.2，0.146.0-alpha.9.1，都是预发布版本，主要是迭代修复和功能测试，因为没有具体 changelog 就说明是迭代预发布，面向测试用户。
第三部分社区热点Issues，要挑10个最重要的，首先得按热度来，首先#9203，/undo功能回归，评论66，👍368，这个肯定是第一个，因为赞最多，需求是恢复/undo，避免误删未跟踪文件、误改未提交内容，社区呼声极高。然后第二个#20214，Windows 11频繁卡顿冻结，评论83，👍77，这个评论最多，是Windows端最热的性能bug，用户配置是Ryzen5+32GB都卡，影响面大。第三个#33685，周额度消耗速度和旧的5小时额度一样快，评论24，👍10，这个是新额度策略的bug，影响所有用周额度的用户。第四个#31035，Windows桌面端自动重装SysmonDrv导致蓝屏，评论21，这个很严重，会导致系统崩溃，影响Windows用户安全使用。第五个#26478，Windows端拼写检查只报错不给修改建议，评论18，影响IDE/桌面端的编辑体验。第六个#9615，VS Code扩展全空白，评论15，影响VS Code用户的日常使用，覆盖全平台但Windows用户反馈多。第七个#31786，Windows到安卓远程控制完全失效，评论13，影响跨设备使用的用户。第八个#14144，MCP OAuth重新认证后仍用旧令牌报错，评论10，影响用第三方MCP服务的开发者。第九个#35458，桌面端截图像占95%的会话存储，最高到165GiB，评论6，这个是严重的存储泄漏问题，影响长期使用的用户。第十个#31864，GPT-5.6 Sol模式下所有请求失败，因为multi_agent_v2用了保留的spawn_agent工具，评论6，影响用新模型Sol的用户。对，这十个，每个要说明为什么重要，社区反应，附链接。
第四部分重要PR进展，挑10个，首先看已经关闭的（就是合并了的）和开放的重要的。第一个#36228，支持企业自动化账户计划，已经合并，这个是B端企业用户需要的，识别enterprise_cbp_automation计划，支持企业自动化工作流。第二个#36223，保留读取命令的执行器路径，合并了，解决跨环境执行时路径解释错误的问题，对远程执行、沙箱场景很重要。第三个#36217，代码模式 exclusively 用独立主机运行，合并了，把V8实现移到独立crate，移除嵌入式回退，提升稳定性和隔离性。第四个#36207，标准化沙箱违规事件记录，合并了，统一文件系统和网络拦截的事件格式，方便日志排查和安全审计。第五个#36194，优化流式输出缓冲区的字节移位，合并了，减少大量无效UTF-8或分帧消息场景下的CPU开销，提升流式传输性能。第六个#36183，沙箱执行全局使用权限配置文件，合并了，统一传递权限配置，简化沙箱策略推导逻辑，提升安全性。第七个#31817，更新models.json，开放，自动化更新模型列表，保障模型信息的及时性。第八个#31458，exec-server路由远程网络策略决策，开放，把执行器本地的代理策略决策路由回核心决策器，保留执行 Attribution，提升远程执行的策略一致性。第九个#31922，新增无工具线程模式，开放，为线程标题生成等轻量场景禁用MCP、工具枚举，减少资源开销。第十个#31471，提取Apps缓存逻辑到ConnectorRuntimeManager，开放，重构Apps工具的缓存逻辑，按账户、工作空间隔离上下文，提升缓存命中率。对，这十个，每个说明内容，附链接。
第五部分功能需求趋势，从所有Issues里提炼，首先第一是Windows平台体验优化，因为大部分热门bug都是Windows的，卡顿、蓝屏、扩展空白、远程控制失效这些，用户对Windows端的稳定性需求极高。第二是核心交互功能回归，/undo功能的赞最高，还有会话历史保留、设置页崩溃这些，用户希望恢复之前好用的基础功能。第三是额度与计费策略透明化，周额度消耗异常、额度未重置这些issue，用户对额度规则的透明度、计费合理性要求高。第四是IDE/生态集成增强，VS Code通知、MCP集成、远程SSH这些，开发者希望Codex能和现有开发工具链更深度打通。第五是性能与资源优化，OOM、存储泄漏、exec挂起这些，用户对长时间运行的稳定性、资源占用敏感度高。
第六部分开发者关注点，总结痛点和高频需求，首先第一是Windows平台的稳定性是当前最大痛点，多个严重bug（蓝屏、卡顿、扩展失效）长期未解决，影响大量企业级和个人Windows用户的使用信心。第二是基础交互功能的缺失引发大量不满，/undo功能自移除后长期未回归，误操作成本高，是社区赞数最高的需求。第三是新模型（GPT-5.6系列）的兼容性问题突出，Sol模式工具冲突、执行能力下降，影响尝鲜用户的体验。第四是远程执行、MCP集成等开发者向功能的细节打磨不足，路径处理、令牌刷新、网络策略等边缘场景bug多，影响专业用户的使用效率。
然后要注意每个条目都要附GitHub链接，格式要对，语言要简洁专业，适合技术开发者。现在把结构理清楚，不要有错误，比如Issue的链接都是openai/codex Issue #xxx，PR是openai/codex PR #xxx。
等下，今日速览要准确：比如“今日OpenAI Codex社区共发布3个Rust运行时预发布版本，迭代修复底层稳定性问题；社区最高热度需求为恢复`/undo`基础交互功能，获368个赞；同时Windows平台稳定性问题持续发酵，卡顿、蓝屏等多类bug引发大量用户反馈。多条涉及沙箱、流式传输、企业账户支持的PR已合并，底层能力持续完善。” 对，这三句话差不多。
然后版本发布部分：“### 版本发布
过去24小时上线3个Rust运行时预发布版本，均为迭代测试版本，无公开 changelog：
- `rust-v0.147.0-alpha.2`：[Release 0.147.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.2)
- `rust-v0.146.0-alpha.9.2`：[Release 0.146.0-alpha.9.2](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.9.2)
- `rust-v0.146.0-alpha.9.1`：[Release 0.146.0-alpha.9.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.9.1)”
对，这样就对了。
然后社区热点Issues，每个要写清楚序号、标题、状态、标签、核心问题、重要性、社区反应，附链接。比如第一个：
1. **[#9203] 请恢复`/undo`基础功能** [OPEN] [enhancement, TUI, session] [👍368 | 评论66]
   核心问题：用户反馈移除`/undo`后，误删未跟踪文件、误改未提交代码时无法快速回滚，操作成本极高。这是Codex TUI核心交互功能，自移除后长期未回归，是社区赞数最高的需求，Plus/Pro订阅用户反馈尤为集中。
   链接：https://github.com/openai/codex/issues/9203
然后第二个#20214：
2. **[#20214] Windows 11平台Codex App频繁卡顿/冻结** [OPEN] [bug, windows-os, app, performance] [👍77 | 评论83]
   核心问题：高配置Windows 11设备（Ryzen 5 5600 + 32GB RAM）运行Codex App时仍频繁出现冻结、卡顿，系统资源占用无异常，是过去24小时评论数最高的Issue，影响大量Windows端用户的日常使用。
   链接：https://github.com/openai/codex/issues/20214
第三个#33685：
3. **[#33685] 周额度消耗速度异常，与旧5小时额度规则一致** [OPEN] [bug, rate-limits] [👍10 | 评论24]
   核心问题：旧5小时额度规则下线后，用户周额度的消耗速度仍和旧规则持平，正常使用场景下周额度过早耗尽，影响所有依赖周额度的Plus/Pro用户的使用体验。
   链接：https://github.com/openai/codex/issues/33685
第四个#31035：
4. **[#31035] Windows桌面端自动重装SysmonDrv驱动导致系统蓝屏** [OPEN] [bug, windows-os, sandbox, app] [👍0 | 评论21]
   核心问题：Codex Desktop在Windows平台运行时会重新安装已被用户强制卸载的Sysinternals Sysmon v13.22驱动，多次引发系统蓝屏，WinDbg内核分析已确认蓝屏根因为该驱动，是严重的系统级稳定性问题。
   链接：https://github.com/openai/codex/issues/31035
第五个#26478：
5. **[#26478] Windows端拼写检查仅提示错误无修改建议** [OPEN] [bug, windows-os, app] [👍25 | 评论18]
   核心问题：Codex Desktop在Windows平台的拼写检查功能可识别错误，但右键菜单始终显示“No Guesses Found”，无替换建议，影响编辑场景下的使用效率。
   链接：https://github.com/openai/codex/issues/26478
第六个#9615：
6. **[#9615] VS Code扩展运行时界面全空白** [OPEN] [bug, extension, windows-os] [👍14 | 评论15]
   核心问题：Windows 11平台运行VS Code的Codex扩展时，界面完全空白无法使用，影响所有VS Code用户的编程辅助场景，Business订阅用户反馈尤为集中。
   链接：https://github.com/openai/codex/issues/9615
第七个#31786：
7. **[#31786] Windows到安卓远程控制功能完全失效** [OPEN] [bug, windows-os, app, remote] [👍0 | 评论13]
   核心问题：Windows平台Codex App与安卓设备配对成功后，手机端始终显示“connecting”无法建立远程连接，影响跨设备场景下的移动办公需求。
   链接：https://github.com/openai/codex/issues/31786
第八个#14144：
8. **[#14144] MCP OAuth重新认证后仍使用旧刷新令牌报错** [OPEN] [bug, auth, mcp] [👍12 | 评论10]
   核心问题：MCP服务器重新完成OAuth认证后，当前运行的Codex会话仍使用过期刷新令牌，持续触发`invalid_grant`错误，需重启应用/会话才能恢复，影响使用第三方MCP服务的开发者。
   链接：https://github.com/openai/codex/issues/14144
第九个#35458：
9. **[#35458] 桌面端会话截图重复持久化，最高占用165GiB存储** [OPEN] [bug, app, session] [👍0 | 评论6]
   核心问题：Codex Desktop每次会话压缩时都会全量持久化截图，base64图片占存储的95%，导致`~/.codex/sessions`目录最高膨胀到165GiB，是严重的存储泄漏问题。
   链接：https://github.com/openai/codex/issues/35458
第十个#31864：
10. **[#31864] GPT-5.6 Sol模式下所有请求失败，工具冲突** [OPEN] [bug, subagent, model-behavior] [👍14 | 评论6]
    核心问题：开启`multi_agent_v2`的GPT-5.6 Sol会话中，所有请求都会因保留工具`collaboration.spawn_agent`和模型配置冲突失败，影响使用最新GPT-5.6 Sol模型的用户。
    链接：https://github.com/openai/codex/issues/31864
对，这十个没问题，都是评论和赞比较高的，重要性也够。
然后重要PR进展，挑10个，已经合并的和开放的重要的：
1. **[#36228] 支持企业自动化账户计划** [CLOSED/已合并]
   内容：识别`enterprise_cbp_automation`为企业工作区计划类型，在认证、后端响应、应用服务器账户与额度API中适配该计划，满足企业自动化场景的账户管理需求。
   链接：https://github.com/openai/codex/pull/36228
2. **[#36223] 保留读取命令的执行器路径** [CLOSED/已合并]
   内容：修复跨环境场景下读取命令路径被错误解释的问题，确保命令动作引用执行器文件系统的路径，而非宿主主机的路径，提升远程/沙箱场景下的执行准确性。
   链接：https://github.com/openai/codex/pull/36223
3. **[#36217] 代码模式 exclusively 通过独立主机运行** [CLOSED/已合并]
   内容：将V8代码模式运行时移到独立的`codex-code-mode-runtime` crate，移除Codex进程内的嵌入式运行时回退，通过独立主机运行代码模式，提升稳定性和隔离性。
   链接：https://github.com/openai/codex/pull/36217
4. **[#36207] 标准化沙箱违规事件记录格式** [CLOSED/已合并]
   内容：统一文件系统拦截、网络拦截的沙箱违规事件结构，简化下游消费者的解析逻辑，方便安全审计和故障排查。
   链接：https://github.com/openai/codex/pull/36207
5. **[#36194] 优化流式输出缓冲区的字节移位逻辑** [CLOSED/已合并]
   内容：修复流式输出缓冲区逐字节移位的性能问题，减少大量无效UTF-8字节或分帧消息场景下的CPU开销，提升流式传输的响应效率。
   链接：https://github.com/openai/codex/pull/36194
6. **[#36183] 沙箱执行全局使用权限配置文件** [CLOSED/已合并]
   内容：统一在 execution 请求、沙箱选择、权限升级、exec-server 中传递标准`PermissionProfile`，替代分散的文件系统/网络策略配置，简化沙箱策略推导逻辑，提升安全性。
   链接：https://github.com/openai/codex/pull/36183
7. **[#31817] 自动化更新models.json** [OPEN]
   内容：自动化更新模型列表配置文件，保障模型元数据（名称、能力、额度规则等）的及时性和准确性，减少人工维护成本。
   链接：https://github.com/openai/codex/pull/31817
8. **[#31458] exec-server路由远程网络策略决策** [OPEN]
   内容：将执行器本地的代理策略决策路由回进程级核心决策器，保留环境、执行、工具调用的 Attribution，支持并发决策关联，提升远程执行场景下的策略一致性。
   链接：https://github.com/openai/codex/pull/31458
9. **[#31922] 新增无工具轻量线程模式** [OPEN]
   内容：新增`tool_free`可选特性，为线程标题生成等轻量辅助场景禁用MCP启动、工具枚举，降低资源开销，避免不必要的工具调用。
   链接：https://github.com/openai/codex/pull/31922
10. **[#31471] 提取Apps缓存逻辑到连接器运行时管理器** [OPEN]
    内容：重构Codex Apps工具的缓存逻辑，封装为`ConnectorRuntimeManager`，按账户、ChatGPT用户、工作区模式隔离缓存上下文，提升缓存命中率，降低 Apps 工具调用的延迟。
    链接：https://github.com/openai/codex/pull/31471
对，这些PR都是重要的，合并的都是底层的优化，开放的都是后续要上的功能。
然后功能需求趋势，提炼出来：
### 功能需求趋势
从全部50条Issue中可提炼出5个社区最关注的方向：
1. **Windows平台全链路体验优化**：过去24小时的热门Issue中，超60%为Windows平台相关，涵盖性能、稳定性、IDE集成、远程控制等全场景，Windows用户的体验优化是当前最高优先级需求之一。
2. **核心基础交互功能回归**：`/undo`功能获368个赞，是社区赞数最高的需求，此外会话历史保留、设置页稳定性等基础功能也反馈集中，用户对基础交互的完整性要求极高。
3. **额度计费规则透明化**：周额度消耗异常、额度未按时重置等Issue持续出现，用户对额度规则的透明度、计费合理性需求强烈，希望明确额度消耗的计算逻辑。
4. **开发工具链深度集成**：VS Code通知、MCP服务兼容性、远程SSH执行等需求反馈集中，开发者希望Codex能更好适配现有开发工作流，降低切换成本。
5. **长时间运行稳定性优化**：OOM、存储泄漏、exec挂起等资源类问题反馈增多，对长时间运行的编码、会话场景的稳定性、资源占用控制要求提升。
然后开发者关注点：
### 开发者关注点
综合社区反馈，当前开发者的痛点和高频需求集中在4个方面：
1. **Windows平台稳定性是最大阻碍**：卡顿、蓝屏、扩展空白等多类严重bug长期未解决，大量企业级和个人Windows用户的使用信心受挫，是当前最需优先修复的问题。
2. **基础功能缺失导致误操作成本高**：`/undo`功能自移除后长期未回归，用户误删未跟踪文件、误改未提交代码后无法快速恢复，是专业开发场景下的高频痛点。
3. **新模型兼容性问题突出**：GPT-5.6 Sol系列模型上线后，出现工具冲突、执行能力下降等回归问题，影响尝鲜用户和重度模型用户的体验

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-07-31）
数据来源：github.com/google-gemini/gemini-cli

---

## 今日速览
今日社区核心动态为合入大量P1级Agent与安全修复，同步发布v0.55.0-nightly迭代版本，重点推进了子代理可靠性、沙盒安全升级、MCP工具链优化等核心方向，多个高优先级bug已进入待测试阶段。社区反馈高度集中在Agent自主性、基础使用稳定性、Gemini 3.x新模型适配三个方向，单日新增issue评论超百条。

---

## 版本发布
今日发布nightly构建版本 **v0.55.0-nightly.20260730.gdc859e8e4**，合入了v0.54.0-preview.0与v0.53.0的正式更新内容，当前版本主要完成变更日志完善与版本号迭代，无新增用户-facing功能。
关联变更PR：[#28567](https://github.com/google-gemini/gemini-cli/pull/28567) [#28568](https://github.com/google-gemini/gemini-cli/pull/28568)

---

## 社区热点 Issues（共50条更新，精选Top10）
| 排名 | Issue编号 | 核心问题 | 重要性说明 | 社区反应 | 链接 |
|------|-----------|----------|------------|----------|------|
| 1 | #22323 | `codebase_investigator`子代理触发MAX_TURNS上限后，错误返回`status: success`和终止原因`GOAL`，掩盖实际中断 | 直接影响子代理任务结果可靠性，用户可能误认为代码库分析已完成，实际未执行任何有效操作，是Agent模块当前最高优先级bug | 12条评论、2个点赞，状态为`need-retesting`，长期未修复引发大量用户反馈 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | #21409 | 通用代理（generalist agent）永久卡死，执行文件夹创建等简单操作也会 hang 数小时 | 影响Agent模式的基础可用性，是用户反馈最多的使用故障之一 | 8条评论、8个点赞（全量Issues点赞最高），确认禁用子代理可规避问题 | [链接](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 3 | #19873 | 提案基于Gemini 3模型的bash原生偏好，实现零依赖OS沙盒与执行后意图路由 | 可最大化发挥模型的shell操作能力，同时保障用户安全，是Agent能力优化的核心EPIC | 8条评论，属于大粒度功能迭代，已吸引大量社区开发者参与讨论 | [链接](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 4 | #24353 | 组件级模型行为评估体系迭代，在现有76个行为测试基础上扩展覆盖范围 | 直接影响Gemini 3系列模型的在CLI场景下的表现稳定性，是模型上线的必要前置工作 | 7条评论，关联6款支持Gemini模型的评估需求 | [链接](https://github.com/google-gemini/gemini-cli/issues/24353) |
| 5 | #22745 | 评估AST感知的文件读取、搜索、代码库映射工具的价值 | 可减少无效token消耗、降低多轮交互次数，是代码库交互效率优化的核心方向 | 7条评论，已关联tilth/glyph等候选工具方案 | [链接](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 6 | #21968 | Gemini不会主动调用用户自定义技能和子代理，仅在被明确指令时才会使用 | 严重影响Agent的自主性，用户需要频繁手动触发专用能力，使用体验差 | 6条评论，大量用户反馈gradle/git等自定义技能未被自动调用 | [链接](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 7 | #26522 | 自动记忆系统会无限重试低信号会话，无法自动标记为已处理 | 浪费后台资源，可能导致内存索引膨胀，影响自动记忆功能的稳定性 | 5条评论，关联同批次安全类Issue #26525 | [链接](https://github.com/google-gemini/gemini-cli/issues/26522) |
| 8 | #26525 | 自动记忆系统在敏感信息脱敏前已将内容送入模型上下文，且存在过度日志记录问题 | 直接涉及用户隐私安全，可能导致代码库中的密钥、凭证泄露 | 4条评论，安全优先级P2 | [链接](https://github.com/google-gemini/gemini-cli/issues/26525) |
| 9 | #25166 | Shell命令执行完成后，终端仍显示`Waiting input`卡住 | 影响基础命令行操作体验，简单命令也会出现假死 | 4条评论、3个点赞，多平台用户反馈复现 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 10 | #21983 | 浏览器子代理在Wayland环境下无法正常运行 | 影响Linux Wayland桌面的用户使用浏览器代理能力 | 4条评论，已确认是Wayland兼容性问题 | [链接](https://github.com/google-gemini/gemini-cli/issues/21983) |

---

## 重要 PR 进展（共24条更新，精选Top10）
| 排名 | PR编号 | 核心内容 | 影响范围 | 状态 | 链接 |
|------|--------|----------|----------|------|------|
| 1 | #28599 | 将模型容量耗尽可能（HTTP 429）分类为终端错误，禁止客户端无限重试 | 解决预览模型容量不足时客户端永久卡死的问题 | 已合并（CLOSED） | [链接](https://github.com/google-gemini/gemini-cli/pull/28599) |
| 2 | #28603 | 沙箱Dockerfile从Node 20升级到Node 22，规避EOL组件安全风险 | 解决沙箱运行时使用已终止支持Node版本的安全合规问题 | 待合并 | [链接](https://github.com/google-gemini/gemini-cli/pull/28603) |
| 3 | #28566 | 将`InvalidStreamError`的详细错误信息 propagated 到UI层，给用户提供针对性修复建议（如推荐使用`/compress`压缩上下文） | 提升空响应、上下文溢出等错误的用户

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

用户现在需要我根据给的GitHub Copilot CLI的数据生成2026-07-31的社区动态日报，首先得按要求分的几个部分来，首先得准确对应给的数据哦。

首先第一部分今日速览，要抓最重要的，比如今天有两个新版本发布？哦对，v1.0.77-0和v1.0.76？还有 Issues 那边有几个高优的，比如大附件卡会话的问题关了，还有新功能比如web OAuth登录、grok4.5支持、插件开关控制，还有几个高赞高互动的Issue，比如重写功能不用git的问题，还有子代理无响应的，还有终端兼容的问题这些。速览要2-3句，得概括：比如今日Copilot CLI发布v1.0.77-0与v1.0.76两个版本，新增Web OAuth登录、grok-4.5模型支持、插件/工具开关控制等核心功能；社区侧高优历史问题“大附件卡死会话”已修复关闭，同时新增多起终端兼容、子代理稳定性、功能 parity 相关的反馈，整体围绕交互体验、兼容性与功能扩展推进。

然后第二部分版本发布，因为有两个新版本，得分开写清楚。首先v1.0.77-0是今天发的吧？对，最新 Releases 里第一个是v1.0.77-0，然后v1.0.76是2026-07-29的但属于过去24小时的？哦对， Releases 是过去24小时的，所以两个都要列。v1.0.77-0的更新：默认启用本地交互终端的Web OAuth登录流程，支持手动切换Web/设备码模式，新增对grok-4.5模型的支持，还有沙箱路径限制扩展，不过哦用户给的v1.0.77-0的Added里写的是“Support enfor”？哦应该是打漏了，结合v1.0.76里的“Sandbox denied paths are enforced for relative and symlinked entries on macOS and Linux”，哦可能是v1.0.77-0补全了沙箱的 enforcement？对，还有v1.0.76的更新：新增/plugins下对插件、指令、Agent、LSP服务器、钩子的启用/禁用控制，支持grok-4.5模型（哦对v1.0.76也有？哦可能是v1.0.76先加的支持，v1.0.77-0补了登录和沙箱？然后v1.0.76还有沙箱对macOS/Linux相对路径和符号链接的拒绝规则强制执行，还有未发送的提示文本保留？哦对用户给的是“Unsent prompt text now stays”，应该是保留。然后每个版本要标清楚发布时间和链接？哦对要附GitHub链接， Releases 的链接是https://github.com/github/copilot-cli/releases 这样？或者具体版本的？比如v1.0.77-0的链接是https://github.com/github/copilot-cli/releases/tag/v1.0.77-0，v1.0.76是https://github.com/github/copilot-cli/releases/tag/v1.0.76 对的。

第三部分社区热点Issues，要挑10个最值得关注的，得按重要性排序，先看高赞的，高互动的，高影响的。首先第一个是#3767，已经关了， Oversized attachment wedges session，这个是高优的，因为之前大附件直接卡死会话无恢复，现在关了说明修复了，很重要，影响所有传附件的用户，👍1，13条评论，创建了快俩月了，现在关了。然后第二个是#1381，OPEN的，高赞啊，👍10， Rewind不能用因为不在git仓库，很多人用其他VCS比如jj，这个需求很强烈，4条评论，创建了5个月了还在，说明优先级高。第三个是#4295，OPEN的，AI Credits近限警告，需求是和VS2026的功能对齐，8条评论，很多人需要这个额度提醒，避免超支。第四个是#4293，OPEN的，子代理全工具权限时无响应，这个是核心功能bug，影响用task工具的用户，2条评论，刚创建两天。第五个是#4299，OPEN的，长会话输入延迟越来越高，影响长时间使用的开发者，👍1，刚创建，高频痛点。第六个是#4258，CLOSED的，自定义BYOK提供者时-i启动提示被忽略，这个是针对企业用户的，BYOK是很多企业需要的，3条评论，已经修复了。第七个是#4266，CLOSED的，v1.0.74退出无退出屏幕，影响会话管理的，2条评论，已经修复。第八个是#4296，OPEN的，iTerm2的Cmd+V粘贴失效，macOS用户高频痛点，刚创建的。第九个是#4300，OPEN的，BYO-K支持Bearer Token认证，企业合规需求的，刚创建的。第十个是#4301，OPEN的，MCP工具的anyOf数组/字符串参数被错误序列化，影响用MCP集成的开发者，刚创建的。哦对每个要说明为什么重要，社区反应，还有链接。对了还要注意区分OPEN和CLOSED的，已经修复的要说明状态。

然后第四部分重要PR进展，哦用户给的数据里最新 Pull Requests 过去24小时是0条？哦对，给的PR部分是“共 0 条 无”，那怎么办？哦对，用户给的数据里PR过去24小时没有更新的，那这部分要说明“过去24小时内无新增/更新的Pull Request，核心功能迭代均在版本发布中落地”？哦对，不能瞎编，要基于给的数据，用户给的PR部分就是0条，所以要如实写，说明过去24小时无PR更新，版本发布的功能已经合并。

第五部分功能需求趋势，要从所有Issues里提炼，比如：1. 企业级功能扩展：BYOK/Bearer Token认证、AI Credits额度提醒、沙箱工具选择性启用，都是面向企业用户的合规与成本管理需求；2. 兼容性优化：跨终端（SSH、iTerm2、MobaXterm等）、跨VCS（非git仓库的Rewind支持）、MCP工具参数兼容，覆盖不同使用场景的开发者；3. 交互与稳定性：Web OAuth登录提升本地体验、长会话性能优化、子代理稳定性、输入延迟降低，核心使用体验的打磨；4. 模型支持：新增grok-4.5模型，扩展可用模型池。哦对还要对应具体的需求点，不要空泛。

第六部分开发者关注点，就是高频的痛点：1. 长会话性能问题：输入延迟、子代理卡顿、大附件卡死是高频反馈的性能类问题；2. 非标准环境兼容：SSH远程终端、非git仓库、第三方终端（iTerm2、MobaXterm）的适配问题是很多开发者的痛点；3. 企业级能力缺失：额度提醒、合规认证、工具权限管控是企业用户的核心诉求；4. 基础交互bug：粘贴失效、退出无提示、提示文本丢失等基础体验问题仍有不少反馈。

哦对了，每个部分要结构清晰，语言简洁专业，适合技术开发者，每个条目有GitHub链接。等下要注意不要出错，比如v1.0.77-0的Added里的“Support enfor”应该是打漏了，结合上下文是沙箱强制执行的对吧？对，因为v1.0.76里有沙箱路径的限制，v1.0.77-0应该是补全了强制执行的部分，所以可以写“补全沙箱规则的强制落地逻辑”，不要瞎猜，就说“新增对沙箱规则的强制执行支持（结合v1.0.76的沙箱路径限制能力补全落地逻辑）”？哦或者因为用户给的原数据是“Support enfor”，可能是输入的时候截断了，所以可以标注？或者就按能确定的写，比如v1.0.77-0的更新点：1. 默认启用本地交互终端的Web OAuth登录流程，保留设备码模式作为远程/无头终端默认，支持通过`--web-flow`/`--device-code`参数强制指定模式，交互式`/login`命令也支持模式选择；2. 新增对grok-4.5模型的支持；3. 补全沙箱拒绝规则的强制执行能力（原Release Notes存在截断）。这样比较严谨。

然后Issues部分的10个，要按重要性排序，比如高优的、高赞的、影响面广的排前面：
1. #3767 [CLOSED] 大附件导致会话永久卡死：这个是之前的高优bug，CAPI原生5MB限制，传大附件直接卡死无恢复，现在已修复关闭，13条评论，影响所有需要上传附件的用户，链接：https://github.com/github/copilot-cli/issues/3767
2. #1381 [OPEN] 非Git仓库无法使用Rewind功能：👍10，是目前社区点赞最高的开放需求，很多开发者使用jj等其他版本控制系统，Rewind是核心功能，需求迫切，4条评论，链接：https://github.com/github/copilot-cli/issues/1381
3. #4295 [OPEN] AI Credits额度近限提醒：需求与VS 2026的功能对齐，避免用户超出订阅额度产生额外费用，8条评论，社区关注度高，链接：https://github.com/github/copilot-cli/issues/4295
4. #4293 [OPEN] 全工具权限子代理无响应：核心功能bug，使用`task`工具启动全权限子代理时无任何输出/报错，仅 restricted-tool 类型正常，影响复杂任务自动化场景，2条评论，链接：https://github.com/github/copilot-cli/issues/4293
5. #4299 [OPEN] 长会话输入延迟递增：长时间运行会话（尤其是带后台Agent的）输入延迟越来越高，最终不可用，1👍，是最近反馈的高频性能痛点，链接：https://github.com/github/copilot-cli/issues/4299
6. #4258 [CLOSED] 自定义BYOK提供者时交互启动提示被忽略：企业用户核心场景，使用自带密钥（BYOK）模型提供者时，`-i`参数传递的启动提示无法自动提交，影响自动化流程，已修复，3条评论，链接：https://github.com/github/copilot-cli/issues/4258
7. #4266 [CLOSED] v1.0.74退出无会话ID显示：退出时（Ctrl+C/`/exit`）不显示会话ID，无法快速定位历史会话，已修复，2条评论，链接：https://github.com/github/copilot-cli/issues/4266
8. #4296 [OPEN] iTerm2下Cmd+V粘贴失效：macOS开发者高频痛点，仅能通过菜单栏粘贴，对比Claude Code CLI无此问题，影响基础输入体验，链接：https://github.com/github/copilot-cli/issues/4296
9. #4300 [OPEN] BYO-K支持Bearer Token认证：企业合规需求，部分企业环境禁用密钥认证，需要令牌认证满足自动化场景合规要求，链接：https://github.com/github/copilot-cli/issues/4300
10. #4301 [OPEN] MCP工具anyOf数组/字符串参数被错误序列化：MCP集成场景核心问题，声明为`array`或`string`联合类型的参数会被错误转为字符串，导致MCP工具调用失败，影响MCP生态扩展，链接：https://github.com/github/copilot-cli/issues/4301

哦对，这样就10个，都挺重要的，覆盖了不同场景。

然后重要PR进展，因为给的数据里过去24小时PR是0条，所以要如实写：“过去24小时内无新增或更新的Pull Request，本次版本发布的Web OAuth登录、模型支持、插件开关控制、沙箱规则补全等功能均已在对应版本中正式落地，可参考Release Notes查看变更详情：https://github.com/github/copilot-cli/releases”

然后功能需求趋势，提炼的话：
1. 企业级能力补齐：本周新增需求多围绕企业场景展开，包括合规认证（Bearer Token支持）、成本管控（AI Credits额度提醒）、工具权限管控（沙箱选择性启用工具），反映企业用户对Copilot CLI的采购意愿提升，对生产环境适配的要求提高。
2. 多环境兼容性优化：从SSH远程终端、非Git版本控制系统、第三方终端（iTerm2、MobaXterm）到MCP工具参数兼容，社区对非标准开发环境的适配需求强烈，copilot-cli正在向更广泛的开发场景覆盖。
3. 核心体验与稳定性打磨：Web OAuth登录、长会话性能优化、基础交互bug修复是当前迭代的重点，说明产品已经度过基础功能搭建阶段，进入体验优化期。
4. 模型生态扩展：新增grok-4.5模型支持，持续丰富可用模型池，满足开发者对不同模型的调用需求。

然后开发者关注点，就是高频的痛点：
1. 长会话性能问题：大附件卡死、输入延迟递增、子代理卡顿是最近反馈最多的性能类问题，长时间运行场景的稳定性仍需优化。
2. 非标准环境适配问题：非Git仓库、远程SSH终端、第三方终端的兼容问题是很多开发者的日常痛点，影响工具的使用门槛。
3. 企业场景能力缺口：额度提醒、合规认证、工具权限管控是企业用户部署的核心障碍，相关需求呼声越来越高。
4. 基础交互稳定性：粘贴失效、退出无提示、提示文本丢失等基础bug仍有不少反馈，影响日常使用流畅度。

哦对了，还要注意语言是中文，简洁专业，每个部分的结构要清晰，不要有冗余的内容。还有要符合日报的格式，开头可以有个标题：2026-07-31 GitHub Copilot CLI 社区动态日报，然后下面是各个部分。

等下还要检查所有的链接是不是正确，Issues的链接都是https://github.com/github/copilot-cli/issues/xxx，Releases的链接是对的。还有要注意给的数据里的时间，比如v1.0.76是2026-07-29发布的，属于过去24小时（因为日报是2026-07-31的，过去24小时就是2026-07-30到2026-07-31，所以v1.0.76是7-29的？哦等下用户给的Releases是“过去24小时”的，里面v1.0.76的发布时间是2026-07-29，那是不是用户给的数据里的过去24小时是相对于数据收集的时间？哦对，用户给的标题是“2026-07-31 的 GitHub Copilot CLI 社区动态日报”，数据来源是github.com/github/copilot-cli，所以 Releases 里标注了2026-07-29的v1.0.76属于过去24小时的发布，可能是时区问题？比如UTC时间的话，7-29的晚上发布，到7-31的凌晨就是过去24小时？所以不用纠结，就按给的数据来，给的两个 Releases 都是过去24小时的，所以都要列。

还有Issues里的创建和更新时间，比如#4307是invalid的，就没选进10个，因为不重要。还有#2841是鼠标滚轮在SSH里不能用，那个是不是可以换掉哪个？哦#2841的👍是0，而且创建是4月的，更新是7-30，但是影响面是SSH用户，不过我们选的10个里已经有更紧急的，比如#4301的MCP问题是更核心的，所以没问题。

哦对了，版本发布里的v1.0.76的“Unsent prompt text now stays”应该是“未发送的提示文本现在会保留”，对，就是输入的时候没发出去的提示，退出或者什么的不会丢，保留下来。

还有v1.0.76里的“Support enfor”哦不，v1.0.77-0里的，哦用户给的v1.0.77-0的Added里是“Support enfor”，v1.0.76里有“Sandbox denied paths are enforced for relative and symlinked entries on macOS and Linux”，所以应该是v1.0.77-0补全了沙箱的强制执行，所以就写“补全沙箱拒绝规则的强制执行能力”就可以，或者如果怕不准的话，就写“新增沙箱规则强制执行支持（原Release Notes存在内容截断）”，这样更严谨。

还有今日速览，要更准确一点：“今日Copilot CLI连续发布v1.0.76与v1.0.77-0两个版本，新增Web OAuth登录、grok-4.5模型支持、插件/工具开关控制等核心能力；社区侧高优历史问题「大附件导致会话永久卡死」已正式修复，同时新增多起终端兼容、子代理稳定性、企业级功能 parity 相关反馈，整体迭代重点围绕体验优化与场景覆盖展开。” 对，这样更准确。

然后重要PR进展那里，因为确实没有PR，所以要明确说，不要编，就说“过去24小时内无新增或更新的Pull Request，本次版本发布的所有功能均已在对应Release中正式上线，可查阅版本 release 页面获取完整变更记录：[Copilot CLI Releases](https://github.com/github/copilot-cli/releases)” 这样就可以了。

还有功能需求趋势里，要结合具体的Issue，比如提到企业级能力的时候，对应#4295、#4298、#4300这些Issue，提到兼容性的时候对应#1381、#2841、#4296这些，这样更真实。

哦对了，开发者关注点里，还要提到比如沙箱路径限制的问题，就是v1.0.76里的Windows不能按路径拒绝，这个也是开发者反馈的？哦对，v1.0.76里说“Windows cannot deny per path”，这个也是痛点，不过已经在新版本里说明了限制，所以可以提一下“跨平台能力差异：沙箱路径拒绝规则当前仅支持macOS/Linux，Windows平台能力缺失，也是部分开发者的关注点”。

等下再调整一下各个部分，确保结构清晰，内容准确，符合要求：

首先标题：
# 2026-07-31 GitHub Copilot CLI 社区动态日报

然后1. 今日速览
> 今日Copilot CLI连续发布v1.0.76与v1.0.77-0两个版本，新增Web OAuth登录、grok-4.5模型支持、插件/工具开关控制等核心能力；社区侧高优历史问题「大附件导致会话永久卡死」已正式修复关闭，同时新增多起终端兼容、子代理稳定性、企业级功能对齐相关反馈，整体迭代重点围绕体验优化与多场景覆盖展开。

2. 版本发布
> 过去24小时内共发布2个正式版本，核心更新如下：
> - **v1.0

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-07-31）
---

## 1. 今日速览
过去24小时Kimi Code CLI无新版本发布，社区核心动态围绕3条Issue更新与1条核心修复PR推进：跨会话记忆系统需求是当前讨论热度最高的功能议题，同时社区反馈了两类高优先级阻塞Bug（LLM 429限流崩溃、Windows平台CLI间歇性冻结），另有修复钩子强引用丢失问题的PR待合并且。

---

## 2. 版本发布
过去24小时无新版本发布，当前各平台最新稳定版本为：
- macOS：v1.49.0
- Windows：v0.29.2

---

## 3. 社区热点 Issues
> 注：本次统计的24小时更新窗口内共3条Issue更新，无其他近期高热度Issue，以下为全部核心社区议题：
1. **Issue #1283 [enhancement] 功能需求：跨会话记忆系统**  
   链接：https://github.com/MoonshotAI/kimi-cli/issues/1283  
   重要性与社区反应：该需求自2026年2月提出后于昨日更新，累计获得7条评论，是当前社区讨论热度最高的功能需求。用户希望实现「AI自动管理上下文记忆+用户自定义指令记忆」双模式，解决每次启动会话丢失项目开发模式、个人使用偏好的核心痛点，直接提升CL

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 2026-07-31
> 数据来源：https://github.com/anomalyco/opencode

---

## 1. 今日速览
今日 OpenCode 发布 v1.18.10 版本，核心新增 Modal 模型自动发现能力，桌面端优化了附件管理、通知交互与 Tab 控件体验。社区层面最受关注的是 GPT-5.6 Sol 模型服务过载问题，同时版本升级兼容性、付费权益校验、跨平台适配等问题仍为反馈高频点；PR 侧重点聚焦 TUI 体验优化、会话管理修复与 Web 工具合规性改进。

---

## 2. 版本发布
### v1.18.10（2026-07-31 发布）
| 模块 | 更新内容 |
|------|----------|
| Core | 新增 Modal 模型自动发现能力，无需手动配置即可识别可用 Modal 模型 |
| Desktop | 1. 禁止重复添加同一附件；2. 常驻新建会话按钮；3. 优化 Toast 通知的堆叠、关闭逻辑与移动端布局；4. 细化 Tab 悬停、激活态交互体验 |

---

## 3. 社区热点 Issues（Top 10）
| 排名 | 编号 | 状态 | 标题 | 作者 | 互动量 | 重要性说明 |
|------|------|------|------|------|--------|------------|
| 1 | #39653 | OPEN | GPT-5.6 Sol 服务过载报错 | akhansari | 评论15 👍10 | 过去24小时评论数最高的 issue，大量用户反馈使用 Sol 模型时反复出现服务端过载错误，Pi、Codex 等其他模型无此问题，直接影响依赖 Sol 模型的用户日常工作流，社区已多人确认问题普遍存在。 |
| 2 | #37762 | OPEN | Ollama 本地模型响应异常 | jcrosby10 | 评论8 👍0 | 64G 内存+4G 显存的高配机器使用 Ollama 本地模型时仍出现无响应问题，用户为避免云服务限速选择本地部署，该问题直接打击本地模型使用信心，反馈用户多为进阶开发者。 |
| 3 | #39288 | OPEN | 升级 v1.18.8 后启动报错 | jeffwood-lab | 评论6 👍1 | 升级后出现 `AutoScroller plugin depends on Scroller plugin` 插件依赖错误，新版本用户升级后直接无法使用，属于严重的版本兼容性故障。 |
| 4 | #38655 | OPEN | 无法切换 Plan/Build 模式 | saharmestiri-blip | 评论5 👍0 | v1.18.4 后 Plan 模式无法激活，默认强制进入 Build 模式，影响核心编码工作流，大量用户依赖 Plan 模式做架构设计与需求拆解。 |
| 5 | #39207 | OPEN | GitHub OAuth 登录失败 | asmartin-ai | 评论3 👍0 | 新用户使用 GitHub 登录时出现 SQL 报错，原因是回调时 email 参数为空导致 `user` 表更新失败，直接阻断新用户注册 onboarding 流程。 |
| 6 | #39399 | OPEN | [需求] 新增简单聊天模式 | 0wwafa | 评论4 👍0 | 用户希望关闭工具调用能力，仅做纯对话交互，当前强制发送工具调用不符合轻量对话场景的需求，获得大量纯文本交互需求用户的关注。 |
| 7 | #39434 | OPEN | Web 端打开项目对话框无目录 | andrianm28 | 评论3 👍0 | Web 端“打开项目”功能始终显示“无文件夹”，用户无法在 Web 端选择工作目录，直接阻断 Web 端新用户使用。 |
| 8 | #39165 | OPEN | 切换模型后会话崩溃 | amorales1-uscs | 评论3 👍0 | 会话中使用 `/model` 切换模型后，下一次发送消息会触发 SQLite `NOT NULL` 约束报错，会话数据损坏且无法继续输入，存在会话数据丢失风险。 |
| 9 | #39742 | OPEN | 付费订阅后仍提示额度超限 | kirstyjhawker-hms | 评论2 👍0 | 用户订阅 Go/Zen 服务后仍被提示“免费额度已用尽”，无法使用付费权益，属于账号计费类的严重故障，直接影响付费用户体验。 |
| 10 | #39368 | OPEN | [需求] 新增无障碍 TUI 模式 | miguel-cinsfran | 评论3 👍0 | 屏幕阅读器用户（NVDA 等）无法使用当前 TUI 模式，提出可配置的无障碍适配需求，覆盖特殊用户群体的使用诉求。 |

---

## 4. 重要 PR 进展（Top 10）
| 排名 | 编号 | 状态 | 标题 | 内容说明 |
|------|------|------|------|----------|
| 1 | #39758 | OPEN | fix(app): 修复 Web 项目选择器无目录问题 | 直接关闭热 issue #39434，修复 Web 端 `GET /file` 接口缺失路径参数导致的目录列表加载失败，恢复 Web 端用户选择项目的能力。 |
| 2 | #39760 | CLOSED | feat(opencode): 新增 Claude 订阅认证 | 已合并关闭，新增 Anthropic Claude 订阅 OAuth 认证流程，支持 Claude 付费用户直接授权登录，无需手动配置 API Key，大幅降低 Claude 模型的使用门槛。 |
| 3 | #39761 | OPEN | refactor(core): 隔离 AI SDK 原生映射 | 将 AI SDK 到原生包模型的映射逻辑独立为专用模块，每个支持的模型包拆分为独立分支，为后续新增模型提供商、做 provider 级定制化映射提供架构基础。 |
| 4 | #39757 | OPEN |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

 ### 2026-07-31 Pi 社区动态日报

#### 1. 今日速览
Pi 社区今日发布了 v0.83.0 版本，引入了多项新功能和改进。同时，社区活跃度高，讨论热点集中在增强代理消息格式、OAuth 令牌处理和终端兼容性等问题上。

#### 2. 版本发布
- **v0.83.0**:
  - **新特性**:
    - 导出外部客户端凭证：`pi auth print-api-key` 和 `pi auth print-bearer-token` 命令可以导出配置的凭证，并具有自动 OAuth 刷新和最小有效性强制执行功能。
    - Headless OpenRouter 登录：通过 SSH 完成 `/login` 流程，只需粘贴重定向 URL。

#### 3. 社区热点 Issues
1. **#6747 An API for enhancing agent message markdown**
   - **重要性**: 提议增加扩展代理消息格式的 API，以支持更灵活的 Markdown 渲染。
   - **社区反应**: 12 个评论，2 个赞同。

2. **#5871 Anthropic OAuth-token detection is hardcoded to sk-ant-oat, not configurable**
   - **重要性**: 建议改进 Anthropic 令牌检测，使其可配置。
   - **社区反应**: 8 个评论，0 个赞同。

3. **#7194 [bug] Pi does a full re-render every 1s when an active tool card scrolls outside the viewport**
   - **重要性**: 报告了在工具卡滚出视口时 Pi 每秒全局重绘的问题。
   - **社区反应**: 7 个评论，1 个赞同。

4. **#7161 [OPEN] anthropic-messages never sends x-client-request-id, unlike all OpenAI paths**
   - **重要性**: 描述了 Anthropic 消息路径不发送 `x-client-request-id` 的问题，影响会话关联。
   - **社区反应**: 6 个评论，0 个赞同。

5. **#6300 [OPEN] [bug] Windows: Input line is redrawn on every keystroke (each character appears on a new line)**
   - **重要性**: Windows 环境下每次按键都会重绘输入行的问题。
   - **社区反应**: 6 个评论，0 个赞同。

6. **#5990 [CLOSED] [bug] TUI flickers when confirm/select dialog content is taller than terminal height**
   - **重要性**: 对话框内容高于终端高度时 TUI 闪烁的问题。
   - **社区反应**: 6 个评论，3 个赞同。

7. **#7007 [CLOSED] [bug, no-action] Concurrent inline `ctx.ui.custom({ overlay: false })` prompts deadlock**
   - **重要性**: 描述了并发调用 `ctx.ui.custom` 的死锁问题。
   - **社区反应**: 5 个评论，0 个赞同。

8. **#7047 [OPEN] [bug] Gemini 3.x tool-call IDs stripped from function calls/responses (google-generative-ai)**
   - **重要性**: 报告了 Gemini 3.x 会话中工具调用 ID 被移除的问题。
   - **社区反应**: 5 个评论，1 个赞同。

9. **#6502 [CLOSED] [bug] Windows Terminal scrolls to the top when pi-tui sends ESC[3J**
   - **重要性**: 描述了在 Windows Terminal 中 pi 发送 ESC[3J 时滚动到顶部的问题。
   - **社区反应**: 5 个评论，5 个赞同。

10. **#7187 [CLOSED] [bug] Silent crash caused by inconsistent error handling and schema validation**
    - **重要性**: 由于错误处理和 schema 验证不一致导致的静默崩溃问题。
    - **社区反应**: 4 个评论，0 个赞同。

#### 4. 重要 PR 进展
1. **#7348 feat(client): add runtime-neutral session client**
   - **内容**: 添加了一个运行时中立的会话客户端包。
   
2. **#7346 feat(ai): share runtime schemas with protocol**
   - **内容**: 共享 `pi-ai` 和 `pi-protocol` 之间的 TypeBox 架构。
   
3. **#7339 DRAFT: add openai background mode responses**
   - **内容**: 实现 OpenAI 的后台模式响应。
   
4. **#6534 feat(ai): add developer message role**
   - **内容**: 添加开发者消息角色。
   
5. **#7011 fix(coding-agent): share host modules with native esm extensions**
   - **内容**: 共享主机模块以解决 ESM 扩展的模块状态问题。
   
6. **#7148 feat(coding-agent): Experimental loadout management**
   - **内容**: 实验性负载管理功能，允许在会话中启用或禁用扩展。
   
7. **#7231 Markdown api**
   - **内容**: 实现了 Markdown API，关闭了 #6747。
   
8. **#7286 feat(ai): preserve structured metadata for Bedrock provider errors**
   - **内容**: 保留 Bedrock 提供者错误的结构化元数据。
   
9. **#7163 feat: search index sqlite**
   - **内容**: 添加了基于 SQLite 的搜索索引功能。
   
10. **#7306 fix(coding-agent): replace deprecated getModel in SDK example**
    - **内容**: 替换了 SDK 示例中的已弃用 `getModel` 导入。

#### 5. 功能需求趋势
- **代理消息格式化**：社区对代理消息的 Markdown 渲染和扩展有较高需求。
- **OAuth 令牌处理**：需要更灵活和可配置的 OAuth 令牌处理机制。
- **终端兼容性**：特别是在 Windows 和 Wayland 环境下的终端兼容性问题受到关注。

#### 6. 开发者关注点
- **性能优化**：多个 Issue 提到了性能问题，如重绘频率和响应延迟。
- **错误处理**：不一致的错误处理和 schema 验证导致了一些崩溃和问题。
- **跨平台支持**：特别是 Windows 和 Wayland 环境下的兼容性问题需要进一步改进。

---

希望这份日报对您有所帮助！如果有任何问题或反馈，请随时告知。

 

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

用户现在需要我根据给的GitHub数据生成2026-07-31的Qwen Code社区动态日报，首先得先理清楚结构，每个部分按要求来，还要准确用给的数据，不能瞎编。
首先第一块是今日速览，得抓重点：首先过去24小时有v0.21.1-nightly版本发，然后 Issues 有50条更新，PR 50条，重点的动态比如桌面端打包、Anthropic转换器修复、多后台代理协调问题、性能优化这些，用2-3句话，要概括。
然后第二块版本发布，现在有v0.21.1-nightly.20260730的发布，备注是release.yml生成的，然后What's Changed里的两个：一个是CI修复，给qwen-triage的容器任务加默认bash shell，另一个是web-shell的修复（不过数据里没写完，就如实说基于现有信息，per #7838的CI修复，web-shell相关调整待完整说明）。
第三块社区热点Issues，要挑10个最值得关注的，得按重要性和关注度来，比如：
1. #8124 那个启动banner顶部行丢失的P2 UI bug，评论8条是当天评论最多的，影响TUI启动体验， intermittent的，和待处理的provider更新相关，很重要。
2. #7982 那个降低provider分发延迟的性能优化P2，已经落地了测量阶段的PR#7994，有完整的基准测试和隔离对比，对响应速度提升关键，评论5条，已经关了？哦对是CLOSED，说明已经推进落地了。
3. #8083 核心架构问题，derived Config的上下文所有权显式化，P1的core增强，评论5条，解决原型委托的隐患，影响子代理、内存作用域这些核心路径。
4. #4063 长期的架构Review问题，core+cli的14项结构性问题，其中类型系统被@google/genai绑架136个文件import，评论5条👍1，是阻塞长期架构优化的关键问题。
5. #8102 可信Agent运行时的确定性工具执行边界提案，P3安全相关，评论4条，提出把LM放在信任边界外，约束模型动作，是安全方向的重要提案。
6. #8097 多后台代理协调的bug，P2，评论3条，同时跑Explore子代理时send_message会重复工作、提前完成、非交互发送，影响多Agent场景的稳定性。
7. #8090 终端内联图片渲染的需求，P2特性，评论3条，支持kitty/iTerm2等主流终端，提升终端端的媒体体验，是平台能力扩展的重点需求。
8. #8138 Git worktree下settings写入错误到项目根的问题，P2 bug，评论3条，影响worktree隔离场景的配置正确性，和#8152的PR对应。
9. #7118 Windows独立安装器在PowerShell无法解析Get-FileHash时失败，P2平台bug，评论3条👍2，影响Windows用户的安装体验，是平台兼容性的高频问题。
10. #7966 用户问怎么获取会话中创建的文件，区分来源，评论5条，是用户侧高频的功能疑问，反映当前会话文件溯源能力缺失。
对，这10个，每个要说明为什么重要，社区反应，附链接。
然后第四块重要PR进展，挑10个重要的，对应 Issues 和需求的：
1. #8132 feat(desktop): 把Web Shell打包为生产级桌面应用，OPEN，评论多，把之前的Tauri PoC变成正式桌面端，复用Web Shell减少维护成本，是桌面端发布的重大进展，链接放上。
2. #7836 feat(serve): POST /session支持调用方传入sessionId，OPEN，autofix/takeover，修复之前忽略请求体sessionId导致静默丢弃的问题，影响服务端会话管理的正确性，评论对应之前的issue#7831。
3. #8166 fix(anthropic): 移除兄弟tool_use后修剪过期的thinking签名，OPEN，review/self-reported，修复#8162的bug，解决历史轮次压缩后残留无效thinking签名的问题，影响Anthropic模型的上下文正确性。
4. #8152 fix(acp): 隔离worktree会话的workspace设置和上下文文件解析，OPEN，review/self-reported，修复#8138的bug，让worktree下的settings和QWEN.md正确读取当前worktree的路径，不是项目根。
5. #8164 fix(anthropic): 清理tool_use.id/tool_result.tool_use_id，OPEN，review/self-reported，修复Anthropic转换器里的ID不符合规范的问题，保证和Anthropic API的兼容性。
6. #8077 fix(cli): 稳定thinking块高度，用内联Ctrl+O切换替换全屏覆盖层，OPEN，autofix/takeover，解决紧缩模式下频繁闪屏的问题（对应#4561的issue），提升TUI的渲染稳定性和用户体验。
7. #8056 fix(serve): 按选中的workspace隔离托管内存，OPEN，autofix/takeover，实现工作区级的内存remember/forget/dream操作，支持精确内存存储模式，解决多工作区内存隔离的问题。
8. #7818 feat(cli): /model加--compaction参数配置压缩模型，OPEN，让用户可以自定义聊天压缩用的模型，有三级回退链（compactionModel→fastModel→主模型），提升压缩场景的灵活性和稳定性。
9. #7206 fix(cli): 完成所有入口点的本地图片@路由，OPEN，autofix/takeover，让TUI、ACP、非交互CLI都支持本地图片引用，做边界校验、MIME检查等，丰富多模态交互能力。
10. #8167 fix(cli): 虚拟化历史模式下启用状态行文本选择，OPEN，解决虚拟滚动模式下状态栏文本无法选中的问题，提升终端交互的 usability。
对，这10个，每个说明功能/修复内容，附链接。
然后第五块功能需求趋势，从所有Issues里提炼：
1. 桌面端与平台体验：Web Shell打包桌面应用、终端内联图片渲染、Windows安装器兼容性修复，说明社区高度关注跨平台（尤其是桌面端、Windows）的体验优化，降低多端使用门槛。
2. 多Agent与后台执行：动态工作流路线图、多后台代理协调优化、子 agent 状态监控、托管内存按工作区隔离，说明社区对多Agent并发、后台任务管理、状态可观测性的需求强烈，是核心能力的扩展重点。
3. 架构稳定与兼容性：derived Config所有权明确、CLI/ACP解耦、Anthropic/Gemini转换器的兼容性修复，说明随着功能迭代，架构收口和跨服务/跨模型兼容性是社区关注的长期方向。
4. 会话与文件管理：会话文件溯源、worktree配置隔离、压缩模型自定义，说明用户对个性化配置、多场景（worktree）下的会话管理能力有持续需求。
然后第六块开发者关注点，总结痛点和高频需求：
1. TUI渲染稳定性：启动banner丢失、紧缩模式闪屏、VP模式光标溢出，是当前用户反馈最高的前端体验痛点，多集中在Windows和紧缩模式场景。
2. 多工作区场景的配置隔离：worktree下settings、上下文文件写入错误路径，是git工作流重度用户的常见问题，已经有多条相关Issue和PR跟进。
3. CI稳定性：过去24小时有多条E2E测试失败的CI告警，集中在权限控制、模型切换、子代理执行、文件系统操作等核心路径，需要尽快修复阻塞主分支合并。
4. 安装与平台兼容性：Windows独立安装器的PowerShell依赖问题、LMStudio桌面端集成失败，是Windows用户和本地模型用户的主要痛点，影响新用户接入。
然后还要注意语言是简洁专业的中文，适合技术开发者，每个条目附链接，数据要准确，不能瞎编，比如那个v0.21.1的web-shell修复数据里没写完，就如实说“另一项为Web Shell相关修复，完整说明待补充”，还有Issues里的评论数、状态都要准确，比如#7982是CLOSED，#8124是OPEN评论8条最多的。
哦对，今日速览要准确：2026年7月31日Qwen Code社区过去24小时共有50条Issue更新、50条PR更新，正式发布v0.21.1-nightly预览版本，核心动态包括桌面端打包能力落地、Anthropic模型转换器多项兼容性修复、多后台代理协调与可信运行时架构提案推进，同时仍有若干TUI渲染、Windows兼容性的待修复问题。
对，然后版本发布部分：### 版本发布
- 新预览版本：v0.21.1-nightly.20260730.1643a6c9a
  更新内容：
  1. CI流程修复：为`qwen-triage`的容器任务添加默认bash shell支持，修复容器环境下的任务执行兼容性问题（#7838）
  2. Web Shell相关调整，完整更新说明待补充
哦对，PR#7838就是那个CI的，所以对应上。
然后Issues部分要格式清晰，每个标优先级、状态、评论数、为什么重要、社区反应，然后链接。
哦对，用户给的Issues里#8124评论8条是最多的，所以放第一个，然后是#7966评论5条，#7982评论5条CLOSED，#8083评论5条P1，#4063评论5条👍1，然后后面的4个评论的都是3条的，选重要的。
然后PR部分要注意状态，OPEN还是CLOSED，比如#8157是CLOSED的，就不用放进去了，选OPEN的重要的。
还有功能需求趋势要从所有50条Issues里提炼，不能只看展示的，比如展示的有桌面端、多Agent、架构、会话管理、终端体验这些，所以总结出来。
开发者关注点也要从Issue的bug和需求里来，比如TUI闪屏、worktree配置问题、CI失败、Windows安装问题这些。
还要注意不要出现错误信息，比如数据里的PR评论数是undefined，就如实说，不用提，或者说暂无公开评论数据。
哦对，用户给的数据里PR的评论数都是undefined，所以就别说评论数了，就说状态和功能。
然后最后检查结构是不是符合要求：今日速览、版本发布、社区热点Issues（10个）、重要PR进展（10个）、功能需求趋势、开发者关注点，每个都有链接，语言专业简洁。
等下，有没有漏的？比如那个#7167是Fleet Shepherd Dashboard的，是自动维护的，不用放热点里，因为是自动生成的。还有那些CI失败的Issues，比如#8153、#8133、#8076这些，是CI告警，其实可以算在开发者关注点的CI稳定性里，不用单独放热点，因为热点是用户和开发者关注的功能、bug，CI的是内部流程的。
哦对，#7972是0.21.1崩溃3次，Windows的，这个可以放开发者关注点里，和Windows安装问题放一起。
现在整理成正式的日报：
首先标题是【2026-07-31 Qwen Code 社区动态日报】，然后开头可以加个数据说明：本日报基于 github.com/QwenLM/qwen-code 过去24小时（2026-07-30 ~ 2026-07-31）的公开数据生成。
然后第一部分今日速览：
> 过去24小时Qwen Code社区共更新50条Issue、50条PR，正式发布v0.21.1-nightly预览版本。核心进展包括生产级桌面端打包能力落地、Anthropic模型转换器多项兼容性修复、可信Agent运行时架构提案推进，同时TUI渲染稳定性、Windows平台兼容性等问题仍待解决。
对，2-3句话，符合要求。
然后第二部分版本发布：
### 版本发布
- 新预览版本：`v0.21.1-nightly.20260730.1643a6c9a`
  核心更新：
  1. CI流程优化：为`qwen-triage`流水线的容器任务添加默认bash shell支持，修复容器环境下任务的执行兼容性问题（对应PR #7838）
  2. Web Shell功能调整，完整更新日志待补充
对，准确，因为数据里What's Changed就写了这两个，第一个是PR#7838，第二个没写完，就如实说。
然后第三部分社区热点Issues，挑10个，每个标【编号】【状态】【优先级】然后说明：
### 社区热点 Issues（共50条更新，筛选10条高关注度）
1. [Issue #8124](https://github.com/QwenLM/qwen-code/issues/8124) |  OPEN | P2 | 评论8条（当日最高）
   **重要性**：TUI启动banner（ASCII Logo+版本信息块）首次渲染时偶发顶部3行丢失，是影响用户第一印象的高频UI bug，且与待处理的provider更新流程相关，可能引发连锁问题。
   **社区反应**：当日新增多条评论，用户反馈偶发概率较高，期待尽快修复。
2. [Issue #7982](https://github.com/QwenLM/qwen-code/issues/7982) | CLOSED | P2 | 评论5条
   **重要性**：针对provider即时提示分发延迟的性能优化需求，已完成测量阶段落地（PR #7994），包含完整的Linux基准测试、trace剖析和单因素隔离对比，是提升交互响应速度的核心优化。
   **社区反应**：测量结果已得到社区认可，优化内容已合入主分支。
3. [Issue #8083](https://github.com/QwenLM/qwen-code/issues/8083) | OPEN | P1 | 评论5条
   **重要性**：核心架构提案，要求将派生`Config`实例的上下文所有权从隐式的`Object.create`原型委托改为显式声明，解决子代理、作用域内存、审批模式覆盖等场景的状态管理隐患。
   **社区反应**：作为P1级核心问题，已收到多条架构层面的讨论反馈。
4. [Issue #4063](https://github.com/QwenLM/qwen-code/issues/4063) | OPEN | 待分类 | 评论5条 | 👍1
   **重要性**：长期跟踪的`core+cli`架构Review问题，梳理出14项结构性问题，其中核心类型系统被`@google/genai`绑架（136个文件直接依赖该包）是阻塞长期迭代的架构级瓶颈。
   **社区反应**：获得社区开发者高赞，是长期架构优化的核心参考issue。
5. [Issue #8102](https://github.com/QwenLM/qwen-code/issues/8102) | OPEN | P3 | 评论4条
   **重要性**：可信Agent运行时方向提案，要求将大模型置于信任边界外，由运行时对模型输出的动作做确定性约束、授权、观测和评估，是AI安全方向的重要探索。
   **社区反应**：收到安全方向开发者的关注，正在讨论落地路径。
6. [Issue #8097](https://github.com/QwenLM/qwen-code/issues/8097) | OPEN | P2 | 评论3条
   **重要性**：多后台Explore子代理协调bug，同时运行多个子代理并使用`send_message`通信时，会出现父代理重复执行子任务、任务提前完成、非交互发送消息等问题，严重影响多Agent场景的稳定性。
   **社区反应**：多Agent场景的用户反馈强烈，已有初步排查方向。
7. [Issue #8090](https://github.com/QwenLM/qwen-code/issues/8090) | OPEN | P2 | 评论3条
   **重要性**：终端内联图片渲染需求，要求支持kitty、iTerm2、WezTerm、Ghostty、Warp等主流终端的图片内联显示，是提升终端端多模态体验的核心能力。
   **社区反应**：收到终端重度用户的关注，已有多条相关讨论。
8. [Issue #8138](https://github.com/QwenLM/qwen-code/issues/8138) | OPEN | P2 | 评论3条
   **重要性**：Git worktree场景下配置写入错误bug，在worktree中修改项目级设置时，会错误写入项目根目录的`.qwen/settings.json`而非当前worktree的配置文件，破坏worktree的配置隔离能力。
   **社区反应**：git工作流重度用户反馈集中，已有对应PR #8152跟进修复。
9. [Issue #7118](https://github.com/QwenLM/qwen-code/issues/7118) | OPEN | P2 | 评论3条 | 👍2
   **重要性**：Windows独立安装器兼容性bug，当PowerShell无法解析`Get-FileHash`命令时，安装 SHA-256 校验失败，导致Windows用户无法使用独立安装包安装。
   **社区反应**：Windows用户反馈较多，是提升Windows端安装体验的关键问题。
10. [Issue #7966](https://github.com/QwenLM/qwen-code/issues/7966) | OPEN | 问题咨询 | 评论5条
    **重要性**：用户咨询会话中创建的文件溯源能力，当前无法区分工作区文件是哪个会话创建的、是直接写入还是代码运行生成，反映会话文件管理能力的缺失。
    **社区反应**：收到多条相似需求的跟帖，是用户侧的高频功能诉求。
对，这10个，每个都有链接，说明重要性和社区反应，符合要求。
然后第四部分重要PR进展，10个：
### 重要 PR 进展（共50条更新，筛选10条高价值PR）
1. [PR #8132](https://github.com/QwenLM/qwen-code/pull/8132) | OPEN
   **内容**：将之前的Tauri PoC落地为生产级桌面应用，复用现有Web Shell作为UI核心，仅维护原生生命周期和窗口管理，大幅降低桌面端的维护成本，同时支持启动恢复、工作区感知等原生能力。
2. [PR #7836](https://github.com/QwenLM/qwen-code/pull/7836) | OPEN | autofix/takeover
   **内容**：修复`POST /session`接口忽略请求体`sessionId`的bug，支持调用方传入自定义会话ID，避免静默丢弃用户指定的会话标识，修复Issue #7831描述的会话创建异常问题。
3. [PR #8166](https://github.com/QwenLM/qwen-code/pull/8166) | OPEN | review/self-reported
   **内容**：修复Anthropic模型转换器的历史轮次清理bug，当非最新助手轮次的`tool_use`被清理后，对应的过期`thinking`/`redacted_thinking`签名会被正确修剪，避免向Anthropic API发送无效上下文。
4. [PR #8152](https://github.com/QwenLM/qwen-code/pull/8152) |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

用户现在需要我根据给的GitHub数据生成2026-07-31的DeepSeek TUI（哦现在叫CodeWhale了对吧，因为旧包deepseek-tui废弃了，新的是codewhale）的社区动态日报，结构要清新，符合要求。首先先理清楚每个部分：

首先第一部分是今日速览，得抓住今天最核心的点：首先新版本v0.9.2刚发，然后项目正式从deepseek-tui更名为CodeWhale，旧包废弃，然后社区的v0.9.3路线图聚焦架构大重构、单二进制分发、TUI/CLI功能对齐，还有今天的讨论热点比如中文翻译争议、Windows兼容问题、编译性能这些，还有几个关键bug修复合并了。对，速览要2-3句话，涵盖最重要的：命名变更、新版本发布、v0.9.3核心重构方向推进、社区热点讨论和bug修复落地。

然后第二部分是版本发布，这里最新的是v0.9.2，要说明：正式更名Codewhale（Shannon Labs公开产品），旧npm包`deepseek-tui`废弃不再更新，所有命令、包名、发行资产统一用 lowercase 的`codewhale`技术标识。对，要准确，来源是release notes里的内容。

第三部分是社区热点Issues，挑10个最值得关注的，每个要说明重要性、社区反应，附链接。首先得排优先级：
1. 第一个肯定是那个EPIC问题#2870，是v0.9.3命令边界重构的总跟踪issue，关联核心重构#2791，19条评论，是当前最大的技术任务之一，很多重构PR都基于这个，所以重要，社区讨论最多。
2. 然后是#4022，v0.9.3 CLI/TUI子代理和运行时控制面的功能对齐，是产品体验的核心，因为之前TUI成了主要交互面，但云端/远程客户端也要用，所以这个很重要，7条评论，官方提的需求。
3. 接下来是#3306，v0.9.3单二进制分发的总umbrella issue，要删18个Rust包的重复，合并成一个可执行文件，解决当前monorepo编译慢、架构冗余的问题，官方提的，4条评论，影响所有用户。
4. 然后是#4949，中文“Constitution”翻译讨论，“宪法”还是“协作准则”，涉及政治敏感和本地化准确性，中文社区参与度高，4条评论，很多中文用户关注。
5. 第5个#2369，CodeWhale配置路径在Windows/Cygwin下的分片和静默迁移bug，影响Windows用户使用，有patch，7条评论，是跨平台兼容的核心bug。
6. 第6个#4906，要录真实 Codewhale 运行视频放官网和README，因为产品是视觉导向的，现在只有文字描述，新用户上手难，官方提的需求，3条评论，影响新手体验。
7. 第7个#4978，Anthropic API频繁报HTTP 400错误，type字段的问题，影响使用Anthropic兼容接口（比如OpenModel）的用户，今天刚提的，1条评论但影响实际使用。
8. 第8个#3957，v0.9.3拆分共享模态框基础设施和自有视图，解决当前TUI视图文件混乱的问题，2条评论，属于TUI架构重构的一部分。
9. 第9个#4807，TUI环境中的水母（jellyfish） ambient 渲染看起来像串起来的 blob， silhouettes 问题，属于产品细节体验，2条评论，dogfood 反馈的视觉问题。
10. 第10个#4986，官方提的第一方桌面应用需求，要替代纯TUI和浏览器客户端，给不想管理终端的用户更好的体验，今天刚提的，1条评论，是产品方向的重要需求。
哦对，还有那个#4991的编译时间讨论？不过#4986是需求，可能更有代表性？或者把#3921的性能问题放进去？不，刚才的10个够，每个要准确说为什么重要，社区反应，链接。

然后第四部分是重要PR进展，挑10个，也是按重要性排：
1. 首先#4982，release: finalize Codewhale v0.9.2，这个是v0.9.2发布的最终PR，合并了权限、Fleet、子代理、sandbox等一堆修复，刚关闭的，是今天版本发布的核心。
2. 然后#4992，Layer 5.2: 用户命令调度优先级、阴影和错误语义，是#2870 EPIC里的Layer 5.2，属于命令边界重构的核心部分，加了Gherkin测试，今天提的PR。
3. #4990，fix(devcontainer): 支持Windows开发，解决Windows下开发环境的HOME路径、Rust工具链、DBus头文件缺失的问题，今天提的，提升跨平台开发体验。
4. #4981，feat(tui): LaTeX环境、文本和命令支持数学渲染，扩展了现有的LaTeX渲染能力，支持环境块、常用命令、上下标等，今天提的，提升学术/技术用户使用体验。
5. #4985，feat(runtime-api): 按工作区范围筛选任务列表，给`GET /v1/tasks`加了可选的workspace过滤器，GUI客户端可以正确筛选任务，今天提的，支持桌面/GUI客户端开发。
6. #4979，fix(tui): 在转向前分离前台shell，解决用户在前台Bash阻塞时输入消息导致的问题，关联#4930，今天关闭的，修复了高频交互bug。
7. #4977，fix(tui): 让AltGr输入的"/"进入编辑器而不是打开帮助，修复Windows巴西ABNT2布局等非美标键盘的输入问题，今天更新的，提升跨平台键盘兼容性。
8. #4980，docs(permissions): 发布并锁定授权顺序，把工具准入、钩子、权限规则的优先级用合同测试锁定，今天关闭的，补全了权限文档和测试。
9. #4984，fix runtime config持久化和工作区任务范围，把GUI相关的TUI运行时API rebase到最新main，修复配置持久化和任务筛选，今天关闭的，支撑GUI开发。
10. #4983，test(tui): 移除技能视口排序假设，修复技能管理的PTY测试，避免假阳性，今天关闭的，提升测试稳定性。
对，这些是重要的，每个说明功能/修复内容，链接。

然后第五部分是功能需求趋势，从所有Issues里提炼，要准确：首先第一是**架构精简与单二进制分发**，多个issue都提到要合并18个Rust包、删除重复代码，把TUI、运行时、CLI都打包成一个可执行文件，解决编译慢、部署复杂的问题。第二是**多端体验对齐**，要求TUI、CLI、未来桌面/GUI客户端的功能 parity，尤其是子代理控制、任务管理这些核心交互，不能只在TUI里可用。第三是**跨平台兼容性优化**，Windows/Cygwin的配置路径、键盘输入（AltGr）、开发环境支持都是高频问题，社区对Windows体验的关注度很高。第四是**上下文与性能优化**，多个issue聚焦prompt裁剪、技能扫描性能、编译速度优化，降低资源占用提升响应速度。第五是**本地化与国际化完善**，除了翻译争议，还有新增韩语、越南语、繁体中文的locale支持，完善多语言体验。第六是**学术/技术场景增强**，LaTeX渲染支持、代码编辑预览优化，面向科研、开发用户的需求。

第六部分是开发者关注点，总结痛点和高频需求：首先是**编译效率问题**，#4991的讨论提到当前TUI crate是单体，编译时间很长，开发者等待编译的成本高，很多人在讨论增量编译、模块拆分优化。第二是**Windows开发体验差**，配置路径混乱、输入bug多、开发环境配置复杂，Windows开发者反馈频繁。第三是**架构重构的协调成本**，v0.9.3涉及大量模块拆分、边界重构，需要很多层级的PR协调，贡献者需要跟进EPIC的进度避免重复工作。第四是**测试稳定性**，很多PTY测试有假设性逻辑，容易出现假阳性，需要贡献者补充更多跨场景的测试。第五是**迁移路径清晰度**，旧`deepseek-tui`用户迁移到`codewhale`的文档和工具还不完善，新用户容易困惑。

现在要注意链接都是对的，比如Issue的链接都是Hmbown/CodeWhale的，PR也是。语言要简洁专业，适合技术开发者，每个条目有链接。还要注意项目已经更名Codewhale了，不要还叫DeepSeek TUI？哦用户标题是DeepSeek TUI社区动态，但是实际上项目已经更名了，要在速览里说明：原DeepSeek-TUI项目已正式更名为**Codewhale**（Shannon Labs 公开产品），旧npm包`deepseek-tui`已废弃，本次日报基于更名后的仓库`Hmbown/CodeWhale`数据生成。

哦对，用户给的标题是DeepSeek TUI，但是实际数据里已经是CodeWhale了，所以要先说明这个情况，避免混淆。

现在组织语言：

首先标题：# 2026-07-31 Codewhale（原DeepSeek-TUI）社区动态日报
然后前面加个说明：> 注：原DeepSeek-TUI项目已正式更名为Codewhale（Shannon Labs 公开产品），旧npm包`deepseek-tui`已废弃且停止更新，本次日报基于更名后仓库 [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) 的公开数据生成。

然后第一部分：## 1. 今日速览
今天Codewhale正式发布v0.9.2版本，完成项目更名及旧包废弃迁移；v0.9.3架构重构路线持续推进，核心EPIC、单二进制分发、CLI/TUI功能对齐等多个高优议题进入落地阶段；社区同步围绕中文文档翻译、Windows兼容性、Anthropic API报错等议题展开讨论，多个高频交互bug已完成修复合并。

第二部分：## 2. 版本发布
### v0.9.2 正式发布
本次版本完成项目品牌更名：所有命令行、npm包、发行资产统一使用小写技术标识`codewhale`， legacy npm包`deepseek-tui`正式废弃，不再接收后续更新。版本同步修复了权限校验、Fleet配置持久化、子代理监管、沙箱逻辑、 ambient 渲染 silhouette 等一系列问题，为v0.9.3大版本重构打下基础。
> 链接：[v0.9.2 Release Notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.2)

第三部分：## 3. 社区热点 Issues（共26条更新，筛选10个核心议题）
1. **[EPIC] #2870 命令边界重构跟踪**
   关联v0.9.3核心重构议题#2791，是所有小粒度重构层的总跟踪issue，目前已有19条评论，多个子PR基于该EPIC的分层要求推进，是当前社区最大规模的技术任务，贡献者需优先对齐该EPIC的进度要求。
   > 链接：[Hmbown/CodeWhale Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)
2. **#4022 v0.9.3 CLI/TUI子代理与运行时控制面对齐**
   官方提报的高优需求：目前子代理状态查看、展开/折叠、取消等控制能力仅嵌入TUI侧边栏，要求后续将控制面抽象为通用能力，支持云应用、远程工作台等多端复用，避免功能仅被TUI独占。
   > 链接：[Hmbown/CodeWhale Issue #4022](https://github.com/Hmbown/CodeWhale/issues/4022)
3. **#3306 v0.9.3 单二进制分发重构**
   官方提报的重构总议题：当前main分支存在18个Rust包、约77万行代码，其中87%集中在`codewhale-tui` crate，存在大量运行时、工具、配置逻辑重复。目标是将所有能力收敛为单个可执行文件，简化部署和分发流程。
   > 链接：[Hmbown/CodeWhale Issue #3306](https://github.com/Hmbown/CodeWhale/issues/3306)
4. **#4949 中文“Constitution”翻译方案讨论**
   因文档中核心术语“Constitution”的中文翻译存在争议，“宪法”体现基础性但存在政治敏感风险，“协作准则”更贴切但弱化了权威性，目前中文社区用户正在积极讨论最优翻译方案，是当前本地化议题的核心。
   > 链接：[Hmbown/CodeWhale Issue #4949](https://github.com/Hmbown/CodeWhale/issues/4949)
5. **#2369 Windows/Cygwin配置路径分片与静默迁移bug**
   跨平台核心bug：Windows和Cygwin环境下配置、密钥路径的home目录解析规则不一致，旧版本迁移逻辑存在静默错误，可能导致用户配置丢失。已有社区用户提交patch，影响所有Windows平台用户。
   > 链接：[Hmbown/CodeWhale Issue #2369](https://github.com/Hmbown/CodeWhale/issues/2369)
6. **#4906 录制真实运行视频用于官网和README**
   官方提报的体验优化需求：当前Codewhale是强视觉导向的终端产品，但官网和README仅用文字描述，新用户无法直观感知产品形态。要求录制真实运行会话视频、README GIF，降低新手入门成本。
   > 链接：[Hmbown/CodeWhale Issue #4906](https://github.com/Hmbown/CodeWhale/issues/4906)
7. **#4978 Anthropic兼容API频繁报HTTP 400错误**
   今天新提报的使用bug：使用`providers.openmodel`等Anthropic兼容接口时，频繁触发`'type' must be in ["enabled", "disabled", "auto"]`错误，重试后偶发恢复，影响使用Anthropic生态模型的用户。
   > 链接：[Hmbown/CodeWhale Issue #4978](https://github.com/Hmbown/CodeWhale/issues/4978)
8. **#3957 v0.9.3 拆分共享模态框基础设施与自有视图**
   v0.9.3 TUI重构议题：当前`views/mod.rs`混杂了模态框通用基础设施、自有视图、测试代码，且凭证输入等视图已出现provider特定渲染逻辑冗余，需要拆分提升可维护性。
   > 链接：[Hmbown/CodeWhale Issue #3957](https://github.com/Hmbown/CodeWhale/issues/3957)
9. **#4807 环境水母渲染 silhouette 优化**
   Dogfood反馈的视觉问题：当前终端环境的水母 ambient 效果仅由`o*`加单根触手组成，视觉上像串起来的blob而非水母，需要优化 silhouette 提升视觉效果。
   > 链接：[Hmbown/CodeWhale Issue #4807](https://github.com/Hmbown/CodeWhale/issues/4807)
10. **#4986 第一方桌面应用需求**
    今天新提报的产品需求：当前仅提供TUI和浏览器客户端，不希望管理终端、工作目录、后台进程的用户缺少合适的桌面端体验，要求开发类似Codex Desktop的第一方桌面应用，降低非技术用户的使用门槛。
    > 链接：[Hmbown/CodeWhale Issue #4986](https://github.com/Hmbown/CodeWhale/issues/4986)

第四部分：## 4. 重要 PR 进展（共21条更新，筛选10个核心提交）
1. **#4982 发布Codewhale v0.9.2**
   v0.9.2版本发布的最终PR，合并了权限校验、Fleet配置持久化、子代理监管/转向、sandbox逻辑、provider凭证UX、ambient silhouette等一系列修复，是今日版本发布的核心支撑。
   > 链接：[Hmbown/CodeWhale PR #4982](https://github.com/Hmbown/CodeWhale/pull/4982)
2. **#4992 Layer 5.2: 用户命令调度优先级、阴影与错误语义**
   命令边界重构EPIC#2870的子PR，新增用户命令覆盖内置 canonical 名称/别名、回退到内置命令、无效命令错误处理等场景的Gherkin验收测试，完善命令分发逻辑的契约。
   > 链接：[Hmbown/CodeWhale PR #4992](https://github.com/Hmbown/CodeWhale/pull/4992)
3. **#4990 修复Devcontainer以支持Windows开发**
   解决Windows下开发环境的共性问题：使用专用开发镜像包含Rust工具链、rustfmt、pkg-config、DBus头文件，用命名卷替代HOME目录绑定挂载，避免Windows HOME路径扩展错误，降低Windows贡献者的开发门槛。
   > 链接：[Hmbown/CodeWhale PR #4990](https://github.com/Hmbown/CodeWhale/pull/4990)
4. **#4981 TUI LaTeX渲染增强**
   扩展现有LaTeX数学渲染能力，新增环境块渲染、常用内联命令、重音命令、命令感知上下标、不区分大小写的环境匹配支持，提升学术、技术场景下的公式显示效果。
   > 链接：[Hmbown/CodeWhale PR #4981](https://github.com/Hmbown/CodeWhale/pull/4981)
5. **#4985 运行时API支持按工作区筛选任务列表**
   给`GET /v1/tasks`接口新增可选的`workspace`过滤器，任务摘要中新增工作区路径字段，GUI/桌面客户端可以正确按项目筛选任务列表，支撑多工作区场景下的任务管理。
   > 链接：[Hmbown/CodeWhale PR #4985](https://github.com/Hmbown/CodeWhale/pull/4985)
6. **#4979 修复前台shell阻塞时的转向逻辑**
   解决高频交互bug：当前台Bash命令阻塞（如`sleep 30`、`cargo build`）时，用户输入消息按回车会触发错误行为，现在会先将阻塞任务移至`/jobs`队列再执行转向，保留原有忙输入排队逻辑，提升交互流畅度。
   > 链接：[Hmbown/CodeWhale PR #4979](https://github.com/Hmbown/CodeWhale

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

 ### 2026-07-31 ComfyUI 社区动态日报

#### 1. 今日速览
今天 ComfyUI 社区没有新版本发布，但有24个新 Issues 被提交，涵盖了从模型加载问题到界面编辑器故障的多个方面。同时，有23个 Pull Request 被更新，包括对新模型支持和性能优化的改进。

#### 2. 版本发布
无新版本发布。

#### 3. 社区热点 Issues
1. **Issue #15100: Mess with stable versions**
   - **重要性**: 高
   - **描述**: 用户报告了在稳定版本中出现的自定义节点问题，社区已经有13条评论和5个赞。
   - **社区反应**: 用户们正在讨论如何禁用自定义节点以排除故障。

2. **Issue #15077: Image mask output is weird in all workflows**
   - **重要性**: 高
   - **描述**: 多种工作流中的图像掩码输出出现异常，社区已有12条评论和4个赞。
   - **社区反应**: 用户分享了截图并寻求解决方案。

3. **Issue #15116: GroupNodeHandler. getGroupData is not a function**
   - **重要性**: 中
   - **描述**: 升级到最新版本后，工作流无法运行，出现了函数不存在的错误。
   - **社区反应**: 开发者建议回退到旧版本以确认问题。

4. **Issue #15070: Cannot import C:\comfyui2025\ComfyUI\custom_nodes\ComfyUI-LTXVideo module**
   - **重要性**: 高
   - **描述**: 自定义节点导入失败，社区已有8条评论。
   - **社区反应**: 用户正在检查环境配置和自定义节点兼容性。

5. **Issue #15131: The mask editor is behaving abnormally**
   - **重要性**: 高
   - **描述**: 掩码编辑器出现异常行为，社区已有7条评论和1个赞。
   - **社区反应**: 用户报告了具体的操作步骤和期望行为。

6. **Issue #15060: Custom Combos are broken in subgraphs**
   - **重要性**: 中
   - **描述**: 子图中的自定义组合出现问题，社区已有7条评论和1个赞。
   - **社区反应**: 开发者建议禁用自定义节点以排查问题。

7. **Issue #15137: SDXL KSampler produces pure noise on RTX 4060 Ti**
   - **重要性**: 高
   - **描述**: 在新硬件上，SDXL 文本到图像生成产生纯噪声，社区已有6条评论。
   - **社区反应**: 用户提供了完整的复现步骤。

8. **Issue #15145: Custom node ComfyUI-LTXVideo won't install.**
   - **重要性**: 中
   - **描述**: 自定义节点安装失败，社区已有5条评论。
   - **社区反应**: 用户分享了安装过程中的错误信息。

9. **Issue #12225: AMD - flash attention install from source not detected**
   - **重要性**: 低
   - **描述**: 从源代码安装 flash attention 后未被 ComfyUI 检测到，社区已有3条评论。
   - **社区反应**: 用户寻求安装指导。

10. **Issue #14659: Sluggish speed and model unloading every run on Comfyui 0.24, 0.25. 0.26 with INT8-Fast on-the-fly.**
    - **重要性**: 中
    - **描述**: 在某些硬件上运行时性能变慢并且模型会定期卸载，社区已有3条评论和1个赞。
    - **社区反应**: 用户报告了具体的硬件配置和运行环境。

#### 4. 重要 PR 进展
1. **PR #15041: chore(openapi): sync shared API contract from cloud@55f5c22**
   - **内容**: 同步云端的共享 API 合约到核心代码库。
   
2. **PR #15156: feat: add Docker deployment and asset checklist**
   - **内容**: 添加 Docker 部署和资产检查清单。
   
3. **PR #15160: comfy-kitchen AMD support.**
   - **内容**: 添加对 AMD 平台的支持。
   
4. **PR #15159: Don't enable comfyui_detail.log by default.**
   - **内容**: 默认情况下不启用详细日志记录。
   
5. **PR #15089: fix: typo in AudioDict type annotation**
   - **内容**: 修复 AudioDict 类型注释中的拼写错误。
   
6. **PR #15155: [Partner Nodes] adjust pricing for the Bria Video RemoveBackground nodes**
   - **内容**: 调整 Bria 视频去背景节点的定价。
   
7. **PR #15154: [Partner Nodes] feat(Ideogram): add new P-Image model support**
   - **内容**: 添加对新的 P-Image 模型的支持。
   
8. **PR #15153: Fix Wan Animate temporal mask packing**
   - **内容**: 修复 Wan Animate 的时间掩码打包问题。
   
9. **PR #15085: Make convert_old_quants prefix-aware for _quantization_metadata layer keys**
   - **内容**: 使 convert_old_quants 对 _quantization_metadata 层键敏感。
   
10. **PR #15152: fix: resend cached histogram UI for CurveEditor after page refresh**
    - **内容**: 在页面刷新后重新发送缓存的直方图 UI。

#### 5. 功能需求趋势
- **自定义节点支持**: 用户对自定义节点的兼容性和稳定性有较高关注度。
- **性能优化**: 多个 Issues 提到了在不同硬件上的性能问题，特别是 AMD 平台。
- **模型兼容性**: 新模型的支持和现有模型的兼容性问题频繁出现。

#### 6. 开发者关注点
- **自定义节点问题**: 开发者需要关注自定义节点的稳定性和兼容性。
- **性能调优**: 针对不同硬件平台的性能优化仍然是一个重要的任务。
- **用户界面改进**: 用户编辑器和其他界面组件的异常行为需要快速响应和修复。

---

以上是2026-07-31的ComfyUI社区动态日报。希望对您有所帮助！

 

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 2026-07-31
*数据来源：github.com/ollama/ollama | 统计范围：过去24小时*

---

## 1. 今日速览
过去24小时Ollama无新版本发布，社区核心诉求集中于**Model Context Protocol（MCP）原生支持**（Issue #7865 获赞220+为全场最高热度）。同时0.32.4/0.32.5版本的工具调用崩溃、多模态请求数据泄漏、Ollama云服务可用性故障等issues持续发酵，社区对版本稳定性、云服务体验的讨论热度极高。

---

## 2. 版本发布
过去24小时无新版本发布。

---

## 3. 社区热点 Issues（Top 10）
| 排名 |  Issue 标题 | 重要性说明 | 社区反应 | 链接 |
| --- | --- | --- | --- | --- |
| 1 | [feature request] Model Context Protocol (MCP) support | MCP是当前AI Agent生态的事实标准协议，原生支持可大幅降低Ollama对接外部工具、数据源的成本，是社区呼声最高的功能需求 | 获赞220+，评论60条，讨论持续数月热度不减，大量用户分享MCP使用场景和实现建议 | [ollama/ollama Issue #7865](https://github.com/ollama/ollama/issues/7865) |
| 2 | [cloud] Ollama Cloud Pro: 95% failure rate across all cloud models | 直接影响所有付费云服务用户的核心体验，官方未给出故障原因和修复时间表 | 获赞18，评论51条，大量付费用户反馈服务完全不可用，对官方响应速度不满 | [ollama/ollama Issue #15453](https://github.com/ollama/ollama/issues/15453) |
| 3 | [bug] gemma4:e4b with ollama 0.20.1 still has tool parsing errors | Gemma 4是当前热门开源模型，工具调用是其Agent场景的核心能力，该bug导致Agent工作流完全失效 | 获赞9，评论49条，大量使用Gemma 4做工具调用的开发者反馈问题复现，官方此前的修复未生效 | [ollama/ollama Issue #15315](https://github.com/ollama/ollama/issues/15315) |
| 4 | [model] [Model Request] Support new Apertus model | 瑞士AI initiative推出的Apertus模型在科研、合规场景需求度高，当前因架构不支持无法加载 | 获赞82，评论38条，大量科研用户和合规场景开发者呼吁官方尽快适配架构 | [ollama/ollama Issue #12149](https://github.com/ollama/ollama/issues/12149) |
| 5 | [bug] Persistent 403 Forbidden & login loop on ollama.com | 全平台云服务访问故障，持续8小时未恢复，影响所有使用云服务的用户 | 评论3条，跨Windows/Linux/macOS平台用户反馈，API/CLI/Web端全部无法访问 | [ollama/ollama Issue #17471](https://github.com/ollama/ollama/issues/17471) |
| 6 | [bug] 0.32.4 and 0.32.5 appear to break tool calling in VS Code GitHub Harness | 影响大量使用Ollama对接VS Code Copilot的用户，工具调用是Copilot的核心能力 | 评论6条，官方已确认问题，建议用户回滚至0.32.1修复 | [ollama/ollama Issue #17444](https://github.com/ollama/ollama/issues/17444) |
| 7 | [bug] Qwen3.6 causes Ollama to freeze macOS on Apple M5 | 高危硬件兼容bug，会导致M系列Mac系统完全冻结需强制重启，影响面广 | 评论3条，大量M5/M4 Mac用户反馈类似问题，Qwen3.6是当前热门的代码/推理模型 | [ollama/ollama Issue #17452](https://github.com/ollama/ollama/issues/17452) |
| 8 | [bug] Ollama failed to load models after 0.24.0 | 影响AMD平台Docker用户，升级后无法加载AMD核显运行的轻量模型，导致使用场景受限 | 评论18条，大量AMD核显Docker用户反馈只能停留在0.24.0版本 | [ollama/ollama Issue #17285](https://github.com/ollama/ollama/issues/17285) |
| 9 | [bug] Cross-request content leakage on shared slot | 高危安全漏洞，多模态并发请求时会出现不同用户的图像数据泄露，存在数据合规风险 | 评论1条，已提供100%复现步骤，社区呼吁官方紧急修复 | [ollama/ollama Issue #17475](https://github.com/ollama/ollama/issues/17475) |
| 10 | [feature request] Include Model Context Length in /v1/models Response | OpenAI兼容接口缺少上下文长度元数据，开发者需要额外查询模型信息才能做上下文管理，增加适配成本 | 评论3条，大量使用Ollama OpenAI兼容接口的开发者反馈需求 | [ollama/ollama Issue #17417](https://

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

用户现在需要我生成llama.cpp 2026-07-31的社区动态日报，首先得严格按照要求的结构来，首先得先理清楚给的数据： releases是过去24小时的，issues是过去24小时更新的50条里选10个最值得关注的，PR也是同理，然后还要有速览、版本发布、热点Issue、重要PR、功能需求趋势、开发者关注点这些部分，还要附链接，语言要专业简洁，给技术开发者看的。

首先第一部分，今日速览，得用2-3句话概括最重要的动态。首先看最新的release，b10199到b10186挺多小版本的，重点是什么？哦对，b10199支持了server的输入嵌入生成下一个token，还有Vulkan的量化concat支持，还有M3 Metal内存泄漏修复，还有x86 VNNI的Q2_0量化3倍速度提升，还有社区那边有很多硬件相关的bug，比如AMD ROCm、Intel Arc、SYCL、Vulkan的不同问题，还有新的模型支持比如TML Inkling、Motif 3 Beta、Qwen3-TTS，还有PR里提的服务器认证漏洞修复，还有MTP tensor的加载优化。所以速览可以写：今日llama.cpp连续发布10个补丁版本（b10186-b10199），核心聚焦后端性能优化、多硬件兼容性修复与新模型支持，其中b10199新增服务端输入嵌入生成下一token能力，b10198补全Vulkan量化拼接支持；社区侧Qwen3、Gemma4等新模型在多硬件下的推理问题引发集中讨论，同时多平台构建、服务器安全类需求热度上升。对，这样就覆盖了发布和社区的热点。

然后第二部分，版本发布，因为有新版本，所以总结。首先说过去24小时共发布10个补丁版本（b10186至b10199），核心更新分几块：1. 服务端能力：b10199支持server通过输入嵌入生成下一token，优化服务端异步拷贝流程（b10196）；2. 多后端性能：Vulkan后端支持量化张量拼接（b10198），ggml-cuda支持无转置gemmv计算（b10194），x86 CPU VNNI指令集下Q2_0量化点积速度提升3倍（对应PR#26348，版本应该是b10188之后的？哦对看release里的b10188是metal内存泄漏修复，b10186是KleidiAI的字符串溢出修复，还有b10192是ggml同步更新，b10189是M3图形自定义CPU操作替换，还有测试相关的b10195避免重复构建get-model.cpp。然后还要提所有版本都同步更新了llama.app官网和Apple Silicon arm64预编译包，部分版本提供KleidiAI加速的ARM包。对，这样清晰。

第三部分，社区热点Issues，要选10个最值得关注的，得按重要性排，比如评论数多的，或者影响面大的。首先第一个肯定是#22746，评论113个，最多，是Qwen3.6 27B的缓存问题，强制全量重处理prompt，这个是高优bug，影响大，社区讨论多。然后第二个#17284，评论54，server返回400而不是截断上下文，之前closed但又有更新，是服务器的上下文处理逻辑bug，影响服务端使用。第三个#24168，评论19，Intel Arc Pro B60跑混合模型时空输出+SYCL后端崩溃，是Intel硬件用户的高频问题，有明确的回归版本范围。第四个#25030，评论13，需求是arm64 Windows的CUDA构建包，很多Windows ARM用户需要，呼声高。第五个#24616，评论13，CUDA下dp4a用dp2a模拟，低算力N卡（比如V100及更早）的量化推理优化需求，影响老旧N卡用户。第六个#25890，评论3？哦不，看评论数，哦#21678是评论8，赞6，是server的模型加载队列，现在卸载有活跃查询的模型，这个是多用户服务端场景的高频痛点。哦对，还有#26290，评论4，赞7，是MTP tensor默认加载的回归，导致现有GGUF模型加载变慢，影响所有用MTP相关模型的用户。还有#26119，评论5，V100 speculative decoding的cublas错误，老旧N卡服务端用户的问题。还有#26010，评论2？不，选影响面大的，哦#24415，评论9，Gemma4-12B在OpenVINO后端（Intel CPU/GPU/NPU）加载失败，Intel生态用户的高频问题。还有#26265，评论6，llama-cli在其他目录运行报错，是基础可用性问题，影响所有命令行用户。等下数一下10个：
1. #22746：Qwen3.6 27B缓存失效强制重处理prompt，评论113，赞31，影响所有用该模型做长上下文推理的用户，社区已跟踪2个月，是目前最热的bug。
2. #17284：Server长上下文场景返回400而非截断历史，评论54，是服务端部署的高频问题，之前标记为 stale 最近又有用户反馈回归。
3. #24168：Intel Arc Pro B60跑混合模型时空输出+SYCL后端崩溃，评论19，明确回归版本范围（b9128-b9159到b9479），影响Intel独立显卡用户的混合模型推理。
4. #25030：需求arm64 Windows CUDA构建包，评论13，Windows ARM生态用户（比如Snapdragon X Elite设备）的强需求，目前官方无对应构建。
5. #24616：CUDA后端增加dp4a的dp2a模拟支持，评论13，针对算力低于7.0的NVIDIA显卡（如V100、RTX 20系及更早）的量化推理性能优化，可提升老旧N卡的推理速度。
6. #21678：Server模型加载请求队列优化，评论8，赞6，当前服务端在有活跃推理请求时卸载模型会导致请求失败，是多用户并发服务场景的核心痛点。
7. #26290：MTP张量默认加载导致现有GGUF模型加载变慢，评论4，赞7，是#25980引入的回归，影响所有使用GLM-5、Qwen3.5 MoE等支持MTP架构的模型用户，已有修复PR#26296。
8. #26119：V100显卡 speculative decoding 时cublasSgemm_v2参数错误崩溃，评论5，老旧N卡服务端用户的推理崩溃问题，影响使用 speculative decoding 的场景。
9. #24415：Gemma 4 12B无法在OpenVINO后端加载，评论9，Intel CPU/GPU/NPU全生态用户的模型兼容性问题，影响OpenVINO部署场景。
10. #26265：llama-cli从非程序所在目录运行时报错，评论6，基础可用性bug，影响所有命令行用户的使用体验。
对，这10个，每个都要说明为什么重要，社区反应，还要附链接。

然后第四部分，重要PR进展，选10个最重要的，按影响或者优先级排：
1. PR#26347：Server端auth开启时/models接口私有化，这个是安全相关的，之前auth开启时/v1/models会暴露模型列表，有信息泄露风险，现在修复了，服务端安全的重要更新。
2. PR#26313（对应release b10199）：Server支持输入嵌入生成下一token，是TTS、多模态模型推理的基础能力，为Qwen3-TTS等模型的服务端推理提供支持。
3. PR#26348：x86 VNNI指令集下Q2_0量化点积优化，3倍速度提升，大幅提升老旧x86 CPU（支持VNNI的10代+酷睿、服务器CPU）的量化推理性能。
4. PR#26296：MTP张量按需加载，修复#26290的回归，默认不加载MTP张量除非使用--spec-type draft-mtp，减少现有模型的加载时间和内存占用。
5. PR#26298：新增Motif 3 Beta模型支持，包含GDLA（分组差分潜在注意力）架构实现，扩展llama.cpp支持的模型范围。
6. PR#26286：Qwen3系列支持滑动窗口注意力（SWA），支持jina-reranker-v3.5等基于Qwen3的滑动窗口注意力模型的转换和推理。
7. PR#25731：新增TML Inkling架构支持，包含MoE优化、带通Flash Attention内核，支持大型MoE模型的推理，配套Python转换工具。
8. PR#26344：CUDA虚拟设备异步张量拷贝竞态条件修复，解决多GPU/虚拟设备场景下推理结果非确定性的问题，提升多卡推理稳定性。
9. PR#26284：AMD RDNA 3/4显卡MMQ配置调优，提升AMD RX 7000/9000系列显卡的量化推理性能。
10. PR#26338：M3架构MSA块选择与KV缓存布局解耦，修复M3芯片上特定模型的推理逻辑错误，提升Apple Silicon M系列芯片的模型兼容性。
对，这10个，每个说明功能或者修复内容，附链接。

第五部分，功能需求趋势，从所有Issues里提炼。首先看 Issues 里的enhancement类的：首先是多硬件构建包需求：arm64 Windows CUDA构建（#25030）、HIP/ROCm新架构支持（b10186和PR#26256已经加了gfx1152，说明AMD新卡的构建需求高）；然后是后端性能优化：老旧硬件（V100、Intel UHD 770等）的推理性能/兼容性，Vulkan后端重构（#21723，评论6，赞6，因为ggml-vulkan.cpp太大了，社区希望拆分便于维护），SYCL后端性能提升（#26010，Intel Arc的SYCL比Vulkan慢）；然后是新模型支持：Motif 3、TML Inkling、Qwen3-TTS、Gemma4、GLM5等新架构的快速适配，还有MTP、滑动窗口注意力等新特性的支持；然后是服务端能力：模型加载队列（#21678）、RPC后端性能优化（#25890，大模型加载慢）、pipeline并行（#22436）；还有安全和易用性：服务器API鉴权（PR#26347已经做了）、WebUI API key明文显示（#23254）、llama-cli路径兼容（#26265）。所以整理成几点：
1. 多平台构建覆盖：社区对非x86平台、小众硬件的预编译包需求强烈，尤其是Windows ARM CUDA构建、AMD新显卡（RDNA 3/4、gfx1151/1152）的HIP构建，以及Intel Arc显卡的SYCL/Vulkan后端优化。
2. 新模型与特性适配：对Qwen3、Gemma4、GLM5、Motif等新架构的推理支持需求旺盛，同时MTP（多token预测）、滑动窗口注意力、TTS多模态等新特性的落地优先级高。
3. 服务端稳定性与性能：多用户并发场景下的模型加载/卸载逻辑优化、大模型RPC加载性能提升、pipeline并行能力是服务端用户的核心诉求。
4. 老旧硬件兼容性：针对算力较低的老旧NVIDIA、Intel核显的推理性能优化、bug修复需求持续存在，尤其是V100、Intel UHD系列等硬件。
5. 安全与易用性：服务端API鉴权完善、WebUI安全性、命令行工具路径兼容等基础体验类需求开始获得更多关注。

第六部分，开发者关注点，就是社区反馈的痛点和高频需求：
首先是硬件兼容性碎片化问题：目前llama.cpp支持的硬件 backend 非常多（CUDA、ROCm、Vulkan、Metal、SYCL、OpenVINO、CPU等），但不同硬件的兼容性差异大，比如Intel Arc在SYCL和Vulkan下的表现不一致，AMD ROCm不同gfx版本的适配问题，老旧N卡的新特性兼容问题，导致开发者需要投入大量精力处理硬件相关的bug。
然后是回归测试覆盖不足：近期多个版本引入回归bug，比如#26290的MTP默认加载回归、#22746的Qwen缓存回归，说明新特性合并时的测试覆盖不够，尤其是多模型、多硬件的组合测试。
然后是服务端能力不足：当前llama.cpp的服务端在并发、模型管理、鉴权等方面的能力比较基础，无法满足生产级部署的需求，社区对服务端优化的需求持续上升。
还有构建门槛问题：小众平台（比如Windows ARM、部分SYCL环境）的构建流程复杂，官方预编译包覆盖不足，导致普通用户使用门槛高。
最后还有大模型推理的内存优化：随着模型参数不断增大，KV缓存管理、MTP等特性的内存占用优化是开发者关注的重点，比如b10196的异步拷贝优化就是为了减少内存开销。

等下要注意每个部分都要符合要求，链接要附对，还有语言要专业，适合技术开发者。哦对，release部分的版本，要准确，给的release是b10199到b10186，共10个？数一下：b10199、b10198、b10197、b10196、b10195、b10194、b10192、b10189、b10188、b10186，对，10个，没错。然后Issues里的每个都要附链接，PR也是。

哦对，速览部分要准确，不要太啰嗦，2-3句话。比如：
### 1. 今日速览
今日llama.cpp连续发布10个补丁版本（b10186-b10199），核心聚焦多后端性能优化、硬件兼容性修复与新模型适配，其中b10199新增服务端输入嵌入生成下一token能力，b10198补全Vulkan量化张量拼接支持；社区侧Qwen3、Gemma4等新模型在多硬件下的推理问题引发集中讨论，多平台构建、服务器安全类需求热度显著上升。

然后版本发布部分：
### 2. 版本发布
过去24小时共发布10个补丁版本（b10186至b10199），核心更新如下：
- 服务端能力：b10199支持server通过输入嵌入生成下一token，适配TTS、多模态模型推理场景；b10196修复llama-context异步拷贝未同步导致的上下文清除异常。
- 多后端性能优化：b10198新增Vulkan后端量化张量拼接支持；b10194实现ggml-cuda无转置gemmv计算，优化1xK权重矩阵的推理性能；对应PR#26348的x86 VNNI指令集Q2_0量化点积实现3倍速度提升，大幅优化老旧x86 CPU的量化推理表现。
- 硬件兼容性修复：b10189移除M3芯片自定义CPU操作，改用原生算子提升兼容性；b10188修复Apple Metal后端模型无GPU操作时释放的内存泄漏问题；b10186修复KleidiAI加速场景下的字符串溢出编译警告。
- 基础设施优化：b10195重构测试逻辑，避免重复构建get-model.cpp，提升编译效率；b10192同步ggml底层更新。
所有版本均同步更新官网[llama.app](https://llama.app)与Apple Silicon arm64预编译包，部分版本提供KleidiAI加速的ARM构建。

然后社区热点Issues，10个，每个附链接，说明重要性和社区反应：
### 3. 社区热点 Issues（Top 10）
| 排名 | Issue号 | 核心内容 | 重要性说明 | 社区反应 |
| --- | --- | --- | --- | --- |
| 1 | [#22746](https://github.com/ggml-org/llama.cpp/issues/22746) | Qwen3.6 27B模型推理时缓存失效，强制全量重处理prompt | 影响所有使用Qwen3长上下文模型的生产推理场景，卡顿/资源占用问题突出 | 评论113、赞31，是社区当前热度最高的bug，已跟踪2个月仍未完全解决 |
| 2 | [#17284](https://github.com/ggml-org/llama.cpp/issues/17284) | server长上下文场景下返回HTTP 400而非自动截断历史 | 服务端部署的高频问题，会导致对话流程中断 | 评论54，此前标记为stale，近期再次收到多用户回归反馈 |
| 3 | [#24168](https://github.com/ggml-org/llama.cpp/issues/24168) | Intel Arc Pro B60跑混合模型时空输出+SYCL后端崩溃 | 明确回归版本范围（b9128-b9159至b9479），影响Intel独立显卡用户的混合模型推理 | 评论19，Intel硬件用户集中反馈，已定位到SYCL后端问题 |
| 4 | [#25030](https://github.com/ggml-org/llama.cpp/issues/25030) | 需求arm64 Windows平台的CUDA构建包 | 覆盖Snapdragon X Elite等Windows ARM设备用户，目前官方无对应预编译包 | 评论13，Windows ARM生态用户呼声较高 |
| 5 | [#24616](https://github.com/ggml-org/llama.cpp/issues/24616) | CUDA后端增加dp4a的dp2a模拟支持 | 可提升算力低于7.0的老旧NVIDIA显卡（如V100、RTX 20系及更早）的量化推理性能 | 评论13，老旧N卡用户的核心需求 |
| 6 | [#21678](https://github.com/ggml-org/llama.cpp/issues/21678) | server优化模型加载逻辑，有活跃查询时不要卸载模型 | 解决多用户并发场景下请求被中断的问题，是生产级服务端部署的核心痛点 | 评论8、赞6，服务端用户集中反馈 |
| 7 | [#26290](https://github.com/ggml-org/llama.cpp/issues/26290) | #25980引入回归：MTP张量默认加载，导致现有GGUF模型加载变慢 | 影响所有使用GLM-5、Qwen3.5 MoE等支持MTP架构的模型用户，增加不必要的内存占用 | 评论4、赞7，已有修复PR#26296待合并 |
| 8 | [#26119](https://github.com/ggml-org/llama.cpp/issues/26119) | V100显卡 speculative decoding 时cublasSgemm_v2参数错误崩溃 | 老旧N卡服务端用户的推理崩溃问题，影响 speculative decoding 场景的可用性 | 评论5，V100等老旧算力卡用户集中反馈 |
| 9 | [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) | Gemma 4 12B无法在OpenVINO后端（Intel CPU/GPU/NPU）加载 | 影响Intel全生态用户的Gemma4模型部署，OpenVINO是Intel硬件的主流推理后端

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*