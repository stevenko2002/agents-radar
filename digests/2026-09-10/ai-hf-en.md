# Hugging Face Trending Models Digest 2026-09-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-09 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-10

---

## 1. Today's Highlights

The Qwen 3.8 family dominates this week's leaderboard, with the base 27B model, its Flash-Next variant, and a proliferation of community GGUF quantizations (unsloth, ISTA-DASLab, DavidAU, HauhauCS) collectively capturing massive mindshare. Video generation is surging: Lightricks' LTX-2.5 and MiniMaxAI's MiniMax-H3 lead a wave of text-to-video and image-to-video models, spawning fine-tunes like Minimax-h3_Singularity and vdn-minimax-h3. Z.ai's GLM-5.3 series (base, Flash, and a cybersecurity-specialized FP8 variant) signals growing diversification in MoE architectures. Quantization innovation advances beyond standard GGUF—NVIDIA's NVFP4 and ISTA-DASLab's GSQ-RCO mixed-precision formats indicate a maturing inference-optimization ecosystem. Meanwhile, perennial embeddings (all-MiniLM-L6-v2) and time-series forecasting (TimesFM-3.0) maintain steady, high-volume adoption.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 14,516 | 6,712,160 | Flagship 27B multimodal LLM with image-text-to-text capability, leading the Qwen 3.8 family adoption. |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org | 1,788 | 474,141 | MoE-based 5.3 model optimized for conversational text generation with strong instruction-following. |
| **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** | openbmb | 893 | 2,879 | Compact 2B parameter model punching above its weight in chat and reasoning benchmarks. |
| **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** | XHToken | 998 | 10,661 | Emerging 4B LLM gaining traction for efficient local deployment. |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 2,205 | 826,875 | Distilled/accelerated variant of GLM-5.3 with multimodal image-text-to-text support. |
| **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** | IFM | 260 | 3,205 | MoE architecture (36B total, 4B active) exploring mixture-of-vision-attention for multimodal tasks. |
| **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)** | nex-agi | 203 | 2 | Qwen3.5-MoE based mini model targeting efficient text and image-text generation. |
| **[nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro)** | nex-agi | 164 | 0 | Pro variant of Nex-N2.5 series with Apache-2.0 license, endpoint-ready. |
| **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** | openai-community | 3,851 | 14,770,863 | Classic 1.5B autoregressive LM, still widely used for education, benchmarks, and lightweight tasks. |
| **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** | google-bert | 3,119 | 48,848,285 | Foundational encoder model for fill-mask, classification, and feature extraction. |
| **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** | distilbert | 1,280 | 7,178,154 | Distilled BERT retaining 95% performance at 60% size, standard for efficient NLU. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 3,263 | 1,644,796 | State-of-the-art diffusion model for image-to-video, text-to-video, and video-to-video generation. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 5,085 | 4,994,268 | Base video generation model supporting text-to-video and image-to-video with high temporal coherence. |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 5,045 | 503,263 | Next-gen efficient multimodal model (Qwen4 experimental) with image-text-to-text conversational ability. |
| **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek-ai | 843 | 313,547 | Experimental flash-attention vision-language model from DeepSeek's V4 series. |
| **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** | WarmBloodAban | 217 | 58,060 | Community fine-tune of MiniMax-H3 optimized for singularity-style video generation aesthetics. |
| **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** | OpenVDN | 275 | 0 | Fine-tune of MiniMax-H3 exploring video diffusion navigation (vdn) techniques. |
| **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** | openai | 1,340 | 20,778,503 | Foundational vision-language encoder for zero-shot image classification and retrieval. |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 516 | 7,243 | Text-to-speech model with transformers backbone, targeting natural prosody and multilingual support. |
| **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)** | microsoft | 176 | 1,449 | Streaming automatic speech recognition model from the VibeVoice family, 7B parameters. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, forecasting, security)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence-transformers | 5,716 | 253,331,994 | Ubiquitous 384-dim sentence embedding model, #1 for semantic search, clustering, and retrieval. |
| **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 686 | 444,052 | Foundation model for zero-shot time-series forecasting, pretrained on large-scale temporal data. |
| **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)** | dealignai | 354 | 19,433 | Cybersecurity-specialized GLM-5.3 variant (FP8 quantized) with refusal removal for red-teaming. |
| **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)** | facebook | 358 | 12,171 | Massively Multilingual Speech (MMS) 300M wav2vec2 model for speech pretraining across 1000+ languages. |
| **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)** | microsoft | 176 | 1,449 | Streaming ASR model optimized for real-time transcription with 7B parameters. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, NVFP4, GSQ-RCO)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,777 | 10,675,683 | High-quality GGUF quantization of Qwen3.8-27B, optimized for llama.cpp/llamafile inference. |
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA-DASLab | 731 | 479,597 | Mixed-precision GSQ-RCO quantization (GGUF) exploring grouped-sparse quantization with residual correction. |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 1,056 | 1,715,824 | Aggressive uncensored fine-tune + MTP (multi-token prediction) + GGUF quantization for unfiltered use. |
| **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*