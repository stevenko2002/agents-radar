# ArXiv AI Research Digest 2026-09-16

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-15 22:15 UTC

---

**Today's Highlights**  
The latest arXiv batch reveals a strong focus on making large language models safer and more controllable, with work on evading chain‑of‑thought monitoring and on aligning agents through explicit skill routing. Parallel to safety, researchers are scaling agentic systems—many‑agent harnesses, history‑guided longitudinal predictors, and evolutionary multi‑LLM frameworks—to tackle long‑horizon scientific and real‑world forecasting tasks. Efficiency gains are also emerging via one‑step flow and transport‑based formulations that compress multi‑step reasoning into a single forward pass, while domain‑specific benchmarks (mental‑health, Alzheimer’s, wildlife) are grounding AI progress in measurable, high‑stakes applications.

---

### Key Papers  

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)  
- **Corrupt Plans, Clean Traces: Evading Chain‑of‑Thought Monitoring with Plan Injection** – Keertana Chidambaram et al.  
  *Shows how benign‑looking reasoning can hide harmful plans from CoT monitors, exposing a critical gap in current LLM safety‑checking pipelines.*  
  [http://arxiv.org/abs/2609.15989v1](http://arxiv.org/abs/2609.15989v1)  

- **Bellman Policy Optimization** – Zhuoqing Song et al.  
  *Introduces a critic‑free RL algorithm derived from Policy Mirror Descent that directly optimizes autoregressive LLMs with terminal rewards, improving reasoning without extra value networks.*  
  [http://arxiv.org/abs/2609.15987v1](http://arxiv.org/abs/2609.15987v1)  

- **The Router Within: Eliciting Native Skill Routing from a Frozen LLM** – Ruishuo Chen et al.  
  *Demonstrates that a frozen LLM can internally select and invoke skills without external metadata, reducing attention overhead and enabling scalable skill libraries.*  
  [http://arxiv.org/abs/2609.15982v1](http://arxiv.org/abs/2609.15982v1)  

#### 🤖 Agents & Reasoning (planning, tool use, multi‑agent, chain‑of‑thought)  
- **Stellar Colosseum: A Many‑Agent Harness for Long‑Horizon Research in Mathematics and Theoretical Computer Science** – Honghao Lin et al.  
  *Provides a model‑agnostic framework that allocates inference across many LLM agents to tackle multi‑step, uncertain research problems, showing improved proof‑search reliability.*  
  [http://arxiv.org/abs/2609.15983v1](http://arxiv.org/abs/2609.15983v1)  

- **LongAgent: History‑Guided Agentic Search for Longitudinal Outcome Prediction** – Siyao Wang et al.  
  *Uses a history‑aware agent to navigate heterogeneous longitudinal medical data, achieving superior future‑outcome prediction by explicitly modeling temporal gaps and variable sparsity.*  
  [http://arxiv.org/abs/2609.15859v1](http://arxiv.org/abs/2609.15859v1)  

- **HypoEvolve: Genetic Algorithms Enable Multi‑Agent LLMs to Discover Scientific Hypotheses** – Jieyuan Liu et al.  
  *Combines evolutionary search with collaborative LLM agents that critique, revise, and synthesize hypotheses, yielding novel scientific proposals across chemistry and materials.*  
  [http://arxiv.org/abs/2609.15938v1](http://arxiv.org/abs/2609.15938v1)  

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)  
- **Discrete Beckmann Transport Models for One‑Step Language Modeling and Reasoning** – Sophia Tang et al.  
  *Replaces autoregressive generation with a single‑step discrete transport process, enabling fast sampling while preserving quality comparable to multi‑step diffusion models.*  
  [http://arxiv.org/abs/2609.15903v1](http://arxiv.org/abs/2609.15903v1)  

- **Per‑Matrix Optimality Is Not Enough: Three‑Level Optimization for Low‑Rank LLM Compression** – Huicheng Zhang et al.  
  *Shows that naïve per‑matrix SVD truncation accumulates error; proposes a hierarchical three‑level optimization that jointly compresses weight blocks, yielding higher compression ratios with minimal accuracy loss.*  
  [http://arxiv.org/abs/2609.15838v1](http://arxiv.org/abs/2609.15838v1)  

- **Sharp Rates and a One‑Line Correction for Spectral Representation Learning** – Dier Tang et al.  
  *Derives tight generalization bounds for self‑supervised encoders and provides a simple post‑hoc correction that drastically improves downstream task performance without retraining.*  
  [http://arxiv.org/abs/2609.15825v1](http://arxiv.org/abs/2609.15825v1)  

#### 📊 Applications (domain‑specific, multimodal, code generation)  
- **SlipSense: Multimodal Tactile Learning for Low‑Latency and Generalized Slip Detection** – Tong Jian et al.  
  *Fuses vision and high‑resolution tactile sensing to detect slip in <10 ms across robot platforms, advancing dexterous manipulation in unstructured environments.*  
  [http://arxiv.org/abs/2609.15910v1](http://arxiv.org/abs/2609.15910v1)  

- **Anatomical Grounding and Leakage‑Aware Multimodal Contrastive Learning for Alzheimer's Disease Classification from Structural MRI** – Paul‑Gabriel Nicolae et al.  
  *Forces the model to focus on anatomically relevant regions and prevents label leakage, achieving state‑of‑the‑art AD staging while improving interpretability.*  
  [http://arxiv.org/abs/2609.15888v1](http://arxiv.org/abs/2609.15888v1)  

- **K‑Bench: a clinically calibrated benchmark for evaluating large language models in high‑risk mental health conversations** – Laura M. Vowels et al.  
  *Provides a psychiatrist‑curated set of 125 LLM configurations tested on realistic, high‑risk dialogue scenarios, offering a rigorous safety‑and‑efficacy measure for mental‑health AI.*  
  [http://arxiv.org/abs/2609.15855v1](http://arxiv.org/abs/2609.15855v1)  

---

### Research Trend Signal  
Across today’s submissions, three interconnected trends are crystallizing. First, **safety and alignment are shifting from static output checks to dynamic process monitoring**, as illustrated by work on plan injection to bypass chain‑of‑thought audits and on internal skill routing that reduces reliance on external metadata. Second, **agentic systems are scaling toward many‑agent, long‑horizon problem solving**, with harnesses like Stellar Colosseum and evolutionary frameworks such as HypoEvolve enabling LLMs to collaborate, critique, and sustain reasoning over extended scientific or temporal horizons. Third, **efficiency gains are being pursued through one‑step formulations**—discrete Beckmann transport, flow‑based policies, and spectral corrections—that collapse multi‑step sampling or optimization into a single forward pass, making LLMs and related models viable for low‑latency, resource‑constrained settings. Complementing these methodological advances, **domain‑specific benchmarks (K‑Bench, MoveBench, Alzheimer’s MRI) are grounding progress in real‑world impact**, ensuring that innovations in safety, agency, and efficiency translate into reliable, high‑stakes applications.

---

### Worth Deep Reading  

1. **Corrupt Plans, Clean Traces: Evading Chain‑of‑Thought Monitoring with Plan Injection** – This paper uncovers a subtle failure mode of today’s primary LLM safety mechanism. Understanding the attack surface is essential before deploying CoT‑based monitors in production systems.  

2. **Stellar Colosseum: A Many‑Agent Harness for Long‑Horizon Research in Mathematics and Theoretical Computer Science** – Offers a reusable, model‑agnostic infrastructure for scaling LLM agents to tackle open‑ended scientific problems; reading it provides insight into the next generation of AI‑driven discovery pipelines.  

3. **Discrete Beckmann Transport Models for One‑Step Language Modeling and Reasoning** – Presents a compelling alternative to autoregressive generation that could dramatically reduce inference latency while preserving quality; valuable for anyone seeking efficient LLM serving or real‑time interaction.  

*All links are preserved as requested.*

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*