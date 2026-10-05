# Hugging Face Trending Models Digest 2026-10-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-05 22:15 UTC

---

The user wants a structured digest of trending Hugging Face models based on the provided list (30 models sorted by weekly likes as of 2026-10-06).

I need to:
1. **Today's Highlights** — 3-5 sentences on notable releases/trends
2. **Trending Models** — Organized by category with name+link, author/likes/downloads, one sentence description
   - Categories: 🧠 Language Models, 🎨 Multimodal & Generation, 🔧 Specialized Models, 📦 Fine-tunes & Quantizations
3. **Ecosystem Signal** — 100-200 words analyzing trends (model families, open-weight vs proprietary, quantization/fine-tuning)
4. **Worth Exploring** — 2-3 models with reasoning

Constraints:
- English, concise and professional
- Preserve all HF links

Let me analyze the data first:

**Top liked:**
1. convaiinnovations/laya - 5,226 likes (text-classification)
2. Lightricks/LTX-2.5 - 6,479 likes (image-to-video) - wait, 6,479 > 5,226? Let me check... 6,479 is higher. Actually looking at the list:
   - 2. convaiinnovations/laya: 5,226
   - 5. Lightricks/LTX-2.5: 6,479
   - 9. Qwen/Qwen3.8-27B: 17,021
   - 22. prism-ml/Ternary-Bonsai-2-27B-gguf: 2,445
   - 30. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: 1,971

Wait, the list says "sorted by weekly likes" but the numbers don't seem perfectly sorted? Let me check:
1. Cloudflare/clef: 1,445
2. convaiinnovations/laya: 5,226
3. abenzerps/Qwen-Image-2.1-Uncensored-GGUF: 3,248
4. Aleph-Alpha/Kolibri-1: 615
5. Lightricks/LTX-2.5: 6,479

Actually 6,479 > 5,226 > 3,248 > 1,445 > 615... but the list shows 5,226 before 3,248 and 6,479 is #5 with 6,479 likes but #2 has 5,226? That's inconsistent. Maybe it's not strictly sorted or I should just use the data as given. I'll treat it as provided but note the likes numbers.

Actually looking carefully:
- #2 convaiinnovations/laya: 5,226
- #3 abenzerps/Qwen-Image-2.1-Uncensored-GGUF: 3,248
- #5 Lightricks/LTX-2.5: 6,479

This is strange because 6,479 > 5,226 but #5 comes after #2. Maybe the list is not perfectly sorted by likes, or maybe I'm misreading. Let me check again...

Actually the user said "sorted by weekly likes" but the numbers don't match that. #5 has 6,479 which is higher than #2's 5,226. But maybe the list is mostly sorted but not perfectly, or perhaps I should just report what's there. I'll focus on the actual numbers provided.

**Categories breakdown:**

🧠 Language Models (LLMs, chat models, instruction-tuned):
- Aleph-Alpha/Kolibri-1 (text-generation, 615 likes)
- Venastine-Research/Xing4.0-29B-A4B-GGUF (text-generation, 410 likes)
- Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw (text-generation, 230 likes)
- jialinyyzz/humanizer (text-generation, 199 likes) - but tags say image-text-to-text? Wait, pipeline says text-generation but tags include image-text-to-text. Hmm.
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text, 4,118 likes) - this is multimodal actually
- Qwen/Qwen3.8-27B (image-text-to-text, 17,021 likes) - multimodal

Actually I need to be careful with categories. The user specified:
- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

