# Hugging Face Trending Models Digest 2026-10-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-30 22:16 UTC

---

## Hugging Face Trending Models Digest — 2026-10-01

### 1. Today's Highlights

The Hugging Face Hub is dominated this week by the Qwen ecosystem: **Qwen3.8-27B** leads all models with 16,650 likes and over 7 million downloads, while **Qwen-Image-2.1** has spawned a wave of community fine-tunes, quantizations, and ComfyUI adaptations. Video generation is also surging with **Lightricks/LTX-2.5** drawing 5,708 likes and 1.6 million downloads. A notable new trend is the rise of decision-oriented models like **convaiinnovations/laya** and **fastino/GLiNER2.5-Decide**, which focus on calibrated classification rather than text generation. Quantization remains highly active, with GGUF and ternary (2-bit) formats appearing across language, vision, and multimodal models.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — Author: XingChen-AGI | Likes: 1,816 | Downloads: 47,613  
  A 29B-parameter conversational LLM with 4B active parameters, trending for its efficient sparse architecture and strong chat performance.

- **[orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)** — Author: orcarouter | Likes: 226 | Downloads: 2,456  
  A 27B text-generation model based on Qwen3.8, optimized for vLLM serving and gaining attention as a compact alternative to larger models.

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Author: Altworld | Likes: 786 | Downloads: 8,524  
  A Qwen3.8-based text-generation model with a literary style, trending for its creative writing and narrative capabilities.

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — Author: XiaomiMiMo | Likes: 613 | Downloads: 80,958  
  Xiaomi's reinforcement-learning-trained MiMo model, popular for its balanced performance across reasoning and instruction following.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Author: Qwen | Likes: 16,650 | Downloads: 7,038,259  
  The flagship multimodal LLM of the week, leading the Hub with massive downloads and strong image-text-to-text performance.

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Author: Qwen | Likes: 2,718 | Downloads: 70,687  
  Alibaba's latest text-to-image model, trending as the base for numerous community adaptations and fine-tunes across the ecosystem.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Author: Lightricks | Likes: 5,708 | Downloads: 1,602,348  
  A versatile video generation model supporting image-to-video, text-to-video, and video-to-video tasks, one of the week's most downloaded models.

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — Author: deepseek-ai | Likes: 3,937 | Downloads: 721,211  
  DeepSeek's latest multimodal flash model, combining fast inference with strong vision-language capabilities and high community interest.

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — Author: XingChen-AGI | Likes: 1,088 | Downloads: 30,383  
  A Qwen2.5-VL-based OCR specialist, trending for accurate document and scene text extraction from images.

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — Author: TaichuAI | Likes: 2,322 | Downloads: 12,139  
  A 9B multimodal vision-language model with spatial reasoning focus, popular for its compact size and strong visual understanding.

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** — Author: apple | Likes: 277 | Downloads: 2,103  
  Apple's Qwen3.5-based vision-language model, trending as a rare Apple release on the Hub with solid multimodal capabilities.

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — Author: XiaomiMiMo | Likes: 582 | Downloads: 12,085  
  A distilled 9B multimodal model from Xiaomi, trending for bringing Qwen-level performance to a lightweight footprint.

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — Author: inclusionAI | Likes: 357 | Downloads: 0  
  A custom text-to-image model with a design-focused style, trending among creative communities despite having no public downloads yet.

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Author: Edge0 | Likes: 1,820 | Downloads: 26,749  
  An automatic speech recognition model with streaming support, popular for real-time transcription and multilingual audio processing.

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — Author: nvidia | Likes: 558 | Downloads: 36,386  
  NVIDIA's speaker diarization and voice-activity-detection model, trending for its accuracy in multi-speaker audio segmentation.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — Author: convaiinnovations | Likes: 4,673 | Downloads: 0  
  A calibrated decision model for text classification, one of the week's most-liked models despite zero downloads, signaling high conceptual interest.

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Author: Contrastive-LM | Likes: 572 | Downloads: 2,392  
  An 8B contrastive learning model for text ranking and verification, trending as a reranker for retrieval-augmented generation pipelines.

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — Author: SupersonicLabs | Likes: 316 | Downloads: 2,201  
  A multilingual text-classification decision model, popular for its straightforward integration into business rule and intent detection systems.

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — Author: fastino | Likes: 259 | Downloads: 34,664  
  A token-classification model for named entity extraction and intent recognition, trending as a lightweight alternative to large LLMs for structured extraction.

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — Author: akhilaaa3 | Likes: 328 | Downloads: 1,132  
  A Gemma4-based multimodal classifier, trending for unifying image and text inputs in a single text-classification pipeline.

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** — Author: PSRben | Likes: 226 | Downloads: 137  
  An image classification model based on a recent arXiv paper, gaining attention in the computer vision community for its novel architecture.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — Author: abenzerps | Likes: 2,560 | Downloads: 1,232,685  
  A GGUF-quantized, uncensored version of Qwen-Image-2.1, highly popular in the ComfyUI community for unrestricted image generation.

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** — Author: unsloth | Likes: 315 | Downloads: 302,158  
  Unsloth's official GGUF quantization of Qwen-Image-2.1, trending for its efficiency and ease of use with llama.cpp-compatible tools.

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — Author: ISTA-DASLab | Likes: 1,856 | Downloads: 1,679,903  
  A mixed-precision GGUF quantization of Qwen3.8-27B using GSQ and RCO techniques, popular for preserving quality at reduced size.

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — Author: prism-ml | Likes: 2,304 | Downloads: 3,676,692  
  A ternary (2-bit) GGUF quantization of a 27B model, one of the most downloaded models this week, showcasing extreme compression for LLMs.

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Author: Comfy-Org | Likes: 867 | Downloads: 5,032,483  
  The official ComfyUI-adapted version of Qwen-Image-2.1, the most downloaded model on this list, reflecting the ComfyUI community's massive adoption.

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Author: Viggle | Likes: 453 | Downloads: 205,137  
  A LoRA fine-tune of Qwen-Image-2.1 optimized for speed and image-to-image tasks, trending among users needing fast inference.

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — Author: orcarouter | Likes: 192 | Downloads: 7,186  
  An uncensored GGUF version of OrcaSAQ-2-27B, gaining niche popularity for unrestricted text generation with llama.cpp.

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** — Author: akatz-ai | Likes: 191 | Downloads: 8,078  
  A LoRA fine-tune for character swapping in video, trending within the video editing community for its creative face-swap capabilities.

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Author: Alissonerdx | Likes: 1,055 | Downloads: 168,110  
  A LoRA-based face swap model built on Qwen-Image-2.1, popular for high-quality, production-ready face replacement in images.

