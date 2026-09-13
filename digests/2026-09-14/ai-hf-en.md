# Hugging Face Trending Models Digest 2026-09-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-13 22:15 UTC

---

**🗞️ Hugging Face Trending Models Digest – 2026‑09‑14**  

---

### 1. Today’s Highlights  
The leaderboard is still dominated by the **Qwen 3.8 family**, with the base 27 B model (Qwen/Qwen3.8-27B) pulling in nearly 15 k likes and a surge of quantized GGUF variants (unsloth, ISTA‑DASLab, DavidAU). Video‑generation is heating up: Lightricks’ LTX‑2.5 image‑to‑video model crossed 3.7 k likes, while MiniMax‑H3 and its community LoRA (Alissonerdx/Minimax-H3-ComfyUI) continue to attract attention for rapid, controllable video synthesis. Finally, the evergreen sentence‑transformers/all-MiniLM-L6-v2 remains a top‑download embedding workhorse, underscoring sustained demand for lightweight, high‑quality text embeddings across retrieval and RAG pipelines.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat, instruction‑tuned)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,961 | 7,768,964 | Flagship 27 B bilingual LLM with strong reasoning; base for many quantized/fine‑tuned offshoots. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,335 | 150,110 | Compact 2 B Llama‑style model optimized for mobile/edge inference; gaining traction in the MiniCPM community. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,736 | 7,979 | 4 B agentic LLM built on Qwen 3.5 text backbone; praised for tool‑use and planning capabilities. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,030 | 15,158,496 | Classic GPT‑2 checkpoint still widely used for prototyping, educational demos, and baseline comparisons. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,162 | 624,390 | Flash‑style instruction‑tuned variant of Qwen 3.8; lower latency for chat‑style applications. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,192 | 244,457 | Image‑text‑to‑text flash model; combines strong vision encoder with efficient decoder for rapid multimodal QA. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,961 | 7,768,964 | Besides text, the base model supports image‑text‑to‑text via its vision adaptor, driving multimodal experimentation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,731 | 1,548,442 | Diffusion‑based image‑to‑video (and video‑to‑video) model; notable for high‑fidelity, controllable video synthesis. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,237 | 4,819,845 | Image‑text‑to‑video diffusion model; popular for short‑form content generation and easy integration with ComfyUI. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 369 | 123,491 | Community‑fine‑tuned variant of MiniMax‑H3 focused on singularity‑style visual effects; gaining interest in VFX circles. |
| [Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI) | Alissonerdx | 139 | 11,860 | LoRA adapter for MiniMax‑H3 packaged for ComfyUI; enables rapid style swaps without retraining. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 397 | 3,707 | Text‑to‑audio (music generation) model using symbolic planning; showcases agentic editing of musical scores. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 185 | 1,202 | Zero‑shot TTS voice‑cloning model; rising for personalized voice‑over applications. |

#### 🔧 Specialized Models (code, math, medical, embeddings, etc.)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,927 | 252,928,721 | Compact 384‑dim sentence embedding; ubiquitous for retrieval, clustering, and lightweight semantic search. |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 774 | 797,832 | Pretrained time‑series forecasting model (TimesFM); gaining traction for zero‑shot demand and anomaly detection. |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,300 | 46,513,338 | Classic BERT base; still a go‑to for fill‑mask, downstream fine‑tuning, and educational use. |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,433 | 7,325,282 | Distilled BERT offering 40% size reduction with ~97% performance; favored for latency‑critical tasks. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 526 | 12,880 | Massively multilingual speech pretraining wav2vec2 model; useful for low‑resource ASR and language ID. |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,499 | 21,331,361 | CLIP vision‑language backbone; essential for zero‑shot image classification, retrieval, and multimodal bridging. |

#### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, etc.)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,007 | 11,005,880 | GGUF‑quantized Qwen 3.8‑27B (4‑bit) enabling CPU/GPU inference with minimal quality loss; massive download count. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA‑DASLab | 966 | 769,557 | GSQ‑RCO mixed‑precision GGUF variant; noted for improved perplexity at low bit‑widths. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 630 | 750,591 | Aggressive fine‑tune + GGUF quantization targeting uncensored, coding‑heavy use cases; popular in experimental LLM circles. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 215 | 99,716 | GGUF version of MiniCPM5‑2B for edge deployment; gaining interest in IoT and mobile LLM apps. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (base) – *included for reference* | Qwen | 14,961 | 7,768,964 | The foundation upon which most of the above quantizations are built. |

---

### 3. Ecosystem Signal (≈150 words)  
The **Qwen 3.8 family** continues to be the ecosystem’s gravitational center: its base model tops the likes chart, while a wave of GGUF, AWQ, and other quantizations (unsloth, ISTA‑DASLab, DavidAU) pushes the model into low‑latency, CPU‑friendly scenarios. This reflects a broader community shift toward **accessible, deployable LLMs** rather than raw scale alone.  

On the multimodal front, **image‑to‑video diffusion** (Lightricks LTX‑2.5, MiniMax‑H3) and **image‑text‑to‑text flash** models (DeepSeek‑V4.1‑Flash, Qwen‑Flash‑Next) are seeing rapid uptake, driven by demand for short‑form video generation and real‑time vision‑language assistants.  

Open‑weight models dominate the trending list; proprietary‑only entries are scarce, underscoring the Hugging Face community’s preference for transparent, remixable checkpoints. Quantization and LoRA‑style fine‑tuning remain the most active refinement paths, enabling users to adapt massive foundations to edge devices, specific domains, or style‑controlled outputs without full retraining.  

Overall, momentum is consolidating around **efficient, multimodal, and readily quantizable foundations**—especially the Qwen and MiniMax families—while classic encoders (BERT, Sentence‑Transformers, CLIP) retain strong utility for downstream tasks.

---

### 4. Worth Exploring  
1. **unsloth/Qwen3.8-27B-GGUF** – The most downloaded quantized variant (≈11 M downloads). Ideal for developers who need a high‑quality 27 B LLM that runs comfortably on a single GPU or even CPU, making it perfect for local agents, private chatbots, or rapid prototyping.  

2. **Lightricks/LTX-2.5** – A cutting‑edge diffusion model for image‑to‑video (and video‑to‑video) generation. Its strong community liking and versatile conditioning (text, image, video) make it a great testbed for creative AI workflows, short‑form content pipelines, or research on temporal consistency.  

3. **sentence-transformers/all-MiniLM-L6-v2** – Despite its age, this 384‑dim embedding model remains the go‑to for lightweight semantic search, retrieval‑augmented generation, and clustering. Its tiny size, superb performance, and massive download count guarantee low friction when integrating into production services.  

*All links are preserved as requested.*

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*