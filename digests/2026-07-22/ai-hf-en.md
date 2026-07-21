# Hugging Face Trending Models Digest 2026-07-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 22:16 UTC

---

We need to produce a structured digest as described. Must include Today's Highlights (3-5 sentences), Trending Models organized by category with model name (with HF link), author, likes, downloads, one sentence description. Categories: Language Models, Multimodal & Generation, Specialized Models, Fine-tunes & Quantizations.

We have 30 models listed. Need to categorize them appropriately.

First, scan models and categorize.

List with tags:

1. thinkingmachines/Inkling - image-text-to-text, tags: transformers, safetensors, inkling_mm_model, image-text-to-text, conversational => Multimodal & Generation? Could be language? It's image-text-to-text, so multimodal generation.

2. prism-ml/Ternary-Bonsai-27B-gguf - text-generation, tags: llama.cpp, gguf, conversational, ternary, 2-bit => Fine-tunes & Quantizations (quantized) but also language model. Could be Language Models category.

3. baidu/Unlimited-OCR - image-text-to-text => Multimodal & Generation.

4. prism-ml/Bonsai-27B-gguf - text-generation => Fine-tunes & Quantizations.

5. zai-org/GLM-5.2 - text-generation => Language Models.

6. DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF - image-text-to-text => Multimodal & Generation? Also quantized.

7. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive - image-text-to-text => Multimodal & Generation.

8. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF - image-text-to-text => Multimodal & Generation.

9. conradlocke/krea2-identity-edit - image-editing => Multimodal & Generation (image editing).

10. ATH-MaaS/OvisOCR2 - image-text-to-text => Multimodal & Generation.

11. poolside/Laguna-S-2.1 - text-generation => Language Models.

12. prism-ml/Bonsai-27B-mlx-1bit - text-generation => Fine-tunes & Quantizations.

13. bottlecapai/ThinkingCap-Qwen3.6-27B - image-text-to-text => Multimodal & Generation.

14. openbmb/MiniCPM-RobotManip - robotics => Specialized Models (robotics).

15. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF - text-generation => Fine-tunes & Quantizations.

16. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking - text-generation => Fine-tunes & Quantizations.

17. Motif-Technologies/Motif-3-Beta - text-generation => Specialized Models? maybe language but small.

18. unsloth/inkling-GGUF - image-text-to-text => Multimodal & Generation.

19. prism-ml/Ternary-Bonsai-27B-mlx-2bit - text-generation => Fine-tunes & Quantizations.

20. OpenMOSS-Team/MOSS-Transcribe-Diarize - audio-text-to-text => Multimodal & Generation (audio).

21. AngelSlim/Hy3-GGUF - text-generation => Fine-tunes & Quantizations.

22. reteetzad/Kimi-K3 - N/A, tags region:us => maybe not relevant.

23. moonshotai/Kimi-K2.7-Code - image-text-to-text => Multimodal & Generation? Actually code? tags: transformers, safetensors, kimi_k25, feature-extraction, compressed-tensors. Could be Specialized Models (code). But pipeline image-text-to-text, so multimodal.

24. openbmb/MiniCPM-RobotTrack - robotics => Specialized Models.

25. google/gemma-4-31B-it - image-text-to-text => Multimodal & Generation.

26. nvidia/Nemotron-3-Embed-1B-BF16 - sentence-similarity => Specialized Models (embeddings).

27. Alissonerdx/LTX-Best-Face-ID - text-to-video => Multimodal & Generation.

28. Cactus-Compute/needle - N/A tags: jax, safetensors, needle, function-calling, tool-use => maybe Specialized Models (function calling).

29. Wan-AI/Wan-Dancer-14B - image-to-video => Multimodal & Generation.

30. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF - image-text-to-text => Multimodal & Generation.

Now categories:

- 🧠 Language Models (LLMs, chat models, instruction-tuned)
Include models primarily for text generation, conversation, instruction tuning. Likely: 2 (Ternary-Bonsai), 4 (Bonsai-27B-gguf), 5 (GLM-5.2), 11 (Laguna-S-2.1), 12 (Bonsai-27B-mlx-1bit), 15 (MiniCPM5...), 16 (MiniCPM5...), 19 (Ternary-Bonsai-mlx-2bit), 21 (Hy3-GGUF), maybe 25? but it's image-text-to-text, not pure language. Also 1 (Inkling) is image-text-to-text but includes conversational tag; but it's multimodal. So keep language models separate.

