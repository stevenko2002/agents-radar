# Hugging Face Trending Models Digest 2026-09-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-11 22:15 UTC

---

**Today's Highlights**  
Qwen’s vision‑language family continues to dominate the leaderboard, with the base Qwen3.8‑27B and its Flash‑Next variants collecting the most likes and downloads. Parallel to this, the community is pouring energy into GGUF‑quantized and other lightweight fine‑tunes (unsloth, ISTA‑DASLab, DavidAU, etc.), making high‑performance models accessible on consumer hardware. Specialized pipelines are also gaining traction – from cybersecurity‑hardened GLM variants to time‑series forecasters and audio generators – showing a shift toward domain‑specific AI rather than pure scale.  

---  

## Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
- **openbmb/MiniCPM5-2B** – Author: openbmb | Likes: 1,189 | Downloads: 67,550  
  *A compact 2 B‑parameter LLM built on LLaMA architecture, trending for its strong reasoning‑to‑size ratio and easy integration.*  

- **XHToken/Spark-X2.5-4B** – Author: XHToken | Likes: 1,099 | Downloads: 17,712  
  *A 4 B‑parameter instruction‑tuned model noted for fast inference and multilingual capability, attracting developers seeking a lightweight alternative to larger LLMs.*  

- **nex-agi/Nex-N2.5-mini** – Author: nex-agi | Likes: 688 | Downloads: 3,121  
  *A small‑scale Qwen‑derived model that mixes text‑generation tags with vision‑language hints, gaining attention as a testbed for efficient multimodal research.*  

- **nex-agi/Nex-N2.5-Pro** – Author: nex-agi | Likes: 594 | Downloads: 12,260  
  *The larger sibling of Nex‑N2.5‑mini, offering improved instruction following while retaining a modest footprint, popular among hobbyists building chat agents.*  

- **openai-community/gpt2** – Author: openai-community | Likes: 3,939 | Downloads: 15,074,191  
  *The classic GPT‑2 baseline remains a go‑to for quick prototyping and educational purposes, explaining its steady high download count.*  

- **IFM/K2-Horizon-MoVA-36B-A4B** – Author: IFM | Likes: 279 | Downloads: 5,192  
  *A 36 B‑parameter mixture‑of‑experts LLM focused on long‑context understanding, trending among researchers exploring sparse activation schemes.*  

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
- **deepseek-ai/DeepSeek-V4.1-Flash** – Author: deepseek-ai | Likes: 1,768 | Downloads: 75,774  
  *An image‑to‑text model that adds a fast “Flash” decoder, praised for low‑latency vision‑language reasoning.*  

- **Qwen/Qwen3.8-27B** – Author: Qwen | Likes: 14,752 | Downloads: 7,563,763  
  *The flagship 27 B vision‑language model from Qwen, driving massive interest due to its strong performance on multimodal benchmarks.*  

- **Lightricks/LTX-2.5** – Author: Lightricks | Likes: 3,489 | Downloads: 1,669,564  
  *A diffusion‑based image‑to‑video model enabling smooth video generation from stills, trending for creative content creation.*  

- **WarmBloodAban/Minimax-h3_Singularity** – Author: WarmBloodAban | Likes: 295 | Downloads: 103,178  
  *An image‑to‑video model built on the Minimax‑H3 architecture, gaining traction for its high‑fidelity motion synthesis.*  

- **MiniMaxAI/MiniMax-H3** – Author: MiniMaxAI | Likes: 5,154 | Downloads: 4,970,363  
  *A versatile image‑text‑to‑video diffusion model, popular for its open weights and strong text‑to‑video capabilities.*  

- **Qwen/Qwen3.8-Flash-Next** – Author: Qwen | Likes: 5,104 | Downloads: 586,040  
  *An upgraded vision‑language model with a Flash‑style decoder, noted for better trade‑off between quality and speed.*  

- **nvidia/Qwen3.8-Flash-Next-NVFP4** – Author: nvidia | Likes: 202 | Downloads: 78,737  
  *NVIDIA‑optimized FP4‑quantized version of Qwen‑Flash‑Next, attracting users interested in cutting‑edge model‑optimizer techniques.*  

- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** – Author: deepseek-ai | Likes: 864 | Downloads: 443,954  
  *Experimental vision‑language model focusing on rapid visual reasoning, trending among researchers exploring efficient multimodal inference.*  

- **zai-org/GLM-5.3-Flash** – Author: zai-org | Likes: 2,249 | Downloads: 1,173,520  
  *A Flash‑decoder variant of the GLM‑5.3 series, valued for its strong conversational abilities and lower compute cost.*  

- **m-a-p/YuE2-3B** – Author: m-a-p | Likes: 221 | Downloads: 971  
  *A text‑to‑audio model specialized in symbolic music generation, gaining notice for its agentic editing capabilities.*  

- **Viggle/Viggle-Animate** – Author: Viggle | Likes: 179 | Downloads: 0  
  *A video‑to‑video diffusion model for character replacement and animation, trending in the niche of video editing despite low download numbers (early stage).*  

- **OpenVDN/vdn-minimax-h3** – Author: OpenVDN | Likes: 289 | Downloads: 153  
  *A text‑to‑video model fine‑tuned from MiniMax‑H3, emerging as a community‑driven alternative for video synthesis.*  

### 🔧 Specialized Models (code, math, medical, embeddings, etc.)  
- **dealignai/GLM-5.3-CYBERSECURITY-FP8** – Author: dealignai | Likes: 383 | Downloads: 28,328  
  *A GLM‑5.3 model fine‑tuned on cybersecurity corpora and run in FP8 precision, trending for security‑focused language tasks.*  

- **google/timesfm-3.0-pytorch** – Author: google | Likes: 730 | Downloads: 633,239  
  *A pretrained time‑series forecasting model (TimesFM) gaining traction for its strong zero‑shot performance across diverse temporal datasets.*  

- **sentence-transformers/all-MiniLM-L6-v2** – Author: sentence-transformers | Likes: 5,818 | Downloads: 254,035,929  
  *A widely‑used sentence‑embedding model; its massive download count reflects enduring demand for efficient semantic search.*  

- **microsoft/VibeVoice-ASR-Streaming-7B** – Author: microsoft | Likes: 197 | Downloads: 2,279  
  *A streaming automatic‑speech‑recognition model based on the VibeVoice architecture, trending for low‑latency transcription applications.*  

- **Qwen/Qwen-Drive-1.0-4B** – Author: Qwen | Likes: 167 | Downloads: 3,271  
  *A vision‑language model specialized for autonomous driving and motion planning, attracting interest from robotics researchers.*  

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, etc.)  
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** – Author: ISTA-DASLab | Likes: 833 | Downloads: 682,187  
  *A GGUF‑quantized version of Qwen3.8‑27B with GSQ‑RCO mixed‑precision, popular for enabling large‑model inference on limited hardware.*  

- **unsloth/Qwen3.8-27B-GGUF** – Author: unsloth | Likes: 3,895 | Downloads: 11,339,637  
  *One of the most downloaded GGUF variants, providing a highly accessible, quantized Qwen‑3.8‑27B model for CPU/GPU deployment.*  

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** – Author: DavidAU | Likes: 478

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*