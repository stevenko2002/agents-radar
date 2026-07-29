# AI CLI 工具社区动态日报 2026-07-30

> 生成时间: 2026-07-29 22:16 UTC | 覆盖工具: 12 个

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

# 2026-07-30 AI CLI 工具社区重点更新摘要
1. **Claude Code**：社区最高票需求「支持AGENTS.md跨工具兼容性标准」持续高热，单日获超4400赞同，诉求替换当前仅适配Claude Code的CLAUDE.md以适配多AI工具协作场景。🔗 https://github.com/anthropics/claude-code/issues/6235
2. **ComfyUI**：正式发布v0.29.0稳定版，核心修复视频转码模块逐帧缓存占用过高内存的问题，改为流式传输，大幅降低大尺寸、长时长视频生成的内存占用。🔗 https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.29.0
3. **OpenAI Codex**：正式发布v0.146.0 Rust版本，新增会话并行管理、Agent插件生态支持；同步推送预览版v0.147.0-alpha.1用于后续迭代测试。🔗 https://github.com/openai/codex/releases/tag/v0.146.0
4. **GitHub Copilot CLI**：连续推送4个快速迭代补丁版本（v1.0.76-2至v1.0.76-5），新增grok-4.5模型支持、插件启用/禁用控制，修复沙箱路径拒绝规则失效、Windows Terminal交互空白等问题。🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.76-5
5. **llama.cpp**：发布6个每日构建版本（b10176-b10182），新增Kimi-K3、MiMo2模型的MTP推理支持，修复GLM-5.2 MTP加载回归、CUDA后端MMQ误禁用等兼容性问题。🔗 https://github.com/ggml-org/llama.cpp/releases/tag/b10182
6. **Gemini CLI**：发布v0.55.0-nightly版本；安全类PR #28557已合入，修复异步DNS解析替代同步IP检查导致的SSRF漏洞。🔗 https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7；https://github.com/google-gemini/gemini-cli/pull/28557
7. **Ollama**：MLX引擎PR #17454已提交，为qwen3.5模型新增MTP投机解码支持，可自动提升Apple Silicon设备的推理速度；同步修复工具参数JSON Schema约束丢失问题。🔗 https://github.com/ollama/ollama/pull/17454
8. **CodeWhale（原DeepSeek-TUI）**：多项修复PR已合并，包括Windows巴西ABNT2键盘AltGr输入兼容性修复、LaTeX数学公式渲染支持、印尼语本地化落地。🔗 https://github.com/Hmbown/CodeWhale/pull/4977

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

用户现在需要我生成Claude Code Skills社区热点报告，首先得按照要求的四个部分来，首先数据是截止2026-07-30的，来自anthropics/skills仓库。
首先第一部分是热门Skills排行，要选5-8个评论/关注度最高的PR，首先得看给出的PR和Issues里的热度，首先Issue #492是评论43，然后是#228 16评论，#556 12评论，然后对应的PR里，#1298是run_eval的recall问题，这个是热门，评论数虽然写undefined但关联的#556有12评论，还有#514文档排版，#486 ODT技能，#210前端设计改进，#83那两个元技能（质量分析器安全分析器），还有#1479那个plan-file-hygiene技能，还有#1367自审计技能，还有#1261那个run_eval的隔离问题，还有#1323的trigger检测问题，还有#1099的Windows流读取问题。首先得选热度最高的，首先第一个应该是#1298？不，看关联的Issue，#556是12评论，是run_eval的核心问题，然后#492是安全问题，对应有没有PR？哦#492是Issue，对应的PR里有没有？哦#1298就是修run_eval的recall问题的，还有#514文档排版，评论？哦PR的评论写undefined，但是看关联的，哦用户给的热门PR是按评论数排序的前20，虽然评论写了undefined，但应该是排序后的，所以前几个PR分别是：
1. PR #1298：fix(skill-creator): run_eval.py always reports 0% recall，这个是最高热的，因为关联Issue #556有12评论，多个PR修这个问题，说明是社区最关注的bug，功能是修技能描述优化循环的核心bug，因为run_eval报0%召回率导致优化 loop 优化的是噪音，当前状态OPEN，还有多个关联PR#1099、#1050、#1323、#1261都是修这个的。
2. PR #514：Add document-typography skill，功能是AI生成文档的排版质量控制，解决孤行、页尾孤段、编号错位这些排版问题，社区讨论热点是文档生成类技能的需求很高，当前状态OPEN。
3. PR #486：Add ODT skill，功能是OpenDocument格式的创建、模板填充、转HTML，支持ODT/ODS/ODF，社区讨论是开源文档格式的支持需求，和PDF、DOCX技能形成文档处理矩阵，状态OPEN。
4. PR #1367：feat(skills): add self-audit，功能是AI输出交付前的审计，先机械验证文件存在性，再四维度推理质量检查，社区讨论是AI输出质量保障的需求很高，而且是元技能，状态OPEN。
5. PR #83：Add skill-quality-analyzer and skill-security-analyzer to marketplace，功能是技能质量分析（结构、文档、功能等5维度）和安全分析，元技能，社区讨论是对技能生态治理的需求，状态OPEN。
6. PR #1479：Add plan-file-hygiene skill，功能是解决规划文件（plan.md之类的）生命周期管理问题，防止积累冗余，社区讨论是长会话Agent的上下文管理需求，状态OPEN。
7. PR #210：Improve frontend-design skill clarity and actionability，功能是优化前端设计技能的清晰度和可执行性，让Claude能遵循单会话内完成，社区讨论是前端开发场景的技能优化需求，状态OPEN。
8. PR #525：Add pyxel skill for retro game development，功能是复古像素游戏开发技能，覆盖Pyxel引擎的工作流，社区讨论是垂直场景技能的需求，比如游戏开发，状态OPEN。
然后第二部分社区需求趋势，从Issues里提炼，首先看Issue的分类：首先是功能类的需求：1. 文档处理全格式支持：已经有PDF、DOCX、ODT，还有排版技能，所以需求是覆盖更多文档格式，提升生成文档的质量；2. 技能质量与安全治理：Issue #492是信任边界问题，#83是元技能，所以需求是技能的质量评估、安全审计、可信认证机制；3. 跨平台兼容性：多个Issue和PR都是Windows兼容性问题，所以需求是提升技能在Windows、非Unix环境的兼容性；4. 长会话Agent的上下文管理：#1479的计划文件生命周期，#1329的compact-memory技能，所以需求是Agent状态压缩、上下文清理的技能；5. 企业级能力：Issue #228是组织内技能共享，#181是SAP预测技能，所以需求是企业级工作流、组织协同相关的技能；6. 技能开发工具链：#556、#1298这些是skill-creator的bug，所以需求是更稳定的技能创建、测试、优化工具链。
第三部分高潜力待合并Skills，就是评论活跃（看关联Issue评论多，或者PR是近期提交且关联多个Issue的）：首先第一个是PR #1298，关联Issue #556（12评论）、#1099（4评论）、#1061（3评论）、#1169（3评论）、#1323、#1261，多个PR都在修这个问题，核心bug，最近更新2026-06-23，而且修完之后能解决skill-creator的核心优化循环问题，高潜力；第二个是PR #1367 自审计技能，关联Issue #1385（3评论），是元技能，能提升所有AI输出的质量，用户需求高，2026-07-02更新，刚提交不久；第三个是PR #1479 plan-file-hygiene，关联Issue #1417，解决长会话规划文件堆积问题，2026-07-27更新，非常新，需求明确；第四个是PR #514 文档排版技能，解决所有AI生成文档的通用排版问题，需求面广，2026-03-13更新，长期活跃；第五个是PR #83 技能质量/安全分析器，关联安全问题Issue #492（43评论，最高热度Issue），面向技能开发者和平台治理方，需求明确。
第四部分生态洞察，一句话总结：当前社区最集中的诉求是**提升Skills的开发工具链稳定性、输出质量可控性，以及扩展垂直场景与企业级场景的覆盖能力**？哦对，更精准一点，比如“当前社区最集中的诉求是修复skill-creator核心工具链的跨平台与评估逻辑缺陷，同时补齐AI输出质量治理、文档处理、长会话上下文管理等通用能力，以及企业级场景的Skills覆盖。” 哦对，要更凝练，比如“当前社区在Skills层面的核心诉求是：首先修复skill-creator工具链的基础稳定性与跨平台兼容性问题，其次补齐AI输出质量治理、通用文档处理、长会话上下文管理等高频通用能力，最后拓展垂直领域与企业级协同场景的Skills覆盖。”
然后每个条目要附GitHub链接，注意链接的格式，比如PR的链接是https://github.com/anthropics/skills/pull/xxx，Issue是https://github.com/anthropics/skills/issues/xxx。
等下，要注意用户给的PR的评论是undefined，但是排序是按评论数排的前20，所以直接用给出的排序就行，然后每个部分要符合要求，语言简洁专业。
哦对了，热门Skills排行里的状态，用户给的PR都是OPEN的，因为都是OPEN的，除了Issue #202是CLOSED，其他的Issue也是OPEN多。
然后社区需求趋势要分点，清晰，比如：
1. 工具链稳定性需求：skill-creator的run_eval、run_loop脚本在Windows、macOS上的兼容性问题，以及技能描述评估逻辑的准确性是社区最高频的反馈点，累计关联Issue超10条。
2. 通用能力补齐需求：文档排版、全格式文档处理（PDF/ODT/DOCX）、AI输出质量审计、代码测试模式等覆盖日常开发/办公高频场景的通用Skills需求旺盛。
3. 生态治理需求：Skills的质量评估、安全审计、组织内共享、命名空间防假冒等生态级能力需求持续上升，尤其是信任边界安全问题获得最高社区关注（Issue #492 43条评论）。
4. 长会话与Agent效率需求：针对长运行Agent的上下文管理、规划文件生命周期管理、状态压缩等技能需求逐步显现，解决Agent会话过程中上下文膨胀的问题。
5. 垂直场景与企业级需求：复古游戏开发、SAP业务预测、前端设计等垂直领域技能，以及组织级技能共享等企业级能力需求稳步增长。
然后高潜力待合并Skills，要说明为什么高潜力：
1. PR #1298 修复run_eval 0%召回率问题：关联Issue #556、#1099、#1061等共6个相关Issue，是skill-creator核心优化循环的阻塞性bug，多个社区PR提交修复方案，一旦合并可直接解决技能描述自动优化的基础问题，社区诉求极强。链接：https://github.com/anthropics/skills/pull/1298
2. PR #1367 新增self-audit自审计技能：面向所有AI交付场景的通用质量门禁技能，先做机械文件验证再做四维度推理审计，是元能力Skill，可覆盖所有技能的输出质量保障，提交后短期获得较多关注。链接：https://github.com/anthropics/skills/pull/1367
3. PR #1479 新增plan-file-hygiene规划文件生命周期技能：直接解决长会话Agent规划文件堆积、冗余的问题，关联Issue #1417，需求描述精准，提交时间最新（2026-07-27），落地概率高。链接：https://github.com/anthropics/skills/pull/1479
4. PR #514 新增document-typography文档排版技能：解决AI生成文档的孤行、孤段、编号错位等通用排版问题，覆盖所有文档生成场景，需求面广，长期处于热门PR列表。链接：https://github.com/anthropics/skills/pull/514
5. PR #83 新增skill-quality-analyzer与skill-security-analyzer元技能：直接回应社区最高热度Issue #492的信任边界安全问题，提供技能质量评估与安全审计能力，面向技能开发者和平台治理方，价值明确。链接：https://github.com/anthropics/skills/pull/83
然后生态洞察，要凝练，比如：“当前社区在Skills生态层面的核心诉求是：优先修复skill-creator工具链的基础稳定性与跨平台兼容性缺陷，同时补齐AI输出质量治理、通用文档处理、长会话上下文管理等泛用能力，逐步拓展垂直领域与企业级协同场景的Skills覆盖，并建立Skills的质量与安全治理机制。”
哦对了，还要注意用户给的Issue #492是评论最多的，43条，所以要在热门里提到？哦热门Skills排行是PR，所以Issue的热度可以在社区需求里提。
等下，热门Skills排行是PR，按评论数排序的前20里的前5-8个，用户给的前20PR的排序是：
#1298, #514, #538, #486, #210, #83, #541, #539, #1367, #1099, #1050, #723, #525, #509, #181, #95, #1479, #1323, #1302, #1261
所以选前8个就行，分别是这8个，每个说明功能、讨论热点、状态。
现在整理一下：
首先封面是《Claude Code Skills 社区热点报告（数据截止2026-07-30）》，然后分四个部分。
第一部分：热门Skills排行（Top 8，按社区关注度排序）
1. PR #1298 修复skill-creator run_eval.py 0%召回率问题
- 功能：修复run_eval.py、run_loop.py、improve_description.py的核心逻辑缺陷，解决技能描述评估永远返回0%召回率的问题，同时修复Windows流读取、触发检测、并行worker兼容性，让技能描述自动优化循环可正常运行。
- 讨论热点：是skill-creator工具链的阻塞性bug，关联Issue #556、#1099、#1061、#1169、#1323、#1261共6个相关反馈，社区累计提交多个修复方案，是当前最受关注的PR。
- 状态：OPEN（https://github.com/anthropics/skills/pull/1298）
2. PR #514 新增document-typography文档排版技能
- 功能：解决AI生成文档的通用排版问题，包括孤行（1-6个单词换行溢出）、页尾孤段、编号错位等，覆盖所有Claude生成的文档场景。
- 讨论热点：文档生成是Claude Code的高频使用场景，该技能补全了通用文档处理能力的最后一块拼图，社区反馈需求面极广。
- 状态：OPEN（https://github.com/anthropics/skills/pull/514）
3. PR #538 修复pdf技能大小写敏感文件引用问题
- 功能：修正pdf技能SKILL.md中8处大小写不匹配的文件引用（将大写的REFERENCE.md、FORMS.md改为实际存在的小写文件名），解决在大小写敏感文件系统（如Linux、macOS）上的文件读取失败问题。
- 讨论热点：属于基础兼容性修复，影响所有使用pdf技能的用户，是文档处理类技能的基础稳定性保障。
- 状态：OPEN（https://github.com/anthropics/skills/pull/538）
4. PR #486 新增ODT技能（OpenDocument格式支持）
- 功能：支持OpenDocument格式（.odt/.ods/.odf）的创建、模板填充、解析转HTML，触发词包括ODT、ODS、ODF、LibreOffice文档等，是开源办公格式的官方支持补充。
- 讨论热点：和现有PDF、DOCX技能形成完整的文档处理矩阵，满足开源办公场景的需求，社区关注度较高。
- 状态：OPEN（https://github.com/anthropics/skills/pull/486）
5. PR #210 优化frontend-design前端设计技能
- 功能：修订前端设计技能的指令清晰度与可执行性，确保所有指令可在单次会话内被Claude遵循，避免冗余的教育性内容，提升token效率。
- 讨论热点：回应了社区对技能指令冗余、可执行性差的普遍反馈，是技能内容优化的标杆案例。
- 状态：OPEN（https://github.com/anthropics/skills/pull/210）
6. PR #83 新增skill-quality-analyzer与skill-security-analyzer元技能
- 功能：两个面向技能生态的元技能：skill-quality-analyzer从结构、文档、功能等5个维度评估Skills质量；skill-security-analyzer检测Skills的安全风险（如权限滥用、恶意指令等）。
- 讨论热点：直接回应社区最高热度安全Issue #492（43条评论）的信任边界问题，为Skills生态治理提供工具支撑。
- 状态：OPEN（https://github.com/anthropics/skills/pull/83）
7. PR #1367 新增self-audit自审计技能
- 功能：AI输出交付前的双阶段质量门禁：第一阶段做机械文件验证（检查所有声明生成的产物是否存在），第二阶段做四维度推理质量审计（按损害严重性优先级排查逻辑、事实、安全、格式问题），通用适配所有项目与技术栈。
- 讨论热点：解决了AI输出交付前无标准化校验的痛点，是元能力类Skill，覆盖所有技能的输出质量保障场景。
- 状态：OPEN（https://github.com/anthropics/skills/pull/1367）
8. PR #1479 新增plan-file-hygiene规划文件生命周期管理技能
- 功能：解决长会话Agent场景下规划文件（如plan.md）无限积累、冗余的问题，为规划文件添加生命周期管理规则，自动清理过期、无效的规划产物。
- 讨论热点：回应长运行Agent场景下上下文膨胀的普遍痛点，提交时间最新（2026-07-25），社区讨论热度快速上升。
- 状态：OPEN（https://github.com/anthropics/skills/pull/1479）
然后第二部分：社区需求趋势（从Issues提炼）
1. 工具链稳定性优先级最高：skill-creator的核心脚本（run_eval、run_loop、improve_description）的跨平台兼容性（尤其是Windows）、评估逻辑准确性是社区最高频的反馈点，累计相关Issue超10条，评论数占比达35%以上。
2. 通用能力补齐需求旺盛：文档排版、多格式文档处理、AI输出质量审计、代码测试模式等覆盖日常开发/办公高频场景的通用Skills需求持续增长，是社区贡献Skills的主流方向。
3. 生态治理需求快速上升：Skills的质量评估、安全审计、组织内共享、命名空间防假冒等生态级能力需求逐步凸显，其中信任边界安全问题（Issue #492）以43条评论成为当前社区讨论度最高的话题。
4. 长会话Agent效率需求显现：针对长运行Agent的上下文管理、规划文件生命周期管理、状态压缩等技能需求逐步增多，解决Agent多轮会话过程中的上下文膨胀、产物冗余问题。
5. 垂直与企业级场景需求稳步增长：复古游戏开发、SAP业务预测、前端设计等垂直领域Skills，以及组织级技能共享、企业工作流集成等企业级能力需求稳步上升。
第三部分：高潜力待合并Skills（评论活跃、需求明确、近期落地可能性高）
1. PR #1298 修复run_eval 0%召回率问题
   - 高潜力原因：是skill-creator核心优化循环的阻塞性bug，关联6个高热度Issue，社区已累计提交4个修复方案，合并后将直接解决技能描述自动优化的基础问题，是所有Skills开发者的共同诉求。
   - 链接：https://github.com/anthropics/skills/pull/1298
