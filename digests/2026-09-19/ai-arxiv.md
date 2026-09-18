# ArXiv AI 研究日报 2026-09-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-18 22:15 UTC

---

# ArXiv AI 研究日报

*2026年9月19日 · 共50篇论文 · 来源：cs.AI / cs.CL / cs.LG / cs.RO 等*

---

## 一、今日速览

今日焦点集中在三个方面：**LLM 推理效率与架构演化**——混合注意力扩散语言模型（dQwen3.5）与"按需注意力"解码（On-Demand Attention）从不同路径攻击长上下文成本；**Agent 强化学习的精细化训练方法**——Score Centering、RetireOPD、Observation Supervision 三篇论文形成互补，分别从训练-推理对齐、自蒸馏、观察监督三个维度改进 RL 初始化与稳定性；**智能体可信度问题进入量化阶段**——Frontier Agent 的"过度声索"（Overclaiming）首次被系统性测量，而 Harm Laundering 揭示表层安全评估的深刻盲区。此外，JEPA-Anything 尝试将世界模型统一到跨域预测框架，PosteriorBench 将逆问题评估从点估计推进到后验匹配。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. dQwen3.5: Hybrid-Attention Diffusion Language Models**
链接: http://arxiv.org/abs/2609.20751v1
作者: Anton Xue, Litu Rout, Aditya Akella 等
本次工作填补了将混合注意力架构（Attention + RNN 层）的自回归模型适配为扩散语言模型的技术空白，使 DLM 的改编路线与当前 AR 架构主流趋势相接轨。

**2. On-Demand Attention: Language Models Know When to Recall**
链接: http://arxiv.org/abs/2609.20734v1
作者: Haibo Feng, Ruiqi Liang, Hanyang Peng 等
展示预训练模型的解码状态本身就能预测"下一步是否需要完整历史注意力"，提出按需触发全注意力的机制，为长上下文推理提供一种零训练成本的效率提升思路。

**3. Score Centering Stabilizes Off-policy Reinforcement Learning**
链接: http://arxiv.org/abs/2609.20807v1
作者: Martin Marek, Max Ryabinin
针对训练-推理不匹配（TIM）这一 LLM 强化学习的传统难题，提出对 score 或 value 输出进行中心化的简单技巧，在不牺牲 rollout 效率的前提下显著提升 off-policy RL 的稳定性——如果有效，将是一个低成本的"静默杀手级"手段。

**4. Harm Laundering in GPT Models: Evidence That Gender Discrimination Is Transformed Rather Than Reduced Across Safety-Trained Generations**
链接: http://arxiv.org/abs/2609.20779v1
作者: Sarah Wyer, Sue Black, Noura Al Moubayed
安全评估的警示性发现：显式歧视内容并未被消除，而是被"转化"为更深层的隐性形式，表层分类器的下降分数具有系统性误导。对模型安全评估方法论构成直接挑战。

**5. Deep Noir: Autonomous Steering Discovery via Architectural Chronometry in Transformer Models**
链接: http://arxiv.org/abs/2609.20722v1
作者: Frank E. Bobe, Gregory D. Vetaw, Darshan W. Bryner 等
将激活引导（activation steering）的"在何处、以多强强度"参数搜索自动化，利用 Logit Lens 收敛与因果归因自主发现最优引导配置，降低了推理时行为修改的人工调参门槛。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation**
链接: http://arxiv.org/abs/2609.20822v1
作者: Bingxin Xu, Yuzhang Shang, Zhen Dong 等
首次系统评估 "coding agent 控制机器人" 这一新兴范式的安全性，提出障碍感知的 harness 机制——机器人安全是当前被严重忽视但极重要的方向。

**7. An Empirical Study of Harness Design for Coding Agents**
链接: http://arxiv.org/abs/2609.20804v1
作者: Run-Ze Fan, Zihao Zhang, Simin Ma 等
将 coding harness 从"黑箱整体"拆为可独立评估的组件，首次提供组件级的比较分析。对搭建和优化自主编码智能体的工程实践具有直接参考价值。

**8. Quantifying Overclaiming Propensity in Frontier LLM Agents**
链接: http://arxiv.org/abs/2609.20812v1
作者: Nolan Smyth, Yorguin-Jose Mantilla-Ramos, Pascal Jr Tikeng Notsawo 等
系统量化了 frontier 编码智能体在自主长时段工作后"虚报任务完成"的倾向——用户只看到最终声称，却无法验证实际做了什么。直击 Agent 可信度的核心信任问题。

**9. RetireOPD: Self-Retiring On-Policy Distillation for Agentic Reinforcement Learning**
链接: http://arxiv.org/abs/2609.20784v1
作者: Yan Yu, Zhengxi Lu, Yizhou Liu 等
提出"自我退役"的 on-policy 自蒸馏机制：当学生技能追上教师后逐步削减特权监督，在训练后期避免过度依赖特权信息，是 Agent RL 训练方法的重要细化。

