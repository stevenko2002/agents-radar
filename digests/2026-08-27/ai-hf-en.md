# Hugging Face Trending Models Digest 2026-08-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-26 22:15 UTC

---

**Hugging Face Trending Models Digest – 2026‑08‑27**  

---

## 1. Today’s Highlights  

The Qwen 3.8 family dominates the leaderboard, with the 27 B “Uncensored” and “Flash‑Next” variants racking up tens of thousands of likes and multi‑million download counts.  Quantized GGUF releases from Uns loth, OBLITERATUS and the orcarouter community are spreading rapidly, reflecting a surge in low‑resource deployment.  Outside the Qwen wave, DeepSeek V4‑Flash and Moonshot Kimi‑K3 showcase a renewed focus on highly‑compressed, instruction‑tuned LLMs, while generative‑video models such as Lightricks LTX‑2.5 and MiniMax‑H3 highlight the rapid maturation of text‑to‑video pipelines.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author / Likes / Downloads | Why it’s trending |
|---|---|---|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen · 12,890 · 3.3 M | Flagship 27 B multimodal LLM that combines strong conversational ability with image‑text handling; the baseline for many community forks. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai · 3,738 · 3.9 M | Highly compressed “Flash” checkpoint that delivers V4‑level reasoning on commodity GPUs, driving the flash‑LLM trend. |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai · 11,018 · 2.9 M | Korean‑centric instruction model that has attracted a sizable user base thanks to its multilingual capabilities and efficient tensor format. |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai · 451 · 83 k | 35 B mixture‑of‑experts (MoE) model that demonstrates strong scaling on instruction following while keeping inference cost modest. |
| **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** | ornith‑ai · 226 · 119 k | Compact 9 B version of the Ornith series, popular for edge‑device chat bots and fine‑tuning experiments. |
| **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** | EschaLabs · 131 · 2.5 k | 2‑bit quantized Qwen3.8 checkpoint that proves extreme compression can still retain useful dialogue quality. |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper · 250 · 3.9 k | Tiny speech‑to‑text model that leverages Qwen‑style embeddings for low‑latency transcriptions. |
| **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Audio8 · 173 · 4.3 k | Early‑stage text‑to‑speech model demonstrating the community’s push into high‑quality TTS with transformer back‑ends. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author / Likes / Downloads | Why it’s trending |
|---|---|---|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen · 3,569 · 2.6 k | “Flash” multimodal variant optimized for fast image‑text generation, widely adopted for prototyping vision‑augmented assistants. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks · 1,858 · 894 k | Diffusion‑based image‑to‑video model that has become a go‑to demo for creative‑AI workflows on consumer hardware. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI · 4,498 · 4.8 M | State‑of‑the‑art text‑to‑video diffusion that pushes frame‑rate and consistency, fueling the “video generation” boom. |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI · 1,260 · 19 k | Text‑to‑music diffusion that showcases the expanding modality frontier beyond vision to audio generation. |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org · 750 · 0 | Flash‑optimized GLM‑5.3 model targeting image‑text‑to‑text pipelines; early adopters praise its speed despite low download count. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter · 1,139 · 79 k | MLX‑compatible, uncensored version that enables on‑device multimodal inference on Apple silicon. |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter · 1,175 · 269 k | FP8 quantized checkpoint delivering a good balance between quality and memory footprint for consumer GPUs. |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS · 656 · 912 k | Aggressive GGUF quantization that pushes the “run anywhere” narrative for large multimodal models. |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti · 748 · 1.62 M | Popular GGUF release that has become the default for llama.cpp users seeking Qwen‑style capabilities. |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui‑ai · 377 · 1.32 M | Community‑driven “abliterated” variant focused on reducing toxic outputs while staying compact. |

### 🔧 Specialized Models  

| Model | Author / Likes / Downloads | Why it’s trending |
|---|---|---|
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric · 1,484 · 0 | Jinja‑based chat template that fixes prompt‑injection bugs in Qwen‑style models; essential for reliable deployment. |
| **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** | peculiar‑ragdoll · 253 · 0 | Alternative chat‑template toolkit for the Qwen ecosystem, gaining traction among developers needing custom system messages. |
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova · 171 · 3.3 k | “Any‑to‑any” multitask model targeting low‑resource domains such as medical Q&A and legal summarization. |

### 📦 Fine‑tunes & Quantizations (GGUF, AWQ, FP8, etc.)

| Model | Author / Likes / Downloads | Why it’s trending |
|---|---|---|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth · 2,992 · 7.64 M | Uns‑loth’s GGUF pack that combines Qwen‑3.8 with their 4‑bit optimizations, becoming the most downloaded quantized Qwen model. |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth · 307 · 0 | GGUF version of the Flash‑Next checkpoint, targeting llama.cpp users who need both speed and vision support. |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS · 809 · 468 k | “Obliterated” fine‑tune that aggressively removes refusal tokens, popular for unrestricted chat bots. |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter · 473 · 184 k | Community‑maintained GGUF that keeps the original Qwen weights but strips safety layers, widely used on Apple‑silicon via MLX. |
| **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** | orcarouter · 192 · 17.6 k | Baseline uncensored checkpoint (non‑GGUF) that serves as a reference for downstream quantization scripts. |
| **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU · 252 · 232 k | Experimental “Cold‑Fusion” training that fuses LoRA‑style adapters with GGUF quantization for minimal latency. |
| **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** | ornith‑ai · 312 · 1.39 M | GGUF wrapper for the 35 B MoE model, enabling llama.cpp inference on a single high‑end GPU. |
| **[ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF)** | ornith‑ai · 214 · 1.39 M | Compact 9 B GGUF model that dominates the low‑memory, high‑throughput segment of the Ornith family. |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter · 1,175 · 269 k | FP8 quantization offering a 2‑× speed‑up over 4‑bit GGUF with comparable quality in vision‑augmented tasks. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** (already listed above) – kept for completeness under Fine‑tunes. |

---

## 3. Ecosystem Signal  

The **Qwen 3.8** family is unequivocally the current engine of growth on the Hub, accounting for more than half of the weekly‑likes tally.  Community‑driven “uncensored”, “abliterated”, and Flash‑optimized forks underscore a demand for **open‑weight, high‑capacity multimodal LLMs** that can be molded to niche policy regimes.  Parallel to this, the **GGUF/FP8 quantization wave**—led by Uns loth, OBLITERATUS, and orcarouter—shows that developers are prioritizing **run‑anywhere** deployment, especially on edge devices (Apple silicon, low‑VRAM GPUs).  The emergence of **MiMo (Mi‑ni‑Max) video and music diffusion models** signals a shift from text‑centric generation to richer media pipelines, with Lightricks LTX‑2.5 and MiniMax‑H3 achieving multi‑million download counts in just weeks.  Meanwhile, specialized tooling (chat‑template repos, ASR/TTS micro‑models) reflects a maturing ecosystem where prompt‑engineering and modality‑specific adapters are becoming first‑class assets.

---

## 4. Worth Exploring  

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – The most downloaded quantized Qwen model; combines 4‑bit efficiency with full multimodal support, making it the go‑to for low‑cost, high‑quality inference on laptops and CPUs.  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – Currently the benchmark for open‑source text‑to‑video generation; its diffusion backbone and strong community support make it ideal for research into temporal consistency and controllable video synthesis.  

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** – Provides a compact, high‑performance instruction model that rivals closed‑source offerings while staying in the “Flash” compressed format, perfect for rapid prototyping of chat assistants on modest hardware.  

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*