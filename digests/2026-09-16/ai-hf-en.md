# Hugging Face Trending Models Digest 2026-09-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-15 22:15 UTC

---

**📅 Today’s Highlights**  
The past week saw a surge of activity around large‑scale multimodal models. **MiniMax‑H3** and **Lightricks’ LTX‑2.5** continue to dominate video generation with millions of downloads, while the **Qwen/Qwen3.8‑27B** family remains the most‑liked language model on the hub. Community‑driven quantizations (GGUF, GSQ) are gaining traction, and new open‑weight models such as **DeepSeek‑V4.1‑Flash** and **Edge0‑35B‑A3B** are rapidly climbing the popularity charts. The ecosystem also highlights a strong push for specialized tools – embeddings, time‑series forecasting, and zero‑shot speech synthesis – reflecting user demand for niche capabilities.

---

## 🧠 Language Models (LLMs, chat models, instruction‑tuned)

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** – *deepseek‑ai* | **2,677 likes** | **325,712 downloads**  
  A state‑of‑the‑art multimodal chat model that handles text‑and‑image prompts with a flash‑optimized architecture, riding the wave of DeepSeek’s recent releases.

- **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** – *Edge0* | **2,672 likes** | **17,853 downloads**  
  A Mixture‑of‑Experts preview built on Qwen‑3.5, offering strong performance for general text generation while showcasing Edge0’s inference‑friendly design.

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** – *openbmb* | **1,449 likes** | **271,754 downloads**  
  A compact yet capable 2B‑parameter LLM focused on conversational tasks, popular for its low memory footprint and solid instruction‑following.

- **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)** – *nex‑agi* | **803 likes** | **5,202 downloads**  
  A lightweight multimodal model that blends text‑generation with image‑text understanding, gaining interest for fast prototyping.

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – *Qwen* | **15,257 likes** | **7,702,543 downloads**  
  The flagship Qwen‑3.8 27‑B model excels at image‑text tasks and conversational AI, cementing the Qwen family’s dominance in the hub.

- **[TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B)** – *TokenRhythm* | **2,010 likes** | **11,904 downloads**  
  A 4B‑parameter LLM built on Qwen‑3.5, noted for its agentic reasoning capabilities and efficient inference.

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** – *XHToken* | **1,198 likes** | **25,650 downloads**  
  Spark‑X2.5 delivers fast text generation and a compact footprint, appealing to developers needing a quick‑start model.

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** – *ukisai* | **258 likes** | **1,355 downloads**  
  A distilled Qwen‑3.8 variant optimized for speed, showcasing community interest in lightweight yet accurate chat models.

- **[meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)** – *meta‑llama* | **7,624 likes** | **5,712,837 downloads**  
  The 8‑B instruction‑tuned Llama‑3.1 model remains a go‑to for developers seeking strong conversational performance with permissive licensing.

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** – *openai‑community* | **4,090 likes** | **15,311,786 downloads**  
  The classic GPT‑2 base model continues to be a reference point for research and educational purposes, highlighting the enduring value of open‑weight classics.

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** – *zai‑org* | **2,361 likes** | **1,992,040 downloads**  
  GLM‑5.3‑Flash offers a fast multimodal chat experience, gaining traction for its efficiency and strong reasoning.

---

## 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – *Lightricks* | **3,984 likes** | **1,580,077 downloads**  
  A diffusion‑based model that turns images (or text) into high‑quality short videos, currently the most‑liked video‑generation tool on the hub.

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** – *m‑a‑p* | **549 likes** | **6,716 downloads**  
  A compact text‑to‑audio model focused on music generation, standing out for its creative synthesis capabilities.

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** – *WarmBloodAban* | **417 likes** | **147,766 downloads**  
  An image‑to‑video extension of the MiniMax‑H3 family, delivering fast frame generation for content creators.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – *MiniMaxAI* | **5,334 likes** | **4,906,989 downloads**  
  A powerful image‑text‑to‑video model that balances quality and speed, becoming a cornerstone for video‑creation pipelines.

---

## 🔧 Specialized Models (code, math, medical, embeddings)

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** – *sentence‑transformers* | **5,992 likes** | **254,208,155 downloads**  
  A lightweight, fast sentence‑embedding model widely adopted for retrieval and similarity tasks across countless applications.

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** – *google* | **803 likes** | **865,343 downloads**  
  Google’s newest time‑series forecasting transformer, providing state‑of‑the‑art predictions for finance, IoT, and logistics.

- **[tencent/AuK](https://huggingface.co/tencent/AuK)** – *tencent* | **246 likes** | **2,390 downloads**  
  A zero‑shot text‑to‑speech model with voice‑cloning abilities, catering to multilingual audio generation needs.

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)** – *facebook* | **541 likes** | **22,228 downloads**  
  A multilingual speech model supporting over 100 languages, useful for ASR research and multilingual voice services.

---

## 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** – *ISTA‑DASLab* | **1,125 likes** | **884,926 downloads**  
  A GGUF‑quantized version of Qwen‑3.8‑27B with GSQ+RCO optimizations, delivering faster inference on consumer hardware.

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – *unsloth* | **4,154 likes** | **9,456,089 downloads**  
  An official Unsloth‑optimized GGUF checkpoint that reduces memory footprint while preserving performance, the most‑downloaded quantized model this week.

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** – *DavidAU* | **730 likes** | **949,394 downloads**  
  A heavily fine‑tuned, uncensored “coder” variant of Qwen‑3.8‑27B, popular among developers seeking specialized instruction sets.

- **[Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI)** – *Alissonerdx* | **181 likes** | **14,533 downloads**  
  A ComfyUI‑ready LoRA extension for MiniMax‑H3, enabling easy video‑generation within popular node‑based workflows.

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)** – *dealignai* | **201 likes** | **5,783 downloads**  
  An FP8‑quantized, uncensored variant of DeepSeek‑V4.1‑Flash, highlighting community interest in safe, efficient multimodal models.

---

## 🌐 Ecosystem Signal (100‑200 words)

The weekly ranking reflects a maturing multimodal landscape. **Qwen’s family** (especially the 27‑B model and its GGUF variants) continues to dominate both raw popularity and community quantizations, illustrating a strong preference for performant, open‑weight foundations that can be easily deployed on consumer hardware. **Video generation** has broken out of niche research into mainstream tools, with Lightricks’ LTX‑2.5 and MiniMax‑H3 consistently attracting millions of downloads, signaling rising demand for fast, controllable content creation. Meanwhile, **specialized utilities**—sentence embeddings, time‑series forecasting, and multilingual speech—are gaining steady love despite modest download numbers, underscoring the hub’s role as a repository for domain‑specific innovation. Quantization (GGUF, GSQ, FP8) and community fine‑tunes remain a major trend, with dozens of checkpoint variants listed, reflecting the ecosystem’s collaborative spirit to make large models accessible. Overall, the balance leans toward **open‑weight models** with robust community tooling, while proprietary‑style releases (e.g., DeepSeek‑V4.1‑Flash) still capture attention for their novel architectures.

---

## 🎯 Worth Exploring (2‑3 models)

1. **MiniMaxAI/MiniMax-H3** – If you’re experimenting with video synthesis, this model offers a sweet spot of high‑quality image‑text‑to‑video generation with massive community support and easy integration (e.g., ComfyUI LoRA). Its 5 k+ likes and 5

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*