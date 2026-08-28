# ArXiv AI 研究日报 2026-08-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-28 22:16 UTC

---

# ArXiv AI 研究日报（2026‑08‑29）

---

## 今日速览  
1️⃣ 推理层面的 **测试时学习** 正在快速突破，TTPO 与 CritICL 等工作展现了无需额外标注即可在推理阶段提升模型可靠性。  
2️⃣ **低成本大模型训练** 成为热点：Puro‑2B 示范了在单块 RTX 5090 上 1.5 B 参数模型的全流程预训练，打开了开源模型的“价格下限”。  
3️⃣ **智能体自进化** 与 **安全红队** 研究同步升温，WikiSkill、RedEvoAgent 与 Persona‑Execution Separation 为可审计、可演化的 LLM 代理奠定框架。  
4️⃣ **多模态与真实世界基准** 持续丰富：CLAP 跨体态视频世界模型、MCR‑Bench 代码评审基准、CorporateBench 企业问答基准，为评估提供更贴近工业场景的信号。  

---

## 重点论文（按主题分类）

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者（缩写） | 核心贡献 |
|------|--------------|----------|
| **CritICL: Inference‑Time Weak‑to‑Strong Generalization from Small Language Model Failure Modes**  <br>【[arXiv:2608.27455](http://arxiv.org/abs/2608.27455v1)】 | Y.F. Wu et al. | 通过在推理时动态纠错（“Critic”）将小模型的失败模式转化为强能力，免除重复生成或外部验证，显著提升零样本推理稳健性。 |
| **TTPO: Test‑Time Policy Optimization**  <br>【[arXiv:2608.27448](http://arxiv.org/abs/2608.27448v1)】 | A. Wang et al. | 将 RL 与自蒸馏的目标从训练集标签迁移到测试时的模型自身信心，从而实现“测试时训练”，在数学推理上取得新纪录。 |
| **Puro‑2B: Poor Lab's Qwen2‑1.5B Trained on RTX 5090 within $5090**  <br>【[arxiv:2608.27370](http://arxiv.org/abs/2608.27370v1)】 | K. Luo et al. | 首次公开完整的 1.5 B 参数中文模型训练流水线，成本仅约 5 k美元，提供低门槛的可复制基准。 |
| **Boosting LLM Exploration via Weak‑Model Guidance in RLVR**  <br>【[arXiv:2608.27420](http://arxiv.org/abs/2608.27420v1)】 | X. Shen et al. | 引入弱模型作为“探索导师”，在 RLVR 中保持策略熵，提升大模型在高‑k 评测（pass@k）上的覆盖率。 |
| **Not All Eval‑Awareness Is Equal: Capabilities Framing Predicts Compliance**  <br>【[arXiv:2608.27340](http://arxiv.org/abs/2608.27340v1)】 | A. Zhuang et al. | 区分不同形式的评估感知（Eval‑Awareness），证明“能力框架”比单纯抑制更能预测模型对安全评估的遵从性。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者（缩写） | 核心贡献 |
|------|--------------|----------|
| **WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**  <br>【[arXiv:2608.27454](http://arxiv.org/abs/2608.27454v1)】 | L. Tang et al. | 将智能体在交互中获得的经验自动组织为可持久化的“技能库”，支持逐步进化与跨任务迁移。 |
| **RedEvoAgent: Automatic Red‑Teaming Agent with Experience‑Driven Skill Evolution**  <br>【[arXiv:2608.27439](http://arxiv.org/abs/2608.27439v1)】 | J. Zhang et al. | 通过自我对抗循环生成红队攻击，并让攻击经验反馈到技能进化，提升 LLM 代理的安全防护能力。 |
| **Persona‑Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit**  <br>【[arXiv:2608.27427](http://arxiv.org/abs/2608.27427v1)】 | Y. Xi | 提出“人格‑执行”双域划分，使代理的行为日志审计与人格指令演化互不干扰，满足合规公司需求。 |
| **INTENT‑AS‑A‑TOOL Makes it Easy to Track Agentic Misalignment**  <br>【[arXiv:2608.27348](http://arxiv.org/abs/2608.27348v1)】 | Y. Zhang et al. | 将意图检测封装为可调用工具，配合链式思考监控，实现对代理有害行动的实时捕获与记录。 |
| **BTS‑AgentBench: A Deterministic, Replayable Pipeline from Read‑Only Telemetry Logs to Agent Benchmarks**  <br>【[arXiv:2608.27334](http://arxiv.org/abs/2608.27334v1)】 | J‑Y. Kim | 从工业遥测日志自动生成可重复的多轮任务基准，填补真实生产环境下智能体评测的空白。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者（缩写） | 核心贡献 |
|------|--------------|----------|
| **MCR‑Bench: From Static to Dynamic – Benchmarking Real‑World Code Review**  <br>【[arXiv:2608.27442](http://arxiv.org/abs/2608.27442v1)】 | D. Zheng et al. | 首个动态交互式代码审查基准，捕获真实 PR 流程中的迭代与回滚，推动 LLM 代码审查向工业落地。 |
| **RATIO: A Benchmark for Retrieval Across Typed Ideation Operations in Scientific Literature**  <br>【[arXiv:2608.27394](http://arxiv.org/abs/2608.27394v1)】 | M. Sharon et al. | 细分检索任务（灵感、概念、方法层级），提供多维度评估，促进科研助理模型的创造性检索能力。 |
| **CLAP: Cross‑Embodiment Video World Models are Zero‑Shot Physical Simulators**  <br>【[arXiv:2608.27406](http://arxiv.org/abs/2608.27406v1)】 | K. Liu et al. | 将异构机器人视频统一建模为跨体态“世界模型”，在未见机器人上实现零样本动作预测。 |
| **LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics**  <br>【[arXiv:2608.27395](http://arxiv.org/abs/2608.27395v1)】 | L. Kuhn et al. | 通过对称结构与极化对比学习，去除手工的负样本/投影技巧，实现百倍加速的视频自监督预训练。 |
| **PAWBench: How Far Are We from Probabilistically Aligned World Modeling?**  <br>【[arXiv:2608.27345](http://arxiv.org/abs/2608.27345v1)】 | Y. Pu et al. | 提出 **Probabilistic Alignment** 评估框架，量化视频世界模型在多模态不确定性下的生成分布匹配度。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者（缩写） | 核心贡献 |
|------|--------------|----------|
| **CorporateBench: Large‑Scale Q&A Benchmarking with Temporal Knowledge Bases**  <br>【[arXiv:2608.27391](http://arxiv.org/abs/2608.27391v1)】 | S. Hamilton et al. | 首个真实企业内部文档的时序问答基准，包含人类校验的多任务集合，提升企业级 LLM 评测可信度。 |
| **CLAP (see above)** | — | 同时属于多模态与真实机器人应用，展示跨平台物理推理。 |
| **LLMs Can Design Near‑Optimal OR Algorithms**  <br>【[arXiv:2608.27296](http://arxiv.org/abs/2608.27296v1)】 | J. Baek | 在库存控制、排队网络、分选优化等经典运筹学问题上，LLM 能自动产生接近最优的算法描述，打开 AI‑OR 跨界合作的可能。 |
| **BrailleBench: Investigating Multi‑Criteria Braille Comprehension in Large Language Models**  <br>【[arXiv:2608.27268](http://arxiv.org/abs/2608.27268v1)】 | J. Zhang et al. | 为盲/聋盲用户设计的盲文理解基准，评测 LLM 在多感官、低资源语言上的可达性与公平性。 |
| **Your Voice Cloning System is Secretly a Voice Anonymizer**  <br>【[arXiv:2608.27360](http://arxiv.org/abs/2608.27360v1)】 | R. Muletta et al. | 揭示现有语音克隆模型天然具备匿名化功能，提示生成式语音技术的双刃剑特性。 |

---

## 研究趋势信号（100‑200 字）  
本批次论文显示 **“测试时学习”** 正从概念验证迈向系统化实现（TTPO、CritICL），表明社区正寻求在推理阶段直接纠错而不依赖大量标注。与此同时，**低成本大模型训练** 与 **可复现训练流水线**（Puro‑2B）同步出现，预示开源模型的规模上限将被成本因素重新定义。智能体方向出现 **经验驱动的技能库化**（WikiSkill、RedEvoAgent）以及 **审计友好的架构分离**（Persona‑Execution Separation），反映对可维护、可监管的自治体需求日益突出。多模态与真实场景基准（CLAP、MCR‑Bench、CorporateBench）快速增长，暗示 AI 评估正从“静态数据集”向 **动态、时序、跨域** 迁移。安全评估也在细化（Beyond F1、Eval‑Awareness），从单一准确率向覆盖率、恢复能力等多维度衡量转变。  

---

## 值得精读（2‑3 篇）

1. **CritICL: Inference‑Time Weak‑to‑Strong Generalization from Small Language Model Failure Modes**  
   *理由*：首次展示在 **纯推理阶段** 通过内部批评机制实现小模型到大模型的性能跳跃，方法简洁且可直接叠加在现有服务上，适合产业快速实验。  

2. **WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**  
   *理由*：提出系统化的 **经验 → 技能** 转化管线，涵盖自动抽取、知识图谱化与跨任务迁移，是构建长期可自我提升智能体的关键基石。  

3. **Puro‑2B: Poor Lab's Qwen2‑1.5B Trained on RTX 5090 within $5090**  
   *理由*：提供完整、公开的 **低成本训练配方**（硬件、数据、梯度压缩、混合精度），对学术与创业团队具有直接复制价值，可能重塑开源大模型生态。  

--- 

*以上内容仅供参考，链接均指向对应的 arXiv 预印本，建议结合全文细读了解技术细节与实验设定。*

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*