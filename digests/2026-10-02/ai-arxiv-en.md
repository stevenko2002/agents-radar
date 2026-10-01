# ArXiv AI Research Digest 2026-10-02

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-01 22:15 UTC

---

## ArXiv AI Research Digest — 2026-10-02

### 1. Today’s Highlights

Today’s batch shows agent research shifting from prompt engineering toward **harness engineering**: instance-adaptive, self-evolving, and minimal harnesses are all studied as first-class optimization targets. Scaling-law work is becoming more pluralistic, covering looped Mixture-of-Experts, joint learning-rate/batch-size schedules, and the economic value of AI-generated web text. Safety and evaluation papers are increasingly adversarial, exposing cross-lingual unlearning loopholes, timing shortcuts in brain-to-text decoding, and unverified test-time scaling curves. Applications continue to mature in embodied interaction, scientific proof discovery, long-horizon memory, and multilingual translation.

---

### 2. Key Papers

#### 🧠 Large Language Models

- **Scaling Laws for Looped Mixture of Experts**  
  [http://arxiv.org/abs/2609.40316v1](http://arxiv.org/abs/2609.40316v1)  
  Yanbei Chen, Anirudh Goyal, Raghuraman Krishnamoorthi  
  Derives scaling laws that jointly model recurrence and MoE sparsity, clarifying how to trade depth for capacity under fixed active compute.

- **How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text**  
  [http://arxiv.org/abs/2609.40295v1](http://arxiv.org/abs/2609.40295v1)  
  Jenna Russell et al.  
  Measures the rising share of AI-generated tokens in filtered web pretraining data and models their value, with implications for data curation and model collapse.

- **Linguistic Loopholes in LLM Unlearning: From a 174-Language Benchmark to Coverage-Aware Unlearning**  
  [http://arxiv.org/abs/2609.40286v1](http://arxiv.org/abs/2609.40286v1)  
  Tyler Skow et al.  
  Introduces a 174-language benchmark showing that unlearning a fact in one language often leaves it recoverable in others, then proposes coverage-aware unlearning.

- **From Spectra to Joint Schedules in LLM Pre-training: 3+3(+2) Scaling-Law Regimes**  
  [http://arxiv.org/abs/2609.40148v1](http://arxiv.org/abs/2609.40148v1)  
  Yichen Wang et al.  
  Shows that learning-rate and batch-size schedules alter observed power-law regimes, refining how scaling laws should be fit and compared.

#### 🤖 Agents & Reasoning

- **Cogentic: Multi-Agent Orchestration for Automated Proof Discovery**  
  [http://arxiv.org/abs/2609.40324v1](http://arxiv.org/abs/2609.40324v1)  
  Yang Cai et al.  
  A multi-agent harness for open proof problems that coordinates competing conjectures and tool use beyond single-shot generation.

- **Turbo Harness: Instance-Adaptive Harness Optimization**  
  [http://arxiv.org/abs/2609.40330v1](http://arxiv.org/abs/2609.40330v1)  
  Tunyu Zhang et al.  
  Optimizes harnesses per task instance rather than applying one global harness uniformly, addressing variance across heterogeneous agent tasks.

- **How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?**  
  [http://arxiv.org/abs/2609.40303v1](http://arxiv.org/abs/2609.40303v1)  
  Kirill Brilliantov et al.  
  Systematically tests whether elaborate scaffolding is necessary for autonomous ML engineering, informing minimal effective harness design.

- **PivotOPD: Learning to Recover from Pivotal Mistakes in Multi-Turn Agents**  
  [http://arxiv.org/abs/2609.40285v1](http://arxiv.org/abs/2609.40285v1)  
  Yinghui He et al.  
  Targets error compounding in on-policy distillation by teaching agents to recover from pivotal multi-turn mistakes.

- **PhantomEnvironments: Training LLM Agents in Fictional Worlds**  
  [http://arxiv.org/abs/2609.40221v1](http://arxiv.org/abs/2609.40221v1)  
  Anmol Kabra et al.  
  Uses fictional worlds to generate scalable, verifiable RL environments for long-horizon agent training without costly human curation.

#### 🔧 Methods & Frameworks

- **Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text**  
  [http://arxiv.org/abs/2609.40359v1](http://arxiv.org/abs/2609.40359v1)  
  Dulhan Jayalath, Oiwi Parker Jones  
  Shows reported brain-to-text gains can be reproduced without brain data due to timing shortcuts, then removes them to improve genuine decoding.

- **Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves**  
  [http://arxiv.org/abs/2609.40190v1](http://arxiv.org/abs/2609.40190v1)  
  Sohail et al.  
  Provides certification for test-time scaling curves so accuracy-vs-k budgets can be trusted, not just plotted.

- **Provably Tractable NFA-Constrained Language Generation via HMMs**  
  [http://arxiv.org/abs/2609.40185v1](http://arxiv.org/abs/2609.40185v1)  
  Jialiang Sun, Kuldeep Meel  
  Reduces NFA-constrained generation to tractable HMM inference, avoiding distribution distortion or efficiency loss.

#### 📊 Applications

- **Index-Translate: A Multilingual Translation Model Family — Text, Speech, Controlled Dubbing, and Long-Document Translation**  
  [http://arxiv.org/abs/2609.40181v1](http://arxiv.org/abs/2609.40181v1)  
  Tianjiao Li et al.  
  A unified 2B/9B model family covering general translation, instruction following, speech translation, controlled dubbing, and long-document translation.

- **MemLife: Curating and Reasoning over Long-Term Egocentric Video Memories**  
  [http://arxiv.org/abs/2609.40195v1](http://arxiv.org/abs/2609.40195v1)  
  Guangzhi Xiong et al.  
  Builds a memory system for months or years of egocentric video, avoiding prohibitive reprocessing of raw clips for every query.

- **Tactile Curiosity Drives Robot Interaction**  
  [http://arxiv.org/abs/2609.40134v1](http://arxiv.org/abs/2609.40134v1)  
  Klemens Iten et al.  
  Uses tactile curiosity to focus RL exploration on contact-rich manipulation, improving sample efficiency over random action sampling.

---

### 3. Research Trend Signal

The strongest signal is the **industrialization of agent scaffolding**. Several papers treat the harness—tool use, memory, orchestration, and recovery—as the main object of optimization, whether instance-adaptive, self-evolving, or minimal. This shifts agent research from prompt engineering toward systems engineering with measurable harness budgets. A second trend is **scaling-law pluralism**: recurrence, MoE sparsity, joint LR/batch schedules, and AI-generated web data are all being folded into predictive laws, suggesting that “scaling” is no longer a single curve but a family conditioned on architecture, schedule, and data provenance. Third, **evaluation is becoming adversarial and certified**: timing shortcuts in brain-to-text, cross-lingual unlearning loopholes, and test-time scaling certification all show that reported gains need stress tests. Finally, applications continue expanding into embodied interaction, scientific discovery, long-horizon memory, and multilingual translation, with efficiency and trust as recurring constraints.

---

### 4. Worth Deep Reading

1. **Cogentic: Multi-Agent Orchestration for Automated Proof Discovery**  
   [http://arxiv.org/abs/2609.40324v1](http://arxiv.org/abs/2609.40324v1)  
   A concrete blueprint for multi-agent scientific reasoning, combining orchestration, competing hypotheses, and tool use on open problems.

2. **How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?**  
   [http://arxiv.org/abs/2609.40303v1](http://arxiv.org/abs/2609.40303v1)  
   Directly interrogates whether complex agent scaffolding is necessary, offering practical guidance for building cost-effective autonomous ML agents.

3. **Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text**  
   [http://arxiv.org/abs/2609.40359v1](http://arxiv.org/abs/2609.40359v1)  
   An important methodological caution: it shows how benchmark leakage can inflate brain-decoding results and demonstrates a cleaner evaluation path.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*