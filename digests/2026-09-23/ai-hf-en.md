# Hugging Face Trending Models Digest 2026-09-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-22 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-23

## 1. Today’s Highlights
Qwen’s ecosystem is the clearest center of gravity today: **Qwen/Qwen3.8-27B** leads the board with 16,071 likes and 7.08M downloads, while **Qwen3.8-Flash-Next**, **Qwen-Image-2.1**, and many community derivatives amplify the family. Video and image generation continue to drive massive engagement, led by **MiniMax-H3** (5,596 likes; 3.77M downloads), **LTX-2.5**, and **Qwen-Image-2.1**. Quantization is no longer secondary: **unsloth/Qwen3.8-27B-GGUF** (4,522 likes; 7.02M downloads) and **prism-ml/Ternary-Bonsai-2-27B-gguf** show strong demand for efficient local inference. **DeepSeek-V4.1-Flash** and a wave of compact MiMo, MiniCPM, and NeoHorse models indicate sustained interest in open-weight LLMs and multimodal chat. Meanwhile, specialized classifiers and NLI cross-encoders are finding niche traction.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Author: Qwen | Likes: 16,071 | Downloads: 7,079,646. A flagship multimodal-capable Qwen LLM and the most-liked model in this snapshot, driving a large derivative ecosystem.
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Author: Qwen | Likes: 5,599 | Downloads: 787,525. An experimental Qwen “Flash” image-text-to-text model that signals the next generation of Qwen chat and reasoning.
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — Author: deepseek-ai | Likes: 3,608 | Downloads: 542,014. DeepSeek’s latest Flash multimodal LLM, trending for strong open-weight text and image-text capabilities.
- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — Author: openbmb | Likes: 1,663 | Downloads: 508,950. A compact 2B text-generation model popular for efficient local chat and edge deployment.
- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — Author: XingChen-AGI | Likes: 1,367 | Downloads: 30,627. A 29B conversational text-generation model with an efficient active-parameter design.
- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — Author: TokenRhythm | Likes: 1,008 | Downloads: 12,574. A 9B agentic text-generation model built on Qwen-style architecture.
- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — Author: XiaomiMiMo | Likes: 381 | Downloads: 985. Xiaomi’s Pro RL-tuned multimodal LLM, part of a coordinated MiMo-V2.6 release wave.
- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — Author: XiaomiMiMo | Likes: 377 | Downloads: 2,641. A faster RL-tuned MiMo variant aimed at responsive multimodal text generation.
- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — Author: XiaomiMiMo | Likes: 335 | Downloads: 804. A distilled 9B Qwen-based MiMo model for lighter image-text-to-text workloads.
- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — Author: yandex | Likes: 275 | Downloads: 1,516. Yandex’s 80B MoE base LLM with custom code, representing a major open-weight foundation release.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — Author: MiniMaxAI | Likes: 5,596 | Downloads: 3,766,997. A high-download image-text-to-video model that is one of the strongest video-generation releases on the Hub.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Author: Lightricks | Likes: 4,781 | Downloads: 1,630,125. A diffusion-single-file video model supporting image-to-video, text-to-video, and video-to-video.
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Author: Qwen | Likes: 1,786 | Downloads: 16,242. Qwen’s latest image-generation and editing model, trending as a core multimodal asset.
- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — Author: m-a-p | Likes: 969 | Downloads: 20,904. A 3B text-to-audio music-generation model with symbolic planning and agentic editing.
- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Author: Comfy-Org | Likes: 566 | Downloads: 1,429,925. A ComfyUI-ready diffusion single-file repackage of Qwen-Image-2.1, heavily used for local image workflows.
- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — Author: netease-youdao | Likes: 263 | Downloads: 2,729. A Qwen-based ASR model for speech recognition, part of the Confucius4 audio line.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — Author: convaiinnovations | Likes: 2,507 | Downloads: 0. A text-classification model focused on system-one and calibrated decisions, trending despite zero downloads.
- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — Author: harshatheg | Likes: 543 | Downloads: 0. An MLX-optimized 1B model for structured, parallel, and constrained decoding on Apple Silicon.
- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — Author: AlexWortega | Likes: 483 | Downloads: 0. A Qwen3.5-based NLI cross-encoder for text-classification and semantic matching.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — Author: unsloth | Likes: 4,522 | Downloads: 7,019,401. Unsloth’s GGUF quantization of Qwen3.8-27B, one of the most-downloaded local inference packages today.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — Author: prism-ml | Likes: 1,875 | Downloads: 2,569,604. A ternary 2-bit GGUF model demonstrating extreme compression for llama.cpp users.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — Author: ISTA-DASLab | Likes: 1,578 | Downloads: 1,363,176. A mixed-precision GSQ-RCO GGUF quantization of Qwen3.8-27B for efficient inference.
- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — Author: DavidAU | Likes: 1,083 | Downloads: 1,397,909. A heavily fine-tuned, uncensored GGUF Qwen3.8 variant aimed at coding and unrestricted local use.
- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — Author: abenzerps | Likes: 1,072 | Downloads: 182,313. An uncensored ComfyUI GGUF repackage of Qwen-Image-2.1 for local image generation.
- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — Author: WarmBloodAban | Likes: 619 | Downloads: 283,359. A community image-to-video fine-tune/derivative of MiniMax-H3 with strong local video interest.
- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — Author: ukisai | Likes: 549 | Downloads: 17,256. A Swift-tuned Qwen3.8-27B variant for efficient multimodal text generation.
- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Author: Altworld | Likes: 492 | Downloads: 2,745. A Qwen3.5/3.8-based community text-generation fine-tune with a literary naming theme.
- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — Author: ukisai | Likes: 363 | Downloads: 153,942. A GGUF build of the Swift Qwen3.8-27B model for efficient-thinking local deployment.
- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — Author: prism-ml | Likes: 336 | Downloads: 43,477. An MLX 2-bit ternary version of Bonsai, targeting Apple Silicon local inference.
- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — Author: ISTA-DASLab | Likes: 241 | Downloads: 67,988. A mixed-precision GSQ-RCO GGUF quantization of Qwen3.8-Flash-Next.

## 3. Ecosystem Signal
Qwen is the dominant family in this snapshot, spanning flagship LLMs, multimodal image-text models, image generation, and a dense derivative ecosystem. Qwen3.8-27B’s 16k likes and 7M downloads, plus Qwen3.8-Flash-Next, Qwen-Image-2.1, and many GGUF/MLX repackages, show how quickly a base model becomes a platform. Open-weight releases dominate the chart; the strongest branded foundation models from Yandex, MiniMax, DeepSeek, Xiaomi, and openbmb are all distributed openly. Quantization and efficient inference are major trends: GGUF, MLX, 2-bit ternary, and GSQ-RCO mixed-precision variants appear repeatedly, often with downloads far exceeding likes. Video generation is the strongest multimodal category by downloads, with MiniMax-H3 and LTX-2.5 leading. Community fine-tunes remain active, especially uncensored, heretic, and Qwen-derivative builds. Overall, the ecosystem favors open weights, aggressive compression, and Qwen-centered reuse.

## 4. Worth Exploring
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The top model by likes and downloads, and the clearest base for studying current multimodal LLM behavior and derivative ecosystems.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — A leading video-generation release with 3.77M downloads, ideal for understanding the image-text-to-video state of the art.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — A high-impact ternary 2-bit GGUF model worth studying for extreme quantization, local inference, and compression trade-offs.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*