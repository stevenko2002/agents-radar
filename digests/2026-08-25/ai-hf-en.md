# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-24 22:15 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-25

---

## 1. Today's Highlights

The Qwen3.8-27B family is the undisputed story of the week, sweeping 20 of the 30 trending slots — ranging from the official base model and FP8 quantization to a wave of abliterated, uncensored, MLX, and GGUF derivatives from orcarouter, huihui-ai, OBLITERATUS, and others. Beyond Qwen's dominance, video generation is heating up with MiniMax-H3 (4,416 likes, 4.4M downloads) and Lightricks/LTX-2.5, while DeepSeek-V4-Flash-0731 maintains strong momentum as a leading open-weight conversational model. Ornith-1.5's MoE family (35B-A3B and 9B) signals growing community appetite for parameter-efficient architectures, and mini-TTS/music-generation entrants (Audio8, MiniMax-Music3) round out a diverse creative-AI mix. Notably, nearly every derivative in the top 30 is a lightweight quantization or fine-tune rather than a novel architecture — pointing to a community laser-focused on local deployment of the Qwen3.8 flagship.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 12,505 likes | 2,645,226 downloads — The week's breakout flagship multimodal LLM (image-text-to-text) from Alibaba's Qwen team, sparking the entire derivative ecosystem around it.
- **[DeepSeek-AI/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 3,681 likes | 3,274,129 downloads — A fast, conversational open-weight text-generation model from DeepSeek, riding the family's reputation for strong reasoning at accessible scale.
- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — ornith-ai | 392 likes | 60,294 downloads — A Qwen3.5-based MoE text-generation model (35B total, 3B active) embracing efficient multimodal inference, signaling the MoE trend's rise.
- **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** — ornith-ai | 199 likes | 83,192 downloads — The smaller dense sibling in the Ornith-1.5 family, offering lightweight multimodal text generation for resource-constrained setups.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 4,416 likes | 4,465,161 downloads — A high-fidelity image-text-to-video diffusion model, the most-liked video model of the week alongside strong download volume.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 1,720 likes | 790,378 downloads — A versatile diffusion-based video model supporting image-to-video, text-to-video, and video-to-video generation in a single file.
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 1,227 likes | 18,065 downloads — A text-to-music diffusion generation model from MiniMax, bringing fresh momentum to AI music creation.
- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** — Audio8 | 145 likes | 2,775 downloads — A compact, early-preview ArKTTS-based text-to-speech model offering feature-extraction and audio capabilities in a 0.1B package.

### 🔧 Specialized Models (code, math, embeddings, efficient inference)

- **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — z-lab | 214 likes | 50,763 downloads — A Qwen3.8 variant enhanced with DFlash2 speculative decoding to accelerate generation throughput.
- **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** — incoai | 172 likes | 85,034 downloads — An independent DFlash2 speculative-decoding build of Qwen3.8-27B, mirroring the community's drive for faster inference.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 1,445 likes | 0 downloads — A high-like reference repo of corrected Qwen chat-template Jinja files for MLX, fixing prompt-format issues across Qwen3.5.
- **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** — peculiar-ragdoll | 225 likes | 0 downloads — A community alternative pack of polished Jinja chat templates for Qwen3.5 MLX deployments, addressing similar prompt-shaping needs.
- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** — superwhisper | 229 likes | 2,976 downloads — A Qwen3-based text-generation model with integrated ASR capabilities, blurring the line between language and speech tasks.
- **[LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler)** — LBH-123-AI | 180 likes | 0 downloads — A US-hosted latent upscaler companion for the MiniMax-H3 video pipeline, aimed at resolution enhancement.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, MLX)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 2,829 likes | 7,009,063 downloads — The most-downloaded model of the week: unsloth's GGUF quantization of Qwen3.8-27B for ultra-broad local deployment.
- **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** — Qwen | 679 likes | 3,004,940 downloads — The official FP8 quantization from Qwen, giving enterprise users a precision-balanced deployment option.
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** — orcarouter | 1,026 likes | 57,947 downloads — An abliterated, uncensored MLX build of Qwen3.8-27B optimized for Apple Silicon.
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — orcarouter | 1,092 likes | 224,114 downloads — The uncensored FP8 sibling in orcarouter's abliterated Qwen3.8 lineup.
- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter | 420 likes | 143,108 downloads — A third abliterated variant from orcarouter in GGUF form for llama.cpp-style inference.
- **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** — orcarouter | 169 likes | 10,482 downloads — The base full-precision abliterated release anchoring orcarouter's uncensored model family.
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS | 691 likes | 312,627 downloads — A multi-format (MLX, GGUF, safetensors) abliterated Qwen3.8 release, hugely popular for its aggressive uncensoring.
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 686 likes | 1,456,700 downloads — A llama.cpp-ready uncensored GGUF with MTP support, among the most downloaded uncensored derivatives.
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 575 likes | 761,975 downloads — An aggressively uncensored, multimodal-capable GGUF build with MTP acceleration.
- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 332 likes | 1,140,375 downloads — huihui-ai's signature abliterated GGUF of Qwen3.8-27B, a staple name in the uncensored quantization space.
- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated)** — huihui-ai | 275 likes | 27,316 downloads — The non-quantized safetensors version of huihui-ai's abliterated Qwen3.8 for full-precision use.
- **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)** — 0bserverx | 257 likes | 654,805 downloads — A heavily fine-tuned "Heretic" abliterated GGUF focusing on maximum creative freedom in outputs.
- **[empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF)** — empero-ai | 259 likes | 162,580 downloads — A llama.cpp quantized Qwen3.8 GGUF distinguished by measured "Ridge" calibration for reduced quality loss.
- **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 225 likes | 209,017 downloads — An experimental GGUF combining GAIN Training and COLD-FUSION mixing techniques over Qwen3.8 with MTP.
- **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** — ornith-ai | 273 likes | 988,170 downloads — GGUF quantization of the Ornith-1.5 MoE model, MIT-licensed and endpoints-compatible for easy serving.
- **[ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF)** — ornith-ai | 185 likes | 971,104 downloads — The GGUF release of Ornith-1.5-9B, delivering near-million downloads for on-device use.