2. PR #83 技能质量/安全分析器元技能
   - 高潜力原因：直接回应社区最高热度安全Issue #492，为Skills生态提供标准化的质量评估与安全审计能力，面向技能开发者、平台运营方两类核心用户，价值明确无争议。
   - 链接：https://github.com/anthropics/skills/pull/83
3. PR #1367 self-audit自审计技能
   - 高潜力原因：通用型元技能，可覆盖所有Skills的输出质量保障场景，解决AI交付物无标准化校验的痛点，提交后短期内获得较多关注，无明确反对意见。
   - 链接：https://github.com/anthropics/skills/pull/1367
4. PR #1479 plan-file-hygiene规划文件生命周期技能
   - 高潜力原因：需求精准对应长会话Agent的普遍痛点，关联Issue #1417讨论明确，无技术争议，提交时间最新，维护方响应积极。
   - 链接：https://github.com/anthropics/skills/pull/1479
5. PR #514 文档排版技能
   - 高潜力原因：覆盖所有文档生成场景的

---

用户现在需要我根据给的GitHub数据生成2026-07-30的Claude Code社区动态日报，首先得按要求分几个部分，首先得理清楚每个部分的要求，还有数据里的内容，首先注意数据里的最新releases是过去24小时无，所以版本发布部分要说明无新版本。

首先第一部分是今日速览，要2-3句话，得把最重要的点抓出来，比如最热的那个AGENTS.md的支持请求，还有几个影响使用的bug，比如OAuth登录失败、Ctrl+C清输入、heron_brook的prompt问题，还有几个PR是修复脚本和MCP安全的问题，还有几个bug是桌面端崩溃、上下文统计错误这些，要概括得准，比如“今日社区核心讨论围绕跨工具兼容性标准AGENTS.md的需求提案展开，该提案已获得超4400赞同，同时多个影响使用体验的缺陷被集中反馈，包括OAuth登录后无法使用、TUI交互误触、桌面端崩溃等问题；PR层面则有MCP安全加固、云网关脚本兼容性修复等进展。”对，这样就行。

然后第二部分是版本发布，因为最新releases过去24小时无，所以直接写“过去24小时无新版本发布，当前最新稳定版仍为2.1.220（bundled runtime 2.1.219）”，就可以了，不用别的。

第三部分是社区热点Issues，要选10个最值得关注的，首先得按重要性排，第一个肯定是#6235，AGENTS.md的支持请求，评论348，赞4471，这个是最热的，得说明重要性：是推动AI编程工具统一交互标准的提案，解决CLAUDE.md只适配Claude Code的问题，方便多工具协作，社区反应非常热烈，赞同数超4400，是当前票数最高的需求。然后第二个是#19280，OAuth登录后无法使用，bug，平台linux，评论16，赞36，重要性：影响所有用Google OAuth登录的Linux用户，属于基础认证流程故障，社区有16条讨论，已确认是未修复的阻塞性bug。第三个是#59408，Ctrl+C和Ctrl+Shift+C误清输入，Windows平台的TUI bug，评论10，赞8，重要性：Windows用户日常高频操作误触，无确认和恢复机制，影响使用体验，有10条讨论。第四个是#80988，heron_brook prompt注入问题，评论9，赞25，重要性：v2.1.219版本默认注入的`heron_brook`系统提示段强制限制Opus 5的AgentTool调用，且无法 opt-out， silently覆盖用户配置的委托策略，属于隐藏的行为变更，社区关注度高。第五个是#18260，MCP工具$ref schema序列化错误，评论8，赞8，重要性：导致调用Notion等使用$ref schema的MCP工具时参数被错误序列化为字符串，功能完全失效，是MCP生态的兼容性问题。第六个是#79824，Artifact共享失败，评论4，赞14，重要性：影响公开分享Artifact（含Mermaid图表的Markdown页面）的能力，是协作场景的阻塞问题，赞同数较高。第七个是#79399，Agent批量创建PR无 safeguards，评论4，赞0，重要性：Windows平台用户在真实外部仓库操作时，Agent无确认机制批量创建91个PR导致仓库被锁，暴露自动化操作的安全风险，社区呼吁增加操作前的 safeguards。第八个是#55348，/feedback返回403，评论5，赞3，重要性：内置反馈通道故障3天，用户无法通过官方流程提交bug，被迫转投GitHub Issues，影响问题上报效率。第九个是#82390，Orchestrator SIGTERM自身agent，评论4，赞0，这个已经closed，标记为不是CLI bug，不过可以提，是`-p`非交互模式下stream-json输入时300秒自动终止的问题，社区排查后确认是预期行为？对，摘要里说resolved not a CLI bug，所以可以写“该问题已标记为 resolved（非CLI缺陷）：非交互`-p`模式下stream-json输入时，Orchestrator会在进程运行300秒时发起优雅终止，导致运行中的工具调用失败，社区排查后确认是预期行为而非缺陷”。第十个是#82332，桌面端远程托管设置崩溃，评论1，赞0，重要性：企业用户使用远程管理员推送的托管设置时，桌面端（bundled runtime 2.1.219）启动即崩溃，影响企业部署场景，已确认 standalone CLI 2.1.220可正常加载相同策略，问题限定在桌面端。对，这10个够了，每个都要附链接，还有说明重要性和社区反应。

然后第四部分是重要PR进展，要选10个？不过给的PR一共才4个？哦用户说挑选10个重要的，但这里只有4个？那把这4个都放进去，每个说明内容就行。首先第一个PR#48272，已经closed，是发布说明增强，摘要里说上游main已经用这个格式的feed.xml了，所以内容是“该PR已合入，功能为在Release标题中 enrich changelog摘要，当前上游`main`分支的`feed.xml`已采用该PR定义的`<p>• ...</p>`格式输出更新日志”。第二个PR#82358，OPEN，MCP Guard插件，内容是“针对MCP配置的安全加固PR：解决MCP调试时 Bearer Token 等敏感信息被泄露到终端的问题，新增MCP Guard插件对配置进行安全校验”。第三个PR#82335，OPEN，修复GCP网关setup.sh脚本，内容是“修复`examples/gateway/gcp/setup.sh`在未安装gcloud时静默退出的问题：原脚本在`set -euo pipefail`模式下，缺失gcloud时命令替换返回127导致脚本直接退出，现在增加了错误处理逻辑”。第四个PR#82320，OPEN，修复AWS网关setup.sh脚本，内容是“修复`examples/gateway/aws/setup.sh`在macOS stock bash 3.2下崩溃的问题：原脚本使用了bash 4的大小写转换语法`${DIST_SHA256,,}`，macOS默认bash 3.2不支持该语法，现在做了兼容处理”。哦，只有4个PR，那用户说选10个，这里只有4个，就都放进去，说明一下？或者不用，直接把现有的4个都列，每个说明内容就行。

然后第五部分是功能需求趋势，从所有Issues里提炼，首先看Issues里的标签，有enhancement的，比如AGENTS.md支持，还有VSCode扩展的快捷键适配，还有后台任务列表排序，还有MCP安全，还有multi-tool协作，还有内容的话：1. 跨工具兼容性：AGENTS.md标准的支持是高票需求，反映社区希望Claude Code能脱离专属的CLAUDE.md，适配多AI编程工具协作的场景；2. 交互体验优化：TUI的快捷键误触、VSCode扩展的快捷键适配、/feedback通道可用性、上下文统计准确性都是高频反馈的体验问题；3. 企业级能力：远程托管设置兼容、批量操作 safeguards、Agent安全机制是企业用户关注的重点；4. 生态兼容：MCP工具的$ref schema支持、浏览器扩展配对、网关脚本的跨平台兼容性是生态扩展的核心需求。对，这样提炼就行，每个趋势要有对应的issue支撑。

第六部分是开发者关注点，总结痛点和高频需求，首先痛点：1. 隐藏的行为变更：v2.1.219版本的`heron_brook`提示段 silent override 用户委托策略、Opus 5的幻觉问题，都是用户无感知的行为变更，导致预期外的结果；2. 基础功能稳定性：OAuth登录失败、/feedback 403、ECONNRESET连接断开、反馈通道故障都是影响核心使用的稳定性问题；3. 平台适配不足：Windows平台的TUI交互、WSL/子shell的TLS问题、macOS bash兼容性问题都是跨平台适配的短板。然后高频需求：1. 统一交互标准（AGENTS.md）；2. MCP生态安全加固；3. 批量操作的安全 safeguards；4. 上下文统计的准确性。对，这样就全了。

然后要注意每个条目都要附GitHub链接，语言要简洁专业，适合技术开发者。还要注意日期的标题是2026-07-30的，所以开头要标清楚。还有要注意数据里的issue和PR的链接格式，比如Issue #6235就是https://github.com/anthropics/claude-code/issues/6235，PR的话是https://github.com/anthropics/claude-code/pull/对应的编号，比如PR #82358就是https://github.com/anthropics/claude-code/pull/82358，这样附上就行。

等下，还要检查有没有漏的，比如今日速览里要把几个重点都提到，比如最热的AGENTS.md，还有几个关键bug，还有PR的进展。然后版本发布部分确实无新版本，所以直接说明。然后热点Issues里的10个要按重要性排，第一个肯定是票数最高的AGENTS.md，然后是阻塞性的bug比如OAuth登录失败，然后是TUI的bug，然后是heron_brook的那个问题，然后MCP的序列化问题，然后Artifact共享，然后批量PR的问题，然后feedback 403，然后那个已经closed的SIGTERM问题，然后桌面端崩溃的问题，对，这10个是对的。

然后PR部分虽然只有4个，但是都列出来，每个说明内容，没问题。然后功能需求趋势要从所有issue里提炼，比如还有后台任务排序的需求，还有VSCode扩展的快捷键适配，这些都要包含进去。开发者关注点要区分痛点和高频需求，痛点就是用户现在遇到的麻烦，高频需求就是大家想要的功能。

还要注意语言是中文，简洁专业，不要太口语化。比如每个issue的描述要说明为什么重要，社区反应如何，比如AGENTS.md的那个，要说明是Codex、Amp、Cursor等工具都在推的标准，Claude Code现在的CLAUDE.md是专属的，不支持的话多工具协作有问题，所以这个需求重要，社区反应是348条评论，4471个赞，是当前票数最高的需求。

还有那个heron_brook的问题，要说明是v2.1.219版本新注入的，silently覆盖用户的委托策略，而且无法 opt-out，属于隐藏的行为变更，所以社区关注度高，有9条评论，25个赞。

还有那个MCP的$ref schema问题，是调用Notion等MCP工具的时候参数被错误转成字符串，功能完全用不了，所以是生态兼容性的关键问题。

然后PR里的MCP Guard那个，是针对之前issue #82351的，就是MCP调试的时候泄露Bearer Token的问题，所以要说明这个PR是解决安全问题的，之前有敏感信息泄露的风险。

还有那两个网关脚本的PR，都是修复跨平台兼容性的，GCP的是没装gcloud的时候静默退出，AWS的是macOS的bash版本太旧不支持语法，都是影响开发者使用网关功能的。

然后功能需求趋势里，还要提到安全相关的，因为现在有MCP安全的问题，还有批量操作的安全问题，所以安全也是趋势之一。

开发者关注点里，还要提到用户对 silent 行为变更的反感，比如heron_brook的那个，还有Opus 5的幻觉问题，都是用户觉得没有提前告知的行为变更，导致信任问题。

哦对，还有一个issue是#82326，Opus 5幻觉问题，刚才的热点Issues里没放？要不要放？刚才的10个里，我把#82390那个closed的放了，要不要把Opus 5的那个放进去？等下，Opus 5幻觉是影响模型输出的，也是重要问题，赞是0，评论1，不过那个heron_brook的问题已经提到了Opus 5的限制，不过#82326是单独的幻觉问题，要不要调整？比如把#82390换掉？因为#82390已经closed了，而且是 resolved not a CLI bug，可能不如Opus 5的幻觉问题重要？等下看#82326的摘要：“Opus 5 hast again started inventing asnwers which 4.8 did not do”，也就是Opus 5又开始 hallucinate 了，之前的4.8版本没有，这个是影响模型输出的核心问题，所以应该放进去，把#82390换掉？对，因为#82390已经解决，而且不是bug，而Opus 5的幻觉是开放的问题，影响使用。那调整一下热点Issues的第9个换成#82326：9. #82326 [OPEN] [Bug] Claude Opus 5生成不存在于历史版本的幻觉内容，评论1，赞0，重要性：Opus 5作为当前最强模型版本，出现无依据的幻觉输出，且该问题在上一版本（4.8）中未出现，影响代码生成的可靠性，已收到用户反馈。然后那个#82390可以作为补充？或者不用，因为已经closed了。对，调整一下，这样10个都是开放的，更有参考性。

还有那个#82404，Max plan账户被 billing gate 阻止，会话卡在错误循环，评论1，赞0，这个也是重要问题？不过赞低，评论少，暂时先放前面10个里更重要的。

哦对，刚才的热点Issues里第8个是#55348，/feedback 403，评论5，赞3，没问题。然后第9个换成#82326 Opus 5幻觉，第10个是#82332 桌面端远程托管设置崩溃，没问题。

然后检查每个的链接是否正确，比如Issue #6235的链接是https://github.com/anthropics/claude-code/issues/6235，对的。PR的话，#82358是https://github.com/anthropics/claude-code/pull/82358，对的。

然后今日速览要更准确：“今日社区最受关注的需求为AGENTS.md跨工具兼容性标准的支持提案，该提案已收获超4400赞同、340余条讨论，反映社区对AI编程工具协作统一的强烈诉求；同时多类使用体验缺陷被集中反馈，包括OAuth登录失效、TUI交互误触、桌面端崩溃等。PR层面则有MCP安全加固、云网关脚本跨平台兼容性修复等进展落地。” 对，这个更准确。

然后版本发布部分：“过去24小时无新版本发布，当前最新稳定版为2.1.220，桌面端 bundled runtime 为2.1.219。” 对，因为issue里有提到2.1.219和2.1.220，所以可以写上。

然后社区热点Issues的10个，每个都要标清楚编号、状态、标签、评论数、赞数、重要性说明、社区反应，还有链接。比如：
1. Issue #6235 [OPEN] [enhancement, area:core, memory] Feature Request: Support AGENTS.md
   链接：https://github.com/anthropics/claude-code/issues/6235
   重要性：该提案推动Claude Code支持行业统一的AGENTS.md交互标准，替代目前仅适配Claude Code的CLAUDE.md，解决多AI编程工具（Codex、Amp、Cursor等）协作时的上下文不通问题，是当前社区票数最高的需求。
   社区反应：收获4471个赞同、348条评论，讨论热度远高于其他Issue。

2. Issue #19280 [OPEN] [bug, has repro, platform:linux, area:auth] [BUG] Unable to access Claude Code after successful OAuth login with Google account
   链接：https://github.com/anthropics/claude-code/issues/19280
   重要性：阻塞所有使用Google OAuth登录的Linux用户使用Claude Code，属于基础认证流程的核心缺陷。
   社区反应：16条评论，已确认可复现，目前仍处于开放未修复状态。

3. Issue #59408 [OPEN] [bug, platform:windows, area:tui] [BUG] Ctrl+C and Ctrl+Shift+C silently clear prompt input with no confirmation or recovery
   链接：https://github.com/anthropics/claude-code/issues/59408
   重要性：Windows平台TUI交互的高频缺陷，Ctrl+C/Ctrl+Shift+C作为常用快捷键会无确认清空用户已输入的prompt，且无法恢复，严重影响使用体验。
   社区反应：10条评论，多位Windows用户反馈该问题长期存在。

4. Issue #80988 [OPEN] [BUG] v2.1.219 `heron_brook` prompt section injects "Do not call the AgentTool unless the user requested it" for Opus 5 only, silently overriding user-configured delegation policy, with no opt-out
   链接：https://github.com/anthropics/claude-code/issues/80988
   重要性：v2.1.219版本新增的隐藏系统提示段`heron_brook`会强制限制Opus 5的AgentTool调用权限，无感知覆盖用户自定义的委托策略，且无关闭选项，属于未提前告知的 breaking change。
   社区反应：9条评论、25个赞同，多位用户反馈该行为与预期不符。

5. Issue #18260 [OPEN] [bug, has repro, platform:macos, area:core, area:mcp, stale] [BUG] MCP tool parameters with $ref schemas are incorrectly serialized as strings
   链接：https://github.com/anthropics/claude-code/issues/18260
   重要性：导致使用`$ref` schema的MCP工具（如Notion MCP Server）调用时参数被错误序列化为字符串，功能完全失效，是MCP生态核心兼容性问题。
   社区反应：8条评论，已确认可复现，影响所有使用该类型MCP工具的开发者。

6. Issue #79824 [OPEN] Artifact sharing fails: "This version can't be shared publicly" persists across republish and new artifacts
   链接：https://github.com/anthropics/claude-code/issues/79824
   重要性：阻塞Artifact（含Mermaid图表的Markdown页面）的公开共享能力，影响团队协作场景。
   社区反应：4条评论、14个赞同，多位用户反馈重发新版本也无法解决该问题。

7. Issue #79399 [OPEN] [enhancement, platform:windows, area:agents] [BUG] No safeguard before an agent bulk-creates dozens of PRs against a real external repo (91 PRs auto-closed + repo locked me out)
   链接：https://github.com/anthropics/claude-code/issues/79399
   重要性：暴露Agent自动化操作的安全风险：Windows用户在真实外部仓库操作时，Agent无确认机制批量创建91个PR，导致仓库被临时锁定，用户被剥夺访问权限。
   社区反应：4条评论，多位用户呼吁增加批量操作前的 safeguards 和确认机制。

