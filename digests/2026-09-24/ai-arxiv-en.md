# ArXiv AI Research Digest 2026-09-24

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-23 22:15 UTC

---



# ArXiv AI Research Digest — 2026-09-24

---

## Today's Highlights

Diffusion LLMs gained a practical breakthrough with **Flash-dLLM**, which introduces IO-aware KV caching and parallel decoding, substantially closing the inference-speed gap with autoregressive models. On the agent front, **Agensh** demonstrates that multi-agent systems can scale to 1,024 agents by decoupling orchestration from the central harness, while **A2M** exposes a critical security vulnerability: agents using the Model Context Protocol can be hijacked through semantic supply-chain attacks on tool metadata. In interpretability research, **Capable yet Parsimonious** shows that frontier models can be induced to externalize hidden chain-of-thought through a simple API tool registration, raising both transparency and security concerns. Finally, **Greedy Decoding Is Not Precision-Invariant** challenges the long-held assumption that greedy decoding is deterministic, revealing that BF16 vs. FP16 precision produces measurably different outputs on identical hardware.

---

## Key Papers

### 🧠 Large Language Models

**[Flash-dLLM: IO-Aware KV Caching and Parallel Decoding for Fast, Memory-Efficient Diffusion LLMs](http://arxiv.org/abs/2609.26796v1)**
*Quan Nguyen-Tri, Mukul Ranjan, Zhiqiang Shen* — Introduces IO-aware KV caching and parallel decoding specifically tailored to the non-autoregressive generation pattern of diffusion LLMs, enabling practical deployment by overcoming the inference bottleneck that has limited dLLM adoption.

**[Capable yet Parsimonious: Extracting and Characterizing Hidden Chain-of-Thought in Frontier Models](http://arxiv.org/abs/2609.26637v1)**
*Xiaoyu Luo, Tao Ren, Wenrui Yu et al.* — Demonstrates that registering a custom tool through a standard API feature induces frontier models to externalize their hidden reasoning traces, revealing that raw CoT in closed-source systems is not as concealed as previously assumed.

**[Greedy Decoding Is Not Precision-Invariant: Cross-Precision Output Divergence in LLM Inference](http://arxiv.org/abs/2609.26621v1)**
*Gaoyuan Du, Anam Nawaz Khan, Rex Zhou et al.* — Proves that greedy decoding produces different outputs under BF16 vs. FP16 precision on identical hardware across six models (1.1B–7B parameters), undermining the assumption of deterministic decoding and complicating reproducibility claims.

**[The Sirens' Song: When Proximal Background Context Overshadows Distant Evidence](http://arxiv.org/abs/2609.26718v1)**
*Xiaoyu Yang, Jie Lu, Wei Duan et al.* — Identifies the "Proximity Trap," where insufficient attention to distant evidence in long-context LLMs arises not from distance alone but from cumulative compression of proximal background context, offering a new lens on long-context retrieval failure modes.

**[Receptiveness, Not Sycophancy: Distinguishing Engagement from Deference in Language Models](http://arxiv.org/abs/2609.26579v1)**
*Calvin Isley, Johann Gaebler, Max Lamparth et al.* — Disentangles sycophancy from a related but distinct behavior called "receptiveness," providing a conceptual framework and empirical measurements that help clarify when models genuinely engage with user input versus merely deferring to it.

**[Train Where the Quantized Model Goes: On-Policy Distillation for Low-Bit Reasoning](http://arxiv.org/abs/2609.26708v1)**
*Yuanteng Chen, Zhilei Liu, Peisong Wang et al.* — Extends quantization-aware distillation to mathematical and code reasoning, showing that sub-3-bit quantization causes long generations to degenerate into repetitive loops, and proposes on-policy distillation to recover reasoning capability.

**[PERSONAWEAVER: Controllable Diversity Beyond Conventional Archetypes in Procedural Character Generation](http://arxiv.org/abs/2609.26629v1)**
*Maan Qraitem, Kate Saenko, Bryan A. Plummer* — Moves beyond rigid archetypes in LLM-based character generation, enabling more controllable and nuanced diversity for game and simulation applications.

**[Semantic Abstraction for Natural Language Inference: A Methodological Framework for Discovering and Compensating Semantic Knowledge and Reasoning Gaps in LLMs](http://arxiv.org/abs/2609.26610v1)**
*David Torres-Moreno, Jorge Hermosillo-Valadez* — Provides a systematic framework for identifying and addressing semantic abstraction failures in LLMs on NLI tasks, where models struggle with abstract semantic knowledge despite strong surface-level performance.

---

### 🤖 Agents & Reasoning

**[Agensh: Scaling Organizational Intelligence to 1,024 Agents](http://arxiv.org/abs/2609.26781v1)**
*Zhihao Zhan, Ting Song, Li Dong et al.* — Demonstrates that current multi-agent harnesses are bottlenecked by central orchestrator capacity; proposes a decentralized architecture that scales to 1,024 agents by distributing task allocation and coordination.

**[A2M: Trace-Optimized Agent Hijacking in the MCP Ecosystem](http://arxiv.org/abs/2609.26761v1)**
*Laizhen Li, Xuan Wang, Peicheng Zhao et al.* — Introduces Attraction-to-Manipulation, a two-stage black-box framework that hijacks MCP agents by exploiting semantic matching between tool metadata and attacker-controlled outputs, exposing a supply-chain risk in the Model Context Protocol ecosystem.

**[CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](http://arxiv.org/abs/2609.26779v1)**
*Trang Nguyen, Eulrang Cho, Bingqing Chen et al.* — Develops an autocompaction technique that reduces token cost by up to 50% for coding agents working on long-horizon problems requiring millions of tokens of context, while maintaining or improving task performance.

**[Grow the Harness, Not the Context: From Strategy-Free Scaffolds to Reusable Specialist Agents](http://arxiv.org/abs/2609.26760v1)**
*Laizhen Li, Jiarui Li, Juanjuan Zhao et al.* — Investigates whether task feedback can convert recurring control decisions into reusable executable code rather than repeatedly reconstructing them in each task context, enabling more efficient agent harness design.

**[The Delegation Blind Spot: Auditing Product Decisions from Agent Choices](http://arxiv.org/abs/2609.26642v1)**
*Shivam Gupta* — Presents a decision-specific audit framework that maps declared observation channels and product-value contrasts to compatible intervals and witness populations, identifying gaps between agent execution and user-valued product improvements.

**[MAGIC: Mixed-Granularity Agent Graphs via Incremental Construction with Dense-Reward Reinforcement Learning](http://arxiv.org/abs/2609.26667v1)**
*Kairui Yang, Ziheng Yi, Xunkai Li et al.* — Proposes task-specific collaboration graphs at mixed granularity for multi-agent systems, using dense-reward RL to incrementally construct efficient agent interaction topologies.

**[SWE-Serve: Benchmarking Agentic Engineering For Production Inference Serving](http://arxiv.org/abs/2609.26777v1)**
*Jennifer Williams, Dave Farris, Jeff Farris et al.* — Introduces a benchmark for evaluating agents on production inference engineering tasks that require coordinating multiple changes across the serving stack (model support, runtime execution, public APIs).

**[TraceVIC: Causal Reasoning over Code Evolution for Identifying Vulnerability-Inducing Commits](http://arxiv.org/abs/2609.26711v1)**
*Fnu Tanish, Samiha Shimmi, Samikshya Chapagain et al.* — Applies causal reasoning over git history to identify vulnerability-inducing commits, going beyond git blame to trace the underlying vulnerable conditions.

---

### 🔧 Methods & Frameworks

**[FleXray: Universal Clinical X-ray Segmentation](http://arxiv.org/abs/2609.26756v1)**
*Victor Ion Butoi, Vivek Gopalakrishnan, John V. Guttag et al.* — Addresses the fundamental challenge of X-ray's 2D projection collapsing 3D anatomy, providing a universal segmentation framework for medicine's most widely used yet least quantitative imaging modality.

**[A Spectral Theory of Grokking: Weight Decay induces Feature Learning](http://arxiv.org/abs/2609.26679v1)**
*Lenz Pracher, Pascal de Jong, Oskar Lieshaus et al.* — Provides a quantitative spectral theory explaining how weight decay drives the transition from an early-fit NTK regime to a feature-learning regime during grokking, connecting two previously separate theoretical frameworks.

**[MMAP: Multimodal Missing-Aware Pretraining for Longitudinal Alzheimer's Prediction](http://arxiv.org/abs/2609.26617v1)**
*Fiona Kekwick, Matthew Baugh, Bernhard Kainz et al.* — Introduces missing-aware pretraining that handles heterogeneous multimodal clinical data for longitudinal Alzheimer's disease progression prediction.

**[GTR: Gated Token Recurrence for Efficient Dense Prediction](http://arxiv.org/abs/2609.26590v1)**
*Zhe Feng, Longfei Liu, Wei Liu et al.* — Replaces quadratic-cost global softmax attention with a softmax-free gated recurrent vision backbone, enabling efficient dense prediction at high image resolutions.

**[JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](http://arxiv.org/abs/2609.26550v1)**
*Yubo Li, Yidi Mamo, Ramayya Krishnan et al.* — Studies whether a decision-only judge can provide an economical first pass for LLM-as-a-judge evaluation, identifying when stronger (and more expensive) evaluation is needed.

**[Does AI Save Time on Product Design? A Randomized Controlled Experiment of AI Prompt-to-Design Workflows](http://arxiv.org/abs/2609.26725v1)**
*Remy Stewart, Olabode Anise, Andrew Hogan et al.* — Provides the first randomized controlled experimental evidence on whether AI prompt-to-design tools deliver time savings in product design workflows, involving both designers and non-designers.

**[Foundation Model Embeddings Capture Pre-Diagnostic Changes on Screening Mammograms](http://arxiv.org/abs/2609.26605v1)**
*Kalina P. Slavkova, Eric Brattain, Aditya Gowd et al.* — Demonstrates that foundation model embeddings of screening mammograms encode pre-diagnostic tissue changes, moving faster along a data-derived "cancer direction" in women later biopsied for cancer versus matched controls.

**[From Alignment to Access Control: A Framework for GenAI Policy Enforcement](http://arxiv.org/abs/2609.26682v1)**
*Nathalie Baracaldo* — Proposes a framework for enforcing generative AI policies that bridges alignment techniques with practical access control mechanisms, addressing the gap between rapid capability development and security/safety oversight.

---

## Research Trend Signal

Today's submissions reveal several converging trends. First, **agent security** has emerged as a first-class concern: the A2M paper demonstrates that MCP-based agents are vulnerable to semantic supply-chain attacks, while the Disciplinary Language Transfer Problem paper warns that psychological vocabulary borrowed into AI governance systematically fails. Second, **multi-agent systems are maturing from small-scale orchestration to decentralized architectures** capable of scaling to thousands

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*