### 3. Ecosystem Signal

The Hugging Face ecosystem in late 2026 is heavily driven by **Qwen family momentum**, with Qwen3.8-27B and Qwen-Image-2.1 serving as base models for a wide array of community derivatives — LoRA fine-tunes, GGUF quantizations, ComfyUI adaptations, and uncensored variants. This indicates that open-weight models from Alibaba have become the de facto standard for both language and vision tasks, much as Llama dominated earlier years. DeepSeek and Xiaomi are also establishing strong footholds: DeepSeek-V4.1-Flash combines multimodal input with efficient inference, while MiMo models target edge and distilled deployments.

All 30 trending models are **open-weight**, reinforcing the continued preference for open ecosystems over proprietary APIs in the community. Quantization activity is exceptionally high — GGUF, ternary (2-bit), and mixed-precision formats are appearing not only for LLMs but also for diffusion and multimodal models, reflecting a push toward local deployment and consumer hardware. Fine-tuning is equally vibrant, with many LoRA adapters for image and video generation. A subtle but notable trend is the rise of **decision and classification models** (laya, GLiNER2.5-Decide, Julia-1), suggesting a shift from monolithic generative chatbots toward more structured, low-latency, task-specific solutions.

### 4. Worth Exploring

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   As the week's most-liked and most-downloaded multimodal LLM, it offers a rare combination of strong vision-language performance, mature tooling, and a huge ecosystem of quantized and fine-tuned variants. Ideal for exploring state-of-the-art open multimodal capabilities.

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   With 5,708 likes and 1.6 million downloads, this video generation model is worth studying for its versatility across image-to-video, text-to-video, and video-to-video tasks. It represents a key direction in creative AI and is backed by a strong producer community.

3. **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**  
   A novel 8B verifier/reranker trained with contrastive learning, it is well-suited for improving retrieval-augmented generation and reasoning pipelines. Its small size and specialized role make it an interesting companion to larger, generative models.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*