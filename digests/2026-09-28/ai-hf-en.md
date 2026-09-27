# Hugging Face Trending Models Digest 2026-09-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-27 22:15 UTC

---

The user wants a structured digest of trending models on Hugging Face Hub as of 2026-09-28, based on the provided list of 30 models. I need to generate:

1. **Today's Highlights** — 3-5 sentences on the most notable model releases and trends.
2. **Trending Models** — Organized by category, each with:
   - Model name (with HF link)
   - Author, likes, downloads
   - One sentence: what it is, why it's trending
   Categories:
   - 🧠 Language Models (LLMs, chat models, instruction-tuned)
   - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
   - 🔧 Specialized Models (code, math, medical, embeddings)
   - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
3. **Ecosystem Signal** — 100-200 words analyzing model ecosystem trends.
4. **Worth Exploring** — 2-3 models most worth trying or studying, with reasoning.

Style: English, concise and professional, preserve all HuggingFace links.

First, I need to categorize the 30 models into the specified categories.

Let's list the models and their pipelines:

1. convaiinnovations/laya - text-classification
2. abenzerps/Qwen-Image-2.1-Uncensored-GGUF - text-to-image
3. Qwen/Qwen-Image-2.1 - text-to-image
4. XingChen-AGI/Xing4.0-29B-A4B - text-generation
5. Edge0/Audio8-ASR-Infinite - automatic-speech-recognition
6. Altworld/Hemmingway-1 - text-generation
7. prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation
8. XiaomiMiMo/MiMo-V2.6-Pro-RL - text-generation
9. Comfy-Org/Qwen-Image-2.1 - N/A (but it's a diffusion model for image generation, based on tags: diffusion-single-file, comfyui)
10. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B - image-text-to-text
11. StarDoc-AI/TeleOCR - image-text-to-text
12. XiaomiMiMo/MiMo-V2.6-Flash-RL - text-generation
13. TaichuAI/ZDTaichu5.0-9B - image-text-to-text
14. Qwen/Qwen3.8-27B - image-text-to-text (but it's a large language model, tags: transformers, safetensors, qwen3_5, image-text-to-text, conversational - so it's a VLM? Actually, pipeline says image-text-to-text, but it might be a text model? Wait, Qwen3.8-27B is likely a text model, but the pipeline is listed as image-text-to-text. I'll check the tags: "qwen3_5" might be a typo for Qwen3.5? But it's Qwen3.8-27B. It could be a multimodal model. However, the pipeline is image-text-to-text, so I'll treat it as multimodal or language model? Let's see the categories: "🧠 Language Models (LLMs, chat models, instruction-tuned)" and "🎨 Multimodal & Generation". Since it's image-text-to-text, it might be multimodal. But Qwen3.8-27B is likely a text LLM. Actually, looking at the tags: "transformers, safetensors, qwen3_5, image-text-to-text, conversational" - "qwen3_5" might be a mistake, and it's a text model. But the pipeline says image-text-to-text. I need to decide. Similarly, other models.

To be safe, I'll categorize based on the pipeline and tags.

Let's go through each model and assign a category.

Category definitions:
- 🧠 Language Models: text-generation, text-classification (if it's an LLM for text), conversational, etc. But text-classification could be specialized. The category says "LLMs, chat models, instruction-tuned". So, primarily text-generation and similar.
- 🎨 Multimodal & Generation: image, video, audio, text-to-X. Includes text-to-image, image-to-video, automatic-speech-recognition, image-text-to-text (if it's multimodal), etc.
- 🔧 Specialized Models: code, math, medical, embeddings. But we have text-classification, token-classification, text-ranking, etc. These might be specialized. Also, models like TeleOCR (OCR) are specialized.
- 📦 Fine-tunes & Quantizations: community fine-tunes, GGUF, AWQ. Models that are quantized or fine-tunes of other models.

Now, let's categorize each model:

1. convaiinnovations/laya - text-classification. This could be a specialized model for classification, or it might be an LLM? Tags: transformers, safetensors, laya, system-one, calibrated-decisions. It might be a specialized classifier. I'll put it in Specialized Models or Language Models? Since it's text-classification, it could be a language model for classification. But the category "Language Models" is for LLMs, chat models. This might be a smaller model. I'll check: "convaiinnovations" might be a company. It could be a specialized model. Let's see the tags: "calibrated-decisions" suggests it's for decision-making. I'll put it in Specialized Models.

But wait, the user said "Specialized Models (code, math, medical, embeddings)". Text-classification might not fit there perfectly. Perhaps I should have a broader category. The user specified categories, so I need to fit them in.

Perhaps "Specialized Models" can include classification, ranking, etc. I'll do that.

Alternatively, for text-classification, if it's based on an LLM, it could be in Language Models. But let's see the pipeline: text-classification. It might be a BERT-like model. I'll put it in Specialized Models.

2. abenzerps/Qwen-Image-2.1-Uncensored-GGUF - text-to-image. This is a quantized version (GGUF) of an image model. So, it could be in Multimodal & Generation or Fine-tunes & Quantizations. Since it's a GGUF, it's a quantization, so I'll put it in Fine-tunes & Quantizations.

3. Qwen/Qwen-Image-2.1 - text-to-image. This is the base model for image generation. Multimodal & Generation.

4. XingChen-AGI/Xing4.0-29B-A4B - text-generation. This is an LLM. Language Models.

5. Edge0/Audio8-ASR-Infinite - automatic-speech-recognition. Audio, so Multimodal & Generation.

6. Altworld/Hemmingway-1 - text-generation. LLM. Language Models.

7. prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation, GGUF. Quantized LLM. Fine-tunes & Quantizations.

8. XiaomiMiMo/MiMo-V2.6-Pro-RL - text-generation. LLM. Language Models.

9. Comfy-Org/Qwen-Image-2.1 - N/A, but it's a diffusion model for image generation. Multimodal & Generation.

10. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B - image-text-to-text. This is a multimodal model (vision-language). Multimodal & Generation.

11. StarDoc-AI/TeleOCR - image-text-to-text, OCR. Specialized model for OCR. Specialized Models.

12. XiaomiMiMo/MiMo-V2.6-Flash-RL - text-generation. LLM. Language Models.

13. TaichuAI/ZDTaichu5.0-9B - image-text-to-text, multimodal. Multimodal & Generation.

14. Qwen/Qwen3.8-27B - image-text-to-text. This is likely a large vision-language model. But the tags say "conversational", so it might be an LLM with vision? Actually, Qwen3.8-27B: I think Qwen models are text models, but this pipeline says image-text-to-text. Perhaps it's a multimodal version. I'll put it in Multimodal & Generation.

15. Contrastive-LM/CLM-v0.1-8B - text-ranking. This is a specialized model for ranking. Specialized Models.

16. nvidia/Nemotron-3-Diarization - voice-activity-detection. Audio, Multimodal & Generation.

17. Lightricks/LTX-2.5 - image-to-video. Video generation. Multimodal & Generation.

18. Viggle/Qwen-Image-2.1-viggle-turbo - text-to-image. Image generation. Multimodal & Generation.

19. inclusionAI/Ming-Image-0.1-Design - text-to-image. Image generation. Multimodal & Generation.

20. AlexWortega/openjev - text-classification. Specialized model for NLI? Tags: nli, cross-encoder. Specialized Models.

21. pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF - N/A, but it's a GGUF for text encoder. Fine-tunes & Quantizations.

22. netease-youdao/Confucius4-R2T2 - automatic-speech-recognition. ASR. Multimodal & Generation.

23. yandex/AliceAI-Foundation-80B-A3B-Base - text-generation. LLM. Language Models.

24. akhilaaa3/Jev-Omni - text-classification, but tags include image-text-to-text, gemma4_unified. It might be a multimodal classifier. I'll put it in Specialized Models or Multimodal? Pipeline is text-classification, so probably specialized.

25. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - image-text-to-text, GGUF. Quantized model. Fine-tunes & Quantizations.

26. unsloth/Qwen-Image-2.1-GGUF - text-to-image, GGUF. Fine-tunes & Quantizations.

27. deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text. Multimodal model? DeepSeek-V4.1-Flash: likely a text model, but pipeline says image-text-to-text. Tags: text-generation, image-text-to-text. It might be a multimodal model. I'll put it in Multimodal & Generation.

28. apple/LensVLM-9B - image-text-to-text. Vision-language model. Multimodal & Generation.

29. convaiinnovations/laya-multilingual - text-classification. Specialized model.

30. fastino/GLiNER2.5-Decide - token-classification. Specialized model for NER and intent classification.

Now, I need to organize them into the four categories.

First, 🧠 Language Models: text-generation models that are LLMs.

From the list:
- XingChen-AGI/Xing4.0-29B-A4B (text-generation)
- Altworld/Hemmingway-1 (text-generation)
- XiaomiMiMo/MiMo-V2.6-Pro-RL (text-generation)
- XiaomiMiMo/MiMo-V2.6-Flash-RL (text-generation)
- yandex/AliceAI-Foundation-80B-A3B-Base (text-generation)

Also, perhaps Qwen/Qwen3.8-27B? But it's image-text-to-text, so I put it in multimodal. Similarly, DeepSeek-V4.1-Flash is image-text-to-text.

What about models like prism-ml/Ternary-Bonsai-2-27B-gguf? It's text-generation, but it's a GGUF, so I put it in Fine-tunes & Quantizations.

So, for Language Models, I'll include the pure text-generation models that are not quantized or fine-tuned versions? But the category is for LLMs, so even if it's a fine-tune, if it's an LLM, it could go here. But the user has a separate category for Fine-tunes & Quantizations. So, I should put base models and fine-tuned LLMs in Language Models, and quantized versions in Fine-tunes? But the user said "Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)". So, models that are specifically quantized or are community fine-tunes should go there.

For example, XingChen-AGI/Xing4.0-29B-A4B is a text-generation model, probably a fine-tune or base? It might be a community model. But it's not explicitly a quantization. I'll put it in Language Models.

Similarly, Altworld/Hemmingway-1 is text-generation, likely a fine-tune of Qwen? Tags: qwen3_5_text, so it's a fine-tune. But it's not a quantization. The Fine-tunes category is for "community fine-tunes, GGUF, AWQ". So, community fine-tunes should go there? Let's read the user's instruction: "📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)". So, models that are fine-tunes by the community, or quantized models.

But many models are fine-tunes. For example, Hemmingway-1 is a fine-tune of Qwen. So, it should go in Fine-tunes? But it's also an LLM. I need to decide.

To avoid overlap, I'll put models that are primarily known as quantized versions or explicit community fine-tunes in the Fine-tunes category, and base models or official releases in their respective categories.

Let's list models that are clearly quantized or community fine-tunes:

- abenzerps/Qwen-Image-2.1-Uncensored-GGUF - GGUF, so Fine-tunes & Quantizations
- prism-ml/Ternary-Bonsai-2-27B-gguf - GGUF, Fine-tunes & Quantizations
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF - GGUF, Fine-tunes & Quantizations
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - GGUF, Fine-tunes & Quantizations
- unsloth/Qwen-Image-2.1-GGUF - GGUF, Fine-tunes & Quantizations

Also, models like Viggle/Qwen-Image-2.1-viggle-turbo is a fine-tune (LoRA) of Qwen-Image, so it could be in Fine-tunes? But it's text-to-image, so Multimodal. I'll put it in Multimodal since it's a generation model, and the fine-tune aspect is secondary.

Similarly, Comfy-Org/Qwen-Image-2.1 is a version for ComfyUI, so it might be a fine-tune or conversion. But it's listed as N/A pipeline, and tags include base_model:Qwen/Qwen-Image-2.1, so it's a derivative. I'll put it in Multimodal.

For text models, if they are fine-tunes like Hemmingway-1, I should put them in Fine-tunes? But the user might expect LLMs in Language Models. Let's see the examples: the user has "XingChen-AGI/Xing4.0-29B-A4B" which is a text-generation model, and it's likely a fine-tune. I think I should categorize based on the primary function.

To simplify, I'll use the following:

- 🧠 Language Models: models with pipeline text-generation that are not primarily quantized or fine-tuned versions of other models? But that's hard.

Perhaps I should include all text-generation models in Language Models, and if they are quantized, also mention in Fine-tunes, but that would duplicate.

The user said "Organized by category", so each model should appear only once in one category.

I need to assign each model to one category.

Let's define:

- 🧠 Language Models: LLMs for text generation, conversation, etc. Includes instruction-tuned models. Exclude quantized versions if they are in Fine-tunes.

- 🎨 Multimodal & Generation: models for image, video, audio generation, and multimodal models (image-text-to-text, etc.). Includes ASR, text-to-image, etc.

- 🔧 Specialized Models: models for specific tasks like classification, ranking, OCR, NER, etc. Not primarily generation or multimodal.

- 📦 Fine-tunes & Quantizations: models that are explicitly quantized (GGUF, AWQ) or are community fine-tunes of existing models, especially if they are adaptations for specific frameworks like llama.cpp or ComfyUI.

But for fine-tunes that are LLMs, they might fit in both. I'll put quantized models in Fine-tunes, and non-quantized fine-tunes in their respective categories if they are LLMs or multimodal.

For example, a fine-tuned LLM like Hemmingway-1: it's a text-generation model, so I'll put it in Language Models, since it's an LLM. But if it's a GGUF version, put in Fine-tunes.

Similarly, for image models, fine-tunes like Viggle's model can go in Multimodal.

So, for this list, I'll categorize as follows:

First, identify models that are quantized (GGUF, etc.) and put them in Fine-tunes & Quantizations.

Quantized models from the list:
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image, GGUF) -> Fine-tunes & Quantizations
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation, GGUF) -> Fine-tunes & Quantizations
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (N/A, GGUF) -> Fine-tunes & Quantizations
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*