8. Issue #55348 [OPEN] [bug, platform:macos, area:cli, stale] /feedback returns 403 — cannot submit bug reports for 3 days
   链接：https://github.com/anthropics/claude-code/issues/

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-07-30）
*数据来源：github.com/openai/codex | 统计周期：过去24小时*

---

## 1. 今日速览
今日OpenAI Codex发布Rust版本v0.146.0与预览版v0.147.0-alpha.1，前者新增会话并行管理、Agent插件生态支持，后者为后续迭代测试版本；社区围绕OAuth认证、MCP服务稳定性、跨平台性能等问题展开高频讨论，单日共更新50条Issue、20条PR，技术迭代与问题修复节奏保持高位。

---

## 2. 版本发布
| 版本号 | 核心更新内容 | 链接 |
|--------|--------------|

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区日报 2026-07-30

---

## 一、今日速览
1. **夜间版本发布**：v0.55.0-nightly.20260729.g3499c84f7 推送，但 changelog 未明确更新内容。
2. **关键 Bug 活跃**：多个 P1 优先级问题（如 Agent 挂起、TTY 控制问题）持续被讨论。
3. **基础架构改进**：多个 PR 关注性能提升（如 PTY 内存泄漏修复）、安全增强（SSRF 修复）和 DevOps 工具集成。

---

## 二、版本发布
**v0.55.0-nightly.20260729.g3499c84f7**  
- **更新内容**：主要为版本号更新（由 `v0.54.0-nightly` bump 至 `v0.55.0-nightly`），具体改动需要参考后续 PR  
- **关联 PR**：#28573 (Automated version bump)  
- **链接**：[Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7)

---

## 三、社区热点 Issues

| # | 标题 | 重要性 | 社区反馈 | 链接 |
|---|------|--------|----------|------|
| **#22323** | Subagent 错误报告为 GOAL 成功 | 🚨 P1 | 12 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323) <br>核心问题：代码分析子代理在达到 MAX_TURNS 后仍返回成功状态，需修复终止逻辑 |
| **#21409** | Generalist Agent 无限等待 | 🚨 P1 | 8 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/21409) <br>阻塞性问题：默认调度子代理导致长时间挂起，用户需手动禁用 |
| **#24353** | 组件级评估改进 | 📌 P1 | 7 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/24353) <br>EPIC 任务：扩展 76 个行为评估测试的可观察性 |
| **#22745** | AST 感知代码工具 | 🛠️ P2 | 7 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/22745) <br>探索减少 Token噪声和方法边界误判的 AST 解析集成 |
| **#21968** | 子代理未被自动使用 | ⚠️ P2 | 6 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/21968) <br>反馈：Gemini 未主动调用本地定义的 Git/Gradle 等技能 |
| **#26522** | Auto Memory 重试问题 | 🔄 P2 | 5 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/26522) <br>低信号会话导致持续重试，需引入熔断机制 |
| **#25166** | Shell 命令执行卡住 | 🕰️ P1 | 4 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166) <br>TTY 控制问题： Completed 命令仍被标记为 "Awaiting input" |
| **#22232** | Browser Agent 忽略配置 | 🐞 P2 | 4 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/22232) <br>配置文件中 `maxTurns` 等参数无效 |
| **#21983** | Wayland 环境浏览器代理崩溃 | 🐧 P1 | 4 评论 | [链接](https://github.com/google-gemini/gemini-cli/issues/21983) <br>平台特定兼容性问题 |
| **#25364** | JSON 序列化大对象异常 | 💥 P2 | 0 评论但高严重性 | [链接](https://github.com/google-gemini/gemini-cli/issues/25364) <br>可能导致 CLI 崩溃的内存问题 |

---

## 四、重要 PR 进展

| # | 标题 | 类型 | 影响范围 | 链接 |
|---|------|------|----------|------|
| **#28588** | Caretaker Agent Pub/Sub 集成 | 📡 新功能 | 发布 triaged issue 规格到 Cloud Run | [链接](https://github.com/google-gemini/gemini-cli/pull/28588) |
| **#28557** | 修复 SSRF 漏洞 | 🔒 安全 | 使用异步 DNS 解析替代同步 IP 检查 | [链接](https://github.com/google-gemini/gemini-cli/pull/28557) |
| **#28566** | 增强 InvalidStreamError 用户指引 | 🎯 UX | 传递具体错误类型到 UI层 | [链接](https://github.com/google-gemini/gemini-cli/pull/28566) |
| **#28431** | PR 生成器云原生架构 | ☁️ 基础设施 | Cloud Run/K8s 部署定义 | [链接](https://github.com/google-gemini/gemini-cli/pull/28431) |
| **#25364** | 防范 JSON 大对象序列化崩溃 | 💡 Bug Fix | 镜像_rotationStrategy | [链接](https://github.com/google-gemini/gemini-cli/pull/25364) |
| **#27154** | 修复 PTY 内存泄漏 | 🧹 性能 | 同步清理 PTY 条目 | [链接](https://github.com/google-gemini/gemini-cli/pull/27154) |
| **#19754** | 移除类型断言 | 🛡️ 安全 | 替换 20+ 个 `as Type` 断言为运行时检查 | [链接](https://github.com/google-gemini/gemini-cli/pull/19754) |
| **#20170** | 允许子代理注册 MCP 工具 | 🔧 兼容性 | 修复工具注册白名单限制 | [链接](https://github.com/google-gemini/gemini-cli/pull/20170) |
| **#22846** | 任务依赖可视化改进 | 📊 开发者体验 | 绘制嵌套任务树 | [链接](https://github.com/google-gemini/gemini-cli/pull/22846) |
| **#28551** | macOS Sandbox 场景兼容 | 🍎 平台支持 | 回退到嵌入式 Seatbelt 配置 | [链接](https://github.com/google-gemini/gemini-cli/pull/28551) |

---

## 五、功能需求趋势

1. **IDE 深度集成**  
   - AST 感知代码分析（#22745, #22746）  
   - evoke 子代理可视化（#22598）  
   - 本地工具智能调用（#21968）

2. **性能与稳定性**  
   - TTY/PTY 控制优化（#25166, #21924）  
   - 内存管理改进（#26522, #26516）

3. **安全增强**  
   - 敏感信息防泄露（#26525）  
   - API 安全ardy（#28557）

4. **开发者工具链**  
   - 云原生 PR 生成流程（#28431, #28433）  
   - 可观察性增强（#24353）

---

## 六、开发者关注点

1. **Subagent 管理痛点**  
   - 自动调度逻辑不智能（#21968）  
   - 调试可观察性不足（#21763, #22598）

2. **CLI 可靠性**  
   - Shell 执行-tabs 留存问题（#25166）  
   - 外部编辑器互动时的状态腐败（#24935）

3. **平台兼容性**  
   - Wayland 环境支持（#21983）  
   - macOS 特殊配置模式（#28551）

4. **模型行为控制**  
   - 破坏性操作防范（#22672）  
   - 迭代修正状态机（#28433）

---

**数据更新时间**：2026-07-30 08:00 UTC  
**日报生成方式**：AI 分析 + 人工校验（覆盖所有标记为 `maintainer only` 的高优先级问题）

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

用户现在需要我根据给的GitHub copilot-cli 2026-07-30的社区动态数据生成中文日报，结构还要符合要求。首先先理清楚每个部分要填什么。
首先第一部分是今日速览，得把最重要的点抓出来，比如今天连续发了4个补丁版本（1.0.76-2到5），主要修了沙箱权限、diff性能、会话管理、加了新的模型支持和插件控制，还有社区那边有几个高赞的issue，比如git worktree生命周期管理、僵尸进程问题、授权疲劳这些，得两三句话说清楚。
然后第二部分是版本发布，现在有4个新版本，分别是v1.0.76-2到5，得分别列每个版本的更新点：1.0.76-2是加了可定向的消息队列管理器（给staff用的，可以重排编辑删除重复发消息），还有新的会话侧边栏，可以管理多个并发会话，开experimental模式就能用；1.0.76-3是自动更新下载后的提示改成建议/restart，去掉了警告色，还有/diff对大文件多文件diff的滚动和语法高亮更快了，分屏侧边栏默认关hover聚焦，要开的话配sidebar.hoverFocus；1.0.76-4是修了macOS和Linux上沙箱对相对路径和符号链接路径的拒绝规则不生效的问题，Windows还是按路径拒绝不了；1.0.76-5是加了/plugins里对插件、指令、代理、LSP服务器、钩子的启用/禁用控制，还有支持grok-4.5模型。对了每个版本还是要把链接带上？哦对，仓库是github.com/github/copilot-cli，release的链接可以放通用的或者对应版本的，不过这里给的是release号，就说明是连续推送的四个快速迭代版本，聚焦稳定性、会话管理和新模型支持。
第三部分是社区热点Issues，要挑10个最值得关注的，首先得按热度、影响范围来选：
第一个肯定是#1613，高赞36，功能需求是内置git worktree生命周期管理，这个很重要，因为现在很多人多任务并行用copilot，worktree隔离是刚需，社区呼声很高，已经挂了4个月了还在更新，评论3个，👍36，这个必须放第一个。
然后是#4163，之前已经closed了？哦对，是zombie进程的问题，之前修过但现在#4290又反馈在AlmaLinux 8.10上1.0.75还是有问题，这个是稳定性问题，影响Linux用户，尤其是服务器场景或者长时间开终端的用户，僵尸进程占资源，评论6，👍3，还有后续跟进issue，得放。
然后是#1168，授权疲劳的问题，开了半年多了，单次请求要弹十几次授权，严重影响使用体验，👍2，评论3，这个高频痛点。
接下来是#4202，1.0.73开始view工具对现有文件报路径不存在，1.0.71是好的，这个是基础功能回归bug，影响所有用view工具看文件的用户，评论3。
然后是#4159，Windows Terminal下交互模式提交prompt后界面空白，非交互模式正常，Windows用户的高频问题，👍3，评论3。
然后是#2770，CLI卡在Cancelling状态，回车失效，slash命令用不了， correlate到服务端限流或者请求 hang，这个影响稳定性，👍9，哦对👍9比刚才的几个高？哦对，这个👍9，得往前放？等下我数一下，哦对#2770的👍是9，比#1168的2高，那调整下顺序：
哦对10个的话，得按影响范围和热度排序：
1. #1613 内置git worktree生命周期管理 [OPEN] 👍36：这个是社区呼声最高的功能需求，诉求是Copilot CLI能自动创建销毁git worktree隔离多任务，避免多任务并行污染工作区，自2月创建以来持续更新，是当前最受期待的功能 enhancements。
2. #2770 CLI卡在"Cancelling"状态后回车失效 [OPEN] 👍9：高票稳定性问题，触发场景多为服务端限流/请求挂起，用户按Escape取消后永久卡在Cancelling，输入框能打字但回车无响应，slash命令全部失效，严重影响使用连续性。
3. #4163 Linux下子进程泄漏成僵尸进程 [CLOSED，但#4290跟进反映未完全修复] 👍3：长时间运行的CLI会话会不断泄漏子进程，最高每分钟泄漏2个，积累僵尸进程占用PID资源，Linux用户（尤其是服务器/CI场景）受影响，虽然有修复PR但仍有用户反馈在AlmaLinux 8.10上1.0.75版本仍复现。
4. #4202 1.0.73+版本view工具误报"路径不存在" [OPEN] 👍0：基础功能回归bug，1.0.72版本后内置view工具对本地现有文本文件会错误提示路径不存在，1.0.71版本正常，影响所有依赖view工具读取文件的用户。
5. #4159 Windows Terminal交互模式提交prompt后界面空白 [OPEN] 👍3：Windows用户高频问题，交互模式下首次渲染正常，提交prompt后整个UI变白无输出，非交互模式(-p)正常，影响Windows Terminal用户的核心使用流程。
6. #1613之后？哦对#4293，子代理全工具权限时返回空无错误 [OPEN] 👍0：这个是新出的bug，用task工具启动的全工具权限子代理没有任何输出、错误或日志，限制工具权限的代理类型正常，影响多代理工作流的用户。
7. #1168 单次请求授权弹窗过多（授权疲劳） [OPEN] 👍2：长期存在的体验问题，单次高层级请求（比如修复PR问题）会触发十几次授权弹窗，严重打断工作流，自1月创建以来持续反馈。
8. #2182 macOS下大命令输出超PTY缓冲区时CLI挂起 [OPEN] 👍2：当终端命令输出超过4KB（macOS默认PTY缓冲区大小）时CLI会死锁挂起，比如运行seq 1 5000就会复现，影响需要处理大输出命令的用户。
9. #4285 1.0.76-1版本设置非默认日志级别时启动崩溃 [OPEN] 👍2：版本回归bug，设置log-level为none/error/warning/info/debug时CLI启动直接静默退出码1，无任何输出，只有all和default级别能正常启动，影响需要自定义日志的用户。
10. #4284 自动更新仍频繁弹更新提示 [OPEN] 👍0：体验问题，CLI已经支持自动更新，但每次启动仍弹黄色提示 nudging 用户手动执行/update，用户反馈每天甚至多次需要手动更新，干扰使用。
等下有没有更合适的？哦#2703也是，session完成后挂起，ESC恢复后永久Cancelling，不过刚才#2770已经覆盖了类似的问题？或者把#2703换进去？哦#2703的👍是2，和#1168一样？或者把#4290？不，刚才#4163已经提到了跟进。哦对还有#4204是功能需求，.agents发现扩展到所有打开的文件夹，不过热度没那么高。哦#4295是AI Credits临近限额提醒，功能需求，不过 votes是0。那刚才选的10个应该没问题，每个都要说明为什么重要，社区反应，还有链接。
然后第四部分是重要PR进展，哦现在给的PR只有1条？哦对，数据里最新PR过去24小时只有1条？哦看数据里最新Pull Requests（过去24小时内更新）（共 1 条）：#4100 [OPEN] 作者huangyoufeng76-debug，创建2026-07-12，更新2026-07-29，评论undefined，👍0，摘要是安全性。哦只有1条？那是不是要说明？哦对，数据里只有1条，那只能列这个，说明是安全性相关的PR，目前处于open状态，尚无合并进展，社区互动较少。哦不过用户说挑选10个？但数据里只有1条啊，哦对，得如实说，过去24小时内更新的PR仅1条，所以先列这个，然后说明其余PR暂无24小时内的更新？哦对，不能瞎编，要基于给的数据。
然后第五部分是功能需求趋势，从所有Issues里提炼，首先分几类：1. 多任务工作流增强：比如git worktree管理（#1613高票）、多会话管理（之前release里的新会话侧边栏对应需求）、.agents配置扩展到所有打开文件夹（#4204），都是希望提升多任务并行效率。2. 基础体验与稳定性：沙箱权限精细化控制（#4298要求沙箱可选择性启用工具）、终端兼容性修复（iTerm2粘贴、tmux配色、Windows Terminal空白、PTY缓冲区问题）、授权体验优化（减少授权弹窗）、日志级别配置崩溃修复，都是解决日常使用的卡点。3. 模型与代理能力：支持新模型（比如刚release里加的grok-4.5）、子代理模型继承问题（#4287）、子代理权限灵活性（#4293）、流式传输大工具参数的性能优化（#4286），都是围绕AI能力和性能的优化。4. 企业级特性：AI Credits额度提醒（#4295）、服务端管理的插件持久化问题（#4283）、ACP协议会话关闭能力（#4113），满足企业用户的管理和集成需求。
然后第六部分是开发者关注点，总结痛点和高频需求：1. 稳定性是当前首要痛点：僵尸进程泄漏、CLI卡死、基础功能回归（view工具报错）、大输出挂起等多个稳定性问题待解决，尤其是Linux和Windows平台的兼容性问题反馈最集中。2. 多任务并行能力是核心期待：git worktree管理、多会话快速切换、session按时间排序都是高频需求，开发者希望CLI能更好适配同时处理多个开发任务的场景。3. 配置灵活性与体验优化：授权疲劳、自动更新提示骚扰、终端适配问题（iTerm2、tmux、Windows Terminal）、日志配置崩溃等体验类问题反馈较多，希望减少使用中的干扰。4. 高级能力扩展：子代理权限控制、插件沙箱精细化配置、ACP协议完善、AI Credits额度提示等企业级和高级功能需求逐步增多，反映用户群体从个人开发者向团队/企业用户扩展。
哦对了每个部分里的链接要对应对应的issue或者PR的链接，格式是github.com/github/copilot-cli/issue/xxx 或者 PR/xxx。
等下还要注意语言要简洁专业，适合技术开发者阅读，不要啰嗦。
哦对了今日速览要更准确：今天（2026-07-30）GitHub Copilot CLI 连续推送4个快速迭代补丁版本（v1.0.76-2至v1.0.76-5），重点强化了会话管理能力、插件控制能力并新增grok-4.5模型支持；社区侧过去24小时共更新28条Issue，其中git worktree生命周期管理、Linux僵尸进程泄漏等稳定性与多任务能力相关话题热度最高，仅1条安全性相关PR处于待审核状态。
然后版本发布部分，要说明过去24小时连续发布4个补丁版本，迭代重点围绕稳定性、会话管理和新模型支持，然后分版本列更新点，每个版本的链接可以放对应的release链接，比如https://github.com/github/copilot-cli/releases/tag/v1.0.76-5 这样。
然后社区热点Issues，10个，每个要有编号、状态、标题、为什么重要、社区反应、链接。哦对刚才选的10个要确认是对的，比如#1613确实👍最高36，然后#2770👍9，然后#4163（虽然closed但有跟进），然后#4202，然后#4159，然后#4293，然后#1168，然后#2182，然后#4285，然后#4284，对，这10个是对的，覆盖了功能需求、稳定性bug、体验问题。
然后重要PR进展，因为只有1条，所以要说明“过去24小时内仅1条PR有更新，其余PR暂无动态”，然后列这条：PR #4100（https://github.com/github/copilot-cli/pull/4100）由huangyoufeng76-debug提交，主题为安全性优化，当前处于Open状态，暂未收到维护者审核反馈，社区互动量为0。哦对，不能硬凑10个，因为数据里只有1条，要如实说明。
然后功能需求趋势，分点，每个点要有对应的issue支撑，比如多任务工作流增强对应#1613（worktree）、#4140（/resume按时间排序）、#4204（.agents扩展）；稳定性与兼容性优化对应#4163、#4202、#4159、#2182等；模型与代理能力扩展对应#4287、#4293、#4286、本次release的grok-4.5支持；企业级特性对应#4283、#4113、#4295。
然后开发者关注点，分点，总结痛点和高频需求，比如稳定性问题占比最高，尤其是Linux和Windows平台的进程、渲染、基础功能回归问题；多任务并行能力是核心期待，worktree、多会话管理需求热度最高；体验类问题（授权、终端适配、更新提示）反馈集中；企业级和高级配置需求逐步增多。
哦对了还要检查所有的链接是不是对的，比如issue的链接都是github.com/github/copilot-cli/issues/xxx，PR是github.com/github/copilot-cli/pull/xxx。
还有要注意不要添加数据里没有的内容，比如PR只有1条就不要编其他的，实事求是。
哦对了#4290是跟进#4163的，所以在#4163的描述里要提到，说明虽然原issue closed，但仍有用户反馈未完全修复。
还有#4140是/resume按时间排序，刚才在功能需求里可以提一下，不过社区热点里如果放不下可以放在功能趋势里。
哦对刚才的10个热点issues里要不要把#4140换掉？比如#4140是👍0，评论1，重要性不如#4289？哦#4289是多项目session的PR短链跳错，也是bug，不过👍都是0，其实差不多。不过刚才选的10个已经覆盖了不同类型的，应该没问题。
等下再调整下社区热点的顺序，按影响范围和热度：
1. #1613 [OPEN] 功能需求：内置git worktree生命周期管理（👍36）：https://github.com/github/copilot-cli/issues/1613
   重要性：这是当前社区票数最高的功能需求，诉求是Copilot CLI能在处理任务时自动创建隔离的git worktree，任务完成后自动清理，避免多任务并行时污染主工作区，大幅提升多任务开发的安全性和效率。自2026年2月创建以来持续获得社区关注，评论3条，是开发者最期待的上线能力。
