# Hugging Face Trending Models Digest 2026-09-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-08 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-09

---

## 1. Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, appearing in 9 of the top 30 spots across base, flash, and quantized variants — a clear signal that Alibaba’s latest multimodal line has become the de facto open-weight backbone for community experimentation. Video generation is surging: Lightricks’ LTX-2.5 and MiniMax-H3 (plus its fine-tunes) collectively rack up millions of downloads, marking text-to-video as the fastest-growing modality. Meanwhile, specialized architectures are gaining traction — Google’s TimesFM-3.0 for forecasting, Microsoft’s VibeVoice for streaming ASR, and Breeze-TTS-2 for speech — showing that task-specific models now compete with general-purpose LLMs for mindshare. Quantization pipelines (GGUF, GSQ-RCO, NVFP4, FP8) are no longer niche; they are the default delivery format for 27B+ parameter models.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 842 | 10,661 | Compact 4B Chinese/English LLM optimized for efficient inference; trending as a lightweight alternative to 7B+ models. |
| [**openbmb/MiniCPM5-2B**](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 642 | 2,879 | Latest MiniCPM iteration — 2B params with strong reasoning; signals push toward sub-3B models that retain capability. |
| [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,763 | 474,141 | Z.ai’s flagship MoE LLM (5.3 generation); gaining traction for bilingual reasoning and tool-use benchmarks. |
| [**IFM/K2-Horizon-MoVA-36B-A4B**](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 233 | 3,205 | Mixture-of-Experts with 36B total / 4B active; early adoption for research on sparse scaling. |
| [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 3,752 | 14.7M | Perennial baseline; still top-20 by downloads for education, probing, and lightweight deployment. |
| [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,033 | 50.4M | Foundational encoder; remains essential for classification, embeddings, and distillation pipelines. |
| [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,193 | 7.1M | Distilled BERT; 60% faster, 97% performance — go-to for latency-sensitive NLP. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,383 | 6.7M | Flagship multimodal LLM (image+text→text); leads weekly likes — de facto standard for open vision-language. |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,006 | 503,263 | Experimental “Flash” variant with faster attention; early testbed for next-gen Qwen architecture. |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 819 | 313,547 | DeepSeek’s experimental vision-language model; signals rivalry with Qwen in open multimodal space. |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,169 | 826,875 | Accelerated GLM-5.3 with vision; rising as Chinese-language multimodal alternative. |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,172 | 1.6M | State-of-the-art image→video & text→video diffusion; 1.6M downloads shows creator adoption. |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,046 | 5.0M | Base text-to-video / image-to-video model; ecosystem hub for fine-tunes (vdn-minimax-h3, Singularity). |
| [**WarmBloodAban/Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 172 | 58,060 | Community fine-tune of MiniMax-H3 for higher fidelity video; early sign of video model customization. |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 485 | 7,243 | End-to-end text-to-speech transformer; notable for natural prosody in Mandarin/English. |
| [**microsoft/VibeVoice-ASR-Streaming-7B**](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 153 | 1,449 | Streaming ASR from VibeVoice line; targets real-time transcription with low latency. |
| [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,251 | 20.7M | Vision-language embedding backbone; still widely used for zero-shot classification and retrieval. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, forecasting, speech)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 628 | 444,052 | Foundation model for time-series forecasting (zero-shot); trending in finance, IoT, demand planning. |
| [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,620 | 253M | Most-downloaded embedding model; default for semantic search, clustering, RAG retrieval. |
| [**dealignai/GLM-5.3-CYBERSECURITY-FP8**](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 312 | 19,433 | Domain-adapted GLM for security tasks (vuln analysis, log parsing); FP8 quantized for deployment. |
| [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 299 | 12,388 | Massively Multilingual Speech (MMS) 300M; supports 1,000+ languages for ASR/TTS research. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, FP8)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,700 | 10.7M | Official Unsloth GGUF quant (multiple bit-widths); #1 by downloads — standard for local LLM inference. |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 649 | 479,597 | Mixed-precision GSQ+RCO quantization; pushes quality/size frontier for 27B multimodal. |
| [**DavidAU/Qwen3.8-27B-TURBO-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 351 | 348,753 | Heavily merged/uncensored fine-tune; showcases “kitchen-sink” community merging culture. |
| [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 836 | 935,568 | GGUF quant of Flash-Next; enables local multimodal inference on consumer GPUs. |
| [**nvidia/Qwen3.8-Flash-Next-NVFP4**](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 155 | 26,302 | NVIDIA ModelOpt FP4 quantization; targets Blackwell/Hopper tensor cores for max throughput. |
| [**HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,023 | 1.7M | Aggressive uncensoring + MTP training; high downloads reflect demand for unrestricted multimodal. |
| [**Jackrong/Qwopus3.8-27B-Flash-GGUF**](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 149 | 113,295 | GGUF quant of Qwopus (Qwen+Opus merge); community fusion experiment. |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 816 | 299,670 | Abliterated (refusal-removed) GGUF; popular for uncensored chat/roleplay use cases. |

---

## 3. Ecosystem Signal (100–200 words)

**Qwen 3.8 has become the Linux of open multimodal AI.** Nine of thirty trending slots belong to Qwen 3.8 variants — base, Flash-Next, and a constellation of community GGUF/GSQ-RCO/NVFP4 quantizations — indicating that Alibaba’s release cadence and permissive licensing have cemented it as the default substrate for experimentation. The DeepSeek-V4-Flash-Vision and GLM-5.3-Flash entries show credible challengers emerging, but neither matches Qwen’s quantization ecosystem breadth.

**Video generation has crossed the adoption chasm.** Lightricks LTX-2.5 (1.6M downloads) and MiniMax-H3 (5M downloads) plus two active fine-tunes prove that text-to-video is no longer a research demo; creators and developers are integrating these models into workflows today. The MiniMax-H3 fine-tune cluster (vdn-minimax-h3, Singularity) mirrors the LoRA/merge culture that matured around Stable Diffusion.

**Quantization

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*