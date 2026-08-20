# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-20 22:15 UTC

---

**🗞️ Today's Highlights**  
The Hugging Face leaderboard is still dominated by the Qwen 3.8 family, with the base **Qwen/Qwen3.8‑27B** pulling in over 11 k likes and the unsloth GGUF quantization close behind. Multimodal video generation is heating up – **MiniMaxAI/MiniMax‑H3** (4.2 k likes) and **Lightricks/LTX‑2.5** (1.4 k likes) show strong community interest in text‑to‑video and image‑to‑video pipelines. Meanwhile, Moonshot AI’s **Kimi‑K3** (10.9 k likes) and DeepSeek’s **V4‑Flash** (3.6 k likes) illustrate a surge in high‑parameter, instruction‑tuned LLMs that combine strong language abilities with efficient inference formats.

---

## 📚 Trending Models  

### 🧠 Language Models (LLMs, chat & instruction‑tuned)
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,724 | 1,373,584 | Flagship 27 B multilingual LLM with image‑text capability; strong community adoption for chat and reasoning. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 | FP8‑quantized version of the 27 B model, offering lower memory footprint while retaining performance. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,120 | 14,592 | Mixture‑of‑Experts (MoE) variant (~2.4 T parameters) targeting high‑capacity text generation. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 677 | 43,287 | Latest DeepSeek V4 release, optimized for conversational fluency and multilingual tasks. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,575 | 2,547,549 | “Flash” variant prioritizing inference speed; popular for real‑time chat applications. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2,349,853 | 30 B‑class LLM with strong vision‑language alignment; gaining traction for multimodal assistants. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 | Open‑weight 30 B model focused on creative text‑to‑image and storytelling workflows. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 209 | 1,713 | MoE‑style 35 B model with sparse activation, explored for efficient long‑form generation. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,410 | 611,825 | Diffusion‑based image‑to‑video model enabling smooth video generation from still images. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,099 | 14,471 | Text‑to‑music diffusion model; early adopters experimenting with AI‑generated soundtracks. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,236 | 3,308,673 | Text‑to‑video and image‑to‑video pipeline; high download count reflects strong interest in video synthesis. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 297 | 0 | Fine‑tuned MiniMax‑H3 for stylized video; community testing of video‑style transfer. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 648 | 380,072 | Turbo‑accelerated version of MiniMax‑H3, optimized for faster video generation on consumer GPUs. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (image‑text‑to‑text) | Qwen | 11,724 | 1,373,584 | Although primarily an LLM, its built‑in image‑text capability fuels multimodal chat demos. |

### 🔧 Specialized Models (code, math, medical, embeddings)
*The current snapshot shows limited dedicated specialized models; the most relevant are the MoE‑style LLMs that can be repurposed for code or reasoning tasks.*  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 209 | 1,713 | Sparse MoE architecture explored for efficient code generation and mathematical reasoning. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 677 | 43,287 | Strong performance on multilingual reasoning benchmarks, useful for math‑oriented prompts. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, MLX, etc.)
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,347 | 5,126,652 | Popular GGUF quantization enabling CPU‑friendly inference; high download volume. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831,483 | NVFP4‑quantized variant targeting low‑bit inference on NVIDIA GPUs. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 703 | 2,628 | MLX‑optimized, uncensored build for Apple Silicon; niche but growing. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 510 | 979,768 | GGUF‑based uncensored version, favored for open‑ended roleplay experiments. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 360 | 268,258 | Aggressive MTP (multi‑token prediction) uncensored model in GGUF format. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,335 | 0 | Community‑provided chat‑template fixes for Qwen models; widely downloaded via downstream integrations. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 220 | 55,074 | Ridge‑regularized GGUF quantization aiming to reduce hallucinations. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 198 | 187,008 | Abliterated (bias‑reduced) GGUF version; interest in safer open‑weight models. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 187 | 326,638 | Heretic‑style abliterated uncensored model; explores trade‑off between safety and freedom. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186,470 | Another abliterated GGUF variant, popular in local‑LLM experimentation. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 200 | 10,540 | Non‑GGUF abliterated version for standard Transformers pipelines. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 158 | 53,691 | GGUF‑packed MoE model for low‑resource experimentation. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,182 | 3,001,999 | Highly customized uncensored GGUF fuse of multiple techniques; strong community interest in experimental pipelines. |

---

## 📈 Ecosignal (≈150 words)

The **Qwen 3.8** family remains the dominant open‑weight backbone, spawning a prolific ecosystem of quantizations (GGUF, NVFP4, FP8) and community fine‑tunes that push the model into uncensored, abliterated, and MLX‑optimized niches. Parallel to this, **MiniMax** video models (H3, LTX‑2.5, Music3) are emerging as a new multimodal hub, evidenced by steep download curves for text‑to‑video and image‑to‑video checkpoints. **DeepSeek‑V4** continues to gain traction, especially its “Flash” variant that targets low‑latency chat, while **Moonshot AI’s Kimi‑K3** shows that high‑parameter vision‑language models can rival the Qwen line in community enthusiasm. Quantization activity is clearly the fastest‑growing sub‑ecosystem, with

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*