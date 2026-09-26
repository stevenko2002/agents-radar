# Hugging Face Trending Models Digest 2026-09-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-26 22:15 UTC

---

The user wants a structured digest of trending models on Hugging Face as of 2026-09-27. I need to produce a response with four sections: Today's Highlights, Trending Models (categorized), Ecosystem Signal, and Worth Exploring.

Let's first analyze the data provided. There are 30 models. I need to categorize them appropriately.

Let's list the models and assign categories:

1. convaiinnovations/laya - text-classification -> Specialized Models? Or maybe Language Models? It's text-classification, but tags: transformers, safetensors, laya, system-one, calibrated-decisions. Let's look at the pipeline: text-classification. Could be Specialized Models.
2. Qwen/Qwen-Image-2.1 - text-to-image -> Multimodal & Generation
3. abenzerps/Qwen-Image-2.1-Uncensored-GGUF - text-to-image -> Fine-tunes & Quantizations (GGUF)
4. XingChen-AGI/Xing4.0-29B-A4B - text-generation -> Language Models
5. prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation -> Fine-tunes & Quantizations (GGUF)
6. Comfy-Org/Qwen-Image-2.1 - N/A (diffusion-single-file, comfyui) -> Fine-tunes & Quantizations or Multimodal? It's a base model/finetune for ComfyUI. Let's put in Fine-tunes & Quantizations or Multimodal & Generation. Tags: base_model:Qwen/Qwen-Image-2.1. It's a ComfyUI wrapper. Probably Fine-tunes & Quantizations.
7. Altworld/Hemmingway-1 - text-generation -> Language Models (qwen3_5_text, qwen3.8)
8. Edge0/Audio8-ASR-Infinite - automatic-speech-recognition -> Multimodal & Generation (audio)
9. XiaomiMiMo/MiMo-V2.6-Pro-RL - text-generation -> Language Models
10. TaichuAI/ZDTaichu5.0-9B - image-text-to-text -> Multimodal & Generation (vision-language)
11. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B - image-text-to-text -> Multimodal & Generation
12. XiaomiMiMo/MiMo-V2.6-Flash-RL - text-generation -> Language Models
13. Qwen/Qwen3.8-27B - image-text-to-text -> Multimodal & Generation (or Language Models, but it's image-text-to-text, multimodal). Tags: qwen3_5, conversational. Let's put in Multimodal & Generation or Language Models? It's a VLM. Multimodal.
14. AlexWortega/openjev - text-classification -> Specialized Models (NLI, cross-encoder)
15. Lightricks/LTX-2.5 - image-to-video -> Multimodal & Generation
16. nvidia/Nemotron-3-Diarization - voice-activity-detection -> Specialized Models (audio)
17. deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text -> Multimodal & Generation (or Language Models? It says image-text-to-text, text-generation. Multimodal.)
18. StarDoc-AI/TeleOCR - image-text-to-text -> Specialized Models (OCR)
19. netease-youdao/Confucius4-R2T2 - automatic-speech-recognition -> Multimodal & Generation (or Specialized? ASR). Let's put in Multimodal & Generation (audio) or Specialized. ASR is somewhat specialized but also multimodal. Let's see.
20. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - image-text-to-text -> Fine-tunes & Quantizations (GGUF)
21. Viggle/Qwen-Image-2.1-viggle-turbo - text-to-image -> Fine-tunes & Quantizations (LoRA) or Multimodal? It's a LoRA. Fine-tunes.
22. yandex/AliceAI-Foundation-80B-A3B-Base - text-generation -> Language Models
23. pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF - N/A -> Fine-tunes & Quantizations (GGUF)
24. convaiinnovations/laya-multilingual - text-classification -> Specialized Models
25. Contrastive-LM/CLM-v0.1-8B - text-ranking -> Specialized Models (reranker, verifier)
26. inclusionAI/Ming-Image-0.1-Design - text-to-image -> Multimodal & Generation
27. akhilaaa3/Jev-Omni - text-classification -> Specialized Models (gemma4_unified, image-text-to-text)
28. unsloth/Qwen-Image-2.1-GGUF - text-to-image -> Fine-tunes & Quantizations
29. unsloth/Qwen3.8-27B-GGUF - N/A -> Fine-tunes & Quantizations
30. apple/LensVLM-9B - image-text-to-text -> Multimodal & Generation

Let's refine categories:

**🧠 Language Models (LLMs, chat models, instruction-tuned)**
- XingChen-AGI/Xing4.0-29B-A4B (Likes: 1,724, Downloads: 43,947) - A 29B model, likely a fine-tune or base. Tags: xing4_0, conversational.
- Altworld/Hemmingway-1 (Likes: 708, Downloads: 5,590) - Based on Qwen3.5 text, conversational.
- XiaomiMiMo/MiMo-V2.6-Pro-RL (Likes: 525, Downloads: 74,497) - RL model, multimodal tags but text-generation pipeline.
- XiaomiMiMo/MiMo-V2.6-Flash-RL (Likes: 479, Downloads: 23,000) - Flash RL model.
- yandex/AliceAI-Foundation-80B-A3B-Base (Likes: 338, Downloads: 3,336) - 80B MoE base model.
- Qwen/Qwen3.8-27B (Likes: 16,345, Downloads: 6,652,309) - Wait, pipeline is image-text-to-text, but it's a huge language model. Should it be here? The pipeline says image-text-to-text, but it's Qwen3.8-27B. It's a VLM. I'll put it in Multimodal & Generation, or maybe Language Models since it's the text backbone. Actually, the pipeline is image-text-to-text, so Multimodal is better. But I can list it in Language Models if I focus on the LLM aspect. Let's put it in Multimodal & Generation as a VLM, or maybe put it in Language Models because it's Qwen3.8-27B, a pure LLM? No, the pipeline is image-text-to-text, so it's a multimodal model. Let's keep it in Multimodal.
- deepseek-ai/DeepSeek-V4.1-Flash (Likes: 3,771, Downloads: 640,577) - Pipeline: image-text-to-text. Multimodal.
- convaiinnovations/laya (Likes: 3,882, Downloads: 0) - text-classification. Specialized.

Let's re-evaluate Qwen/Qwen3.8-27B. It has 16k likes, 6.6M downloads. It's a top model. It's a VLM (image-text-to-text). I'll put it in Multimodal & Generation.

Let's list Language Models:
- XingChen-AGI/Xing4.0-29B-A4B
- Altworld/Hemmingway-1
- XiaomiMiMo/MiMo-V2.6-Pro-RL
- XiaomiMiMo/MiMo-V2.6-Flash-RL
- yandex/AliceAI-Foundation-80B-A3B-Base
- Maybe Qwen/Qwen3.8-27B? I'll put it in Multimodal.

**🎨 Multimodal & Generation (image, video, audio, text-to-X)**
- Qwen/Qwen-Image-2.1 (text-to-image)
- Lightricks/LTX-2.5 (image-to-video)
- Edge0/Audio8-ASR-Infinite (ASR)
- TaichuAI/ZDTaichu5.0-9B (image-text-to-text, spatial reasoning)
- XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B (image-text-to-text)
- Qwen/Qwen3.8-27B (image-text-to-text, huge downloads)
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text)
- netease-youdao/Confucius4-R2T2 (ASR)
- inclusionAI/Ming-Image-0.1-Design (text-to-image)
- apple/LensVLM-9B (image-text-to-text)

