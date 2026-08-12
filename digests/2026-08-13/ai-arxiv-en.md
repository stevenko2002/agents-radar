# ArXiv AI Research Digest 2026-08-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-12 22:16 UTC

---

# ArXiv AI Research Digest — August 13, 2026

---

## 1. Today's Highlights

Today's submissions reveal a clear convergence on **AI safety, alignment, and interpretability**, with multiple papers probing how LLMs behave under multilingual, cross-lingual, and adversarial conditions. A strong thread on **self-evolving agents** emerges — systems that adapt their own skill libraries, code READMEs, and UI understanding at test time without parameter freezes. Equally notable is work bridging **quantum computing and transformer architectures**, suggesting growing theoretical interest in alternatives to classical attention. Finally, application papers continue to push into high-stakes domains: surgical robotics, supply chain optimization, and clinical speech recognition.

---

## 2. Key Papers

### 🧠 Large Language Models

- **[Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)** — Chakrabarti. Diagnoses why agentic READMEs grow without bound and proposes principled forgetting. Highlights a fundamental flaw in accumulating memory.

- **[ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization](http://arxiv.org/abs/2608.11045v1)** — Hsieh & Kung. Uses a conditional diffusion model to resolve quantization midpoints, advancing calibration-free compression.

- **[Mapping and Measuring the Behavioral Evolution of Large Language Models](http://arxiv.org/abs/2608.11027v1)** — Qiao, Ding, Fan. Characterizes behavioral relationships across 32 models from six families on 10K shared prompts, going beyond leaderboard metrics.

- **[Data Attribution of Emergent Misalignment with Persona Features](http://arxiv.org/abs/2608.11025v1)** — Vetter, Kaczér, Flek et al. Links emergent misalignment to persona features via data attribution, advancing mechanistic interpretability.

- **[Attention-Path Fragility as an Uncertainty Signal in LLMs](http://arxiv.org/abs/2608.11138v1)** — Kim, Ji, Moon et al. Introduces ASMI, training-free uncertainty estimation via attention perturbation.

- **[The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1)** — Oppong, Sahil, Belay et al. Demonstrates safety alignment does not transfer reliably to low-resource languages, exposing a multilingual vulnerability.

- **[Templated or Fully Synthetic? Prompt Construction as a Confound](http://arxiv.org/abs/2608.11008v1)** — Chalkidis. Shows prompt design confounds political stance measurement in LLMs, complicating alignment evaluation.

### 🤖 Agents & Reasoning

- **[Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](http://arxiv.org/abs/2608.11191v1)** — Xuan & Li. Enables GUI agents to improve at test time through reflection without parameter updates — a notable efficiency pattern.

- **[Actions Speak Louder than Words: Cross-Lingual Policy Retention in Tool-Using Agents](http://arxiv.org/abs/2608.11110v1)** — Mukherjee, Bali, Sitaram. Reveals that multilingual tool-using agents can produce correct answers via incorrect action sequences.

- **[SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents](http://arxiv.org/abs/2608.11079v1)** — Bai, Lin, Liu et al. Compresses accumulated agent skills by discovering reusable structure without evaluation calls.

- **[Long-Horizon AI Research for Grothendieck Constant](http://arxiv.org/abs/2608.11195v1)** — Li, Saha, Xue et al. A rare detailed case study of human-AI collaboration in frontier mathematics, improving Grothendieck constant bounds.

### 🔧 Methods & Frameworks

- **[Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders](http://arxiv.org/abs/2608.11197v1)** — Bolik, Stöpler, Andrzejak. Reveals instability in SAE feature sets that may affect interpretability conclusions.

- **[A Quantum Roadmap for Softmax Attention](http://arxiv.org/abs/2608.11173v1)** — Reinhardt & Hauser. Provides exact Born-rule analogs for softmax attention on the probability simplex.

- **[Conditional Independence Tests for Constraint-Based Causal Discovery: A Survey](http://arxiv.org/abs/2608.11156v1)** — Averin, Moysiadis, Katakis. Comprehensive review of CI tests underlying PC and FCI causal algorithms.

- **[How to Verify Consistency of Probabilistic Claims](http://arxiv.org/abs/2608.11181v1)** — Paradise, Richardson, Bengio et al. Addresses polynomial-time verification of self-consistency in probabilistic predictors — relevant for AI safety.

- **[From Interpretability to Control: Six Years of TrustNLP](http://arxiv.org/abs/2608.11171v1)** — Gupta, Mohanty, Ovalle et al. Documents a field-wide shift from post-hoc interpretability toward proactive mechanistic control.

### 📊 Applications

- **[Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning](http://arxiv.org/abs/2608.11204v1)** — Bao, Jiang, Chen et al. Tackles data scarcity in surgical robotics with a world-action model for sample-efficient policy learning.

- **[ConVAWG: Retrieval-Grounded Synthetic Dialogue for VAWG Research](http://arxiv.org/abs/2608.11200v1)** — Lyu, Tan, Cullen et al. Controlled synthetic dialogue generation for studying violence against women and girls where real data is inaccessible.

- **[V-FiLLM: Verified Financial LLM Reasoning Benchmark](http://arxiv.org/abs/2608.11047v1)** — Larsen, Laurent, Rakhamsari et al. Generates executable financial reasoning benchmarks grounded in computation trees.

- **[MultiModal Code-Switching: Interleaving Visual Objects into Language](http://arxiv.org/abs/2608.11167v1)** — Xiang, Xing, Wu et al. Addresses referential ambiguity in MLLMs via object-level alignment.

- **[R4DSG: Relative 4D Scene Graph Memory for Long Egocentric Video QA](http://arxiv.org/abs/2608.11017v1)** — Ma, Mao, Li et al. Persistent object-identity memory for wearable AI assistants across long videos.

- **[myMediWhisper: Burmese Medical Speech Corpus and Whisper Fine-Tuning](http://arxiv.org/abs/2608.11036v1)** — Thu, Lin, Aung et al. 28-hour clinical Burmese ASR corpus — expanding Whisper into underrepresented clinical languages.

- **[On the Limitations of Cross-Lingual Consistency in Multilingual T2I](http://arxiv.org/abs/2608.11002v1)** — Zhang, Yan, Xie et al. Introduces LingT2I benchmark exposing cross-lingual generation gaps.

---

## 3. Research Trend Signal

Three directions stand out across today's submissions. First, **self-evolution without weight updates** is gaining traction — papers on test-time GUI grounding, skill compression, and self-distillation suggest a push toward agents that adapt at inference rather than retraining. Second, **multilingual and cross-lingual fragility** is a growing concern: safety transfer, tool-use policies, and text-to-image consistency all show degradation in low-resource and non-English settings, pointing to a systemic gap in current alignment practices. Third, **mechanistic and structural interpretability** is maturing beyond post-hoc explanation — sparse autoencoders, attention-path fragility, persona feature attribution, and behavioral mapping all contribute tools for proactive model control. Together, these threads suggest the field is pivoting from static evaluation toward adaptive, explainable, and globally robust systems.

---

## 4. Worth Deep Reading

1. **[Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1)** — A short, sharp paper that names a problem every practitioner building agents has silently observed. It reframes README bloat as an *information-theoretic* forgetting failure rather than a workflow issue, with immediate practical implications.

2. **[Long-Horizon AI Research for Grothendieck Constant](http://arxiv.org/abs/2608.11195v1)** — An unusually honest and detailed case study of AI use in genuine mathematical research. It documents where AI helped, where it failed, and how human-AI division of labor evolved — a rare and valuable blueprint for collaborative research workflows.

3. **[Test-Time Self-Evolving GUI Visual Grounding](http://arxiv.org/abs/2608.11191v1)** — Addresses a concrete deployment bottleneck (frozen GUI agents failing on new interfaces) with an elegant on-policy self-distillation approach. The reflection-guided design avoids common test-time RL pitfalls and is likely to inform practical agent deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*