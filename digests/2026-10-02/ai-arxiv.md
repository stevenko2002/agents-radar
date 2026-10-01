# ArXiv AI 研究日报 2026-10-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-01 22:15 UTC

---

# 《ArXiv AI 研究日报》
**日期：2026-10-02**  
**范围：ArXiv cs.AI / cs.CL / cs.LG 等 50 篇最新 AI 论文**

---

## 一、今日速览

今日投稿最密集的方向是**智能体 harness 的工程化与自演化**：从静态全局配置转向实例自适应、终身演化与多智能体编排，显示 agent 基础设施正成为独立研究层。**缩放律研究继续升温**，Looped MoE、预训练联合调度和 AI 生成网页文本 token 价值共同表明：算力、数据与调度需联合建模。安全与可信方面，**跨语言遗忘漏洞**和**测试时缩放曲线认证**值得关注。评测侧新增**视频场景文本编辑**、**计算机使用代理速度**等基准，补足能力之外的保真度与部署效率维度。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[Scaling Laws for Looped Mixture of Experts](http://arxiv.org/abs/2609.40316v1)** — Yanbei Chen 等  
   统一建模循环深度与 MoE 稀疏性的缩放律，为固定算力下选择循环层/专家配置提供预测工具。

2. **[How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text](http://arxiv.org/abs/2609.40295v1)** — Jenna Russell 等  
   量化 2026 年网页中 AI 生成 token 占比及其缩放规律，提醒预训练数据质量与价值评估需纳入生成内容。

3. **[Linguistic Loopholes in LLM Unlearning: From a 174-Language Benchmark to Coverage-Aware Unlearning](http://arxiv.org/abs/2609.40286v1)** — Tyler Skow 等  
   构建 174 语言基准揭示单语遗忘可被跨语言查询绕过，并提出覆盖感知遗忘，对齐与安全关键。

4. **[From Spectra to Joint Schedules in LLM Pre-training: 3+3(+2) Scaling-Law Regimes](http://arxiv.org/abs/2609.40148v1)** — Yichen Wang 等  
   发现学习率与 batch size 联合调度会改变缩放律形态，对预训练配方设计有直接指导。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

5. **[Turbo Harness: Instance-Adaptive Harness Optimization](http://arxiv.org/abs/2609.40330v1)** — Tunyu Zhang 等  
   从全局 harness 转向实例自适应 harness，提升智能体递归自我改进的任务泛化。

6. **[How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?](http://arxiv.org/abs/2609.40303v1)** — Kirill Brilliantov 等  
   系统追问自主 MLE 代理到底需要多复杂的 harness，为 agent 工程化提供“减法”思路。

7. **[Learning from Research: Toward Lifelong Agent Harness Evolution](http://arxiv.org/abs/2609.40169v1)** — Jingbo Yang 等  
   让 agent 从研究文献中持续演化 harness，指向终身学习型代理基础设施。

8. **[Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](http://arxiv.org/abs/2609.40324v1)** — Yang Cai 等  
   多智能体 harness 探索开放数学证明，展示多假设竞争与协作在长程推理中的价值。

### 🔧 方法与框架（新技术、基准测试、效率优化）

9. **[Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text](http://arxiv.org/abs/2609.40359v1)** — Dulhan Jayalath, Oiwi Parker Jones  
   发现脑机文本解码改进可能来自时间捷径，去除后更可信，方法学警示强。

10. **[ViTeX-Bench: Benchmarking High-Fidelity Video Scene Text Editing](http://arxiv.org/abs/2609.40356v1)** — Xinghao Chen 等  
    新的视频场景文本编辑基准，评估局部编辑与原始场景动态保持能力。

11. **[Looped Diffusion Transformer](http://arxiv.org/abs/2609.40305v1)** — Yong Xien Chng 等  
    在去噪步内循环共享 Transformer 块，以计算深度换模型规模，探索 T2I 新缩放轴。

12. **[cua-speedrun: Standardized Benchmarking of the Speed of Computer-Use Agents](http://arxiv.org/abs/2609.40284v1)** — Pranjal Aggarwal 等  
    为计算机使用代理建立速度基准，补上能力之外的部署效率维度。

### 📊 应用（垂直领域、多模态、代码生成）

13. **[Ranking-Aware Prompt Optimization for Multimodal Clinical Diagnosis](http://arxiv.org/abs/2609.40361v1)** — Tian Xia 等  
    用排序感知目标替代准确率优化多模态临床诊断提示，应对严重类不平衡。

14. **[Index-Translate: A Multilingual Translation Model Family — Text, Speech, Controlled Dubbing, and Long-Document Translation](http://arxiv.org/abs/2609.40181v1)** — Tianjiao Li 等  
    覆盖文本、语音、可控配音与长文档翻译的多语言模型族，应用面广。

15. **[From DNA Design to DNA Slimming: Auditable Agentic Discovery of a Deletion-Only Designer](http://arxiv.org/abs/2609.40143v1)** — Joel Shor  
    用可审计智能体发现仅删除的 DNA 设计器，将 AI agent 用于基因调控序列精简。

---

## 三、研究趋势信号

今日最明显的信号是**智能体 harness 的工程化与自演化**：Turbo Harness、How Much Harness、Learning from Research、Cogentic 等分别讨论实例自适应、复杂度取舍、终身演化与多智能体协作。其次，**缩放律从单维度走向联合建模**：Looped MoE 统一循环与稀疏，预训练联合调度改变幂律，AI 生成网页文本被纳入 token 价值评估。第三，**可信评测补位**：跨语言遗忘漏洞、测试时缩放认证、CUA 速度基准、视频文本编辑基准。最后，隐私与数据约束下的训练效率仍是重点，如 DP-SGD 权重 tying 与连续扩散 LM 蒸馏。

---

## 四、值得精读

1. **[Turbo Harness: Instance-Adaptive Harness Optimization](http://arxiv.org/abs/2609.40330v1)**  
   理由：今日多篇论文围绕 agent harness 展开，该文把“全局 harness”推进到“实例自适应”，是理解 agent 基础设施下一阶段的关键入口。

2. **[How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text](http://arxiv.org/abs/2609.40295v1)**  
   理由：预训练数据生态正在被 AI 生成内容重塑，该文用缩放律量化 token 价值变化，对数据配方、过滤策略与模型训练都有直接影响。

3. **[Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text](http://arxiv.org/abs/2609.40359v1)**  
   理由：方法学警示强，揭示“重大改进”可能来自时间捷径而非脑信号解码本身，对多模态与时序建模评估具有普遍启发。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*