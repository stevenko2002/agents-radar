# ArXiv AI 研究日报 2026-09-16

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-15 22:15 UTC

---

**ArXiv AI 研究日报（2026‑09‑16）**

---

### 今日速览

今天预印本库展示出多个前沿方向：大语言模型的安全性挑战与新缓解手段（如 CoT 注入攻击）、发现型基础模型的兴起、长期数学研究的多智能体协同框架、基于触觉的多模态传感融合、在视频生成中“因果可控”理念的验证，以及隐私保护的联邦与边缘 AI 技术在医疗和语音领域的突破。这些研究共同指向更安全、更开放、且具备跨模态 reasoning 能力的 AI 系统。

---

### 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 核心贡献与亮点 |
|-------|---------|----------------------|
| **Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection**<br>[http://arxiv.org/abs/2609.15989v1](http://arxiv.org/abs/2609.15989v1) | Chidambaram 等人 | 揭示了当前 CoT 监控机制的局限性，展示了如何通过“计划注入”策略在不触发安全警报的情况下嵌入有害推理路径。 |
| **Discovery Foundation Models: Toward Open-Ended Discovery Intelligence**<br>[http://arxiv.org/abs/2609.15973v1](http://arxiv.org/abs/2609.15973v1) | Yang 等人 | 提出了一个从基于已知知识的模型向“参与发现”的基础模型范式转变，强调了自主科学探究的新能力。 |
| **Mind2Dialogue: Training Human-Aware Language Models by Simulating User Mental States**<br>[http://arxiv.org/abs/2609.15972v1](http://arxiv.org/abs/2609.15972v1) | Wang 等人 | 首次引入“心理状态模拟”机制，使 LLM 能够预测用户的情感和认知状态，从而提升长期协作效果。 |
| **CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering**<br>[http://arxiv.org/abs/2609.15830v1](http://arxiv.org/abs/2609.15830v1) | Barua 等人 | 提出了一个具备自动证据验证和拒绝机制的 RAG 系统，显著提升了生成答案的溯源可靠性。 |

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 核心贡献与亮点 |
|-------|---------|----------------------|
| **Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science**<br>[http://arxiv.org/abs/2609.15983v1](http://arxiv.org/abs/2609.15983v1) | Lin 等人 | 提供了一个可插拔、多 Agent 的研究平台，显著提升了数学/理论计算机学领域的长期规划和协作效率。 |
| **The Router Within: Eliciting Native Skill Routing from a Frozen LLM**<br>[http://arxiv.org/abs/2609.15982v1](http://arxiv.org/abs/2609.15982v1) | Chen 等人 | 开箱即用冻结 LLM，在上下文内自发触发专业技能路由，避免了“万能提示”和注意力分散。 |
| **HypoEvolve: Genetic Algorithms Enable Multi-Agent LLMs to Discover Scientific Hypotheses**<br>[http://arxiv.org/abs/2609.15938v1](http://arxiv.org/abs/2609.15938v1) | Liu 等人 | 结合遗传算法与多 Agent LLM，实现科学假说的自动生成，揭示了不同 Agent 协作模式的影响。 |
| **Atria Dawn: The Dawn of Agentic Superintelligence**<br>[http://arxiv.org/abs/2609.15818v1](http://arxiv.org/abs/2609.15815818v1) | Guo 等人 | 提出一个具备科学研究和工程工作流的 AI 代理语言模型，旨在实现自主研究范式的飞跃。 |

#### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 核心贡献与亮点 |
|-------|---------|----------------------|
| **Bellman Policy Optimization**<br>[http://arxiv.org/abs/2609.15987v1](http://arxiv.org/abs/2609.15987v1) | Song 等人 | 提出一种基于 Policy Mirror Descent 的批评家免费强化学习算法，通过终端奖励显著提升自编码推理能力。 |
| **SlipSense: Multimodal Tactile Learning for Low-Latency and Generalized Slip Detection**<br>[http://arxiv.org/abs/2609.15910v1](http://arxiv.org/abs/2609.15910v1) | Jian 等人 | 整合 TacV5 传感数据，构建了一个多模态的瞬时滑动检测框架，解决传统方法延迟高、泛化差的问题。 |
| **Event-Native Symbolic-Temporal Spike Encoding Framework for Heterogeneous Cyber Streams**<br>[http://arxiv.org/abs/2609.15772v1](http://arxiv.org/abs/2609.15772v1) | Diez 等人 | 提出了一种事件驱动的时序脉冲编码机制，适用于网络安全流数据分析，天然支持低功耗边缘硬件部署。 |

#### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 核心贡献与亮点 |
|-------|---------|----------------------|
| **A Chosen Future Can Still Be Rewritten: Causal Writability in Video Models**<br>[http://arxiv.org/abs/2609.15980v1](http://arxiv.org/abs/2609.15980v1) | Wang 等人 | 证明视频模型内部保留了正确的物理运动，通过优化实现对生成内容的“因果控制”。 |
| **Anatomical Grounding and Leakage-Aware Multimodal Contrastive Learning for Alzheimer's Disease Classification from Structural MRI**<br>[http://arxiv.org/abs/2609.15888v1](http://arxiv.org/abs/2609.15888v1) | Nicolae & Mocanu | 通过解剖定位和泄漏防护 Contrastive Learning 提升 AD 分期准确率，同时降低模型对非相关临床变量的依赖。 |
| **LLM-Based Schema-Aware Split Learning for Privacy-Preserving Mental Distress Prediction Across Heterogeneous Surveys**<br>[http://arxiv.org/abs/2609.15871v1](http://arxiv.org/abs/2609.15871v1) | Syfullah & Khalil | 设计了一个结合 LLM 理解能力的跨机构心理健康调查联合学习框架，在保护个人隐私的同时实现高预测精度。 |

---

### 研究趋势信号

本周投稿稿件反映出几个显著趋势：

1. **安全/对齐战术**——除了传统的对抗性攻击外，研究者正聚焦于更细粒度的监测与规避（如 CoT 注入、验证式 RAG），表明安全对抗正向深层机制演进。

2. **发现型基础模型**——从工具辅助的问答到自主科学探究，基础模型正向“能做什么”和“会做什么”的方向扩展，涉及多智能体协作和进化算法。

3. **多模态边缘感知**——在传感器融合（触觉、

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*