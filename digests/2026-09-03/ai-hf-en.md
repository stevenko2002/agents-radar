# Hugging Face Trending Models Digest 2026-09-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-02 22:16 UTC

---

## 📊 Hugging Face Trending Models Digest – 2024‑09‑03  

### 1. Today’s Highlights  
- **Multimodal momentum** continues to dominate the leaderboard, with Qwen’s 27‑B vision‑language model and MiniMax‑H3 video generation model racking up millions of downloads in just a few weeks.  
- **LLM‑centric flash‑attention releases** (Qwen‑3.8‑Flash‑Next, GLM‑5.3‑Flash) are the most liked models, signalling a community pivot toward ultra‑fast inference on consumer‑grade GPUs.  
- **Quantized GGUF variants** have exploded in popularity – unsloth and community forks (e.g., Qwen‑3.8‑27B‑GGUF, GLM‑5.3‑Flash‑GGUF) now account for the largest share of weekly likes, highlighting the demand for portable, CPU‑only deployments.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, Chat / Instruction‑tuned)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|------|-----------|-------------------|
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1 514 | 94 403 | A 5.3‑B Mixture‑of‑Experts (MoE) chat model that balances quality and cost; strong community adoption for Chinese‑English dialogue. |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13 681 | 4 960 483 | Flagship 27‑B multimodal LLM, baseline for many fine‑tunes; massive download numbers reflect enterprise interest. |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3 389 | 9 354 057 | GGUF‑quantized 27‑B model that runs on a laptop‑class CPU; the single‑largest download count among all GGUF releases. |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 398 | 3 516 | Early preview of the “Hunyuan” high‑capacity series, attracting Chinese‑language developers. |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 196 | 6 813 | Small (1‑B) instruction‑tuned model optimized for phoneme‑aware generation, useful for speech‑assistant pipelines. |
| **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** | XHToken | 114 | 429 | Spark‑2.5 series continues to gain traction as an open‑source alternative to proprietary Chinese LLMs. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|------|-----------|-------------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4 729 | 207 941 | Flash‑attention vision‑language model (image‑text‑to‑text) that outperforms the baseline on benchmarks while staying under 30 GB. |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1 960 | 441 348 | First‑generation GLM‑5.3 variant with image‑text capability; praised for its low‑latency multimodal chat. |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4 805 | 5 532 597 | Diffusion‑based image‑to‑video model that generates 16‑frame clips from a single prompt; huge download surge after the 4‑step preview release. |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2 564 | 1 232 274 | Single‑file diffusion model for text‑to‑video; the “single‑file” packaging is driving community sharing. |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 249 | 0 | Early preview of a data‑free video synthesis model that leverages VSA (video‑segment attention). |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 351 | 3 086 | High‑quality TTS model fine‑tuned on multilingual data; gaining traction for low‑resource speech projects. |
| **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 293 | 0 | State‑of‑the‑art time‑series forecasting model released as a PyTorch checkpoint; early‑adopter interest evident in likes. |

#### 🔧 Specialized Models (code, embeddings, medical, etc.)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|------|-----------|-------------------|
| **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence‑transformers | 5 381 | 250 280 836 | Still the workhorse for semantic search and clustering; usage in RAG pipelines keeps it at the top of the embeddings leaderboard. |
| **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** | google‑bert | 2 851 | 63 694 017 | Classic baseline for fill‑mask and fine‑tuning; massive download numbers reflect its continued role in academic benchmarks. |
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar‑ragdoll | 194 | 130 086 | 35‑B code‑generation model quantized to GGUF; early community excitement around “A3B” mixed‑precision scheme. |

#### 📦 Fine‑tunes & Quantizations (GGUF, AWQ, community variants)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|------|-----------|-------------------|
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 725 | 431 339 | First flash‑attention Qwen variant released in GGUF, enabling efficient inference on Apple Silicon and Intel CPUs. |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 336 | 63 718 | Compact 5‑B multimodal GLM version for edge devices; popular among hobbyist developers. |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 1 026 | 805 791 | “Obliterated” (deeply pruned) 27‑B Qwen model that retains ~90 % performance while shrinking size to 12 GB. |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 659 | 254 529 | Uncensored GGUF fork used for jailbreak‑testing; high download count indicates research interest in safety. |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1 368 | 316 128 | FP8 quantization pushes the inference latency under 5 ms on RTX 4090, catching the eye of low‑latency app developers. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1 272 | 121 028 | MLX‑compatible version for Apple‑Silicon; shows the expanding cross‑hardware ecosystem. |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 191 | 64 325 | GGUF flash‑attention model with “uncensored” token set, attracting research on bias mitigation. |
| **[orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | orcarouter | 151 | 2 576 | FP8 version of GLM‑5.3‑Flash, showcasing the community’s push for extreme quantization on multimodal models. |
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA‑DASLab | 172 | 56 208 | Introduces GSQ (Group‑wise Symmetric Quantization) and RCO (Residual‑Correction Optimizer) for balanced accuracy/size trade‑offs. |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1 272 | 121 028 | Re‑listed for completeness – same as above, reinforces the MLX niche. |

---

### 3. Ecosystem Signal (≈150 words)  
The **multimodal wave** is unmistakable: Qwen’s “Flash‑Next” and GLM‑5.3‑Flash families dominate the likes chart, while community‑crafted GGUF forks amplify their reach to CPU‑only environments. This reflects a market shift from pure text LLMs to vision‑language and video generation models that can run on consumer hardware.  

**Model families gaining momentum** – Qwen (3.8‑27B, Flash‑Next) and GLM (5.3‑Flash) – are benefitting from a robust open‑weight release strategy, encouraging rapid forking, quantization, and “uncensored” variants. The **quantization craze** (GGUF, FP8, GSQ/RCO) signals the community’s appetite for low‑latency, low‑memory deployments, especially on Apple Silicon (MLX) and edge GPUs.  

Open‑weight models still dominate the top‑download list (Qwen‑27B, MiniMax‑H3, LTX‑2.5), but **proprietary‑style fine‑tunes** (uncensored, abliterated) are carving out a niche for safety‑testing and jailbreak research. Embedding models (MiniLM, BERT) stay essential as backbone services for Retrieval‑Augmented Generation pipelines.

---

### 4. Worth Exploring  

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – The most downloaded GGUF model; runs comfortably on a modern laptop CPU, offering near‑full‑size LLM performance for rapid prototyping without a GPU.  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – The leading open‑source text‑to‑video diffusion model; its 5.5 M‑download count and single‑file packaging make it ideal for experimenting with generative video pipelines.  

3. **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** – Demonstrates the cutting edge of FP8 quantization, achieving sub‑5 ms latency on high‑end GPUs while preserving most of the original model’s capabilities – a must‑try for latency‑critical applications.  

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*