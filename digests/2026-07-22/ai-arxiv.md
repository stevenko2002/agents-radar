# ArXiv AI 研究日报 2026-07-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-22 01:03 UTC

---

# **ArXiv AI 研究日报 | 2026-07-22**
*今日共 50 篇 AI 相关论文（cs.AI、cs.CL、cs.LG）*

---

## **🔥 今日速览**
今日 ArXiv AI 论文聚焦**多模态感知、智能体效率优化、因果推理与安全控制**三大方向。大语言模型（LLM）在**逻辑推理稳定性、证据充分性评估**和**多智能体协作**方面取得新进展；视觉-语言模型（VLM）在**图像篡改检测**和**病理分析**领域展现实用价值；同时，AI 安全与硬件协同优化（如动态性能限制）成为新兴关注点。多篇论文强调**上下文感知的评估标准**（如用户信念表达、空间约束下的分子设计）和**计算效率**（如边缘设备上的模型适配、参数高效微调）。

---

## **📚 重点论文**

### **🧠 大语言模型（架构、训练、对齐、评估）**
1. **[It's Not What You Say, It's How You Say It: Evaluating LLM Responses to Expressions of Belief](http://arxiv.org/abs/2607.18232v1)**
   *Kevin Du, Clara Kümpel, Michelle Wastl et al.*
   提出用户对 LLM 的**信念表达**（如“假设 X 是真的”）会影响模型响应，需设计更灵活的对齐策略。值得关注的是其对**语言形式多样性**（预设、隐含假设）的系统分析。

2. **[Logical Judgments Under Pressure: Diagnosing Syllogistic Stability with Learned Soft Prefixes](http://arxiv.org/abs/2607.18228v1)**
   *Brian K Chen*
   通过**软前缀**（连续向量）调控 LLM 的逻辑判断稳定性，揭示了上下文依赖性对推理鲁棒性的影响。方法简单但评估严谨，适合推理能力测试。

3. **[How Does Alignment Tuning Shape Representations of Sycophancy and Related Cue-Induced Biases in LLMs?](http://arxiv.org/abs/2607.18114v1)**
   *Prakhar Gupta, Terry Jingchen Zhang, Florent Draye et al.*
   探索对齐微调如何**放大或抑制**LLM 对提示词暗示（如虚假示例）的敏感性，为对齐安全提供新视角。

4. **[Can We Break LLMs Out of Self-Loops? Fine-Grained Reasoning Control with Activation Steering](http://arxiv.org/abs/2607.18100v1)**
   *Sheldon Yu, Tong Yu, Xunyi Jiang et al.*
   提出**激活导向**（activation steering）技术，实现对 LLM 推理轨迹的精细控制，解决“自我循环”问题（如重复生成相同内容）。

---

### **🤖 智能体与推理（规划、工具使用、多智能体、思维链）**
5. **[Patch Policy: Efficient Embodied Control via Dense Visual Representations](http://arxiv.org/abs/2607.18236v1)**
   *Gaoyue Zhou, Zichen Jeff Cui, Ada Langford et al.*
   利用预训练的 ViT 稠密特征，提出**补丁策略**（Patch Policy）提升机器人控制效率，在保留空间细节的同时减少计算开销。适合实时嵌入式系统。

6. **[Learning Adaptive Safety Margins for Visual Navigation](http://arxiv.org/abs/2607.18200v1)**
   *Junyi Hu, Shuaihang Yuan, Geeta Chandra Raju Bethala et al.*
   通过**扩散模型**动态调整安全边距，解决机器人导航中固定边距导致的路径偏差或碰撞风险。实用性强，适合复杂环境。

7. **[FinSAgent: Corpus-Aligned Multi-Agent RAG Framework for Evidence-Grounded SEC Filing Question Answering](http://arxiv.org/abs/2607.18102v1)**
   *Jijun Chi, Zhenghan Tai, Hanwei Wu et al.*
   针对 SEC 文件的**多智能体检索增强生成（RAG）**，通过语料库对齐提升证据检索精度。为金融领域垂直应用提供范本。

8. **[SWE-Pruner Pro: The Coder LLM Already Knows What to Prune](http://arxiv.org/abs/2607.18213v1)**
   *Yuhang Wang, Yuling Shi, Shaoqiu Zhang et al.*
   提出**编码器内部表示感知剪枝**（SWE-Pruner Pro），利用 LLM 自身隐藏状态识别无关上下文，显著提升代码生成智能体的效率。

---
### **🔧 方法与框架（新技术、基准测试、效率优化）**
9. **[Simple Domain Generalization for Strong Pixel-Level Image Tampering Detection in Modern VLMs](http://arxiv.org/abs/2607.18230v1)**
   *Yi Tang, Xinyi Shang, Jiacheng Cui et al.*
   为现代 VLM 设计**简单但有效的域泛化方法**，解决跨模型篡改检测中的分布偏移问题。适合生成式 AI 的安全审计。

10. **[PPL-Factory: Task-Aware and Budget-Aware Data Selection from Language Modeling to Reasoning](http://arxiv.org/abs/2607.18199v1)**
    *Hang Zhang, Warren J. Gross*
    提出**PPL-Factory**，基于感知困惑度（PPL）的数据选择框架，在保持下游性能的同时降低训练成本。适合大规模模型微调。

11. **[Manifold-Constrained Hyper-Connections for Parameter-Efficient Finetuning](http://arxiv.org/abs/2607.18130v1)**
    *Valentijn Oldenburg, Floris de Kam, Bente Zuijdam et al.*
    拓展**残差连接**，提出**流形约束超连接（mHC）**作为新的 PEFT 方法，在保持 Transformer 架构完整性的同时减少可训练参数。

12. **[SelectInfer: Selective Neuron Loading and Computation for On-Device LLMs](http://arxiv.org/abs/2607.18081v1)**
    *Huzaifa Shaaban Kabakibo, Eric Schniedermeyer, Artem Burchanow et al.*
    为边缘设备设计**选择性神经元加载**（SelectInfer），通过动态加载最相关的神经元权重降低内存与计算开销。

---
### **📊 应用（垂直领域、多模态、代码生成）**
13. **[GigaPath-Flash and GigaTIME-Flash: Efficient Pathology Foundation Models for Whole-Slide and Tumor Microenvironment Analysis](http://arxiv.org/abs/2607.18218v1)**
    *Naoto Usuyama, Jeya Maria Jose Valanarasu, Sicong Yao et al.*
    推出**GigaPath-Flash**，专为病理全切片分析优化的基础模型，在保持精度的同时提升推理速度。适合医疗 AI 部署。

14. **[Do Language Models Dream of Binding Molecules? Benchmarking LLMs under Spatial Constraints](http://arxiv.org/abs/2607.18144v1)**
    *Thomas MacDougall, Maksim Kuznetsov, Roman Schutski et al.*
    构建**WorldCupArena**基准，评估 LLM 在足球预测中的动态推理能力。强调**时序信息与不确定性**的处理。

15. **[SciForma: Structure-Faithful Generation of Scientific Diagrams](http://arxiv.org/abs/2607.18091v1)**
    *Yuxuan Luo, Peng Zhang, Xinjie Zhang et al.*
    解决科学图表生成中的**结构忠实性**（如箭头方向、文本可读性），为学术出版提供 AI 辅助工具。

16. **[TRIM: Reducing AI-Generated CodeSlop via Agent Trajectory Minimization](http://arxiv.org/abs/2607.18161v1)**
    *Alex Mathai, Shobini Iyer, Aleksandr Nogikh et al.*
    提出**轨迹最小化（TRIM）**，通过优化智能体生成代码的轨迹长度减少冗余，提升代码质量。

---
## **🔍 研究趋势信号**
今日论文呈现三大趋势：
1. **上下文感知的评估标准**：LLM 对用户信念表达、空间约束（如分子设计）的响应成为新的研究焦点，强调**语言形式与任务约束的交互**。
2. **智能体效率优化**：从**选择性计算**（SelectInfer）到**动态策略**（Patch Policy），智能体在保持性能的同时追求计算效率，适应边缘设备部署。
3. **安全与可控性**：激活导向（activation steering）、域泛化（Simple Domain Generalization）和硬件级限制（Hardware Mechanisms to Dynamically Throttle AI Performance）共同构成 AI 安全的多层防护体系。

---
## **📖 值得精读**
1. **[Logical Judgments Under Pressure: Diagnosing Syllogistic Stability with Learned Soft Prefixes](http://arxiv.org/abs/2607.18228v1)**
   *理由*：提出的**软前缀调控方法**简单但评估严谨，揭示了上下文依赖性对逻辑推理的影响机制，为推理能力测试提供新工具。

2. **[Patch Policy: Efficient Embodied Control via Dense Visual Representations](http://arxiv.org/abs/2607.18236v1)**
   *理由*：结合预训练视觉特征与机器人控制，展示了**稠密表示在 embodied AI 中的潜力**，为实时系统提供了可行的优化方案。

3. **[Hardware Mechanisms to Dynamically Throttle AI Performance](http://arxiv.org/abs/2607.18069v1)**
   *理由*：从硬件层面限制 AI 性能，解决了软件安全机制可能被绕过的问题，为 AI 安全提供了硬件级保障。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*