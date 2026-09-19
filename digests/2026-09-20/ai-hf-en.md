# Hugging Face Trending Models Digest 2026-09-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-19 22:15 UTC

---

# Hugging Face Trending Models Digest
**Week of 2026-09-20**

---

## 1. Today's Highlights

Qwen's 3.8-27B release dominates this week's chart with an outstanding 15,752 likes and 7.3M downloads, cementing Qwen3.5–3.8 as the open-weight family to watch. Video generation continues to surge with MiniMax-H3 and Lightricks LTX-2.5 both posting multi-million download totals, while audio generation expands via m-a-p's YuE2 music model and tencent's AuK zero-shot TTS. Quantization innovation remains a major driver of developer activity — GGUF, MLX, and new mixed-precision techniques (GSQ/RCO) appear across a fifth of the trending list. Notable newcomers include Edge0's 35B MoE preview, Ternary-Bonsai's experimental 2-bit quants, and DeepSeek's V4.1-Flash multimodal model.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — *Qwen · 15,752 likes · 7.37M downloads*
  A flagship 27B multimodal conversational LLM and the clear week's leader, trending for its impressive open-weight performance at scale.

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — *deepseek-ai · 3,291 likes · 482K downloads*
  DeepSeek's latest flash-tier multimodal model balancing speed and capability, drawing strong interest from developers.

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — *Qwen · 5,443 likes · 743K downloads*
  An experimental "Next" flash variant of Qwen3.8, trending for previewing the Qwen4 trajectory.

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — *openbmb · 1,589 likes · 390K downloads*
  A compact 2B Llama-family text model, popular for edge-friendly on-device generation.

- **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — *Edge0 · 3,470 likes · 68K downloads*
  A preview MoE with 3B active params from 35B total, targeting efficient edge inference.

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — *zai-org · 2,471 likes · 2.91M downloads*
  Zhipu's GLM-5.3 flash multimodal conversational model, continuing the GLM lineage.

- **[internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview)** — *internlm · 188 likes · 806 downloads*
  An early-preview MoE/DSA model with bilingual support, tied to a new arXiv paper (2609.15818).

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — *TokenRhythm · 941 likes · 12K downloads*
  A 9B Qwen3.5-text model tuned for agentic use cases.

- **[meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)** — *meta-llama · 7,740 likes · 5.92M downloads*
  A perennially trending workhorse 8B instruct model.

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — *XingChen-AGI · 617 likes · 7.3K downloads*
  A 29B MoE with 4B active params, trending as a fresh open-weight entrant.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — *MiniMaxAI · 5,484 likes · 4.30M downloads*
  A leading text-to-video and image-to-video model, among the week's most downloaded releases.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — *Lightricks · 4,428 likes · 1.61M downloads*
  A versatile diffusion video model supporting image/text/video-to-video, trending for production-grade generation.

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — *m-a-p · 868 likes · 15K downloads*
  A 3B music-generation model with symbolic planning and agentic editing.

- **[tencent/AuK](https://huggingface.co/tencent/AuK)** — *tencent · 323 likes · 3.4K downloads*
  A zero-shot TTS model with voice-cloning capability from Tencent.

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — *TaichuAI · 196 likes · 2.9K downloads*
  A 9B multimodal vision-language model with spatial-reasoning focus.

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — *WarmBloodAban · 517 likes · 231K downloads*
  A community fine-tune/variant of MiniMax-H3 for video generation.

### 🔧 Specialized Models (code, math, medical, embeddings, text-classification)

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** — *sentence-transformers · 6,079 likes · 254.15M downloads*
  The evergreen embedding workhorse, still the most downloaded model on the list by a wide margin.

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — *convaiinnovations · 499 likes · 0 downloads*
  A text-classification model for calibrated decision-making, attracting interest from its paper but not yet broadly downloaded.

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — *AlexWortega · 196 likes · 0 downloads*
  A cross-encoder/NLI model built on Qwen3.5, trending within community discussions.

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — *harshatheg · 424 likes · 0 downloads*
  An MLX/Apple-silicon model featuring structured, parallel, and constrained decoding.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — *unsloth · 4,369 likes · 7.12M downloads*
  The go-to GGUF quantization of Qwen3.8-27B, trending for enabling local inference.

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — *ISTA-DASLab · 1,413 likes · 1.15M downloads*
  An advanced mixed-precision (GSQ/RCO) GGUF quantization of Qwen3.8, drawing researcher and practitioner attention.

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — *prism-ml · 1,180 likes · 1.52M downloads*
  An experimental ternary 2-bit quantization pushing the extreme-compression frontier.

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — *DavidAU · 952 likes · 1.26M downloads*
  A heavily merged Qwen3.8 community fine-tune with uncensored/coder emphasis, trending among power users.

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — *prism-ml · 238 likes · 23K downloads*
  The MLX 2-bit sibling of Ternary-Bonsai for Apple Silicon.

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — *ukisai · 479 likes · 8.8K downloads*
  A community Qwen3.8 fine-tune optimised for "efficient thinking" behaviour.

- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — *ukisai · 305 likes · 121K downloads*
  The GGUF build of Swift-Qwen3.8 for local use.

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)** — *dealignai · 298 likes · 34K downloads*
  An FP8 quantized, modified ("uncensored") DeepSeek V4.1 Flash.

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — *ISTA-DASLab · 160 likes · 31K downloads*
  A mixed-precision GGUF of Qwen3.8-Flash-Next.

- **[Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4)** — *Mothersuperior · 144 likes · 0 downloads*
  An audio tokenizer/LoRA for YuE2, interesting to audio-generation researchers.

---

## 3. Ecosystem Signal

The dominant signal this week is **Qwen's rise as the default open-weight backbone**. Qwen3.8-27B and its derivatives appear in nearly a third of the trending list — through official releases, GGUF/GSQ quantizations, and community fine-tunes like DavidAU's turbo-uncensored merge. This mirrors how Llama functioned in 2023–2024, suggesting a new de-facto standard for local and research use.

**Open-weight momentum is strong and increasingly multimodal.** DeepSeek, Qwen, GLM, MiniMax, and Lightricks all publish openly downloadable weights, while video-generation models (MiniMax-H3, LTX-2.5) are pulling millions of downloads — a category that barely registered a year ago. Proprietary models remain relevant as spec benchmarks, but the trending list is overwhelmingly open-weight.

**Quantization activity has shifted from simple 4-bit GGUF to specialized mixed-precision research.** The emergence of GSQ/RCO from ISTA-DASLab, ternary 2-bit from prism-ml, and MLX builds signals a maturing "compression research as open science" ecosystem. This is paired with rising interest in Apple Silicon (MLX) and llama.cpp local inference.

**Agentic and "system-styled" fine-tunes are proliferating** — models tagged for calibrated decisions (laya), edge inference (Edge0), and structured generation (RLCD) hint at the next wave beyond raw chat.

---

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The clear waypoint for open multimodal LLMs right now. With 7.3M downloads and a rich derivative ecosystem, it's the best base for benchmarking, fine-tuning, or local deployment in the current cycle.

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — Worth studying as a case of cutting-edge quantization. GSQ/RCO mixed-precision at 1.15M downloads shows real-world interest beyond academic novelty, making it a practical route for low-footprint deployment.

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — Experimental 2-bit ternary quantization with 1.5M downloads. Even if quality trades off, it foreshadows where the extreme-compression frontier is heading — worth testing for edge scenarios.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*