Thus list language models: 2,4,5,11,12,15,16,19,21 maybe also 1? but it's multimodal. Also 6? no. Also 9? no.

But we need to include only those that fit category: language models. So pick those with pipeline text-generation and not multimodal. Those: 2,4,5,11,12,15,16,19,21. Also maybe 1? but it's image-text-to-text, so not pure language. So exclude.

- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
Include: 1 (Inkling), 3 (Unlimited-OCR), 6 (DavidAU...), 7 (HauhauCS...), 8 (Qwythos...), 9 (krea2-identity-edit), 10 (OvisOCR2), 13 (ThinkingCap...), 18 (unsloth/inkling-GGUF), 20 (MOSS-Transcribe-Diarize), 23 (Kimi-K2.7-Code) maybe, 25 (gemma-4-31B-it), 27 (LTX-Best-Face-ID), 29 (Wan-Dancer-14B), 30 (LuffyTheFox...), also 14? robotics? but that's specialized. Also 15? no. Also 24? robotics. Also 28? needle? Not multimodal. So list accordingly.

- 🔧 Specialized Models (code, math, medical, embeddings)
Include: 14 (MiniCPM-RobotManip), 17 (Motif-3-Beta?) maybe not, 26 (Nemotron-3-Embed-1B-BF16) (embeddings), 28 (needle) (function calling), maybe 23 (Kimi-K2.7-Code) but it's image-text-to-text but code? tags include code? It says feature-extraction, compressed-tensors. Might be specialized. Also 15? fine-tunes? But we can include 14, 26, 28, maybe 17 (Motif) but it's text-generation; could be specialized. Also 24 (RobotTrack) specialized robotics. So categorize.

- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
Include models that are quantized versions, GGUF, etc: 2 (Ternary-Bonsai-27B-gguf), 4 (Bonsai-27B-gguf), 6 (DavidAU...-GGUF), 8 (Qwythos...-GGUF), 12 (Bonsai-27B-mlx-1bit), 15 (MiniCPM5...-GGUF), 16 (MiniCPM5...), 19 (Ternary-Bonsai-mlx-2bit), 21 (Hy3-GGUF), also maybe 18 (inkling-GGUF) but it's multimodal; but still quantization. Could be included. Also 5? not quantized. So include those.

Now need to present each category with models organized, each with model name (with HF link), author, likes, downloads, one sentence description.

We have to preserve all HF links.

We need to be concise but include all models? The prompt says "Organized by category, each with: Model name (with HF link) Author, likes, downloads One sentence: what it is, why it's trending". It doesn't say we must include all 30 models; we can include those that fit categories. Probably we should list all models aggregated across categories, but not necessarily all 30; we can include those that are trending. But to be thorough, we can include all models under categories, maybe each model appears once. That would be lengthy but okay.

We have 30 models; we can allocate them across categories accordingly. Let's map each model to a category:

1. Inkling - Multimodal & Generation
2. Ternary-Bonsai-27B-gguf - Fine-tunes & Quantizations
3. Unlimited-OCR - Multimodal & Generation
4. Bonsai-27B-gguf - Fine-tunes & Quantizations
5. GLM-5.2 - Language Models (LLM)
6. DavidAU...-GGUF - Multimodal & Generation (also quantized)
7. HauhauCS...-Aggressive - Multimodal & Generation
8. Qwythos-9B...-GGUF - Multimodal & Generation (quantized)
9. krea2-identity-edit - Multimodal & Generation (image editing)
10. OvisOCR2 - Multimodal & Generation
11. Laguna-S-2.1 - Language Models
12. Bonsai-27B-mlx-1bit - Fine-tunes & Quantizations
13. ThinkingCap-Qwen3.6-27B - Multimodal & Generation
14. MiniCPM-RobotManip - Specialized Models (robotics)
15. MiniCPM5-1B...-GGUF - Fine-tunes & Quantizations
16. MiniCPM5-1B... (Thinking) - Fine-tunes & Quantizations
17. Motif-3-Beta - Specialized Models? maybe Language but small; could be Specialized Models (feature extraction)
18. inkling-GGUF - Multimodal & Generation (quantized)
19. Ternary-Bonsai-27B-mlx-2bit - Fine-tunes & Quantizations
20. MOSS-Transcribe-Diarize - Multimodal & Generation (audio)
21. Hy3-GGUF - Fine-tunes & Quantizations
22. Kimi-K3 - Not enough info; maybe Specialized Models (region:us) but we can ignore or put in Specialized Models? It has 0 downloads, maybe not trending. Could be omitted.
23. Kimi-K2.7-Code - Multimodal & Generation? Actually pipeline image-text-to-text but tags include compressed-tensors; maybe Multimodal & Generation.
24. MiniCPM-RobotTrack - Specialized Models (robotics)
25. gemma-4-31B-it - Multimodal & Generation
26. Nemotron-3-Embed-1B-BF16 - Specialized Models (embeddings)
27. LTX-Best-Face-ID - Multimodal & Generation (text-to-video)
28. needle - Specialized Models (function calling)
29. Wan-Dancer-14B - Multimodal & Generation (image-to-video)
30. Qwen3.6-35B...-Genesis-Hermes-V3-GGUF - Multimodal & Generation (quantized)

