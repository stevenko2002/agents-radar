# Hugging Face Trending Models Digest 2026-10-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-11 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-10-12

## 1. Today's Highlights

The Qwen ecosystem dominates this week's trending charts, with **Qwen3.8-27B** (#9, 17.5K likes, 6.8M downloads) and **Qwen3.8-Flash-Next** (#22) driving a massive wave of quantizations, fine-tunes, and "uncensored" derivatives. Video generation is having a moment: **Lightricks/LTX-2.5** leads all models in likes (7.3K) with 1.7M downloads, while Qwen's image models see both official releases (Qwen-Image-2.1, Turbo) and hugely popular community GGUF variants. Enterprise players are unusually visible — Cloudflare entered the VLM space with **clef** and **clef-flash**, and Google's **embeddinggemma-2** tops the like count at #1, signaling strong demand for compact, high-quality embeddings. Meanwhile, Facebook's **sam3** and a lively community fine-tune scene (DavidAU, ISTA-DASLab, unsloth) round out a week defined by multimodal expansion and aggressive quantization.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen, 17,503 likes, 6,843,108 downloads
  Qwen's flagship 27B image-text-to-text model, dominating both likes and downloads as this week's anchor release.
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen, 6,112 likes, 1,870,465 downloads
  A fast, conversational multimodal successor tagged with the new `qwen4_exp` architecture, trending on speed and freshness.
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai, 4,362 likes, 1,382,367 downloads
  DeepSeek's lightweight V4.1 multimodal variant, gaining strong traction against Qwen's dominance.
- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha, 887 likes, 12,550 downloads
  A reasoning-focused MoE model with vLLM support, notable as a rare European-lab entrant in the trending ranks.
- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research, 689 likes, 48,389 downloads
  A MoE-style 29B (A4B active) release in GGUF format, appealing to efficient local-inference users.
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml, 2,629 likes, 4,549,911 downloads
  A ternary 2-bit 27B model for llama.cpp, trending on extreme quantization efficiency at scale.
- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch, 320 likes, 108,900 downloads
  A 2-bit GGUF fine-tune with native tool/function calling, popular for agentic local use.
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations, 5,489 likes, 44,088 downloads
  A "system-one" calibrated-decision text classifier with unusually high likes for classification — a standout niche hit.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks, 7,305 likes, 1,726,683 downloads
  The week's most-liked model: image-to-video/text-to-video/video-to-video generation in a single-file diffusion format.
- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook, 4,058 likes, 2,081,596 downloads
  Segment Anything 3 with video support (`sam3_video`), the go-to open segmentation foundation model.
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen, 3,225 likes, 136,103 downloads
  Qwen's full image generation + editing release, quickly becoming the community's fine-tune base.
- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen, 534 likes, 4,702 downloads
  A faster distilled variant of Qwen-Image-2.1, just released and early in its adoption curve.
- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare, 2,025 likes, 14,351 downloads
  Cloudflare's surprise entry: a Qwen3.5-based image-text-to-text model with strong like-to-download momentum.
- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare, 754 likes, 22,123 downloads
  A faster clef variant, showing Cloudflare is building a proper model family.
- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI, 296 likes, 10,843 downloads
  A compact LFM2-VL edge-oriented vision-language model, trending with the on-device AI crowd.
- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute, 334 likes, 16,434 downloads
  On-device speech recognition model, part of the growing edge/phone-first ASR trend.
- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk, 356 likes, 18,079 downloads
  Turkish-language TTS, reflecting growing non-English speech synthesis interest.
- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing, 160 likes, 0 downloads
  Joint video + audio diffusion transformer — early but notable for combined audiovisual generation.
- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)** — speridlabs, 147 likes, 393 downloads
  A 3B pixel-space diffusion text-to-image model, an interesting anti-latent-diffusion experiment.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google, 1,684 likes, 98,829 downloads
  Google's newest embedding model, #1 by likes — signaling hot demand for compact multimodal-capable embeddings.
- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth, 253 likes, 59,274 downloads
  Instant GGUF conversion of embeddinggemma-2 with multimodal embedding support for local RAG.
- **[nerkyor/Qwen3.8-27B-Coder390-...-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — nerkyor, 233 likes, 56,525 downloads
  A maximalist reasoning/code merge of Qwen3.8-27B, trending for its ambitious multi-technique training stack.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth, 5,026 likes, 6,488,262 downloads
  The highest-download model on the list — unsloth's instant GGUF quantization of Qwen3.8-27B for llama.cpp users.
- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab, 797 likes, 4,189,006 downloads
  GSQ mixed-precision quantization of Flash-Next with 4.1M downloads within days of the base release.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab, 2,148 likes, 1,489,676 downloads
  The research lab's 27B GSQ/RCO quantization, standardizing next-gen quant formats.
- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps, 3,973 likes, 2,188,658 downloads
  Uncensored GGUF of Qwen-Image-2.1 for ComfyUI, one of the fastest-growing image-gen repos this week.
- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU, 1,654 likes, 2,016,567 downloads
  Characteristically maximal DavidAU uncensored creative/coder fine-tune, with 2M downloads showing the demand.
- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** — AtomicChat, 319 likes, 100,530 downloads
  ComfyUI-ready uncensored Turbo quant, riding the Qwen-Image fine-tune wave.
- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter, 756 likes, 614,193 downloads
  Abliterated/uncensored Flash-Next GGUF, consistent with the persistent community demand for restriction-free variants.

## 3. Ecosystem Signal

Qwen is unambiguously the center of gravity this week: Qwen3.8-27B and Qwen3.8-Flash-Next anchor nearly a third of trending entries, with an ecosystem that spun up GGUF quantizations (unsloth, ISTA-DASLab), uncensored derivatives (DavidAU, orcarouter), and specialist merges within days of release. Quantization technology itself is evolving — ISTA-DASLab's GSQ/RCO mixed-precision and prism-ml's ternary 2-bit Bonsai at 4.5M downloads suggest extreme low-bit inference has moved from curiosity to mainstream. The open-weight multimodal frontier is broadening beyond text: video generation (LTX-2.5), segmentation (sam3), on-device ASR and TTS, and edge VLMs (LiquidAI d1-3B) all trend simultaneously. Notably, enterprises are publishing open weights directly — Cloudflare's clef family and Google's embeddinggemma-2 — indicating that open release remains a viable distribution strategy even for large companies. The persistent "uncensored/abliterated" fine-tune demand, with multiple 2M+ download repos, remains the community's most commercially visible niche.

## 4. Worth Exploring

1. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — The most-liked model on the Hub this week. Its multimodal embedding capability (see the unsloth GGUF variant) makes it a strong candidate for next-gen local RAG pipelines; embeddings are often the quietest but highest-ROI upgrades.
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Leading the entire chart in likes with a diffusion-single-file format covering image-to-video, text-to-video, and video-to-video. For anyone tracking generative video's practical usability, this is the model to benchmark.
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — A 27B model running at ternary 2-bit precision with 4.5M downloads. Studying its quality-vs-compression tradeoff offers a preview of where ultra-efficient local inference is headed, alongside ISTA-DASLab's GSQ work.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*