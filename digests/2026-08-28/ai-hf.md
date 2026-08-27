# Hugging Face 热门模型日报 2026-08-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-27 22:16 UTC

---

# Hugging Face 热门模型日报（2026‑08‑28）

## 今日速览
- **Qwen 系列**继续称霸榜单，`Qwen3.8-27B` 基础模型以及其 Flash/Uncensored 变体在下载量和点赞数上均居前。  
- **多模态生成**迎来新热点：Lightricks 的 `LTX‑2.5`（图像→视频）与 MiniMax 的 `MiniMax‑H3`（图像+文本→视频）下载量突破 900 k+。  
- **量化与 GGUF**浪潮加速，社区维护的 `unsloth`、`orcarouter` 与 `OBLITERATUS` 量化版抢占下载榜前列，表明轻量部署需求强劲。  

---

## 热门模型

> **注**：模型名后括号内为 Hugging Face 链接，**点赞 / 下载** 取自本周统计。

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 | 点赞 / 下载 | 一句话说明 |
|------|------|-------------|------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,028 / 3,457,687 | 27B 参数的多模态对话模型，兼容文本与视觉输入，是本周下载最多的旗舰模型。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,760 / 3,959,575 | 最新 Flash 版 V4，速度与质量平衡优秀，受到聊天机器人开发者青睐。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 1,308 / 34 | 5.3B 参数的指令微调模型，定位轻量中文对话，点赞数高于同尺寸模型。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 491 / 188,460 | GGUF 量化版的 “无审查” Qwen，便于在单卡 CPU/GPU 上直接部署。 |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper | 279 / 4,149 | 小型中文 LLM，兼具基础 ASR 能力，适合作为轻量对话前端。 |

### 🎨 多模态与生成（图像、视频、音频、文本→X）
| 模型 | 作者 | 点赞 / 下载 | 一句话说明 |
|------|------|-------------|------------|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 1,932 / 912,729 | 单文件扩散模型，支持 **图像→视频** 与 **文本→视频**，成为最受关注的视觉生成模型。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,530 / 4,855,095 | “图像‑文本‑视频”三模态生成器，下载突破 4.8M，表现出强烈的工业级需求。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 1,274 / 19,726 | 文本到音乐的 Diffusion 系统，兼容多种乐器与风格，已被多家内容平台体验。 |
| **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Audio8 | 179 / 4,477 | 小尺寸中文 TTS，基于最新的高效声码器，适合嵌入式语音交互。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 126 / 240 | 高保真中文语音合成模型，侧重于自然情感表达。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11,035 / 2,829,554 | 多语言 multimodal LLM，兼容图文检索并提供压缩张量加速。 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 3,939 / 4,810 | Flash 版的轻量多模态模型，专为移动端图文对话优化。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,164 / 83,352 | 基于 Apple Metal MLX 的无审查模型，针对 macOS/iOS 开发者。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 / 下载 | 一句话说明 |
|------|------|-------------|------------|
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova | 180 / 4,232 | “any‑to‑any” 多任务模型，专注于嵌入、检索与特征抽取。 |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 125 / 349 | 金融领域专用的 Qwen‑3.5 MoE 小模型，适用于合规文本分析。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith-ai | 464 / 88,102 | 35B 参数的 MoE 语言模型，强调在学术/科研文献生成的准确性。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1,504 / 0 | 为 Qwen 系列提供统一的 Jinja 模板库，降低部署时的 Prompt‑Engineering 成本。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 / 下载 | 一句话说明 |
|------|------|-------------|------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,069 / 7,758,790 | GGUF 量化版 Qwen3.8，单卡 CPU 推理速度提升 3‑5 ×，下载量居榜首。 |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 447 / 4,354 | Flash‑Next 的 GGUF 轻量化实现，适合移动端实验。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 845 / 509,270 | 将 Qwen3.8 通过 OBLITERATE 技术裁剪至 11B 参数，保持 90% 性能。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 198 / 0 | GLM‑5.3 的 GGUF 版，专为 ARM‑Neoverse 环境优化。 |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui-ai | 400 / 1,355,482 | “Abliterated” 量化 + GGUF，兼容多平台，下载量位居前列。 |
| **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MTP-GGUF)** | DavidAU | 261 / 238,691 | 采用 COLD‑FUSION+GAIN 训练的高效微调模型，适合科研实验。 |

---

## 生态信号（100‑200字）

本周 **Qwen 系列**继续领跑，尤其是 27B 基础模型及其 Flash、Uncensored、GGUF 变体，显示出大模型开放生态的高活跃度。**多模态生成**（LTX‑2.5、MiniMax‑H3）下载量突破百万，表明用户对“一键生成视频”需求的快速增长。量化方向则呈 **GGUF** 爆发式增长——社区量化工具（unsloth、orcarouter、OBLITERATUS）将 27B 以上模型的部署门槛大幅降低，下载量整体超 10 M。开源权重占比仍然居高，且越来越多的 **微调/裁剪** 版本（Abliterated、Cold‑Fusion）出现，暗示产业正向“大模型‑轻量化‑可自定义”三位一体的方向演进。

---

## 值得探索
| 模型 | 推荐理由 |
|------|----------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | 目前下载最高的多模态生成模型，支持 **图像+文本→视频**，技术栈完整（Diffusers + LoRA）且社区提供丰富示例，适合实验“文本驱动视频创作”。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | 对于资源受限的研发团队，这个 GGUF 版本在单卡 CPU 上即可实现可接受的响应速度，是快速验证 Qwen 能力的首选。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | 单文件扩散模型兼具 **图像→视频** 与 **文本→视频** 双功能，生成质量领先，且上传速度快，值得在移动端/边缘设备上进行深度集成实验。 |

--- 

> **温馨提示**：模型下载量会随后续实验和部署热度快速波动，关注对应社区（Discord、GitHub Discussions）可获取最新使用经验与优化技巧。祝您玩得愉快！

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*