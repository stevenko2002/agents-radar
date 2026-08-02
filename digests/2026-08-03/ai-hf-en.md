# Hugging Face Trending Models Digest 2026-08-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-02 22:17 UTC

---

Let me analyze this dataset of 30 trending models on Hugging Face Hub as of 2026-08-03. I need to categorize them properly and generate a structured digest.

First, let me understand the data:
- 30 models sorted by weekly likes
- Mix of official releases and community fine-tunes/quantizations
- Various pipeline types: text-generation, image-text-to-text, text-to-speech, text-to-image, automatic-speech-recognition, fill-mask, feature-extraction

Let me categorize them:

**Language Models (LLMs, chat models, instruction-tuned):**
1. moonshotai/Kimi-K3 (image-text-to-text, but it's a language model with vision)
2. deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
3. zai-org/GLM-5.2 (text-generation)
4. Kwaipilot/KAT-Coder-V2.5-Dev (text-generation, code-focused)
5. Nanbeige/Nanbeige4.2-3B (text-generation)
6. poolside/Laguna-S-2.1 (text-generation)
7. XYZAILab/XYZ-Aquila-pro (text-generation)
8. upstage/Solar-Open2-250B (text-generation)
9. nota-ai/Solar-Open2-250B-Nota-NVFP4 (text-generation, quantized)
10. EschaLabs/Qwen3.6-35B-A3B-Escha-W2 (text-generation)
11. amd/Instella-MoE-16B-A3B-Think (text-generation)
12. thinkingmachines/Inkling-Small (image-text-to-text)
13. microsoft/Fara1.5-27B (image-text-to-text)

Hmm, I need to be more careful about categorization. Let me think about what constitutes a "Language Model" vs "Multimodal."

The pipeline types help:
- text-generation: pure language models
- image-text-to-text: multimodal models (but some are being used as language models with vision)
- text-to-speech: audio
- text-to-image: generation
- automatic-speech-recognition: audio
- fill-mask: embeddings/MLM

Let me re-categorize:

**🧠 Language Models (LLMs, chat models, instruction-tuned):**
- deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
- deepseek-ai/DeepSeek-V4-Flash (text-generation)
- zai-org/GLM-5.2 (text-generation)
- Nanbeige/Nanbeige4.2-3B (text-generation)
- poolside/Laguna-S-2.1 (text-generation)
- XYZAILab/XYZ-Aquila-pro (text-generation)
- upstage/Solar-Open2-250B (text-generation)
- nota-ai/Solar-Open2-250B-Nota-NVFP4 (text-generation)
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2 (text-generation)
- amd/Instella-MoE-16B-A3B-Think (text-generation)
- Kwaipilot/KAT-Coder-V2.5-Dev (text-generation, code)

**🎨 Multimodal & Generation:**
- moonshotai/Kimi-K3 (image-text-to-text)
- baidu/Unlimited-OCR (image-text-to-text)
- DavidAU/Qwen3.6-27B-Fable-Fusion-711 (image-text-to-text)
- thinkingmachines/Inkling-Small (image-text-to-text)
- microsoft/Mage-VL (image-text-to-text)
- microsoft/Fara1.5-27B (image-text-to-text)
- XYZAILab/XYZ-Aquila-mini (image-text-to-text)
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF (image-text-to-text)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (image-text-to-text)
- lodestones/Kroma (text-to-image)
- empero-ai/Qwythos-27B-v1 (image-text-to-text)

**🔧 Specialized Models:**
- owensong/Inflect-Micro-v2 (text-to-speech)
- Audio8/Audio8-TTS-Preview-0.6b (text-to-speech)
- microsoft/VibeVoice-ASR-BitNet (automatic-speech-recognition)
- LiquidAI/LFM2.5-Encoder-350M (fill-mask)

**📦 Fine-tunes & Quantizations:**
- DavidAU/Qwen3.6-27B-Fable-Fusion-711 (GGUF)
- unsloth/DeepSeek-V4-Flash-0731-GGUF (GGUF)
- unsloth/Kimi-K3-GGUF (GGUF)
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF (GGUF)
- DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF (GGUF)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (GGUF)
- nota-ai/Solar-Open2-250B-Nota-NVFP4 (quantization)

Wait, some models overlap categories. For example, KAT-Coder-V2.5-Dev is code-focused (specialized) but also text-generation. And many GGUF models are quantizations of multimodal models.

Let me think about this more carefully. The user wants 4 categories. Let me assign each model to exactly one category, prioritizing the most distinctive characteristic.

Actually, looking at the data again, many models are multimodal (image-text-to-text) but are fundamentally language models with vision capabilities. I think the categorization should be:

**🧠 Language Models**: Core text-generation models, including MoE architectures
**🎨 Multimodal & Generation**: Models primarily for image/video/audio generation or multimodal understanding
**🔧 Specialized Models**: Code, TTS, ASR, embeddings, etc.
**📦 Fine-tunes & Quantizations**: Community-created GGUF, quantized, fine-tuned versions

Some models could fit multiple categories. Let me make decisions:

Language Models:
1. deepseek-ai/DeepSeek-V4-Flash-0731
2. deepseek-ai/DeepSeek-V4-Flash
3. zai-org/GLM-5.2
4. Nanbeige/Nanbeige4.2-3B
5. poolside/Laguna-S-2.1
6. XYZAILab/XYZ-Aquila-pro
7. upstage/Solar-Open2-250B
8. EschaLabs/Qwen3.6-35B-A3B-Escha-W2
9. amd/Instella-MoE-16B-A3B-Think
10. Kwaipilot/KAT-Coder-V2.5-Dev (code-focused language model)

Multimodal & Generation:
1. moonshotai/Kimi-K3
2. baidu/Unlimited-OCR
3. DavidAU/Qwen3.6-27B-Fable-Fusion-711 (GGUF quant but primarily a multimodal model)
4. thinkingmachines/Inkling-Small
5. microsoft/Mage-VL
6. microsoft/Fara1.5-27B
7. XYZAILab/XYZ-Aquila-mini
8. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
9. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
10. lodestones/Kroma (text-to-image)
11. empero-ai/Qwythos-27B-v1

Specialized Models:
1. owensong/Inflect-Micro-v2 (TTS)
2. Audio8/Audio8-TTS-Preview-0.6b (TTS)
3. microsoft/VibeVoice-ASR-BitNet (ASR)
4. LiquidAI/LFM2.5-Encoder-350M (fill-mask/embeddings)

Fine-tunes & Quantizations:
1. DavidAU/Qwen3.6-27B-Fable-Fusion-711 (already in multimodal? Let me move it here since it's a GGUF fine-tune)
2. unsloth/DeepSeek-V4-Flash-0731-GGUF
3. unsloth/Kimi-K3-GGUF
4. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF
5. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF
6. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
7. nota-ai/Solar-Open2-250B-Nota-NVFP4

Hmm, but then some multimodal models are missing. Let me reconsider. The GGUF models that are quantizations of multimodal models should probably stay in the Fine-tunes & Quantizations category since they're specifically GGUF/quantized versions. But the underlying model (e.g., Kimi-K3) is already in Multimodal.

Let me also reconsider: some of the "image-text-to-text" models listed in the data are actually GGUF quantizations or fine-tunes. For example:
- DavidAU/Qwen3.6-27B-Fable-Fusion-711 is a GGUF fine-tune → Fine-tunes & Quantizations
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive has GGUF tag → Fine-tunes & Quantizations
- LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF → Fine-tunes & Quantizations

So the "Multimodal & Generation" category should focus on the official/primary releases, not the community quantizations.

Let me finalize:

**🧠 Language Models:**
1. deepseek-ai/DeepSeek-V4-Flash-0731 (1,681 likes, 156K dl)
2. deepseek-ai/DeepSeek-V4-Flash (1,955 likes, 2.7M dl)
3. zai-org/GLM-5.2 (4,751 likes, 2M dl)
4. Nanbeige/Nanbeige4.2-3B (625 likes, 33K dl)
5. poolside/Laguna-S-2.1 (876 likes, 80K dl)
6. XYZAILab/XYZ-Aquila-pro (335 likes, 1K dl)
7. upstage/Solar-Open2-250B (719 likes, 15K dl)
8. EschaLabs/Qwen3.6-35B-A3B-Escha-W2 (118 likes, 2.5K dl)
9. amd/Instella-MoE-16B-A3B-Think (118 likes, 2K dl)
10. Kwaipilot/KAT-Coder-V2.5-Dev (401 likes, 13K dl)

**🎨 Multimodal & Generation:**
1. moonshotai/Kimi-K3 (9,625 likes, 837K dl)
2. baidu/Unlimited-OCR (3,775 likes, 2.5M dl)
3. thinkingmachines/Inkling-Small (224 likes, 7K dl)
4. microsoft/Mage-VL (182 likes, 272K dl)
5. microsoft/Fara1.5-27B (249 likes, 3K dl)
6. XYZAILab/XYZ-Aquila-mini (365 likes, 903 dl)
7. empero-ai/Qwythos-27B-v1 (96 likes, 1K dl)
8. lodestones/Kroma (123 likes, 0 dl)

**🔧 Specialized Models:**
1. owensong/Inflect-Micro-v2 (371 likes, 1.8K dl)
2. Audio8/Audio8-TTS-Preview-0.6b (177 likes, 4K dl)
3. microsoft/VibeVoice-ASR-BitNet (148 likes, 8K dl)
4. LiquidAI/LFM2.5-Encoder-350M (88 likes, 7K dl)

**📦 Fine-tunes & Quantizations:**
1. DavidAU/Qwen3.6-27B-Fable-Fusion-711 (1,333 likes, 1.3M dl)
2. unsloth/DeepSeek-V4-Flash-0731-GGUF (334 likes, 49K dl)
3. unsloth/Kimi-K3-GGUF (248 likes, 88K dl)
4. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF (298 likes, 259K dl)
5. DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF (204 likes, 293K dl)
6. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (3,238 likes, 1.9M dl)
7. nota-ai/Solar-Open2-250B-Nota-NVFP4 (153 likes, 68K dl)

Now let me count: 10 + 8 + 4 + 7 = 29. But we have 30 models. Let me check... 

Wait, I have:
- Kimi-K3 in Multimodal ✓
- DeepSeek-V4-Flash-0731 in LM ✓
- DavidAU/Qwen3.6-27B in Fine-tunes ✓
- baidu/Unlimited-OCR in Multimodal ✓
- unsloth/DeepSeek-V4-Flash-0731-GGUF in Fine-tunes ✓
- unsloth/Kimi-K3-GGUF in Fine-tunes ✓
- GLM-5.2 in LM ✓
- Inkling-Small in Multimodal ✓
- KAT-Coder in LM ✓
- Inflect-Micro-v2 in Specialized ✓
- unsloth/Kimi-K3 - wait, I missed this one! Let me check.

unsloth/Kimi-K3 (225 likes, 1.3K dl) - this is a full model, not a GGUF. It's image-text-to-text. It should go in Multimodal.

So Multimodal gets +1: unsloth/Kimi-K3

Now: 10 + 9 + 4 + 7 = 30. ✓

Now for the Ecosystem Signal analysis:
- DeepSeek V4 is trending heavily (both Flash and Flash-0731, plus GGUF from unsloth)
- Kimi-K3 from Moonshot is the top liked model
- Qwen3.6 and Qwen3.5 family is very active (multiple community fine-tunes and GGUFs)
- GLM-5.2 from ZAI is strong
- Significant community quantization activity (GGUF from DavidAU, unsloth, HauhauCS, LuffyTheFox)
- Microsoft has multiple entries (Mage-VL, Fara1.5, VibeVoice)
- AMD entering with Instella-MoE
- Solar-Open2 from Upstage with a Nota quantization

Open-weight vs proprietary: All 30 are open-weight on HuggingFace, which is the trend.

For "Worth Exploring," I should pick 2-3 models that stand out for their impact, novelty, or ecosystem significance.

Let me now draft the full digest.

For the Highlights section, I need 3-5 sentences on the most notable trends:
- Kimi-K3 dominating with nearly 10K likes
- DeepSeek V4 series continuing strong momentum
- Qwen3.6 family seeing massive community engagement with uncensored variants
- Microsoft's multimodal and speech entries
- Community quantization ecosystem thriving (GGUF, NVFP4)

Let me write this up now.

Actually, let me reconsider the categorization. KAT-Coder-V2.5-Dev has tags including "code" and is text-generation pipeline. It's a code-focused LLM. It could go in either Language Models or Specialized. I'll keep it in Language Models since it's fundamentally a language model.

Also, I should double-check: unsloth/Kimi-K3 has pipeline "image-text-to-text" - so it's multimodal. Makes sense.

Let me also reconsider whether DavidAU models should be in Fine-tunes & Quantizations since they

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*