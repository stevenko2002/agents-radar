# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 22:15 UTC

---


# Hugging Face 热门模型日报（2026-07-18）

---

## 🌟 今日速览

Hugging Face 近期热门模型聚焦于多模态理解与高效部署，尤其以 Qwen3.5 与 GLM-5.2 为代表的模型架构持续登顶。社区活跃推出大量 GGUF 量化版本，以支持本地推理与低资源设备的使用。图像识别、视频生成与 OCR 模型下载量迅猛，反映出对垂直领域模型的强烈需求。值得注意的是，部分模型结合 LoRA 或 MoE 架构进行性能与效率优化。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

### 🔹 [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
- **作者**: zai-org  
- **点赞**: 4,070 | **下载**: 534,698  
- **说明**: 作为 GLM-MoE-DSA 架构的最新版本，GLM-5.2 在多语言与多领域任务中表现出色，支持对话与文本生成，开源版本流行度极高。

### 🔹 [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)
- **作者**: prism-ml  
- **点赞**: 386 | **下载**: 1,045,182  
- **说明**: 27B 参数的高效 1-bit 量化模型，专为 llama.cpp 推理优化，下载量破百万，显示出对压缩模型的巨大兴趣。

### 🔹 [HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
- **作者**: HauhauCS  
- **点赞**: 2,824 | **下载**: 2,295,313  
- **说明**: Qwen3.6 模型的非审查版本，融合 MoE 和 Vision 模块，支持图像-文本交互，下载量居榜首。

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

### 🔹 [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)
- **作者**: thinkingmachines  
- **点赞**: 945 | **下载**: 7,870  
- **说明**: 图像-文本到文本模型，支持图像内容理解与对话，适合多模态场景下的信息提取。

### 🔹 [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
- **作者**: empero-ai  
- **点赞**: 2,269 | **下载**: 2,096,147  
- **说明**: 融合 Qwen3.5 与 Claude 特性的多模态模型，支持推理任务，GGUF 格式适配 llama.cpp。

### 🔹 [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)
- **作者**: bottlecapai  
- **点赞**: 412 | **下载**: 9,383  
- **说明**: Qwen3.6 架构的多模理解模型，结合图像-文本输入，聚焦于结构化推理能力。

### 🔹 [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)
- **作者**: Wan-AI  
- **点赞**: 106 | **下载**: 2,185  
- **说明**: 图像到视频生成模型，基于 LTX 架构，专注于动态视频合成。

---

## 🔧 专用模型（代码、数学、医疗、嵌入）

### 🔹 [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)
- **作者**: OpenMOSS-Team  
- **点赞**: 248 | **下载**: 83,160  
- **说明**: 专用于音频转文字与说话人分离的模型，支持语音内容分析。

### 🔹 [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)
- **作者**: ATH-MaaS  
- **点赞**: 152 | **下载**: 10,795  
- **说明**: 基于 Qwen3.5 的 OCR 模型，支持图像文本识别，适用于多场景 OCR 应用。

### 🔹 [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)
- **作者**: baidu  
- **点赞**: 2,018 | **下载**: 1,992,355  
- **说明**: 百度开源的高性能 OCR 模型，支持文本检测与识别，下载量惊人。

### 🔹 [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)
- **作者**: Cactus-Compute  
- **点赞**: 256 | **下载**: 874  
- **说明**: 基于 JAX 实现的函数调用与工具使用的模型，适用于 Agent 场景。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

### 🔹 [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
- **作者**: prism-ml  
- **点赞**: 672 | **下载**: 200,774  
- **说明**: 2-bit 量化的 Bonsai 模型，专为资源受限设备设计。

### 🔹 [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)
- **作者**: jlnsrk  
- **点赞**: 127 | **下载**: 3,447  
- **说明**: GLM-5.2 的 Int4 量化版本，支持 CPU 推理，适用于边缘部署。

### 🔹 [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)
- **作者**: prism-ml  
- **点赞**: 116 | **下载**: 17,127  
- **说明**: 基于 MLX 框架的 Bonsai 模型，1-bit 压缩，便于苹果设备运行。

### 🔹 [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)
- **作者**: unsloth  
- **点赞**: 224 | **下载**: 1,924,495  
- **说明**: NVFP4 格式的 Qwen3.6 模型，支持高效推理，下载量极高。

---

## 📊 生态信号（100~200 字）

Qwen3.5 和 GLM-5.2 模型家族持续占据榜单前列，其架构设计与多模态能力成为开发者关注焦点。开源模型仍占主导地位，尤其是在 GGUF 和 MLX 量化格式方面，社区活跃度高，多数模型支持本地部署。值得关注的是，部分模型结合 LoRA 或 MoE 架构进行性能优化，如 Agents-A1 和 LTX2.3 IC-LoRA，显示出对高效微调与多视图合成的兴趣。图像识别与 OCR 模型（如 Unlimited-OCR）下载量暴增，反映出对实际应用场景的强烈需求。

---

## 🔍 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   - 下载量近 200 万，百度开源高性能 OCR 模型，适用于企业级文档识别与处理场景。

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   - GLM-MoE-DSA 架构最新版本，支持多语言与多领域任务，值得研究其 MoE 实现与效率优化。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   - 高参数量与非审查特性结合，支持图像-文本交互，可能适用于内容创作与开放对话场景。

--- 

*报告由 AI 模型生态分析师生成，聚焦 Hugging Face 模型趋势与实用价值。*


---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*