Now we need to produce structured digest.

Section 1: Today's Highlights (3-5 sentences) summarizing notable releases/trends.

Section 2: Trending Models organized by category. For each category, list models with details.

We need to include model name with HF link, author, likes, downloads, one sentence description.

We must preserve all HF links.

We need to keep concise but include all relevant models. Could be many; but we can list each model in bullet format.

Make sure to include likes and downloads numbers as given.

Now produce the digest.

Let's craft Today's Highlights: mention surge in quantized Qwen3.6 variants, growth of multimodal OCR models, introduction of Gemini 4? Actually gemma-4-31B-it is high downloads. Also mention community fine-tunes like Bonsai series, Ternary Bonsai, etc. Also mention robotics models from MiniCPM. Also mention embeddings model from NVIDIA. Provide 3-5 sentences.

Now Trending Models section: We'll have four categories with bullet lists.

We'll need to format like:

### 🧠 Language Models
- **[Model Name](URL)** — *Author* — Likes: X | Downloads: Y — *One sentence description.*

Similarly for other categories.

Make sure to preserve link formatting.

Now Ecosystem Signal: 100-200 words analyzing trends.

Worth Exploring: 2-3 models with reasoning.

Now produce final answer.

Let's gather data:

Model details:

1. thinkingmachines/Inkling
Link: https://huggingface.co/thinkingmachines/Inkling
Author: thinkingmachines
Likes: 1,353
Downloads: 16,441
Tags: transformers, safetensors, inkling_mm_model, image-text-to-text, conversational

One sentence: A conversational multimodal model that takes image and text prompts to generate textual responses, gaining traction for interactive AI applications.

2. prism-ml/Ternary-Bonsai-27B-gguf
Link: https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
Author: prism-ml
Likes: 897
Downloads: 432,196
Tags: llama.cpp, gguf, conversational, ternary, 2-bit

One sentence: A 27‑billion‑parameter LLM quantized to 2‑bit ternary precision via GGUF, offering high efficiency and conversational capability.

3. baidu/Unlimited-OCR
Link: https://huggingface.co/baidu/Unlimited-OCR
Author: baidu
Likes: 2,597
Downloads: 2,237,351
Tags: transformers, safetensors, unlimited-ocr, feature-extraction, baidu

One sentence: An OCR pipeline that extracts and translates text from images with high accuracy, becoming a go‑to tool for document digitization.

4. prism-ml/Bonsai-27B-gguf
Link: https://huggingface.co/prism-ml/Bonsai-27B-gguf
Author: prism-ml
Likes: 570
Downloads: 1,404,962
Tags: llama.cpp, gguf, conversational, 1-bit, llama-cpp

One sentence: A 27‑B parameter model compressed to 1‑bit using GGUF, delivering strong conversational performance with minimal resource footprint.

5. zai-org/GLM-5.2
Link: https://huggingface.co/zai-org/GLM-5.2
Author: zai-org
Likes: 4,270
Downloads: 545,109
Tags: transformers, safetensors, glm_moe_dsa, text-generation, conversational

One sentence: A MoE‑based LLM from ZAI featuring GLM architecture, offering multilingual instruction following and high generation quality.

6. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
Link: https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
Author: DavidAU
Likes: 233
Downloads: 62,842
Tags: gguf, unsloth, fine tune, heretic, uncensored

One sentence: A fine‑tuned Qwen‑3.6 27B model in GGUF format, emphasizing uncensored, creative outputs for storytelling and role‑play.

7. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
Link: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
Author: HauhauCS
Likes: 2,968
Downloads: 1,997,690
Tags: gguf, uncensored, qwen3.6, moe, vision

One sentence: A 35‑B Qwen‑3.6 variant with aggressive uncensored tuning, optimized for vision‑language tasks and open‑source distribution.

8. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
Link: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*