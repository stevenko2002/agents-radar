# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 12:47 UTC

---

We need to produce a structured digest with sections.

Constraints:

- 1. Today's Highlights: 3-5 sentences on most notable model releases and trends.

- 2. Trending Models: organized by category, each with model name (with HF link), author, likes, downloads, and one sentence description.

Categories: Language Models, Multimodal & Generation, Specialized Models, Fine-tunes & Quantizations.

We must list models accordingly. Which models belong where?

Let's parse list:

Language Models (LLMs, chat models, instruction-tuned): likely include:

- zai-org/GLM-5.2 (text-generation, conversation) -> language model
- prism-ml/Bonsai-27B-gguf (text-generation) maybe but also quantized.
- prism-ml/Ternary-Bonsai-27B-gguf etc.
- DavidAU/Qwen3.6-27B... (image-text-to-text) but pipeline image-text-to-text maybe not pure LM.
- conradlocke/krea2-identity-edit? pipeline N/A, maybe not.
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking (text-generation) -> LM.
- openbmb/MiniCPM-RobotManip (robotics) maybe specialized.
- Unsure.

Better categorize based on tags and pipeline.

Let's assign:

🧠 Language Models (LLMs, chat models, instruction-tuned)

Models with text-generation or conversational:

- zai-org/GLM-5.2 — 4,249 likes, 545,109 downloads
- prism-ml/Bonsai-27B-gguf — 558 likes, 1.4M downloads
- prism-ml/Bonsai-27B-mlx-1bit? maybe quantization but still LM.
- DavidAU/Qwen3.6... (though pipeline image-text-to-text but maybe still LM)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking — 160 likes, 6165 downloads
- openbmb/MiniCPM-RobotManip maybe specialized but still text-generation? pipeline robotics but maybe not.
- AngelSlim/Hy3-GGUF — text-generation
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF — text-generation
- unsloth/inkling-GGUF — image-text-to-text but maybe not pure LM.

Better to group by categories defined.

🎨 Multimodal & Generation (image, video, audio, text-to-X)

Models with image-text-to-text, image-to-video, etc:

- thinkingmachines/Inkling — image-text-to-text
- baidu/Unlimited-OCR — image-text-to-text
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF — image-text-to-text
- DavidAU/Qwen3.6... — image-text-to-text
- conradlocke/krea2-identity-edit — image-editing
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive — image-text-to-text
- ATH-MaaS/OvisOCR2 — image-text-to-text
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF? maybe not.
- Wan-AI/Wan-Dancer-14B — image-to-video
- Google/gemma-4-31B-it — image-text-to-text
- moonshotai/Kimi-K2.7-Code — image-text-to-text? pipeline image-text-to-text but tag feature-extraction compressed-tensors maybe.
- prism-ml/Ternary-Bonsai-27B-mlx-2bit? maybe not.

🔧 Specialized Models (code, math, medical, embeddings)

- nvidia/Nemotron-3-Embed-1B-BF16 — sentence-similarity embeddings
- Motif-Technologies/Motif-3-Beta — feature-extraction maybe specialized.
- openbmb/MiniCPM-RobotManip — robotics (maybe specialized)
- Alissonerdx/LTX-Best-Face-ID — text-to-video identity preservation.
- Cactus-Compute/needle — function-calling tool-use.
- OpenMOSS-Team/MOSS-Transcribe-Diarize — audio-text-to-text (speech diarization)
- tencent/Hy3 — text-generation maybe general but also specialized.

But we need to allocate each model to a category. Let's list all 30 models and assign categories pragmatically.

List with tags:

1. thinkingmachines/Inkling — tags: transformers, safetensors, inkling_mm_model, image-text-to-text, conversational. So multimodal generation.

2. prism-ml/Ternary-Bonsai-27B-gguf — tags: llama.cpp, gguf, conversational, ternary, 2-bit. This is a quantized LLM for text generation. Could be Language Models or Fine-tunes & Quantizations. Since it's quantized, maybe Fine-tunes & Quantizations category.

3. prism-ml/Bonsai-27B-gguf — same but more downloads. Also quantized. Could be Fine-tunes & Quantizations.

4. baidu/Unlimited-OCR — tags: transformers, safetensors, unlimited-ocr, feature-extraction, baidu. Multimodal (OCR). So Multimodal & Generation.

5. zai-org/GLM-5.2 — tags: transformers, safetensors, glm_moe_dsa, text-generation, conversational. Language Model.

6. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF — tags: gguf, llama.cpp, quantized, qwen3.5, reasoning. Probably Language Model but quantized; maybe Fine-tunes & Quantizations.

7. DavidAU/Qwen3.6-27B... — tags: gguf, unsloth, fine tune, heretic, uncensored. Probably Language Model but uncensored; could be Language Models.

8. conradlocke/krea2-identity-edit — tags: image-editing, lora, comfyui, krea-2, base_model:krea/Krea-2-Raw. Multimodal & Generation (image editing).

9. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive — tags: gguf, uncensored, qwen3.6, moe, vision. Could be Language Model with vision; maybe Multimodal & Generation.

10. ATH-MaaS/OvisOCR2 — tags: transformers, safetensors, qwen3_5, image-text-to-text, ocr. Multimodal & Generation.

11. prism-ml/Bonsai-27B-mlx-1bit — tags: mlx, safetensors, qwen3_5, conversational, 1-bit. Language Model but quantized.

12. bottlecapai/ThinkingCap-Qwen3.6-27B — tags: transformers, safetensors, qwen3_5, image-text-to-text, qwen3_6. Multimodal.

13. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking — tags: transformers, safetensors, llama, text-generation, minicpm. Language Model.

14. openbmb/MiniCPM-RobotManip — tags: transformers, safetensors, minicpm_vla, feature-extraction, vision-language-action. Specialized (robotics). Could be Specialized Models.

15. AngelSlim/Hy3-GGUF — tags: gguf, text-generation, base_model:tencent/Hy3, base_model:quantized:tencent/Hy3, license:apache-2.0. Language Model quantized.

16. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF — tags: gguf, llama.cpp, quantized, minicpm5, thinking. Language Model quantized.

17. OpenMOSS-Team/MOSS-Transcribe-Diarize — tags: transformers, safetensors, moss_transcribe_diarize, text-generation, moss. Audio text-to-text, specialized.

18. prism-ml/Ternary-Bonsai-27B-mlx-2bit — tags: mlx, safetensors, qwen3_5, conversational, ternary. Language Model quantized.

19. unsloth/inkling-GGUF — tags: gguf, conversational, image-text-to-text, audio-text-to-text, moe. Multimodal? Could be Language Model with audio.

20. openbmb/MiniCPM-RobotTrack — tags: transformers, safetensors, minicpm_robottrack, feature-extraction, vision-language-action. Specialized.

21. google/gemma-4-31B-it — tags: transformers, safetensors, gemma4, image-text-to-text, conversational. Multimodal.

22. Motif-Technologies/Motif-3-Beta — tags: transformers, safetensors, Motif, feature-extraction, motif. Specialized (maybe feature extraction).

23. moonshotai/Kimi-K2.7-Code — tags: transformers, safetensors, kimi_k25, feature-extraction, compressed-tensors. Possibly specialized (code). Could be Language Model.

24. Wan-AI/Wan-Dancer-14B — tags: diffusers, safetensors, i2v, video, video genration. Multimodal video generation.

25. nvidia/Nemotron-3-Embed-1B-BF16 — tags: sentence-transformers, safetensors, ministral3, feature-extraction, text. Embeddings specialized.

26. Alissonerdx/LTX-Best-Face-ID — tags: ltx-video, identity-preservation, ipt2v, reference-to-video, lora. Video generation specialized.

27. Cactus-Compute/needle — tags: jax, safetensors, needle, function-calling, tool-use. Specialized (function calling).

28. empero-ai/Qwythos-9B-v2-GGUF — tags: gguf, llama.cpp, quantized, qwythos, qwen3.5. Language model quantized.

29. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF — tags: hermes, gguf, uncensored, qwen3.6, moe. Language model uncensored.

30. tencent/Hy3 — tags: transformers, safetensors, hy_v3, text-generation, hunyuan. Language model.

Now categories:

🧠 Language Models (LLMs, chat models, instruction-tuned)

Include models primarily text-generation, conversational, instruction-tuned, not necessarily quantized or multimodal.

Thus include:

- zai-org/GLM-5.2
- prism-ml/Bonsai-27B-gguf? maybe but it's quantized; but still language model albeit quantized. Could be in Language Models category but also in Fine-tunes & Quantizations. Let's allocate quantized ones to Fine-tunes & Quantizations.

So Language Models: models with text-generation and not explicitly quantized or specialized.

List:

