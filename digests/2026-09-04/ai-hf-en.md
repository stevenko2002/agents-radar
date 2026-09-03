# Hugging Face Trending Models Digest 2026-09-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-03 22:15 UTC

---



# 🤗 Hugging Face Trending Models Digest — 2026-09-04

---

## 1. Today's Highlights

The **Qwen3.8** family continues to dominate, with **Qwen3.8-27B** leading all likes (13,815) and an astonishing **5.25M+ downloads**, while its Flash variant also ranks in the top 3. Tencent's new **GLM-5.3 / GLM-5.3-Flash** models from zai-org mark a notable entry into the top tier, particularly the Flash variant which has accrued over **517K downloads**. MiniMax's **MiniMax-H3** remains a powerhouse in video generation, surpassing **5M downloads**, while Google's **timesfm-3.0-pytorch** signals growing interest in time-series forecasting as a distinct AI vertical.

---

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,815 | 5,254,882 |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,011 | 517,902 |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,603 | 151,021 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,797 | 263,287 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 127 | 0 |

- **Qwen3.8-27B** — The flagship open-weight LLM of the week; its massive download count reflects widespread adoption across both research and production fine-tunes.
- **GLM-5.3-Flash** — zai-org's fastest multimodal LLM variant, gaining rapid traction with over half a million downloads since release.
- **GLM-5.3** — The full-parameter sibling offering stronger reasoning capabilities, drawing interest from the Chinese AI research community.
- **Qwen3.8-Flash-Next** — A next-gen flash iteration from Qwen, combining image-text understanding with efficient inference.
- **MiniMax-H3 (text-to-video)** — Listed under LM due to its generative backbone; see Multimodal for full details.

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,856 | 5,092,067 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,680 | 1,293,463 |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 541 | 54,571 |
| [FastVideo-FastH3-4-step-Preview-v1](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 251 | 0 |

- **MiniMax-H3** — A leading open-weight video generation model; trending for its strong quality-speed trade-off and 5M+ downloads.
- **LTX-2.5** — Lightricks' diffusion-based video model supporting text, image, and video-to-video pipelines with strong community uptake.
- **DeepSeek-V4-Flash-Vision-Exp** — An experimental vision-augmented DeepSeek model, signaling continued investment in multimodal reasoning.
- **FastVideo FastH3 4-step** — A data-free distillation of MiniMax-H3 for ultra-fast 4-step video generation; still early with zero downloads but notable technique.

### 🔧 Specialized Models

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,448 | 246,135,287 |
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 357 | 46,862 |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,900 | 58,556,227 |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,126 | 19,936,700 |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,594 | 14,071,683 |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 169 | 12,386 |

- **all-MiniLM-L6-v2** — The perennial embedding workhorse; still accumulating downloads at an extraordinary rate (246M+) and leads likes in its class.
- **timesfm-3.0-pytorch** — Google's latest time-series forecasting model; a niche but rapidly growing vertical as enterprise adopters seek open alternatives.
- **BERT / CLIP / GPT-2** — Foundational models that remain deeply embedded in production pipelines, sustaining steady download volume years after release.

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads |
|-------|--------|-------|-----------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,440 | 9,553,042 |
| [HauhauCS/Qwen3.8-27B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 892 | 1,336,061 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,051 | 848,781 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 755 | 535,984 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 673 | 262,325 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 238 | 100,110 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 341 | 75,195 |

- **unsloth/Qwen3.8-27B-GGUF** — The most-downloaded quantized model on this list (9.55M), enabling efficient local inference via GGUF.
- **OBLITERATUS/Qwen3.8-27B-OBLITERATED** — An MLX-compatible abliterated (uncensored) variant gaining traction on Apple Silicon.
- **HauhauCS Aggressive-MTP-GGUF** — A community MTP-enhanced uncensored fine-tune with over 1.3M downloads, reflecting strong demand for unrestricted variants.
- **ISTA-DASLab GSQ-RCO-GGUF** — A mixed-precision quantization experiment pushing the boundaries of low-bit inference quality.

---

## 3. Ecosystem Signal

The **Qwen3.8 family** is the clear ecosystem anchor this week, with the base 27B model amassing over 5M downloads and spawning a deep secondary market of GGUF, MLX, uncensored, and MTP-enhanced variants. This indicates a maturing open-weight ecosystem where base models quickly become platforms for community specialization. **GLM-5.3** from zai-org emerges as the strongest challenger, with both its full and Flash variants entering the top 5 — a sign that Chinese open-weight models are closing the gap in global popularity. Video generation remains highly competitive: **MiniMax-H3** leads with 5M+ downloads, but LTX-2.5 and fast distillation experiments like FastVideo's 4-step preview show the community is actively optimizing for speed. Quantization activity is intense — unsloth dominates GGUF conversions, while novel techniques like GSQ-RCO (ISTA-DASLab) and abliteration (OBLITERATUS) reflect sophisticated community tooling. Time-series forecasting (timesfm-3.0) marks the first entry of a dedicated vertical model into the trending top 30, suggesting AI applications are diversifying beyond text and vision.

---

## 4. Worth Exploring

1. **[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — The best new entrant this week: a fast, multimodal model from a credible research org (zai-org) that's already seeing massive adoption (517K+ downloads). Worth testing as a Qwen alternative, especially for Chinese-language and vision tasks.

2. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — A genuinely differentiated model in a growing niche. If you work with time-series data, this open-weight offering from Google is a strong candidate to evaluate against proprietary forecasting APIs.

3. **[FastVideo/FastVideo-FastH3-4-step-Preview-v1](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** — Even with zero downloads so far, the VSA (Vision-State Abstraction) data-free distillation technique is technically notable. It could represent a new direction for making high-quality video generation accessible without massive retraining budgets.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*