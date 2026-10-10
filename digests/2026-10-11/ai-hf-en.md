# Hugging Face Trending Models Digest 2026-10-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-10 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-10-11

## 1. Today's Highlights

Qwen is the dominant force in this week's trending list: **Qwen/Qwen3.8-27B** and **Qwen/Qwen3.8-Flash-Next** lead open-weight LLM interest, while **Qwen/Qwen-Image-2.1** and its Turbo variant anchor image generation. **Lightricks/LTX-2.5** tops weekly likes among generative media models, signaling strong momentum in open video generation. Google's **embeddinggemma-2** and unsloth's GGUF conversion show embeddings are becoming a first-class open-weight category. Meanwhile, the fine-tune and quantization layer is unusually active, with GGUF, 2-bit/ternary, GSQ-RCO, uncensored, and abliterated variants driving huge download counts.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 17,420 likes | 6,768,654 downloads. Flagship Qwen3.8 conversational image-text-to-text model; trending as the base for many fine-tunes and quantizations.
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 6,077 likes | 1,798,393 downloads. Fast Qwen3.8 variant with qwen4_exp tags; high interest for efficient multimodal chat.
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 4,321 likes | 1,355,278 downloads. DeepSeek V4.1 Flash text/image-text model; trending as a strong open-weight alternative.
- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 859 likes | 10,496 downloads. MoE reasoning model; vLLM support and Kolibri-1 architecture attract efficiency-focused users.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 7,165 likes | 1,720,888 downloads. Image-to-video/text-to-video diffusion model; top weekly likes and high downloads for open video generation.
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 3,187 likes | 128,839 downloads. Official Qwen image generation/editing diffusion model; central to the Qwen-Image ecosystem.
- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen | 439 likes | 2,138 downloads. Turbo variant for faster text-to-image generation; lower downloads but an official acceleration path.
- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare | 1,985 likes | 13,579 downloads. Image-text-to-text model on Qwen3.5; trending for Cloudflare's clef multimodal assistant.
- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 731 likes | 20,670 downloads. Flash version of clef; lower-latency multimodal image-text-to-text.
- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI | 261 likes | 9,088 downloads. Compact lfm2_vl image-text-to-text model; efficient multimodal on-device interest.
- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 1,353 likes | 248,475 downloads. Qwen-Image LoRA for face swap; trending in image editing and ComfyUI workflows.
- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing | 145 likes | 0 downloads. Video diffusion transformer for joint video-audio generation; novel joint generation with zero downloads.
- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | 333 likes | 15,710 downloads. Turkish text-to-speech model; niche TTS with community interest.
- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | 304 likes | 12,816 downloads. On-device speech recognition model; trending for lightweight ASR.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 1,493 likes | 45,605 downloads. Embedding Gemma 2 feature-extraction model; leading open embedding release.
- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth | 226 likes | 50,551 downloads. GGUF quantized embeddinggemma-2; enables local multimodal embedding.
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 5,460 likes | 42,936 downloads. System-one calibrated decision text-classification model; high likes for agent/decision tasks.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 5,000 likes | 6,449,020 downloads. GGUF quantization of Qwen3.8-27B; massive downloads for local inference.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 2,591 likes | 4,457,576 downloads. Ternary 2-bit GGUF; extreme quantization trend for running 27B locally.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 2,115 likes | 1,484,655 downloads. GSQ-RCO mixed-precision GGUF; research quantization for Qwen3.8-27B.
- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 767 likes | 3,922,328 downloads. Quantized Flash-Next with GSQ-RCO; high downloads for efficient deployment.
- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 1,632 likes | 1,960,274 downloads. Uncensored/heretic community fine-tune in GGUF; popular for unrestricted local use.
- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter | 726 likes | 520,450 downloads. Abliterated/uncensored GGUF of Flash-Next; trending for uncensored chat.
- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117 | 186 likes | 765,376 downloads. Abliterated + GSQ-RCO quantized GGUF; combines uncensoring with mixed-precision.
- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 3,865 likes | 2,096,562 downloads. Uncensored Qwen-Image 2.1 GGUF; huge downloads for ComfyUI image generation.
- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** — AtomicChat | 189 likes | 7,314 downloads. Turbo uncensored GGUF for Qwen-Image; niche ComfyUI quant.
- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 679 likes | 45,199 downloads. MoE-style 29B A4B GGUF; efficient text-generation quant.
- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch | 265 likes | 59,191 downloads. 2-bit llama.cpp model with tool/function calling; low-bit agentic fine-tune.
- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — nerkyor | 185 likes | 42,336 downloads. Coder/reasoning community merge; long-name meme fine-tune with efficient thinking.
- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | 944 likes | 33,664 downloads. Gemma4-unified humanizer GGUF/text-generation; trending for making AI text more human-like.

---

## 3. Ecosystem Signal

The Qwen family is clearly gaining the most momentum: Qwen3.8-27B, Qwen3.8-Flash-Next, Qwen-Image-2.1, and their derivatives dominate both official releases and community quantizations. DeepSeek-V4.1-Flash and Aleph-Alpha/Kolibri-1 show continued demand for open-weight reasoning and MoE alternatives. Open-weight models overwhelmingly drive this trending list; proprietary or closed models are absent, while Google's embeddinggemma-2 is the main non-Qwen official release with strong pull. Quantization is the busiest layer: GGUF conversions from unsloth, ISTA-DASLab's GSQ-RCO mixed-precision work, and prism-ml's ternary 2-bit model are attracting millions of downloads. Fine-tuning activity skews toward uncensored, abliterated, and heretic variants of Qwen3.8 and Qwen-Image, often paired with ComfyUI or llama.cpp workflows. Embeddings and speech models remain smaller but show healthy specialization, with embeddinggemma-2 and on-device ASR/TTS filling distinct niches.

---

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The week's clearest ecosystem anchor: high likes, massive downloads, multimodal conversational ability, and an enormous fine-tune/quantization surface. Worth studying as both a model and a platform.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The top weekly-like generative media release, with image-to-video, text-to-video, and video-to-video support. A strong signal for where open video generation is heading.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — Extreme ternary 2-bit quantization with millions of downloads. Worth exploring for local LLM efficiency and the growing low-bit inference trend.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*