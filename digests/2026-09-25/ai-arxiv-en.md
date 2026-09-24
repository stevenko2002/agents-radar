# ArXiv AI Research Digest 2026-09-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-24 22:16 UTC

---

# ArXiv AI Research Digest — 2026-09-25

## 1. Today's Highlights
Today's submissions show a strong push toward memory-centric and state-tracking architectures, with new attention, recurrent, and Mamba-style designs aimed at retaining and transforming information more effectively. Agent safety is another major thread: papers examine shutdown sabotage in multi-agent systems, proactive trajectory assessment, and runtime reasoning benchmarks. World models are being rethought for both LLM agents and robotics, emphasizing editable, motion-preserving, and memory-augmented representations. Evaluation is also maturing, from AI-versus-human tutoring outcomes to repository-level dynamic code reasoning. Efficiency remains central, with microscaling quantization, hyperbolic deep learning libraries, and deployment-oriented benchmarks.

## 2. Key Papers

### 🧠 Large Language Models
- **[Memory Attention](http://arxiv.org/abs/2609.28399v1)** — Jiale Kang. Investigates token-indexed memory as a replacement for dedicated value projections, potentially reducing attention parameters while preserving contextual reuse.
- **[Log-Depth Recurrent Language Modeling](http://arxiv.org/abs/2609.28212v1)** — Wang et al. Extends balanced-tree recursive operators to language modeling, aiming for log-depth recurrence with parallel execution.
- **[Non-Commutative State Tracking with Input-Dependent Low-Rank Updates in Mamba-3](http://arxiv.org/abs/2609.28273v1)** — Fujii & Yamakita. Adds input-dependent low-rank reflection to Mamba-3 for noncommutative state tracking, where operation order matters.
- **[When and Where to Trust the Teacher: Unifying On-Policy Distillation and GRPO through Entropy-Calibrated Credit Assignment](http://arxiv.org/abs/2609.28385v1)** — Zhang et al. Proposes entropy-calibrated credit assignment to combine dense teacher feedback with verifiable-reward reinforcement learning.
- **[Towards Efficient Reasoning: Learning Causal Shortcuts for Diffusion Language Models](http://arxiv.org/abs/2609.28272v1)** — Jin et al. Addresses the large exploration space of diffusion language models by learning causal shortcuts for more efficient reasoning.

### 🤖 Agents & Reasoning
- **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — Knecht et al. Tests whether AI agents take actions to avoid human shutdown, a critical safety question for autonomous multi-agent systems.
- **[Agent-Editing World Model: Rethinking World Modeling for LLM Agents](http://arxiv.org/abs/2609.28416v1)** — Sun et al. Proposes an editing-based world model for LLM agents instead of predicting high-entropy observations.
- **[PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety](http://arxiv.org/abs/2609.28197v1)** — Sun et al. Introduces a benchmark for proactive safety assessment of multi-step agent workflows.
- **[Can LLMs Reason About Runtime Behavior? A Repository-Level Dynamic Benchmark](http://arxiv.org/abs/2609.28449v1)** — Taherkhani et al. Builds a repository-level benchmark to evaluate LLMs' ability to reason about code execution rather than static code.

### 🔧 Methods & Frameworks
- **[StudentBench: AI and human tutoring yield equivalent GRE learning gains](http://arxiv.org/abs/2609.28470v1)** — Northcutt et al. Presents a public evaluation suite and platform showing AI tutoring can match human tutoring on GRE learning gains.
- **[hyperbolix: Hyperbolic Deep Learning in JAX](http://arxiv.org/abs/2609.28248v1)** — Klein et al. Releases a general-purpose JAX library for hyperbolic deep learning with six manifolds and a common interface.
- **[MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference](http://arxiv.org/abs/2609.28358v1)** — Facq et al. Reshapes convolution tensors to make microscaling quantization efficient in convolutional layers.

### 📊 Applications
- **[Generalizable Robotic Insertion with World Models](http://arxiv.org/abs/2609.28258v1)** — Hansen et al. Uses world models to generalize robotic insertion across diverse parts without task-specific policies.
- **[MemBodied: Recurrent Associative Memory for Vision-Language-Action Models](http://arxiv.org/abs/2609.28256v1)** — Pala et al. Adds recurrent associative memory to VLA models for history-dependent manipulation.
- **[Cross-Scale Transfer Learning for Depression Severity Prediction: From PHQ-8 to HAMD-17 Across Languages and Clinical Paradigms](http://arxiv.org/abs/2609.28430v1)** — Feng et al. Proposes sequential LoRA transfer for depression-severity prediction under clinical data scarcity.

## 3. Research Trend Signal
Today's submissions reveal four converging trends. First, memory and state tracking are moving to the center of language-model architecture: token-indexed memory, log-depth recurrence, and noncommutative Mamba-3 updates all ask how models store and transform information over time. Second, agent safety is shifting from single-turn refusal to multi-step, multi-agent failure modes, with shutdown sabotage, sequential trajectory benchmarks, and runtime reasoning evaluation. Third, world models are being repurposed for both LLM agents and robotics, emphasizing editable, motion-preserving, and memory-augmented representations. Fourth, evaluation and efficiency are becoming more deployment-oriented: StudentBench compares AI and human tutoring, while MicroQonv and hyperbolic JAX libraries target practical training and inference. Across domains, foundation models are being stress-tested for bias, transfer, and reliability, suggesting a maturing field focused less on raw capability and more on robustness, safety, and real-world utility.

## 4. Worth Deep Reading
- **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — This paper directly addresses a core AI safety failure mode: whether agents resist human shutdown. Its multi-agent setting and empirical tests make it important for anyone working on alignment, oversight, or autonomous systems.
- **[Agent-Editing World Model: Rethinking World Modeling for LLM Agents](http://arxiv.org/abs/2609.28416v1)** — It challenges the dominant observation-prediction paradigm for LLM agents and proposes a more structured editing-based alternative. This could influence how future agent world models are designed and evaluated.
- **[Memory Attention](http://arxiv.org/abs/2609.28399v1)** — A concise architectural study of whether token-indexed memory can replace dedicated value projections. If the idea generalizes, it could simplify attention layers and improve parameter efficiency in large language models.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*