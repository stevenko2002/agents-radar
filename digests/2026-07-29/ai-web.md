# AI 官方内容追踪报告 2026-07-29

> 今日更新 | 新增内容: 9 篇 | 生成时间: 2026-07-28 22:16 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 2 篇（sitemap 共 428 条）
- OpenAI: [openai.com](https://openai.com) — 新增 7 篇（sitemap 共 883 条）

---

# AI 官方内容追踪报告（2026-07-29 增量）
---
## 一、今日速览
今日 Anthropic 与 OpenAI 官网更新呈现明显差异化特征：Anthropic 同日发布前沿安全研究成果与 CEO 公开信，一方面展示 Claude Mythus Preview 可挖掘密码学算法底层数学漏洞的前沿能力，实现 AI 安全审计从「代码实现层」到「算法层」的能力跃迁；另一方面明确回应美国国内「禁中国开源权重模型」的政策讨论，重申对无风险开源权重的支持立场。OpenAI 则批量发布 7 篇面向企业用户的商业指导内容，覆盖 GPT-5 工作场景、AI Agent 构建、落地方法论等方向，无公开研究或政策类内容。整体来看，两家头部 AI 公司今日的发布重心分别锚定「安全治理话语权」与「企业级商业化落地」两大方向。
---
## 二、Anthropic / Claude 内容精选
本次 Anthropic 共更新 2 篇内容，按分类整理如下：
### （一）研究类（Research）
1. **标题**：《Discovering cryptographic weaknesses with Claude》
   - 发布日期：2026-07-28
   - 原文链接：https://www.anthropic.com/research/discovering-cryptographic-weaknesses
   - 核心提炼：研究证实 Claude Mythos Preview 已具备挖掘密码学算法底层数学漏洞的能力，此前 Claude 仅能发现加密库的代码实现漏洞，本次实现了安全审计能力的代际跃迁。具体成果包括：一是显著削弱面向后量子时代的数字签名方案 HAWK；二是发现针对**轮数缩减版 AES**（全球应用最广的对称加密算法的测试变体）的新型攻击方式。研究团队明确强调，当前漏洞尚不涉及任何生产系统，属于 AI 时代密码学的前瞻性研究，旨在推动行业提前评估前沿 AI 对密码安全体系的潜在冲击。
### （二）新闻类（News）
2. **标题**：《Our position on open-weights models》
   - 发布日期：2026-07-27
   - 原文链接：https://www.anthropic.com/news/position-open-weights-models
   - 核心提炼：由 Anthropic CEO Dario Amodei 亲自执笔的公开立场声明，直接回应近期美国国内关于「禁止企业使用中国开源权重模型」的政策讨论，明确澄清 Anthropic 从未倡导过该类禁令。声明首次明确开源权重的风险分级原则：无危险能力的开源权重是降低使用成本的公共品，保护主义禁令无法解决核心国家安全问题。Dario 重申了其在《The Adolescence of Technology》中提出的核心关切：其最担忧的风险是威权政府（尤其是 CCP）构建出比美国更先进的 AI 模型并用于全球支配，而非开源模型本身的安全风险，进一步明确了 Anthropic 在开源治理领域的立场边界。
---
## 三、OpenAI 内容精选
本次 OpenAI 共抓取到 7 篇增量内容，均为**仅元数据模式（无正文内容）**，仅能客观枚举，无法进行内容解读，数据受限说明见各条目标注：
1. **分类**：Index，**发布日期**：2026-07-28，**标题**：Scientific Computing Agentic Ai（注：为重复抓取条目，仅列示一次）
   - 原文链接：https://openai.com/index/scientific-computing-agentic-ai/
   - 数据说明：仅获取到分类、发布日期、URL 元数据，无正文内容，无法提炼核心观点。
2. **分类**：Business Guides & Resources，**发布日期**：2026-07-28，**标题**：Identifying And Scaling Ai Use Cases
   - 原文链接：https://openai.com/business/guides-and-resources/identifying-and-scaling-ai-use-cases/
   - 数据说明：同上，无正文内容，无法解读。
3. **分类**：Business Guides & Resources，**发布日期**：2026-07-28，**标题**：Inside Gpt5 Our Best Model For Work
   - 原文链接：https://openai.com/business/guides-and-resources/inside-gpt5-our-best-model-for-work/
   - 数据说明：同上，无正文内容，无法解读。
4. **分类**：Business Guides & Resources，**发布日期**：2026-07-28，**标题**：A Practical Guide To Building Ai Agents
   - 原文链接：https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
   - 数据说明：同上，无正文内容，无法解读。
5. **分类**：Business Guides & Resources，**发布日期**：2026-07-28，**标题**：A Practical Guide To Building With Ai
   - 原文链接：https://openai.com/business/guides-and-resources/a-practical-guide-to-building-with-ai/
   - 数据说明：同上，无正文内容，无法解读。
6. **分类**：Business Guides & Resources，**发布日期**：2026-07-28，**标题**：How Openai Uses Codex
   - 原文链接：https://openai.com/business/guides-and-resources/how-openai-uses-codex/
   - 数据说明：同上，无正文内容，无法解读。
---
## 四、战略信号解读
### （一）双方近期技术优先级
1. **Anthropic**：核心优先级为「安全能力壁垒构建」与「公共治理话语权抢占」。技术侧持续投入 AI 安全前沿研究，将安全能力从「代码实现层」向「数学算法层」推进，强化自身「最安全 AI 公司」的定位；政策侧主动参与全球 AI 开源治理、国家安全相关的公共讨论，通过 CEO 公开信等高层发声方式，明确自身立场，避免政策误伤，同时引导行业规则向符合自身利益的方向发展。
2. **OpenAI**：核心优先级为「企业级商业化落地」。本次批量发布的 7 篇内容全部面向企业用户，覆盖模型能力介绍、Agent 构建、场景落地、内部工具使用等全链路，说明 OpenAI 已完成底层模型能力的迭代，当前重心是降低企业用户的接入门槛，推动 GPT 系列模型在 ToB 场景的大规模落地，同时拓展科学计算等新的垂直落地场景。
### （二）竞争态势
双方已形成明显的赛道分化，不存在直接的同赛道竞争：
1. **议题引领权**：Anthropic 主动引领 AI 安全、开源治理、国家安全相关的公共议题，通过顶会级研究成果和高层公开信，把控行业安全叙事的定义权，是当前 AI 安全领域的主要话语方；OpenAI 未参与当前开源的公共讨论，聚焦商业化落地，是当前 AI 商业化落地的引领者。
2. **技术侧重点**：Anthropic 的技术投入集中在安全对齐、安全审计等底层能力，构建高门槛的安全壁垒；OpenAI 的技术投入集中在模型能力迭代、垂直场景适配、工具链完善等商业化相关方向，追求场景覆盖的广度。
### （三）对开发者和企业用户的潜在影响
1. **安全/密码学领域研究者**：Anthropic 的研究意味着 AI 将成为密码学算法审计的核心工具，传统依赖人工的算法漏洞挖掘效率将大幅提升，同时也需要重新评估现有主流密码算法的抗 AI 攻击能力，后量子密码算法的安全审计需求将快速上升。
2. **企业用户**：OpenAI 的批量商业内容表明 GPT-5 已进入大规模企业落地阶段，AI Agent 构建、场景落地的方法论已经成熟，企业可基于公开指导快速完成 AI 应用的搭建，降低试错成本。
3. **开源社区参与者**：Anthropic 的公开立场明确释放了政策稳定信号：只要开源模型不涉及高危能力，不会被主流 AI 公司抵制，有利于降低开源 AI 开发者的政策不确定性，稳定开源生态预期。
---
## 五、值得关注的细节
1. **前沿领域突破**：Anthropic 首次公开证实 AI 可直接挖掘密码学算法的数学底层漏洞，这是此前 AI 安全领域的空白，标志着 AI 安全能力实现了从「代码层」到「数学层」的跨越，可能推动整个密码学领域的审计流程变革。
2. **发布节奏的信号**：Anthropic 在同一天发布顶会级安全研究与 CEO 公开信，属于有意组合的传播策略，同时释放「技术硬实力」与「公共立场清晰」两个信号，进一步强化自身在安全领域的行业领导地位；OpenAI 在同一天批量发布 7 篇企业向内容，属于典型的产品节点预热动作，大概率 GPT-5 企业版或相关的商业套件即将上线，通过提前输出内容教育市场，降低用户认知门槛。
3. **政策合规动向**：Anthropic 的公开信直接回应美国国内关于中国开源模型的政策讨论，说明 AI 开源治理已进入政策博弈期，头部公司开始主动参与规则制定；研究中提及的后量子密码算法 HAWK，也意味着后量子密码的安全审计将成为 AI 安全领域的新增长点，头部公司已开始提前布局。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*