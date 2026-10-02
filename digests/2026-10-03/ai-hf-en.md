# Hugging Face Trending Models Digest 2026-10-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-02 22:16 UTC

---

The user wants a structured digest of trending models on Hugging Face based on a provided list of 30 models. I need to produce a response with four sections: Today's Highlights, Trending Models (categorized), Ecosystem Signal, and Worth Exploring. The response should be in English, concise, professional, and preserve all HF links.

Let's break down the data and organize it.

First, let's look at the models and categorize them.

Categories:
- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

Let's map the 30 models to these categories.

1. convaiinnovations/laya (text-classification, likes 4994, downloads 0) -> Specialized or maybe Language Models? It's text classification, but high likes. Let's see tags: transformers, safetensors, laya, system-one, calibrated-decisions. Could be a specialized decision model. Let's put in Specialized or maybe LLM if it's a base model. Actually, pipeline is text-classification. Let's put in Specialized.

2. abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image, likes 2831, downloads 1.37M) -> Multimodal & Generation (image) or Fine-tunes & Quantizations? It's a GGUF of an image model. Let's put in Multimodal & Generation, or maybe Fine-tunes & Quantizations? The category says "community fine-tunes, GGUF, AWQ". Since it's a GGUF, it could go to Fine-tunes & Quantizations, but it's also an image generation model. Let's look at the pipeline: text-to-image. I think Multimodal & Generation fits better for the core capability, but GGUF quantization is a key feature. Let's place it in Multimodal & Generation and mention the GGUF aspect, or put it in Fine-tunes & Quantizations. Let's see other models. Qwen-Image-2.1 is image generation. The GGUF version is a quantized version. I'll put it in Multimodal & Generation, but maybe note it's a GGUF. Actually, the category "📦 Fine-tunes & Quantizations" is specifically for community fine-tunes, GGUF, AWQ. So models that are primarily GGUF quantizations of other models might fit there. Let's check the list:
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (GGUF, text-to-image)
- prism-ml/Ternary-Bonsai-2-27B-gguf (GGUF, text-generation)
- orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF (GGUF, text-generation)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF (GGUF, image-text-to-text)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (GGUF, image-text-to-text)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (GGUF, image-text-to-text)
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion...GGUF (GGUF, image-text-to-text)
- ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF (GGUF, text-generation)
- unsloth/Qwen3.8-27B-GGUF (GGUF, N/A)
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (GGUF, text-to-image)
- Viggle/Qwen-Image-2.1-viggle-turbo (diffusers, safetensors, gguf, lora, text-to-image) - has gguf tag but also diffusers.
- nvidia/Nemotron-3-Diarization (nemo, safetensors, gguf, ...) - has gguf tag.

I think it's better to categorize by primary function, but for models that are purely quantizations (GGUF) of base models, they can go to Fine-tunes & Quantizations. However, some are also multimodal. Let's try to be consistent.

