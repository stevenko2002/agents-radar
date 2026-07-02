# ArXiv AI 研究日报 2026-07-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-02 01:51 UTC

---

# ArXiv AI 研究日报 | 2026-07-02

## 🌟 今日速览

今日ArXiv展现出AI研究的三大关键趋势：大模型的**内省能力与可解释性**成为核心议题，多篇论文探索模型自我解释、不确定性表达和机制分析；**智能体系统**向更复杂方向发展，涵盖多模态协作、技能组合和长时序决策；**效率与实用性优化**持续推进，从硬件加速到训练方法改进，显示AI技术正加速走向工业化部署。

## 🎯 重点论文

### 🧠 大语言模型

**[Introspective Coupling: Self-Explanation Training Tracks Behavioral Change Despite Fixed Supervision](http://arxiv.org/abs/2606.32038v1)**  
*Zifan Carl Guo, Laura Ruis, Jacob Andreas et al.*  
通过反事实行为分析训练模型生成预测解释，实现真正的内省而非表面模仿，为模型可解释性提供新范式。

**[Reinforcement Learning with Metacognitive Feedback Elicits Faithful Uncertainty Expression in LLMs](http://arxiv.org/abs/2606.32032v1)**  
*Gabrielle Kaili-May Liu, Avi Caciularu, Gal Yona et al.*  
通过元认知反馈的强化学习训练LLM表达真实不确定性，解决模型过度自信和知识边界模糊的系统性缺陷。

**[SemRF: A Semantic Reference Frame for Residual-Stream Dynamics in Language Models](http://arxiv.org/abs/2606.32022v1)**  
*Jian Gu, Aldeida Aleti, Chunyang Chen et al.*  
提出语义参考框架分析语言模型残差流动态，解决跨层解码中的坐标一致性问题，推进模型内部机制理解。

**[Surrogate Fidelity: When Can Open LLMs Explain Closed Ones?](http://arxiv.org/abs/2606.32008v1)**  
*Philippe Chlenski, Zachariah Carmichael, Ayush Warikoo et al.*  
探索何时可用开源模型解释闭源模型的代理保真度问题，为无法获得模型内部结构的机制解释提供理论框架。

### 🤖 智能体与推理

**[Generative Skill Composition for LLM Agents](http://arxiv.org/abs/2606.32025v1)**  
*Xinyu Zhao, Zhen Tan, Vaishnav Tadiparthi et al.*  
提出生成式技能组合框架，让LLM智能体通过组合模块化技能包解决复杂任务，显著提升智能体能力边界。

**[TRIAGE: Role-Typed Credit Assignment for Agentic Reinforcement Learning](http://arxiv.org/abs/2606.32017v1)**  
*Yuanda Xu, Zhengze Zhou, Hejian Sang et al.*  
针对智能体强化学习提出角色类型化信用分配，替代传统统一优势估计，为不同类型动作提供结构化信号。

**[MECoBench: A Systematic Study of Multimodal Agent Collaboration in Embodied Environments](http://arxiv.org/abs/2606.31966v1)**  
*Qingyun Liu, Jiwen Zhang, Jingyi Hu et al.*  
首个多模态具身智能体协作基准测试，系统研究MLLM在视觉环境中的协作能力，填补该领域评估空白。

**[Theory of Mind and Persuasion Beyond Conversation: Assessing the Capacity of LLMs to Induce Belief States via Planning and Action](http://arxiv.org/abs/2606.31916v1)**  
*Ben Slater, Matteo G. Mecattaf, Lucy G. Cheke et al.*  
超越对话场景评估LLM的心智理论能力，测试智能体通过规划和行动诱导他人信念状态的能力。

### 🔧 方法与框架

**[QVal: Cheaply Evaluating Dense Supervision Signals for Long-Horizon LLM Agents](http://arxiv.org/abs/2606.32034v1)**  
*Sergio Hernández-Gutiérrez, Matteo Merler, Ilze Amanda Auzina et al.*  
为长时序LLM智能体提供低成本密集监督信号评估方法，解决仅用结果奖励信号稀疏性问题。

**[AdaJEPA: An Adaptive Latent World Model](http://arxiv.org/abs/2606.32026v1)**  
*Ying Wang, Oumayma Bounou, Yann LeCun et al.*  
提出自适应潜在世界模型，在测试时动态调整预测以应对分布偏移，解决传统冻结模型的局限性。

**[Random Reshuffling Dominates Stochastic Gradient Descent](http://arxiv.org/abs/2606.32005v1)**  
*Zijian Liu*  
理论证明随机重排SGD在多种设置下优于标准SGD，为实际训练中的常用做法提供严格理论支撑。

**[CoMet: Context and Multiplicity Decomposition for Multimodal Uncertainty Estimation](http://arxiv.org/abs/2606.32012v1)**  
*Sanghyuk Chun, William Yang, Amaya Dharmasiri et al.*  
将多模态不确定性分解为上下文和多重性两个维度，为复杂多模态系统的不确定性估计提供新框架。

### 📊 应用

**[AxDafny: Agentic Verified Code Generation in Dafny](http://arxiv.org/abs/2606.32007v1)**  
*Benjamin Breen, Austin Letson, Borja Requena Pozo et al.*  
智能体框架在Dafny中生成可验证代码，同时生成执行代码和验证证明，推进形式化验证的自动化。

**[Z-1: Efficient Reinforcement Learning for Vision-Language-Action Models](http://arxiv.org/abs/2606.31846v1)**  
*Lang Cao, Renhong Chen, Luyi Li et al.*  
针对视觉-语言-动作模型的高效强化学习框架，突破传统行为克隆限制，实现真正的策略改进。

**[FlexViT: A Flexible FPGA-based Accelerator for Edge Vision Transformers](http://arxiv.org/abs/2606.31938v1)**  
*Hubert Dymarkowski, Xingjian Fu, Rappy Saha et al.*  
专为边缘设备设计的灵活FPGA加速器，解决混合ViT架构部署中的异构性挑战。

## 📈 研究趋势信号

本日投稿展现出明显的**"智能系统内省化"**趋势：从模型自我解释、不确定性感知到元认知能力，研究者们正努力让AI系统具备更强的自我监控能力。同时，**"智能体实用化"**加速推进，技能组合、多模态协作和长时序决策成为热点。值得注意的是，**"理论与实践融合"**特征明显，如随机重排SGD的理论验证和FPGA加速器的工程实现，显示该领域正从探索走向成熟的工程化阶段。

## 🎓 值得精读

1. **[Introspective Coupling](http://arxiv.org/abs/2606.32038v1)** - 开创性地解决了模型解释的真实性问题，方法论对整个可解释性研究具有重要指导意义。

2. **[Generative Skill Composition for LLM Agents](http://arxiv.org/abs/2606.32025v1)** - 为智能体能力扩展提供了系统性框架，对构建实用AI系统具有直接价值。

3. **[AdaJEPA](http://arxiv.org/abs/2606.32026v1)** - 自适应世界模型概念可能影响强化学习和决策系统的未来发展方向。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*