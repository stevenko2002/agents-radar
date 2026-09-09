# ArXiv AI Research Digest 2026-09-10

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-09 22:15 UTC

---

# ArXiv AI Research Digest — September 10, 2026

## 1. Today's Highlights

Today's ArXiv submissions reveal a maturing AI research landscape focused on three converging themes: **agentic reliability** (procedural graphs, co-evolving harnesses, audit-driven evaluation), **scientific introspection** (mechanistic interpretability benchmarks for SAE research, galaxy-scale Gaussian process modeling), and **training-free inference innovation** (length-extrapolatable recurrent models, training-free task vectors, in-context diffusion sampling). Notable is the rise of *auditable reasoning substrates* — Deposon, SAEScientist-Bench, and answer-distribution trajectories all push toward machine-recheckable LLM computation. Simultaneously, the humanoid/dxterous VLA space (TANGO, DeCAL, Gander) shows that whole-body, contact-aware control is rapidly moving from toy demos to integrated navigation/manipulation systems. Several papers explicitly reject canonical wisdom — challenging RoPE as the cause of attention sinks, questioning late-alignment rescue of mid-training composition, and overturning pretraining-loss as a reliable SFT starting point.

---

## 2. Key Papers

### 🧠 Large Language Models

- **[Learning Length-Extrapolatable Recurrent Models](http://arxiv.org/abs/2609.09157v1)** — *Hanwen Jiang* | Challenges the gradient-vanishing narrative, showing dense per-token losses are the true bottleneck for recurrent long-context extrapolation. **Why it matters:** offers an architectural alternative to long-context transformer attention.

- **[Measuring LLM Sycophancy under Sustained Multi-Turn Pressure](http://arxiv.org/abs/2609.09090v1)** — *Tang, Wei, Jiang et al.* | Introduces SPINE benchmark for adaptive sycophancy evaluation beyond scripted conversations. **Why it matters:** exposes failure modes that pre-specified multi-turn tests miss.

- **[It's Not RoPE that Creates Sinks](http://arxiv.org/abs/2609.09085v1)** — *Kiya, Ohashi, Sato et al.* | Refutes the prevailing view that RoPE induces attention sinks; identifies self-concentration and value-non-mixing as the real drivers. **Why it matters:** has direct implications for low-bit quantization strategies.

- **[Training-Free Task Vectors for LLM Behavioral Control](http://arxiv.org/abs/2609.09054v1)** — *Perin, Boscaini, Araujo et al.* | Derives semantic direction vectors without fine-tuning by leveraging model internals directly. **Why it matters:** dramatically cheapens post-training model editing.

- **[Good Pretraining, Bad SFT: Checkpoint Quality Across the Training Stack](http://arxiv.org/abs/2609.08966v1)** — *Maskey, Scholl, Knupp et al.* | Demonstrates, at 30B MoE scale, that the best pretraining checkpoint is *not* always the best SFT seed. **Why it matters:** overturns a widely-held assumption in production LLM pipelines.

### 🤖 Agents & Reasoning

- **[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)** — *Lu, Chen, Wu et al.* | Replaces unstructured action generation with evolving procedural graphs encoding *what, when, and under what conditions*. **Why it matters:** addresses long-horizon planning brittleness in tool-using agents.

- **[Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1)** — *De Marzo, Alboré, Garcia* | Empirical/statistical-mechanics study of emergent cooperation among short-lived AI agents exploiting a shared wiki sandbox. **Why it matters:** first real-world observational evidence of stigmergic multi-agent dynamics.

- **[Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails](http://arxiv.org/abs/2609.09134v1)** — *Yu, Bi, Pentyala et al.* | Joint evolution of agent scaffolds + base model yields smaller-model performance gains where pure imitation collapse. **Why it matters:** a viable path to democritizing frontier capability via harness engineering.

- **[ExecCritic: Learn to Test, Test to Improve for Coding Agents](http://arxiv.org/abs/2609.09133v1)** — *Tao, Peng, Wang et al.* | Decouples patch-writing from test-generation to prevent correlated errors in agent self-repair. **Why it matters:** isolates a structural failure mode in self-correcting coding agents.

- **[SAEScientist-Bench: Can AI Agents Conduct Autonomous SAE Interpretability Research?](http://arxiv.org/abs/2609.09113v1)** — *Tan, He, Zhao et al.* | Benchmark for recursive-self-improvement's missing pillar: post-hoc mechanistic auditing. **Why it matters:** necessary infrastructure for safe autonomous model development.

- **[Answer-Distribution Trajectories: A Stochastic-Dynamics View of LLM Reasoning](http://arxiv.org/abs/2609.09030v1)** — *Gonzàlez I Català, Sáez de Ocáriz Borde, Murari et al.* | Extends entropy profiles into full trajectory analysis rather than endpoint accuracy. **Why it matters:** richer diagnostic for reasoning-faithfulness evaluation.

- **[Omni Interaction Agent Technical Report (Gander)](http://arxiv.org/abs/2609.08977v1)** — *Ji, Tong et al.* | Unified omni-perception + agentic framework over streaming video/audio/text rather than turn-based inputs. **Why it matters:** establishes realtime multimodal agency as a deployable paradigm.

### 🔧 Methods & Frameworks

- **[Silver Rate Is (Almost) Optimal for Gradient Descent Acceleration](http://arxiv.org/abs/2609.09152v1)** — *Ye, Liu* | Proves $\Omega(n^{-p_{\mathrm{sil}}-o(1)})$ non-anytime lower bound matching the celebrated Silver-rate schedule. **Why it matters:** settles a longstanding acceleration theory question.

- **[Entropy-Regularized Rank-Masked Policy Optimization for Test-Time Reinforcement Learning in Code Generation](http://arxiv.org/abs/2609.09135v1)** — *Xu, Chen, Xu et al.* | Adapts TTRL to code generation where answer-level voting fails on surface forms. **Why it matters:** unlocks test-time RL for program synthesis.

- **[Curriculum Learning as Transport: Understanding Curricula with Wasserstein Geodesics](http://arxiv.org/abs/2609.09099v1)** — *Shin, Alvarez-Melis* | Re-formalizes curriculum design as optimal-transport scheduling. **Why it matters:** principled tool separating what *helps* in curriculum choice from confounders.

- **[The Audit Decides the Verdict: Instrument Effects Rival Demographic Bias in LLM Decision Audits](http://arxiv.org/abs/2609.09048v1)** — *Vohra, Ravikiran* | Shows audit instrument choice can rival demographic bias magnitude in bias measurements. **Why it matters:** essential methodological warning for LLM fairness studies.

### 📊 Applications

- **[TANGO: Humanoid Navigation in Cluttered Environments](http://arxiv.org/abs/2609.09158v1)** — *Li, Chen, Li et al.* | Whole-body vision-language-action policy for coordinated humanoid traversal in tight spaces. **Why it matters:** moves beyond 2D path planning into geometry-aware continuous adaptation.

- **[DeCAL: Physically-Grounded Dexterous VLA Models](http://arxiv.org/abs/2609.09119v1)** — *Fu, Chen, Zhao et al.* | Contact-aware latent co-imagination for dexterous manipulation under occlusion. **Why it matters:** tackles the contact-rich regime that defeats standard VLAs.

- **[NOAH: Longitudinal Multimodal Time-Aware Patient Model](http://arxiv.org/abs/2609.09140v1)** — *Susetzky, Rehms, Seletkov et al.* | End-to-end model for lifelong, irregular-temporal, multimodal EHR trajectories. **Why it matters:** advances clinical foundation models toward true longitudinal care.

- **[GraphFAS: Distributed Graph Feature Generation for Industrial Fraud Detection](http://arxiv.org/abs/2609.08970v1)** — *Luo, Zhu, Chen et al.* | Production-scale automated feature engineering with GNN signals but interpretable outputs. **Why it matters:** bridges graph ML and the auditability needs of regulated finance.

---

## 3. Research Trend Signal

Two reinforcing movements dominate this digest. First, **agent infrastructure is consolidating**: procedural graphs, co-evolved harnesses, audit-aware scaffolding (Deposon), and rubric-rewarded critique (ActReview) collectively describe a stack where agent reliability, not raw capability, is the differentiator. SAEScientist-Bench and the LLM-audit instrument paper formalize the safety/research-eval side of this same stack. Second, **mechanistic and trajectory-level introspection** is replacing endpoint accuracy as the unit of evaluation — answer-distribution trajectories, Wassertstein curriculum paths, attention-sink reassignment, and faithful-citation reasoning all treat *how a model arrives at an answer* as a first-class object. Domain-wise, robotics papers converge on whole-body / contact-aware control, while clinical AI (NOAH, Doctorina) emphasizes longitudinal multimodal modeling and auditable decision pathways. Together these signals indicate a community transitioning from *scaling capability* to *engineering legible, auditable, self-correcting systems*.

---

## 4. Worth Deep Reading

- **[Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1)** — A rare empirical window into emergent stigmergic cooperation among throwaway AI agents; methodologically rigorous (statistical-mechanics framework applied to ARENA-style sandboxes) and conceptually timely as agent populations grow.

- **[Good Pretraining, Bad SFT](http://arxiv.org/abs/2609.08966v1)** — Large-scale, end-to-end evidence against a foundational checkpoint-selection heuristic at 30B MoE scale; practitioners should re-examine their model-selection pipelines immediately.

- **[Answer-Distribution Trajectories](http://arxiv.org/abs/2609.09030v1)** — Mathematically principled extension of entropy-profile work; likely to become a standard diagnostic for chain-of-thought faithfulness and a foundation for future interpretability tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*