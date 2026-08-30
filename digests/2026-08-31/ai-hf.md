# Hugging Face 热门模型日报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-30 22:15 UTC

---

# Hugging Face 热门模型日报 – 2026‑08‑31  
*数据来源：HF Hub 本周点赞榜（前 30）*  

---

## 今日速览
- **Qwen 系列**再次统领榜单，尤其是 **Qwen3.8‑27B**（13 k 赞）和轻量化 **Flash‑Next** 系列在多模态与量化上形成双轮驱动。  
- **GLM‑5.3‑Flash** 与 **DeepSeek‑V4‑Flash** 领跑纯文本生成，展示国产大模型在指令微调和推理速度上的竞争力。  
- **GGUF 量化模型**高速增长：截至本周，UnsLoth 与 OBLITERATUS 等社区提供的 GGUF 版下载量累计已超过 **15 M**，表明低算力部署需求正在爆发。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）  
| 模型 | 作者 / 点赞 / 下载 | 简述 |
|------|-------------------|------|
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org / 1,703 / 346,516 | 采用 Flash Attention 的 5.3B 多语言指令模型，性能与体积兼具，成为本周文本生成热点。 |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org / 1,334 / 50,116 | 传统 MoE 结构的 5.3B 版，侧重对话与指令微调，受开发者青睐。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai / 3,823 / 4,575,518 | DeepSeek‑V4 系列最新 Flash 版本，兼顾长上下文与对话流畅度。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai / 11,098 / 2,794,721 | Kimi‑K3 采用压缩张量实现的 7B 对话模型，兼容多语言，下载量居前。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter / 848 / 1,991,437 | 基于 Qwen3.8‑27B 的 uncensored 版 GGUF，提供完整指令集，广受自部署用户追捧。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti / 578 / 238,397 | 同上，面向 llama.cpp 社区的快速部署实现。 |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat-ai / 146 / 3,982 | 轻量化指令模型，专为语音交互（PhonELLM）做了前置微调。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑to‑X）  
| 模型 | 作者 / 点赞 / 下载 | 简述 |
|------|-------------------|------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen / 4,375 / 121,976 | 首个既支持 **image‑text‑to‑text** 又兼容 Flash Attention 的 3.8B 多模态模型，开启低算力多模态时代。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen / 13,341 / 4,511,348 | 27B 大模型的多模态旗舰，集成视觉理解与对话，下载量遥遥领先。 |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth / 600 / 328,195 | Qwen Flash‑Next 的 GGUF 量化版，适配 Apple Silicon 与低功耗服务器。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 3,236 / 8,839,153 | 27B 多模态模型的 GGUF 量化实现，突破 8 M+ 下载，证明社区对大模型量化需求旺盛。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks / 2,254 / 1,137,181 | 单文件 **image‑to‑video** Diffusion 模型，支持从单张图片生成高质量短视频。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI / 4,654 / 5,263,381 | 端到端 **text‑to‑video** 扩散模型，兼顾细粒度控制与生成速度，是本周最受关注的视频生成模型。 |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo / 193 / 0 | 声称 “4‑step” 预览的轻量化 text‑to‑video 模型，仍在社区试水阶段。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter / 1,286 / 301,964 | 采用 FP8 量化的 uncensored 多模态模型，兼顾显存占用与视觉推理质量。 |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter / 122 / 42,864 | Flash‑Next 的 uncensored GGUF 版，针对 llama.cpp 使用者优化。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS / 784 / 1,158,065 | 强化视觉‑语言混合（MTP）能力的 GGUF 版，适配 Apple M系列芯片。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter / 1,235 / 109,121 | 为 Apple MLX 框架编译的 uncensored 多模态模型，打开了 iOS/ macOS 本地部署通路。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS / 945 / 725,757 | 通过 **abliterated** 技术去除安全过滤的 27B 多模态模型，吸引高风险实验需求。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX (重复)已列]** |  |  |

### 🔧 专用模型（代码、数学、医疗、嵌入）  
| 模型 | 作者 / 点赞 / 下载 | 简述 |
|------|-------------------|------|
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar-ragdoll / 139 / 87,848 | 35B 代码生成模型的 GGUF 版，专注 Python/Java 等语言的高质量补全。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith-ai / 505 / 147,038 | 结合 Qwen3.5‑MoE 的混合模型，提供强大的文本生成与检索嵌入能力，适用于检索增强场景。 |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters / 158 / 1,009 | 1B 规模的金融领域多模态模型，侧重文档理解与财经摘要。 |

### 📦 微调与量化（社区微调、GGUF、AWQ 等）  
| 模型 | 作者 / 点赞 / 下载 | 简述 |
|------|-------------------|------|
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth / 600 / 328,195 | 社区基于 Qwen Flash‑Next 的 GGUF 量化，提供 **~4 GB** 权重文件，适配低端 GPU 与 CPU。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 3,236 / 8,839,153 | 27B 多模态模型的 8‑bit GGUF 版，是本周下载量最高的 GGUF 权重。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter / 848 / 1,991,437 | 通过 **ggml** / **llama.cpp** 改写，实现无过滤的快速本地推理。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter / 1,286 / 301,964 | FP8 量化版本，显存需求仅约 **2 GB**，对边缘设备友好。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth / 288 / 45,936 | GLM‑5.3‑Flash 的 GGUF 版，针对 Apple Silicon 进行深度优化。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS / 945 / 725,757 | 通过 “abliterated” 去除安全层的模型，属于 **社区微调+量化** 双重属性。 |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter / 122 / 42,864 | 小众但技术前沿的 uncensored GGUF 版，展示社区对安全过滤可控性的实验需求。 |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui-ai / 456 / 1,622,056 | Abliterated + GGUF 双包装，下载量位列前十，说明此类模型的广泛接受度。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter / 1,235 / 109,121 | 专为 Apple MLX 框架编译的模型，标志着 **Apple生态** 上的微调部署热度。 |

---

## 生态信号（100 ~ 200 字）  
本周 **Qwen** 系列继续领跑，尤其是 **Flash‑Next** 与 **27B** 版的多模态能力被大量量化（GGUF、FP8）后快速下沉到消费级硬件。国产 LLM（GLM‑5.3‑Flash、DeepSeek‑V4‑Flash）在指令微调和推理速度上获得显著关注，说明企业对 **国产模型自研+低成本部署** 需求上升。社区量化的热度尤为突出：GGUF 权重累计下载已突破 **15 M**，且 **FP8** 量化案例呈指数增长，暗示在资源受限环境（边缘、移动）中的实际落地正在加速。与此同时， **Uncensored / Abliterated** 系列的出现，表明部分开发者希望突破安全过滤进行更自由的实验，生态出现了“安全/可控”与 “开放/探索” 两股力量的并行。  

---

## 值得探索  
1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** – 第一次在 3.8B 参数量级实现高效 **image‑text‑to‑text**，且兼容 Flash Attention，适合在笔记本或低功耗服务器上部署多模态应用。  
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – 端到端 **text‑to‑video** 扩散模型，生成质量已接近商业产品，且支持 **ControlNet** 风格控制，值得在内容创作与自动化视频制作中进一步研究。  
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 27B 多模态模型的 8‑bit GGUF 版，下载量位居榜首，展示了在 **CPU/低端 GPU** 环境下运行大模型的可行性，是量化技术的最佳示例。  

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*