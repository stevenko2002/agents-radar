# ArXiv AI 研究日报 2026-07-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-29 22:16 UTC

---

用户现在需要我生成2026-07-30的ArXiv AI研究日报，首先得先理清楚每个部分的要求，首先得先把50篇论文过一遍，先提取核心方向，先写今日速览，3-5句。
首先速览部分，得抓今天的最新的热点，比如首先看有关于大模型的推理效率、安全对齐的，还有具身智能的策略学习，AI安全的AI竞赛风险，还有多模态的Agent评估？对，先理：今日重点突出大模型推理鲁棒性、具身智能反应性策略、AI安全对齐、多模态Agent评估四大方向，首先先总起：2026年7月30日ArXiv AI分区共更新50篇研究，核心聚焦大模型推理可靠性优化、具身智能实时策略升级、AI安全风险治理及多模态垂类应用四大方向，多篇工作提出针对现有范式痛点的创新解法，部分成果已在真实场景验证落地性。然后接下来可以提具体的，比如针对大模型推理 prefix failure 的轨迹蒸馏方法、MoE LoRA的置信自适应路由、具身操作的开环策略反应性优化，以及AI竞赛中落后导致的非安全开发风险量化研究都值得重点关注。
然后第二部分是重点论文，8-15篇，分四个主题：大语言模型、智能体与推理、方法与框架、应用。首先每个主题下面选合适的，先理大语言模型（架构、训练、对齐、评估）主题下的：
首先第一篇，Pass the Baton: Trajectory-Relayed On-Policy Distillation，链接是http://arxiv.org/abs/2607.26057v1，作者Haolei Xu等，摘要里是解决OPD的prefix failure，就是学生一旦走错推理方向后续都错，核心贡献是提出轨迹中继的on-policy蒸馏，把前序正确轨迹作为监督信号避免前缀错误，值得关注因为直接解决了大模型推理链的累积错误问题，提升小模型推理鲁棒性。对，这个放LLM里。
然后还有Instruction-Tuned Models Locally Reuse Human Syntax More Than Humans Do，链接http://arxiv.org/abs/2607.26015v1，作者Zandi Eberstadt，核心是发现指令微调模型存在超人类的句法收敛现象，揭示了LLM语言生成与人类对话习性的差异，为对齐研究提供新观测维度。这个也是LLM的对齐/评估相关的，放进去。
还有Minimizing Targeted Activations: Input-Only Suppression of Evaluation-Awareness Latents in Large Language Models，链接http://arxiv.org/abs/2607.25907v1，作者Deepanshu Mody等，核心是提出仅通过优化输入提示即可抑制LLM的评估感知潜在表征，无需推理时修改模型，为LLM安全对齐提供了轻量级新范式。对，这个也是LLM的对齐，放进去。
然后下一个主题是🤖 智能体与推理（规划、工具使用、多智能体、思维链），选哪些？
首先UniMem: Complementary Episodic-to-Parametric Memory for Boundary-Agnostic Task Streams，链接http://arxiv.org/abs/2607.26017v1，作者Siyu Xia等，核心是提出互补的片段-参数记忆机制，解决LLM Agent在无边界动态任务流中的稳定-可塑性困境，可复用任务执行经验，提升长程推理能力。对，这个是Agent的记忆，属于智能体推理。
然后Penelope: Localized Latent Recurrence for Efficient Structured Reasoning，链接http://arxiv.org/abs/2607.25915v1，作者Yutong Chen等，核心是通过局部潜在循环替代链式思考的序列化中间步骤，在不增加参数量的前提下提升结构化推理效率，降低长推理链的计算开销。对，这个是推理的效率优化，属于智能体推理。
还有Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?，链接http://arxiv.org/abs/2607.26041v1，作者Abhishek Pillai等，核心是提出首个评估GUI Agent对桌面操作因果过渡理解能力的基准，填补了当前仅评估终端任务成功率的空白，推动GUI Agent的鲁棒性研究。对，这个是GUI Agent，属于智能体。
还有Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification，链接http://arxiv.org/abs/2607.25904v1，作者Chenrui Shi等，核心是通过环境状态验证替代人工评估GUI Agent任务完成度，为Agent训练提供自动化、高可靠的奖励信号，解决GUI任务评估的痛点。对，这个也是智能体的评估，放进去。
哦对，还有那个Falling Behind Drives Unsafe Development in an Idealised AI Race Experiment，链接http://arxiv.org/abs/2607.26034v1，作者Elias Fernández Domingos等，这个是不是放应用？或者放智能体？不，这个是AI安全的，哦对，应用里有？或者等下，Methods的部分先理。
然后下一个主题是🔧 方法与框架（新技术、基准测试、效率优化），选哪些？
首先那个πR²: Reactive Real-time Flow Policies，链接http://arxiv.org/abs/2607.26055v1，作者Sungjae Park等，核心是提出反应式实时流策略，解决通用操作策略开环执行无法响应中途感知输入的问题，通过轻量重规划提升具身操作的实时反应性。哦，这个刚才我之前放错了吧，这个是方法和框架里的？或者具身是智能体？哦对，具身智能的策略属于方法框架？或者可以归到智能体？等下，用户给的分类是智能体与推理是规划、工具使用、多智能体、思维链，那具身操作的规划可以放智能体里。哦对，刚才的πR²可以放智能体里。
然后还有Parallel Decoding Distillation for Fast Image and Video Generation，链接http://arxiv.org/abs/2607.26004v1，作者Neta Shaul等，核心是提出并行解码蒸馏方法，无需对抗损失即可将扩散/流模型压缩为Few步生成器，大幅提升图像视频生成的速度同时保持质量。这个是效率优化的方法，放Methods里。
还有Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA，链接http://arxiv.org/abs/2607.26052v1，作者Tom Saliencro等，核心是提出置信自适应路由机制，让MoE LoRA按token的不确定性动态分配专家数量，解决固定路由的计算浪费问题，提升大模型微调的效率。这个也是方法框架里的效率优化，放进去。
还有CHARM: A Multimodal Graph Foundation Model with Hierarchical Context Modeling for Zero-Shot Transfer，链接http://arxiv.org/abs/2607.26023v1，作者Ankang Yang等，核心是提出层级上下文建模的多模态图基础模型，实现跨图域零样本迁移，为图结构数据的多模态分析提供通用底座。这个是新的基础模型框架，放Methods里。
还有Messier: A High-Resolution Corpus for Cross-Benchmark Agent Evaluation，链接http://arxiv.org/abs/2607.25891v1，作者Stefan Krsteski等，核心是发布统一的高分辨率Agent评估数据集与基准，解决现有Agent评估任务碎片化、不可比的问题，推动Agent研究的标准化。这个是基准测试，放Methods里。
对，Methods这里有5篇？够了，然后下一个主题是📊 应用（垂直领域、多模态、代码生成），选哪些？
首先Reinforcement Learning for Code Optimization，链接http://arxiv.org/abs/2607.25970v1，作者Pierre Chambon等，核心是揭示RL优化代码时执行时间奖励的噪声问题，提出针对性解法，推动代码生成从“正确性优化”向“性能优化”的范式升级。这个代码生成的应用，放进去。
然后VetClaw: An Edge-Cloud Multimodal Agentic System for Veterinary Disease Screening，链接http://arxiv.org/abs/2607.26042v1，作者Syed Mhamudul Hasan等，核心是提出边缘-云协同的多模态兽医疾病筛查Agent，可在低算力边缘端完成图像采集，云端零样本完成疾病分类，推动AI在农业医疗垂直领域的落地。这个垂直领域应用，放进去。
然后A Cost-Effective Multimodal LLM Reasoning Framework for Question Answering over Irregular Clinical Time Series，链接http://arxiv.org/abs/2607.25947v1，作者Frank Nie等，核心是提出低成本多模态LLM推理框架，适配不规则的临床时序数据问答需求，为医疗AI的临床落地提供新方案。这个医疗垂直应用，放进去。
还有Pictura: Perspective-View Self-Play at Scale for Driving，链接http://arxiv.org/abs/2607.26005v1，作者Yuan Yin等，核心是提出基于透视视角的大规模自博弈框架，解决自动驾驶策略训练中对 privileged 观测的依赖，提升感知-策略联合训练的 realism。这个自动驾驶垂直应用，放进去。
还有那个Evaluating Multi-Turn Multimodal Diagnostic Reasoning on Challenging Real-World Clinical Cases，链接http://arxiv.org/abs/2607.25933v1，作者Rui Yang等，核心是提出多轮多模态临床诊断推理评估基准，贴合真实临床渐进式信息获取的流程，为医疗LLM的评估提供更贴近实战的标尺。这个也是应用里的医疗评估，放进去。
哦对，还有那个AI's Capability in Assisting Scientific Research in Physics, Astrophysics, and Cosmology II，链接http://arxiv.org/abs/2607.25881v1，作者Jia Liu等，核心是评估LLM在物理、天文领域项目规划与基金评审中的能力，揭示当前LLM在高端科研辅助中的能力边界，为科研场景的LLM应用提供参考。这个科学研究的应用，也可以放。
等下，现在重点论文的数量算一下：LLM主题3篇，智能体与推理4篇，方法与框架5篇，应用5篇，总共17？哦用户要求8-15篇，那得精简，比如LLM里可以去掉那个句法的？或者精简到每部分2-3篇，总共12篇左右？对，用户说8-15，所以控制在12篇最好。
等下调整一下，每个主题3篇，总共12篇：
首先🧠 大语言模型（架构、训练、对齐、评估）：
1. 标题：Pass the Baton: Trajectory-Relayed On-Policy Distillation 链接http://arxiv.org/abs/2607.26057v1 作者：Haolei Xu, Xiaowen Xu, Haiwen Hong 等 说明：针对on-policy蒸馏的前缀失效问题，提出轨迹中继监督机制，将前序正确推理轨迹作为学生模型的监督信号，避免单步错误引发的后续推理链累积偏移，显著提升小模型的复杂推理鲁棒性。
2. 标题：Minimizing Targeted Activations: Input-Only Suppression of Evaluation-Awareness Latents in Large Language Models 链接http://arxiv.org/abs/2607.25907v1 作者：Deepanshu Mody, Samarth Agarwal, Utkarsh Mittal 等 说明：首次实现仅通过优化输入提示即可抑制LLM的评估感知潜在表征，无需修改模型参数或推理时代码，为LLM安全对齐提供了轻量级、低门槛的新范式。
3. 标题：Instruction-Tuned Models Locally Reuse Human Syntax More Than Humans Do 链接http://arxiv.org/abs/2607.26015v1 作者：Zandi Eberstadt 说明：通过大规模对话实验发现指令微调模型存在超人类的句法收敛现象，揭示了LLM语言生成习性与人类对话的本质差异，为LLM对齐研究提供了新的观测维度。
对，这三篇是LLM的，没问题。
然后🤖 智能体与推理（规划、工具使用、多智能体、思维链）：
1. 标题：πR²: Reactive Real-time Flow Policies 链接http://arxiv.org/abs/2607.26055v1 作者：Sungjae Park, Shubham Tulsiani 说明：针对通用具身操作策略开环执行无法响应中途感知输入的问题，提出轻量重规划机制的反应式流策略，在不牺牲生成效率的前提下大幅提升操作的实时反应性，可适配遮挡、突发扰动等真实场景。
2. 标题：UniMem: Complementary Episodic-to-Parametric Memory for Boundary-Agnostic Task Streams 链接http://arxiv.org/abs/2607.26017v1 作者：Siyu Xia, Chenheng Zhang, Yanting Wu 等 说明：提出互补的片段-参数混合记忆机制，解决LLM Agent在无边界动态任务流中的稳定-可塑性困境，支持Agent复用过往任务执行经验，提升长程复杂任务的完成能力。
3. 标题：Penelope: Localized Latent Recurrence for Efficient Structured Reasoning 链接http://arxiv.org/abs/2607.25915v1 作者：Yutong Chen, Shouqian Shi, Xinran Liu 等 说明：通过局部潜在循环替代链式思考的序列化中间步骤，在不增加模型参数量的前提下提升结构化推理效率，降低长推理链的计算开销与延迟，适合部署资源受限的场景。
4. 标题：Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions? 链接http://arxiv.org/abs/2607.26041v1 作者：Abhishek Pillai, Samir Kumar Nayak, Yuan Chen 说明：提出首个评估GUI Agent对桌面操作因果过渡理解能力的基准，填补了当前GUI Agent评估仅关注终端任务成功率的空白，推动GUI Agent的鲁棒性与可解释性研究。
对，这四篇是智能体的，没问题。
然后🔧 方法与框架（新技术、基准测试、效率优化）：
1. 标题：Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA 链接http://arxiv.org/abs/2607.26052v1 作者：Tom Saliencro, Rohan Desai, Priya Nair 等 说明：提出置信自适应路由机制，让MoE LoRA按token的不确定性动态分配激活专家数量，解决固定k值路由导致的简单token计算浪费、困难token服务不足问题，提升大模型微调的计算效率。
2. 标题：Parallel Decoding Distillation for Fast Image and Video Generation 链接http://arxiv.org/abs/2607.26004v1 作者：Neta Shaul, Chao Liu, Arash Vahdat 等 说明：提出并行解码蒸馏框架，无需依赖对抗损失即可将扩散/流模型蒸馏为Few步生成器，在保持生成质量的同时将图像视频生成速度提升数倍，解决生成模型部署的高延迟痛点。
3. 标题：CHARM: A Multimodal Graph Foundation Model with Hierarchical Context Modeling for Zero-Shot Transfer 链接http://arxiv.org/abs/2607.26023v1 作者：Ankang Yang, Jitao Zhao, Di Jin 等 说明：提出层级上下文建模的多模态图基础模型，支持文本、图像等多模态信息的图结构编码，实现跨图域、跨任务的零样本迁移，为生物信息、社交网络等图数据场景提供通用分析底座。
4. 标题：Messier: A High-Resolution Corpus for Cross-Benchmark Agent Evaluation 链接http://arxiv.org/abs/2607.25891v1 作者：Stefan Krsteski, Charlotte Meyer, Guillaume Allegre 等 说明：发布统一的高分辨率Agent评估数据集与标准化评估协议，解决现有Agent评估任务碎片化、评分规则不统一的痛点，为Agent研究的跨工作可比性提供基础支撑。
对，这四篇是方法框架的。
然后📊 应用（垂直领域、代码生成、多模态落地）：
1. 标题：Reinforcement Learning for Code Optimization 链接http://arxiv.org/abs/2607.25970v1 作者：Pierre Chambon, Kunhao Zheng, Juliette Decugis 等 说明：首次系统揭示RL优化代码时执行时间奖励的噪声与作弊问题，提出针对性奖励修正方案，推动代码生成从“正确性达标”向“性能最优”的范式升级，具有极高的工业落地价值。
2. 标题：VetClaw: An Edge-Cloud Multimodal Agentic System for Veterinary Disease Screening 链接http://arxiv.org/abs/2607.26042v1 作者：Syed Mhamudul Hasan, Anas AlSobeh, Hussein Zangoti 等 说明：提出边缘-云协同的多模态兽医疾病筛查系统，低算力边缘端完成图像采集，云端大模型零样本完成疾病分类，无需领域微调即可适配不同物种、不同疾病场景，推动AI在动物医疗垂直领域的普惠落地。
3. 标题：Pictura: Perspective-View Self-Play at Scale for Driving 链接http://arxiv.org/abs/2607.26005v1 作者：Yuan Yin, Elias Ramzi, Marc Lafon 等 说明：提出基于透视视角的大规模自博弈训练框架，解决自动驾驶策略训练对 privileged 向量化观测的依赖，消除感知-策略联训的表示差距，提升自动驾驶策略在真实感知输入下的泛化能力。
4. 标题：AI's Capability in Assisting Scientific Research in Physics, Astrophysics, and Cosmology II: Project Planning and Proposal Evaluation 链接http://arxiv.org/abs/2607.25881v1 作者：Jia Liu, Veena Krishnaraj, Kateryna Vovk 等 说明：系统评估LLM在物理、天文领域项目规划与基金评审任务中的能力，明确当前LLM在高端科研辅助场景的能力边界与不足，为科研领域的LLM应用落地提供参考。
对，这四篇应用的，现在总共3+4+4+4=15篇，刚好符合用户8-15的要求，完美。
然后第三部分是研究趋势信号，100-200字，从今天的论文里看，首先，一个是具身智能与GUI Agent的可信评估成为新热点，多个工作提出针对具身操作、GUI交互的专项基准，弥补现有评估仅关注结果不关注过程/因果理解的缺口；然后第二个是大模型推理的效率与鲁棒性优化持续受关注，从蒸馏、路由到记忆机制的创新，都在平衡推理质量与计算成本；第三个是AI安全与对齐的研究从理论走向轻量化落地，针对LLM安全性、Agent可控性的可部署方案增多；第四个是垂类应用的领域适配性研究深化，从通用能力向特定场景的低成本、高可靠方案演进。等下，组织语言，更通顺：今日投稿呈现出四大新兴研究方向：一是具身智能与GUI Agent的可信评估成为新热点，多篇工作提出针对操作因果过渡、任务完成过程的专项基准，弥补现有评估仅关注终端结果的不足；二是大模型推理的效率-鲁棒性

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*