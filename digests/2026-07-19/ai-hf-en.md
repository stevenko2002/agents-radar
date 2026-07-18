# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 22:16 UTC

---


# Hugging Face Trending Models Digest – July 19, 2026  

---

## 1. **Today's Highlights**  
- Google’s **Gemma-4-31B-it** dominates with over 12 million downloads, underscoring continued demand for large-scale, conversational open models.  
- **GLM-5.2** by Zai-org gains significant traction (4,125 likes, 541K downloads), reflecting growing interest in Mixture-of-Experts (MoE) architectures.  
- **Qwythos-9B** models from empero-ai surge in popularity with strong performance in reasoning tasks, driven by community-driven quantizations (GGUF).  
- Multimodal and video generation models like **Wan-Dancer-14B** and **OvisOCR2** signal expanding use cases beyond pure text generation.  
- Quantization formats like **GGUF** and **MLX** remain central to accessibility, enabling local deployment of billion-scale models.  

---

## 2. **Trending Models**  

### 🧠 Language Models (LLMs, chat models, instruction-tuned)  
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  *Author:* zai-org | *Likes:* 4,125 | *Downloads:* 541,662  
  A high-performing MoE-based conversational model optimized for dialogue and generation tasks.  

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  *Author:* prism-ml | *Likes:* 440 | *Downloads:* 1,218,815  
  A compact yet powerful 1-bit quantized version of Qwen-3.5 for efficient text generation via llama.cpp.  

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
  *Author:* GnLOLot | *Likes:* 277 | *Downloads:* 172,409  
  A 1B parameter fine-tuned model combining Claude-style reasoning with quantized efficiency.  

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)  
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  *Author:* google | *Likes:* 3,263 | *Downloads:* 12,608,008  
  A state-of-the-art multimodal instruction-tuned model supporting image+text inputs for conversational tasks.  

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
  *Author:* Wan-AI | *Likes:* 113 | *Downloads:* 2,328  
  Specializes in image-to-video generation with high-quality motion synthesis for creative applications.  

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  *Author:* baidu | *Likes:* 2,023 | *Downloads:* 2,088,470  
  A robust OCR model leveraging vision-language transformers for diverse document recognition scenarios.  

---

### 🔧 Specialized Models (code, math, medical, embeddings)  
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
  *Author:* Cactus-Compute | *Likes:* 266 | *Downloads:* 935  
  Designed for function calling and tool-use in agentic workflows, emphasizing structured output generation.  

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  *Author:* ATH-MaaS | *Likes:* 166 | *Downloads:* 13,750  
  A lightweight OCR model optimized for cross-lingual and handwriting recognition tasks.  

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)  
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  *Author:* empero-ai | *Likes:* 2,313 | *Downloads:* 2,112,869  
  Merges Qwen-3.5 with Claude-style reasoning in a GGUF format for high-performance local inference.  

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author:* HauhauCS | *Likes:* 2,863 | *Downloads:* 2,190,398  
  An uncensored 35B MoE variant of Qwen-3.6 for unrestricted content generation with enhanced vision support.  

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  *Author:* prism-ml | *Likes:* 727 | *Downloads:* 301,893  
  A 2-bit quantized LLM optimized for edge deployment without significant loss in coherence.  

---

## 3. **Ecosystem Signal**  
Model ecosystems are increasingly prioritizing efficiency and specialization. **GGUF** remains the dominant quantization format, especially among community-driven forks of Qwen and Llama variants. **MoE architectures**, led by GLM-5.2 and unofficial Qwen-based models, reflect a push toward scalable yet resource-efficient inference. Open-weight models continue to outpace proprietary offerings in download volume and community adaptation. Notably, **multimodal integration** is expanding—from OCR to video generation—while **quantized variants** of billion-scale models democratize local experimentation. Fine-tuning and LoRA-based modifications are gaining momentum, particularly in video identity preservation and cross-modal reasoning.  

---

## 4. **Worth Exploring**  
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  With Google’s backing and cross-modal capabilities, this model is essential for understanding next-gen vision-language benchmarks.  

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  Combines strong reasoning with optimized local inference—ideal for studying hybrid model fine-tuning and GGUF optimization.  

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  High real-world applicability in OCR tasks, offering insights into industrial-scale model training and deployment.


---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*