# ArXiv AI 研究日报 2026-09-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-22 22:15 UTC

---

# 《ArXiv AI 研究日报》  
**日期：2026-09-23 | 来源：cs.AI / cs.CL / cs.LG（含交叉方向）**

---

## 一、今日速览

今日投稿呈现出三条清晰主线：**智能体"外挂"（harness）的自动化与自进化**成为最集中的爆发点（Harness-Zero、RRSI、MedRSI 三篇同日出现，标志着从"改模型"转向"改包裹模型的外部系统"）；**智能体评估体系**正在从结果导向走向过程与不确定性导向（OSWorld-Pro、DolphinBench、GRUET、Critical-State RL）；**可解释性与证据保真**受到重视，多篇工作质疑"精度达标≠推理可信"（量化后解释退化、答案盆地假说、护栏扰动分析）。此外，世界模型开始引入隐式 3D 记忆与触觉模态，LLM 与人类协作的形式化验证（交互式证明）也带来理论新意。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Complex KDA: Understanding and Enhancing the Expressivity of Kimi Delta Attention**  
🔗 http://arxiv.org/abs/2609.24797v1  
*Siems, Grazzi, Pöppel et al.*  
揭示 delta-rule 线性 RNN 因低秩修正导致的表达力瓶颈，提出复数化 KDA 以更高效地建模旋转等结构，为线性注意力架构提供理论改进。

**2. LoRA-generating hypernetworks for efficient on-device LLM generative personalization**  
🔗 http://arxiv.org/abs/2609.24979v1  
*Augenstein, Ding, Lee et al.*  
用超网络直接生成 LoRA 权重，实现端侧 LLM 的低成本个性化，直击移动设备算力受限下的"质量增益"难题。

**3. The Answer-Basin Representation Hypothesis: We Are Not Probing or Steering Concepts**  
🔗 http://arxiv.org/abs/2609.24821v1  
*Yu, Li, Wang et al.*  
提出"答案盆地"假说，认为线性表征反映的是答案概率测度的组织方式而非概念本身，对当前"探针/引导即操控概念"的主流叙事提出挑战。

**4. When Quantization Preserves Accuracy but Not Evidence: Explanation-Aware PTQ for Medical LLMs**  
🔗 http://arxiv.org/abs/2609.24799v1  
*Kim, Kim, Goebel*  
指出量化后答案精度可保持但解释证据会退化，提出"解释感知"的量化方法，对医疗等解释关键领域部署意义重大。

**5. Human-LLM Deliberation as Interactive Proof: Conditions for Verifiability Without Transparency**  
🔗 http://arxiv.org/abs/2609.24895v1  
*Zhang, Foster, Sedoc*  
将人机论证形式化为"证明者—资源受限验证者"的交互式证明，给出在不透明模型下用户仍可验证结论的条件，兼具理论与实用价值。

---

### 🤖 智能体与推理（规划、工具使用、多智能体）

**6. RRSI: Regularized Recursive Self-Improvement of Agent Harnesses**  
🔗 http://arxiv.org/abs/2609.24972v1  
*Xia, Han, Wang et al.*  
让智能体自动迭代修改自身的 harness（提示、控制流、工具、记忆），并加入正则化防止退化，是"自进化智能体"范式的代表性工作。

**7. Harness-Zero: Harness Distillation via Agent-as-Harness**  
🔗 http://arxiv.org/abs/2609.24974v1  
*Ye, Lu, Dong et al.*  
提出把 harness 能力蒸馏进模型，使通用智能体不再依赖部署时的特定外挂，与 RRSI 形成互补路径。

**8. MedRSI: Recursive Self-Improvement for Medical Agents via Clinically Aligned Self-Evolution**  
🔗 http://arxiv.org/abs/2609.24838v1  
*Wu, Zhu, Hu et al.*  
将递归自进化引入医疗智能体，让模型从自身失败中学习并接受临床对齐约束，展示 RSI 在高风险垂直领域的落地。

**9. Critical-State RL: Diagnosing Trainable States for Multi-Turn Tool Use**  
🔗 http://arxiv.org/abs/2609.24985v1  
*Chen, Zhao, Cen et al.*  
指出奖励波动可能来自下游随机性而非当前动作，提出识别"可训练状态"的方法，为多轮工具使用 RL 提供更精细的诊断信号。

**10. DolphinBench: Mapping the Pareto Frontier of Agent Memory**  
🔗 http://arxiv.org/abs/2609.24971v1  
*Rathi, Yadav, Singh*  
针对现有记忆基准"问题即提示答案"的缺陷，构建更贴近真实长期行动的评测，绘制记忆能力—成本帕累托前沿。