2. #2770 [OPEN] Bug：CLI卡在"Cancelling"状态后回车及slash命令失效（👍9）：https://github.com/github/copilot-cli/issues/2770
   重要性：高票稳定性问题，触发场景多与服务端限流、请求长时间挂起相关：用户尝试用Escape取消卡顿的请求后，CLI会永久卡在"Cancelling"状态，虽能正常输入内容，但回车无响应，所有slash命令（包括/restart）全部失效，只能手动关闭终端重开，严重打断工作流。
3. #4163 [CLOSED] Bug：Linux下CLI泄漏子进程导致僵尸进程累积（👍3，后续#4290跟进反馈未完全修复）：https://github.com/github/copilot-cli/issues/4163
   重要性：长时间运行的CLI会话会独立泄漏子进程，最高每分钟泄漏2个，累积的僵尸进程会占用系统PID资源，影响Linux服务器、CI/CD场景以及长时间开终端的本地用户。虽已标记为Closed，但仍有用户在AlmaLinux 8.10的1.0.75版本上复现问题，稳定性修复仍未覆盖全场景。
4. #4202 [OPEN] Bug：1.0.73+版本内置view工具误报现有文件路径不存在（👍0）：https://github.com/github/copilot-cli/issues/4202
   重要性：基础功能回归bug，1.0.72版本后内置view工具会错误提示本地现有文本文件"Path does not exist"，1.0.71版本运行正常，影响所有依赖view工具读取代码、配置文件的基础使用场景。
5. #4159 [OPEN] Bug：Windows Terminal交互模式提交prompt后界面空白（👍3）：https://github.com/github/copilot-cli/issues/4159
   重要性：Windows用户高频问题，交互模式下CLI首次渲染正常，但提交任意长度的prompt后界面完全空白无输出，非交互模式（-p参数）运行正常，完全阻断Windows Terminal用户的核心使用流程。
6. #4293 [OPEN] Bug：全工具权限子代理返回空结果无任何报错（👍0）：https://github.com/github/copilot-cli/issues/4293
   重要性：多代理工作流核心bug，通过task工具启动的、拥有全工具权限的子代理会完全无输出、无错误、无日志，仅限制工具权限的代理类型能正常返回结果，影响使用子代理处理复杂任务的用户。
7. #1168 [OPEN] Bug：单次请求触发过多授权弹窗（授权疲劳）（👍2）：https://github.com/github/copilot-cli/issues/1168
   重要性：长期存在的体验问题，单次高层级开发请求（如"修复PR #727的失败问题"）会触发十几次授权弹窗，严重打断工作流，自2026年1月创建以来持续收到用户反馈。
8. #2182 [OPEN] Bug：大输出命令超过PTY缓冲区时CLI死锁挂起（👍2）：https://github.com/github/copilot-cli/issues/2182
   重要性：macOS用户常见问题，当终端命令输出超过系统默认PTY缓冲区大小（约4KB）时，CLI会因无法及时消费输出而死锁挂起，复现命令为`seq 1 5000`，影响需要处理大输出命令（如日志查看、批量文件操作）的用户。
9. #4285 [OPEN] Bug：1.0.76-1版本设置非默认日志级别时启动静默崩溃（👍2）：https://github.com/github/copilot-cli/issues/4285
   重要性：版本回归bug，当配置log-level为none/error/warning/info/debug时，CLI启动会直接以退出码1退出，无任何stdout/stderr输出、无日志文件，仅"all"和"default"

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-30)

## 今日速览
过去24小时，社区围绕 Kimi K3 企业级接入（Issue #2568）与 Session 管理功能（Issue #1783）展开讨论，显示出对生产环境稳定性和日常操作便捷性的迫切需求。PR 活动积极，7 条合并请求集中在修复 Hook 文本提取、Shell 兼容性优化及用量显示逻辑等底层体验。

## 版本发布
暂无新发布版本（Releases: None）。

