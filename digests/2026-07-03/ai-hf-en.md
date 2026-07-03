# Hugging Face Trending Models Digest 2026-07-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-03 08:05 UTC

---

### 1. Today's Highlights
The Hugging Face ecosystem this week is dominated by the release of foundational heavyweights like zai-org's GLM-5.2 and the rapid proliferation of Qwen 3.5/3.6 architectures. Multimodal and vision-centric models are seeing explosive adoption, highlighted by NVIDIA's LocateAnything-3B and Baidu's Unlimited-OCR. Meanwhile, the local deployment community is thriving with a massive surge in GGUF quantizations, uncensored fine-tunes, and specialized agentic variants designed for edge devices.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,282 | Downloads: 176,154
    A highly anticipated foundational MoE model utilizing a novel DSA architecture, setting a new benchmark for open-weight conversational AI.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 310 | Downloads: 8,184
    The latest premium iteration in the DeepSeek V4 family, optimized for complex reasoning and advanced text generation tasks.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 517 | Downloads: 39,448
    A highly efficient 35B MoE model with only 3B active parameters, specifically architected for advanced agentic workflows and tool use.
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | Author: LiquidAI | Likes: 193 | Downloads: 26,357
    A remarkably compact 230M parameter language model from LiquidAI, pushing the boundaries of high-performance inference on ultra-low-resource hardware.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,582 | Downloads: 1,006,831
    A highly efficient 3B vision model excelling at precise spatial reasoning and object localization, driving massive community adoption.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,663 | Downloads: 758,489
    Baidu's state-of-the-art optical character recognition model capable of extracting text from complex, unstructured, and multilingual documents.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 466 | Downloads: 69,788
    A heavily optimized, fast-execution text-to-image model designed for real-time creative generation and rapid prototyping.
*   **[fal/LTX-2.3-3DREAL-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | Author: fal | Likes: 148 | Downloads: 0
    A specialized LoRA for the LTX video model that injects high-fidelity 3D realism and physical accuracy into generated video clips.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 130 | Downloads: 89
    Google's foundational model for tabular data, enabling zero-shot classification and regression without extensive feature engineering.
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** | Author: BugTraceAI | Likes: 121 | Downloads: 8,037
    A specialized 27B model fine-tuned specifically for offensive security, vulnerability hunting, and cybersecurity analysis.
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | Author: nationaldesignstudio | Likes: 108 | Downloads: 790
    A lightweight ONNX-based token classification model optimized for highly accurate Personally Identifiable Information (PII) detection and redaction.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,408 | Downloads: 3,078,904
    An aggressively uncensored GGUF quantization of the Qwen 3.6 MoE model, dominating downloads for local, unrestricted agentic use.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai | Likes: 663 | Downloads: 284,585
    The flagship GGUF quantization of the Ornith 1.0 35B model, bringing high-capacity Qwen3.5-based reasoning to consumer GPUs via llama.cpp.
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | Author: nvidia | Likes: 215 | Downloads: 27,249
    NVIDIA's official 4-bit floating point (NVFP4) optimization of the Qwen 3.6 model, maximizing throughput on enterprise TensorRT-LLM deployments.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,573 | Downloads: 614,069
    A highly popular GGUF merge combining Gemma 4 with specialized coding and reasoning adapters, optimized for local terminal and agentic workflows.

---

### 3. Ecosystem Signal
The Qwen (3.5/3.6) and GLM (5.2) families are clearly the foundational pillars of the current open-weight ecosystem, serving as the base for a vast majority of community derivatives. We are seeing a strong shift toward highly efficient Mixture-of-Experts (MoE) architectures—like the 35B-A3B variants—that balance massive parameter counts with consumer hardware constraints. Open-weight models continue to outpace proprietary ones in community engagement, driven by aggressive quantization efforts. NVIDIA’s introduction of NVFP4 formats alongside the community's massive adoption of GGUF highlights a dual-track approach to optimization: enterprise-grade tensor compression and accessible local

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*