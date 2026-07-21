# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 07:12 UTC

---

# **Hugging Face Trending Models Digest**
**July 21, 2026**

---

## **🔥 Today’s Highlights**

This week’s trending models on Hugging Face showcase a surge in **multimodal reasoning**, **ultra-efficient quantization**, and **open-weight alternatives** to proprietary systems. **Baidu’s Unlimited-OCR** leads with over 2.4K likes, signaling strong demand for high-performance OCR tools, while **Google’s Gemma-4-31B-it** (3.3K likes) demonstrates the continued dominance of Google’s open-weight models in multimodal tasks. **Prism-ml’s Bonsai and Ternary variants** highlight the growing trend toward **extreme quantization** (1-bit/2-bit), enabling edge deployment of large models. Meanwhile, **Qwen3.6-based uncensored variants** (e.g., HauhauCS’s 35B model) reflect the community’s push for **unrestricted, high-performance LLMs**.

---

## **📊 Trending Models**

### **🧠 Language Models (LLMs, Chat, Instruction-Tuned)**
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,239 | 531,947 | A **Mixture-of-Experts (MoE) model** optimized for conversational and reasoning tasks, leveraging GLM’s architecture for efficiency. |
| **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | tencent | 851 | 13,698 | A **Hunyuan-based 7B model** (likely optimized for Chinese and multilingual tasks) gaining traction for its balance of performance and efficiency. |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 549 | 1.2M | A **1-bit quantized 27B model** for text generation, optimized for **llama.cpp** and edge deployment. |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 868 | 338,945 | A **2-bit ternary-quantized** variant of Bonsai, pushing efficiency further while maintaining performance. |

---

### **🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)**
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | **2,487** | **2.1M** | A **high-accuracy OCR model** optimized for **feature extraction** and document understanding, with broad industry appeal. |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | **3,304** | **11.9M** | Google’s latest **multimodal Gemma model**, combining **image-text-to-text** with strong conversational abilities. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,376 | 2.1M | A **quantized Qwen3.5-based model** fine-tuned for **reasoning and multimodal tasks**, optimized for **llama.cpp**. |
| **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Wan-AI | 147 | 2,408 | A **text-to-video diffusion model** enabling **identity-preserving video generation** from text prompts. |
| **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** | OpenMOSS-Team | 89 | 544 | A **real-time video-language model** for **feature extraction** and dynamic scene understanding. |

---
### **🔧 Specialized Models (Code, Math, Medical, Embeddings)**
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | nvidia | 90 | 61,708 | A **1B embedding model** optimized for **sentence similarity** and retrieval tasks, leveraging Nvidia’s MiniStral3 architecture. |
| **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | openbmb | 138 | 0 | A **vision-language-action (VLA) model** for **robotics manipulation**, bridging AI and real-world control. |
| **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | openbmb | 102 | 0 | A **robot tracking model** for **real-time object detection and path planning** in robotic systems. |

---
### **📦 Fine-tunes & Quantizations (GGUF, AWQ, Community Forks)**
| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | **2,943** | 2.0M | An **uncensored, MoE-optimized Qwen3.6 variant** with **A3B quantization**, pushing the limits of open-weight LLMs. |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 174 | 16,719 | A **highly customized, uncensored Qwen3.6 fine-tune** with **multiple optimization layers**, appealing to power users. |
| **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** | prism-ml | 157 | 21,690 | A **1-bit MLX-optimized** version of Bonsai, targeting **Apple Silicon** for on-device inference. |
| **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** | unsloth | 112 | 6,771 | A **GGUF-quantized version of Inkling**, enabling **efficient multimodal inference** on consumer hardware. |

---

## **🌐 Ecosystem Signal**

The Hugging Face ecosystem in July 2026 is **dominated by three key trends**:

1. **Multimodal Dominance**
   - **Google’s Gemma-4-31B-it** and **Baidu’s Unlimited-OCR** highlight the shift toward **unified image-text models**, with **OCR and document understanding** emerging as critical applications.
   - **Qwen3.6-based models** (e.g., HauhauCS’s uncensored variants) are becoming the **de facto base for community fine-tunes**, particularly in **reasoning and multimodal tasks**.

2. **Extreme Quantization & Edge Deployment**
   - **Prism-ml’s Bonsai and Ternary variants** (1-bit/2-bit) are setting new benchmarks for **ultra-efficient LLMs**, enabling **edge deployment** without sacrificing performance.
   - **GGUF and MLX optimizations** (e.g., Apple Silicon support) are gaining traction, reducing reliance on proprietary frameworks like CUDA.

3. **Open-Weight vs. Proprietary Balance**
   - While **Google and Baidu** lead in open-weight multimodal models, **proprietary alternatives** (e.g., closed-source OCR APIs) still dominate enterprise use cases.
   - The **uncensored LLM movement** (e.g., Qwen3.6 forks) reflects a **community-driven push for unrestricted models**, though ethical concerns remain.

**Notable Observations:**
- **Robotics and VLA models** (e.g., MiniCPM-RobotManip) are gaining niche but critical adoption in **industrial and research applications**.
- **Fine-tuning culture** is evolving toward **highly customized, quantized variants**, with **GGUF and AWQ** becoming standard.
- **Nvidia’s Nemotron embeddings** and **Tencent’s Hy3** suggest **regional and domain-specific optimizations** (e.g., Chinese language, embeddings) are thriving.

---

## **🔍 Worth Exploring**

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - **Why?** Google’s latest **multimodal Gemma model** is a **benchmark for open-weight image-text models**, offering **strong conversational and reasoning capabilities** with broad compatibility.

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   - **Why?** A **2-bit quantized 27B model** pushing the limits of **edge deployment**, ideal for **low-power devices** while maintaining competitive performance.

3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   - **Why?** A **vision-language-action model** bridging AI and robotics—**worth exploring for researchers** working on **real-world robotic control**.

---
**Stay tuned for next week’s digest as the ecosystem continues to evolve!** 🚀

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*