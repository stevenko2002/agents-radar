# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 22:15 UTC

---

**🗞️ Today's Highlights**  
The Hugging Face hub is buzzing around video‑generation foundations – MiniMax‑H3 (image‑text‑to‑video) and its myriad community LoRA/ComfyUI forks continue to climb in likes, signaling strong creator interest in controllable video synthesis. Parallel to this, large‑scale language models are seeing fresh releases: DeepSeek‑V4‑Flash‑0731 (a fast, conversational LLM) and MoonshotAI’s Kimi‑K3 (a high‑capacity image‑text‑to‑text model) both broke the 3 k‑like barrier within a week, reflecting a push toward efficient, high‑throughput text generation. Meanwhile, classic vision‑language workhorses like Baidu’s Unlimited‑OCR and Black‑Forest‑Labs’ FLUX.1‑dev remain top‑downloaded, underscoring sustained demand for robust OCR and text‑to‑image foundations.

---

### 📊 Trending Models  

| Category | Model (HF link) | Author | Likes | Downloads | One‑sentence description |
|----------|----------------|--------|-------|-----------|--------------------------|
| **🧠 Language Models** | [DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek‑ai | 3,047 | 954,441 | A fast, instruction‑tuned LLM optimized for low‑latency conversational use. |
|  | [MoonshotAI/Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,466 | 1,510,032 | A 30B‑class image‑text‑to‑text model that excels at multimodal reasoning and retrieval. |
|  | [LiquidAI/LFM2.5‑2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 487 | 89,680 | A compact 2.6B‑parameter LLM built on the Liquid foundation model family, tuned for general text generation. |
|  | [inclusionAI/Ling‑3.0‑flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | A hybrid‑style conversational LLM with custom code integration for rapid prototyping. |
|  | [deepgrove/maple‑preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 309 | 1,344 | A mixture‑of‑experts causal LM designed for efficient scaling and low‑memory inference. |
| **🎨 Multimodal & Generation** | [MiniMaxAI/MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,420 | 47,468 | An image‑text‑to‑video diffusion model that generates coherent video from combined visual and textual prompts. |
|  | [black-forest-labs/FLUX.1‑dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,075 | 480,762 | A state‑of‑the‑art text‑to‑image diffusion model delivering high‑fidelity, controllable image synthesis. |
|  | [baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,001 | 2,921,751 | A powerful OCR model that extracts text from arbitrary layouts and languages with strong generalisation. |
|  | [meta‑models/Muse‑Glimmer‑30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta‑models | 659 | 0 | An image‑text‑to‑text model (30B) built for rich multimodal conversation and reasoning. |
|  | [lightx2v/Minimax‑h3‑Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | An accelerated image‑to‑video variant of MiniMax‑H3 aimed at real‑time generation. |
| **🔧 Specialized Models** | (none explicitly tagged as code/math/medical in the top‑30) | — | — | — | — |
| **📦 Fine‑tunes & Quantizations** | [Comfy‑Org/MiniMax‑H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy‑Org | 1,141 | 6,009,639 | A ready‑to‑use ComfyUI wrapper for the base MiniMax‑H3 model, enabling drag‑and‑drop video generation. |
|  | [unsloth/DeepSeek‑V4‑Flash‑0731‑GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 636 | 199,167 | GGUF‑quantized version of DeepSeek‑V4‑Flash for llama.cpp‑based low‑resource inference. |
|  | [unsloth/Muse‑Glimmer‑30B‑GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 192 | 0 | GGUF quantized Muse‑Glimmer‑30B, making the 30B multimodal model accessible on CPU/GPU edge devices. |
|  | [LiquidAI/LFM2.5‑2.6B‑GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 183 | 89,611 | GGUF‑compressed LFM2.5‑2.6B for fast deployment with llama.cpp. |
|  | [lightx2v/MiniMax‑H3‑Prompt‑Rewriter‑LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | A LoRA adapter that rewrites user prompts to improve video‑generation quality on MiniMax‑H3. |
|  | [realrebelai/MiniMax‑H3\_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | Community‑provided GGUF quantizations of MiniMax‑H3 for ComfyUI and other pipelines. |
|  | [Abiray/Minimax‑H3‑nvfp4‑INT4‑INT8‑Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | A mixed‑precision (NV‑FP4/INT4/INT8) variant of MiniMax‑H3 targeting reduced memory footprint while preserving video quality. |

---

### 🔎 Ecosystem Signal (≈150 words)  

The current snapshot reveals a clear tilt toward **multimodal video generation** anchored by the MiniMax‑H3 family; its base model, numerous LoRA/ComfyUI forks, and GGUF quantizations collectively account for a large share of likes and downloads, indicating that creators value both high‑quality output and easy deployment in UI‑driven workflows. In the **LLM space**, efficient, high‑throughput models such as DeepSeek‑V4‑Flash and the emerging Kimi‑K3 are gaining traction, reflecting a community push for **low‑latency, open‑weight alternatives** to proprietary APIs. Quantization activity is robust: unsloth’s GGUF conversions of DeepSeek‑V4‑Flash, Muse‑Glimmer‑30B, and LiquidAI’s LFM2.5 series show strong adoption, especially for edge‑device and llama.cpp environments. Meanwhile, classic vision‑language tools (Unlimited‑OCR, FLUX.1‑dev) retain high download counts, underscoring that foundational models for OCR and text‑to‑image remain indispensable infrastructure. Overall, the ecosystem is balancing **innovative generative fronts** (video, multimodal reasoning) with **pragmatic optimization** (quantization, LoRA adapters) to broaden accessibility.

---

### 💎 Worth Exploring  

1. **MiniMaxAI/MiniMax‑H3** – The flagship image‑text‑to‑video diffusion model; ideal for experimenting with controllable video synthesis and seeing how community LoRAs/ComfyUI extensions modify output.  
2. **MoonshotAI/Kimi‑K3** – A 30B‑class image‑text‑to‑text model with strong retrieval and reasoning capabilities; valuable for studying multimodal scaling laws and instruction‑tuning techniques.  
3. **unsloth/DeepSeek‑V4‑Flash‑0731‑GGUF** – Provides a ready‑to‑run, low‑resource version of a fast conversational LLM; perfect for benchmarking GGUF inference speed versus full‑precision on edge hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*