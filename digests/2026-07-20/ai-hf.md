# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 22:15 UTC

---


---

# 📰 Hugging Face 热门模型日报（2026-07-20）

## 🚀 今日速览  
Hugging Face 本周热门模型再次呈现多模态与量化模型的双雄争霸，GLM-5.2 和 Gemma-4-31B-it 等大模型在点赞与下载中占据主导。图像识别与 OCR 模型（如 Unlimited-OCR）持续走热，而社区量化版本（GGUF、Ternary）版本下载量暴增，显示出用户对高效部署的强烈需求。同时，多模态视频生成（Wan-Dancer）和函数调用（Needle）等场景模型开始崭露头角。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

### 1. **zai-org/GLM-5.2**  
🔗 [https://huggingface.co/zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)  
作者：zai-org | 点赞：4,165 | 下载：536,177  
说明：GLM-MoE 架构的大模型，结合 DSA 优化，在对话与生成任务上表现突出，成为本周热门语言模型之一。

### 2. **google/gemma-4-31B-it**  
🔗 [https://huggingface.co/google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)  
作者：google | 点赞：3,273 | 下载：12,337,374  
说明：Google 最新发布的多模态指令微调模型，31B 规模与图像-文本支持吸引了大量下载。

### 3. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
🔗 [https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)  
作者：empero-ai | 点赞：2,339 | 下载：2,118,995  
说明：基于 Qwen3.5 的量化模型，支持深度推理与图像-文本理解，下载量极高。

### 4. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
🔗 [https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)  
作者：HauhauCS | 点赞：2,895 | 下载：2,084,530  
说明：Uncensored 版本的 Qwen3.6，参数丰富、无过滤器提示其热门原因。

---

## 🎨 多模态与生成（图像、视频、音频、文本到 X）

### 1. **thinkingmachines/Inkling**  
🔗 [https://huggingface.co/thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)  
作者：thinkingmachines | 点赞：1,143 | 下载：13,462  
说明：支持图像-文本交互的多模态模型，专注于对话生成场景。

### 2. **baidu/Unlimited-OCR**  
🔗 [https://huggingface.co/baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)  
作者：baidu | 点赞：2,156 | 下载：2,122,848  
说明：OCR 模型，支持多场景文字识别，下载量极高反映其实用价值。

### 3. **Wan-AI/Wan-Dancer-14B**  
🔗 [https://huggingface.co/Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)  
作者：Wan-AI | 点赞：126 | 下载：2,408  
说明：图像到视频生成模型，聚焦动态视频合成，属于后起之秀。

---

## 🔧 专用模型（代码、数学、医疗、嵌入）

### 1. **Cactus-Compute/needle**  
🔗 [https://huggingface.co/Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)  
作者：Cactus-Compute | 点赞：279 | 下载：955  
说明：专注函数调用与工具使用，适用于 AI Agent 场景，展示 JAX 生态的应用。

### 2. **OpenMOSS-Team/MOSS-Transcribe-Diarize**  
🔗 [https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)  
作者：OpenMOSS-Team | 点赞：277 | 下载：87,533  
说明：语音转文本 + 说话人分离，多模态处理能力突出。

### 3. **ATH-MaaS/OvisOCR2**  
🔗 [https://huggingface.co/ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)  
作者：ATH-MaaS | 点赞：191 | 下载：14,587  
说明：基于 Qwen3.5 的 OCR 模型，结合视觉-文本理解能力。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

### 1. **prism-ml/Ternary-Bonsai-27B-gguf**  
🔗 [https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)  
作者：prism-ml | 点赞：789 | 下载：338,945  
说明：2-bit 量化 Bonsai 模型，兼顾效率与效果，下载量领先。

### 2. **prism-ml/Bonsai-27B-gguf**  
🔗 [https://huggingface.co/prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)  
作者：prism-ml | 点赞：486 | 下载：1,262,894  
说明：1-bit 量化版本，下载量屡居榜首，展示社区对轻量化的热情。

### 3. **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**  
🔗 [https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)  
作者：GnLOLot | 点赞：120 | 下载：28,012  
说明：MiniCPM 系列的 Quantized 版本，适合边缘部署，注重推理效率。

---

## 🌱 生态信号  

本周 GLM、Qwen、Gemma 等模型系表现强劲，尤其 GLM-5.2 和 Gemma-4-31B-it 在多模态与对话任务中占据主导地位。开源模型热度持续上升，尤其是可商用或高效量化版本（GGUF、Ternary）备受开发者青睐。同时，社区对于“Uncensored”或“Heretic”模型表现出浓厚兴趣，显示出对无限制输出能力的迫切需求。多模态视频生成和 OCR 模型增长迅速，表明 AI 应用正逐步延伸至更专业场景。

---

## 🔍 值得探索

1. **Qwythos-9B-Claude-Mythos-5-1M-GGUF**：下载量极高，其图像-文本推理能力结合量化优势，适合研究与落地场景结合。

2. **Wan-Dancer-14B**：轻量视频生成模型，可能成为图像动态展示的新选择，值得探索其生成质量与效率。

3. **Cactus-Compute/needle**：专注函数调用，是 Agent 类应用开发的潜在利器，技术实现值得深入研究。

--- 

*本日报由 Hugging Face 模型生态分析系统自动生成，持续追踪模型动态。*


---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*