**🔧 Specialized Models (code, math, medical, embeddings, classification, ranking)**
- convaiinnovations/laya (text-classification, calibrated decisions)
- AlexWortega/openjev (text-classification, NLI, cross-encoder)
- nvidia/Nemotron-3-Diarization (voice-activity-detection, audio)
- StarDoc-AI/TeleOCR (image-text-to-text, OCR)
- convaiinnovations/laya-multilingual (text-classification, multilingual)
- Contrastive-LM/CLM-v0.1-8B (text-ranking, reranker)
- akhilaaa3/Jev-Omni (text-classification, gemma4_unified)

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF
- prism-ml/Ternary-Bonsai-2-27B-gguf
- Comfy-Org/Qwen-Image-2.1
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- Viggle/Qwen-Image-2.1-viggle-turbo (LoRA)
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF
- unsloth/Qwen-Image-2.1-GGUF
- unsloth/Qwen3.8-27B-GGUF

Let's double check the counts.
Total models: 30.
Language Models: 5 (XingChen, Hemmingway, MiMo-Pro, MiMo-Flash, AliceAI). Maybe add Qwen3.8-27B here too? It's a text model, but pipeline is image-text-to-text. I'll keep it in Multimodal.
Multimodal & Generation: 10 (Qwen-Image, LTX-2.5, Audio8, ZDTaichu, MiMo-Distill, Qwen3.8-27B, DeepSeek-Flash, Confucius, Ming-Image, LensVLM).
Specialized Models: 7 (laya, openjev, Nemotron, TeleOCR, laya-multilingual, CLM, Jev-Omni).
Fine-tunes & Quantizations: 8 (abenzerps, Ternary-Bonsai, Comfy-Org, ISTA-DASLab, Viggle, pottokao, unsloth-Image, unsloth-Qwen3.8).
Total: 5 + 10 + 7 + 8 = 30. Perfect.

Now, let's write the content for each.