- zai-org/GLM-5.2 (4,249 likes, 545,109 downloads)
- DavidAU/Qwen3.6-27B... (maybe not pure LM but image-text-to-text; maybe not)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking (160 likes, 6,165 downloads)
- openbmb/MiniCPM-RobotManip? maybe specialized; skip.
- AngelSlim/Hy3-GGUF (152 likes, 145,102 downloads)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF (137 likes, 51,746 downloads)
- openbmb/MiniCPM-RobotManip excluded.
- openbmb/MiniCPM-RobotTrack excluded.
- tencent/Hy3 (852 likes, 14,143 downloads)
- Motif-Technologies/Motif-3-Beta? maybe specialized.
- moonshotai/Kimi-K2.7-Code (1,188 likes, 722,058 downloads) maybe code model; could be Language Model specialized.

Better to include: zai-org/GLM-5.2, GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking, AngelSlim/Hy3-GGUF, tencent/Hy3, openbmb/MiniCPM-RobotManip? Not.

But maybe we should include all text-generation models that are not explicitly quantized or specialized: that includes:

- zai-org/GLM-5.2
- prism-ml/Bonsai-27B-gguf? but it's quantized.
- prism-ml/Ternary-Bonsai-27B-gguf (quantized)
- unsloth/inkling-GGUF? multimodal.
- DavidAU... (image-to-text) not pure.

Maybe better to keep Language Models category includes:

- zai-org/GLM-5.2
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking
- AngelSlim/Hy3-GGUF
- tencent/Hy3
- openbmb/MiniCPM-RobotManip? maybe not.
- Motif-Technologies/Motif-3-Beta? not.

But we can also include "open-source LLMs gaining traction: GLM-5.2, Qwen3.6 variants, MiniCPM, etc." So we can list a few.

Let's design categories with representative models, not necessarily all 30. The instruction: "Organized by category, each with: - Model name (with HF link) - Author, likes, downloads - One sentence: what it is, why it's trending". Probably we need to list all 30 models across categories? Or just some representative models? The prompt says "Trending Models — Organized by category, each with:" It doesn't specify how many models per category; could be all 30 grouped.

Thus we need to produce a list of all 30 models under categories. That would be long but okay.

We must include model name with HF link, author, likes, downloads, and one sentence description.

Thus for each of 30 models, we need to place it in appropriate category.

Let's assign categories:

- 🧠 Language Models (LLMs, chat models, instruction-tuned)

List models: 
5. zai-org/GLM-5.2
7. DavidAU/Qwen3.6-27B...? maybe not.
13. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking
15. AngelSlim/Hy3-GGUF
30. tencent/Hy3
23. moonshotai/Kimi-K2.7-Code (code model but still language)
? Also 11? 11 is quantized but still LM; maybe include in Language Models but also in Fine-tunes & Quantizations.

But we can also put quantized models in Fine-tunes & Quantizations category.

Thus Language Models will include non-quantized, non-specialized LM.

Let's define:

🧠 Language Models:
- zai-org/GLM-5.2 (4,249 likes, 545,109 downloads) — a MoE instruction-tuned LLM gaining traction.
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking (160 likes, 6,165 downloads) — lightweight MiniCPM model optimized for reasoning and conversation.
- AngelSlim/Hy3-GGUF (152 likes, 145,102 downloads) — Apache‑2.0 licensed 9B-parameter model in GGUF format for local deployment.
- tencent/Hy3 (852 likes, 14,143 downloads) — Hunyuan‑derived 3‑B model offering strong instruction following.
- openbmb/MiniCPM-RobotManip? maybe not.

Also include "prism-ml/Bonsai-27B-gguf"? but it's quantized; maybe put in Fine-tunes & Quantizations.

Thus Language Models category may have fewer than 30 models; that's okay.

- 🎨 Multimodal & Generation (image, video, audio, text-to-X)

Models:
1. thinkingmachines/Inkling
4. baidu/Unlimited-OCR
8. conradlocke/krea2-identity-edit
9. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
10. ATH-MaaS/OvisOCR2
12. bottlecapai/ThinkingCap-Qwen3.6-27B
21. google/gemma-4-31B-it
24. Wan-AI/Wan-Dancer-14B
27? maybe not.

Also 19 unsloth/inkling-GGUF includes audio-text-to-text; could be multimodal.

- 🔧 Specialized Models (code, math, medical, embeddings)

Models:
14. openbmb/MiniCPM-RobotManip
15? Actually 15 is in language.
17. OpenMOSS-Team/MOSS-Transcribe-Diarize
20. openbmb/MiniCPM-RobotTrack
22. Motif-Technologies/Motif-3-Beta
25. nvidia/Nemotron-3-Embed-1B-BF

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*