**11. OSWorld-Pro: Process-based Evaluation for Computer Use Agents**  
🔗 http://arxiv.org/abs/2609.24890v1  
*Wang, Zhang, Zhang et al.*  
从只看最终交付物转向过程化评估计算机使用智能体，揭示失败发生在哪一步、为什么失败。

**12. GRUET: Quantifying Uncertainty of Agentic Reasoning-and-Acting Processes**  
🔗 http://arxiv.org/abs/2609.24831v1  
*Liang, Hu, Zhang*  
为 ReAct 式多轮轨迹量化不确定性，弥补智能体"看起来对但置信度未知"的空白。

---

### 🔧 方法与框架（新技术、基准、效率优化）

**13. WorldCrafter: Consistent Video World Model with Implicit 3D-aware Memory**  
🔗 http://arxiv.org/abs/2609.24984v1  
*Yu, Liu, Hu et al.*  
用可相机查询的隐式 3D 记忆解决视频世界模型跨视角、长时程一致性难题，是交互式环境建模的重要进展。

**14. DexTacWAM: A Visuo-Tactile World-Action Model for Dexterous Manipulation**  
🔗 http://arxiv.org/abs/2609.24976v1  
*Yuan, Wang, Shao et al.*  
把触觉引入 World-Action Model，直接建模视觉难以观测的接触动力学，推进灵巧操作。

**15. Pinocchio: Fast Uncertainty Estimates for Black-Box Language Models**  
🔗 http://arxiv.org/abs/2609.24881v1  
*Hayes, Pal, Zhang et al.*  
无需 log-prob 或多次采样即可快速估计 LLM 不确定性，降低高 stakes 场景的部署门槛。

**16. onPanda: Efficient Annotation of On-Policy Alignment Data via Token-Level Correction**  
🔗 http://arxiv.org/abs/2609.24983v1  
*Yang, Liu, Wang et al.*  
以"定位首个不当 token 并替换"为核心的交互式标注工具，显著提升对齐数据与智能体轨迹的标注效率。

---

### 📊 应用（垂直领域、多模态、代码生成）

**17. Decomposing Error and Style in Automated Clinical Coding**  
🔗 http://arxiv.org/abs/2609.24877v1  
*Shing, Moriarty, Ware et al.*  
发现不同团队对同一病历编码仅 73% 一致，主张区分"真错误"与"风格差异"，重塑临床编码评测标准。

**18. SLICEChat: Progressive In-Encoder Token Pruning for Whole-Slide Pathology LMs**  
🔗 http://arxiv.org/abs/2609.24894v1  
*Bozkurt, Bakay, Kulac et al.*  
在编码器内部渐进剪枝 gigapixel 病理切片 token，解决全切片多模态大模型的可扩展性瓶颈。

**19. Uranus: Building the Next-Generation Simulation Infrastructure for Embodied AI**  
🔗 http://arxiv.org/abs/2609.24815v1  
*Qin, Zhou, Shen et al.*  
数据驱动的机器人仿真器，围绕联合轨迹条件生成，降低传统仿真器高昂的人工搭建成本。

**20. When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting**  
🔗 http://arxiv.org/abs/2609.24862v1  
*Hu, Dai, Qu et al.*  
面向机制随时间演化的时间序列，提出自进化策略动态调整模型与推理规则，推动 agentic 预测落地。

---

## 三、研究趋势信号

今日最鲜明的信号是**"模型冻结、外挂进化"**：RRSI、Harness-Zero、MedRSI 三篇同日出现，说明社区正把提升重点从改权重转向自动优化 harness 与自进化循环。其次是**评估范式迁移**——从端到端结果转向过程化（OSWorld-Pro）、状态级（Critical-State RL）、不确定性（GRUET）与证据保真（解释感知量化、答案盆地）。第三，**世界模型多模态化**（触觉、隐式 3D 记忆）与**人机协作形式化**（交互式证明）开始交叉，预示 2026 下半年智能体可靠性与可验证性将成为主线。

---

## 四、值得精读

**1. RRSI（http://arxiv.org/abs/2609.24972v1）**  
与 Harness-Zero、MedRSI 构成当日最完整的"自进化 harness"方法簇，是理解未来智能体工程范式的核心入口，且给出了正则化这一关键工程细节。

**2. OSWorld-Pro（http://arxiv.org/abs/2609.24890v1）**  
过程化评估很可能成为计算机使用智能体的新基准范式，配套 DolphinBench、GRUET 一起读可把握"如何真正衡量智能体"的完整方法论。

**3. The Answer-Basin Representation Hypothesis（http://arxiv.org/abs/2609.24821v1）**  
对线性表征假说的直接挑战，可能影响未来可解释性与可控生成的研究路线，理论意义高于单点性能提升，值得完整细读论证与实验设计。

---
*注：以上链接与信息均来自本次提供的 ArXiv 投稿清单，部分摘要因原文截断仅作方向性概括。*

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*