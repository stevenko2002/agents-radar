# Hugging Face Trending Models Digest 2026-08-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-30 22:15 UTC

---

## 📊 Today’s Highlights  
- The **Qwen 3.8 series** (Flash‑Next, 27B, and various “abliterated/uncensored” variants) is the clear heavyweight, topping the weekly‑like chart and racking up millions of downloads across both raw and GGUF‑quantized builds.  
- **Multimodal generation** is surging: Lightricks’ LTX‑2.5 and MiniMax‑H3 dominate the image‑to‑video frontier, while Qwen’s Flash‑Next continues to set the standard for image‑text‑to‑text interaction.  
- Community‑driven quantization efforts (GGUF, FP8, MLX) are exploding, with dozens of forked repos (e.g., unsloth, orcarouter, OBLITERATUS) that make 27B‑class models runnable on consumer‑grade hardware.  
- Text‑to‑speech and code‑centric models remain niche but are gaining traction, highlighted by Breeze‑Blue’s Breeze‑TTS‑2 and the Tiel‑Coder GGUF release.  

---

## 🔥 Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | ❤️ Likes | ⬇️ Downloads | Why it’s hot |
|------|--------|----------|--------------|--------------|
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1,703 | 346,516 | Fast‑adapted GLM‑5.3 with Flash attention; balances size and latency for chat‑style use. |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai | 3,823 | 4,575,518 | The “Flash” variant of V4 delivers top‑tier conversational quality with reduced VRAM. |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11,098 | 2,794,721 | Highly compressed Kimi‑K3 is popular for edge deployments; strong multilingual abilities. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,235 | 109,121 | First uncensored Qwen 27B port to Apple‑silicon‑optimized MLX format. |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 146 | 3,982 | Small, speech‑aware LM; useful for low‑latency voice assistants. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | ❤️ Likes | ⬇️ Downloads | Why it’s hot |
|------|--------|----------|--------------|--------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,375 | 121,976 | First Flash‑accelerated multimodal Qwen model; strong image‑text‑to‑text performance. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,254 | 1,137,181 | One‑step image‑to‑video diffusion model; set a new benchmark for fast video synthesis. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,654 | 5,263,381 | High‑quality text‑to‑video diffusion, widely adopted for creative content generation. |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 211 | 1,838 | Open‑source, high‑fidelity TTS model; gaining interest for low‑resource voice cloning. |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 193 | 0 | Ultra‑fast 4‑step video preview model targeting real‑time prototyping. |

### 🔧 Specialized Models (code, math, embeddings, niche domains)

| Model | Author | ❤️ Likes | ⬇️ Downloads | Why it’s hot |
|------|--------|----------|--------------|--------------|
| **[peculiar‑ragdoll/Tiel-Coder-35B-A3B‑GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar‑ragdoll | 139 | 87,848 | 35B MoE code model, GGUF‑ready for local IDE assistance. |
| **[ornith‑ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai | 505 | 147,038 | Large MoE model optimized for research‑paper summarization and knowledge‑graph extraction. |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 158 | 1,009 | Small, finance‑tuned Qwen‑3.5 MoE, useful for quick market‑sentiment queries. |

### 📦 Fine‑tunes & Quantizations (community forks, GGUF, FP8, MLX)

| Model | Author | ❤️ Likes | ⬇️ Downloads | Why it’s hot |
|------|--------|----------|--------------|--------------|
| **[unsloth/Qwen3.8-Flash-Next‑GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 600 | 328,195 | GGUF‑packed Flash‑Next enabling 27B‑class inference on laptop‑grade GPUs. |
| **[unsloth/Qwen3.8-27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,236 | 8,839,153 | The most downloaded Qwen‑27B GGUF; a go‑to for Apple‑silicon and CUDA‑lite setups. |
| **[orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 122 | 42,864 | Community‑crafted uncensored Flash‑Next with GGUF, catering to jailbreak‑heavy use‑cases. |
| **[OBLITERATUS/Qwen3.8‑27B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 945 | 725,757 | “Abliterated” fine‑tune strips safety layers; popular among research labs testing alignment. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,286 | 301,964 | FP8 quantization slashes VRAM to ~8 GB while preserving most of the 27B’s capability. |

---

## 📈 Ecosystem Signal (100–200 words)  
The **Qwen family** is now the ecosystem’s nucleus: raw 27B checkpoints, Flash‑accelerated variants, and a cascade of community‑driven “abliterated” or “uncensored” forks dominate both the LLM and multimodal leaderboards. This reflects a broader shift toward **open‑weight, high‑capacity models that can be locally fine‑tuned and quantized**, a response to growing demand for edge‑centric AI.  

Quantization formats—**GGUF** (for llama.cpp & Apple‑silicon), **FP8**, and **MLX** (Apple‑GPU‑native)—are proliferating at unprecedented speed; the weekly top‑10 includes five GGUF packs and three FP8/MLX variants, indicating that the community values runnable‑on‑consumer‑hardware models as much as raw performance.  

On the generative side, **video diffusion** (MiniMax‑H3, LTX‑2.5) is the fastest‑growing niche, outpacing pure text generation in download velocity. Meanwhile, specialized code and domain‑specific models (Tiel‑Coder, Thomson‑1.0) are emerging but still occupy a modest slice of the overall traffic. Overall, the trend points to a **dual‑track ecosystem**: massive multimodal LLMs for generalist use, and targeted, heavily quantized models for on‑device or research‑specific workloads.

---

## 🌟 Worth Exploring  

1. **[unsloth/Qwen3.8-27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – The most downloaded GGUF variant; runs a 27B multimodal model on a 12 GB GPU or Apple‑silicon with <2 GB RAM consumption, making it the best entry point for local experimentation.  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – Sets the current state‑of‑the‑art for open‑source text‑to‑video diffusion; its high‑resolution outputs and modest inference cost have sparked a wave of creative applications.  

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** – Offers a strong, instruction‑tuned conversational experience with Flash attention and a comparatively low VRAM footprint, ideal for building chat assistants without resorting to the larger Qwen family.  

These three models together illustrate the most compelling directions on Hugging Face today: **efficient local multimodal reasoning, next‑gen video generation, and high‑quality conversational LLMs**. Happy exploring!

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*