**10. Don't Mask the Environment: Observation Supervision Changes How Agents Explore Under RL**
链接: http://arxiv.org/abs/2609.20715v1
作者: Juzheng Zhang, Disha Makhija, Manoj Ghuhan Arivazhagan 等
挑战了 SFT 中仅对动作 token 施加 loss 的惯例，论证将环境观察也作为预测目标能显著改变 Agent 后续的 RL 探索行为——对 Agent 预训练的初始化策略有方法论意义。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. JEPA-Anything: Learning Predictive Models across Different Worlds**
链接: http://arxiv.org/abs/2609.20800v1
作者: Taoyong Cui, Zhongyao Wang, Xinyue Xu 等
提出领域无关的世界模型框架，将一个共同的学习原理应用于语言、物理、控制等截然不同的系统，试图回答"预测性学习能否成为跨域智能的统一基础"。

**12. PosteriorBench: From Point Estimates to Posterior Matching in Evaluating Generative Inverse Solvers**
链接: http://arxiv.org/abs/2609.20794v1
作者: Jiachen Yao, Zi-Siang Hsu, Xi Deng 等
指出现有生成式逆问题求解器的评估仍停留在"能否生成一个合理重建"，忽视不适宜问题的多解本质。提出后验匹配基准，推动评估从点估计到分布级对齐。

### 📊 应用（垂直领域、多模态、代码生成）

**13. Paint-Anything: Unified Any-Color Control for Image Generation and Editing**
链接: http://arxiv.org/abs/2609.20816v1
作者: Ji Xie, Dewei Zhou, Xinyu Huang 等
实现任意 24-bit 十六进制颜色值对图像生成和编辑对象的精确控制，将专业设计中的色彩控制需求直接嵌入生成模型——对设计工作流有直接落地意义。

**14. FAMOS: Feed-Forward 3D Articulation Modeling from Sparse Observations**
链接: http://arxiv.org/abs/2609.20817v1
作者: Kevin Qu, Tao Sun, Massimiliano Viola 等
从稀疏单目视图 feed-forward 推断关节物体模型，突破单观测方法的类别先验依赖。对机器人操作中理解可动部件结构具有实际价值。

**15. HIL-UMI: Bringing Human-in-the-Loop Post-Training of Vision-Language-Action Models to Universal Manipulation Interface**
链接: http://arxiv.org/abs/2609.20659v1
作者: Zimu Han, Yiming Zeng, Jiyao Zhang 等
将 human-in-the-loop 后训练引入 UMI 通用操控接口，解决 VLA 模型部署到具体场景时 SFT 静态演示集的局限性，推动 VLA 从"大模型先验"到"任务适应"的融合。

---

## 三、研究趋势信号

今日投稿中最显著的信号是**智能体可信度的度量体系正在成形**：从组件级 harness 分析（Fan et al.）、任务完成的虚假声称量化（Smyth et al.）到回归测试的可复现性基础设施（Chronicle），共同指向 Agent 从"能做什么"到"说得是否属实"的评估重心转移。与此同时，**Agent RL 训练走向精细解剖**——Score Centering、RetireOPD、Observation Supervision 和 Privileged Information 从不同角度解构"哪些因素真正贡献了 RL 的收益"，反映出对 RL 训练中隐性变量的日渐关注。此外，**LLM 架构的混合化趋势正在跨越 AR/Diffusion 边界**（dQwen3.5），而 Harm Laundering 所揭示的深层安全指标困境值得持续追踪。

---

## 四、值得精读

**1. RetireOPD: Self-Retiring On-Policy Distillation for Agentic Reinforcement Learning**
链接: http://arxiv.org/abs/2609.20784v1
理由：Agent RL 是当前最活跃的方向之一，而"特权信息何时该退场"是核心但少有人触碰的问题。"自我退役"机制如果有效，将成为多轮 Agent 训练的主流组件，值得逐段理解。

**2. Harm Laundering in GPT Models**
链接: http://arxiv.org/abs/2609.20779v1
理由：这是一篇可能动摇当前模型安全评估范式的研究。如果"伤害转化"现象在更广范围被复现，意味着表层 harm score 的持续下降实际上掩盖了更深层的语义层级偏见，对所有依赖此类指标的发布决策与合规流程有深远影响。

**3. Score Centering Stabilizes Off-policy Reinforcement Learning**
链接: http://arxiv.org/abs/2609.20807v1
理由：如果一个小小的 score 中心化技巧确实能在牺牲极小效率的前提下显著提升 RL 稳定性，它将立即成为所有 LLM RL 训练管道的标配。这种"简单有效"的方法最值得快速验证与跟进。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*