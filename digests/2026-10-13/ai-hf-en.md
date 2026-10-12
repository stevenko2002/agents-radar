# Hugging Face Trending Models Digest 2026-10-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-12 22:15 UTC

---

## Hugging Face Trending Models Digest — 2026-10-13

### 1. Today's Highlights
Qwen dominates the week: **Qwen/Qwen3.8-27B** leads by likes (17,575) and downloads (6,895,303), while **Qwen/Qwen3.8-Flash-Next**, **Qwen-Image-2.1**, and their GGUF derivatives appear across multiple categories. Video and image generation remain highly active, with **Lightricks/LTX-2.5** topping generative-model likes (7,470) and uncensored Qwen-Image quantizations pulling millions of downloads. Quantization and community fine-tuning are a major force, especially GGUF builds from unsloth, ISTA-DASLab, DavidAU, orcarouter, and AtomicChat. Specialized models such as **baidu/Unlimited-OCR**, **facebook/sam3**, and **google/embeddinggemma-2** show strong demand beyond chat, pointing to sustained interest in OCR, segmentation, and embeddings.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 17,575 likes | 6,895,303 downloads  
  Qwen’s flagship multimodal conversational model leads the week by likes, with massive downloads indicating broad deployment and use as a fine-tune base.
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 6,148 likes | 1,934,542 downloads  
  A faster “Flash” Qwen3.8 variant with strong conversational and image-text-to-text performance, trending for efficiency.
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 4,408 likes | 1,294,550 downloads  
  DeepSeek’s latest Flash release combines text-generation and image-text-to-text, drawing high downloads as an open-weight frontier-lab model.
- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare | 2,086 likes | 15,064 downloads  
  Cloudflare’s image-text-to-text model built on Qwen3.5, trending as an enterprise-friendly multimodal assistant.
- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | 1,310 likes | 46,070 downloads  
  A Gemma4-unified-based text-generation model positioned as a humanizer, popular for making generated text sound more natural.
- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 914 likes | 14,018 downloads  
  A vLLM-ready MoE reasoning model from Aleph-Alpha, attracting interest for efficient expert routing.
- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 784 likes | 23,285 downloads  
  A lighter, faster companion to clef, aimed at lower-latency image-text-to-text use cases.
- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI | 342 likes | 11,866 downloads  
  LiquidAI’s compact 3B image-text-to-text model, notable for bringing multimodal capability to small-device deployments.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 7,470 likes | 1,719,766 downloads  
  The top-liked generative model this week: a single-file diffusion model supporting image-to-video, text-to-video, and video-to-video.
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 3,259 likes | 142,375 downloads  
  Qwen’s main image-generation and editing release, trending for high-quality diffusion output and broad ComfyUI ecosystem interest.
- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen | 628 likes | 6,787 downloads  
  A faster Turbo variant of Qwen-Image-2.1, aimed at lower-step image generation and editing.
- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | 389 likes | 20,310 downloads  
  A Turkish text-to-speech model, notable for language-specific TTS quality and accessible speech synthesis.
- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)** — speridlabs | 189 likes | 706 downloads  
  A pixel-space text-to-image diffusion model, trending for its non-latent approach and compact 3B scale.
- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing | 175 likes | 0 downloads  
  A joint video-audio generation diffusion transformer, interesting for unified video and audio creation despite zero recorded downloads.

#### 🔧 Specialized Models (code, math, medical, embeddings)
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 5,535 likes | 45,062 downloads  
  A text-classification model for calibrated/system-one decisions, trending for decision-making and classification use cases.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 4,512 likes | 1,205,646 downloads  
  Baidu’s OCR model with over a million downloads, trending for robust unlimited-document OCR.
- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 4,149 likes | 2,054,071 downloads  
  Meta’s SAM3 video/mask-generation model, popular for segmentation and feature extraction across images and video.
- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 1,923 likes | 115,763 downloads  
  Google’s embedding Gemma model, leading feature-extraction interest for retrieval and semantic search.
- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | 360 likes | 18,643 downloads  
  An on-device automatic speech recognition model, trending for privacy-friendly, local speech-to-text.
- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth | 280 likes | 71,914 downloads  
  A GGUF quantization of embeddinggemma-2, making Google’s embedding model easier to run locally.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 5,056 likes | 6,597,425 downloads  
  Unsloth’s GGUF quantization of Qwen3.8-27B, one of the week’s most downloaded models, enabling local inference.
- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — abenzerps | 4,091 likes | 2,188,658 downloads  
  An uncensored, quantized Qwen-Image-2.1 derivative with over 2.1M downloads, trending in ComfyUI/GGUF circles.
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 2,175 likes | 1,482,471 downloads  
  A mixed-precision GSQ-RCO GGUF quantization of Qwen3.8-27B, notable for high compression and 1.48M downloads.
- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 1,693 likes | 2,025,498 downloads  
  A heavily merged, uncensored Qwen3.8-27B GGUF fine-tune, popular for creative and unrestricted local generation.
- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 828 likes | 4,413,142 downloads  
  A quantized GGUF build of Qwen3.8-Flash-Next, drawing millions of downloads for efficient Flash inference.
- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter | 810 likes | 629,886 downloads  
  An abliterated/uncensored GGUF variant of Qwen3.8-Flash-Next, trending for local uncensored chat.
- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 705 likes | 52,788 downloads  
  A 29B A4B MoE GGUF text-generation model, gaining traction for efficient sparse inference.
- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** — AtomicChat | 373 likes | 161,715 downloads  
  An uncensored GGUF build of Qwen-Image-2.1-Turbo for ComfyUI image generation.
- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch | 368 likes | 242,329 downloads  
  A 2-bit GGUF llama.cpp model tuned for tool/function calling, notable for extreme quantization and agentic use.
- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — nerkyor | 282 likes | 75,302 downloads  
  A long-name community merge of Qwen3.8-27B targeting coding, efficient thinking, and reasoning, representing the trend of kitchen-sink fine-tunes.

### 3. Ecosystem Signal
The week is dominated by Qwen. **Qwen3.8-27B**, **Qwen3.8-Flash-Next**, and the **Qwen-Image-2.1** family span LLM, VLM, and image generation, and their derivatives account for many of the highest-download entries. **DeepSeek-V4.1-Flash** and Cloudflare’s **clef** models show that corporate labs continue to release open-weight multimodal models, while Google’s **embeddinggemma-2** and Baidu’s **Unlimited-OCR** expand beyond chat into retrieval and document AI. Quantization is the strongest community signal: GGUF builds from unsloth, ISTA-DASLab, DavidAU, orcarouter, and AtomicChat dominate the fine-tune/quantization category, with GSQ-RCO mixed-precision and 2-bit tool-calling variants showing appetite for local deployment. Uncensored and abliterated derivatives also recur, especially around Qwen3.8 and Qwen-Image-2.1. Overall, open-weight multimodal models and their quantized community forks are gaining momentum faster than single-purpose proprietary endpoints, and the ecosystem is increasingly organized around a few base families—Qwen, Gemma, DeepSeek, and Llama-style tool-calling—rather than isolated one-off releases.

### 4. Worth Exploring
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Highest likes and downloads this week, and a strong multimodal conversational base. Worth studying for current open-weight VLM/LLM behavior and as the root of many trending fine-tunes.
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — The most-liked generative model in the digest, with image-to-video, text-to-video, and video-to-video support. Worth trying for multi-task video diffusion workflows.
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — A highly downloaded GGUF quantization that makes the week’s leading Qwen model practical for local inference. Worth exploring for quantization quality and local deployment trade-offs.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*