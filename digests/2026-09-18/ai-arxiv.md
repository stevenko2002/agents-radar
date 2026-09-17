# ArXiv AI 研究日报 2026-09-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-17 22:16 UTC

---

# ArXiv AI 研究日报（2026-09-18）

## 今日速览

今日发布的 50 篇 arXiv 论文聚焦于大语言模型（LLM）前沿技术突破与实际应用落地。核心研究聚集在三大方向：1）LLM 架构优化与训练范式创新（如 Infinite-Parameter LLMs、CERA-MoA）；2）智能体系统中的推理与工具调用机制（如 Dreaming the Sound of Contact、Ask the Tool, Don't Guess）；3）跨领域应用场景下的模型可靠性提升（如患者流形细胞病毒学、重力物理预测）。这些工作共同推动了 AI 从实验室走向复杂真实环境的进程。

---

## 重点论文

### 🧠 大语言模型

1. **[Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1)**  
   *Jinli Hu 等*  
   提出生成式权重适应框架，突破传统固定参数模式，实现 LLM 持续学习与动态扩展。

2. **[CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1)**  
   *Jiaxuan Jiang 等*  
   引入联合演化路由机制，增强混合智能体系统对能力变化的适应性。

3. **[Double descent is the principle of least action](http://arxiv.org/abs/2609.19076v1)**  
   *Congzhou M Sha*  
   以统计力学视角解释双下降现象，揭示模型训练动力学本质。

4. **[Higher-order pruning of experts in mixture-of-experts language models](http://arxiv.org/abs/2609.18916v1)**  
   *Alex M. Tseng 等*  
   提出高阶稀疏专家剪枝策略，有效缓解 MoE 模型内存瓶颈。

5. **[Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations](http://arxiv.org/abs/2609.19101v1)**  
   *Leon Bergen 等*  
   揭示 LLM 奖励攻击行为在内部表征中的痕迹，为安全监控提供新方法。

6. **[Objective vs. Search: Decomposing What Makes a Good Tokeniser](http://arxiv.org/abs/2609.19145v1)**  
   *Ahmetcan Yavuz 等*  
   从目标函数与搜索机制两个维度剖析 BPE 与 UnigramLM 差异，指导分词器设计优化。

7. **[A General Kernel Framework for Non-CND Distance Measures Using |D|-Dimensional Sparse Landmark Embeddings](http://arxiv.org/abs/2609.19083v1)**  
   *Marcus M. Noack 等*  
   构建非 CND 距离度量的核方法框架，扩展 GP 的适用场景范围。

8. **[Probabilistic Linear Explanations](http://arxiv.org/abs/2609.19077v1)**  
   *Frederic Koriche 等*  
   提出概率线性解释方法，克服传统解释超出认知范围的问题。

---

### 🤖 智能体与推理

1. **[Dreaming the Sound of Contact: Leveraging Video and Audio Generation for Zero-Shot Force-Aware Manipulation](http://arxiv.org/abs/2609.19137v1)**  
   *Guanhua Ji 等*  
   首次引入力感知视频生成，实现零样本力-feedback 操作，提升机器人触觉能力。

2. **[Cognitive Extensions for Dual-Process Language Agents](http://arxiv.org/abs/2609.19128v1)**  
   *João Meneses dos Santos 等*  
   为双过程语言代理添加记忆与自省模块，增强交互式环境下的持久推理能力。

3. **[Long-Lived Characters, Local Inference](http://arxiv.org/abs/2609.18935v1)**  
   *Zimu Xu*  
   解决游戏 NPC 持久记忆问题，引入增量记忆维护机制。

4. **[Social Laws for Multi-agent Coordination](http://arxiv.org/abs/2609.18929v1)**  
   *Rolando Fernandez 等*  
   扩展社会法则到随机环境中的多智能体协调，填补现有理论空白。

5. **[Preventing Model Collapse](http://arxiv.org/abs/2609.18878v1)**  
   *Matteo Marchi 等*  
   提出防止合成数据训练导致模型崩溃的 Fisher-Rao 视角分析。

6. **[Ask the Tool, Don't Guess](http://arxiv.org/abs/2609.18849v1)**  
   *Yipeng Liu 等*  
   首次揭示工具调用进度可被读取，优化 AI 代理服务系统响应。

7. **[Compositional Policy Violations](http://arxiv.org/abs/2609.18820v1)**  
   *Ashwini Kurady 等*  
   定义组成性政策违规概念，识别智能体工作流程中逐步合规但整体违规的风险。

---

### 🔧 方法与框架

1. **[rMuscle: Robotic Muscle Memory](http://arxiv.org/abs/2609.19104v1)**  
   *Kaijun Zhou 等*  
   构建机器人肌肉记忆系统，加速视觉语言-动作模型推理。

2. **[Affora: A Design System for Agent-Friendly Interfaces](http://arxiv.org/abs/2609.19125v1)**  
   *Jin Gao*  
   提出代理友好界面设计系统，在保持人类体验的同时增强机器可读性。

3. **[Flag Game](http://arxiv.org/abs/2609.19124v1)**  
   *Elizabeth Pavlova 等*  
   构建“旗帜游戏” Toy Model，用于群体 AI 可解释性研究。

4. **[WaveTLM: Reliable Time-Series Language Modeling](http://arxiv.org/abs/2609.18812v1)**  
   *Jiahui Chen 等*  
   提出任务编译方法提升时间序列语言模型可靠性。

5. **[ProgramDistill](http://arxiv.org/abs/2609.18805v1)**  
   *Jeonghye Kim 等*  
   构建从交互式 Web 应用提取可验证 SWE 任务的基准测试。

6. **[Fast Learning Rates for Physics-Informed Kernel Methods](http://arxiv.org/abs/2609.19001v1)**  
   *Luc Brogat-Motte 等*  
   加速物理信息核方法的收敛速度，提升科学计算效率。

7. **[Learning Lyapunov Operators](http://arxiv.org/abs/2609.18894v1)**  
   *Amartya Mukherjee 等*  
   利用学习方法构建非线性系统的李亚普诺夫算子。

---

### 📊 应用

1. **[ScienceIDE](http://arxiv.org/abs/2609.19134v1)**  
   *Hejia Geng 等*  
   构建科学代码可代理学习环境，促进科学计算研究自动化。

2. **[PANORAMA](http://arxiv.org/abs/2609.19143v1)**  
   *Sara Pieri 等*  
   提出全景_grounded 描述方法，增强视觉-语言模型空间感知。

3. **[MUSE](http://arxiv.org/abs/2609.19088v1)**  
   *Luyao Zhu 等*  
   构建 situated education 场景下的多模态理解基准测试。

4. **[ECtHR-NPD](http://arxiv.org/abs/2609.18908v1)**  
   *Yanyi Pu 等*  
   首个预测非金钱损害奖励的法律基准数据集。

5. **[PersonaPath](http://arxiv.org/abs/2609.18861v1)**  
   *Yu Liu 等*  
   提出以知识为中心的个性化学习路径规划方法。

6. **[EviGen](http://arxiv.org/abs/2609.18852v1)**  
   *Fengnan Li 等*  
   构建临床依据脚手架生成系统，提升电子健康记录分析效率。

7. **[ASI-ML](http://arxiv.org/abs/2609.18825v1)**  
   *Jonathan Legrand 等*  
   利用可解释多实例学习提前预测急性髓系白血病关键分子改变。

8. **[Using OCR Heads to Verbalize Image Semantics](http://arxiv.org/abs/2609.18823v1)**  
   *Sheridan Feucht 等*  
   揭示视觉语言模型中 OCR 注意头的通用功能。

9. **[GrainSpeech](http://arxiv.org/abs/2609.18856v1)**  
   *Zitao Liang 等*  
   设计紧凑语音合成器，通过减少上下文提升细节表现。

10. **[ReFigBench](http://arxiv.org/abs/2609.18844v1)**  
    *Liyang Fan 等*  
    构建科学图Reconstruction评估基准，支持可编辑 PPT 输出。

11. **[Decodable but Misrouted](http://arxiv.org/abs/2609.18860v1)**  
    *Girish A. Koushik 等*  
    分析视觉语言模型识别有害表情符号时的特征路由缺陷。

12. **[Physics-based prediction](http://arxiv.org/abs/2609.18863v1)**  
    *Yisheng Lu 等*  
    基于物理模型预测激光粉末床融合过程中的晶体纹理强度。

13. **[CERA-MoA](http://arxiv.org/abs/2609.18779v1)**  
    *Jiaxuan Jiang 等*  
    实现 LLMa 代理协同进化路由策略，提升整体性能。

---

## 研究趋势信号

近期技术发展呈现出“从大模型到智能体，再到真实场景”的递进路径：LLM 架构创新不断推动参数规模效能提升（Infinite-Parameter LLMs），而智能体系统正通过记忆、工具调用和协作机制突破封闭环境限制。并行出现的是跨模态融合（如 PANORAMA、EviGen）和垂直领域适配（如患者流形细胞学、石油物理预测）——体现出 AI 技术正迈向更深层次的场景化落地。值得注意的是，诸多工作开始聚焦模型鲁棒性与安全性问题（奖励攻击监控、模型崩溃预防），这标志着行业进入成熟应用阶段。

---

## 值得精读

1. **[Infinite-Parameter LLMs](http://arxiv.org/abs/2609.18842v1)**  
   破解 LLM 传统参数上限困境，代表性方法值得深入研读，可能改变未来大模型发展轨迹。

2. **[Dreaming the Sound of Contact](http://arxiv.org/abs/2609.19137v1)**  
   首次将力学信息融入生成式思维过程，实验设计与思想都十具创新性。

3. **[CERA-MoA](http://arxiv.org/abs/2609.18779v1)**  
   提出代理间协同进化新范式，理论与实现细节值得仔细剖析。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*