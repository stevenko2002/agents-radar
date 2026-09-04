# Hugging Face Trending Models Digest 2026-09-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-04 22:16 UTC

---



# 🤗 Hugging Face Trending Models Digest — September 5, 2026

---

## 1. Today's Highlights

DeepSeek's **V4-Flash-Vision-Exp** surges to #1 this week with nearly 600 likes and 133K downloads, signaling strong community appetite for their next-gen multimodal offering. **Qwen3.8** variants continue to dominate across every sub-category, with the base 27B model exceeding 5.7M downloads and spawning an entire ecosystem of community GGUF quantizations, uncensored variants, and abliterations. Meanwhile, generative video remains a major battleground — **MiniMax-H3** and **LTX-2.5** both see heavy adoption, while specialized fine-tuners like FastVideo push inference speed forward with 4-step previews. The uncensored/abliterated model subculture is particularly active, with orcarouter releasing multiple FP8 and GGUF variants of both GLM and Qwen architectures.

---

## 2. Trending Models

### 🧠 Language Models

**[DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — deepseek-ai | ❤️ 591 | ⬇️ 133,024
DeepSeek's experimental vision-language model leading this week's likes, reflecting growing interest in their V4 architecture for image-text tasks.

**[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | ❤️ 13,938 | ⬇️ 5,739,341
The flagship open-weight multimodal LLM of the moment, dominating both engagement and raw download numbers as the go-to base for fine-tuning and deployment.

**[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | ❤️ 4,869 | ⬇️ 351,374
Qwen's faster iteration targeting latency-sensitive use cases, quickly becoming the preferred choice for developers prioritizing speed without sacrificing quality.

**[GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** — zai-org | ❤️ 1,692 | ⬇️ 303,534
The latest pure text-generation release from the GLM family, building on their MoE DSA architecture for efficient large-scale inference.

**[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — zai-org | ❤️ 2,041 | ⬇️ 654,957
The vision-enabled Flash variant of GLM-5.3, significantly outpacing its base counterpart in downloads as a balanced multimodal option.

**[Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** — tencent | ❤️ 429 | ⬇️ 5,684
Tencent's Hunyuan V4 preview entry, an emerging player in the open-weight Chinese-language LLM space.

**[K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** — IFM | ❤️ 144 | ⬇️ 433
A 36B MoE model with 4 active experts, representing the ongoing trend toward sparse activation for efficient large-scale reasoning.

---

### 🎨 Multimodal & Generation

**[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | ❤️ 2,773 | ⬇️ 1,399,511
Lightricks' image-to-video model widely adopted for its quality and flexibility across text-to-video, image-to-video, and video-to-video pipelines.

**[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | ❤️ 4,901 | ⬇️ 5,118,457
MiniMax's latest video generation model with massive adoption, supporting both text-to-video and image-to-video with strong community momentum.

**[FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** — FastVideo | ❤️ 269 | ⬇️ 0
A revolutionary 4-step distillation of MiniMax-H3 achieving high-quality video at dramatically reduced inference cost, though still in early adoption.

**[Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** — BreezeBlue | ❤️ 423 | ⬇️ 5,388
An improved text-to-speech model rounding out the multimodal toolkit for voice generation applications.

---

### 🔧 Specialized Models

**[timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — google | ❤️ 422 | ⬇️ 105,304
Google's time-series forecasting model seeing steady uptake as enterprise and research users adopt foundation models for temporal prediction.

**[all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** — sentence-transformers | ❤️ 5,507 | ⬇️ 253,789,790
The perennially popular lightweight sentence embedding model continues to accumulate downloads, remaining the default choice for semantic similarity tasks.

**[gpt2](https://huggingface.co/openai-community/gpt2)** — openai-community | ❤️ 3,651 | ⬇️ 14,607,268
The timeless baseline model maintains a strong presence as an educational and foundational reference point.

**[bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** — google-bert | ❤️ 2,944 | ⬇️ 58,675,189
Still heavily downloaded for fill-mask and feature extraction workflows, a permanent fixture in the ecosystem.

**[clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** — openai | ❤️ 1,177 | ⬇️ 20,569,141
OpenAI's foundational vision-language encoder continues to power zero-shot classification and multimodal retrieval systems at scale.

**[mms-300m](https://huggingface.co/facebook/mms-300m)** — facebook | ❤️ 228 | ⬇️ 12,823
Meta's multilingual speech model for cross-lingual speech representation and transcription.

---

### 📦 Fine-tunes & Quantizations

**[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | ❤️ 3,498 | ⬇️ 9,951,693
The most-downloaded quantized variant by a wide margin, showcasing unsloth's dominance in accessible GGUF distributions.

**[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | ❤️ 300 | ⬇️ 206,575
An innovative GSQ (Group-Scale Quantization) + RCO (Rectified Codebook Optimization) approach targeting better quality retention at low bitrates.

**[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth | ❤️ 782 | ⬇️ 702,251
Community quantization of the Flash-Next variant, enabling efficient local deployment of Qwen's speed-optimized model.

**[HauhauCS/Qwen3.8-27B-Uncensored-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | ❤️ 938 | ⬇️ 1,463,966
An aggressively uncensored MTP (Multi-Token Prediction) fine-tune of Qwen3.8 with over 1.4M downloads, highlighting demand for unrestricted reasoning models.

**[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS | ❤️ 1,081 | ⬇️ 928,393
An abliterated (alignment-stripped) variant targeting users seeking unfiltered model behavior, available in both MLX and GGUF formats.

**[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | ❤️ 170 | ⬇️ 95,226
A highly specific coding-focused uncensored fine-tune with MTP, targeting developer and code-generation workflows.

**[orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** — orcarouter | ❤️ 177 | ⬇️ 7,782
An FP8-quantized abliterated version of GLM-5.3-Flash, part of the growing wave of alignment-stripped open models.

**[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter | ❤️ 709 | ⬇️ 276,706
A popular uncensored GGUF release from the prolific orcarouter, combining accessibility with unrestricted capabilities.

**[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter | ❤️ 224 | ⬇️ 97,994
The uncensored Flash-Next variant, extending the appeal of Qwen's speed-optimized architecture to unrestricted use cases.

**[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** — OpenVDN | ❤️ 166 | ⬇️ 0
A fine-tune of MiniMax-H3 for text-to-video, demonstrating the active community iteration on top of base video generation models.

---

## 3. Ecosystem Signal

The dominant ecosystem signal this week is the **Qwen3.8 family's total capture** of the open-weight LLM market. From the base 27B model to Flash-Next variants, the Qwen3.8 architecture has spawned one of the richest fine-tuning and quantization ecosystems on Hub — spanning GGUF, GSQ-RCO, uncensored, abliterated, MTP-enhanced, and coding-specialized variants. This reflects a maturing open-weight paradigm where base model releases trigger massive downstream communities within days. Simultaneously, the **video generation arena** is seeing rapid iteration: MiniMax-H3's 5M+ downloads have already inspired speed distillations (FastVideo's 4-step preview) and community fine-tunes, mirroring the same pattern seen in LLMs. The **uncensored/abliterated subculture** remains a significant force, with multiple actors (orcarouter, HauhauCS, OBLITERATUS) producing high-download variants. On the quantization front, unsloth continues to lead accessible GGUF distribution, while experimental approaches like ISTA-DASLab's GSQ-RCO signal growing sophistication in low-bitrate fidelity. The open-weight vs. proprietary tension is evident: DeepSeek's experimental V4 entry competing directly with entrenched players like Qwen and GLM suggests a crowded but dynamic open-model landscape.

---

## 4. Worth Exploring

**[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — With nearly 1.4M downloads and cross-pipeline support (image-to-video, text-to-video, video-to-video), LTX-2.5 represents the current state-of-the-art in accessible open video generation. Worth studying for its diffusion-single-file architecture and production readiness.

**[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** — A 4-step distillation of MiniMax-H3 trained data-free via VSA (Visual Sequence Alignment). This is a notable technical contribution: achieving high-quality video at 4 inference steps could reshape the practicality of video generation for real-time applications.

**[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — The GSQ + RCO quantization approach is an interesting departure from standard GGUF methods. For researchers and practitioners interested in pushing the boundaries of low-bitrate model retention, this variant warrants close examination alongside its download-to-likes ratio suggesting niche but dedicated adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*