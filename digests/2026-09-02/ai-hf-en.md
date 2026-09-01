# Hugging Face Trending Models Digest 2026-09-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-01 22:16 UTC

---

## 📊 Hugging Face Trending Models Digest – 2024‑09‑02  

### 1. Today’s Highlights  
The week is dominated by **multimodal flash‑optimized LLMs**—Qwen 3.8 and GLM 5.3 families lead the pack, each releasing a “Flash‑Next” variant that couples FP8‑style precision with image‑text capabilities.  Quantized GGUF releases from the community (Unslo​th, OrcaRouter, OBLITERATUS) are gathering massive download counts, signalling a strong demand for on‑device inference.  Video‑generation continues its rise, with MiniMax‑H3 (≈5 M downloads) and Lightricks LTX‑2.5 topping the image‑to‑video leaderboard, while niche domains such as time‑series (Google TimesFM) and speech synthesis (Breeze‑TTS‑2) re‑appear as emerging specialty tracks.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat & instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,576 · 4.96 M | Flagship 27 B multimodal chat model; strong community adoption and “Flash‑Next” follow‑up boosts its visibility. |
| **[zai‑org/GLM‑5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1,466 · 94 k | MoE‑based 5.3 B text‑generation model, praised for high‑quality instruction following. |
| **[zai‑org/GLM‑5.3‑Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1,875 · 441 k | Flash‑optimized image‑text‑to‑text variant, delivering near‑real‑time multimodal inference. |
| **[OBLITERATUS/Qwen3.8‑27B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 995 · 805 k | Aggressive “abliterated” fine‑tune that removes safety layers; popular among research‑focused users. |
| **[JonathanColetti/Qwen3.8‑27B‑Uncensored‑GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 886 · 2.14 M | GGUF‑quantized, uncensored version widely used on llama.cpp‑based local deployments. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,261 · 121 k | Apple‑silicon‑first (MLX) build, driving the macOS inference surge. |
| **[pipecat‑ai/phonellm‑alpha‑1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 185 · 6.8 k | Nemotron‑style LLM tuned for low‑latency speech‑agent pipelines. |

#### 🎨 Multimodal & Generation  

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,630 · 207 k | First Qwen “Flash‑Next” image‑text‑to‑text model; benefits from FP8‑style training and strong community demos. |
| **[deepseek‑ai/DeepSeek‑V4‑Flash‑Vision‑Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek‑ai | 445 · 17.9 k | Vision‑augmented V4 variant, showcasing the next step in open‑source vision‑language models. |
| **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,453 · 1.23 M | High‑fidelity text‑to‑video diffusion model; one of the few video generators crossing the 1 M download threshold. |
| **[MiniMaxAI/MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,747 · 5.53 M | Image‑text‑to‑video diffusion system, leading the open‑source video‑generation race. |
| **[FastVideo/FastVideo‑FastH3‑4‑step‑Preview‑v1‑VSA‑DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 233 · 0 | Experimental low‑step video preview model attracting early‑adopter interest. |
| **[unsloth/Qwen3.8‑Flash‑Next‑GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 666 · 431 k | Quantized GGUF pack for portable inference on CPUs/GPUs, driving community downloads. |
| **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,330 · 9.35 M | The most downloaded GGUF model on HF; serves as the de‑facto baseline for local LLM use. |

#### 🔧 Specialized Models  

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[BreezeBlue/Breeze‑TTS‑2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 304 · 3.1 k | English high‑quality TTS with transformer backbone, gaining attention in voice‑assistant prototypes. |
| **[google/timesfm‑3.0‑pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 205 · 0 | State‑of‑the‑art time‑series forecasting model; early adopter interest despite zero downloads yet. |
| **[thomsonreuters/Thomson‑1.0‑Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 180 · 1.1 k | Small‑scale Qwen‑3.5‑MoE tuned for finance‑focused Q&A, showcasing domain‑specific fine‑tunes. |

#### 📦 Fine‑tunes & Quantizations (Community GGUF/AWQ/FP8)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 167 · 64 k | GGUF “uncensored” build for hobbyist use on consumer hardware. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 630 · 254 k | Large‑scale uncensored GGUF, fueling the “no‑filter” niche. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,347 · 316 k | FP8‑precision variant, highlighting the push for mixed‑precision speed‑ups. |
| **[unsloth/GLM‑5.3‑Flash‑GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 325 · 63.7 k | GGUF quantization of GLM‑5.3‑Flash, making it accessible on low‑end GPUs. |
| **[ISTA‑DASLab/Qwen3.8‑27B‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA‑DASLab | 118 · 56 k | Demonstrates a mixed‑precision (GSQ) quantization pipeline, drawing interest from research‑oriented developers. |
| **[huihui‑ai/Huihui‑Qwen3.8‑27B‑abliterated‑GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui‑ai | 487 · 1.87 M | Abridged GGUF version of the “abliterated” Qwen model; balances size and uncensored content. |
| **[alibaba‑pai/MiniMax‑H3‑Acc‑LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | alibaba‑pai | 176 · 32.9 k | LoRA adapters for MiniMax‑H3 focusing on accuracy‑boost; early sign of modular video‑model ecosystem. |

---

### 3. Ecosystem Signal (100‑200 words)  
The **multimodal flash‑optimized family** (Qwen‑3.8‑Flash‑Next, GLM‑5.3‑Flash) is the clear driver of this week’s activity, reflecting a broader industry shift toward low‑latency, mixed‑precision inference for vision‑language tasks.  Community‑generated **GGUF quantizations** dominate the download charts, with Unslo​th’s 27 B GGUF alone surpassing 9 M downloads, underscoring the strong appetite for portable, CPU‑friendly LLMs.  The “uncensored/abliterated” sub‑trend shows that a segment of developers are deliberately stripping safety layers to explore raw model behavior, driving parallel releases (OrcaRouter, OBLITERATUS, JonathanColetti).  Video generation is emerging as the next frontier: MiniMax‑H3’s 5 M+ downloads and Lightricks’ LTX‑2.5 indicate that open‑source diffusion‑based video models are moving from research to production use.  Specialty domains (speech synthesis, time‑series forecasting) remain modest but are gaining traction, suggesting diversification beyond pure text‑centric pipelines.

---

### 4. Worth Exploring  

1. **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – The most downloaded GGUF model; offers 27 B parameters with a ~4 GB footprint, enabling high‑quality local inference on consumer laptops or edge devices.  

2. **[MiniMaxAI/MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – State‑of‑the‑art open‑source image‑text‑to‑video diffusion model, already powering several commercial demo apps; ideal for research into temporally coherent generative video.  

3. **[Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** – Demonstrates the latest FP8‑style flash training that halves latency on GPUs while preserving multimodal capability; a benchmark for future vision‑language research.  

These three span the most active pillars—portable LLMs, video generation, and cutting‑edge multimodal efficiency—making them the prime candidates for experimentation or deeper study.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*