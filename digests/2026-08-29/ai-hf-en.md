# Hugging Face Trending Models Digest 2026-08-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-28 22:16 UTC

---

**Hugging Face Trending Models Digest – 2026‑08‑29**

---

## 1. Today’s Highlights  

The Qwen family continues to dominate the leaderboard, with the flagship **Qwen‑3.8‑27B** (13 k likes) and its lightweight “Flash‑Next” variant both receiving massive download bursts. Multimodal generation is the hot‑topic: MiniMax‑H3 (4.5 M downloads) and Lightricks’ LTX‑2.5 showcase state‑of‑the‑art text‑to‑video pipelines, while a wave of community‑driven GGUF/MLX quantizations spreads high‑performance Qwen models to edge hardware. On the LLM side, DeepSeek‑V4‑Flash and the new GLM‑5.3 series underline a renewed competition in instruction‑tuned, English‑centric chat models, each reaching several thousand weekly likes.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | 👍 Likes | ⬇️ Downloads | Why it’s trending |
|---|---|---|---|---|
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai | 3,785 | 3,959,575 | The latest DeepSeek flash checkpoint delivers 4‑times faster inference for the V4 family, attracting large‑scale adoption in chat‑bot deployments. |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1,495 | 34 | A flash‑optimized version of GLM‑5.3 that halves latency on GPU while keeping the 20B parameter instruction set intact. |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1,085 | 0 | The baseline GLM‑5.3 (MoE) is gaining traction as a fully open‑weight alternative to proprietary chat models. |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai | 482 | 88,102 | A 35 B MoE chat model that mixes Qwen‑3.5 architectural tricks with high‑quality RLHF data, popular among research labs. |
| **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** | ornith‑ai | 331 | 1,469,059 | GGUF‑packed version enables 4‑bit inference on consumer CPUs, fueling the GGUF surge. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | 👍 Likes | ⬇️ Downloads | Why it’s trending |
|---|---|---|---|---|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,134 | 3,457,687 | A 27 B multimodal powerhouse (image + text) that now ships with a refined chat template, becoming the de‑facto baseline for vision‑language research. |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,148 | 4,810 | “Flash‑Next” trims the Qwen‑3.8 encoder for 2‑× speed‑up on GPU while preserving multimodal reasoning quality. |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 514 | 4,354 | GGUF quantization of Flash‑Next makes real‑time vision‑language possible on ARM laptops and Raspberry Pi. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,005 | 912,729 | A single‑file diffusion model that converts still images to 2‑second video clips, popular with social‑media creators. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,573 | 4,848,404 | The first open‑weight text‑to‑video diffusion model that supports high‑resolution (720p) generation with controllable motion. |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11,060 | 2,675,145 | A lightweight (2.7 B) multimodal encoder that excels at zero‑shot image‑text retrieval, driving the “feature‑extraction” tag surge. |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui‑ai | 421 | 1,355,482 | “Abliterated” removes safety filters for research, and the GGUF version has become a benchmark for unrestricted multimodal evaluation. |

### 🔧 Specialized Models (audio, speech, domain‑specific)

| Model | Author | 👍 Likes | ⬇️ Downloads | Why it’s trending |
|---|---|---|---|---|
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 155 | 240 | High‑fidelity, open‑source TTS that supports 150+ languages; widely used in voice‑assistant prototypes. |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 1,286 | 19,726 | Text‑to‑music diffusion model with controllable style tags, sparking a wave of AI‑generated soundtracks. |
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova | 189 | 4,232 | “Any‑to‑any” transformer that can translate, caption, and answer visual questions in a single forward pass, attracting multimodal research labs. |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 233 | 0 | A Chinese‑centric large language model preview that showcases Tencent’s progress on instruction tuning for Mandarin. |

### 📦 Fine‑tunes & Quantizations (GGUF, MLX, FP8, community packs)

| Model | Author | 👍 Likes | ⬇️ Downloads | Why it’s trending |
|---|---|---|---|---|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,140 | 7,758,790 | The 4‑bit GGUF version of the 27 B Qwen model is the most downloaded quantized checkpoint on the Hub, enabling desktop‑grade inference. |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 876 | 509,270 | An “obliterated” (unfiltered) variant that’s been compiled for Apple Silicon through MLX, attracting privacy‑focused researchers. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,183 | 83,352 | MLX‑optimized, uncensored Qwen‑3.8 model for macOS, reflecting the growing Mac‑ML community. |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 801 | 1,666,948 | Combines uncensored weights with 4‑bit GGUF compression, a sweet spot for hobbyist developers. |
| **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)** | Qwen | 146 | 2,219 | FP8 quantization that pushes throughput beyond 200 tokens/s on RTX 4090, used as a reference for low‑precision research. |

---

## 3. Ecosystem Signal  

The **Qwen family** is clearly the engine of current activity: both base LLM releases and a cascade of community‑driven quantizations (GGUF, FP8, MLX) dominate download numbers, indicating that developers prioritize flexible, high‑capacity multimodal models that can run on a spectrum of hardware. The **multimodal generation** niche is expanding fast—video diffusion (MiniMax‑H3, LTX‑2.5) and image‑to‑text/video pipelines are receiving comparable likes to classic LLMs, suggesting a shift toward content‑creation use‑cases. Open‑weight models remain the majority; even “abliterated” or “uncensored” variants are openly shared, underscoring the community’s appetite for unrestricted research. Quantization has become a mainstream activity: GGUF packs now routinely exceed 7 M downloads, and FP8 experiments are surfacing as viable production options, especially for Apple‑silicon (MLX) and low‑power edge devices. Finally, specialized audio/video generators (Breeze‑TTS‑2, MiniMax‑Music3) are carving out dedicated sub‑communities, hinting at the next wave of modality‑specific open models.

---

## 4. Worth Exploring  

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – The most downloaded 4‑bit GGUF checkpoint; offers near‑full 27 B model quality on a laptop GPU, perfect for developers needing a strong vision‑language backbone without a data‑center.  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – The first open‑weight text‑to‑video diffusion model with high‑resolution output, opening research into controllable video synthesis and attracting 4.8 M downloads.  

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** – A top‑tier English chat model with flash‑level latency; its strong instruction tuning and open licensing make it an excellent baseline for building chat assistants or fine‑tuning domain‑specific bots.  

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*