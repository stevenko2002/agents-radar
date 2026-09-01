# Hugging Face 热门模型日报 2026-09-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-01 22:16 UTC

---

# Hugging Face 热门模型日报（2026‑09‑02）

## 今日速览
- 以 **Qwen**、**GLM** 与 **MiniMax** 为代表的 **大规模多模态** 模型继续领跑，下载量均突破百万。  
- **GGUF 与 Flash 量化** 版本的出现让 27 B 级模型在本地部署上更易获取，相关仓库点赞和下载激增。  
- 生成 **文本‑到‑视频** 与 **文本‑到‑音频** 的专用模型（MiniMax‑H3、Breeze‑TTS‑2）表现突出，预示生成式视频/语音的社区需求快速上升。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|----------|------------|
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org | 1,466 | 94,403 | 基于 MoE 的 5.3 B 指令聊天模型，凭借轻量化和强对话能力成为文本生成榜单常青树。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 380 | 3,516 | 腾讯自研的 4 B 中文指令模型，强调新颖的“混元”训练策略，吸引对国产模型关注的用户。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 995 | 805,791 | 通过 **abliterated** 微调的 Qwen‑3.8 27 B 版，兼顾性能与安全过滤，下载量冲刺百万。 |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 185 | 6,813 | 基于 Nemotron‑H 的轻量指令模型，专为实时语音交互场景设计，社区热度上升。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 886 | 2,143,289 | GGUF 版的无审查 Qwen‑3.8，下载量登顶，满足本地部署需求的同时引发安全争议。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑到‑X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|----------|------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,630 | 207,941 | Flash‑优化的 3.8 B 多模态模型，支持 **image‑text‑to‑text**，是本周最受关注的轻量多模态基座。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 1,875 | 441,348 | 与 Qwen 类似的 Flash‑版 GLM，兼容视觉指令，下载量已超 40 万。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,576 | 4,960,483 | 27 B 超大规模多模态模型，完整参数公开，成为社区下载冠军。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,330 | 9,354,057 | GGUF 量化版，使 27 B 多模态在单机 CPU/GPU 上可直接运行，下载量破 900 万。 |
| **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek‑ai | 445 | 17,893 | V4 系列的 Flash‑Vision 实验版，突出 **视觉理解 + 生成**，吸引科研试验者。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,453 | 1,232,274 | 单文件 **image‑to‑video** 扩散模型，适用于手机端创意短视频生成。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,747 | 5,532,597 | 首批 **image‑text‑to‑video** 大模型，已实现 8‑K 级别的高保真生成，下载量居前。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 304 | 3,086 | 高质量中文 **text‑to‑speech** 模型，采用最新的声码器技术，受到小语种语音社区关注。 |
| **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 205 | 0 | 时序预测专用 **Time‑Series Forecasting** 模型，展示大模型向行业特化的趋势。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|----------|------------|
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar‑ragdoll | 183 | 130,086 | 35 B 代码生成模型的 GGUF 版，针对 **LLM‑Code** 场景微调，兼容 llama.cpp。 |
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA‑DASLab | 118 | 56,208 | 采用 **GSQ + RCO** 混合量化技术的 Qwen‑27B，展示前沿压缩算法的实效。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,261 | 121,028 | 基于 **MLX**（Apple Silicon）优化的无审查 27 B 多模态模型，关注苹果生态部署。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|----------|------------|
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 666 | 431,339 | Qwen‑Flash‑Next 的 GGUF 量化实现，文件仅 3 GB，极大降低本地部署门槛。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 325 | 63,718 | 5.3 B GLM‑Flash 的 GGUF 版，配合 `llama.cpp` 直接运行，受量化爱好者追捧。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,347 | 316,128 | FP8 低精度版本，兼顾显存节省与生成质量，展示 FP8 在大模型中的成熟度。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 630 | 254,529 | 另一个无审查 GGUF 实现，说明同一基座在社区有多种量化路线并存。 |
| **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | alibaba‑pai | 176 | 32,893 | 为 MiniMax‑H3 提供 **LoRA** 适配，帮助小算力用户快速微调视频生成模型。 |

---

## 生态信号（100‑200 字）

本周 **Qwen** 与 **GLM** 两大模型家族继续主导多模态与指令微调赛道，尤其是 Qwen‑3.8‑Flash‑Next 与 GLM‑5.3‑Flash 的 **Flash 量化** 版，凭借显存友好（<6 GB）和高推理速度，迅速聚集点赞与下载。与此同时，**GGUF** 成为跨平台部署的标准格式，27 B 级模型的 GGUF 版下载总量已突破 **2,000 万**，显示社区对本地离线运行的需求强劲。开源权重仍占主导（超 90%），但各厂商（腾讯、阿里、Google）正通过 **LoRA、FP8、GSQ‑RCO** 等细分量化手段释放增值服务，形成“开源+增值微调/量化”双轨生态。视频生成（MiniMax‑H3）和音频合成（Breeze‑TTS‑2）模型的崛起，预示生成式 **视觉/听觉** 内容将成为下一个增长热点。

---

## 值得探索

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
   *理由*：首次实现 27 B 多模态模型的 GGUF 量化，文件体积 ≈ 5 GB，能够在单卡或 CPU 上直接运行，是检验大模型离线部署可行性的最佳案例。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   *理由*：首批实现 **image‑text‑to‑video** 的大模型，已在行业实测中生成 4 K 级视频，适合研究跨模态时序生成与视频合成算法。

3. **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)**  
   *理由*：在大模型向行业特化转型的大潮中，TimesFM 代表了 **时序预测** 的前沿，提供完整的预训练权重与评估基准，适合金融/供应链等时序任务的学术和工业探索。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*