Let's define:
- 🧠 Language Models: text-generation, image-text-to-text (if primarily language), conversational, text-classification (if LLM-based), token-classification, text-ranking.
- 🎨 Multimodal & Generation: text-to-image, image-to-video, text-to-video, image-to-image, image-classification (if vision), video-to-video, image-text-to-video, automatic-speech-recognition, voice-activity-detection, image-text-to-text (if primarily vision-language, but some image-text-to-text are LLMs. Let's check tags. Qwen3.8-27B is image-text-to-text but is a large LLM. Let's see pipeline: image-text-to-text. It's a multimodal LLM. I'll put it in Language Models if it's a general LLM, or Multimodal if it's specifically for image generation/processing. Qwen3.8-27B is a multimodal language model, so maybe Language Models? But the category "Multimodal & Generation" includes image, video, audio, text-to-X. Image-text-to-text is multimodal. Let's put Qwen3.8-27B in Language Models because it's a general-purpose multimodal LLM, and put pure image/video models in Multimodal. Let's look at the list:
- Cloudflare/clef (image-text-to-text) - multimodal LLM.
- Contrastive-LM/CLM-v0.1-8B (text-ranking) - language model.
- Lightricks/LTX-2.5 (image-to-video) - multimodal generation.
- Qwen/Qwen-Image-2.1 (text-to-image) - multimodal generation.
- Qwen/Qwen3.8-27B (image-text-to-text) - multimodal LLM. Let's put in Language Models as it's a base model.
- SupersonicLabs/Julia-1 (text-classification) - specialized language model.
- Viggle/Qwen-Image-2.1-viggle-turbo (text-to-image) - multimodal generation.
- PSRben/VisionHOPE (image-classification) - specialized vision model.
- nvidia/Nemotron-3-Diarization (voice-activity-detection) - specialized audio model.
- Cloudflare/clef-flash (image-text-to-text) - multimodal LLM.
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation) - language model (quantized).
- orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF (text-generation) - language model (quantized).
- TaichuAI/ZDTaichu5.0-9B (image-text-to-text) - multimodal LLM.
- akatz-ai/MiniMax-H3-Character-Swap-LoRA (video-to-video) - multimodal generation (LoRA).
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF (image-text-to-text) - quantized LLM.
- Alissonerdx/BFS-Best-Face-Swap (image-to-image) - multimodal generation.
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (image-text-to-text) - quantized LLM.
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text) - multimodal LLM.
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (image-text-to-text) - quantized LLM.
- fastino/GLiNER2.5-Decide (token-classification) - specialized language model.
- FermionResearch/Phonon-2 (automatic-speech-recognition) - specialized audio model.
- DavidAU/Qwen3.8-27B-TURBO-Fable...GGUF (image-text-to-text) - quantized LLM.
- ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF (text-generation) - quantized LLM.
- Comfy-Org/Qwen-Image-2.1 (N/A, diffusion-single-file) - multimodal generation (ComfyUI).
- Edge0/Audio8-ASR-Infinite (automatic-speech-recognition) - specialized audio model.
- pablodawson/MiniMax-H3-360-Orbit-LoRA (image-text-to-video) - multimodal generation (LoRA).
- unsloth/Qwen3.8-27B-GGUF (N/A, gguf) - quantized LLM.
- Altworld/Hemmingway-1 (text-generation) - language model.

Let's refine categories:

🧠 Language Models (LLMs, chat models, instruction-tuned, text-generation, text-ranking, token-classification, text-classification if LLM-based, image-text-to-text if general LLM):
- Qwen/Qwen3.8-27B (image-text-to-text, likes 16.8k, downloads 6.9M) - base multimodal LLM.
- Contrastive-LM/CLM-v0.1-8B (text-ranking) - verifier/reranker.
- SupersonicLabs/Julia-1 (text-classification) - decision model.
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation) - quantized LLM.
- orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF (text-generation) - quantized LLM.
- TaichuAI/ZDTaichu5.0-9B (image-text-to-text) - multimodal LLM.
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF (image-text-to-text) - quantized LLM.
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (image-text-to-text) - quantized LLM.
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text) - multimodal LLM.
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (image-text-to-text) - quantized LLM.
- fastino/GLiNER2.5-Decide (token-classification) - extractor.
- DavidAU/Qwen3.8-27B-TURBO-Fable...GGUF (image-text-to-text) - quantized LLM.
- ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF (text-generation) - quantized LLM.
- unsloth/Qwen3.8-27B-GGUF (N/A) - quantized LLM.
- Altworld/Hemmingway-1 (text-generation) - language model.
- convaiinnovations/laya (text-classification) - could be LLM-based, let's put here.
- Cloudflare/clef (image-text-to-text) - multimodal LLM.
- Cloudflare/clef-flash (image-text-to-text) - multimodal LLM.

Wait, that's a lot of models in Language Models, many are quantizations. The category "📦 Fine-tunes & Quantizations" is for community fine-tunes, GGUF, AWQ. So maybe I should put the GGUF models there, even if they are text-generation, to separate base models from quantized community versions. Let's do that.

Let's redefine:
- 🧠 Language Models: Base models, instruction-tuned LLMs, multimodal LLMs (not primarily quantizations or fine-tunes). So:
  - Qwen/Qwen3.8-27B (base multimodal LLM)
  - Contrastive-LM/CLM-v0.1-8B (text-ranking, base model)
  - SupersonicLabs/Julia-1 (text-classification, base model)
  - TaichuAI/ZDTaichu5.0-9B (multimodal LLM)
  - deepseek-ai/DeepSeek-V4.1-Flash (multimodal LLM)
  - fastino/GLiNER2.5-Decide (token-classification)
  - FermionResearch/Phonon-2 (ASR) - maybe Specialized?
  - Edge0/Audio8-ASR-Infinite (ASR) - Specialized?
  - convaiinnovations/laya (text-classification)
  - Cloudflare/clef (image-text-to-text)
  - Cloudflare/clef-flash (image-text-to-text)
  - Altworld/Hemmingway-1 (text-generation)

