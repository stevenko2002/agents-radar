# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 22:15 UTC

---

# Hugging Face 热门模型日报 — 2026-08-25

---

## 今日速览

今日 Hugging Face 热榜以 Qwen 系列模型为中心，多款社区微调与量化版本登上榜单；DeepSeek V4 Flash 凭借高效推理能力持续受关注；同时，MiniMax H3 在图像视频生成领域展现强劲实力。多模态生成模型（如图像到视频）和低成本部署格式（GGUF、FP8）成为开发者关注焦点。

---

## 热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
  作者: Qwen | 点赞: 12,505 | 下载: 2,645,226  
  阿里最新多模态对话基座模型，性能强劲，社区微调基础通用。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**  
  作者: deepseek-ai | 点赞: 3,681 | 下载: 3,274,129  
  DeepSeek 发布的文本生成闪速版模型，推理效率高，闭源竞品不可忽视。

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**  
  作者: ornith-ai | 点赞: 392 | 下载: 60,294  
  面向通用文本生成的 MoE 模型，参数量大但推理成本可控。

---

### 🎨 多模态与生成

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
  作者: MiniMaxAI | 点赞: 4,416 | 下载: 4,465,161  
  强大的图文到视频生成模型，支持多种视觉任务，广受开发者欢迎。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
  作者: Lightricks | 点赞: 1,720 | 下载: 790,378  
  图像到视频生成模型，适用于内容创作与快速视频制作。

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**  
  作者: MiniMaxAI | 点赞: 1,227 | 下载: 18,065  
  文本到音乐生成模型，是音频创作领域的新选择。

---

### 🔧 专用模型

- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)**  
  作者: Audio8 | 点赞: 145 | 下载: 2,775  
  基于 Ark TTS 的轻量级语音合成模型，适用于嵌入式场景。

---

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
  作者: unsloth | 点赞: 2,829 | 下载: 7,009,063  
  Qwen3.8 的 GGUF 量化版本，便于本地部署与边缘推理。

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**  
  作者: JonathanColetti | 点赞: 686 | 下载: 1,456,700  
  去审查版 Qwen，面向自由表达需求，广受极客开发者欢迎。

- **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1...](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)**  
  作者: DavidAU | 点赞: 225 | 下载: 209,017  
  经过冷融合训练优化的 GGUF 格式模型，提升性能的小型微调项目。

---

## 生态信号

**Qwen 系列正势头正猛**：以 Qwen 官方发布为主，伴随大量社区微调（Uncensored、Abliterated 等），显示出强大的生态活力与开发者参与度。

**量化格式普及**：GGUF、FP8 等部署优化格式成为热门标签，开发者更倾向于使用低资源消耗格式进行实验与应用落地。

**开源仍占主导，但闭源影响增大**：尽管开源模型占据榜单多数，但像 DeepSeek Flash 这样的闭源接口类模型也获得了强劲下载量，说明其在商业落场中的吸引力。

**多模态生成成长明显**：MiniMax H3 和 LTX-2.5 等图文视频生成模型进入热榜，一季度内多次更新迭代，是当前开发者最感兴趣的方向。

---

## 值得探索

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   表现优异的图文到视频生成模型，适合用于多媒体内容生成工具开发或影视前期制作等创意应用。

2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
   高性能低门槛的 GGUF 量化模型，适用于本地部署或边缘设备上的大语言模型推理任务。

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**  
   结合高效推理设计的文本生成模型，适合构建低延迟 AI 助手或生产级 NLP 应用。

---

📌 *数据更新时间：2026-08-25*  
📌 *来源：[Hugging Face Hub](https://huggingface.co)*

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*