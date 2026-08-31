# Hugging Face Trending Models Digest 2026-09-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-31 22:15 UTC

---

**Hugging Face Trending Models Digest – 1 Sept 2026**

---

### 1️⃣ Today’s Highlights  

The week’s top‑liked model is **Qwen /Qwen3.8‑27B** (13 k likes), a 27 B multimodal LLM that has cemented Qwen’s dominance in the open‑weight “large‑vision‑language” space.  Close behind, **MiniMax‑AI /​MiniMax‑H3** broke the 5 M‑download barrier as the first open‑weight image‑to‑video diffusion model to couple high‑fidelity frame synthesis with a lightweight transformer backbone.  A wave of community‑driven GGUF and FP8 quantizations (e.g., unsloth, orcarouter, HauhauCS) shows a maturing ecosystem around efficient inference on edge devices, while Chinese labs (zai‑org / GLM‑5.3‑Flash, deepseek‑ai / DeepSeek‑V4‑Flash‑0731) keep pushing the frontier of flash‑attention vision‑language models.

---

### 2️⃣ Trending Models  

#### 🧠 Language Models (LLMs & Chat)  

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai | 3 841 / 4 561 861 | State‑of‑the‑art 34 B flash‑attention LLM, praised for speed‑to‑quality on CPUs/GPUs. |
| **[Ornith‑1.5‑35B‑A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai | 512 / 172 695 | 35 B MoE that blends Qwen‑3.5‑style routing with strong multilingual instruction tuning. |
| **[GLM‑5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1 410 / 66 195 | MOE + DSA architecture, solid performance on Chinese‑centric benchmarks; often paired with Flash variant. |
| **[Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13 466 / 4 720 763 | Flagship 27 B multimodal LLM; high likes reflect community adoption for both text and vision tasks. |
| **[pipecat‑ai/phonellm‑alpha‑1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 173 / 4 721 | Small (≈700 M) text‑generation model tuned for low‑latency voice assistants. |

#### 🎨 Multimodal & Generation  

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4 704 / 5 362 365 | First open‑weight image‑to‑video diffusion model with 4‑step preview; sets new baseline for rapid video synthesis. |
| **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2 359 / 1 182 585 | High‑resolution image‑to‑video diffusion, widely used for creative content generation. |
| **[Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4 511 / 158 598 | Flash‑attention vision‑language model that excels in “image + prompt → text” tasks; a go‑to for cheap multimodal inference. |
| **[FastVideo‑FastH3‑4‑step‑Preview‑v1‑VSA‑DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 214 / 0 | Data‑free finetune that demonstrates how to achieve 4‑step video preview without additional training data. |
| **[Breeze‑Blue/Breeze‑TTS‑2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 251 / 2 236 | High‑fidelity text‑to‑speech model with multilingual voice styles; gaining traction in voice‑assistant prototyping. |

#### 🔧 Specialized Models  

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[Thomson‑1.0‑Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 171 / 1 045 | Compact Qwen‑3.5‑style multimodal model targeting finance‑specific document understanding. |
| **[GLM‑5.3‑Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1 804 / 379 271 | Flash‑attention variant of GLM‑5.3, optimized for low‑memory inference on consumer GPUs. |
| **[HauhauCS /Qwen3.8‑27B‑Uncensored‑Aggressive‑MTP‑GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 811 / 1 202 914 | Uncensored GGUF version exposing the full Qwen‑3.8 vocabulary for research‑level probing. |
| **[OBLITERATUS /Qwen3.8‑27B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 973 / 759 644 | “Abliterated” checkpoint stripped of safety filters; popular among benchmarking suites that need raw logits. |

#### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[unsloth/Qwen3.8‑Flash‑Next‑GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 632 / 373 029 | GGUF quantization of Qwen‑Flash‑Next (FP8‑style) for CPU‑only deployment, driving the “run‑anywhere” movement. |
| **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3 281 / 9 059 937 | The most‑downloaded GGUF of a 27 B LLM; demonstrates that GGUF has overtaken traditional safetensors for edge inference. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 600 / 246 445 | Community‑driven uncensored GGUF, widely used in academic research due to permissive licensing. |
| **[orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 147 / 51 125 | Small but rapidly climbing; reflects a niche demand for uncensored flash‑vision models in evaluation pipelines. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1 326 / 307 496 | FP8‑precision variant that balances quality and memory for on‑device deployment; highlighted in recent benchmark blogposts. |

---

### 3️⃣ Ecosystem Signal (≈150 words)

The **multimodal Qwen family** (Qwen‑3.8‑Flash‑Next, Qwen‑3.8‑27B, and their uncensored/quantized derivatives) dominates both raw likes and download counts, underscoring a community shift toward large vision‑language models that can run on a single GPU thanks to flash‑attention and aggressive quantization (GGUF/FP8).  Parallelly, **open‑weight video diffusion** is emerging, led by MiniMax‑H3 and LTX‑2.5, indicating that the “image‑to‑video” niche is no longer proprietary.  Chinese research labs (zai‑org, deepseek‑ai) continue to release flash‑optimized variants that rapidly climb the leader board, suggesting an arms race on efficient attention kernels.  Quantization activity is especially vibrant: GGUF uploads exceed 9 M downloads, making it the de‑facto format for edge deployment, while FP8 checkpoints gain traction for mixed‑precision inference on newer Apple Silicon and NVIDIA Ada GPUs.  Finally, uncensored/abliterated checkpoints proliferate, reflecting a demand for raw model outputs in benchmarking and alignment research, even as most base models retain safety‑filtered releases.

---

### 4️⃣ Worth Exploring  

1. **[MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – the first open‑weight image‑to‑video diffusion model with a 4‑step preview; ideal for developers building real‑time creative tools or studying video diffusion dynamics.  
2. **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – a 27 B multimodal LLM quantized to GGUF, delivering near‑full‑precision quality on a single RTX 4090 or Apple M3 Max, perfect for rapid prototyping of vision‑language assistants.  
3. **[DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** – a 34 B flash‑attention LLM with strong multilingual instruction tuning, offering a high‑quality alternative to the Qwen lineup for non‑English heavy workloads.  

These three models together cover the most active fronts of the current HF ecosystem: video generation, efficient multimodal LLM inference, and next‑generation flash‑attention language modeling.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*