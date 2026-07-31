# Hugging Face Trending Models Digest 2026-08-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-31 22:16 UTC

---

The user wants me to generate a structured Hugging Face Trending Models Digest based on the provided data. Let me analyze the 30 models and organize them properly.

First, let me categorize each model:

**Language Models (LLMs, chat models, instruction-tuned):**
1. moonshotai/Kimi-K3 - image-text-to-text but it's a language model with vision
2. deepseek-ai/DeepSeek-V4-Flash-0731 - text-generation
3. poolside/Laguna-S-2.1 - text-generation
4. zai-org/GLM-5.2 - text-generation, conversational
5. Nanbeige/Nanbeige4.2-3B - text-generation
6. upstage/Solar-Open2-250B - text-generation
7. XYZAILab/XYZ-Aquila-mini - text-generation (but also image-text-to-text)
8. XYZAILab/XYZ-Aquila-pro - text-generation (but also image-text-to-text)
9. EschaLabs/Qwen3.6-35B-A3B-Escha-W2 - text-generation
10. thinkingmachines/Inkling-Small - image-text-to-text (multimodal language)
11. thinkingmachines/Inkling - image-text-to-text (multimodal language)
12. microsoft/Fara1.5-27B - image-text-to-text (multimodal)
13. microsoft/Mage-VL - image-text-to-text (multimodal)

Actually, let me reconsider the categories more carefully:

