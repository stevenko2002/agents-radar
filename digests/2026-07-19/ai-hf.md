# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 22:16 UTC

---


# Hugging Face 热门模型日报（2026-07-19）

---

### 📌 今日速览

本周 Hugging Face 热门模型榜单显示，基于 Qwen 和 GLM 系列的指令微调与量化模型持续受欢迎，尤其是图像-文本多模态模型。社区活跃于 GGUF 格式量化优化，以适配本地部署与边缘计算需求；与此同时，图像编辑、视频生成及 OCR 模型展示出多模态领域的多样化探索趋势。

---

### 🧠 语言模型（LLM、对话模型、指令微调）

#### 1. **zai-org/GLM-5.2**
- [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)  
- 作者: zai-org | 点赞: 4,125 | 下载: 541,662  
- GLM-MOE-DSA 架构优化指令对话性能，开源高性能语言模型代表，适合企业级应用开发。

#### 2. **bottlecapai/ThinkingCap-Qwen3.6-27B**
- [ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)  
- 作者: bottlecapai | 点赞: 435 | 下载: 10,445  
- Qwen3.6 指令微调版，支持图像-文本交互，强化推理与对话能力。

#### 3. **InternScience/Agents-A1**
- [Agents-A1](https://huggingface.co/InternScience/Agents-A1)  
- 作者: InternScience | 点赞: 578 | 下载: 35,575  
- 基于 Qwen3.5-MOE 架构，融合多模态与代理任务，适用于自动化流程构建。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

#### 1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
- [Qwen3.6-35B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)  
- 作者: HauhauCS | 点赞: 2,863 | 下载: 2,190,398  
- 35B 多模态模型支持图像-文本推理，强化内容生成与对话边界，社区热议“无审查”版本。

#### 2. **Unlimited-OCR (baidu/Unlimited-OCR)**
- [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)  
- 作者: baidu | 点赞: 2,023 | 下载: 2,088,470  
- 高精度 OCR 模型，支持多场景文字识别，下载量爆增，工业级应用落地利器。

#### 3. **Wan-AI/Wan-Dancer-14B**
- [Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)  
- 作者: Wan-AI | 点赞: 113 | 下载: 2,328  
- 图像转视频生成模型，主打人物动作生成，多模态视频内容创新方向之一。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

#### 1. **Cactus-Compute/needle**
- [needle](https://huggingface.co/Cactus-Compute/needle)  
- 作者: Cactus-Compute | 点赞: 266 | 下载: 935  
- 函数调用与工具使用优化模型，支持结构化输出，适用于智能体（Agent）场景开发。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

#### 1. **prism-ml/Ternary-Bonsai-27B-gguf**
- [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)  
- 作者: prism-ml | 点赞: 727 | 下载: 301,893  
- Qwen3.5 2-bit 三值量化模型，高效推理支持 Llama.cpp，开源社区模型压缩标杆。

#### 2. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
- [Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)  
- 作者: empero-ai | 点赞: 2,313 | 下载: 2,112,869  
- Claude 风格推理能力微调的 GGUF 模型，支持图像-文本输入，社区热爱“类 Claude”的创意模型。

#### 3. **unsloth/inkling-GGUF**
- [inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)  
- 作者: unsloth | 点赞: 96 | 下载: 6,461  
- Inkling 模型的 GGUF 版本，轻量化部署支持音频-文本多模态输入，效率与性能并重。

---

### 🌱 生态信号

Qwen 和 GLM 系列继续占据开源语言模型舞台，以多模态与知识问答为核心竞赛方向；社区对量化模型（GGUF、MLX）需求旺盛，尤其是 1-bit/2-bit 压缩版本，适配低资源设备；图像编辑、视频生成及 OCR 模型展示多模态应用多样化；闭源模型影响力依然强大（如 Google Gemma-4），但开源生态在创新速度上处于主导地位。

---

### 🔍 值得探索

1. **[HauhauCS/Qwen3.6-35B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   35B 多模态模型支持图像-文本推理，社区推出“攻击性”版本，适合多模态 Agent 和内容生成实验。

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   工业级 OCR 模型下载量超 200w，支持多语言与复杂场景，推荐用于文档解析、自动化数据录入场景。

3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   2-bit 量化压缩实现高效率推理，兼顾性能与部署成本，适合边缘设备与研究者快速实验。


---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*