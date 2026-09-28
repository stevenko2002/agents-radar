# Hugging Face Trending Models Digest 2026-09-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-28 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-29

## 1. Today's Highlights
Qwen3.8-27B is the clear breakout, with 16,494 weekly likes and 6.84M downloads, while Qwen-Image-2.1 anchors a broad image-generation ecosystem across base, ComfyUI, LoRA turbo, and GGUF/FP8 variants. Video generation remains hot via Lightricks/LTX-2.5, which leads the video category with 5,416 likes and 1.6M downloads. Quantization is a major theme: ternary 2-bit, mixed-precision GSQ-RCO, and GGUF releases are targeting local and efficient inference. Specialized models such as laya, Audio8-ASR-Infinite, Nemotron-3-Diarization, and TeleOCR show strong demand for task-specific systems. Overall, open-weight multimodal and aggressively optimized releases dominate this week’s trend.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat, instruction-tuned)
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Author: Qwen | Likes: 16,494 | Downloads: 6,844,348. Qwen’s flagship 27B image-text-to-text conversational model, leading the list in both likes and downloads and driving open multimodal LLM adoption.
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — Author: deepseek-ai | Likes: 3,860 | Downloads: 668,537. DeepSeek’s V4.1 Flash multimodal text-generation model, trending for strong performance and rapid download adoption.
- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — Author: XingChen-AGI | Likes: 1,799 | Downloads: 45,834. A 29B-A4B conversational text-generation model, signaling growing interest in new Chinese LLM families.
- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — Author: XiaomiMiMo | Likes: 582 | Downloads: 76,518. Xiaomi’s RL-tuned MiMo V2.6 Pro text-generation model, with downloads indicating production and local experimentation.
- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — Author: XiaomiMiMo | Likes: 511 | Downloads: 28,842. A lighter Flash-RL variant of MiMo V2.6, offering an efficient multimodal text-generation option.
- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Author: Altworld | Likes: 763 | Downloads: 7,478. A Qwen3.8-family text-generation model, trending as a community-oriented writing/chat fine-tune.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Author: Lightricks | Likes: 5,416 | Downloads: 1,595,377. A single-file diffusion video model supporting image-to-video, text-to-video, and video-to-video, and the top video-generation release here.
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Author: Qwen | Likes: 2,585 | Downloads: 58,693. The official Qwen text-to-image and image-editing diffusion model, serving as the base for many downstream variants.
- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Author: Comfy-Org | Likes: 825 | Downloads: 4,351,753. A ComfyUI single-file packaging of Qwen-Image-2.1, with huge downloads showing ComfyUI’s distribution power.
- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Author: Viggle | Likes: 377 | Downloads: 175,907. A LoRA turbo variant for faster text-to-image and image-to-image generation.
- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — Author: inclusionAI | Likes: 325 | Downloads: 0. A text-to-image design-focused diffusion model, showing early community interest despite zero recorded downloads.
- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Author: Edge0 | Likes: 1,374 | Downloads: 19,963. A streaming automatic-speech-recognition model, trending for continuous/infinite ASR use cases.
- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — Author: nvidia | Likes: 455 | Downloads: 26,428. NVIDIA’s NeMo-based audio-frame-classification and diarization model for speaker and voice-activity tasks.
- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — Author: netease-youdao | Likes: 444 | Downloads: 9,336. A Qwen3-ASR-based speech-recognition model, adding to the strong ASR activity this week.
- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — Author: XingChen-AGI | Likes: 758 | Downloads: 27,904. A Qwen2.5-VL-based OCR image-text-to-text model, trending for document and text-extraction workflows.
- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — Author: TaichuAI | Likes: 1,705 | Downloads: 11,738. A multimodal vision-language model with spatial-reasoning focus, notable for specialized VLM capability.
- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — Author: XiaomiMiMo | Likes: 549 | Downloads: 9,994. A distilled Qwen3.5-based vision-language model, targeting efficient multimodal inference.
- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** — Author: apple | Likes: 261 | Downloads: 1,840. Apple’s Qwen3.5-based vision-language model, attracting early research attention.
- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — Author: akhilaaa3 | Likes: 295 | Downloads: 577. A Gemma4-unified image-text-to-text and text-classification omni model, exploring unified multimodal classification.

### 🔧 Specialized Models (code, math, medical, embeddings)
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — Author: convaiinnovations | Likes: 4,296 | Downloads: 0. A text-classification model for system-one calibrated decisions, topping weekly likes despite zero downloads, which suggests strong benchmark or community curiosity.
- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** — Author: convaiinnovations | Likes: 321 | Downloads: 0. A multilingual mmBERT-based laya variant extending calibrated classification across languages.
- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Author: Contrastive-LM | Likes: 464 | Downloads: 1,271. A contrastive-learning verifier and reranker for text-ranking, aimed at retrieval and verification pipelines.
- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — Author: fastino | Likes: 228 | Downloads: 24,250. A GLiNER2.5 token-classification extractor and intent-classification model for information extraction.
- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — Author: AlexWortega | Likes: 618 | Downloads: 0. A Qwen3.5-based NLI cross-encoder, trending for entailment and verification tasks.
- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — Author: SupersonicLabs | Likes: 258 | Downloads: 1,006. A multilingual decision-model text-classification system for structured decision tasks.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — Author: abenzerps | Likes: 2,251 | Downloads: 1,062,921. An uncensored GGUF fine-tune of Qwen-Image-2.1, with massive downloads showing demand for local and uncensored image generation.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — Author: prism-ml | Likes: 2,233 | Downloads: 3,457,124. A 2-bit ternary GGUF text-generation model, highlighting strong interest in extreme quantization and efficient local inference.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — Author: ISTA-DASLab | Likes: 1,805 | Downloads: 1,655,818. A mixed-precision GSQ-RCO GGUF quantization of Qwen3.8-27B, combining high compression with flagship-model capability.
- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** — Author: unsloth | Likes: 285 | Downloads: 220,231. Unsloth’s GGUF quantization of Qwen-Image-2.1, aimed at accessible local image generation.
- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** — Author: pottokao | Likes: 311 | Downloads: 158,806. An FP8/GGUF text-encoder quantization for Qwen-Image-2.1, optimized for ComfyUI workflows.

## 3. Ecosystem Signal
The Qwen family is the clearest momentum center: Qwen3.8-27B leads overall adoption, while Qwen-Image-2.1 appears in official, ComfyUI, LoRA, GGUF, FP8, and uncensored variants. Xiaomi’s MiMo V2.6 line (Pro, Flash, Distill) and DeepSeek V4.1 Flash show that open-weight multimodal LLMs are competing on both capability and efficiency. Video generation is consolidating around single-file diffusion releases like LTX-2.5, and ComfyUI remains a major distribution channel. Quantization activity is unusually strong: ternary 2-bit, mixed-precision GSQ-RCO, and GGUF builds for image and text models are pulling millions of downloads, signaling a local-inference-first audience. Specialized models also matter: laya’s high likes with zero downloads suggest benchmark or community curiosity, while ASR, diarization, OCR, reranking, and NLI models fill task-specific gaps. Overall, the ecosystem is favoring open weights, aggressive post-training and quantization, and multimodal endpoints over single-purpose text-only releases.

## 4. Worth Exploring
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The highest-liked and most-downloaded model in this digest, and a strong base for studying state-of-the-art open multimodal LLM behavior, fine-tuning, and quantization.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The leading video-generation release here, with broad image-to-video, text-to-video, and video-to-video support and strong adoption metrics.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — A 2-bit ternary GGUF model with 3.46M downloads, making it especially worth studying for extreme quantization, memory efficiency, and local deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*