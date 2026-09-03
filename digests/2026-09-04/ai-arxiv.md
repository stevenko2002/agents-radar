# ArXiv AI 研究日报 2026-09-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-03 22:15 UTC

---



# ArXiv AI 研究日报 — 2026-09-04

---

## 今日速览

今日 cs.AI / cs.CL / cs.LG 投稿中，**智能体（Agent）架构设计**与**LLM 后训练方法**仍是 hottest 赛道，Web Agent 的判别式世界模型、Process Reward 从"首次错误"学习、多智能体博弈协调等新思路集中涌现；同时，**模型效率与稳定训练**方向值得关注，FP4 极低比特预训练、注意力自主控制、2-bit Leech 格量化等工作在突破推理成本极限；**幻觉与安全性**议题持续升温，黑盒幻觉检测、知识投毒攻击、安全对齐共进化论文均具实际指导价值。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| # | 标题 | 作者 | 一句话 |
|---|------|------|--------|
| 1 | [Post-Training Language Models for Gold-Medal Performance in Coding Competitions](http://arxiv.org/abs/2609.02849v1) | Ficek et al. | 端到端后训练管线（大规模问题筛选 + 合成推理轨迹 + 强化学习）使 LLM 在 ICPC/IOI 级竞赛达到金牌水平，证明代码推理仍是衡量通用智能的硬指标。 |
| 2 | [User Feedback Provides a Unique Signal that LLMs Can not Detect](http://arxiv.org/abs/2609.02859v1) | Don-Yehiya, Choshen, Abend | 挑战"用户反馈噪声大"的共识，证明 LLM 自身无法检测的用户行为信号具有独特学习价值，为 RLHF 替代方案提供实证依据。 |
| 3 | [Language Models Can Control Their Own Attention](http://arxiv.org/abs/2609.02737v1) | Ho, Ahmad, Koh et al. | 让 LLM 主动定位 KV Cache 中的关键 Token，避免对百万 token 上下文的全局扫描，直接解决长上下文推理的计算瓶颈。 |
| 4 | [Linguistic Illegibility for LLM Security](http://arxiv.org/abs/2609.02852v1) | Mickens | 提出"语言不可读性"概念，指出 LLM 的外部语言输出不能可靠反映内部计算，对 mechanistic interpretability 研究提出警示。 |
| 5 | [Dutch Books for Language Models](http://arxiv.org/abs/2609.02797v1) | Andrews, Sarkar | 用概率论中的"荷兰赌"检验 LLM 预测一致性，发现主流模型在风险决策中普遍存在相干性漏洞，对 AI 辅助生活决策的可靠性提出质疑。 |
| 6 | [From Tokens to Semantics: Hallucination Detection in Black-Box LLMs](http://arxiv.org/abs/2609.02679v1) | Pawar, Ramanayake, O'Neill | 仅需黑盒 API 即可利用 Token 级与语义级互补信号检测幻觉，无需参考文档，适用于公开部署的模型质量监控。 |
| 7 | [DKL: Decoupled Knowledge Learning for Instruction-Tuned LLMs](http://arxiv.org/abs/2609.02685v1) | Bhushan et al. | 将指令微调中的知识与推理能力解耦学习，缓解 RAG 检索失败时模型仍产生幻觉的问题。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| # | 标题 | 作者 | 一句话 |
|---|------|------|--------|
| 8 | [Discriminative World Models for Web Agents](http://arxiv.org/abs/2609.02885v1) | Li, Pendharkar, Pahilajani et al. | 提出判别式世界模型替代传统的生成式 next-state prediction，通过 ranking 候选动作序列而非采样，提升 Web Agent 测试时决策效率。 |
| 9 | [Cliff: Learning Process Rewards from the First Mistake](http://arxiv.org/abs/2609.02817v1) | Han, Wang, Ramaneti et al. | 从 RLVR 流程中的"首次错误节点"提取过程奖励信号，为中间推理步骤提供更细粒度的训练反馈，弥补结果奖励的信息不足。 |
| 10 | [Bilevel Coordinated Reflection: Game-Theoretic Multi-Agent LLM Systems](http://arxiv.org/abs/2609.02750v1) | Chen, Chen, Huang et al. | 将多智能体系统中的编排器-工作器协作建模为双层博弈，为统一解释协调、记忆改进与外部验证提供理论框架。 |
| 11 | [SafeEvolve: Harness-Policy Co-Evolution for Safety Alignment](http://arxiv.org/abs/2609.02786v1) | Mao, Qu, Guo et al. | 基础模型与安全 harness 相互塑造，提出两者联合进化框架以同时防御有害输出与多步执行轨迹中的安全风险。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| # | 标题 | 作者 | 一句话 |
|---|------|------|--------|
| 12 | [UE5M3 FP4 Block Scaling for Stable Language Model Pretraining](http://arxiv.org/abs/2609.02846v1) | Hu, Luschi, Balanca | 解决 FP4 预训练"数值范围过窄"的难题，引入 Transformer Engine 的 Hadamard 变换与 bfloat16 最终层，实现稳定极低比特训练。 |
| 13 | [Unfolding the Leech Lattice: 2-Bit LLM Weights](http://arxiv.org/abs/2609.02652v1) | Malandrino | 提供首个 Leech 格多壳解码实现，填补 2-bit 量化的部署空白，实测推理阶段 GEMV 开销。 |
| 14 | [Trace as State: Reasoning Traces for Long-Context Transformers](http://arxiv.org/abs/2609.02702v1) | Zou, Tang | 将推理轨迹作为条件状态输入因果 Transformer，最坏情况下以指数级内存节省实现等价推理。 |
| 15 | [LoRA-TSD: Tangent-Space Spectral Descent for LoRA](http://arxiv.org/abs/2609.02734v1) | Andriianov, Veprikov, Beznosikov | 将 LoRA 更新视为低秩流形的切向量并采用 Muon 风格优化，比独立训练两个因子更好地保留几何结构。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| # | 标题 | 作者 | 一句话 |
|---|------|------|--------|
| 16 | [A Common Measure of Communication for Speech BCIs](http://arxiv.org/abs/2609.02887v1) | Jayalath, Ballyk, Jones | 为语音脑机接口领域提出首个标准化通信测量指标，弥合神经解码进度评估缺乏统一基准的空白。 |
| 17 | [ShallowStream: Index Shallow then Answer Deep for Streaming Video Understanding](http://arxiv.org/abs/2609.02780v1) | Hao, Yang, Huang et al. | 流式视频理解的新范式：先浅层索引构建全局概览，再对关键片段深度推理，适用于自动驾驶与安防场景。 |
| 18 | [CodePoisonRAG: Knowledge Poisoning Attacks on Retrieval-Augmented Code Generation](http://arxiv.org/abs/2609.02774v1) | Gadey, Marey, Dmitrienko | 揭示 RACG 系统的信任边界：注入恶意代码片段即可破坏 LLM 的代码生成，对开源依赖管理提出安全警示。 |
| 19 | [DiscoSign: Discourse-Aware Text to Sign Language Gloss Translation](http://arxiv.org/abs/2609.02796v1) | Baltatzis, Inan, Gillis et al. | 首个结合语篇现象的手语翻译系统，突破传统句级处理对指代、话语标记的忽略，推动手语 NLP 进入实用阶段。 |
| 20 | [CORAL: LLM-Native Harness for Production Recommender Systems](http://arxiv.org/abs/2609.02730v1) | Azhar, Zhou, Jiang et al. | 用 LLM-native 框架自动化推荐系统的检索/排序/服务全流程优化，替代人力 A/B 测试，应对内容快速迁移的挑战。 |

---

## 研究趋势信号

从今日投稿可见三条清晰主线：**① 智能体工程化**——World Model、Process Reward、Harness-Policy 共进化等论文表明，Agent 研究正从"验证能做什么"转向"如何稳定、安全、高效地规模化部署"；**② 低比特高效训练/推理**——FP4 预训练、2-bit Leech 量化、注意力自主控制等工作共同指向极致压缩与极速推理的前沿；**③ 可信与可解释性回归**——荷兰赌检验、幻觉黑盒检测、语言不可读性警示等论文显示，学界对 LLM 可靠性分析正从定性案例走向形式化验证。

---

## 值得精读

1. **Post-Training for Gold-Medal Coding Competitions** (#9) — 端到端后训练方法在顶级竞赛中达到人类金牌水平，对"LLM 能否替代编程专家"有直接回答，方法论（问题筛选→合成轨迹→RL）可复用于其他推理密集型任务。

2. **Discriminative World Models for Web Agents** (#2) — 用判别式 ranking 替代生成式采样，显著提升 Web Agent 决策效率，是 Agent 体系架构设计中有明确工程收益的方向。

3. **Language Models Can Control Their Own Attention** (#17) — 直击百万 token 上下文的 KV Cache 扫描瓶颈，理论上以自主注意力控制换取显著计算节省，对长上下文 LLM 的实际部署具有普遍意义。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*