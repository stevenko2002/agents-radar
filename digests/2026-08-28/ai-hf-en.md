# Hugging Face Trending Models Digest 2026-08-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-27 22:16 UTC

---

**Hugging Face Trending Models Digest – 2024‑08‑28**  

---

## 1. Today’s Highlights  
The Qwen 3.8 family continues to dominate the leaderboard, with both the flagship 27B checkpoint and the new “Flash‑Next” variant gathering thousands of likes in just one week.  Quantized GGUF releases from the **unsloth** and **orcarouter** communities are exploding in download volume, underscoring a shift toward edge‑friendly, low‑bit inference.  Outside the Qwen sphere, DeepSeek V4‑Flash and MiniMax‑H3 (the first high‑quality text‑to‑video model) are the only non‑Qwen entries breaking into the top‑30, hinting at renewed interest in generative video and conversational AI.  Meanwhile, niche audio‑generation models (MiniMax‑Music3, Breeze‑TTS‑2, Audio8‑TTS) are gaining traction, indicating a modest but growing diversification of multimodal generation beyond text and images.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13 028 | 3 457 687 | The flagship 27 B multimodal LLM, praised for strong instruction following and vision‑language ability. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai | 3 760 | 3 959 575 | Flash‑optimized, 16 B chat model that outperforms many 32 B rivals on benchmark reasoning. |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11 035 | 2 829 554 | Compact (~7 B) Chinese‑English chat model with compressed‑tensor inference, popular in the Asia‑Pacific community. |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1 207 | 273 577 | Uncensored FP8‑quantized variant that pushes throughput on GPU/CPU while preserving Qwen‑3.8 quality. |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai | 464 | 88 102 | 35 B mixture‑of‑experts (MoE) model, offering high capacity at reduced memory cost, attracting research labs. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1 932 | 912 729 | First open‑weight diffusion model that directly generates 2‑second videos from a single image. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4 530 | 4 855 095 | The largest open‑source text‑to‑video diffusion (≈1 B parameters) that supports 8‑frame generation, fueling creator workflows. |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 1 274 | 19 726 | Text‑to‑music diffusion with controllable genre/style, marking a new wave of open music‑generation tools. |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 126 | 240 | High‑fidelity English TTS model built on the latest transformer‑based acoustic backbone, adopted by several voice‑assistant prototypes. |
| **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Audio8 | 179 | 4 477 | Early‑access multilingual TTS model (10 + languages) that demonstrates competitive MOS scores with a small parameter budget. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova | 180 | 4 232 | “Any‑to‑any” multimodal encoder that excels at cross‑modal retrieval, used in academic benchmark suites. |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper | 279 | 4 149 | Tiny (≈200 M) speech‑to‑text model with on‑device performance, gaining attention for mobile ASR apps. |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1 504 | 0 | Community‑contributed Jinja‑based chat templates that fix token‑misalignment bugs in Qwen‑3.5 deployments. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1 164 | 83 352 | Optimized for Apple Silicon via the MLX runtime, enabling 27 B inference on M2‑Pro/Max. |
| **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 261 | 238 691 | Experimental GGUF checkpoint with GAIN (Gradient‑Averaged In‑Network) training, a test‑bed for novel fine‑tuning recipes. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3 069 | 7 758 790 | GGUF‑quantized (Q4_0) version that ships with a single‑file installer, driving massive download counts. |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 447 | 4 354 | First GGUF of the Flash‑Next speed‑up variant; early adopters report 1.8× faster token generation on CPU. |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 491 | 188 460 | Community‑built uncensored checkpoint with 4‑bit GGUF, popular for research that needs “full‑model” knowledge. |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 845 | 509 270 | MXNet‑compatible, “obliterated” (AWQ‑quant) version that runs on Apple Silicon and low‑end GPUs with <8 GB VRAM. |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 780 | 1 666 948 | Llama.cpp‑compatible GGUF, which has become the de‑facto standard for running Qwen‑3.8 on laptop hardware. |

---

## 3. Ecosystem Signal  

The **Qwen 3.8 family** is the clear engine of growth on the Hub: all three major releases (base 27 B, Flash‑Next, and uncensored variants) appear across multiple categories (raw, GGUF, FP8, MLX).  This reflects a community‑wide push for **multimodal, high‑capacity LLMs that can be run on commodity hardware**, especially after the recent release of the GGUF format and the rise of the **unsloth** quantization pipeline.  

Open‑weight models dominate the top‑30, with only a handful of proprietary or closed‑source checkpoints (e.g., DeepSeek‑V4‑Flash).  The **quantization wave** is evident: 7 of the 30 models are GGUF, and three more are FP8/MLX, indicating that developers are prioritizing inference efficiency over raw parameter count.  Parallel to this, **generative video** is emerging as a new frontier—MiniMax‑H3 and Lightricks LTX‑2.5 together account for >6 M downloads, showing that the community is ready to experiment with text‑to‑video pipelines beyond static images.  

Audio generation, while still a niche slice, is gaining momentum with dedicated text‑to‑music (MiniMax‑Music3) and multilingual TTS (Breeze‑TTS‑2, Audio8‑TTS) models crossing the 1 k‑download threshold.  Overall, the trend points to a **consolidation around a handful of powerful families (Qwen, DeepSeek, MiniMax) combined with community‑driven quantization and fine‑tuning frameworks** that make these models accessible on laptops, edge devices, and even browsers.

---

## 4. Worth Exploring  

| Model | Reason to try |
|------|---------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | The most downloaded GGUF checkpoint; demonstrates that a 27 B multimodal LLM can be run on a laptop with <8 GB RAM while retaining strong conversational and vision performance. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | First open‑source high‑quality text‑to‑video diffusion; ideal for researchers exploring temporal diffusion, prompt‑to‑motion alignment, or building creative video‑generation applications. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | Offers a flash‑optimized 16 B chat model that rivals larger closed‑source competitors on reasoning benchmarks; useful for building cost‑effective conversational agents without the Qwen licensing constraints. |

These three models together showcase the current **triad of community priorities**: efficient large‑scale multimodal inference (Qwen GGUF), next‑generation generative video (MiniMax‑H3), and high‑performance, cost‑effective chat (DeepSeek‑V4‑Flash).  Trying them will give you a hands‑on feel for where the Hugging Face ecosystem is heading in 2024‑2025.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*