So:
- Language Models: text-generation primarily
- Multimodal & Generation: image-text-to-text, text-to-image, image-to-video, etc.
- Specialized: code, math, medical, embeddings (I don't see many explicit code/math/medical, but maybe Contrastive-LM/CLM-v0.1-8B is a verifier/reranker? Or FermionResearch/Phonon-2 is audio/speech)
- Fine-tunes & Quantizations: GGUF files, LoRAs, quantized versions

Let me categorize:

🧠 Language Models:
- Aleph-Alpha/Kolibri-1 (text-generation, 615 likes, 2,453 downloads)
- Venastine-Research/Xing4.0-29B-A4B-GGUF (text-generation, 410 likes, 18,863 downloads) - wait this is GGUF so maybe 📦?
- Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw (text-generation, 230 likes, 1,342 downloads) - EXL3 is quantization format, so 📦?
- jialinyyzz/humanizer (text-generation pipeline, 199 likes, 10,329 downloads) - tags mention gguf and gemma4_unified, so probably 📦

Hmm, the categories overlap. The user wants:
- 🧠 Language Models: LLMs, chat models, instruction-tuned (base models)
- 📦 Fine-tunes & Quantizations: community fine-tunes, GGUF, AWQ

So if it's a GGUF, it goes to 📦. If it's a base model in safetensors, it goes to 🧠.

Let me re-evaluate:

🧠 Language Models (base models, not quantized):
- Aleph-Alpha/Kolibri-1 (text-generation, safetensors, vllm, kolibri1, reasoning, moe) - 615 likes
- FermionResearch/Phonon-2 (automatic-speech-recognition, mlx) - this is audio/speech, maybe Specialized?
- SupersonicLabs/Julia-1 (text-classification, pytorch) - Specialized? Or decision model?

Actually FermionResearch/Phonon-2 is ASR, which could be Specialized (audio) or Multimodal? The category says "Multimodal & Generation (image, video, audio, text-to-X)" so audio fits there.

SupasonicLabs/Julia-1 is text-classification, decision-model, multilingual. Could be Specialized.

Contrastive-LM/CLM-v0.1-8B (text-ranking) - Specialized (verifier/reranker).

autotrust/GEV-26B-Decide (text-classification) - tags say gemma4, image-text-to-text, system-one. Pipeline is text-classification. This is confusing. Maybe Specialized?

autotrust/JEV-27B-VL (image-text-to-text) - Multimodal.

convaiinnovations/laya (text-classification) - Specialized? Or Language? Tags: laya, system-one, calibrated-decisions. Maybe decision model, so Specialized?

Let me stick to the category definitions strictly:

🧠 Language Models:
- Aleph-Alpha/Kolibri-1 (text-generation, reasoning, moe)
- Maybe deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text, but primarily language) - 4,118 likes
- Maybe Qwen/Qwen3.8-27B (image-text-to-text) - 17,021 likes

But Qwen3.8-27B is image-text-to-text, so Multimodal.

Let me look at what's clearly Language Models:
- Aleph-Alpha/Kolibri-1 (text-generation)
- Venastine-Research/Xing4.0-29B-A4B-GGUF (text-generation but GGUF - should be 📦)
- Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw (text-generation but EXL3 quant - should be 📦)

So for 🧠 I only have Aleph-Alpha/Kolibri-1 clearly. That's too few. Maybe include:
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text but language-focused)
- Qwen/Qwen3.8-27B (image-text-to-text)
- autotrust/JEV-27B-VL (image-text-to-text)
- Cloudflare/clef (image-text-to-text)
- Cloudflare/clef-flash (image-text-to-text)

But these are multimodal. The category says "LLMs, chat models, instruction-tuned". Qwen3.8-27B is likely a chat model. DeepSeek-V4.1-Flash is likely a language model with vision capabilities.

For 🎨 Multimodal & Generation:
- Qwen/Qwen3.8-27B (image-text-to-text)
- Cloudflare/clef (image-text-to-text)
- Cloudflare/clef-flash (image-text-to-text)
- autotrust/JEV-27B-VL (image-text-to-text)
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image)
- Qwen/Qwen-Image-2.1 (text-to-image)
- Viggle/Qwen-Image-2.1-viggle-turbo (text-to-image)
- Lightricks/LTX-2.5 (image-to-video)
- pablodawson/MiniMax-H3-360-Orbit-LoRA (image-text-to-video)
- akatz-ai/MiniMax-H3-Character-Swap-LoRA (video-to-video)
- Alissonerdx/BFS-Best-Face-Swap (image-to-image)

For 🔧 Specialized Models:
- convaiinnovations/laya (text-classification, calibrated-decisions)
- PSRben/VisionHOPE (image-classification)
- autotrust/GEV-26B-Decide (text-classification, system-one, image-text-to-text)
- SupersonicLabs/Julia-1 (text-classification, decision-model, multilingual)
- Contrastive-LM/CLM-v0.1-8B (text-ranking, verifier, reranker)
- FermionResearch/Phonon-2 (automatic-speech-recognition, audio)
- nvidia/Nemotron-3-Diarization (voice-activity-detection, audio)