- 🎨 Multimodal & Generation: image, video, audio generation, text-to-image, image-to-video, etc.
  - Lightricks/LTX-2.5 (image-to-video)
  - Qwen/Qwen-Image-2.1 (text-to-image)
  - Viggle/Qwen-Image-2.1-viggle-turbo (text-to-image)
  - akatz-ai/MiniMax-H3-Character-Swap-LoRA (video-to-video)
  - Alissonerdx/BFS-Best-Face-Swap (image-to-image)
  - Comfy-Org/Qwen-Image-2.1 (diffusion model for ComfyUI)
  - pablodawson/MiniMax-H3-360-Orbit-LoRA (image-text-to-video)
  - abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image, GGUF) - could be here or Fine-tunes. Let's put in Multimodal because it's an image model, but note it's GGUF.
  - nvidia/Nemotron-3-Diarization (voice-activity-detection) - audio, maybe Specialized?
  - PSRben/VisionHOPE (image-classification) - vision, maybe Specialized?

- 🔧 Specialized Models: code, math, medical, embeddings, specific tasks like ASR, diarization, classification.
  - PSRben/VisionHOPE (image-classification)
  - nvidia/Nemotron-3-Diarization (voice-activity-detection)
  - FermionResearch/Phonon-2 (ASR)
  - Edge0/Audio8-ASR-Infinite (ASR)
  - fastino/GLiNER2.5-Decide (token-classification) - could be here.
  - Contrastive-LM/CLM-v0.1-8B (text-ranking) - could be here.
  - SupersonicLabs/Julia-1 (text-classification) - could be here.
  - convaiinnovations/laya (text-classification) - could be here.

- 📦 Fine-tunes & Quantizations: community fine-tunes, GGUF, AWQ, LoRAs.
  - prism-ml/Ternary-Bonsai-2-27B-gguf
  - orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF
  - ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF
  - ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  - ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF
  - DavidAU/Qwen3.8-27B-TURBO-Fable...GGUF
  - ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF
  - unsloth/Qwen3.8-27B-GGUF
  - akatz-ai/MiniMax-H3-Character-Swap-LoRA (video-to-video LoRA) - could be Multimodal or Fine-tunes. It's a LoRA for video. Let's put in Multimodal.
  - pablodawson/MiniMax-H3-360-Orbit-LoRA (image-text-to-video LoRA) - Multimodal.
  - Alissonerdx/BFS-Best-Face-Swap (image-to-image, LoRA) - Multimodal.
  - abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image GGUF) - Multimodal or Fine-tunes? It's a GGUF of an image model. Let's put in Multimodal and mention GGUF.

Let's try to balance the categories so they are meaningful.

I'll create the following mapping:

🧠 Language Models:
- Qwen/Qwen3.8-27B (multimodal LLM, 16.8k likes, 6.9M downloads)
- deepseek-ai/DeepSeek-V4.1-Flash (multimodal LLM, 4k likes, 767k downloads)
- TaichuAI/ZDTaichu5.0-9B (multimodal LLM, 2.6k likes, 12k downloads)
- Cloudflare/clef (multimodal LLM, 763 likes, 824 downloads)
- Cloudflare/clef-flash (multimodal LLM, 252 likes, 1.3k downloads)
- Contrastive-LM/CLM-v0.1-8B (text-ranking, 665 likes, 2.9k downloads)
- SupersonicLabs/Julia-1 (text-classification, 364 likes, 2.9k downloads)
- convaiinnovations/laya (text-classification, 4.9k likes, 0 downloads)
- fastino/GLiNER2.5-Decide (token-classification, 324 likes, 43k downloads)
- Altworld/Hemmingway-1 (text-generation, 821 likes, 9.5k downloads)

🎨 Multimodal & Generation:
- Lightricks/LTX-2.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*