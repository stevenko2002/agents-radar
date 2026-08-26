# Hugging Face 热门模型日报 2026-08-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 22:15 UTC

---

# Hugging Face 热门模型日报（2026‑08‑27）

## 今日速览
- **Qwen 系列**继续领跑，多款 27B 参数模型在多模态和量化方向交叉发力，下载量突破百万元。  
- **GGUF 量化模型**热度飙升，社区开源项目（unsloth、orcarouter 等）将大模型压缩到几百 MB，极大降低部署门槛。  
- **多模态生成**（图像‑视频、文本‑音频）出现新秀：Lightricks LTX‑2.5、MiniMax‑H3、MiniMax‑Music3 抢占媒体创作场景。  
- **专用工具链**（Chat‑Template、Any‑to‑Any）得到关注，提示未来模型包装与插件化将是重要趋势。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 / 👍 / ⬇ | 简要说明 |
|------|----------------|----------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen / 12 890 / 3 298 569 | 27B 多模态大模型，兼容文本、图片输入，因高效的指令微调和强大对话能力成为下载榜首。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai / 3 738 / 3 857 140 | V4‑Flash 旗帜模型，专注高质量对话与指令遵循，轻量化实现高速推理。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai / 451 / 83 342 | 35B MoE（Mixture‑of‑Experts）文本生成模型，提供更高的吞吐率与知识覆盖。 |
| **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** | ornith‑ai / 226 / 119 053 | 9B 轻量化版本，针对资源受限环境优化，保持优秀的生成质量。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS / 809 / 468 746 | “Obliterated” 版去除安全过滤，针对科研解锁全量语料，备受好奇者追捧。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti / 748 / 1 620 754 | GGUF 量化的 27B uncensored 版，兼顾极致体积与完整上下文。 |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper / 250 / 3 921 | 小型指令微调模型，内置 ASR 特征，适合边缘设备的语音‑文本任务。 |
| **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** | EschaLabs / 131 / 2 481 | 2‑bit 极低位量化模型，演示了在极端压缩下仍能保持可用的对话性能。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org / 750 / 0 | 5.3B 高速生成模型，兼容图文输入，适合作为轻量化的多模态基座。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑to‑X）
| 模型 | 作者 / 👍 / ⬇ | 简要说明 |
|------|----------------|----------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen / 3 569 / 2 551 | 下一代 Flash 多模态模型，支持图像‑文本交互，因超快推理进入榜单前列。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter / 1 139 / 79 395 | 基于 Apple MLX 的运行时，提供低功耗的跨平台图文对话体验。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter / 1 175 / 269 805 | FP8 量化实现，显著降低显存占用，仍保留完整多模态能力。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks / 1 858 / 894 094 | 单文件 Diffusion 视频生成模型，支持从单张图片到短视频的高质量转化。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI / 4 498 / 4 793 098 | 图文‑到‑视频（image‑to‑video）模型，列入 HuggingFace “Video Generation” 先锋榜。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI / 1 260 / 19 501 | 文本‑到‑音乐生成模型（text‑to‑audio），提供多风格、可控的音乐创作。 |
| **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Audio8 / 173 / 4 257 | 小型中文 TTS，基于 Transformer‑VAE，适合轻量化语音合成实验。 |
| **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** | alibaba‑pai / 138 / 3 148 | 将 ControlNet 融入 MiniMax‑H3，实现文字‑驱动的视频编辑与风格控制。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai / 11 018 / 2 921 257 | 高效图文‑对话模型，兼容检索增强（RAG），在中文多模态对话中表现突出。 |
| **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** | orcarouter / 192 / 17 567 | 未经安全过滤的原始多模态模型，满足科研 “全信息” 场景需求。 |

### 🔧 专用模型（代码、数学、医疗、嵌入等）
| 模型 | 作者 / 👍 / ⬇ | 简要说明 |
|------|----------------|----------|
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric / 1 484 / 0 | 为 Qwen 系列提供标准化 Jinja chat‑template，简化 API 调用与微调。 |
| **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** | peculiar‑ragdoll / 253 / 0 | 另一个社区维护的 Qwen 对话模板，侧重于 Sharp‑Prompt 风格。 |
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova / 171 / 3 264 | “Any‑to‑Any” 多模态模型，聚焦跨模态检索与特征抽取，适合作为嵌入服务的底座。 |

### 📦 微调与量化（社区微调、GGUF、AWQ 等）
| 模型 | 作者 / 👍 / ⬇ | 简要说明 |
|------|----------------|----------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 2 992 / 7 638 591 | 最高下载量的 GGUF 量化模型，文件仅 6 GB，极大推动桌面推理。 |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth / 307 / 0 | Flash‑Next 的 GGUF 版，示例展示了 1 GB 左右即可运行完整多模态推理。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS / 656 / 911 795 | Aggressive‑MTP 量化策略，兼顾极低延迟与原始质量，下载量快速突破 90 万。 |
| **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** | ornith‑ai / 312 / 1 391 218 | 35B MoE 模型的 GGUF 版，展示了高容量 MoE 仍可在 GGUF 框架下压缩。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter / 473 / 183 871 | 直接面向 GGUF 社区的 uncensored 量化模型，提供完整的 “no‑filter” 体验。 |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui‑ai / 377 / 1 318 749 | 通过 “abliterated” 微调去除安全提示，GGUF 包体 5 GB，适合学术实验。 |
| **[DavidAU/Qwen3.

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*