# ArXiv AI Research Digest 2026-10-01

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-30 22:16 UTC

---

# ArXiv AI Research Digest — October 1, 2026

## 1. Today's Highlights

Today's submissions cluster around three recurring tensions in modern AI: **efficiency vs. fidelity** (KV-cache and recurrent-state quantization, MoE serving), **reasoning vs. execution traceability** (agents that declare plans but don't execute them, chain-of-thought traces that produce correct answers with invalid reasoning), and **3D/spatial grounding** (MLLMs that "imagine" 3D scenes before answering, visual regrounding for VLMs, grounded entity biographies for long-video memory). A notable throughline is the growing scrutiny of *intermediate artifacts*—latent states, thinking traces, agent plans—rather than final outputs alone. On the infrastructure side, two concurrent papers (STEPQuant and LeapQuant) tackle the same linear-attention quantization bottleneck from complementary angles, signaling an active race to make long-context recurrence practical under concurrent serving.

## 2. Key Papers

### 🧠 Large Language Models

- **[STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization](http://arxiv.org/abs/2609.38169v1)** — Yao, Xu, Lin et al.  
  Identifies *which* recurrent-state quantization errors degrade accuracy, enabling selective low-precision storage for linear-attention models — a direct attack on long-context memory bottlenecks.

- **[LeapQuant: Efficient Linear Attention with Accurate Recurrent State Quantization](http://arxiv.org/abs/2609.38166v1)** — Pan, Xi, Zhu et al.  
  Proposes accurate quantization for Gated DeltaNet/Kimi Delta Attention recurrent states, complementary to STEPQuant and aimed at making hybrid linear-attention LLMs practical at scale.

- **[Alpha Diffusion Language Models: Factorization Alone Is Not the Problem](http://arxiv.org/abs/2609.38066v1)** — Gushchin, Baranchuk, Korotin.  
  Shows that cross-entropy training of discrete diffusion LMs fails not because of autoregressive factorization but because conditional marginals don't produce consistent joint predictions, reframing how to train parallel text generators.

- **[Pretraining Latent Information Feedback Transformers with Teacher Supervision](http://arxiv.org/abs/2609.38149v1)** — Tirosh, Amos, Geva.  
  Introduces feedback pathways from deep to shallow layers, breaking the feed-forward-only assumption in transformers and letting models avoid recomputing intermediate results.

- **[Correct Answers, Invalid Traces: What Verifiable Grade-School Math Reveals About Chain-of-Thought Traces](http://arxiv.org/abs/2609.38107v1)** — Puduppully, Misra, Iyer et al.  
  Mechanically verifies CoT traces in synthetic grade-school math to show answers can be right while reasoning is wrong — a cautionary finding for anyone treating CoT as an auditable record.

- **[Gender bias across LLMs is common and highly heterogenous](http://arxiv.org/abs/2609.38036v1)** — Bolzoni, Capraro.  
  A broad multi-model survey finding that gender bias is pervasive but varies strongly by model and measure, complicating one-size-fits-all mitigation claims.

- **[Dr. OPD: Learning What to Follow for Optimal On-Policy Distillation](http://arxiv.org/abs/2609.38025v1)** — Z. Wang, T. Wang, Zhang et al.  
  Argues that not all teacher token-level supervision is equally useful and learns *which* signals to follow, improving on-policy distillation of LLMs.

### 🤖 Agents & Reasoning

- **[Thinking Before Thinking: Scaling Agentic Inference Through Meta-Reasoning](http://arxiv.org/abs/2609.38147v1)** — Dahal, Bakhtin, Cohen et al.  
  Frames long-horizon agent control itself as a reasoning task, adding an inference-time meta-reasoning harness that decides which partial work to build on and when to stop.

- **[Do LLM Agents Execute the Plans They Declare?](http://arxiv.org/abs/2609.38108v1)** — Oota, Herrera, Cabot Sagrera et al.  
  Directly tests the planning-declaration vs. execution gap, showing that producing a good plan is distinct from faithfully following it — a core reliability concern for planner–executor systems.

- **[UserProxyBench: Evaluating LLM User Simulators for Agent Benchmarks and Training](http://arxiv.org/abs/2609.38043v1)** — Jain, Sandhu.  
  Highlights a blind spot in interactive benchmarks: the *simulated user* LLM is rarely itself evaluated, though it controls what information the agent receives.

- **[Learning Meta-Skills for Agent Harness Design in Test-Time AI4AI](http://arxiv.org/abs/2609.38143v1)** — Qian, Zhu, Li et al.  
  Studies how a Builder can learn reusable meta-skills to construct better execution environments for a Target agent at test time, with both models' weights frozen.

- **[Retrieval-Augmented Skill Optimization via Cross-Harness Adaptation](http://arxiv.org/abs/2609.38024v1)** — Chu, Lee, Park et al.  
  Uses retrieval and cross-harness transfer to adapt existing agent skills to new execution harnesses, improving skill reusability.

### 🔧 Methods & Frameworks

- **[LongHarness Bench: Stress-Testing Language Model Harnesses for Long-Context Reasoning](http://arxiv.org/abs/2609.38137v1)** — Pham, Nguyen, Chen et al.  
  Introduces a benchmark designed to distinguish modern harnesses that existing long-context evals saturate, combining accuracy with evaluation-cost sensitivity.

- **[WUSH-KV: KV Cache Quantization with Data-Adaptive Transforms](http://arxiv.org/abs/2609.38121v1)** — Chen, Egiazarian, Kurtić et al.  
  Applies second-order-statistics-derived, data-aware transforms to low-bit KV-cache quantization, directly targeting long-context inference memory cost.

- **[Breaking the Uniformity Trap: Scaling Video Diffusion via SplitMoE](http://arxiv.org/abs/2609.38140v1)** — Xu, Zhang, Yang et al.  
  Rejects token-wise uniform expert usage in MoE and proposes SplitMoE matched to the structure of visual generative tasks, a promising scaling route for video diffusion.

- **[ReCIRC: Rectified Conformal Risk Control](http://arxiv.org/abs/2609.38112v1)** — Resende, Graziadei, Ramos et al.  
  Fixes over-conservativeness in conformal risk control while preserving distribution-free guarantees — practical for safety-critical error-rate control (e.g., missed lesion pixels).

- **[Mira: Memory-Efficient MoE Inference Using Adaptive Caching and Predictive Expert Staging](http://arxiv.org/abs/2609.38090v1)** — Yadav, Asgari.  
  Makes MoE inference feasible on single-GPU resource-constrained systems by predictively staging experts and caching intelligently, addressing the expert-parameter memory wall.

### 📊 Applications

- **[Imagine3D-LLM: Teaching MLLMs to Imagine 3D Scenes Before Answering](http://arxiv.org/abs/2609.38177v1)** — Jung, Yu, An et al.  
  Gives multimodal LLMs a 3D "imagination" step to integrate multi-view evidence before answering, targeting a fundamental cross-viewpoint reasoning weakness.

- **[Beyond the Timeline: Augmenting Long-Video Memory with Grounded Entity Biographies](http://arxiv.org/abs/2609.38155v1)** — Ren, Fan, Pao et al.  
  Links observations of the same physical object across hours/days via grounded entity biographies, resolving identity in long-video question answering.

- **[From Routing Signals to Selective Review: Visual Regrounding in MoE VLMs](http://arxiv.org/abs/2609.38111v1)** — Guo, Fayyaz, Peng.  
  Detects "target-absence grounding failures" where VLMs answer about absent objects, leveraging MoE routing signals for reliability-critical visual grounding.

- **[doPlan: A Variable-Horizon Dataset for Multi-Stage Language-Conditioned Planning in Autonomous Driving](http://arxiv.org/abs/2609.38028v1)** — Roy, Tandon, Blennemann et al.  
  Provides a dataset for driving agents to reason about multi-stage, future-dependent passenger intent, beyond immediate commands.

- **[Auditable Long-Term Memory: A Deterministic Retrieval Chain Measured at 479/475 of 500 on LongMemEval-S](http://arxiv.org/abs/2609.38021v1)** — Chanhnourack.  
  Demonstrates that a fully auditable, deterministic retrieval chain (with LLM only as replaceable final reader) can nearly saturate a long-memory benchmark — a strong argument for interpretable memory design.

## 3. Research Trend Signal

Three signals stand out. First, **"auditability of intermediates" is replacing "final-answer evaluation"**: papers on invalid CoT traces (24), plan-declaration vs. execution (23), user-simulator quality (43), and deterministic auditable memory (50) all question whether a correct output implies a trustworthy process. Second, **quantization is moving from weights/activations to *state* and *cache***: recurrent-state quantization (STEPQuant, LeapQuant) and KV-cache quantization (WUSH-KV) target the new memory wall introduced by linear attention and long context — the field is shifting from "smaller models" to "smaller state" at inference. Third, **spatial/3D grounding is becoming a core reliability frontier for multimodal models**: Imagine3D-LLM's 3D imagination, MoE-VLM visual regrounding, and long-video entity grounding all share the premise that MLLMs must reason about *persistent physical identity across viewpoints and time*, not just per-image features. Collectively, these suggest a maturation away from raw capability benchmarks toward robustness, interpretability, and deployment cost.

## 4. Worth Deep Reading

1. **[Correct Answers, Invalid Traces](http://arxiv.org/abs/2609.38107v1)** — This paper has the highest conceptual stakes: if CoT traces are routinely invalid even when answers are correct, a large edifice of "reasoning" claims, agent auditing, and interpretability work rests on shaky ground. Its use of a mechanically verifiable synthetic domain (iGSM) makes the result unusually rigorous.

2. **[STEPQuant](http://arxiv.org/abs/2609.38169v1) and [LeapQuant](http://arxiv.org/abs/2609.38166v1)** (read together) — These two papers define the current frontier of a commercially critical problem: linear-attention LLMs (Gated DeltaNet, Kimi Delta Attention) promise huge long-context savings but their recurrent states are hard to quantize. Reading both reveals whether the race toward "state-efficient" LLMs is near a practical breakthrough.

3. **[Do LLM Agents Execute the Plans They Declare?](http://arxiv.org/abs/2609.38108v1)** — Its separation of plan-selection from plan-execution directly addresses the core failure mode of planner–executor agent architectures. With agent autonomy expanding, this is likely to become a foundational reference for agent reliability and governance.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*