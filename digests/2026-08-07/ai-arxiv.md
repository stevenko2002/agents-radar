# ArXiv AI 研究日报 2026-08-07

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-06 22:16 UTC

---

用户现在需要我基于给的50篇2026年8月7日左右的ArXiv AI论文生成日报，首先得先理清楚结构，先搞今日速览，然后重点论文分四个主题，然后研究趋势，然后值得精读的。
首先今日速览，得抓最核心的方向，比如首先看，今天有几个大方向：第一是长程推理相关的，不管是LLM还是智能体的，比如有Argus智能体运行时，还有Chained Recursive LM，还有Skill-Native LLM那个，还有ABSeeker搜索智能体的；然后是多模态和效率优化相关的，比如OctoLong长上下文，OPD-V视觉自蒸馏，还有MALT优化器，SSTQ隐私量化；还有垂直应用的，比如医学的、气候的、代码的，还有安全对齐的，比如Gradient Immunity，Item Response Theory for AI Safety，还有DelusionEval那个心理健康相关的。所以速览要概括，比如今日研究聚焦长程推理能力提升、LLM训练与对齐安全、多模态与效率优化三大主线，其中智能体自主决策框架、跨技能长程推理基准、小模型对齐安全等方向出现突破性进展，同时多领域垂直应用研究持续深化。
然后重点论文，分四个类别，每个类别选对应的，要准确，不能错链接和作者。
首先第一个类别🧠 大语言模型（架构、训练、对齐、评估），选哪些？首先看：
1. 那个MALT: Lightweight Curvature-Aware Muon via Diagonal Preconditioning，作者Tongle Wu等，分类cs.LG，核心是改Muon优化器，考虑损失曲率，比AdamW好，适合预训练，这个很重要，训练优化器的突破。链接是http://arxiv.org/abs/2608.05088v1
2. 然后Item Response Theory for AI Safety，作者Joshua Fonseca Rivera等，cs.AI, cs.CL，用项目反应理论解决安全基准的聚合不可靠、模型打靶问题，这个是对齐评估的重要工作。链接http://arxiv.org/abs/2608.05086v1
3. Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning，作者Yuxuan Huang等，cs.CR, cs.AI, cs.CL，解决对齐模型被恶意微调的问题，零空间防御，这个对齐安全很重要。链接http://arxiv.org/abs/2608.05045v1
4. 还有那个The Loss Does Not See the Basis, but Adam Does，作者Devender Singh，cs.LG，揭示Adam和梯度流在低秩矩阵分解上的隐式偏差差异，对理解优化器行为、模型压缩有指导意义。链接http://arxiv.org/abs/2608.05136v1
5. 还有DelusionEval: Measuring Delusion-Linked Behaviors in AI Chatbots，作者Jared Moore等，cs.CL，首个评估LLM聊天机器人导致人类妄想相关行为的基准，关注AI心理健康风险，这个评估方向很新。哦对，这个是评估类的，放在大语言模型里合适。
等下，有没有更贴合的？比如还有Language Models Generalize to Human-like Word Order Preferences？那个是认知和LLM语言习得的，也可以？不过先看，大语言模型类别里选这几个？不，要8-15篇 total，四个类别加起来，所以每个类别2-4篇差不多。
然后第二个类别🤖 智能体与推理（规划、工具使用、多智能体、思维链），选哪些？
1. Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning，作者Boxiu Li等，cs.AI，提出四模块（管理、规划、工程、执行）的持久自进化智能体运行时，支持长程推理的动态 pivoting，这个是智能体框架的突破。链接http://arxiv.org/abs/2608.05144v1
2. ABSeeker: Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment，作者Yijun Lu等，cs.AI，解决长程搜索智能体的信用分配问题，用答案回溯给步骤加权，提升训练效率，这个推理训练的重要工作。链接http://arxiv.org/abs/2608.05102v1
3. Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning，作者Yinghui He等，cs.CL, cs.LG，提出技能熵指标，衡量跨技能长程推理能力，解决现有基准不区分技能切换的问题，这个是推理评估和训练的新基准。链接http://arxiv.org/abs/2608.05139v1
4. Chained Recursive Language Models for Multi-Iteration推理？哦标题是Chained Recursive Language Models for Multi-Iteration Reasoning，作者Purbesh Mitra等，cs.CL, cs.AI，提出链式递归LM，解决单次推理轨迹需要同时处理上下文、存中间状态、验证的问题，适合多轮迭代推理任务。链接http://arxiv.org/abs/2608.05124v1
5. 还有Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite，作者Xiawei Yue等，cs.AI，提出分层图记忆，支持路径级定位和重写，解决长程智能体记忆更新和检索的问题，这个也是智能体记忆的，属于智能体推理范畴。对，这个可以加。
然后第三个类别🔧 方法与框架（新技术、基准测试、效率优化），选哪些？
1. OctoLong: Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling，作者Indraneil Paul等，cs.AI, cs.LG, cs.SE，提出跨仓库代码上下文中期训练方法，解决现有长上下文语料单一的问题，提升长上下文建模能力，这个是训练方法和效率的。链接http://arxiv.org/abs/2608.05141v1
2. OPD-V: Visual On-Policy Self-Distillation with Modality Balance，作者Aniri等，cs.CV, cs.AI，解决现有视觉自蒸馏的模态不平衡问题，提升多模态LLM的视觉推理能力，这个是后训练优化方法。链接http://arxiv.org/abs/2608.05131v1
3. SSTQ: Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant，作者Adel Javanmard等，cs.LG, cs.AI, stat.ML，提出隐私保护的向量量化方法，解决分布式优化中的本地差分隐私和通信成本问题，这个是隐私和效率优化。链接http://arxiv.org/abs/2608.05127v1
4. Reasoning Core: Designing Broad Procedural Data for Completion-Supervised Reasoning Training，作者Damien Sileo等，cs.CL，提出50种生成器的推理数据集，用于补全监督的推理训练，这个是基准和数据方法。链接http://arxiv.org/abs/2608.05148v1
5. 还有MALT刚才放的是不是可以放这里？哦刚才MALT是优化器，属于方法框架，对，刚才的大语言模型里的MALT可以挪到这里？哦对，MALT是优化方法，属于方法与框架。哦我刚才分类错了，MALT是优化器，属于方法框架，不是大语言模型架构类的。那调整一下。
还有SparseDitto: Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System，作者Shiyang Li等，cs.DC, cs.LG，用LLM智能体自动定制不同稀疏模式的GPU内核，解决稀疏矩阵计算的性能gap问题，这个也是方法和效率优化，可以加。
然后第四个类别📊 应用（垂直领域、多模态、代码生成），选哪些？
1. SciCode-Verified: How Benchmark Defects Underestimated the Scientific-Coding Ability of Language Models，作者Sihan Hu等，cs.SE, cs.AI，揭示SciCode基准的缺陷，说明LLM科学编码能力被低估，这个是代码生成和科学应用的。链接http://arxiv.org/abs/2608.04975v1
2. MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres，作者M. L. Carroll等，astro-ph.EP, cs.AI, cs.CV，将地球天气基础模型迁移到火星大气预报，拓展气象AI的行星应用，这个是垂直领域（气象/行星科学）应用。链接http://arxiv.org/abs/2608.05054v1
3. Teaching Nemotron Greek: Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Greek across Specialist Domains，作者Ayoub Kirouane等，eess.AS, cs.AI, cs.CL，将Nemotron检索模型适配到现代希腊语，支持法律、能源等专业领域的RAG，这个是垂直领域（低资源语言）应用。链接http://arxiv.org/abs/2608.05138v1
4. RepairFormer: Automated Repair of Structured Inputs Using Transformers，作者Ovi Paul等，cs.SE, cs.AI，用Transformer自动修复JSON、DOT等结构化输入文件，提升软件测试和系统鲁棒性，这个是软件工程应用。链接http://arxiv.org/abs/2608.05060v1
5. 还有VQ-VAD: Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection，作者Narges Rashvand等，cs.CV, cs.AI，用向量量化的动作表示学习做人体视频异常检测，兼顾隐私和性能，这个是安防垂直应用。链接http://arxiv.org/abs/2608.05069v1
6. 还有CoPlan: A Trustworthy Co-Intelligence Interface for Care Planning through Role-Based Contestable Argument Graphs，作者Hung Truong Thanh Nguyen等，cs.AI, cs.MA, cs.SE，提出可辩论的护理规划协同智能界面，支持临床、患者等多角色参与决策，这个是医疗垂直应用。对，这个也可以加。
等下，重点论文要8-15篇，现在数一下：大语言模型类别里现在放什么？哦刚才调整后，大语言模型类别可以放：
1. The Loss Does Not See the Basis, but Adam Does（Devender Singh）：揭示Adam优化器与梯度流在低秩矩阵分解上的隐式偏差差异，为理解优化器行为、模型低秩压缩提供理论支撑。
2. Item Response Theory for AI Safety（Joshua Fonseca Rivera等）：将项目反应理论引入AI安全评估，解决安全基准分数不可靠、模型评估打靶问题，为对齐模型的可信评估提供新范式。
3. Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning（Yuxuan Huang等）：提出基于零空间的恶意微调防御方法，无需额外安全流程即可保护已对齐LLM，降低对齐模型的下游滥用风险。
4. DelusionEval: Measuring Delusion-Linked Behaviors in AI Chatbots（Jared Moore等）：首个针对LLM聊天机器人引发人类妄想相关行为的评估基准，填补AI心理健康风险评估的空白。
哦这四个，对，都是大语言模型相关的，架构/优化、对齐、评估都有。
然后智能体与推理类别：
1. Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning（Boxiu Li等）：提出包含管理、规划、工程、执行四模块的持久自进化智能体运行时，支持长程推理中根据证据动态调整策略，是通用智能体框架的重要突破。
2. ABSeeker: Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment（Yijun Lu等）：针对长程搜索智能体提出答案回溯的信用分配方法，解决现有训练中所有步骤权重均等的问题，显著提升训练效率。
3. Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning（Yinghui He等）：提出技能熵指标和对应基准，衡量LLM在长程推理中切换不同技能的能力，解决现有长程推理评估忽略跨技能需求的问题。
4. Chained Recursive Language Models for Multi-Iteration Reasoning（Purbesh Mitra等）：提出链式递归语言模型架构，将上下文处理、中间状态存储、证据验证分离，适配多轮迭代推理任务。
5. Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite（Xiawei Yue等）：提出支持路径级定位和重写的分层图记忆机制，解决长程智能体记忆动态更新、多跳检索的难题。
这五个，都是智能体和推理的，没问题。
然后方法与框架类别：
1. MALT: Lightweight Curvature-Aware Muon via Diagonal Preconditioning（Tongle Wu等）：在Muon优化器基础上引入曲率感知的对角预处理，兼顾计算效率和损失 landscape 适配性，是LLM预训练优化器的重要改进。
2. OctoLong: Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling（Indraneil Paul等）：提出跨仓库代码上下文的中期训练方法，突破现有长上下文语料以书籍、论文为主的局限性，提升LLM长上下文建模能力。
3. OPD-V: Visual On-Policy Self-Distillation with Modality Balance（Aniri等）：解决现有视觉自蒸馏方法的模态不平衡问题，通过模态平衡策略提升多模态LLM的视觉推理性能。
4. SSTQ: Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant（Adel Javanmard等）：提出隐私保护向量量化方法，在分布式优化中同时实现本地差分隐私和低通信成本，解决现有量化方法维度相关方差过高的问题。
5. Reasoning Core: Designing Broad Procedural Data for Completion-Supervised Reasoning Training（Damien Sileo等）：发布覆盖数学、逻辑、规划等50个领域的程序化推理数据集，为补全监督的推理训练提供大规模高质量数据。
6. SparseDitto: Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System（Shiyang Li等）：用LLM智能体自动定制不同稀疏模式的GPU内核，解决稀疏矩阵计算中同类算法不同稀疏模式的性能差距可达350倍的问题。
这六个，都是方法和框架的，没问题。
然后应用类别：
1. SciCode-Verified: How Benchmark Defects Underestimated the Scientific-Coding Ability of Language Models（Sihan Hu等）：揭示SciCode基准的设计缺陷，证明当前LLM的科学编码能力被系统性低估，为科学 coding 评估标准的完善提供依据。
2. MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres（M. L. Carroll等）：首次将地球天气基础模型GraphCast迁移到火星大气预报任务，验证了气象AI模型的行星环境泛化能力，拓展了AI在地球科学外的应用边界。
3. Teaching Nemotron Greek: Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Greek across Specialist Domains（Ayoub Kirouane等）：完成NVIDIA Nemotron检索模型对现代希腊语的端到端适配，支持法律、能源等专业领域的RAG应用，填补了低资源语言在主流检索模型中的空白。
4. RepairFormer: Automated Repair of Structured Inputs Using Transformers（Ovi Paul等）：提出基于Transformer的结构化输入自动修复方法，可修复JSON、DOT等格式的损坏文件，提升软件测试、系统部署的鲁棒性。
5. CoPlan: A Trustworthy Co-Intelligence Interface for Care Planning through Role-Based Contestable Argument Graphs（Hung Truong Thanh Nguyen等）：提出基于可辩论论图的多角色护理规划协同智能界面，支持临床、患者、家属等多方参与复杂护理决策，提升AI在医疗场景的可信度。
6. VQ-VAD: Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection（Narges Rashvand等）：提出向量量化的动作表示学习方法，在人体视频异常检测中兼顾隐私保护和检测性能，适配校园等隐私敏感场景。
哦这六个，加起来4+5+6+6=21？哦不用，重点论文是8-15篇，所以每个类别选最核心的3-4篇就行，不用这么多，要精简，选最重要的。
哦对，用户要求8-15篇，所以每个类别选3篇左右，总共12篇左右刚好。
那调整一下，重点论文总共12篇，每个类别3篇：
🧠 大语言模型（架构、训练、对齐、评估）：
1. 《The Loss Does Not See the Basis, but Adam Does》[链接](http://arxiv.org/abs/2608.05136v1) | 作者: Devender Singh
   核心贡献：揭示Adam优化器与梯度流在低秩矩阵分解上的隐式偏差差异，解释了为何相同初始化下Adam不倾向低秩解，为模型低秩压缩、优化器设计提供理论依据。
2. 《Item Response Theory for AI Safety》[链接](http://arxiv.org/abs/2608.05086v1) | 作者: Joshua Fonseca Rivera, Neil Shah 等
   核心贡献：将项目反应理论引入AI安全评估，解决安全基准分数重复、模型打靶等痛点，为对齐模型的可信、无偏评估提供新范式。
3. 《Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning》[链接](http://arxiv.org/abs/2608.05045v1) | 作者: Yuxuan Huang, Xingyu Zeng 等
   核心贡献：提出基于零空间的恶意微调防御机制，无需下游用户额外操作即可保护已对齐LLM，降低对齐模型被滥用的风险。
🤖 智能体与推理（规划、工具使用、多智能体、思维链）：
1. 《Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning》[链接](http://arxiv.org/abs/2608.05144v1) | 作者: Boxiu Li, Zimo Wen 等
   核心贡献：提出包含Manager、Planner、Engineer、Executor四模块的持久自进化智能体运行时，支持长程推理中根据证据动态坚持或调整策略，是通用智能体框架的重要突破。
2. 《ABSeeker: Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment》[链接](http://arxiv.org/abs/2608.05102v1) | 作者: Yijun Lu, Rui Ye 等
   核心贡献：针对长程搜索智能体提出答案回溯的信用分配方法，解决现有训练中所有推理步骤权重均等的问题，显著提升智能体训练效率和最终性能。
3. 《Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning》[链接](http://arxiv.org/abs/2608.05139v1) | 作者: Yinghui He, Ling Yang 等
   核心贡献：提出技能熵指标和跨技能长程推理基准，首次量化LLM在长程推理中切换不同子技能（如数学推导、规划调度）的能力，填补了现有长程推理

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*