# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-31 22:16 UTC

---

# ArXiv AI 研究日报

**日期：2026-08-01** | **来源：ArXiv cs.AI / cs.CL / cs.LG（50 篇）**

---

## 📌 今日速览

今日投稿聚焦于**推理模型的可信评估与自我改进**、**多模态检索与蒸馏的精度优化**、**AI 安全与对齐的制度化框架**，以及**AI4AI 递归自我提升**四大主线。值得关注的是：(1) 多项研究质疑"思维链 / 反思"范式的 token 效率，提出重复采样反而更优；(2) OPD（On-Policy Distillation）持续演进，出现风格偏差修正与视觉证据归因新方法；(3) AI 安全从单点攻击扩展到信息操作（InfoOps）实时基准与系统提示审计；(4) AI 硬件老化与自主智能的结合首次被系统建模。

---

## 📂 重点论文（13 篇）

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[Inducing language models to assert their own consciousness restores human beliefs and values](http://arxiv.org/abs/2607.28607v1)**
   *Kim, Street, Rocca et al.*
   揭示安全微调抑制模型对自身意识的归因，同时意外削弱其对他人心智与人类价值观的表征——对齐训练存在"副作用"。

2. **[SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1)**
   *Chen, Lin, Wang*
   提出无 oracle 的多轮 RL 框架，让模型在测试时自主判断何时精化回答，实现自适应计算分配。

3. **[Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1)**
   *Mirzaei*
   实证表明规划-批评-重写类方法在等 token 预算下不如简单重复采样，挑战当前主流推理范式。

4. **[$β$-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1)**
   *Xu, Liu, Zhang et al.*
   揭示 vanilla OPSD 本质是 β=1 的特例，提出连续 β 谱系方法提升推理模型训练稳定性。

### 🤖 智能体与推理（规划、工具使用、多智能体）

5. **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1)**
   *Yang, Jiang, Fu et al.*
   构建 OpenMLE 全栈系统，首次在 ML 工程领域实现可验证的递归自我改进（RSI）研究平台。

6. **[MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1)**
   *Huang, Wang, Lai et al.*
   提出动态拓扑自适应机制，使多智能体系统在运行中自主调整通信结构，突破固定拓扑瓶颈。

7. **[Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](http://arxiv.org/abs/2607.28573v1)**
   *Lee, Choi*
   系统分析本地 CUA 在严格硬件约束下的推理扩展失效模式与算力权衡。

8. **[OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1)**
   *Sun, Cheng, Wang et al.*
   建立跨平台 CUA 轨迹的标准化评估框架，解决奖励模型验证与数据标注的难题。

### 🔧 方法与框架（新技术、基准测试、效率优化）

9. **[ReToken: One Token to Improve Vision-Language Models for Visual Retrieval](http://arxiv.org/abs/2607.28627v1)**
   *Xiao, Tan, Zhu et al.*
   仅用一个可学习检索 token 即可显著提升 VLM 在长视觉上下文中的检索效率与性能。

10. **[VAD: Attributing Visual Evidence for Target Reconstruction in Multimodal On-Policy Distillation](http://arxiv.org/abs/2607.28590v1)**
    *Zhang, Li, Shao et al.*
    在多模态 OPD 中实现视觉证据归因，分离视觉信号与语言先验，提升学生轨迹的细粒度监督质量。

11. **[MixFrag: Fragility-Guided Mixed-Precision Post-Training Quantization for Vision Transformers](http://arxiv.org/abs/2607.28589v1)**
    *Opi, Ryad, Faruk*
    根据 ViT 各组件对量化的异构敏感度进行差异化精度分配，在精度损失最小的前提下实现高效部署。

12. **[InfoOps Bench: A live information operations safety benchmark](http://arxiv.org/abs/2607.28503v1)**
    *Quelle, Neudert, Bright et al.*
    首个实时信息操作安全基准，覆盖俄、中等 2100+ 操作样本，用于评估大模型被国家行为体劫持的风险。

### 📊 应用（垂直领域、多模态、代码生成）

13. **[ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1)**
    *Gong, Choi, Agarwal et al.*
    提出面向 Oncall 根因分析的全新基准，评估 LLM 在噪声指标、日志与代码中进行因果推理的能力。

---

## 📈 研究趋势信号

从今日投稿可观察到三个显著趋势：(1) **推理范式的反思期**——"思维链 / 反思 / 辩论"类方法的 token 效率受到系统性质疑（Sample More、β-OPSD），研究重心从"生成更多"转向"更聪明的计算分配"；(2) **AI 安全的制度化**——从单点对齐扩展到系统提示审计（AISPA）、信息操作实时基准（InfoOps Bench）、可信约束求解（LeanCSP），安全评估正走向可审计、可认证的工程体系；(3) **AI 自我改进的闭环化**——Frontis-MA1、Change2Task 等工作表明，AI 系统正在从"辅助工具"向"能改进自身构建流程的 AI4AI"演进，ML 工程成为 RSI 的核心试验场。此外，多模态 OPD 的精细化（VAD、Lightning OPD 2.0）也反映出视觉语言模型训练正从粗粒度监督走向像素级归因。

---

## 🔍 值得精读

1. **[SVR](http://arxiv.org/abs/2607.28457v1)** — 首次在测试时实现完全无需外部反馈的自我验证 RL，对降低 LLM 推理成本与提升可靠性具有直接工程价值。

2. **[Frontis-MA1](http://arxiv.org/abs/2607.28568v1)** — 递归自我改进是 AI 长期安全与能力增长的核心命题，该文提供的 OpenMLE 平台为后续研究建立了可复现的实验基线。

3. **[Sample More, Reflect Less](http://arxiv.org/abs/2607.28576v1)** — 对当前主流"反思式推理"范式提出根本性质疑，其跨规模（1.5B–7B）的系统对比实验为推理模型设计提供了反直觉但有力的实证依据。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*