**🧠 Language Models** - General purpose text/image-text language models
- moonshotai/Kimi-K3 (image-text-to-text, but it's a language model)
- deepseek-ai/DeepSeek-V4-Flash-0731
- poolside/Laguna-S-2.1
- zai-org/GLM-5.2
- Nanbeige/Nanbeige4.2-3B
- upstage/Solar-Open2-250B
- XYZAILab/XYZ-Aquila-mini
- XYZAILab/XYZ-Aquila-pro
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2
- thinkingmachines/Inkling-Small
- thinkingmachines/Inkling
- microsoft/Fara1.5-27B
- microsoft/Mage-VL
- deepseek-ai/DeepSeek-V4-Flash

**🎨 Multimodal & Generation** - Models focused on image, audio, video generation or multimodal
- baidu/Unlimited-OCR (image-text-to-text for OCR)
- owensong/Inflect-Micro-v2 (text-to-speech)
- Audio8/Audio8-TTS-Preview-0.6b (text-to-speech)
- owensong/Inflect-Nano-v2 (text-to-speech)
- microsoft/VibeVoice-ASR-BitNet (automatic-speech-recognition)
- Comfy-Org/Mage-Flow (diffusion model)

Wait, some of these are also multimodal. Let me reconsider. The pipeline types matter:

Actually, let me re-categorize more thoughtfully:

**🧠 Language Models (LLMs, chat models, instruction-tuned):**
- moonshotai/Kimi-K3 (image-text-to-text, but it's a multimodal LLM)
- deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
- poolside/Laguna-S-2.1 (text-generation)
- zai-org/GLM-5.2 (text-generation, conversational)
- Nanbeige/Nanbeige4.2-3B (text-generation)
- upstage/Solar-Open2-250B (text-generation)
- XYZAILab/XYZ-Aquila-mini (text-generation + image-text-to-text)
- XYZAILab/XYZ-Aquila-pro (text-generation + image-text-to-text)
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2 (text-generation)
- thinkingmachines/Inkling-Small (image-text-to-text)
- thinkingmachines/Inkling (image-text-to-text)
- microsoft/Fara1.5-27B (image-text-to-text)
- microsoft/Mage-VL (image-text-to-text)
- deepseek-ai/DeepSeek-V4-Flash (text-generation)

**🎨 Multimodal & Generation (image, video, audio, text-to-X):**
- baidu/Unlimited-OCR (image-text-to-text for OCR)
- owensong/Inflect-Micro-v2 (text-to-speech)
- Audio8/Audio8-TTS-Preview-0.6b (text-to-speech)
- owensong/Inflect-Nano-v2 (text-to-speech)
- microsoft/VibeVoice-ASR-BitNet (automatic-speech-recognition)
- Comfy-Org/Mage-Flow (diffusion model)

**🔧 Specialized Models (code, math, medical, embeddings):**
- Kwaipilot/KAT-Coder-V2.5-Dev (text-generation, code)

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
- DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF (GGUF)
- unsloth/Kimi-K3-GGUF (GGUF)
- unsloth/DeepSeek-V4-Flash-0731-GGUF (GGUF)
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF (GGUF)
- nota-ai/Solar-Open2-250B-Nota-NVFP4 (quantization)
- prism-ml/Ternary-Bonsai-27B-gguf (GGUF)
- DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF (GGUF)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (GGUF)

Hmm, some models could fit in multiple categories. Let me be more careful:

Kimi-K3 is image-text-to-text but it's fundamentally a language model. I'll put it in Language Models.

Let me also reconsider: the user's categories are:
1. 🧠 Language Models (LLMs, chat models, instruction-tuned)
2. 🎨 Multimodal & Generation (image, video, audio, text-to-X)
3. 🔧 Specialized Models (code, math, medical, embeddings)
4. 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

So for multimodal, I should focus on models that are primarily about image/video/audio generation or multimodal understanding that aren't primarily language models. But many of these are multimodal language models...

Let me be pragmatic:

**🧠 Language Models:**
- moonshotai/Kimi-K3 (multimodal LLM, but primarily a language model)
- deepseek-ai/DeepSeek-V4-Flash-0731
- poolside/Laguna-S-2.1
- zai-org/GLM-5.2
- Nanbeige/Nanbeige4.2-3B
- upstage/Solar-Open2-250B
- XYZAILab/XYZ-Aquila-mini
- XYZAILab/XYZ-Aquila-pro
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2
- deepseek-ai/DeepSeek-V4-Flash
- Kwaipilot/KAT-Coder-V2.5-Dev (code-focused language model)

**🎨 Multimodal & Generation:**
- baidu/Unlimited-OCR
- thinkingmachines/Inkling-Small
- thinkingmachines/Inkling
- microsoft/Fara1.5-27B
- microsoft/Mage-VL
- owensong/Inflect-Micro-v2 (TTS)
- Audio8/Audio8-TTS-Preview-0.6b (TTS)
- owensong/Inflect-Nano-v2 (TTS)
- microsoft/VibeVoice-ASR-BitNet (ASR)
- Comfy-Org/Mage-Flow (diffusion)

Hmm, but Inkling, Fara1.5, Mage-VL are multimodal language models, not really "generation" in the image/video/audio sense. Let me think about this differently.

Actually, the categories are a bit ambiguous. Let me just be reasonable:

**🧠 Language Models** - General purpose text/image-text LLMs
**🎨 Multimodal & Generation** - Models focused on non-text modalities (TTS, ASR, OCR, diffusion, image generation)
**🔧 Specialized** - Code, math, etc.
**📦 Fine-tunes & Quantizations** - GGUF, quantized versions, community fine-tunes

Let me finalize:

**🧠 Language Models:**
1. moonshotai/Kimi-K3
2. deepseek-ai/DeepSeek-V4-Flash-0731
3. poolside/Laguna-S-2.1
4. zai-org/GLM-5.2
5. Nanbeige/Nanbeige4.2-3B
6. upstage/Solar-Open2-250B
7. XYZAILab/XYZ-Aquila-mini
8. XYZAILab/XYZ-Aquila-pro
9. EschaLabs/Qwen3.6-35B-A3B-Escha-W2
10. deepseek-ai/DeepSeek-V4-Flash
11. Kwaipilot/KAT-Coder-V2.5-Dev (code language model)
12. thinkingmachines/Inkling-Small
13. thinkingmachines/Inkling
14. microsoft/Fara1.5-27B
15. microsoft/Mage-VL

**🎨 Multimodal & Generation:**
1. baidu/Unlimited-OCR
2. owensong/Inflect-Micro-v2
3. Audio8/Audio8-TTS-Preview-0.6b
4. owensong/Inflect-Nano-v2
5. microsoft/VibeVoice-ASR-BitNet
6. Comfy-Org/Mage-Flow

**🔧 Specialized Models:**
- Kwaipilot/KAT-Coder-V2.5-Dev (code)

Hmm, KAT-Coder-V2.5-Dev fits better in Language Models since it's a language model for coding. Let me move it there and see if there's anything else for Specialized...

Actually, looking at the data again, there aren't many purely specialized models. Let me keep KAT-Coder in Language Models and maybe add a note about code models there. Or I could create a "Specialized" section with just KAT-Coder.

Wait, let me reconsider. The user wants 4 categories. Let me be more flexible:

**🧠 Language Models:**
- moonshotai/Kimi-K3
- deepseek-ai/DeepSeek-V4-Flash-0731
- poolside/Laguna-S-2.1
- zai-org/GLM-5.2
- Nanbeige/Nanbeige4.2-3B
- upstage/Solar-Open2-250B
- XYZAILab/XYZ-Aquila-mini
- XYZAILab/XYZ-Aquila-pro
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2
- deepseek-ai/DeepSeek-V4-Flash
- thinkingmachines/Inkling-Small
- thinkingmachines/Inkling
- microsoft/Fara1.5-27B
- microsoft/Mage-VL

**🎨 Multimodal & Generation:**
- baidu/Unlimited-OCR
- owensong/Inflect-Micro-v2
- Audio8/Audio8-TTS-Preview-0.6b
- owensong/Inflect-Nano-v2
- microsoft/VibeVoice-ASR-BitNet
- Comfy-Org/Mage-Flow

**🔧 Specialized Models:**
- Kwaipilot/KAT-Coder-V2.5-Dev (code)

**📦 Fine-tunes & Quantizations:**
- DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
- unsloth/Kimi-K3-GGUF
- unsloth/DeepSeek-V4-Flash-0731-GGUF
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
- nota-ai/Solar-Open2-250B-Nota-NVFP4
- prism-ml/Ternary-Bonsai-27B-gguf
- DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive

That's 14 + 6 + 1 + 8 = 29. But we have 30 models. Let me check...

Wait, I have KAT-Coder in Specialized. Let me count:
Language Models: 14
Multimodal & Generation: 6
Specialized: 1
Fine-tunes & Quantizations: 8
Total: 29

I'm missing one. Let me check the original list again...

1. moonshotai/Kimi-K3 - LM
2. deepseek-ai/DeepSeek-V4-Flash-0731 - LM
3. DavidAU/Qwen3.6-27B... - Fine-tunes
4. baidu/Unlimited-OCR - Multimodal
5. owensong/Inflect-Micro-v2 - Multimodal
6. Kwaipilot/KAT-Coder-V2.5-Dev - Specialized
7. poolside/Laguna-S-2.1 - LM
8. zai-org/GLM-5.2 - LM
9. Nanbeige/Nanbeige4.2-3B - LM
10. unsloth/Kimi-K3-GGUF - Fine-tunes
11. thinkingmachines/Inkling-Small - LM
12. microsoft/Fara1.5-27B - LM
13. unsloth/Kimi-K3 - LM
14. upstage/Solar-Open2-250B - LM
15. unsloth/DeepSeek-V4-Flash-0731-GGUF - Fine-tunes
16. Audio8/Audio8-TTS-Preview-0.6b - Multimodal
17. microsoft/Mage-VL - LM
18. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored... - Fine-tunes
19. XYZAILab/XYZ-Aquila-mini - LM
20. owensong/Inflect-Nano-v2 - Multimodal
21. nota-ai/Solar-Open2-250B-Nota-NVFP4 - Fine-tunes
22. XYZAILab/XYZ-Aquila-pro - LM
23. microsoft/VibeVoice-ASR-BitNet - Multimodal
24. thinkingmachines/Inkling - LM
25. prism-ml/Ternary-Bonsai-27B-gguf - Fine-tunes
26. HauhauCS/Qwen3.6-35B-A3B-Uncensored... - Fine-tunes
27. Comfy-Org/Mage-Flow - Multimodal
28. DavidAU/Qwen3.5-9B... - Fine-tunes
29. EschaLabs/Qwen3.6-35B-A3B-Escha-W2 - LM
30. deepseek-ai/DeepSeek-V4-Flash - LM

So: LM=14, Multimodal=6, Specialized=1, Fine-tunes=8. Total=29. Wait, I count 14 LMs:
1. Kimi-K3
2. DeepSeek-V4-Flash-0731
3. Laguna-S-2.1
4. GLM-5.2
5. Nanbeige4.2-3B
6. Solar-Open2-250B
7. XYZ-Aquila-mini
8. XYZ-Aquila-pro
9. Escha-W2
10. DeepSeek-V4-Flash
11. Inkling-Small
12. Fara1.5-27B
13. Mage-VL
14. Inkling

That's 14. Multimodal: 6 (Unlimited-OCR, Inflect-Micro-v2, Audio8-TTS, Inflect-Nano-v2, VibeVoice-ASR-BitNet, Mage-Flow). Specialized: 1 (KAT-Coder). Fine-tunes: 8. Total = 29.

Wait, I'm missing unsloth/Kimi-K3 (#13). That's a model I didn't include. Let me add it to Language Models. So LM = 15.

15 LMs + 6 Multimodal + 1 Specialized + 8 Fine-tunes = 30. ✓

Now let me also think about whether unsloth/Kimi-K3 should be in Fine-tunes since it's by unsloth... but it's

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*