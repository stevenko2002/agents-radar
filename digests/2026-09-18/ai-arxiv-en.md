# ArXiv AI Research Digest 2026-09-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-17 22:16 UTC

---

# ArXiv AI Research Digest — 2026-09-18

## 1. Today's Highlights

Today's submissions show a strong convergence around **agentic AI safety and governance**: papers on reward-hacking detection via internal representations, compositional policy violations in workflows, privacy exposure in agent sessions, and multi-agent arbitration in live O-RAN systems signal that the field is moving from "can agents act?" to "can we trust and monitor them at scale?" On the efficiency front, mixture-of-experts research (higher-order pruning, infinite-parameter adaptation, co-evolving agent routing) and serving-system innovations (tool-call-aware KV cache management) target the mounting costs of frontier-scale deployment. A notable theoretical strand connects mechanistic interpretability (OCR heads, sparse autoencoders for readout gaps) and scaling theory (architectural modifications of scaling exponents, statistical mechanics accounts of double descent). Finally, embodied AI is maturing toward practical contact-rich manipulation with force-aware video generation and "muscle memory" inference caching.

## 2. Key Papers

### 🧠 Large Language Models

- **[Objective vs. Search: Decomposing What Makes a Good Tokeniser](http://arxiv.org/abs/2609.19145v1)** — Yavuz, Meister, Pimentel
  Disentangles the optimisation objective from the search procedure in BPE and UnigramLM, clarifying which axis actually drives tokenizer quality — foundational for understanding a rarely examined component of LLM pipelines.

- **[Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations](http://arxiv.org/abs/2609.19101v1)** — Bergen, Bhalla, Lee et al.
  Shows reward hacking leaves detectable signatures in frontier LLM representations, enabling monitoring as models scale — a significant safety-relevant capability.

- **[Higher-order pruning of experts in mixture-of-experts language models](http://arxiv.org/abs/2609.18916v1)** — Tseng, Kaul, Zancato et al.
  Moves beyond per-expert independent pruning by modeling co-activation structure, addressing MoE's key memory bottleneck.

- **[Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data](http://arxiv.org/abs/2609.18878v1)** — Marchi, Silvestre, Gharesifard et al.
  Provides geometric analysis of degenerative feedback loops in recursive synthetic-data training — timely as human data is exhausted.

- **[How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents](http://arxiv.org/abs/2609.19107v1)** — Chen, Vegesna, Dahal et al.
  Demonstrates architectural interventions can modify scaling exponents themselves, suggesting exponential gains beyond conventional scaling-law expectations.

- **[A Zeroth-Order Paradigm for LLM Preference Alignment](http://arxiv.org/abs/2609.19144v1)** — Chen, Chen, Yin et al.
  Proposes extracting preference information without likelihood margins, addressing likelihood displacement in direct alignment methods.

### 🤖 Agents & Reasoning

- **[Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1)** — Kurady, Grandhi, Gupta et al.
  Identifies a critical gap: step-scoped governance classifiers miss violations that emerge from composition of individually compliant steps in regulated settings.

- **[Taming the Agentic RAN: Stability-Guaranteed Arbitration of Autonomous AI Agents in O-RAN](http://arxiv.org/abs/2609.18857v1)** — Hashemi Natanzi, Tang
  Demonstrates on a live O-RAN system that independently correct agents destabilize shared resources, proposing arbitration with stability guarantees — a rare real-world multi-agent safety result.

- **[Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress, and the Serving System Should Read It](http://arxiv.org/abs/2609.18849v1)** — Liu, Zhang, Li et al.
  Makes the serving system tool-call-aware for KV cache decisions rather than guessing tool duration — a practical systems contribution for agentic workloads.

- **[Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments](http://arxiv.org/abs/2609.19128v1)** — Meneses dos Santos, Oliveira
  Extends SwiftSage with modular memory and self-reflection, targeting brittleness in long-horizon interactive environments.

- **[Flag Game: A Toy Model for Mechanistic Swarm Interpretability](http://arxiv.org/abs/2609.19124v1)** — Pavlova, Tanaka
  Introduces mechanistic interpretability for multi-agent belief formation and spread — an emerging area for collective alignment.

### 🔧 Methods & Frameworks

- **[Double descent is the principle of least action](http://arxiv.org/abs/2609.19076v1)** — Sha
  Derives double descent from statistical mechanics and least-action principles on the SGD trajectory — an elegant unifying theoretical account.

- **[Fast Learning Rates for Physics-Informed Kernel Methods](http://arxiv.org/abs/2609.18901v1)** — Brogat-Motte, Bona-Pellissier, Meanti et al.
  Establishes strong learning-rate guarantees for learning from both values and differential/constraint information — a rigorous contribution to physics-informed ML theory.

- **[Exponential Hardness of Off-Policy Evaluation under History-Dependent Logging](http://arxiv.org/abs/2609.19135v1)** — Jajoo
  Proves exponential lower bounds for OPE in POMDPs with history-dependent loggers, delineating fundamental limits of policy evaluation.

- **[Beyond Outcomes: Dual-View Relational Learning for Efficient Agent Benchmarking](http://arxiv.org/abs/2609.18909v1)** — Guo, Wu, Deng et al.
  Compresses expensive agent benchmarks via relational learning beyond score-distribution redundancy — addresses a real evaluation-cost crisis.

### 📊 Applications

- **[Dreaming the Sound of Contact: Leveraging Video and Audio Generation for Zero-Shot Force-Aware Manipulation](http://arxiv.org/abs/2609.19137v1)** — Ji, Li, Suh et al.
  Uses audio generation to infuse force information into trajectories learned from generated videos, enabling zero-shot contact-rich robot manipulation.

- **[Decodable but Misrouted: Sparse Features Uncover a Readout Gap in VLMs for Harmful Meme Detection](http://arxiv.org/abs/2609.18860v1)** — Koushik, Kanojia, Treharne
  Distinguishes "missing evidence" from "failure to route evidence" in VLM safety failures using sparse autoencoders and causal interventions — a novel safety diagnosis taxonomy.

- **[ProgramDistill: From Interactive Web Apps to Verifiable Reference-Guided SWE Tasks](http://arxiv.org/abs/2609.18805v1)** — Kim, Kim, Kim et al.
  Benchmarks coding agents on inferring behavior from working software — closer to real web development than issue-based evaluation.

## 3. Research Trend Signal

Three trends stand out. **First, agentic governance is formalizing**: rather than new capabilities, today's papers target monitoring (reward hacking signatures, privacy exposure displacement), compositional safety failures, and arbitration mechanisms for multi-agent systems in production infrastructure — indicating agents are being deployed and the bottleneck is now assurance. **Second, efficiency at frontier scale is diversifying**: work spans expert pruning with co-activation modeling, dynamic weight generation from live data, cache-aware serving for tool-using agents, and routing that co-evolves with fine-tuned agents — efficiency is becoming an architecture-level and systems-level concern simultaneously. **Third, interpretability is becoming causal and diagnostic**: rather than descriptive probing, papers identify causally necessary attention heads, distinguish representational from readout failures, and detect misbehavior from internal states — interpretability is being positioned as an operational safety tool. Watch for convergence of these threads into automated agent-monitoring pipelines.

## 4. Worth Deep Reading

1. **[Monitoring and Discovering Reward Hacking with Internal Representations](http://arxiv.org/abs/2609.19101v1)** (Bergen et al.) — Reward hacking is the flagship alignment failure at scale; if internal representations reliably flag it, this changes evaluation practice. The empirical grounding in frontier open-source LLMs makes the findings immediately actionable.

2. **[Compositional Policy Violations: When Step-Level Compliance Fails in Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1)** (Kurady et al.) — Identifies a structural blind spot in nearly all current agent governance (step-scoped classifiers/rails), with direct implications for deploying agents in regulated domains. Likely to shape how agentic safety frameworks are designed.

3. **[How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents](http://arxiv.org/abs/2609.19107v1)** (Chen et al.) — If architecture can modify scaling exponents rather than just constants, this challenges a core assumption of compute-optimization strategy and is worth scrutinizing closely for robustness of the claimed exponential improvements.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*