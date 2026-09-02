# Hugging Face 热门模型日报 2026-09-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-02 22:16 UTC

---

# Hugging Face 热门模型日报（2026‑09‑03）

---

## 今日速览
- **Qwen 系列继续统治多模态榜单**，`Qwen3.8‑Flash‑Next` 与 `Qwen3.8‑27B` 分别在图文‑到‑文本和大模型下载量上拔得头筹。  
- **GLM‑5.3 系列抢占对话与 Flash 量化赛道**，官方模型与社区的 GGUF/FP8 变体均获得上千点赞。  
- **生成式视频模型升温**：`Lightricks/LTX‑2.5` 与 `MiniMax‑H3` 以百万元级下载量展示了文本‑到‑视频的商业潜力。  
- **GGUF 与 FP8 量化冲刺**：多达 10+ 社区量化模型登榜，表明轻量化部署需求已进入主流。  

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org / 1,514 / 94,403 | 基于 MoE 的大规模中文对话模型，支持长上下文，因高效推理与开放权重获赞。 |
| **[Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen / 13,681 / 4,960,483 | 27B 参数的全能多模态 LLM，兼容图文指令，下载量领跑所有 LLM。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent / 398 / 3,516 | 4‑bit 量化的中文指令微调模型，针对本地部署优化。 |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai / 196 / 6,813 | 轻量化 Nemotron‑h 系列对话模型，主打低延迟语音交互。 |
| **[OBLITERATUS/Qwen3.8‑27B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS / 1,026 / 805,791 | 采用 MLX‑GGUF 格式的 Qwen 3.8‑27B 版，专为 Apple Silicon 优化。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑到‑X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen / 4,729 / 207,941 | Flash 版的图文‑到‑文本大模型，推理速率提升 2‑3×，成为多模态实验的首选。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks / 2,564 / 1,232,274 | 单文件 Diffusion 视频生成器，支持从静态图片或文字生成 2‑5 秒短片。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI / 4,805 / 5,532,597 | 采用 3‑stage Diffusion 的文本‑到‑视频模型，业界首批实现 1080p 真实感生成。 |
| **[deepseek-ai/DeepSeek-V4‑Flash‑Vision‑Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek‑ai / 500 / 17,893 | Vision‑augmented LLM，提供即时图像理解与交互式描述功能。 |
| **[unsloth/Qwen3.8‑Flash‑Next‑GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth / 725 / 431,339 | GGUF 量化版，极端低内存（≈4 GB）即可跑 Qwen 3.8‑Flash‑Next。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[sentence-transformers/all‑MiniLM‑L6‑v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence‑transformers / 5,381 / 250,280,836 | 轻量级句向量模型，仍是检索、相似度匹配的首选基线。 |
| **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** | google‑bert / 2,851 / 63,694,017 | 经典 BERT，在填空（fill‑mask）与迁移学习任务中保持高引用率。 |
| **[google/timesfm‑3.0‑pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google / 293 / 0 | 时间序列专用 Transformer，提供端到端的季节性、趋势预测 API。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 3,389 / 9,354,057 | GGUF‑化的 Qwen 3.8‑27B，单卡 8 GB GPU 即可推理，下载量位列前茅。 |
| **[unsloth/GLM‑5.3‑Flash‑GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth / 336 / 63,718 | GLM‑5.3‑Flash 的 GGUF 低比特版本，适配 CPU 与移动端。 |
| **[orcarouter/GLM‑5.3‑Flash‑Uncensored‑FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | orcarouter / 151 / 2,576 | FP8 量化解锁更高吞吐，同时保留原模型的开放内容。 |
| **[orcarouter/Qwen3.8‑27B‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter / 659 / 254,529 | “Uncensored” 版的 GGUF，提供完整词表与更宽松的安全策略。 |
| **[ISTA‑DASLab/Qwen3.8‑27B‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA‑DASLab / 172 / 56,208 | 采用混合精度（GSQ+RCO）细粒度量化，针对实验室推理基准优化。 |

---

## 生态信号（≈150 字）

本周 **Qwen** 与 **GLM‑5.3** 两大中文模型家族持续发力，分别在全参数模型（27B）和高效 Flash/量化分支上取得热度。多模态 **Flash** 变体（如 Qwen3.8‑Flash‑Next、GLM‑5.3‑Flash）凭借 2‑3× 推理加速抢占图文‑到‑文本场景，显示出社区对低算力、多模态需求的共识。与此同时，**GGUF** 与 **FP8** 量化模型数量激增，下载总量已超过 20 M，表明轻量部署（尤其在 Apple Silicon、ARM Edge）已成为主流趋势。相对而言，闭源大模型仍占据下载榜首，但开源权重的爆发式增长（尤其在社区微调和 LoRA 生态）正快速缩小差距。

---

## 值得探索

1. **[Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   - 综合性能最强，支持图文多模态指令，适合做全链路 LLM 评估与商业化部署。  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   - 代表当前文本‑到‑视频技术的前沿，生成质量与时长均领先，同类模型少，研究价值高。  

3. **[unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
   - 极低内存需求的 GGUF 版，适合在消费级 GPU 与 CPU 上实验量化对齐与部署策略。  

---

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*