---

## 3. Ecosystem Signal

**Qwen is the gravitational center.** The Qwen3.8-27B family represents two-thirds of the trending list, and the pattern is unmistakable: a single strong open-weight flagship (multimodal, 27B) spawning a long tail of community derivatives. Qwen's strategy of releasing official quantizations (FP8) alongside the base model appears to be catalyzing an unusually healthy ecosystem rather than fragmenting it.

**Abliteration and "uncensored" fine-tuning is now a mainstream genre.** Roughly a third of all Qwen derivatives are abliterated or uncensored variants from studios like orcarouter, huihui-ai, OBLITERATUS, and 0bserverx. This has evolved from a niche practice into a standard release format, suggesting strong consumer demand for reduced-refusal models — a trend to watch for policy implications.

**Quantization is the distribution channel.** GGUF dominates, with unsloth's build passing 7M downloads and multiple derivative GGUFs crossing a million. MLX adoption on Apple Silicon is growing, and even early-stage optimizations like speculative decoding (DFlash2, MTP) are being baked directly into quants. The open-weight vs. proprietary battle is clearly being won on **local deployability** — lightweight, runnable models beating raw capability.

**Booming creative-AI sectors:** video (MiniMax-H3, LTX-2.5) and audio (MiniMax-Music3, Audio8 TTS) are gaining serious traction and attracting first-party releases from major labs, a notable contrast to the community-generated nature of the LLM entries.

---

## 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The flagship itself. Understanding what makes one base model inspire ~20 high-quality derivatives in a single week is the single most instructive study in current open-weight strategy, from multimodal design to the quantization ecosystem it spawns.

2. **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — A MoE with only 3B active parameters achieving strong engagement signals. It represents the efficiency-first direction the community is clearly rewarding, and its MIT license + endpoints compatibility makes it ideal for production experimentation.

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The most-liked non-Qwen model this week. As video generation becomes the next frontier of open-weight AI, MiniMax-H3's combination of 4.4M downloads and high approval makes it the reference point for commercial-grade text/image-to-video diffusion.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*