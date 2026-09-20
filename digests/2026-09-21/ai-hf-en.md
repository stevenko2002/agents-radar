# Hugging Face Trending Models Digest 2026-09-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-20 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-21

---

## 1. Today's Highlights

The Qwen3.8-27B family continues its commanding presence on the Hub, dominating both the original model chart (15,858 likes, 7.3M downloads) and the quantization ecosystem with multiple GGUF, GSQ, and community fine-tune variants collectively amassing millions of downloads. DeepSeek-V4.1-Flash marks DeepSeek's latest multimodal push with strong early traction (3,423 likes), while MiniMax-H3 and Lightricks LTX-2.5 signal that video generation models are reaching mainstream adoption with over 4M and 1.6M downloads respectively. Extreme low-bit quantization—particularly ternary 2-bit and mixed-precision GSQ-RCO formats—has emerged as a major trend this week, suggesting growing demand for deploying large models on consumer hardware.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,858 | 7,331,932 | Flagship 27B multimodal LLM leading the Hub in both likes and downloads, serving as the base for a vast quantization and fine-tune ecosystem. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,489 | 761,112 | Lightweight multimodal variant of Qwen3.8 optimized for speed, gaining rapid adoption as a fast inference alternative. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,767 | 5,910,102 | Enduring workhorse 8B instruct model with massive deployment base, still among the most downloaded models on the Hub. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-preview) | Edge0 | 3,548 | 76,669 | MoE model (35B total, 3B active) built on Qwen3.5-MoE architecture, trending for its extreme edge-inference efficiency. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,497 | 3,109,084 | Latest GLM-5 generation multimodal LLM with 3M+ downloads, showing strong momentum for Chinese-English bilingual use cases. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,624 | 420,622 | Compact 2B model from the MiniCPM lineage, trending as a capable lightweight text-generation model for resource-constrained setups. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 867 | 12,617 | MoE model with 29B total / 4B active parameters, gaining attention for efficient conversational inference. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 978 | 11,913 | Agentic-focused 9B text model built on Qwen3.5, trending for its emphasis on tool-use and autonomous reasoning. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,524 | 4,057,444 | State-of-the-art video generation model (text-to-video, image-to-video) with over 4M downloads, leading the video generation category. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,545 | 1,609,559 | Versatile diffusion-based video model supporting image-to-video, text-to-video, and video-to-video pipelines, trending for production-quality outputs. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,423 | 496,684 | DeepSeek's latest multimodal model combining strong vision-language capabilities with efficient inference. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 683 | 183 | Qwen's dedicated text-to-image and image-editing diffusion model, freshly released and gathering early interest. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 912 | 17,403 | Music generation model with symbolic planning and agentic editing capabilities, standing out as a niche but innovative audio model. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 210 | 3,750 | Multimodal VLM with a focus on spatial reasoning, newly released and gaining attention in vision-language research. |

### 🔧 Specialized Models (code, math, medical, embeddings, classification)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,043 | 0 | Text-classification model emphasizing "calibrated decisions" and a "system-one" architecture, trending for its novel approach to reliable classification despite zero reported downloads. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 475 | 0 | Apple Silicon-optimized 1B model with parallel and constrained decoding for structured generation, notable for on-device structured output use cases. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 308 | 0 | Cross-encoder NLI model built on Qwen3.5, representing a specialized reranking/classification direction. |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 207 | 895 | Research preview of a GLM-MoE-DSA architecture with an associated arXiv paper, attracting academic interest. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,427 | 6,941,478 | Standard GGUF quantization of Qwen3.8-27B by unsloth, with nearly 7M downloads making it the most consumed quantized model this week. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,478 | 1,217,204 | Mixed-precision GSQ-RCO quantization of Qwen3.8-27B, trending for pushing quality-preserving compression boundaries. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,477 | 1,908,396 | Extreme 2-bit ternary quantization of a 27B model, leading the ultra-low-bit trend with nearly 2M downloads. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,000 | 1,301,417 | Heavily modified creative/coding fine-tune of Qwen3.8-27B in GGUF, popular in the uncensored community fine-tune niche. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 509 | 10,962 | Community fine-tune emphasizing efficient thinking and reasoning on Qwen3.8-27B. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 568 | 242,751 | Community fine-tune of MiniMax-H3 for video generation, riding the base model's popularity. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 324 | 34,688 | FP8 uncensored variant of DeepSeek-V4.1-Flash, reflecting persistent demand for unaligned multimodal models. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 281 | 30,043 | MLX-format 2-bit ternary variant of the same model, targeting Apple Silicon deployment. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 327 | 136,668 | GGUF quantization of the Swift-Qwen3.8 fine-tune with efficient-thinking tags. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 188 | 42,965 | GSQ-RCO mixed-precision quantization of Qwen3.8-Flash-Next, extending the quantization trend to the Flash variant. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 248 | 120 | ComfyUI-compatible single-file checkpoint of Qwen-Image-2.1 for workflow integration. |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 159 | 0 | LoRA/tokenizer fine-tune for YuE2 music generation, representing niche audio community activity. |

---

## 3. Ecosystem Signal

The Qwen family has solidified itself as the dominant open-weight ecosystem this week. Qwen3.8-27B alone accounts for over 7.3M base downloads, with its quantized variants (unsloth GGUF at 6.9M, ISTA-DASLab GSQ at 1.2M) and community fine-tunes (DavidAU, ukisai, prism-ml) collectively pushing the Qwen3.8 ecosystem well past 15M weekly downloads. This mirrors the historical pattern seen with Llama-3.1, but at an even larger scale—suggesting Qwen has become the new default base model for the open community.

Extreme quantization is the breakout theme. Ternary 2-bit quantization (prism-ml) and mixed-precision GSQ-RCO (ISTA-DASLab) are not just novelties—they're racking up millions of downloads, signaling that users want to run 27B-class models on consumer hardware. The parallel emergence of both GGUF (llama.cpp) and MLX (Apple Silicon) variants confirms cross-platform demand. Meanwhile, video generation models (MiniMax-H3 at 4M, LTX-2.5 at 1.6M downloads) are transitioning from research curiosities to production tools, and MoE architectures (Edge0, Xing4.0) are gaining traction as the path to deploying large-capacity models with low active-parameter costs. Open-weight models continue to dominate the trending charts entirely, with no proprietary API models represented.

---

## 4. Worth Exploring

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — Ternary 2-bit quantization of a 27B model with ~1.9M downloads is extraordinary for such an extreme compression format. Worth studying to understand how usable 2-bit inference actually is and where the quality floor lies—this could reshape assumptions about deployment hardware requirements.

2. **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — A 35B MoE with only 3B active parameters is a compelling architecture for edge and on-device inference. If quality holds, this design pattern could define the next generation of deployable open models. The MLX format also makes it immediately testable on Apple Silicon.

3. **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — Music generation with symbolic planning and agentic editing is a genuinely novel paradigm that goes beyond typical audio generation. Worth trying for anyone interested in structured, controllable creative AI—this represents a different design philosophy than purely end-to-end generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*