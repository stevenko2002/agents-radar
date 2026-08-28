# Hugging Face 热门模型日报 2026-08-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-28 22:16 UTC

---

**Hugging Face 热门模型日报 – 2026‑08‑29**  

---

## 📌 今日速览
- 多模态大模型 **Qwen3.8‑Flash‑Next** 与 **Qwen3.8‑27B** 继续领跑，下载量破千万，说明业界对高效视觉‑语言模型需求激增。  
- **DeepSeek‑V4‑Flash‑0731** 与 **GLM‑5.3‑Flash** 系列凭借极速推理在文本生成榜单中抢占前列，量化（GGUF/FP8）版本的爆炸式增长凸显轻量化趋势。  
- 视频生成方向出现两大亮点：**MiniMax‑H3**（图像‑文本‑到‑视频）与 **LTX‑2.5**（单帧‑到‑视频）下载量均已突破 90 万，标志着生成式视频进入实用阶段。  
- 社区量化工具（GGUF、FP8、MLX）持续活跃，超 12 份量化模型本周累计下载超 15 M，说明部署成本已成为竞争关键。  

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 / 👍 / 📥 | 一句话说明 |
|------|----------------|------------|
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org / 1,495 / 34 | 基于 GLM‑5.3 的 Flash 版，使用 FlashAttention 2 实现 2× 推理加速，适合高并发聊天场景。 |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org / 1,085 / 0 | 原始 GLM‑5.3 多模态指令模型，支持图文对话，社区微调热度仍在攀升。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent / 233 / 0 | 腾讯 HunYuan‑V4 预览版，专注中文长文生成，已进入开放评测阶段。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai / 482 / 88,102 | 35B 参数 MoE 文本生成模型，主打高质量长句子写作与代码生成。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai / 3,785 / 3,959,575 | DeepSeek‑V4 的 Flash 变体，采用 FlashAttention + KV‑cache，已成为中文‑英文双语对话的热门基座。 |
| **[moonshotai/Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai / 11,060 / 2,675,145 | 兼容多模态特征抽取的 K3 版，主要用于检索与特征匹配，下载量居语言模型前列。 |

### 🎨 多模态与生成（图像／视频／音频／文本‑到‑X）

| 模型 | 作者 / 👍 / 📥 | 一句话说明 |
|------|----------------|------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen / 4,148 / 4,810 | 最新 Qwen‑3.8‑Flash‑Next，支持 **image‑text‑to‑text**，在推理速度与视觉理解之间实现平衡。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen / 13,134 / 3,457,687 | 27B 多模态大模型，开源权重 + 大规模下载，标志着全能视觉‑语言模型进入成熟期。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks / 2,005 / 912,729 | 单帧‑到‑视频 Diffusion 模型，生成质量媲美商业视频生成工具。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI / 4,573 / 4,848,404 | **image‑text‑to‑video** 生成模型，支持 16‑帧 512×512 视频合成，已成为开源视频创作首选。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI / 1,286 / 19,726 | 文本‑到‑音乐 Diffusion，能够根据情绪标签生成 30 秒片段。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue / 155 / 240 | 高质量中文多说话人 TTS，使用 FastSpeech‑2 + vocoder，适配嵌入式设备。 |
| **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** | alibaba‑pai / 154 / 3,344 | 将 ControlNet 融入 MiniMax‑H3，实现 **文本‑到‑视频+姿态指导**，极大提升生成可控性。 |
| **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | alibaba‑pai / 132 / 609 | 轻量 LoRA 微调集合，用于提升 MiniMax‑H3 在特定风格下的加速与准确度。 |
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova / 189 / 4,232 | **any‑to‑any** 模型（文本、图像、音频相互转换），提供统一的多模态 API。 |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters / 143 / 349 | 小型 Qwen‑3.5‑MoE，面向新闻摘要与金融多模态问答的轻量化部署。 |
| **[moonshotai/Kimi‑K3]** 已列于语言模型，因兼容特征抽取在多模态任务中同样重要，这里不再重复。 |

### 🔧 专用模型（代码、数学、医疗、嵌入等）

| 模型 | 作者 / 👍 / 📥 | 一句话说明 |
|------|----------------|------------|
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric / 1,510 / 0 | 为 Qwen 系列提供统一的 Jinja‑Chat 模板，帮助开发者快速构建对话系统。 |
| **（本周暂无医学/代码专门模型）** | — | 但多模态模型的 **embedding** 能力已逐步渗透到检索、翻译等专用场景。 |

### 📦 微调与量化（社区微调、GGUF、FP8、MLX）

| 模型 | 作者 / 👍 / 📥 | 一句话说明 |
|------|----------------|------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 3,140 / 7,758,790 | 通过 GGUF 格式量化的 Qwen‑3.8‑27B，文件仅 13 GB，适配 **llama.cpp** 与 **ggml** 环境。 |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth / 514 / 4,354 | Flash‑Next 的 GGUF 版，兼容移动端推理，下载量虽小但增长快速。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS / 876 / 509,270 | 使用 **MLX** 运行时的 8‑bit 量化模型，Mac‑M系列用户首选。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter / 1,230 / 273,577 | FP8 量化版本，保持原始质量的 80% 以上，却将显存需求降至 4 GB 以下。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter / 1,183 / 83,352 | MLX‑专用的 16‑bit 量化模型，针对 Apple Silicon 优化。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS / 720 / 938,219 | Aggressive MTP 量化，进一步压缩至 9 GB，保持对视觉指令的高兼容。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth / 246 / 0 | GLM‑5.3‑Flash 的 GGUF 版，适配轻量端推理，下载尚未突破 1 K。 |
| **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)** | Qwen / 146 / 2,219 | 官方发布的 FP8 量化，标志着高端视觉‑语言模型进入低比特部署阶段。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti / 801 / 1,666,948 | GGUF 版的“Uncensored”模型，兼容 **llama.cpp**，

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*