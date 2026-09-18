# Hugging Face Trending Models Digest 2026-09-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-18 22:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-19

## 1. Today’s Highlights

Qwen continues to dominate the open-weight ecosystem, with **Qwen/Qwen3.8-27B** and **Qwen/Qwen3.8-Flash-Next** both ranking high in likes and downloads, and spawning a large wave of community GGUFs, MLX quantizations, and fine-tunes. **DeepSeek-V4.1-Flash** is the strongest DeepSeek entry this week, with notable uncensored FP8 variants emerging. Video and audio generation are also surging, led by **MiniMaxAI/MiniMax-H3**, **Lightricks/LTX-2.5**, and **m-a-p/YuE2-3B**. Efficiency-focused releases such as ternary 2-bit quantizations and mixed-precision GGUF builds signal an increasingly mature edge/local inference scene. Classic models like **meta-llama/Llama-3.1-8B-Instruct** and **sentence-transformers/all-MiniLM-L6-v2** remain massively popular, highlighting the lasting demand for reliable, lightweight baselines.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) — Author: Edge0, Likes: 3,392, Downloads: 52,519. A text-generation Mixture-of-Experts model optimized for edge inference, attracting attention for its efficient 35B-A3B architecture.

- [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) — Author: deepseek-ai, Likes: 3,165, Downloads: 429,865. A fast image-text-to-text model from DeepSeek’s V4.1 series, trending for its strong multimodal text-generation performance and rapid community adoption.

- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Author: Qwen, Likes: 15,643, Downloads: 7,358,662. Qwen’s latest multimodal chat flagship, combining conversational ability with image-text-to-text input and driving a large ecosystem of downstream builds.

- [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) — Author: XingChen-AGI, Likes: 424, Downloads: 3,073. A text-generation MoE model built for conversational use, noteworthy as a new entrant in the mid-size MoE space.

- [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) — Author: openbmb, Likes: 1,560, Downloads: 357,166. A compact 2B text-generation model from the MiniCPM family, trending for its balance of small size and strong language performance.

- [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — Author: Qwen, Likes: 5,401, Downloads: 724,142. An experimental image-text-to-text chat model from Qwen’s next-generation line, drawing strong early interest for its speed and multimodal capabilities.

- [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) — Author: Agnes-AI, Likes: 224, Downloads: 1,357. A multilingual/multimodal text-generation model from the Agnes family, gaining niche attention for its conversational design.

- [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — Author: meta-llama, Likes: 7,718, Downloads: 5,934,139. A widely used instruction-tuned 8B Llama model that remains a reliable baseline for chat and general NLP tasks.

- [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) — Author: TaichuAI, Likes: 181, Downloads: 1,802. A vision-language text-generation model emphasizing spatial reasoning, representing a smaller open multimodal LLM option.

- [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) — Author: zai-org, Likes: 2,445, Downloads: 2,669,173. A fast image-text-to-text conversational model from the GLM family, trending as an open alternative for multimodal chat.

- [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) — Author: XHToken, Likes: 1,272, Downloads: 29,684. A 4B text-generation LLM designed for general-purpose language tasks, showing solid uptake for its size.

- [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) — Author: internlm, Likes: 164, Downloads: 711. A preview text-generation model with Zh/En support and MoE/DSA architecture, early-stage but attracting specialist interest.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) — Author: m-a-p, Likes: 795, Downloads: 13,668. A text-to-audio/music generation model featuring symbolic planning and agentic editing, pushing open music generation into more controllable workflows.

- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) — Author: Lightricks, Likes: 4,327, Downloads: 1,590,087. A diffusion-based video model supporting image-to-video, text-to-video, and video-to-video, trending as a high-quality open video generator.

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — Author: MiniMaxAI, Likes: 5,452, Downloads: 4,449,605. A text-to-video and image-to-video diffusion model that is one of the most popular video generation releases on the hub this week.

- [tencent/AuK](https://huggingface.co/tencent/AuK) — Author: tencent, Likes: 303, Downloads: 3,184. A zero-shot text-to-speech model with voice cloning capabilities, representing Tencent’s entry into open speech generation.

- [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) — Author: WarmBloodAban, Likes: 495, Downloads: 217,900. A community video-generation model built on MiniMax-H3, offering text-to-video, image-to-video, and video-to-video pipelines.

- [Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2) — Author: Comfy-Org, Likes: 185, Downloads: 102,247. A ComfyUI-compatible YuE2 music/audio checkpoint, trending among workflow-based audio generation users.

### 🔧 Specialized Models (code, math, medical, embeddings)

- [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) — Author: harshatheg, Likes: 370, Downloads: 0. A 1B text-generation fine-tune focused on structured/constrained decoding and parallel decoding for Apple Silicon, interesting for efficient controllable generation.

- [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) — Author: sentence-transformers, Likes: 6,060, Downloads: 255,050,544. A widely deployed sentence-similarity embedding model that remains the default lightweight choice for retrieval, clustering, and semantic search.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) — Author: prism-ml, Likes: 895, Downloads: 405,609. A GGUF 2-bit ternary quantization of a 27B model, trending for aggressive compression and llama.cpp compatibility.

