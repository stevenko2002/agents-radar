# Hugging Face Trending Models Digest 2026-08-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-18 22:16 UTC

---

**🗞️ Today's Highlights**  
The Hugging Face hub is currently dominated by the Qwen 3.8 family, with the base 27 B model and its numerous quantized/FP8 variants pulling the highest likes and downloads. Video‑generation models are breaking out – MiniMax‑H3 and its community fine‑tunes (Comfy‑Org/MiniMax‑H3, lightx2v/Minimax‑h3‑Turbo) have surged past the 1 M‑download mark, reflecting strong interest in text‑to‑video pipelines. Meanwhile, DeepSeek’s V4‑Flash checkpoint continues to gain traction as a lightweight, high‑throughput alternative to larger LLMs, indicating a shift toward efficient, deployable text models.

---

## 📊 Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,064 | 11,212 | A 2.4 TB‑trained MoE text model that offers strong reasoning while staying relatively compact, driving interest in scalable LLMs. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,522 | 2,123,462 | Optimized for speed and low memory footprint, this flash version of DeepSeek‑V4 is attracting developers needing fast inference. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 318 | 9,990 | A tiny, open‑weight text‑generation model released under a permissive license, ideal for edge‑device experimentation. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 321 | 269,372 | NVIDIA’s quantized 30 B model showcases the performance gains of NF‑FP4 precision, highlighting industry‑grade quantization. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,825 | 2,226,898 | Though multimodal‑capable, its core is a powerful text‑oriented LLM with compressed tensors, making it a popular choice for research and deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,099 | 665,513 | The flagship 27 B image‑text‑to‑text model; its strong visual‑language abilities keep it at the top of weekly likes. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,143 | 2,855,539 | A cutting‑edge image‑to‑video diffusion model that enables high‑quality video generation from textual and visual prompts. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,215 | 503,632 | Supports image‑to‑video, text‑to‑video and video‑to‑video synthesis, filling a niche for versatile video creation tools. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 953 | 11,745 | Text‑to‑audio diffusion model focused on music generation, gaining traction among creative AI artists. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 246 | 24,893 | A lightweight text‑to‑image diffuser optimized for ComfyUI, appealing to hobbyists seeking fast, low‑resource art generation. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,423 | 14,641,908 | Community fine‑tune of MiniMax‑H3 with additional LoRA adapters; its massive download count signals strong adoption in video workflows. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 606 | 300,279 | Turbo‑charged version of MiniMax‑H3 that reduces inference latency while preserving video quality, popular for real‑time applications. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 173 | 9,101 | A compact vision‑language model (3 B) that balances performance and size for edge‑device multimodal tasks. |

### 🔧 Specialized Models (code, math, medical, embeddings)  
*No models in the current top‑30 list fall squarely into a specialized niche such as code, math, or medical. The ecosystem’s focus this week is on general‑purpose language and multimodal generation.*

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,809 | 3,561,466 | GGUF‑quantized version of Qwen‑3.8‑27B enabling CPU‑friendly inference; massive download numbers reflect demand for deployable LLMs. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 260 | 523,919 | NF‑FP4 quantization that further reduces memory footprint while retaining accuracy, attracting latency‑sensitive users. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 524 | 45,465 | FP8‑precise uncensored variant, popular among researchers exploring model controllability. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 406 | 558,767 | GGUF‑based uncensored model, widely used for open‑ended experimentation. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 481 | 787,276 | Quantized version of the Muse‑Glimmer 30 B vision‑language model, making large multimodal models accessible on modest hardware. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,140 | 3,020,528 | Heavily fine‑tuned, uncensored GGUF release that combines multiple LoRA adapters; its high likes indicate strong community interest in customized variants. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 177 | 285,444 | Community fine‑tune of MiniMax‑Music3 with additional LoRA weights, showing the spread of diffusion‑model customization. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,423 | 14,641,908 | See Multimodal section – the most‑downloaded fine‑tune in the list, underscoring the appetite for adapted video generators. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,251 | 0 | Provides corrected Jinja chat templates for Qwen models, addressing a common usability pain point and gaining traction via likes. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 561 | 741,011 | Official FP8 quantization from the Qwen team, offering a sweet spot between speed and accuracy for deployment. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 225 | 13,344 | FP8 version of the MoE text model, enabling efficient experimentation with large‑scale sparse architectures. |

---

## 🔎 Ecosystem Signal (≈150 words)  
The Qwen 3.8 lineage remains the dominant force on Hugging Face, spawning a prolific ecosystem of quantizations (GGUF, FP8, NF‑FP4) and community fine‑tunes that push the models onto CPUs, mobile devices, and low‑latency inference servers. Parallel to this, video generation is emerging as a breakout category: MiniMax‑H3 and its derivatives (Comfy‑Org/MiniMax‑H3, lightx2v/Minimax‑h3‑Turbo) have collectively amassed >15 M downloads, indicating that creators are eager for controllable, high‑fidelity text‑to‑video tools. Open‑weight models continue to outpace proprietary offerings in the trending list, with virtually all top entries released under permissive licenses (Apache‑2.0, MIT, or custom open weights). This openness fuels extensive fine‑tuning activity—particularly LoRA adapters and uncensored variants—showcasing a strong DIY culture. Overall, the ecosystem is shifting toward efficient, deployable multimodal models where quantization and community‑driven customization are as important as raw model scale.

---

## 🔬 Worth Exploring  
1. **MiniMax‑H3

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*