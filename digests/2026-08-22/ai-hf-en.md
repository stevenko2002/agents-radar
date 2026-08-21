# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 22:15 UTC

---

**�🗞️ Hugging Face Trending Models Digest (2026‑08‑22)**  

---  

### 1. Today's Highlights  
The hub is currently dominated by the **Qwen 3.8 family**, with the base 27 B model and a flood of community‑driven variants (FP8, GGUF, uncensored/abliterated, MoE‑style A95B). Parallel to this, **multimodal generation** is seeing a surge: MiniMax’s H3 (image‑to‑video) and LTX‑2.5 (image‑to‑video) are among the top‑liked non‑LLM entries, while text‑to‑audio (MiniMax‑Music3) and speculative‑decoding experiments (z‑lab’s DFlash2) show growing interest in efficient, specialized generation. Quantization remains a hot topic—unsloth’s GGUF/NVFP4 packs and numerous community GGUF uncensored models are racking up downloads, indicating a strong push toward deployable, low‑precision weights for local inference.

---  

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11 939 | 1 726 651 | The flagship 27 B Qwen 3.8 base model; high engagement shows strong community interest in the latest Qwen generation. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 656 | 1 939 895 | FP8‑quantized version offering reduced memory footprint while preserving quality; popular for low‑latency serving. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10 910 | 2 448 810 | Multimodal‑capable 3 B‑scale model with compressed tensors; rising likes reflect excitement over efficient, instruction‑tuned models. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 704 | 49 601 | Latest DeepSeek V4 Pro checkpoint; strong conversational abilities and safetensors packaging drive attention. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3 605 | 2 833 064 | “Flash” variant optimized for speed; high likes and downloads signal demand for fast inference. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1 135 | 15 702 | MoE‑style 95 B‑equivalent model with A95B activation; explores scaling beyond dense 27 B. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 280 | 9 165 | 35 B MoE model (A3B) with qwen3_5_moe base; attracts interest for its sparse architecture. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 198 | 123 237 | GGUF‑quantized Ornith MoE; shows community effort to run large sparse models on consumer hardware. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4 289 | 3 614 443 | Image‑to‑video diffusion model; leading likes in the multimodal bucket, reflecting strong interest in video generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1 479 | 654 175 | Image‑to‑video (also supports text‑to‑video, video‑to‑video); high engagement shows demand for versatile video synthesis. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1 156 | 15 678 | Text‑to‑audio diffusion model; notable for music generation niche. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (image‑text‑to‑text pipeline) | Qwen | 11 939 | 1 726 651 | Base Qwen 3.8 also supports image‑text‑to‑text, making it a multimodal workhorse. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) (image‑text‑to‑text) | Qwen | 656 | 1 939 895 | FP8‑quantized multimodal Qwen; popular for low‑resource vision‑language tasks. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1 731 | 505 113 | Image‑text‑to‑text model with strong conversational ability; gaining traction as a general‑purpose VLM. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 810 | 18 193 | Uncensored/abliterated Qwen variant for MLX; interest in open, less‑restricted VLMs. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 772 | 107 520 | FP8 uncensored Qwen; combines efficiency with permissive output. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 281 | 68 275 | GGUF uncensored Qwen; popular for local deployment on llama.cpp. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 226 | 338 221 | Abliterated GGUF Qwen; notable for high downloads despite modest likes. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 195 | 197 667 | Another GGUF abliteted Qwen variant; shows community demand for deployable, less‑filtered models. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 206 | 421 918 | Heretic‑themed uncensored GGUF Qwen; niche but actively downloaded. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 162 | 155 208 | Complex GGUF pipeline with GAIN training & MTP; experimental but gaining traction. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z‑lab | 167 | 21 092 | Speculative‑decoding (DFlash2) text‑generation model; interest in faster autoregressive inference. |

#### 🔧 Specialized Models (code, math, medical, embeddings)  
*No explicitly code/math/medical‑focused entries appear in the top‑30 list this week. The closest are general‑purpose LLMs (DeepSeek‑V4, Qwen) that are often used for code or reasoning tasks, but they are not tagged as specialized.*  

#### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2 491 | 5 804 917 | Leading GGUF quantization of Qwen 3.8; massive downloads reflect demand for llama.cpp‑compatible weights. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 323 | 1 013 917 | NVFP4‑packed safetensors; shows interest in NVIDIA‑specific low‑precision formats. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero‑ai | 232 | 74 038 | Ridge‑tuned GGUF Qwen; illustrates community fine‑tuning on top of quantized base. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 558 | 1 126 222 | Popular uncensored GGUF; high downloads indicate strong appetite for open‑access, less‑restricted weights. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui‑ai | 224 | 17 521 | Abliterated (non‑GGUF) Qwen; shows interest in ablation‑style safety‑reduced models. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1 364 | 0 | Provides corrected Jinja chat templates for Qwen families; valuable for developers despite zero downloads (likely hotlinked). |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith‑ai | 198 | 123 237 | GGUF version of the Ornith MoE; enables running large sparse models on modest hardware. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) (duplicate for emphasis) – see above. | | | | |

---  

### 3. Ecosystem Signal (≈150 words)  
The **Qwen 3.8** family dominates the week’s activity, accounting for > ½ of the listed models and a disproportionate share of likes and downloads. This reflects both the strong performance of the base 27 B model and the community’s enthusiasm for **derivative works**—FP8 quantizations, GGUF packs, uncensored/abliterated variants, and MoE‑style A95B extensions.  

Parallel to this, **multimodal generation** is emerging as a second growth pole: MiniMax‑H3 (image‑to‑video) and LTX‑2.5 (image‑/text‑to‑video) sit among the top‑liked non‑LLM entries, indicating that video‑diffusion models are catching the community’s eye after the earlier image‑generation wave.  

Quantization remains a key enabler for local deployment: unsloth’s GGUF and NVFP4 releases, plus numerous community GGUF uncensored models, consistently rack up millions of downloads, underscoring a shift toward **open‑weight, hardware‑friendly** checkpoints. Proprietary, closed‑source models are noticeably absent from the top‑30, reinforcing the prevailing trend that the most‑trending assets on Hugging Face are openly licensed and community‑driven.  

Overall, the ecosystem is pivoting from raw scale (larger dense models) toward **efficient, specialized, and accessible** representations—quantized VLMs, video diffusion, and sparse MoE architectures—while maintaining a strong open‑weight ethos.  

---  

### 4. Worth Exploring  
| Model | Reason to try |
|-------|---------------|
| **MiniMaxAI/MiniMax-H3** – https://huggingface.co/MiniMaxAI/MiniMax-H3 | State‑of‑the‑art image‑to‑video diffusion with > 4 k likes; ideal for experimenting with timely video generation without heavy training. |
| **Qwen/Qwen3.8-27B-FP8** – https://huggingface.co/Qwen/Qwen3.8-27B-FP8 | FP8‑quantized Qwen 3.8 offers

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*