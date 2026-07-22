# Hugging Face Trending Models Digest 2026-07-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-22 01:03 UTC

---

# **Hugging Face Trending Models Digest**
**Date: July 22, 2026**

---

## **🔥 Today’s Highlights**
This week’s trending models on Hugging Face reflect a surge in **multimodal capabilities**, **ultra-efficient quantization**, and **specialized fine-tunes**—particularly in OCR, robotics, and uncensored conversational AI. **Google’s Gemma-4-31B** and **Baidu’s Unlimited-OCR** lead in downloads, signaling strong demand for high-performance vision-language models. Meanwhile, **prism-ml’s Bonsai-27B** (1-bit) and **Ternary-Bonsai-27B** (2-bit) push the boundaries of **extreme quantization**, enabling edge deployment. The rise of **uncensored MoE models** (e.g., Qwen3.6 variants) and **robotics-focused VLA models** (MiniCPM-RobotManip) highlights a shift toward **domain-specific AI** and **real-world applicability**.

---

## **📊 Trending Models**

### **🧠 Language Models (LLMs, Chat, Instruction-Tuned)**
| Model | Author | Likes | Downloads | Why It’s Trending |
|-------|--------|-------|-----------|-------------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,277 | 545,109 | A **MoE-based** conversational model with **DSA (Dynamic Sparsity Attention)**, excelling in reasoning and efficiency. |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 570 | 1,404,962 | A **1-bit quantized** LLM optimized for **llama.cpp**, balancing performance and extreme compression. |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 899 | 432,196 | A **2-bit ternary-quantized** model, pushing **ultra-low-bit inference** for edge devices. |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 3,313 | 12,113,203 | Google’s **latest Gemma 4** model, a **31B-parameter** multimodal chat model with strong vision-language capabilities. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,970 | 1,997,690 | An **uncensored MoE** variant of Qwen3.6, optimized for **aggressive fine-tuning** and unrestricted outputs. |

---

### **🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)**
| Model | Author | Likes | Downloads | Why It’s Trending |
|-------|--------|-------|-----------|-------------------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 2,605 | 2,237,351 | A **high-performance OCR model** from Baidu, dominating downloads with **feature extraction** and **text recognition** capabilities. |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 1,199 | 722,058 | A **compressed vision-language model** optimized for **code generation** and **multimodal reasoning**. |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,362 | 16,441 | A **conversational multimodal model** with **image-text-to-text** capabilities, gaining traction for **creative AI** applications. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,387 | 2,133,420 | A **quantized Qwen3.5-based** model with **reasoning enhancements**, optimized for **llama.cpp**. |
| **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Wan-AI | 151 | 2,497 | A **text-to-video diffusion model**, part of the growing trend in **AI-generated video synthesis**. |

---
### **🔧 Specialized Models (Code, Math, Medical, Embeddings)**
| Model | Author | Likes | Downloads | Why It’s Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | nvidia | 96 | 93,021 | A **1B-parameter embedding model** from NVIDIA, optimized for **sentence similarity** and **retrieval tasks**. |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 237 | 17,162 | A **Qwen3.5-based OCR model**, specializing in **image-text-to-text** for structured document processing. |
| **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | 299 | 92,265 | A **speech-to-text model** with **speaker diarization**, addressing **real-time transcription** needs. |

---
### **📦 Fine-tunes & Quantizations (GGUF, AWQ, Community Models)**
| Model | Author | Likes | Downloads | Why It’s Trending |
|-------|--------|-------|-----------|-------------------|
| **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** | prism-ml | 161 | 25,273 | A **1-bit MLX-optimized** version of Bonsai-27B, targeting **Apple Silicon** efficiency. |
| **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** | prism-ml | 135 | 20,445 | A **2-bit ternary-quantized MLX model**, pushing **ultra-efficient inference** on Macs. |
| **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** | GnLOLot | 147 | 51,746 | A **quantized MiniCPM5 variant** with **reasoning enhancements**, optimized for **llama.cpp**. |
| **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | AngelSlim | 156 | 145,102 | A **GGUF-quantized** version of Tencent’s **Hy3**, gaining popularity for **lightweight chat**. |

---

## **🌐 Ecosystem Signal**
The Hugging Face ecosystem in July 2026 is **dominated by three key trends**:

1. **Multimodal Dominance**
   - **Vision-language models (VLMs)** like **Gemma-4-31B**, **Unlimited-OCR**, and **Inkling** are seeing **massive adoption**, with Baidu’s OCR model leading in downloads.
   - **Video generation** (e.g., Wan-Dancer-14B) and **audio processing** (e.g., Nemotron-3.5-ASR) are emerging as high-growth areas.

2. **Extreme Quantization & Efficiency**
   - **prism-ml’s Bonsai/Ternary-Bonsai** series is pioneering **1-bit and 2-bit quantization**, enabling **edge deployment** of 27B models.
   - **GGUF and MLX optimizations** (e.g., MiniCPM5 variants) are becoming **standard for community fine-tunes**, reducing hardware barriers.

3. **Uncensored & Specialized Models**
   - **Uncensored MoE models** (e.g., Qwen3.6 variants) are gaining traction, reflecting demand for **unrestricted AI outputs**.
   - **Robotics-focused models** (e.g., MiniCPM-RobotManip) and **OCR tools** (e.g., OvisOCR2) highlight a shift toward **real-world, task-specific AI**.

**Open-weight models** (e.g., Google’s Gemma, ZAI’s GLM) are **competing with proprietary solutions**, while **quantization techniques** are democratizing access to **high-performance models**.

---

## **🔍 Worth Exploring**
1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   - **Why?** The **2-bit ternary quantization** is a **breakthrough in model compression**, enabling **27B-parameter models** to run on **consumer GPUs** with minimal performance loss.

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **Why?** A **production-ready OCR model** with **2.2M+ downloads**, ideal for **document digitization, receipt scanning, and multilingual text extraction**.

3. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - **Why?** Google’s **latest multimodal model** sets a new benchmark for **vision-language chat**, with **strong reasoning** and **image understanding** capabilities.

---
**Next Digest:** August 2026
*Stay tuned for deeper dives into robotics models, audio AI, and emerging quantization techniques.*

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*