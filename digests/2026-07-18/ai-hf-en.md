# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-17 22:15 UTC

---


---

### **Hugging Face Trending Models Digest (2026-07-18)**  
**Today's Highlights**  
The GLM-5.2 and Qwythos-9B-Claude-Mythos-5-1M-GGUF models lead as top multimodal performers, with GLM-5.2 emphasizing conversational utility and Qwythos blending Qwen3.5 with reasoning-focused design. Uncensored and highly quantized variants (e.g., HauhauCS/Qwen3.6-35B-A3B, prism-ml/Bonsai-27B-gguf) dominate text-generation, reflecting growing demand for adaptable, resource-efficient models. OCR and video-generation tools like Unlimited-OCR and Wan-Dancer-14B highlight specialized use cases, while community-driven fine-tunes (e.g., unsloth/Qwen3.6-27B-NVFP4) drive adoption.  

---

### **Trending Models**  

#### **🧠 Language Models**  
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  *Author: zai-org | Likes: 4,070 | Downloads: 534,698*  
  A conversational GLM-based model optimized for text-generation and Mixture-of-Experts (MoE) architecture, gaining traction for its balance of scale and efficiency.  

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author: HauhauCS | Likes: 2,824 | Downloads: 2,295,313*  
  Uncensored Qwen3.6 variant leveraging MoE and vision capabilities, trending for its unrestricted outputs and adaptability in specialized applications.  

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  *Author: tencent | Likes: 819 | Downloads: 12,719*  
  Tencent’s Hy3 model targets text-generation with a focus on multilingual and reasoning tasks, representing China’s push in LLM development.  

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
  *Author: GnLOLot | Likes: 273 | Downloads: 154,762*  
  A quantized GGUF version of MiniCPM5-1B, combining Claude-inspired alignment with 1-bit compression for efficient reasoning.  

---

#### **🎨 Multimodal & Generation**  
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  *Author: empero-ai | Likes: 2,269 | Downloads: 2,096,147*  
  Integrates Qwen3.5 with audio-text-to-text functionality and advanced reasoning, reflecting demand for cross-modal interaction.  

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
  *Author: Wan-AI | Likes: 106 | Downloads: 2,185*  
  A text-to-video model generating dance-like motion, highlighting emerging interest in creative, identity-preserving generative tools.  

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**  
  *Author: unsloth | Likes: 224 | Downloads: 1,924,495*  
  NVidia FP4-quantized Qwen3.6 model for image-text-to-text tasks, showcasing efficient large-model deployment.  

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  *Author: baidu | Likes: 2,018 | Downloads: 1,992,355*  
  High-download OCR model emphasizing feature extraction and scalability, underscoring industry emphasis on document AI.  

---

#### **🔧 Specialized Models**  
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  *Author: OpenMOSS-Team | Likes: 248 | Downloads: 83,160*  
  Audio-to-text model focused on transcription and speaker diarization, serving niche but critical enterprise applications.  

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**  
  *Author: Cseti | Likes: 85 | Downloads: 0*  
  LoRA adapter for novel-view synthesis in video generation, indicating growth in controllable generative frameworks.  

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
  *Author: Cactus-Compute | Likes: 256 | Downloads: 874*  
  Function-calling and tool-use model built with JAX, targeting advanced agentic workflows.  

---

#### **📦 Fine-tunes & Quantizations**  
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  *Author: prism-ml | Likes: 386 | Downloads: 1,045,182*  
  1-bit quantized GGUF variant of Qwen3.5, optimized for llama.cpp, popular for CPU-friendly deployment.  

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**  
  *Author: AngelSlim | Likes: 120 | Downloads: 84,834*  
  GGUF version of Tencent’s Hy3, enabling lightweight inference for multilingual and reasoning tasks.  

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**  
  *Author: unsloth | Likes: 88 | Downloads: 5,194*  
  GGUF adaptation of thinkingmachines/Inkling, combining MoE and audio-text-to-text capabilities for edge devices.  

---

### **Ecosystem Signal**  
Model families like **Qwen** (Alibaba) and **GLM** (ZhiAI) continue to dominate Hugging Face’s trending charts, with their open-weight variants attracting both fine-tuning and quantization communities. **GGUF-formatted models** (optimized for llama.cpp) are proliferating, with prism-ml and empero-ai spearheading highly compressed 1-bit and ternary variants. Proprietary models (e.g., Claude-Mythos integrations) are increasingly adapted by third parties, while **multimodal and function-calling agents** (e.g., needle, MOSS-Transcribe-Diarize) signal a shift toward specialized, interoperable AI toolchains. The ecosystem reflects a divide: high-performance, resource-heavy models versus efficient, quantized alternatives tailored for accessibility.  

---

### **Worth Exploring**  
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: Its MoE design and conversational focus make it a benchmark for scalable, open-weight performance.  
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**: Combines Qwen3.5’s strengths with reasoning and audio capabilities, ideal for multimodal research.  
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: Exceptional download volume suggests robustness in real-world OCR applications, warranting deeper evaluation.


---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*