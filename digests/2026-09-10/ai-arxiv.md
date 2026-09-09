# ArXiv AI 研究日报 2026-09-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-09 22:15 UTC

---

# � 📰 ArXiv AI 研究日报 | 2026-09-10

---

## 🔎 今日速览

今日 50 篇新投稿呈现三大显著趋势：**具身智能向“全身感知-动作一体化”迈进**（TANGO、DeCAL、Omni Interaction Agent）；**LLM 推理与智能体架构从“生成”转向“结构化、可审计、可自我进化”**（Procedural Graphs、Deposon、ReCite、SAEScientist-Bench）；**优化理论与训练动力学研究深入微观机制**（Silver Rate 加速下界、Scale-Invariant 优化稳定性、课程学习的 Wasserstein 几何视角）。医疗、代码、科学发现等垂直落地论文比例上升，评测基准从静态指标转向动态、交互式、长程设定。

---

## 📚 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|----------------|
| **[Learning Length-Extrapolatable Recurrent Models](http://arxiv.org/abs/2609.09157v1)** | H. Jiang | 指出 BPTT 训练的稠密 token-level loss 仍可缓解梯度消失/爆炸，提出新归纳偏置使 RNN 在远超训练长度的序列上保持性能——长上下文架构的新理论支点。 |
| **[Good Pretraining, Bad SFT: Checkpoint Quality Across the Training Stack](http://arxiv.org/abs/2609.08966v1)** | S. Maskey 等 | 在 30B MoE 全流程实验中发现：预训练 loss 最低的 checkpoint 并非最佳 SFT 起点；揭示“预训练-微调”评估解耦的系统性风险。 |
| **[It's Not RoPE that Creates Sinks: The Role of Self-Concentration and Value-Non-Mixing in Attention](http://arxiv.org/abs/2609.09085v1)** | R. Kiya 等 | 实证证明 Attention Sink 与 Massive Activation 源于 Self-Concentration 与 Value-Non-Mixing 而非 RoPE，为低位量化稳定性提供新杠杆。 |
| **[When Does Scale-Invariant Optimization Become Unstable? An Exact Schedule Law with Weight Decay](http://arxiv.org/abs/2609.09116v1)** | H. Amin 等 | 推导出归一化层诱导的隐式反馈回路精确稳定性条件：学习率调度与 weight decay 通过参数范数耦合，给出“何时崩溃”的闭式判据。 |
| **[Evaluation of Contextual Understanding in Large Language Models](http://arxiv.org/abs/2609.09004v1)** | S. Arumugam 等 | 设计超越困惑度/BLEU 的上下文理解基准，揭示现有 LLMs 在多跳推理、指代消解、隐式约束上的系统性短板。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|----------------|
| **[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)** | Y. Lu 等 | 提出“程序图”显式建模任务流程知识（做什么、顺序、条件），支持运行时自进化，显著提升长程规划成功率与可解释性。 |
| **[Deposon: An Auditable, Conservation-Guaranteed, Game-Theoretically Tested Scattering Layer over LLM Reasoning Paths](http://arxiv.org/abs/2609.09001v1)** | Q. Yuan | 为多步推理引入可审计“散射层”：每个概念节点绑定守恒态，三通道散射机制保证推理路径可回溯、可博弈验证。 |
| **[MeClear: Cooperative Game-Theoretic Attribution and Risk-Aware Memory Clearance for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.09115v1)** | B. Yang 等 | 用 Shapley 值量化记忆条目对下游任务的边际贡献，结合风险感知清理策略，解决长程交互中过时/误导性记忆污染问题。 |
| **[ReCite: Agentic Reasoning for Faithful Citation](http://arxiv.org/abs/2609.09156v1)** | Y. Huang 等 | 构建“推理-检索-引用”闭环智能体，通过显式推理链定位证据片段，大幅降低幻觉引用率，推动学术写作自动化可信度。 |
| **[Answer-Distribution Trajectories: A Stochastic-Dynamics View of LLM Reasoning](http://arxiv.org/abs/2609.09030v1)** | M. Gonzàlez I Català 等 | 将 CoT 视为答案分布在单纯形上的随机轨迹，用熵流、概率流场刻画推理路径，提供超越端点准确率的细粒度诊断工具。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|----------------|
| **[Silver Rate Is (Almost) Optimal for Gradient Descent Acceleration](http://arxiv.org/abs/2609.09152v1)** | Y. Ye, K. Liu | 证明预设非负步长下 GD 加速的下界指数为银率 $p_{\mathrm{sil}}=\log_2(1+\sqrt{2})$，给出近似最优构造，统一了 anytime 与 non-anytime 设定。 |
| **[Curriculum Learning as Transport: Understanding Curricula with Wasserstein Geodesics](http://arxiv.org/abs/2609.09099v1)** | C. Shin, D. Alvarez-Melis | 将课程学习建模为分布在 Wasserstein 空间中的测地线传输，统一难度定义、排序、节奏三大设计维度，提供几何最优课程构造算法。 |
| **[Training-Free Task Vectors for LLM Behavioral Control](http://arxiv.org/abs/2609.09054v1)** | G. J. Perin 等 | 无需微调即可从预训练权重空间提取任务向量，利用激活差异近似梯度方向，实现零成本行为控制（风格、语言、安全）。 |
| **[ToolLoop: Closed-Loop Tool-Use Data Synthesis via Decomposed Generation and Dynamic Self-Feedback](http://arxiv.org/abs/2609.09072v1)** | M. Zeng 等 | 打破“生成-过滤”静态范式，将工具调用分解为意图-参数-结果三阶段，引入动态自反馈闭环，合成数据多样性与可用率双提升。 |
| **[SAEScientist-Bench: Can AI Agents Conduct Autonomous SAE Interpretability Research?](http://arxiv.org/abs/2609.09113v1)** | Y. Tan 等 | 首个面向“AI 做机制可解释性研究”的端到端基准：从稀疏自编码器训练、特征发现到假设验证，测试自主科研闭环能力。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 标题 | 作者 | 核心贡献 & 看点 |
|------|------|----------------|
| **[TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)** | A. Li 等 | 首个面向拥挤室内的类人全身 VLA：视觉-语言联合编码驱动协调臂肢规避障碍物，实现几何感知的连续全身适应。 |
| **[DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1)** | Y. Fu 等 | 引入“接触感知潜在共想象”，在潜空间同步预测视觉遮挡下的接触力学与手部动作，大幅提升灵巧操作成功率。 |
| **[NOAH: Learning the Full Patient Journey](http://arxiv.org/abs/2609.09140v1)** | T. Susetzky 等 | 面向全生命周期的纵向多模态时间感知模型，融合不规则时间序列、临床文本、影像，实现疾病轨迹表示与多步预测。 |
| **[Entropy-Regularized Rank-Masked Policy Optimization for Test-Time RL in Code Generation](http://arxiv.org/abs/2609.09135v1)** | J. Xu 等 | 针对代码无法表面形式比较的问题，设计基于执行结果的秩掩码熵正则策略优化，实现测试时无监督自我改进。 |
| **[Omni Interaction Agent Technical Report](http://arxiv.org/abs/2609.08977v1)** | Orantqing 等 | 端到端统一全模态流式感知、实时交互与 Agent 能力的 Gander 模型，打破轮次边界，展示连续多模态交互新范式。 |

---

## 📈 研究趋势信号

1. **“推理即轨迹/结构”成共识**：从 CoT 熵剖面、答案分布轨迹、Deposon 散射层、Procedural Graphs 等多篇工作看，社区正将推理显式建模为可几何分析、可博弈验证、可结构化编辑的对象，超越“生成文本”范式。  
2. **具身智能聚焦“接触与全身协调”**：TANGO、DeCAL、Omni Interaction Agent 均强调视觉-语言-动作在**接触丰富、遮挡严重、全身协同**场景下的紧耦合，标志着 VLA 从“导航/拾取”走向精细操作。  
3. **训练栈评估解耦与数据飞轮闭环**：Good Pretraining/Bad SFT、ToolLoop、SAEScientist-Bench 指向同一痛点——单一指标选 checkpoint、静态合成数据、缺乏自主审计机制；新范式强调**全栈一致性评估**与**闭环数据飞轮**。  
4. **优化理论回归“精确常数与几何视角”**：Silver Rate 下界、Wasserstein 课程几何、Scale-Invariant 稳定性定律，显示理论界正从渐近阶推进到**精确常数、非渐近、几何不变量**层面，直接指导超参设计。

---

## 💎 值得精读

| 论文 | 理由 |
|------|------|
| **[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)** | 重新定义 Agent 架构的“骨架”：将隐式程序知识显式化为可进化图结构，兼具工程落地性与理论可分析性，是通往可靠长程自主的关键一步。 |
| **[Silver Rate Is (Almost) Optimal for Gradient Descent Acceleration](http://arxiv.org/abs/2609.09152v1)** | 以银率这一优雅常数封顶 GD 加速极限，证明技术扎实且统一了 anytime/non-anytime 设定，优化理论与实践超参选择的直接桥梁。 |
| **[TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)** | 首个在真实拥挤环境演示全身协调 VLA 的工作，系统解决了视觉遮挡、几何感知、多肢体协同三大难题，具身智能从“演示”走向“鲁棒部署”的里程碑。 |

---

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*