- [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) — Author: ISTA-DASLab, Likes: 1,312, Downloads: 1,078,301. A GGUF quantization of Qwen3.8-27B using GSQ/RCO mixed-precision techniques, gaining traction as an efficient high-quality option.

- [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) — Author: ukisai, Likes: 438, Downloads: 6,293. A safetensors fine-tune of Qwen3.8-27B oriented toward efficient thinking, notable as a non-quantized community variant.

- [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) — Author: DavidAU, Likes: 896, Downloads: 1,197,378. A heavily customized uncensored GGUF fine-tune of Qwen3.8-27B, blending coding and “heretic” tuning for edge deployment.

- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) — Author: unsloth, Likes: 4,314, Downloads: 7,628,907. The official Unsloth GGUF quantization of Qwen3.8-27B, extremely popular for local and low-memory inference.

- [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) — Author: ukisai, Likes: 280, Downloads: 100,177. A GGUF version of the Swift-Qwen3.8-27B fine-tune, combining efficient thinking with llama.cpp compatibility.

- [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) — Author: dealignai, Likes: 279, Downloads: 33,065. An FP8 uncensored fine-tune of DeepSeek-V4.1-Flash, reflecting ongoing demand for unrestricted text generation.

- [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) — Author: prism-ml, Likes: 169, Downloads: 5,056. An MLX 2-bit ternary quantization of the same Bonsai 27B model, targeting Apple Silicon users with aggressive compression.

- [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) — Author: TokenRhythm, Likes: 2,366, Downloads: 22,666. A Qwen3.5-text-based agentic fine-tune in a small 4B form factor, appealing for lightweight autonomous agents.

- [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) — Author: TokenRhythm, Likes: 887, Downloads: 10,746. The larger 9B sibling of NeoHorse-1, also an agentic text-generation fine-tune built on Qwen3.5 text.

---

## 3. Ecosystem Signal

The most striking trend is the consolidation of the Qwen family as the primary base for open-weight experimentation. Qwen3.8-27B and Qwen3.8-Flash-Next account for a large share of top fine-tunes and quantizations, from Unsloth GGUF to ISTA-DASLab mixed-precision and several uncensored/agentic variants. DeepSeek-V4.1-Flash is also rising, with FP8 and uncensored derivatives appearing quickly. Meanwhile, MiniMax H3 and LTX-2.5 are becoming major players in open video generation, and YuE2 is extending open music generation beyond simple text-to-audio.

Quantization activity is increasingly diverse and aggressive: traditional GGUF remains dominant, but MLX, FP8, and ternary 2-bit formats are gaining traction, reflecting a shift toward edge and Apple Silicon deployment. Community fine-tuning remains strongly oriented toward uncensored models, agentic behavior, and coding, as seen in DavidAU and TokenRhythm releases. Embedding models such as all-MiniLM-L6-v2 continue to dominate raw downloads, demonstrating that small, reliable retrieval models generate massive infrastructural value. All top entries are open-weight, reinforcing that open ecosystems—not proprietary APIs—are driving current Hugging Face momentum.

---

## 4. Worth Exploring

1. **Qwen/Qwen3.8-27B** — With over 15K likes and 7.3M downloads, this is currently the central hub of the Qwen ecosystem. Its multimodal chat capabilities, strong performance, and enormous downstream quantization/fine-tune activity make it an essential model to evaluate for production or research.

2. **Lightricks/LTX-2.5** — A highly flexible video generation model supporting text-to-video, image-to-video, and video-to-video. Its 4,327 likes and 1.59M downloads indicate strong community trust, and its diffusion-single-file format makes it approachable for experimentation.

3. **sentence-transformers/all-MiniLM-L6-v2** — Despite being several years old, this lightweight embedding model has over 255M downloads and remains a proven baseline for semantic similarity, clustering, and retrieval. It is worth exploring as a reliable, low-cost embedding backbone for many NLP pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*