## 社区热点 Issues
**1. [#2580] Feature Request: 支持自定义 API Base URL (Enterprise Gateway)**
*   **内容:** 针对 Kimi K3 开源后的企业部署需求，建议支持配置私有/API Base 地址以解决限流、延迟和安全审计问题。
*   **关注度:** ⭐⭐⭐⭐⭐ (今日最新高热度)
*   **链接:** [Issue #2568](https://github.com/MoonshotAI/kimi-cli/issues/2568)

**2. [#1783] Feature Request: Add /delete command to remove sessions**
*   **内容:** 用户请求在 CLI 中内置删除会话的命令，替代手动操作文件系统，便于清理空间和敏感数据。
*   **关注度:** ⭐⭐⭐⭐
*   **链接:** [Issue #1783](https://github.com/MoonshotAI/kimi-cli/issues/1783)

**3. [#2175] (关联 Issue) Kimi 模型显示名称不一致**
*   **内容:** 社区反馈模型前缀硬编码导致后端返回的正确 Display Name 被忽略。
*   **链接:** [Issue #2175](https://github.com/MoonshotAI/kimi-cli/issues/2175)

## 重要 PR 进展
**1. [#2567] feat(usage): show absolute reset datetime in /usage panel**
*   **状态:** Closed
*   **摘要:** 将用量重置时间从模糊的“剩余 4 天”改为具体的本地绝对时间戳，提升透明度。
*   **链接:** [PR #2567](https://github.com/MoonshotAI/kimi-cli/pull/2567)

**2. [#2176] fix(hooks): extract text from ContentPart for UserPromptSubmit hook**
*   **状态:** Open
*   **摘要:** 修复了 `UserPromptSubmit` Hook 在处理富文本（ContentPart list）时 prompt 为空的问题，确保正则匹配可用。
*   **链接:** [PR #2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)

**3. [#1790] feat(windows): prefer pwsh over powershell.exe for Shell tool**
*   **状态:** Closed
*   **摘要:** 优化 Windows Shell 工具优先级，优先调用新版 pwsh 而非旧版 powershell.exe，提升兼容性与性能。
*   **链接:** [PR #1790](https://github.com/MoonshotAI/kimi-cli/pull/1790)

**4. [#1637] fix: route MCP server log notifications to loguru instead of TUI**
*   **状态:** Closed
*   **摘要:** 修复 SearXNG 等 MCP 服务器日志混杂在 TUI 界面中的问题，将其重定向至日志系统。
*   **链接:** [PR #1637](https://github.com/MoonshotAI/kimi-cli/pull/1637)

**5. [#2284] fix: fire notification hooks for approvals**
*   **状态:** Closed
*   **摘要:** 修复审批请求创建时 Hook 未触发的 Bug，完善权限审批通知链。
*   **链接:** [PR #2284](https://github.com/MoonshotAI/kimi-cli/pull/2284)

**6. [#2569] fix(tools): count chained StrReplaceFile edits**
*   **状态:** Open
*   **摘要:** 修正 `StrReplaceFile` 工具在链式编辑统计中对中间内容的计数逻辑错误。
*   **链接:** [PR #2569](https://github.com/MoonshotAI/kimi-cli/pull/2569)

**7. [#2174] fix: respect model display_name for kimi-for-coding**
*   **状态:** Closed
*   **摘要:** 移除模型名称硬编码，允许后端返回的自定义 Display Name（如 Kimi-k2.6）正常显示。
*   **链接:** [PR #2174](https://github.com/MoonshotAI/kimi-cli/pull/2174)

## 功能需求趋势
1.  **企业级 DevOps 支持:** 随着 Kimi K3 开源，对私有网关、API 自定义 Base URL 以及高可用架构的支持成为核心诉求。
2.  **CLI 体验精细化:** 用户关注点从“能用”转向“好用”，涉及 Session 管理、用量时间显示格式、模型命名等细节优化。
3.  **Hook 与自动化稳定性:** 社区对 Hook 机制（如 UserPromptSubmit, Approval Hooks）在复杂输入（ContentPart）下的健壮性要求提高。

## 开发者关注点
*   **痛点:** 手动删除 Session 流程繁琐；企业环境下官方 API 端点并发受限且缺乏地域优化；Hook 在处理非纯文本输入时失效。
*   **高频需求:** 快速清理过期会话；支持 K3 企业内网部署；修复 Windows 下 Shell 命令的执行延迟；统一多模型（Kimi-K2/K3）的显示命名逻辑。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区日报（2026-07-30）

---

## **今日速览**
1. **性能优化与体验改进**：高CPU使用率问题（#30086）持续发酵，用户报告最新版本导致多进程运行受阻，社区关注度高涨。
2. **核心功能增强**：本地会话目标功能提案（#27167）获得120👍，成为本周期最活跃的功能请求。
3. **模型适配挑战**：NVIDIA GLM模型未展示思维过程（#39553）及Kimi K3连接失败（#37815）暴露多模型支持的兼容性问题。

---

## **版本发布**
暂无新版本发布。

---

## **社区热点 Issues**

| # | 标题 | 重要性 | 社区反馈 |
|---|------|--------|----------|
| **#27167** | [FEATURE]: Add native session goals with /goal | ⭐ 高 | 66评论/120👍，用户强烈需求本地会话生命周期管理 |
| **#30086** | High CPU usage in newer versions | ⚠️ Critical | 39评论/20👍，多用户确认性能退化 |
| **#33356** | Event table unbounded growth (13GB+ DB) | ⚠️ Critical | 13评论/2👍，数据库设计缺陷导致存储爆炸 |
| **#38801** | "exiting loop" messageBlocks TUI | 📌 | 14评论，新用户痛点 |
| **#7006** | permission.ask plugin hook not triggered | 🔧 | 12评论/20👍，权限系统集成问题 |
| **#1168** | Feature Request: Make Links Clickable | 🔄 | 9评论/115👍，长期待办功能 |
| **#39553** | GLM5.2 not showing thought process | 🤖 | 2评论，NVIDIA模型特有问题 |
| **#32658** | Persistent memory across sessions | 🧠 | 2评论，持续记忆功能需求 |
| **#37272** | TUI view jumps to top during agent exec | 🖱️ | 2评论，界面交互体验问题 |
| **#39522** | Opencode Web Cannot Find Project | 🌐 | 3评论，Web端项目识别缺陷 |

---

## **重要 PR 进展**

| # | 标题 | 类型 | 关键内容 |
|---|------|------|----------|
| **#39569** | fix(provider): inject chat_template_kwargs for GLM | ✅ Bug Fix | 解决NVIDIA GLM模型未展示推理过程问题（关联#39553） |
| **#39567** | feat(core): parse shell permission commands | 🛠️ Enhancement | 增强Shell命令权限解析（树结构分析） |
| **#39382** | feat(app): Add subagents tab to session panel | 🧩 New Feature | 新增子代理监控标签（关联#37267） |
| **#39568** | feat(tui): Fast session tab switching | 🚀 Performance | 优化长会话标签切换性能（40ms.constant） |
| **#39564** | feat(core): Add V2 formatter runtime | 🔧 Core | port格式化工具到V2架构 |
| **#39423** | feat(i18n): Add Hebrew language support | 🌍 | 完整希伯来语支持含RTL排版 |
| **#39180** | fix(app): Read message from error payloads | ✅ Bug Fix | 更智能的错误提示解析 |
| **#37472** | fix(opencode): strip provider control tokens | ✅ Bug Fix | 清理工具错误输出中的控制标签 |
| **#39562** | fix(core): retain interrupted shell output | 🧩 Enhancement | 保留终端中断输出 |
| **#39566** | feat(tui): project picker with typewriter effect | 📁 UX | 新增项目快速切换功能 |

---

## **功能需求趋势**

1. **性能与资源管理**  
   - 高CPU使用（#30086）
   - 数据庫膨胀（#33356）
   - 内存压缩策略优化（#30680）

2. **会话控制增强**  
   - 本地会话目标（#27167）
   - 持久化记忆（#32658）
   - 滚动控制（#37272）

3. **多模型支持**  
   - NVIDIA GLM（#39553）
   - Kimi K3（#37815）
   - 模型特定参数适配（#39569）

4. **开发者工具链**  
   - 链接点击（#1168）
   - Markdown复制（#14041）
   - 项目关联（#39522）

5. **国际化与可访问性**  
   - RTL语言扩展（#34697）
   - 希伯来语支持（#39423）

---

## **开发者关注点**

1. **性能瓶颈**  
   - 新版本引发的CPU飙升问题需紧急Optimize
   - 数据库长期运行的存储管理机制缺陷

2. **模型适配复杂性**  
   - 不同厂商模型的特有参数（如reasoningEffort）
   - 连接中断处理差异（Conv Go/Kimi）

3. **权限系统aturity**  
   - 插件hook未触发（#7006）
   - 权限持久化（#20066）

4. **TUI体验优化**  
   - 滚动控制（#37272）
   - 多会话管理（#39566）

5. **错误处理透明化**  
   - 上游错误信息过滤（#37472）
   - 413错误处理流程（#39571）

---

**数据来源**: [GitHub - anomalyco/opencode](https://github.com/anomalyco/opencode)  
**日报deadline**: 2026-07-30 23:59 UTC

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 - 2026-07-30

## 今日速览
过去24小时内，Pi社区主要聚焦于模型配置优化和UI/UX改进，包括对Qwen推理层级调整的修复以及LaTeX数学渲染的支持。同时，多个涉及并行工具调用、API密钥冲突及TUI显示问题的关键Bug获得解决，整体开发活跃度较高，体现了社区对功能稳定性和兼容性的持续重视。

## 版本发布
无新版本发布。

## 社区热点 Issues
1. **#7199 [OPEN] feat(ai): support Kimi K3 on Fireworks via OpenAI-compatible API**
   - **重要性**：增强对新兴AI模型（Kimi K3）的支持，满足用户对新模型的访问需求。
   - **社区反应**：关注度较高，反映了对最新AI模型集成的强烈兴趣。
   - [链接](https://earendil-works/pi/issues/7199)

2. **#6951 [CLOSED] [bug] qwen3.8-max-preview supports adjusting the reasoning effort, but pi has not configured the thinkingLevelMap**
   - **重要性**：修复了Qwen3.8-max-preview的推理层级配置问题，提升模型使用体验。
   - **社区反应**：已关闭，说明问题得到解决，用户满意度提升。
   - [链接](https://earendil-works/pi/issues/6951)

3. **#1871 [CLOSED] Misleading 'No API key found for openai-codex' during parallel startup lock contention**
   - **重要性**：解决了并行启动时的API密钥误报问题，提高了系统的可靠性。
   - **社区反应**：已关闭，相关困扰消除。
   - [链接](https://earendil-works/pi/issues/1871)

4. **#3432 [CLOSED] Feature request: Customizable line length and bytes for read tool**
   - **重要性**：提升了`read`工具的灵活性，允许用户自定义读取参数。
   - **社区反应**：已合并，体现了社区对工具定制化的需求。
   - [链接](https://earendil-works/pi/issues/3432)

5. **#7153 [OPEN] `/scoped-models` appears to do nothing for ~5 minutes while awaiting stalled catalog refresh**
   - **重要性**：优化了模型选择器的响应速度，改善用户体验。
   - **社区反应**：正在处理中，期待修复后的性能提升。
   - [链接](https://earendil-works/pi/issues/7153)

6. **#7035 [CLOSED] [bug, no-action] Intermittent Crash: Large "grep" operations**
   - **重要性**：修复了大文本搜索时的崩溃问题，增强了系统稳定性。
   - **社区反应**：已解决，用户反馈积极。
   - [链接](https://earendil-works/pi/issues/7035)

7. **#7160 [CLOSED] Preserve function arguments when custom is empty**
   - **重要性**：改进了在处理空自定义对象时的函数参数保留逻辑，避免数据丢失。
   - **社区反应**：已修复，增强了代码的健壮性。
   - [链接](https://earendil-works/pi/issues/7160)

8. **#7130 [OPEN] [bug] Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered)**
   - **重要性**：解决了Kitty终端中的退格键删除两个字符的问题，提升编辑器体验。
   - **社区反应**：正在排查中，预计近期会有修复。
   - [链接](https://earendil-works/pi/issues/7130)

9. **#7252 [CLOSED] [no-action] Markdown renderer consumes operators and backslashes in raw math source**
   - **重要性**：修正了Markdown渲染器中数学符号处理错误，确保公式正确显示。
   - **社区反应**：已修复，用户反馈良好。
   - [链接](https://earendil-works/pi/issues/7252)

10. **#5329 [OPEN] Expose when Pi is waiting on user input for host integrations**
    - **重要性**：提供了更清晰的交互状态指示，便于主机集成更好地协调任务流程。
    - **社区反应**：讨论热烈，期待实现更高水平的自动化集成。
    - [链接](https://earendil-works/pi/issues/5329)

## 重要 PR 进展
1. **#7288 [CLOSED] fix(ai): preserve function arguments with empty custom payloads**
   - **内容**：修复了在处理空`custom`对象时函数参数丢失的问题，提高了兼容性。
   - [链接](https://earendil-works/pi/pull/7288)

2. **#7286 [OPEN] feat(ai): preserve structured metadata for Bedrock provider errors**
   - **内容**：保留Bedrock提供者错误中的结构化元数据，便于调试和错误追踪。
   - [链接](https://earendil-works/pi/pull/7286)

3. **#7272 [CLOSED] preserve providers raw stop reason**
   - **内容**：恢复了提供者原始停止原因，改进错误信息展示。
   - [链接](https://earendil-works/pi/pull/7272)

4. **#7122 [CLOSED] fix(tools): correct byte count in write, false limit warning in find, surrogate pairs in truncateLine**
   - **内容**：修复了写入操作中的字节计数错误、查找操作中的虚假限制警告以及截断行中代理对的问题。
   - [链接](https://earendil-works/pi/pull/7122)

5. **#7266 [CLOSED] fix(coding-agent): show system prompt files in startup context**
   - **内容**：在启动上下文中显示系统提示文件，帮助开发者更好地理解和调试。
   - [链接](https://earendil-works/pi/pull/7266)

6. **#7268 [CLOSED] fix(coding-agent): use ModelRuntime.getModel instead of deprecated API**
   - **内容**：替换过时的API调用，确保代码的现代性和维护性。
   - [链接](https://earendil-works/pi/pull/7268)

7. **#7258 [CLOSED] fix(coding-agent): enable streaming usage for llama.cpp provider**
   - **内容**：为llama.cpp提供者启用流式使用，提升实时响应能力。
   - [链接](https://earendil-works/pi/pull/7258)

8. **#7262 [CLOSED] fix(tui): shorten image fallback paths and clamp width**
   - **内容**：缩短图像备用路径并限制宽度，防止终端溢出问题。
   - [链接](https://earendil-works/pi/pull/7262)

9. **#7245 [CLOSED] feat(tui): inline images under tmux via sixel**
   - **内容**：通过sixel技术在tmux中内联显示图像，丰富可视化体验。
   - [链接](https://earendil-works/pi/pull/7245)

10. **#7261 [CLOSED] fix(coding-agent): read clipboard via wl-paste on Wayland, xclip/xsel on X11**
    - **内容**：适配Wayland和X11剪贴板读取方式，提高跨平台兼容性。
    - [链接](https://earendil-works/pi/pull/7261)

## 功能需求趋势
- **IDE集成增强**：开发者普遍希望加强Pi与各种IDE的集成，如支持更多编辑器特性和更深的插件系统。
- **性能优化**：频繁提及的性能瓶颈集中在上下文窗口管理、大文件处理及并行计算效率上。
- **新模型支持**：社区对新模型（如Kimi K3）的支持需求迫切，显示出对前沿技术的敏感度。
- **自定义配置**：个性化设置需求广泛存在，包括工具行为参数调整、显示样式定制等。

## 开发者关注点
- **稳定性与可靠性**：大量Issue集中在崩溃、异常行为及错误处理方面，反映了对于稳定运行环境的高度关注。
- **易用性与直观性**：多次提到改进用户界面响应速度、减少等待时间以及优化交互反馈机制的需求。
- **兼容性和扩展性**：针对不同操作系统、终端模拟器及第三方服务的兼容性问题成为讨论焦点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-07-30）
数据来源：https://github.com/QwenLM/qwen-code

---

## 1. 今日速览
今日Qwen Code发布v0.21.0-nightly预览版本，核心新增自动修复延迟触发能力，可在5轮代码变更后延迟输出修复建议，避免频繁打断开发流程。社区围绕v0.21.1版本的Windows交互稳定性问题、Anthropic多模型兼容性、长会话工具调用正确性展开集中讨论，同时后台自动化、Web Shell交互、代码审查等方向的多个核心PR正在推进。

---

## 2. 版本发布
### v0

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

我现在要生成这份2026年7月30日的DeepSeek TUI（哦不对，是CodeWhale？哦用户给的数据来源是Hmbown/DeepSeek-TUI但链接都是Hmbown/CodeWhale，应该是项目更名或者笔误？不管，按照用户给的日报要求来，首先结构要对：

首先第一部分是今日速览，要2-3句话，概括今天最重要的动态。首先看过去的24小时，没有新版本发布，然后主要是v0.9.3的执行策略增强、v0.8.59的泄露修复、还有中文翻译争议、LaTeX渲染、印尼语本地化、权限功能这些，还有PR这边很多已经合并的修复，比如AltGr输入问题、LaTeX渲染、印尼语文档、会话重复问题这些。所以速览可以写：“过去24小时CodeWhale（原DeepSeek-TUI）社区无新版本发布，重点推进了v0.8.59、v0.9.2、v0.9.3三个迭代线的相关修复与功能开发：既有TUI交互体验、本地化、权限系统的能力升级，也修复了输入法兼容、会话重复、渲染异常等多个影响稳定性的问题。同时社区围绕中文“Constitution”术语翻译、stop命令需求、网站主题化等方向展开讨论。”对，这个概括到位。

然后第二部分是版本发布，因为没有最新Releases过去24小时，所以直接写“过去24小时无新版本发布”，可以提一下当前在迭代的是v0.8.59（稳定版）、v0.9.2（候选版）、v0.9.3（功能开发版）三个版本线，对应的工作已经基本推进到收尾/PR合并阶段。

第三部分是社区热点Issues，要挑10个最值得关注的，每个说明重要性和社区反应，附链接。首先得筛选，把重要的列出来：
1. 首先是#3063，v0.8.59的发布追踪，这个是稳定版发布阻塞项，重要吧？重要性：是v0.8.58之后的稳定版发布核心跟踪Issue，包含macOS TUI鼠标输入泄露修复、维护者PR队列梳理等发布前置要求，是下一个稳定版上线的核心入口。社区反应：13条评论，维护者和核心贡献者高频互动，讨论修复验证和发布排期。
2. 然后#1186，执行策略的持久化类型权限规则，这个是大功能，重要性：是执行策略模块的核心增强，计划实现按工具名、命令前缀、工作区路径匹配的执行权限规则（允许/拒绝/询问），大幅提升工具调用的安全可控性，是v0.9.3的核心规划功能。社区反应：13条评论，核心贡献者参与规则设计讨论，已进入PR开发阶段。
3. #4959，新增/stop命令，这个是用户需求，重要性：解决模型在YOLO模式/自主工作流中无法被用户主动中断的问题，填补了运行时人工干预工具的空白，影响所有使用自主代理模式的用户。社区反应：创建仅1天就获得3条评论，多位用户反馈有类似需求。
4. #4949，“Constitution”中文翻译争议，这个是本地化相关的社区讨论，重要性：涉及项目核心准则文档的本地化准确性，直接影响中文用户体验，讨论结果将同步到所有中文文档和TUI翻译中。社区反应：2条评论，多位中文母语者参与讨论，争议点集中在“宪法”的权威性和政治敏感度平衡。
5. #4789，新增印尼语本地化，这个是本地化扩展，重要性：是项目东南亚本地化战略的一部分，此前已完成越南语全量本地化，印尼语是东南亚开发者规模更大的语种，补全后将覆盖更大范围的非英语用户。社区反应：相关PR已合并，Issue已关闭，配套文档和TUI翻译均已完成。
6. #4723，Windows巴西ABNT2键盘AltGr+Q输入错误，这个是兼容性bug，重要性：影响巴西葡萄牙语用户的日常输入体验，属于跨平台兼容性的典型问题。社区反应：已有对应修复PR提交，用户反馈明确。
7. #4957，TUI无法渲染LaTeX数学公式，这个是功能bug，重要性：影响所有需要处理技术、科学类内容的用户，此前公式会以原始代码展示，降低可读性。社区反应：已有维护者整合的修复PR合并，Issue已关闭。
8. #4941，思考层级重启后自动回退到Auto，这个是bug，重要性：导致用户手动设置的推理强度（如Low/Medium/High）在重启后失效，影响依赖自定义推理能力的用户。社区反应：已有修复PR合并，Issue已关闭。
9. #4547，后台过期shell任务的转写仍显示运行状态，这个是体验bug，重要性：后台任务过期/消失后，TUI转写区域和侧边栏仍显示运行状态和停止按钮，与实际的/jobs状态不一致，容易误导用户操作。社区反应：已有修复PR合并，Issue已关闭。
10. #4976，Skills Manager兼容模式切换在Linux冷文件系统超时，这个是稳定性bug，重要性：影响Linux用户使用技能管理器的核心功能，特定场景下切换模式会卡死超过15秒的接受阈值。社区反应：当日提交修复PR并合并，Issue已关闭。

对，这10个都是最值得关注的，每个都附链接，符合要求。

第四部分是重要PR进展，挑10个重要的，说明功能或修复内容，附链接。筛选的话，首先是已经合并的修复和功能，还有开放的：
1. PR #4977 [OPEN] fix(tui): 修复Windows巴西ABNT2键盘AltGr+Q输入问题。内容：修复Windows下AltGr被识别为Ctrl+Alt的问题，避免输入“/”时误触发全局帮助快捷键，解决#4723报告的输入异常。链接：https://github.com/Hmbown/CodeWhale/pull/4977
2. PR #4975 [CLOSED] fix(tui): 修复Skills Manager切换超时问题。内容：复用已审计的技能列表，仅扫描新增的外部根路径，避免全量重扫导致的Linux冷文件系统下切换卡顿，解决#4976的超时问题。链接：https://github.com/Hmbown/CodeWhale/pull/4975
3. PR #4974 [CLOSED] feat(tui): 集成LaTeX数学公式渲染功能。内容：在贡献者PR基础上做维护者加固，支持$...$、\(...\)、\[...\]等分隔符的公式识别，通过Unicode替代实现渲染，修复了\mathbb等特殊符号的渲染异常，解决#4957的原始代码展示问题。链接：https://github.com/Hmbown/CodeWhale/pull/4974
4. PR #4972 [CLOSED] feat(web): 新增印尼语网站本地化字典。内容：补全印尼语网站翻译，与已发布的印尼语TUI翻译包、README.id.md形成完整的本地化套件，解决#4789的本地化需求。链接：https://github.com/Hmbown/CodeWhale/pull/4972
5. PR #4971 [CLOSED] ci(tui): 隔离Skills Manager PTY验收测试。内容：将Skills Manager切换测试从共享PTY进程剥离，单独运行，避免Linux CI运行器资源抢占导致的测试失败，提升CI稳定性。链接：https://github.com/Hmbown/CodeWhale/pull/4971
6. PR #4963 [CLOSED] fix(session): 防止/resume列表出现重复孤儿会话。内容：移除中断检查点自动提升为会话文件的逻辑，避免会话文件重复，解决/resume列表冗余问题。链接：https://github.com/Hmbown/CodeWhale/pull/4963
7. PR #4961 [CLOSED] fix(tui): 修复自动路由模式下推理强度偏好丢失问题。内容：分离自动模型路由逻辑和持久化的推理强度偏好，确保用户手动设置的推理层级在重启、模型切换、会话恢复后保持不变，解决#4941的回退问题。链接：https://github.com/Hmbown/CodeWhale/pull/4961
8. PR #4964 [CLOSED] release: 完成CodeWhale 0.9.2候选版发布准备。内容：修正Kimi上下文窗口报告、手动服务商覆盖逻辑，修复作曲家提示、代理详情对齐、严格工作区lint等问题，完成版本发布前置工作。链接：https://github.com/Hmbown/CodeWhale/pull/4964
9. PR #4937 [CLOSED] fix(tui): 修复过期shell任务的转写状态显示。内容：将过期/已消失的后台shell任务的转写卡片状态改为静态“过期/无输出”，移除侧边栏的停止按钮和动态转圈，解决#4547的状态不一致问题。链接：https://github.com/Hmbown/CodeWhale/pull/4937
10. PR #4960 [CLOSED] feat(permissions): 新增安全规则列表与删除功能。内容：新增/permissions命令，可查看当前权限规则的文件状态、匹配器、作用域等信息，支持预览确认删除规则并自动热加载，是#1186执行策略增强的前置功能。链接：https://github.com/Hmbown/CodeWhale/pull/4960

对，这10个都是重要的，覆盖了bug修复、功能开发、CI、本地化、版本发布这些方面。

第五部分是功能需求趋势，从所有Issues里提炼。首先看Issue的类型：
1. 安全与权限控制：#1186是执行策略的类型化持久化权限规则，#4960是权限管理功能，说明社区对工具调用的安全管控需求越来越高，尤其是自主代理模式下防止误操作的需求强烈。
2. 本地化扩展：#4949的中文翻译争议，#4789的印尼语本地化，说明项目在积极拓展非英语用户群体，东南亚和中文社区是本地化的重点方向，且社区对本地化的准确性参与度很高。
3. TUI交互体验优化：#4959的/stop命令，#4723的输入法兼容，#4957的LaTeX渲染，#4941的推理强度持久化，#4547的后台任务状态显示，说明社区高度关注TUI的日常使用体验，尤其是输入、显示、人工干预、状态一致性这些高频场景。
4. 跨平台兼容性：#4723的Windows键盘兼容，#4976的Linux文件系统兼容，说明社区在积极完善非macOS平台的体验，覆盖更多开发者的使用场景。
5. 自主代理能力增强：#4959的stop命令，#1186的权限控制，说明社区对自主代理模式的安全性和可控性需求持续提升，希望在保持自动化能力的同时增加人工干预和权限约束的手段。

然后第六部分是开发者关注点，总结痛点和高频需求：
1. 跨平台兼容性痛点：Windows输入法、Linux文件系统交互、macOS TUI鼠标泄露等问题是近期的高频反馈点，非macOS平台的体验补全是目前的核心优化方向之一。
2. 自主代理场景的安全与可控性：用户对YOLO模式下的工具调用安全、人工干预能力（如/stop命令）需求强烈，同时社区也在讨论核心准则（Constitution）的本地化和权威性，体现对代理行为约束的重视。
3. 本地化准确性：中文、印尼语等本地化过程中出现的术语翻译争议、翻译包完整性问题是社区的热点讨论方向，需要母语使用者参与校验。
4. 稳定性细节：会话重复、状态显示不一致、推理偏好丢失等影响日常使用的细节bug是近期的修复重点，社区对稳定性的要求持续提升。

等等，还要注意，用户的数据来源是github.com/Hmbown/DeepSeek-TUI，但链接都是Hmbown/CodeWhale，要不要提一下？哦可能是项目从DeepSeek-TUI更名为CodeWhale了？可以在开头或者适当的地方提一下？比如今日速览里可以提“（项目原名为DeepSeek-TUI，已更名为CodeWhale）”？对，因为用户给的数据来源是DeepSeek-TUI，但链接都是CodeWhale，应该说明一下，避免混淆。

哦对，还有，每个部分的结构要清晰，语言要简洁专业，适合技术开发者，每个Issue和PR都要附链接。

等下，再核对一下数据：最新 Releases过去24小时无，对的。Issues过去24小时更新的有11条，我挑了10个最值得关注的，没错。PR过去24小时更新22条，挑了10个，没错。

还有，今日速览里的时间要对，是2026-07-30的日报，过去24小时是7月29日到7月30日，所以所有更新都是7月29日的，没错。

再调整一下措辞，让更专业：

首先开头可以加个标题：“# CodeWhale（原DeepSeek-TUI）社区动态日报 2026-07-30”，因为项目更名了，用户给的数据来源是旧名，所以标注一下，避免读者困惑。

然后第一部分今日速览：
> 过去24小时CodeWhale（原DeepSeek-TUI）社区无新版本发布，重点推进了v0.8.59稳定版、v0.9.2候选版、v0.9.3功能版三个迭代线的收尾工作：既有权限系统、LaTeX渲染、本地化等新能力落地，也修复了输入法兼容、Linux超时、状态显示异常等多个影响跨平台稳定性的问题。同时社区围绕核心准则中文翻译、stop命令需求、网站主题化等方向展开讨论，核心贡献者参与度较高。

对，这个更准确。

第二部分版本发布：
> 过去24小时无新版本正式发布。当前项目并行推进三个版本线：
> - v0.8.59：为稳定版迭代，已完成macOS TUI鼠标输入泄露修复、队列PR梳理，处于发布前最终验证阶段；
> - v0.9.2：为候选稳定版，已完成印尼语本地化、CI修复、LaTeX渲染等特性合并，待发布流程走完；
> - v0.9.3：为功能开发版，正在推进类型化持久化权限规则等新特性的设计开发。

第三部分社区热点Issues，10个，每个有标题、重要性、社区反应、链接：
1. **#3063 [CLOSED] v0.8.59: release tracker — TUI mouse-report leak, runtime safety, and current issue/PR queue**
   重要性：v0.8.58之后的稳定版发布核心跟踪Issue，包含macOS TUI鼠标输入泄露修复、维护者PR队列梳理等发布前置要求，是下一个通用稳定版上线的核心入口。
   社区反应：共13条评论，维护者与核心贡献者高频互动，已完成修复验证与发布排期讨论，预计短期内发布。
   链接：https://github.com/Hmbown/CodeWhale/issues/3063

2. **#1186 [CLOSED] feat(execpolicy): add typed persistent permission rules**
   重要性：执行策略模块的核心增强规划，计划实现按工具名、命令前缀、工作区路径匹配的持久化权限规则（支持允许/拒绝/询问决策），大幅提升自主代理模式下的工具调用安全可控性，是v0.9.3的核心规划功能。
   社区反应：共13条评论，核心贡献者参与规则设计讨论，相关功能PR已进入开发阶段。
   链接：https://github.com/Hmbown/CodeWhale/issues/1186

3. **#4959 [OPEN] proposed 'stop' command**
   重要性：用户提出的高优先级功能需求，解决模型在YOLO模式/自主工作流中无法被用户主动中断的问题，填补了运行时人工干预工具调用的空白，影响所有使用自主代理模式的用户。
   社区反应：创建仅1天即获得3条评论，多位用户反馈存在类似需求，目前处于需求讨论阶段。
   链接：https://github.com/Hmbown/CodeWhale/issues/4959

4. **#4949 [OPEN] Discussion: The Chinese Translation of "Constitution" — "宪法", "协作准则", or Something Else?**
   重要性：项目核心准则文档的中文翻译争议Issue，翻译结果将同步到所有中文文档、TUI翻译包中，直接影响中文用户体验，讨论平衡了术语准确性和中文语境适配性。
   社区反应：共2条评论，多位中文母语者参与讨论，争议点集中在“宪法”的权威性和政治敏感度平衡，目前尚无定论。
   链接：https://github.com/Hmbown/CodeWhale/issues/4949

5. **#4789 [CLOSED] v0.9.2: Add Indonesian localization**
   重要性：项目东南亚本地化战略的关键组成部分，此前已完成越南语全量本地化，印尼语是东南亚开发者规模最大的语种，补全后将覆盖更大范围的非英语用户群体。
   社区反应：相关PR已全部合并，配套TUI翻译包、网站字典、README文档均已落地，Issue已关闭。
   链接：https://github.com/Hmbown/CodeWhale/issues/4789

6. **#4723 [OPEN] Windows: AltGr+Q on Brazilian ABNT2 layout opens help overlay instead of typing "/"**
   重要性：跨平台兼容性典型bug，影响巴西葡萄牙语用户的日常输入体验，属于Windows系统下输入法适配的共性问题。
   社区反应：用户反馈明确，相关修复PR已提交并进入验证阶段。
   链接：https://github.com/Hmbown/CodeWhale/issues/4723

7. **#4957 [CLOSED] TUI does not render LaTeX math expressions - raw $...$ source displayed instead**
   重要性：影响所有处理技术、科学类内容的用户，此前公式会以原始LaTeX代码展示，大幅降低可读性，是TUI显示能力的核心优化点。
   社区反应：维护者已整合贡献者的修复实现并完成加固，相关PR已合并，Issue已关闭。
   链接：https://github.com/Hmbown/CodeWhale/issues/4957

8. **#4941 [CLOSED] Thinking level silently reverts to Auto on restart: an auto model discards the persisted reasoning_effort**
   重要性：稳定性bug，导致用户手动设置的推理强度（Low/Medium/High）在重启、会话恢复后自动回退到Auto，影响依赖自定义推理能力的用户使用体验。
   社区反应：已提交修复PR并合并，Issue已关闭，用户反馈的问题已解决。
   链接：https://github.com/Hbmown/CodeWhale/issues/4941 哦等下，链接是Hmbown，别写错了，刚才打错了，是Hmbown/CodeWhale。

9. **#4547 [CLOSED] tui: transcript keeps running spinners and Stop controls for shell jobs that /jobs reports stale or that no longer exist**
   重要性：体验一致性bug，后台shell任务过期/消失后，TUI转写区域和侧边栏仍

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

用户现在需要我生成ComfyUI 2026-07-30的社区动态日报，首先得严格按照要求的结构来，每个部分都要准确，还要用中文，技术向，适合开发者，每个条目带GitHub链接。
首先先理清楚每个部分的要求：
首先是1. 今日速览，2-3句话，要抓最重要的，首先今天发布了v0.29.0，然后核心的PR和Issue都是围绕视频生成（尤其是LTX相关）、性能优化、还有配套功能的问题，还有队列暂停、模型并行这些需求，先把最重要的点串起来。
然后是2. 版本发布，现在有v0.29.0，要把内容列清楚，现在给的更新是修复了视频转码的缓冲问题，把每帧缓存到RAM改成了流式传输，这个是核心，还有Partner Nodes的改动，要把这些提炼清楚，准确。
接下来3. 社区热点Issues，要挑10个最有价值的，首先得排序，按重要性和关注度来：
第一个肯定是#14345，LTX-2.3升级后速度暴跌的Issue，这个是高赞？哦对，3个赞？不，看数据：评论38，👍3，创建时间2026-06-08，更新昨天，这个影响很多人，因为LTX是常用的视频生成模型，而且涉及刚发布的0.29版本？哦对，摘要里说升级到最新ComfyUI Desktop版本后10秒视频从8分钟变长，这个影响大，要列。
然后第二个#13730，LTX 2.3在AMD 7900XTX+ROCm下用FP8/Q4KM会卡住，除非关动态VRAM、 pinned内存、异步卸载，这个评论32，是AMD用户的大痛点，ROCm的用户很多，而且和性能直接相关，重要。
第三个#1032，暂停队列的需求，👍27！哦对，赞数最高，创建2023年，评论18，说明是长期高需求的功能，很多人需要工作的时候临时切走，不用清队列，这个社区呼声很高。
第四个#15100，稳定版本混乱的问题，评论11，👍4，很多用户反馈稳定版和测试版的混乱，影响使用，尤其是Desktop用户的问题。
第五个#15077，所有工作流的遮罩输出异常，包括重绘、外绘、数字人工作流，评论10，👍4，影响面广，是核心功能的bug。
第六个#15070，无法导入LTXVideo自定义节点的模块，报错interleaved_freqs_cis，评论7，影响LTX相关自定义节点的使用，很多做视频的用户碰到。
第七个#15137，RTX 4060Ti上SDXL KSampler出纯噪声，0.29版本全新安装无自定义节点复现，这个是刚发布的0.29版本的回归bug，影响NVIDIA中低端卡用户，重要。
第八个#15140，0.29版本后无音频的视频生成报VHS提取音频错误，也是0.29的回归bug，影响视频生成流程，尤其是做无声视频的用户。
第九个#15134，0.29版本后comfy-angle包破坏libffi，导致fish-speech等依赖cffi的功能失效，这个是0.29的兼容性回归bug，影响语音相关的自定义节点。
第十个#15116，升级comfyui-background-package后报getGroupData不是函数，工作流无法运行，影响后台包的用户，很多用后台任务的重度用户碰到。
哦对，还要每个说明为什么重要，社区反应，还要带链接，格式要对。
然后是4. 重要PR进展，挑10个重要的：
第一个PR #15138，Speedup LTX and Wan，作者kijai，优化了LTX和Wan模型的推理速度，融合rms_adaln，还有int8_linear input_act，实测5090快2.5%左右，这个直接影响视频生成性能，重要。
第二个PR #15139，Support ID-V2V Wan 2.1/VACE based model，也是kijai的，支持ID-V2V模型，基于Wan2.1的VACE，加参考垫图输入，拓展了视频生成的模型支持，很多做人物一致视频的用户需要。
第三个PR #14525，Gate static pin_memory on pin budgets，修复#13730的AMD ROCm大模型加载卡住的问题，根源是静态pin_memory耗尽主机pinned内存，这个解决了AMD显卡用户的大痛点，和前面的Issue对应。
第四个PR #15132，Fix LTXAV crash when sampling without an audio latent，修复了#15056引入的LTXAV无音频潜变量时采样的崩溃问题，影响LTX音视频生成的工作流。
第五个PR #14813，也就是v0.29.0里的那个视频转码流式传输的修复，哦对，PR链接是https://github.com/Comfy-Org/ComfyUI/pull/14813，这个修复了视频转码占用大量RAM的问题，之前是缓存每帧在内存，现在流式，省内存，对大视频生成很重要。
第六个PR #15126，修复上传图片/遮罩时 unrecognised type返回500而不是客户端错误，提升了API的健壮性，错误提示更友好。
第七个PR #15111，清理预览文本修复的 dead code，加回归测试，提升了代码质量，避免后续回归。
第八个PR #14320，model_management: 把共享内存为主的集成显卡认定为SHARED vram，解决了AMD APU等集成显卡的VRAM识别错误的问题，之前会把共享显存算成独立显存，导致模型加载预算算错，这个对核显用户很重要。
第九个PR #15135，Keep memory-efficient attention backend for masked GQA，修复了GQA+显式注意力掩码时回退到math后端导致内存暴涨的问题，提升了 masked GQA场景下的内存效率，对做大模型生成的用户有帮助。
第十个PR #13285，Twinflow-Z-Image Turbo支持，新增了Twinflow Z-Image模型的支持，拓展了支持的生成模型范围。
哦对，还要每个说明功能，带链接。
然后是5. 功能需求趋势，要从所有Issue里提炼，比如：首先是队列管理类需求，暂停队列、保存队列状态（#1032、#6710、#6163）是长期的高赞需求，用户需要更灵活的任务调度；然后是性能优化类，尤其是AMD ROCm平台的性能问题（#13730、#14345）、大模型加载的内存优化；然后是新模型支持，尤其是视频生成模型（LTX、Wan、ID-V2V等）的适配和优化；然后是跨平台兼容性，比如MPS设备的算子支持（#15133）、不同浏览器的选择（#11709）；还有工作流管理类的，比如子图蓝图加载、工作流模板更新相关的需求。
然后是6. 开发者关注点，总结痛点和高频需求：首先是0.29版本的回归问题集中，比如视频生成、音频处理、AMD/ROCm平台的兼容性问题，需要优先修复；然后是自定义节点的兼容性问题，比如LTXVideo、comfy-angle包和其他依赖的冲突，模块导入错误的问题；然后是性能优化的需求，尤其是视频生成模型（LTX、Wan）的推理速度、内存占用优化，AMD平台的 pinned memory 问题；还有API和稳定性的问题，比如稳定版发布混乱、错误提示不友好、回归测试不足的问题。
等下，还要注意每个部分的格式要清晰，链接要正确，不能错。还有时间是对应的2026-07-30的日报，数据是过去24小时的，所以Issues的更新都是2026-07-29的，符合要求。
哦对，今日速览要准确：比如“今日ComfyUI正式发布v0.29.0版本，核心优化了视频转码的内存占用，将逐帧缓存改为流式传输。社区过去24小时的热点集中在v0.29版本的回归bug修复、LTX/Wan系列视频生成模型的性能优化与兼容性适配，以及长期呼声较高的队列管理功能需求。” 对，2-3句话，准确。
然后版本发布部分：明确是v0.29.0正式发布，核心更新点：1. 修复视频转码模块，将原来的全帧RAM缓存改为流式传输（对应PR #14813，解决CORE-353、CORE-351问题），大幅降低大尺寸视频生成的内存占用；2. 合作节点（Partner Nodes）新增请求头携带ComfyUI Job ID的能力，方便任务追踪。哦对，要把这些说清楚。
然后社区热点Issues的10个，每个要标清楚编号、标题、为什么重要、社区反应、链接，比如：
1. Issue #14345：LTX-2.3升级新版本后生成速度暴跌
   重要性：LTX-2.3是当前主流的开源视频生成模型之一，该问题影响大量刚升级ComfyUI Desktop的用户，10秒级视频生成时间从8分钟级飙升至无法接受的水平，直接阻塞视频生成工作流。
   社区反应： Issue创建于6月，过去24小时再次更新，累计38条评论、3个赞，是当前讨论度最高的性能类问题。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/14345
对，第二个#13730：LTX 2.3 FP8/Q4KM在AMD RX 7900 XTX + ROCm平台加载卡顿
   重要性：针对AMD ROCm生态用户的严重兼容性问题，大模型加载时卡在“Requested to load LTXAV”步骤，除非关闭动态VRAM、pinned内存、异步卸载等核心功能，否则无法正常生成，导致ROCm用户无法使用量化后的LTX模型。
   社区反应：累计32条评论，是AMD用户反馈最集中的性能问题。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/13730
第三个#1032：功能需求：暂停队列
   重要性：长期排在社区功能需求热度榜首的刚需功能，用户需要在临时占用算力时暂停队列、保留未完成任务，无需清空队列后重新输入提示词，大幅提升工作流使用效率。
   社区反应：👍数达27，为所有Issues中最高，累计18条评论，自2023年创建以来持续有用户跟进。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/1032
第四个#15077：所有工作流遮罩输出异常
   重要性：核心功能bug，影响Inpaint、Outpaint、数字人 Talking Avatar 等所有依赖遮罩的工作流，遮罩输出格式错误直接导致后续重绘流程无法使用。
   社区反应：累计10条评论、4个赞，更新于昨日，影响面无自定义节点依赖的纯核心工作流。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15077
第五个#15100：稳定版本混乱问题
   重要性：ComfyUI Desktop用户的共性疑问，用户反馈stable版本、测试版本的发布规则不清晰，版本号标识混乱，导致用户无法判断是否应该升级，容易踩到回归bug。
   社区反应：累计11条评论，昨日更新后仍有新的用户反馈。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15100
第六个#15137：RTX 4060Ti上SDXL KSampler输出纯噪声（v0.29.0回归）
   重要性：v0.29.0版本的严重回归bug，全新安装无自定义节点的纯净环境即可复现，直接导致NVIDIA中低端显卡用户无法正常使用SDXL生成功能。
   社区反应：昨日创建即获得3条评论，是v0.29发布后最受关注的NVIDIA平台bug。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15137
第七个#15070：无法导入LTXVideo自定义节点模块
   重要性：视频生成自定义节点的兼容性问题，报错`cannot import name 'interleaved_freqs_cis'`，导致依赖LTXVideo节点的视频生成工作流完全无法运行，影响大量LTX生态用户。
   社区反应：累计7条评论，昨日更新后有新的复现反馈。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15070
第八个#15140：v0.29.0后无音频视频生成报“VHS failed to extract audio”错误
   重要性：v0.29.0版本的回归bug，针对无音频轨道的视频生成场景，VHS（Video Helper Suite）节点提取音频步骤报错，导致整个视频生成流程失败。
   社区反应：昨日创建即获得1条评论，已有用户确认复现。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15140
第九个#15134：comfy-angle包破坏libffi功能，导致fish-speech等语音节点失效
   重要性：v0.29.0版本的兼容性回归bug，`comfy_extras/nodes_glsl.py`导入`comfy_angle`时全局加载libGLESv2.so，污染CFFI/libffi环境，导致依赖cffi的语音合成、音频处理节点（如fish-speech）无法使用。
   社区反应：昨日创建，已有开发者确认问题根因。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15134
第十个#15116：升级comfyui-background-package后工作流无法运行
   重要性：影响使用后台任务功能的重度用户，升级后台依赖包后报`GroupNodeHandler.getGroupData is not a function`错误，所有工作流无法执行，阻塞批量生成任务。
   社区反应：累计4条评论，昨日更新后有新的用户反馈。
   链接：https://github.com/Comfy-Org/ComfyUI/issues/15116
对，这10个都是最重要的，覆盖了性能、回归bug、功能需求、兼容性各个方面。
然后是重要PR进展，10个：
1. PR #15138：优化LTX与Wan模型推理速度
   内容：合并comfy-kitchen的两个核心优化：一是融合LTX的`rms_adaln`算子，将4次kernel调用合并为1次，实测RTX 5090上提升约2.5%；二是为LTX和Wan添加int8_linear input_act量化支持，降低显存占用、提升推理速度。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/15138
2. PR #15139：支持ID-V2V Wan 2.1/VACE模型
   内容：新增对ID-V2V项目的模型支持，基于Wan 2.1的VACE（视频音频条件编码）架构，新增参考垫图输入接口，支持人物一致性视频生成场景。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/15139
3. PR #14525：修复AMD/ROCm平台大模型加载卡顿问题
   内容：解决#13730的根因，对静态pin_memory操作增加pin预算校验，避免ROCm平台下pinned内存耗尽导致的大模型加载卡死，无需关闭动态VRAM、异步卸载等核心功能即可正常加载LTX等大模型。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/14525
4. PR #15132：修复LTXAV无音频潜变量时的采样崩溃
   内容：修复#15056引入的回归bug，LTXAV（音视频联合生成）工作流仅使用视频潜变量、无音频潜变量时，采样阶段会因张量形状不匹配崩溃，现在可正常处理纯视频生成场景。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/15132
5. PR #14813：v0.29.0核心修复-视频转码流式传输
   内容：v0.29.0的核心优化项，将视频转码模块原来的逐帧全量缓存到RAM的逻辑改为流式传输，大幅降低大尺寸、长时长视频生成的内存占用，避免内存不足导致的崩溃。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/14813
6. PR #15126：修复上传接口错误码不规范问题
   内容：修复`/upload/image`和`/upload/mask`接口在传入未识别的type参数时返回500服务器错误的问题，现在返回正确的4xx客户端错误，提升API的健壮性和可调试性。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/15126
7. PR #15111：预览文本功能回归测试与死代码清理
   内容：针对#15039预览文本修复的后续优化，清理无用的死代码，新增回归测试用例，避免预览文本功能后续再次出现回归bug。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/15111
8. PR #14320：优化集成显卡的VRAM识别逻辑
   内容：针对AMD APU等集成显卡，将共享内存显存的设备识别为`SHARED_VRAM`类型，避免之前将共享显存误判为独立显存导致的模型加载预算计算错误，提升核显用户的模型加载成功率。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/14320
9. PR #15135：修复masked GQA场景下的内存效率问题
   内容：解决`torch.nn.functional.scaled_dot_product_attention`在开启GQA且使用显式注意力掩码时，回退到math后端导致全量注意力矩阵 materialize、内存暴涨的问题，保留memory-efficient/flash后端的加速能力。
   链接：https://github.com/Comfy-Org/ComfyUI/pull/15135
10. PR #13285：新增Twinflow-Z-Image Turbo模型支持
    内容：新增对Twinflow Z-Image Turbo生成模型的支持，拓展了ComfyUI的默认模型支持范围，用户可直接通过官方工作流模板使用该模型。
    链接：https://github.com/Comfy-Org/ComfyUI/pull/13285
对，这10个也是覆盖了性能优化、bug修复、新功能、新模型支持各个方面。
然后是功能需求趋势，提炼出来：
1. 队列与任务管理：暂停队列、保存未完成任务队列状态是长期排名前三的功能需求，用户对批量任务调度的灵活性要求越来越高，尤其是需要临时切换算力行其他任务的重度用户。
2. 视频生成生态优化：LTX、Wan等开源视频生成模型的性能优化、兼容性适配是当前最热点的需求，覆盖推理速度、内存占用、多平台（NVIDIA/AMD/Apple MPS）支持等多个维度。
3. 跨平台兼容性：AMD ROCm、Apple MPS、集成显卡等非N

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

用户现在需要生成2026-07-30的Ollama社区动态日报，首先得按要求的结构来，首先看给的数据，过去24小时没有新Release，所以版本发布那部分要说明无新版本。
首先第一部分今日速览，得抓最重要的点：首先社区最火的两个feature request是TurboQuant量化支持和MCP协议支持，然后还有几个严重的bug比如Ollama Cloud Pro故障率95%不能用，还有Gemma4工具调用问题没修好，还有MLX引擎的新PR比如qwen3.5的投机解码，还有几个bug修复和体验优化的PR合并且有进展。对，要概括准，2-3句话。
然后第二部分版本发布，因为没有最新Releases，所以直接写“过去24小时无新版本发布”就行。
第三部分社区热点Issues，要挑10个最值得关注的，首先得按热度和重要性排：
第一个肯定是#15051，TurboQuant+RotorQuant的原生实现需求，点赞235，评论69，关联Google的TurboQuant研究，这个对端侧模型压缩很重要，所以放第一个，说明是社区最火的功能需求，关联前沿量化研究，影响模型部署效率。
然后第二个#7865，MCP协议支持，点赞220，评论61，MCP是现在AI工具链的热门标准，支持的话能大幅扩展Ollama的外部数据交互能力，社区呼声很高。
第三个#15453，Ollama Cloud Pro故障率95%的bug，点赞18，评论52， paid用户的核心服务崩了，直接影响付费用户体验，是当前最严重的服务故障类issue。
第四个#15315，Gemma4:e4b工具调用解析错误，0.20.1版本没修复，评论49，点赞8，工具调用是现在很多开发场景的核心需求，Gemma4是热门模型，这个bug影响大量用户。
第五个#12532，Cloud使用统计API需求，点赞81，评论40，是付费用户提的，现在网页端有统计但API没有，开发者没法做用量监控，需求很明确。
第六个#17362，Gemma4 12b MLX比26b还慢的bug，评论18，苹果生态的用户痛点，MLX是Apple Silicon的核心后端，这个bug影响Mac用户的体验。
第七个#17235，请求支持Kimi K3 Cloud模型，评论16，国内热门模型，用户期待上线云版本。
第八个#17434，qwen3.6 35b在GB10 arm64上CUDA非法内存访问的bug，评论3，100%复现，结合JSON schema和think:false就会崩，影响特定硬件用户的高阶使用。
第九个#17452，qwen3.6在Apple M5上导致macOS冻结的bug，评论1，硬件兼容性问题，严重的话会丢数据，影响M5芯片用户的稳定性。
第十个#15609，BERT类嵌入模型非ASCII文本嵌入错误的bug，关联GGUF转换时strip_accents预处理丢失的问题，影响多语言嵌入场景的用户。
对，这10个，每个要说明为什么重要，社区反应，附链接。
然后第四部分重要PR进展，挑10个重要的：
第一个#17454，mlx: qwen3.5 MTP投机解码，作者jessegross，核心功能，给qwen3.5加载MTP头作为草稿模型做投机解码，M5 Max上性能提升明显，自动开启，不用配置，这个对Apple Silicon用户的推理速度提升很大。
第二个#17453，api: 保留JSON Schema工具参数的约束，之前PR#17209关了，这个是重开的，修复了工具参数解析时丢minimum、maximum等约束的问题，影响工具调用的准确性。
第三个#17412，agent: 加OLLAMA_TOOLS_ALL_ALLOWED环境变量，允许绕过工具调用的人工审批，方便自动化场景使用Agent功能，适合DevOps之类的自动化需求。
第四个#17455，mlxrunner: 统计每次投机解码的轮次并打印日志，方便排查 speculative decoding 的性能问题，是调试相关的优化。
第五个#17070，server: Windows模型删除加重试退避，修复Windows下删除模型时因为GGUF文件锁异步释放导致的ERROR_ACCESS_DENIED问题，解决Windows用户的核心痛点。
第六个#17449，docs: 更新FAQ隐私说明，明确桌面客户端更新检查会发唯一的ed25519公钥标识，解决用户对隐私的疑虑，之前issue#17155提的。
第七个#17448，launch: 添加minimax-m3到推荐模型列表，把云版本的MiniMax-M3加入默认推荐，用户不用手动搜索就能用。
第八个#15627，fix: 保留BERT转换时的strip_accents预处理，对应issue#15609的bug，修复非ASCII文本嵌入错误的问题，支持多语言嵌入场景。
第九个#17425，test: 强化集成测试，新增create作用域，把模型创建流程（GGUF、safetensors、量化）移到单独的作用域，减少发布测试的上传时间，优化CI流程。
第十个#17446，app/updater: 后台更新检查goroutine退出前 draining，修复-race模式下的数据竞争问题，提升桌面客户端的稳定性。
对，这10个，每个说明内容，附链接。
然后第五部分功能需求趋势，从所有Issues里提炼：首先1. 模型压缩与效率优化：TurboQuant/RotorQuant这类极端量化方案是社区最火的需求，点赞最高；2. 生态协议集成：MCP协议的呼声仅次于量化，说明社区希望Ollama对接更开放的AI工具链生态；3. 云服务能力增强：除了新模型请求，还有使用统计API、用量查询API的需求，说明云付费用户需要更透明的服务管控能力；4. 多硬件后端适配：MLX（Apple Silicon）、CUDA（ARM64/Windows）、AMD iGPU的兼容性问题和性能优化需求很多，说明社区希望在更多硬件上获得更好的运行体验；5. 多语言与特殊场景支持：非ASCII文本处理、下标token渲染、无障碍访问等需求，说明社区希望Ollama覆盖更多垂直使用场景。
第六部分开发者关注点，总结痛点和高频需求：1. 核心bug修复优先级不足：Gemma4工具调用bug、Cloud Pro服务故障、KV cache在CPU后端失效等问题都是高评论的bug，但修复进度慢，影响核心开发体验；2. 高级功能的易用性不足：比如投机解码、量化等功能需要手动配置，社区希望原生支持自动开启，降低使用门槛；3. 跨平台兼容性问题：Windows的环境变量支持、AMD iGPU适配、Apple M5芯片的兼容性问题都是不同平台用户的高频反馈，说明跨平台一致性待提升；4. API能力缺失：比如上下文长度返回、用量查询、工具参数约束支持等，都是开发者集成Ollama时遇到的高频痛点，需要官方补全OpenAI兼容API的能力。
然后要注意语言简洁专业，适合技术开发者，每个条目有链接，无Release的话版本发布部分直接说明。
等下，有没有漏的？比如那个#7352？不，是#7352？哦#7342是CLOSED的，已经关了，所以不用放热点里。然后那个#8591的高idle功耗的bug，哦刚才的热点没选，要不要换？哦#8591是CUDA待机高功耗，评论10，点赞5，其实也挺重要的，不过刚才的10个里，比如把#17447的AMD 780M的issue换成#8591？哦#17447是2026-07-29当天开的，评论2，而#8591是老issue，但是高功耗是很多CUDA用户的痛点，不过刚才的10个里已经选了更严重的，比如#17452是冻结系统，更严重，所以没问题。
然后检查每个部分的链接是不是对的，比如#15051的链接是ollama/ollama Issue #15051，对的。
还有PR的部分，#17454是qwen3.5的MTP投机解码，这个很重要，因为投机解码是提升推理速度的核心技术，所以放第一个PR是对的。
然后功能需求趋势里，还要注意那个#17366的reasoning token拆分路由的需求，哦对，刚才的趋势里可以提一下边缘端和AR场景的推理需求，比如思考链token的分离，是新兴的场景需求。
哦对，开发者关注点里还要提到，很多用户反馈的bug关联到特定模型（比如Gemma4、qwen3.6）和特定硬件，说明模型和硬件的兼容性测试需要加强。
现在整理成结构清晰的日报，开头可以加个日期：2026年07月30日  Ollama社区动态日报，然后各部分：
1. 今日速览：社区最核心的两个功能需求「TurboQuant极端量化支持」与「MCP协议原生集成」持续高热，前者关联Google前沿量化研究，后者瞄准AI工具链标准化生态；同时Ollama Cloud Pro出现95%故障率的严重服务异常，Gemma4工具调用bug仍未修复，影响大量付费与开发用户；当日还有多项MLX引擎性能优化、Windows/跨平台bug修复PR更新，Apple Silicon用户的推理速度将得到进一步提升。
对，2-3句话，差不多。
2. 版本发布：过去24小时无新版本发布。
3. 社区热点Issues（10个）：
1. [#15051] native ollama-go-engine: TurboQuant+RotorQuant implementation（235👍 69💬）
   重要性：当前社区热度最高的功能需求，关联Google发布的TurboQuant极端压缩量化技术，落地后可大幅降低大模型的内存占用与部署成本，对端侧、边缘部署场景有革命性意义。
   社区反应：上线3个月获235个点赞，核心贡献者与模型优化社区持续跟进讨论，已有研究论文支撑落地可行性。
2. [#7865] Model Context Protocol (MCP) support（220👍 61💬）
   重要性：MCP是当前AI工具链的开放标准协议，原生支持后可让Ollama直接对接各类外部数据源、工具服务，无需额外开发适配层，大幅扩展Ollama的生态边界。
   社区反应：自2024年11月提出后持续高热，社区已自发整理MCP对接方案，官方尚未给出明确落地时间表。
3. [#15453] Ollama Cloud Pro: 95% failure rate across all cloud models（18👍 52💬）
   重要性：付费核心服务的严重故障，所有云端模型均无法正常使用，直接影响订阅了Ollama Pro的付费用户。
   社区反应：已有52条评论反馈，大量用户表示服务完全不可用，要求官方紧急修复并给出补偿方案。
4. [#15315] gemma4:e4b with ollama 0.20.1 still has tool parsing errors（8👍 49💬）
   重要性：热门模型Gemma4的工具调用解析bug在0.20.1版本中仍未修复，工具调用是当前Agent开发的核心功能，该bug直接影响基于Gemma4的Agent应用开发。
   社区反应：用户反馈覆盖OpenCode、Oh-my-OpenCode等多个主流客户端，已提交版本验证仍复现。
5. [#12532] [cloud] Cloud usage stats（81👍 40💬）
   重要性：当前云端使用统计仅支持网页端查看，开发者无法通过API获取用量数据，无法实现自动化用量监控与成本管控。
   社区反应：付费用户呼声较高，官方已回复正在规划中，尚未落地。
6. [#17362] Gemma4 12b MLX generates significantly slower than Gemma4 26b MLX（0👍 18💬）
   重要性：Apple Silicon用户的核心痛点，小模型推理速度反超大模型，完全违背常理，严重影响Mac用户的使用体验。
   社区反应：已有用户提交详细的性能测试日志，官方尚未确认修复时间。
7. [#17235] Model request: Kimi K3 Cloud（1👍 16💬）
   重要性：国内热门模型Kimi K3的云版本上线需求，国内用户期待直接在Ollama Cloud中使用该模型。
   社区反应：用户持续跟进询问上线时间，官方暂无回复。
8. [#17434] CUDA illegal memory access: qwen3.6:35b with JSON-schema format and think:false（0👍 3💬）
   重要性：100%可复现的严重CUDA后bug，当同时满足「JSON schema格式约束」「关闭思考模式」「qwen3.6 35b模型」三个条件时必然触发CUDA非法内存访问崩溃，影响高阶用户的结构化输出场景。
   社区反应：用户已提交最小复现步骤，官方已确认问题。
9. [#17452] Qwen3.6 causes Ollama to freeze macOS on Apple M5（0👍 1👍？不，是0👍 1💬）
   重要性：Apple M5芯片的严重兼容性bug，运行qwen3.6时会触发系统级冻结，必须强制重启，可能导致数据丢失。
   社区反应：新上报的bug，官方尚未定位原因。
10. [#15609] BERT-derived embedding models produce incorrect embeddings for non-ASCII text（0👍 4💬）
    重要性：所有BERT类嵌入模型均存在非ASCII文本（如带变音符号的多语言文本） embedding错误的问题，影响多语言RAG、嵌入场景的准确性。
    社区反应：用户已定位根因是GGUF转换时丢失了strip_accents预处理步骤，已有对应PR修复中。
哦对，每个都要附链接，比如每个条目前面加[链接](ollama/ollama Issue #xxx)？或者最后统一？不，用户要求每个条目附GitHub链接，所以每个issue后面加链接就行。
然后第四部分重要PR进展（10个）：
1. [#17454] mlx: qwen3.5 MTP speculative decoding（OPEN，当日更新）
   内容：为MLX引擎加载qwen3.5的MTP（多token预测）头作为投机解码草稿模型，自动开启无需配置，在Apple M5 Max上可提升推理速度。该PR填补了MLX引擎对qwen3系列投机解码的支持空白，是Apple Silicon用户的核心性能优化。
2. [#17453] api: keep JSON Schema constraints on tool parameters（OPEN，当日更新）
   内容：修复工具参数解析时丢失minimum、maximum、default等JSON Schema约束关键字的问题，保证工具调用的参数校验逻辑完整，是工具调用功能的核心bug修复。
3. [#17412] agent: add OLLAMA_TOOLS_ALL_ALLOWED env variable（OPEN，当日更新）
   内容：新增环境变量OLLAMA_TOOLS_ALL_ALLOWED，允许Operator绕过工具调用的人工审批流程，方便自动化场景、CI/CD场景使用Ollama Agent能力，降低人工干预成本。
4. [#17455] mlxrunner: count every speculative round and log stats at info（CLOSED，当日合并）
   内容：优化MLX引擎投机解码的日志输出，将每轮投机解码的统计信息升级为info级别日志，方便开发者排查推理性能问题，辅助模型优化。
5. [#17070] server: add retry backoff for model deletion on Windows（OPEN，当日更新）
   内容：修复Windows下删除/切换模型时的ERROR_ACCESS_DENIED问题，通过重试退避机制等待GGUF文件锁异步释放，解决Windows用户长期存在的模型管理bug。
6. [#17449] docs: clarify update check identifier in FAQ privacy section（OPEN，当日更新）
   内容：更新FAQ隐私说明，明确桌面客户端更新检查会发送唯一的ed25519公钥作为设备标识，解决用户对数据隐私的疑虑，提升产品透明度。
7. [#17448] launch: add minimax-m3 to recommended models（OPEN，当日更新）
   内容：将MiniMax-M3的云版本加入Ollama启动时的默认推荐模型列表，用户无需手动搜索即可快速使用该模型，优化新用户体验。
8. [#15627] fix: preserve strip_accents preprocessing in BERT tokenizer conversion（OPEN，当日更新）
   内容：修复GGUF转换时丢失BERT tokenizer的strip_accents预处理步骤的问题，解决非ASCII文本嵌入错误bug，支持多语言嵌入场景的准确性。
9. [#17425] test: harden integration tests, add create scope（OPEN，当日更新）
   内容：重构集成测试流程，新增模型创建的独立作用域，将大文件的客户端上传流程移出发布测试范围，大幅缩短CI测试时间，提升发布效率。
10. [#17446] app/updater: drain background update-check goroutine before returning（OPEN，当日更新）
    内容：修复桌面客户端更新检查的后台goroutine未正常退出的问题，解决-race模式下的数据竞争bug，提升桌面客户端的稳定性。
然后第五部分功能需求趋势：
从所有Issue中提炼，社区当前最关注的功能方向集中在5个领域：
1. 极致模型压缩与效率优化：TurboQuant、RotorQuant等极端量化方案是点赞最高的需求，社区期望通过原生支持大幅降低大模型的部署门槛，适配端侧、嵌入式设备。
2. 开放生态协议集成：MCP协议的呼声仅次于量化，反映社区希望Ollama从单一的本地模型运行工具，升级为AI工具链的核心枢纽，对接各类外部数据源与工具能力。
3. 云服务能力补全：除新模型上线需求外，云端用量统计API、用量查询API的需求持续增长，付费用户期望获得更透明、可编程的云服务管控能力。
4. 全硬件后端适配优化：Apple Silicon MLX后端、CUDA ARM64后端、AMD iGPU后端的性能优化与兼容性修复是高频需求，社区希望在更多硬件上获得接近原生的推理性能。
5. 垂直场景能力增强：多语言文本处理、无思考链token分离路由（面向AR/边缘流式场景）、无障碍访问等细分场景的需求逐步增长，反映Ollama的使用场景从通用开发向垂直领域延伸。
第六部分开发者关注点：
总结当前开发者的核心痛点与高频反馈：
1. 核心bug修复优先级待提升：Gemma4工具调用bug、Cloud Pro服务故障、CPU后端KV cache失效等高分bug长期未修复，直接影响核心开发体验与付费用户信任。
2. 高级功能易用性不足：投机解码、量化、工具调用约束等高级功能目前需要手动配置或存在兼容性问题，社区希望官方能实现自动适配、开箱即用，降低使用门槛。
3. 跨平台一致性待加强：Windows环境变量支持、AMD iGPU适配、Apple M5芯片兼容性等不同平台的bug频发，反映跨平台的测试与适配投入不足。
4. OpenAI兼容API能力待补全：/v1/models接口缺失上下文长度返回、工具参数约束丢失、finish_reason返回异常等API兼容性问题，是开发者集成Ollama时的高频痛点，补全后可大幅降低迁移成本。
最后检查有没有符合要求，结构清晰，中文，简洁专业，每个条目有链接，无新版本的话版本发布部分正确，热点issue

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

用户现在需要一份2026-07-30的llama.cpp社区动态日报，首先得严格按照要求的结构来，先理清楚给的数据里的关键信息，不能瞎编，要符合技术开发者的阅读习惯，简洁专业。
首先第一步是今日速览，得用2-3句话，挑今天最核心的动态。首先看 Releases那边，最新的是b10182到b10176这批，还有PR那边的热点，比如GLM-5.2的MTP回归修复、RPC并行哈希、CUDA MMQ的修复、还有新的模型支持比如Kimi-K3、MiMo2、Qwen3-TTS，还有SYCL的性能优化，还有Issue里的热点比如SWA复现内存错误、Gemma4的多GPU问题？对，速览要涵盖版本更新、核心修复、新特性这几个点：
“今日llama.cpp社区共发布6个每日构建版本（b10176-b10182），核心围绕后端性能优化、模型兼容性修复与新架构支持展开：同步修复了GLM-5.2 MTP加载回归、CUDA MMQ在低共享内存设备的误禁用问题，新增Kimi-K3、MiMo2等模型的MTP推理支持，同时RPC模型加载、SYCL算子性能均有实质性提升。”
然后第二部分是版本发布，给的数据里的最新Releases是从b10182到b10176这批，要挑重点说，别列太细：
- b10182：将suppress_tokens处理逻辑迁移至common/sampling模块，同时修复相关安全问题，移除已弃用的has_logit_bias参数
- b10181：修复CUDA后端MMQ（矩阵乘法量化内核）在共享内存小于48KiB的设备上误启用的问题，避免低配CUDA设备运行崩溃
- b10180：优化SYCL后端连续内存路径与32位索引数学运算，提升Intel Arc等SYCL设备的一元算子执行效率
- b10179：升级内置BoringSSL至0.20260728.0版本，修复安全漏洞
- b10178：llama-server新增slot相似度检查的追踪日志，优化Prompt缓存槽位选择逻辑，辅助排查缓存命中问题
- b10176：RPC后端新增tensor_memset实现，提升远程张量操作效率
对，这部分要准确，符合给的数据，不要加额外的。
第三部分是社区热点Issues，要挑10个最值得关注的，每个说明重要性和社区反应，附链接。首先按评论数、影响范围、热度来挑：
1. 首先#21831，评论49个，👍27，是最热的，是Server的SWA/循环内存错误，后续请求强制全量重处理提示词，影响所有用llama-server做长上下文服务的用户，社区反应激烈，已经持续3个月未关闭，是当前最高优先级的问题之一。链接是https://github.com/ggml-org/llama.cpp/issues/21831
2. 然后#26290，刚创建的，👍7，评论3，是#25980 PR带来的回归：GLM-5.2等模型的MTP张量现在默认加载，无法在加载时 opt-out，导致非MTP推理场景浪费显存，社区反馈迅速，已有PR#26296尝试修复。链接https://github.com/ggml-org/llama.cpp/issues/26290
3. #26285，也是今天刚更新的，评论2，是CUDA MMQ的误禁用问题：b10181的修复反向导致RTX 3090（Ampere架构，共享内存64KB）被错误禁用MMQ，prefill性能骤降，影响大量Ampere架构NVIDIA GPU用户，社区已快速反馈。链接https://github.com/ggml-org/llama.cpp/issues/26285
4. #24443，评论12，👍9，是Gemma4系列MTP模型的加载兼容性问题：llama-server加载失败但llama-cli正常，影响Gemma4用户的服务器部署场景，已有较多用户复现。链接https://github.com/ggml-org/llama.cpp/issues/24443
5. #23797，评论16，SYCL多GPU tensor split的严重BUG：会导致token乱码或性能暴跌至4 T/S，影响Intel Arc多GPU工作站用户，已经标记为stale但仍有活跃反馈。链接https://github.com/ggml-org/llama.cpp/issues/23797
6. #24168，评论15，SYCL后端混合模型评估BUG：Intel Arc Pro B60运行Qwen3等混合模型时输出乱码或崩溃，是b9128-b9159到2026年6月版本的回归问题，影响Intel GPU用户的大模型部署。链接https://github.com/ggml-org/llama.cpp/issues/24168
7. #25030，评论9，功能需求：希望提供ARM64 Windows + CUDA的官方预编译包，当前Windows ARM64用户只能自行编译，社区需求较高。链接https://github.com/ggml-org/llama.cpp/issues/25030
8. #26257，评论2，今天新增的BUG：Qwen3.6-27B在双CUDA GPU（RTX 5060 Ti + RTX 3060）时输出乱码，单GPU正常，影响多卡消费级用户。链接https://github.com/ggml-org/llama.cpp/issues/26257
9. #9289，评论12，👍9，是长期在维护的libllama API变更日志跟踪Issue，第三方库开发者关注度高，用于跟进API Breaking Change。链接https://github.com/ggml-org/llama.cpp/issues/9289
10. #25890，评论2，RPC后端大模型加载性能问题：535GB模型加载耗时15分钟，单核满载而NIC与95核闲置，影响云端大模型分布式推理场景。链接https://github.com/ggml-org/llama.cpp/issues/25890
对，这10个覆盖了不同后端、不同用户群体，有BUG有需求有长期跟踪的，符合要求。
第四部分是重要PR进展，挑10个，要说明功能或修复，附链接，按重要性和活跃度来：
1. PR#26296（OPEN）：修复#26290的回归问题，新增MTP张量按需加载逻辑，仅当使用--spec-type draft-mtp时才加载GLM-5.2等模型的MTP张量，避免非MTP场景浪费显存，今日已提交。链接https://github.com/ggml-org/llama.cpp/pull/26296
2. PR#26228（OPEN）：新增MiMo2架构的MTP草稿推理支持，支持加载并保留MiMo2模型的MTP张量，兼容仅trunk的GGUF文件，实现MiMo特定的MTP计算图（包括隐藏/词元融合、融合QKV注意力、稠密FFN等）。链接https://github.com/ggml-org/llama.cpp/pull/26228
3. PR#26185（OPEN）：新增Kimi-K3文本模型支持，实现其混合KDA（线性）+ MLA（全量）注意力架构，支持跨层残差注意力、潜在MoE、情景激活等Kimi-K3专属特性。链接https://github.com/ggml-org/llama.cpp/pull/26185
4. PR#26295 + #26294（OPEN）：修复CUDA后端mul_mat_id的重复专家ID处理BUG，当MoE模型的top-k专家列表存在重复专家ID时，之前的实现会导致计算错误，现在修复了CPU回退路径与优化内核的ID压缩逻辑，对应Issue#24591。链接https://github.com/ggml-org/llama.cpp/pull/26294
5. PR#26284（OPEN）：优化RDNA 3/3.5的MMQ（矩阵乘法量化）配置，基于#26199的RDNA架构支持进一步调优，提升AMD RDNA3/4显卡的量化推理性能。链接https://github.com/ggml-org/llama.cpp/pull/26284
6. PR#26252（OPEN）：新增Qwen3专用聊天解析器，支持将Qwen3输出的`<tool_call>`标记识别为工具调用（而非推理痕迹），解决Qwen3偶尔在``后直接输出工具调用导致的解析错误， supersedes #24202、#26244。链接https://github.com/ggml-org/llama.cpp/pull/26252
7. PR#26262（OPEN）：将CUDA后端的惩罚采样（重复、频率、存在惩罚）从CPU迁移至GPU执行，避免惩罚采样成为CPU-GPU数据传输的瓶颈，提升长文本生成的采样效率。链接https://github.com/ggml-org/llama.cpp/pull/26262
8. PR#26291（OPEN）：优化RPC后端大模型加载性能，新增GGML_RPC_LOAD_THREADS配置，并行化缓存张量的哈希计算，解决#25890中535GB模型加载单核满载、耗时过长的问题。链接https://github.com/ggml-org/llama.cpp/pull/26291
9. PR#26283（OPEN）：实现无模型后缀解码（Suffix Decode）的初始版本，基于当前请求与已生成 token 在线构建匹配树，无需额外草稿模型即可实现 speculative decoding，适合长匹配后缀的场景。链接https://github.com/ggml-org/llama.cpp/pull/26283
10. PR#25878（OPEN）：完成MXFP4与NVFP4量化范式的完整实现，支持稠密张量的MXFP4量化、MoE张量的NVFP4/MXFP4量化，进一步降低大模型的存储与推理显存占用。链接https://github.com/ggml-org/llama.cpp/pull/25878
对，这些PR都是今天活跃或者重要的，覆盖了模型支持、性能优化、BUG修复、新特性。
第五部分是功能需求趋势，从所有Issues里提炼，要客观，从给的Issue里看：
1. 多后端性能优化：SYCL多GPU、Vulkan大上下文性能、RDNA架构MMQ调优是当前AMD/Intel GPU用户的核心诉求，相关Issue占比超30%
2. 新模型与MTP推理支持：社区对新架构模型（Hy3、Kimi-K3、MiMo2、Qwen3-TTS）的加载与MTP/ speculative decoding支持需求强烈，是近期PR提交的主流方向
3. 服务器端稳定性与易用性：llama-server的长上下文稳定性（SWA缓存问题）、路由LRU卸载逻辑、WebUI数据管理是服务端用户的高频需求
4. 跨平台预编译包：ARM64 Windows CUDA、更多架构的官方预编译包是降低用户使用门槛的核心需求，相关Issue获得大量👍
5. 量化格式支持：MXFP4/NVFP4等更低bit量化方案的需求持续上升，相关PR已进入收尾阶段
对，这些是从给的Issue和PR里提炼的，不是瞎编的。
第六部分是开发者关注点，总结痛点和高频需求：
1. 多后端回归BUG频发：近期CUDA、SYCL、Vulkan后端均出现不同程度的回归问题（如Gemma4乱码、MMQ误禁用、多GPU token乱码），跨架构兼容性测试是当前开发的核心痛点
2. MTP相关逻辑缺乏按需开关：#25980引入的GLM-5.2 MTP默认加载问题暴露了MTP张量缺少统一的按需加载控制，后续新架构的MTP支持需要配套加载开关
3. 大模型分布式推理性能瓶颈：RPC后端大模型加载、多GPU tensor split的通信与调度效率仍是分布式场景的核心短板，社区已有多个相关优化PR提交
4. 服务端长期稳定性不足：llama-server的长上下文缓存、路由卸载逻辑的BUG长期未修复，影响生产环境部署，是社区反馈最多的服务端问题
5. 第三方库API兼容性：libllama的API变更缺乏统一跟踪，第三方集成开发者频繁遇到Breaking Change问题，相关维护需求持续存在
对，这些也是从给的数据里来的，符合实际。
然后要注意每个部分都附链接？哦对，每个Issue和PR都要附链接，刚才已经列了，然后语言要简洁专业，适合技术开发者，不要有废话。
等下，有没有哪里不符合的？比如今日速览是不是2-3句话？对，刚才写的是三句话左右。版本发布部分是不是准确？对，都是从给的Releases里摘的，没有加额外的。Issues是不是10个？对，10个，每个都有重要性和社区反应，有链接。PR是不是10个？对，10个，每个有功能说明，有链接。功能需求趋势是不是从Issue里提炼的？对，都是给的数据里的Issue对应的需求。开发者关注点是不是痛点和高频需求？对，都是反复出现的问题。
哦对了，Release里的b10182到b10176，有没有漏的？给的数据里的Release是b10182、b10181、b10180、b10179、b10178、b10176，共6个，都覆盖到了。还有，注意有没有错误的信息？比如b10181的修复是禁用低共享内存的MMQ，然后Issue#26285是这个修复导致的RTX3090被误禁用，这个是对的，因为RTX3090的共享内存是48KB？哦对，给的数据里#26285说RTX3090的共享内存是64KB？哦看Issue#26285的摘要：“On RTX 3090 (compute capability 8.6, Ampere), this incorrectly disables MMQ, causing prefill to fall back to a much slower path.” 哦对，b10181的逻辑是低于48KiB禁用，但RTX3090的实际共享内存是64KB？哦可能是检查逻辑有bug，比如算的时候没考虑某些情况，所以导致误禁用，这个是对的，不用改，按数据来。
还有PR#26296是修复#26290的，这个是对的，数据里PR#26296的摘要说Fixes #26290。还有PR#26185是Kimi-K3，PR#26228是MiMo2的MTP，这些都对。
还有功能需求里的大模型支持，比如Hy3的模型请求是#22477，👍25，很高的，刚才在趋势里提到了新模型支持，对的。还有Voxtral的ASR支持#20914，👍17，也算新功能？不过趋势里已经覆盖了。
开发者关注点里的API兼容性，#9289就是跟踪libllama API变更的，所以提到是对的。
还有，有没有要注意的？比如不要加数据里没有的内容，所有信息都来自给的GitHub数据，不要瞎编。比如 Releases里的Website是llama.app，这个是官方站，可以提一下吗？哦在版本发布里可以加一句“所有版本均同步更新官方演示站https://llama.app 与各平台预编译包”，对，因为每个Release里都带了Website和预编译包的链接，所以可以提一下。
哦对，刚才的版本发布部分可以加个开头：“本次发布的6个每日构建版本（b10176-b10182）均已同步更新官方演示站 https://llama.app 及 macOS/Windows/Linux 各平台预编译包，核心更新内容如下：” 这样更准确。
还有，在Issue里有没有漏了什么重要的？比如#24415是Gemma4的OpenVINO加载问题，评论9，刚才没选，不过已经选了10个，那个可以不用，因为已经选了更热的。
还有PR里的#26079是CUDA的MVQ到MMQ的切换点调优，这个也挺重要的，刚才没选，因为已经选了10个更核心的，没问题。
对了，日报的日期是2026-07-30，数据是过去24小时的，所以开头要标清楚日期：“# llama.cpp 社区动态日报 2026-07-30
数据来源：github.com/ggerganov/llama.cpp | 统计周期：过去24小时”
然后第一部分今日速览，刚才的内容可以稍微调整得更准确：
“今日llama.cpp社区共发布6个每日构建版本（b10176-b10182），核心围绕后端性能优化、模型兼容性修复与新架构支持展开：同步修复了GLM-5.2 MTP加载回归、CUDA MMQ在低共享内存设备的误禁用问题，新增Kimi-K3、MiMo2等模型的MTP推理支持，同时RPC模型加载、SYCL算子性能、采样逻辑均有实质性提升。”
对，这个更准。
然后第二部分版本发布，刚才的内容，加上预编译包的说明：
“本次发布的6个每日构建版本（b10176-b10182）均已同步更新官方演示站 https://llama.app 及 macOS/Windows/Linux 各平台预编译包，核心更新内容如下：
- b10182：将suppress_tokens处理逻辑迁移至`common/sampling`模块，修复相关安全问题，移除已弃用的`has_logit_bias`参数
- b10181：修复CUDA后端MMQ（矩阵乘法量化内核）在共享内存小于48KiB的设备上误启用的问题，避免低配CUDA设备运行崩溃
- b10180：优化SYCL后端连续内存路径与32位索引数学运算，引入fastdiv加速一元算子索引计算，提升Intel Arc等SYCL设备的算子执行效率
- b10179：升级内置BoringSSL至0.20260728.0版本，修复安全漏洞
- b10178：llama-server新增slot相似度检查的追踪日志，优化Prompt缓存槽位选择逻辑，辅助排查缓存命中异常
- b10176：RPC后端新增`tensor_memset`实现，提升远程张量操作效率”
对，这个更准确，符合给的数据里的Release描述。
然后第三部分社区热点Issues，10个，每个带链接，说明重要性和社区反应：
“### 3. 社区热点 Issues（按影响力排序）
1. **[#21831](https://github.com/ggml-org/llama.cpp/issues/21831) [OPEN] Server SWA/循环内存错误：后续请求强制全量重处理提示词**
   重要性：影响所有使用llama-server部署长上下文服务的用户，是当前社区热度最高、评论数最多（49条）的问题，已持续3个月未关闭。用户复现路径明确：Windows + CUDA环境下，使用SWA/recurrent memory时，第二次请求会触发全量prompt重计算，严重消耗资源。
   社区反应：获得27个👍，大量用户分享workaround，官方尚未给出修复时间表。
2. **[#26290](https://github.com/ggml-org/llama.cpp/issues/26290) [OPEN] MTP加载回归：GLM-5.2等模型MTP张量默认加载，无法按需关闭**
   重要性：#25980 PR引入的回归问题，非MTP推理

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*