For 📦 Fine-tunes & Quantizations:
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (GGUF)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (GGUF)
- orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF (GGUF)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF (GGUF)
- prism-ml/Ternary-Bonsai-2-27B-gguf (GGUF)
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF (GGUF)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (GGUF)
- Venastine-Research/Xing4.0-29B-A4B-GGUF (GGUF)
- Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw (EXL3)
- jialinyyzz/humanizer (GGUF mentioned in tags)
- Viggle/Qwen-Image-2.1-viggle-turbo (diffusers, lora)
- akatz-ai/MiniMax-H3-Character-Swap-LoRA (LoRA)
- pablodawson/MiniMax-H3-360-Orbit-LoRA (LoRA)
- Alissonerdx/BFS-Best-Face-Swap (diffusers, lora)

Wait, some models could fit multiple categories. The user wants them organized by category, so I should pick the primary category. GGUFs go to 📦. LoRAs go to 📦. Base models in safetensors go to their respective categories.

But I need to make sure I include all 30 models across the categories.

Let me map each model:

1. Cloudflare/clef - image-text-to-text, transformers, safetensors → 🧠 or 🎨? It's image-text-to-text so 🎨 Multimodal
2. convaiinnovations/laya - text-classification, calibrated-decisions → 🔧 Specialized
3. abenzerps/Qwen-Image-2.1-Uncensored-GGUF - GGUF → 📦 Fine-tunes & Quantizations
4. Aleph-Alpha/Kolibri-1 - text-generation, reasoning, moe → 🧠 Language Models
5. Lightricks/LTX-2.5 - image-to-video → 🎨 Multimodal & Generation
6. Cloudflare/clef-flash - image-text-to-text → 🎨 Multimodal & Generation
7. autotrust/JEV-27B-VL - image-text-to-text → 🎨 Multimodal & Generation
8. Venastine-Research/Xing4.0-29B-A4B-GGUF - GGUF → 📦 Fine-tunes & Quantizations
9. Qwen/Qwen3.8-27B - image-text-to-text → 🎨 Multimodal & Generation (or 🧠? It's a vision-language model, but category says LLMs. I'll put in 🎨)
10. PSRben/VisionHOPE - image-classification → 🔧 Specialized
11. autotrust/GEV-26B-Decide - text-classification → 🔧 Specialized
12. Qwen/Qwen-Image-2.1 - text-to-image → 🎨 Multimodal & Generation
13. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF - GGUF → 📦 Fine-tunes & Quantizations
14. orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF - GGUF → 📦 Fine-tunes & Quantizations
15. TaichuAI/ZDTaichu5.0-9B - image-text-to-text → 🎨 Multimodal & Generation
16. FermionResearch/Phonon-2 - automatic-speech-recognition → 🎨 Multimodal & Generation (audio) or 🔧? Category says audio is in 🎨
17. Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw - EXL3 quant → 📦 Fine-tunes & Quantizations
18. nvidia/Nemotron-3-Diarization - voice-activity-detection → 🔧 Specialized (audio processing) or 🎨? It's voice activity detection, so specialized audio model. I'll put 🔧.
19. Viggle/Qwen-Image-2.1-viggle-turbo - text-to-image, lora → 📦 Fine-tunes & Quantizations (it's a LoRA)
20. jialinyyzz/humanizer - text-generation, gguf → 📦 Fine-tunes & Quantizations
21. Contrastive-LM/CLM-v0.1-8B - text-ranking → 🔧 Specialized
22. prism-ml/Ternary-Bonsai-2-27B-gguf - GGUF → 📦 Fine-tunes & Quantizations
23. deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text → 🎨 Multimodal & Generation (or 🧠? It's a flash model, likely language with vision)
24. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF - GGUF → 📦 Fine-tunes & Quantizations
25. SupasonicLabs/Julia-1 - text-classification → 🔧 Specialized
26. akatz-ai/MiniMax-H3-Character-Swap-LoRA - LoRA → 📦 Fine-tunes & Quantizations
27. Alissonerdx/B

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*