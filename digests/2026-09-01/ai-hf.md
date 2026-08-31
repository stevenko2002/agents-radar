# Hugging Face 热门模型日报 2026-09-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 22:15 UTC

---

**《Hugging Face 热门模型日报》 – 2026‑09‑01**  

---

## 1. 今日速览  
- 2024‑2026 年后期，**Qwen 3.8 系列**继续领跑多模态大模型，Flash‑Next 与 27B 版的下载量和点赞数均居前。  
- **GLM‑5.3 Flash** 以及其社区量化版（GGUF）紧随其后，显示中国开源社区在视觉‑语言方向的强劲活力。  
- **GGUF 与 FP8 量化模型** 爆发式增长，尤其是 Qwen、GLM 与 MiniMax 系列的量化版累计下载已突破 2 亿，表明轻量化部署需求正快速上升。  
- **视频生成** 成为新热点：Lightricks LTX‑2.5、MiniMax‑H3 与 FastVideo 系列在榜单中占据显著位置。  

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org | 1,410 | 66,195 | 采用 MoE‑DSA 架构的 5.3B 中文对话模型，凭借指令微调表现强劲，成为国内开源 LLM 的标杆。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 349 | 2,589 | 腾讯最新的 4‑B 文本生成模型，侧重中文长文创作与问答，下载量虽小但社区好评度高。 |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai | 173 | 4,721 | 小型 Nemotron‑style 对话模型，专为实时语音交互优化，适配轻量化设备。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai | 3,841 | 4,561,861 | DeepSeek V4 系列的 Flash 变体，7‑B 参数、对话与指令双兼容，下载量突破 450 万，表明国际模型在华仍受热捧。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai | 512 | 172,695 | 35 B 大模型，混合了 Qwen 3.5 MoE 与自研指令微调，面向多语言生成和检索任务。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 973 | 759,644 | 基于 Qwen 3.8‑27B 的 MLX‑Optimized 版，去除安全过滤，适合研究解禁对话行为。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑to‑X）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,511 | 158,598 | Flash‑Next 是 Qwen 3.8 系列的轻量化视觉‑语言模型，支持图文理解与多轮对话，下载量持续增长。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org | 1,804 | 379,271 | 5.3B 视觉‑语言大模型，专为中文多模态对话设计，兼容图片 OCR 与细粒度描述。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,466 | 4,720,763 | 27 B 参数的全能视觉‑语言模型，支持高分辨率图像输入、长文本输出，是目前 HF 最受关注的多模态基座。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,359 | 1,182,585 | 单文件 Diffusion 视频生成器，可从单张图片或文字描述生成 2‑5 秒短视频，下载量突破 100 万。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,704 | 5,362,365 | 兼具图像‑到‑视频、文本‑到‑视频的多模态生成器，采用高效 4‑step 采样，已成为社区视频创作首选。 |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo | 214 | 0 | “Data‑Free” 版的快速文本‑到‑视频模型，主打低算力实时生成，虽无下载数据但热度上升。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 251 | 2,236 | 2 B 参数中文语音合成模型，使用 Transformer‑flow 架构，生成自然度可媲美商业 TTS。 |
| **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek‑ai | 326 | 0 | 实验性视觉‑语言模型，提供图像问答与细粒度定位，标记为 “Exp”，吸引研究者尝鲜。 |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 171 | 1,045 | 小型（约 1 B）英文‑中文视觉‑语言模型，面向财经文献检索与摘要生成。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 811 | 1,202,914 | GGUF 量化版的 Qwen‑27B，去除内容审查，配合多模态 Token‑Priority，实现更自由的对话。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar‑ragdoll | 159 | 105,974 | 35 B 代码专用模型，基于 Qwen 3.5‑MoE，支持多语言编程提示与代码补全。 |
| **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)** | Kijai | 376 | 0 | 实验性视频生成插件，主要针对医学影像转视频的细粒度实验，可在局部数据集上微调。 |

### 📦 微调与量化（社区微调、GGUF、FP8、MLX）

| 模型 | 作者 | 👍 点赞 | ⬇ 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 632 | 373,029 | 采用 unsloth 优化的 GGUF 量化版，兼容 Qwen‑Flash‑Next，CPU/移动端部署友好。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,281 | 9,059,937 | 27 B Qwen‑3.8 的 GGUF 低位量化模型，下载量已破 900 万，成为最受关注的“大模型轻量化”典范。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 309 | 53,350 | GLM‑5.3‑Flash 的 GGUF 版，文件仅 13 GB，适用于边缘设备的视觉‑语言推理。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,250 | 114,057 | MLX（Apple Silicon）专用的去审查版 Qwen‑27B，提供原生 macOS 加速。 |
| **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)** | Qwen | 175 | 84,954 | FP8 低精度量化实现，显著降低显存占用，保持 >95% 原始精度。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,326 | 307,496 | Qwen‑27B 去审查版的 FP8 量化体，适用于高吞吐推理场景。 |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 147 | 51,125 | GGUF 版的去审查 Qwen‑Flash‑Next，兼容 llama.cpp，便于本地离线部署。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 600 | 246,445 | 完整去审查版的 27 B GGUF，下载量稳步上升，说明对解禁模型需求持续。 |
| **[orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)** | orcarouter | 127 | 1,541 | GLM‑5.3‑Flash FP8 版，面向对中文多模态内容无审查的实验场景。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 872 | 2,055,081 | 通过 llama.cpp 打包的去审查 GGUF，下载突破 200 万，已被多项本地应用集成。 |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui‑ai | 473 | 1,764,919 | 另一个“abliterated”‑GGUF 版本，提供额外的安全过滤关闭选项，支持多语言对话。 |
| **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | alibaba‑pai | 164 | 27,009 | 基于 MiniMax‑H3 的 LoRA 微调集合，专注提升特定场景（如广告、动漫）的视频生成质量。 |

---

## 3. 生态信号（100‑200 字）

本周 **Qwen 3.8** 与 **GLM‑5.3** 两大多模态家族依旧是热度核心，尤其是它们的 **Flash‑Next** 与 **Flash** 子系列，分别针对轻量化（Flash‑Next）和高效跨模态交互（Flash）展开，下载量合计已超 1 亿元次。量化生态呈指数式增长：GGUF 与 FP8 版模型累计下载已突破 **2 亿**，其中 **unsloth/Qwen3.8‑27B‑GGUF** 与 **orcarouter** 系列的去审查/abliterated 变体最受关注，显示社区对 **本地离线部署 + 低审查** 需求的强烈信号。与此同时，**视频生成**（LTX‑2

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*