**Today's Highlights:**
- Qwen3.8-27B dominates with 16.3k likes and 6.6M downloads, showing massive appetite for powerful VLMs.
- Qwen-Image-2.1 ecosystem is exploding, with multiple GGUFs, ComfyUI wrappers, and LoRAs (like Viggle) taking top spots, indicating a huge community-driven push for local/uncensored image generation.
- Xiaomi's MiMo series (V2.6 Pro, Flash, Distill) shows strong traction in the competitive RL and distillation space.
- Lightricks' LTX-2.5 brings advanced image-to-video capabilities with over 1.6M downloads.
- DeepSeek-V4.1-Flash offers a strong multimodal option with 640k downloads, showing the shift towards efficient, multimodal LLMs.

**Trending Models:**

*Categories:*

**🧠 Language Models**
- **XingChen-AGI/Xing4.0-29B-A4B**: A 29B parameter conversational model gaining traction for its performance in the mid-size LLM tier. (Likes: 1,724 | Downloads: 43,947)
- **Altworld/Hemmingway-1**: A text-generation model based on Qwen3.5, tailored for conversational and creative writing tasks. (Likes: 708 | Downloads: 5,590)
- **XiaomiMiMo/MiMo-V2.6-Pro-RL**: Xiaomi's reinforcement-learning optimized model, balancing high performance with multimodal capabilities. (Likes: 525 | Downloads: 74,497)
- **XiaomiMiMo/MiMo-V2.6-Flash-RL**: A lighter, faster variant of the MiMo series, designed for low-latency multimodal applications. (Likes: 479 | Downloads: 23,000)
- **yandex/AliceAI-Foundation-80B-A3B-Base**: Yandex's massive 80B Mixture-of-Experts base model, targeting Russian and multilingual enterprise use cases. (Likes: 338 | Downloads: 3,336)

**🎨 Multimodal & Generation**
- **Qwen/Qwen-Image-2.1**: A state-of-the-art text-to-image model from Alibaba, excelling at image generation and editing. (Likes: 2,394 | Downloads: 48,361)
- **Lightricks/LTX-2.5**: A powerful diffusion model for image-to-video, text-to-video, and video-to-video generation. (Likes: 5,215 | Downloads: 1,604,804)
- **Edge0/Audio8-ASR-Infinite**: An infinite-context automatic speech recognition model supporting streaming audio transcription. (Likes: 763 | Downloads: 7,859)
- **TaichuAI/ZDTaichu5.0-9B**: A 9B vision-language model focused on spatial reasoning and complex image-text tasks. (Likes: 1,485 | Downloads: 11,063)
- **XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B**: A distilled multimodal model merging MiMo architectures with Qwen3.5 for efficient visual understanding. (Likes: 493 | Downloads: 7,905)
- **Qwen/Qwen3.8-27B**: The massive multimodal flagship from Qwen, boasting 27B parameters for advanced conversational and visual tasks. (Likes: 16,345 | Downloads: 6,652,309)
- **deepseek-ai/DeepSeek-V4.1-Flash**: DeepSeek's efficient multimodal model, optimized for fast inference and broad image-text capabilities. (Likes: 3,771 | Downloads: 640,577)
- **netease-youdao/Confucius4-R2T2**: An automatic speech recognition model tailored for Chinese and multilingual ASR scenarios. (Likes: 426 | Downloads: 7,155)
- **inclusionAI/Ming-Image-0.1-Design**: A text-to-image model specifically fine-tuned for design and UI/UX asset generation. (Likes: 253 | Downloads: 0)
- **apple/LensVLM-9B**: Apple's 9B vision-language model, optimized for on-device visual understanding and Q&A. (Likes: 225 | Downloads: 1,432)

**🔧 Specialized Models**
- **convaiinnovations/laya**: A calibrated text-classification model designed for high-stakes decision-making and system-one tasks. (Likes: 3,882 | Downloads: 0)
- **AlexWortega/openjev**: A legal-oriented NLI and cross-encoder model for semantic text classification and entailment. (Likes: 594 | Downloads: 0)
- **nvidia/Nemotron-3-Diarization**: NVIDIA's audio model for speaker diarization and voice-activity detection in complex conversations. (Likes: 370 | Downloads: 19,620)
- **StarDoc-AI/TeleOCR**: A specialized OCR model built on Qwen2.5-VL for high-accuracy text extraction from images and documents. (Likes: 392 | Downloads: 26,152)
- **convaiinnovations/laya-multilingual**: The multilingual extension of Laya, supporting cross-lingual text classification using MMBert. (Likes: 292 | Downloads: 0)
- **Contrastive-LM/CLM-v0.1-8B**: A contrastive learning-based verifier and reranker model for improving retrieval and ranking quality. (Likes: 260 | Downloads: 434)
- **akhilaaa3/Jev-Omni**: A unified Gemma-based model handling both image-text-to-text and text-classification tasks. (Likes: 254 | Downloads: 128)

**📦 Fine-tunes & Quantizations**
- **abenzerps/Qwen-Image-2.1-Uncensored-GGUF**: An uncensored GGUF quantized version of Qwen-Image, enabling local, unrestricted image generation. (Likes: 1,924 | Downloads: 87

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*