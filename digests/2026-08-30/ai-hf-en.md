# Hugging Face Trending Models Digest 2026-08-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-29 22:15 UTC

---

**🤖 Hugging Face Trending Models Digest – 30 August 2026**  

---

### 1. Today’s Highlights  
The weekly leaderboard is dominated by **multimodal Qwen‑3.8 releases** – the flagship 27 B model continues to pull the most likes (13 k) and downloads (4 M), while its lightweight “Flash‑Next” variant is climbing fast with > 4 k likes.  **DeepSeek‑V4‑Flash** shows that the new generation of instruction‑tuned LLMs is already attracting massive traffic (3.8 k likes, > 4 M downloads).  In the generative‑video arena, **MiniMax‑H3** (5 k likes, > 5 M downloads) and the open‑source **Lightricks LTX‑2.5** (2 k likes, > 1 M downloads) illustrate the rapid shift from text‑only to high‑fidelity text‑to‑video pipelines.  Finally, the flood of **GGUF and FP8 quantizations** (e.g., unsloth‑Qwen3.8‑27B‑GGUF, orcarouter‑Qwen3.8‑Uncensored‑FP8) signals that the community is aggressively optimizing large models for edge‑friendly inference.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat & instruction‑tuned)  
| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[deepseek-ai/DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai | 3,805 | 4,330,482 | State‑of‑the‑art instruction model with flash‑attention; strong conversational benchmarks drive adoption. |
| **[Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,246 | 4,028,839 | 27 B multimodal LLM, flagship of the Qwen 3.8 family; heavy download volume shows enterprise interest. |
| **[zai-org/GLM‑5.3‑Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1,615 | 189,793 | Flash‑optimized version of GLM‑5.3, balances size and speed for chat applications. |
| **[zai-org/GLM‑5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1,262 | 8,804 | Original 5.3 B MoE model, still popular for research on mixture‑of‑experts scaling. |
| **[moonshotai/Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11,079 | 2,701,014 | Vision‑language model with compressed‑tensor format; preferred for low‑latency multimodal inference. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,122 | 1,044,661 | Single‑file diffusion model for **image‑to‑video**; sets new quality‑speed trade‑offs on consumer hardware. |
| **[MiniMaxAI/MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,617 | 5,018,833 | End‑to‑end **text‑to‑video** diffusion model; dominates the weekly “video generation” searches. |
| **[Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,284 | 52,341 | **Image‑text‑to‑text** (multimodal chat) with flash‑attention; early adopter of Qwen‑4‑exp architecture. |
| **[FastVideo/FastVideo‑FastH3‑4‑step‑Preview‑v1‑VSA‑DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 148 | 0 | Experimental lightweight preview model for rapid video prototyping; early‑stage but generating buzz. |
| **[BreezeBlue/Breeze‑TTS‑2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 188 | 1,017 | High‑quality **text‑to‑speech** model with expressive prosody, filling the gap for open‑source TTS. |

#### 🔧 Specialized Models (code, math, medical, embeddings)  
| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[ornith-ai/Ornith‑1.5‑35B‑A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai | 495 | 106,562 | 35 B MoE model fine‑tuned on scientific literature; gaining traction among research assistants. |
| **[pipecat-ai/phonellm‑alpha‑1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 133 | 2,668 | Nemotron‑based **speech‑aware LLM** for dialogue systems that need voice input. |
| **[peculiar-ragdoll/Tiel‑Coder‑35B‑A3B‑GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar‑ragdoll | 117 | 47,817 | Large code‑generation model released in GGUF format for efficient local deployment. |

#### 📦 Fine‑tunes & Quantizations (community variants, GGUF, FP8, etc.)  
| Model | Author | Likes | Downloads | Why it’s hot |
|-------|--------|------|-----------|--------------|
| **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,182 | 8,363,481 | GGUF‑converted Qwen 27 B; the most downloaded quantized model of the week, enabling 4‑bit inference on laptops. |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,253 | 290,216 | FP8‑quantized “uncensored” variant; showcases extreme compression with minimal loss of accuracy. |
| **[OBLITERATUS/Qwen3.8‑27B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 913 | 645,554 | Mixed‑precision (MLX + GGUF) build targeting Apple Silicon; rapidly adopted by the Mac‑AI community. |
| **[unsloth/Qwen3.8‑Flash‑Next‑GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 562 | 188,061 | First GGUF of the Flash‑Next model, widely used for on‑device multimodal assistants. |
| **[froggeric/Qwen‑Fixed‑Chat‑Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1,517 | 0 | Community‑provided Jinja chat‑template that fixes alignment issues in Qwen‑3.8; fast‑adopted by developers. |

---

### 3. Ecosystem Signal (100‑200 words)  
The **Qwen‑3.8 family** is unmistakably the engine of this week’s traffic: the 27 B base model remains the heavyweight workhorse, while the newly released **Flash‑Next** and its GGUF spin‑offs prove that the community values both speed and on‑device accessibility.  Parallel to Qwen, **DeepSeek‑V4‑Flash** demonstrates that instruction‑tuned LLMs continue to attract enterprise downloads, hinting at a split market between “general‑purpose” (Qwen) and “instruction‑focused” (DeepSeek) backbones.  In the generative‑video sector, **MiniMax‑H3** and **LTX‑2.5** confirm that text‑to‑video pipelines have moved from research demos to mainstream consumption, especially when paired with lightweight quantizations.  Quantization trends are three‑fold: (1) **GGUF** dominates the open‑source quantized space (unsloth, orcarouter), (2) **FP8** is gaining traction as a middle ground between 4‑bit GGUF and full‑precision, and (3) **MLX‑compatible** variants cater to the Apple‑silicon market.  Overall, the ecosystem is gravitating toward **high‑quality multimodal models that are aggressively compressed for consumer hardware**, while still supporting large‑scale research workloads.

---

### 4. Worth Exploring  

1. **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – The highest‑downloaded quantized model this week; 4‑bit GGUF enables near‑full‑scale performance on a laptop GPU, making it the go‑to for anyone needing a powerful multimodal LLM locally.  

2. **[MiniMaxAI/MiniMax‑H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – Sets the current benchmark for open‑source **text‑to‑video** quality and speed; its 5‑k weekly likes and 5 M downloads prove it’s the most practical video generation tool for creators and researchers.  

3. **[deepseek-ai/DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** – A top‑ranking instruction‑tuned LLM that blends strong conversational abilities with flash‑attention efficiency; ideal for building next‑generation chat assistants or RAG pipelines.  

These three models collectively illustrate the current “sweet spot” of the HF ecosystem: **large, high‑quality foundations (Qwen & DeepSeek) paired with community‑driven, ultra‑compact quantizations (GGUF) and breakthrough generative‑video capabilities (MiniMax‑H3).**

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*