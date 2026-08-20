# Hugging Face 热门模型日报 2026-08-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-20 22:15 UTC

---

**Hugging Face 热门模型日报（2026‑08‑21）**  

---

## 今日速览  
今日榜单被 Qwen3.8‑27B 系列及其各种量化/微调版本占据前列，显示出社区对大规模多语言模型的持续热衷。与此同时，MiniMaxAI 的多模态视频与音乐模型（MiniMax‑H3、MiniMax‑Music3）以及 Lightricks 的图像‑到‑视频模型 LTX‑2.5 快速攀升，反映出多模态生成成为新兴热点。大量未经审查（“abliterated”）和 GGUF 量化版本的涌现，表明开发者更看重在本地设备上运行的灵活性与定制化需求。  

---

## 热门模型  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,724 | 1,373,584 | 基础的 27B 参数多语言模型，支持图文到文本生成，是今日点赞冠军。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 | 同 Qwen3.8‑27B 的 FP8 量化版本，显著降低显存占用，保持强大的对话能力。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,120 | 14,592 | 采用稀疏混合专家（MoE）结构的 95B 参数版本，专注于长文本生成与指令遵循。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 677 | 43,287 | DeepSeek V4 系列的专业版，针对复杂推理与多轮对话进行了指令微调。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,575 | 2,547,549 | 同系列的 Flash 版本，推理速度更快，适合低延迟交互场景。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2,349,853 | Kimi 系列的第三代模型，具备强大的特征抽取与压缩张量能力，广泛用于检索增强生成。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 | 30B 参数的多模态对话模型，擅长图文互动与创意写作。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 209 | 1,713 | 基于 Qwen3.5 MoE 架构的 35B 模型，兼具文本生成与简单图文理解能力。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,099 | 14,471 | 文本到音乐的扩散模型，能够根据歌词或描述生成高质量伴奏。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,410 | 611,825 | 图像到视频的单文件扩散模型，支持图文引导的视频生成与编辑。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,236 | 3,308,673 | 图文到视频的强大生成模型，下载量居多模态榜首，适合短片创作。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 297 | 0 | 基于 MiniMax‑H3 的微调版本，专注于高保真图文到视频合成。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 648 | 380,072 | 图像到视频的 Turbo 变体，推理速度更快，适合实时应用。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 237 | 52,382 | 基于 Qwen3.8‑27B 的未审查 GGUF 版本，保留图文到文本能力，便于本地部署。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 703 | 2,628 | 同款未审查模型的 MLX 实现，针对苹果 silicon 进行了优化。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 674 | 76,109 | 未审查 + FP8 量化，兼顾生成质量与资源效率。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 198 | 187,008 | Abliterated（去除安全过滤）+ GGUF 版本，适合需要开放式生成的研究场景。 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186,470 | 同类未审查 GGUF 模型，侧重于密集型 27B 参数的快速推理。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,182 | 3,001,999 | 复杂的融合微调版本，结合多种技术（Heretic、MTP 等），在图文到文本任务上表现突出。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）  
*今日榜单中未出现明显的代码、数学、医疗或嵌入专用模型，表明社区关注度仍集中在通用语言与多模态生成方向。*  

### 📦 微调与量化（社区微调、GGUF、AWQ）  
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,347 | 5,126,652 | Qwen3.8‑27B 的 GGUF 量化版本，显著降低推理资源消耗，下载量居量化榜首。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831,483 | 使用 NVIDIA FP4 格式的量化模型，进一步压缩模型体积。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,335 | 0 | 提供 Qwen 系列的统一 Chat 模板（Jinja），便于快速构建对话系统。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 220 | 55,074 | Ridge 量化技术结合 GGUF，在保持精度的同时提升推理速度。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 510 | 979,768 | 未审查 + GGUF 版本，适合需要宽松生成限制的实验。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 200 | 10,540 | 未量化的 Abliterated 版本，提供完整精度用于微调基座。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 187 | 326,638 | 结合 Heretic 微调与 Abliterated 去过滤，提供更具创造力的文本生成。 |

---

## 生态信号（约150字）  
Qwen3.8‑27B 家族凭借其强大的多语言与多模态能力，成为今日榜单的绝对核心；社区围绕它展开了大量 GGUF、FP8、NVFP4 等量化以及未审查（abliterated）微调，显示出对低资源、可定制部署的强烈需求。与此同时，MiniMaxAI 在视频与音乐生成上的快速崛起（MiniMax‑H3、MiniMax‑Music3）以及 Lightricks 的图像‑到‑视频模型 LTX‑2.5，标志着多模态生成正从研究实验室迈向产品化。开源权重仍占据主导，闭源模型在榜单中几乎不可见，说明开源社区在模型创新与量化工具链方面的活力依然旺盛。  

---

## 值得探索  
1. **MiniMaxAI/MiniMax-H3**（图文到视频） – 下载量超过 330 万，点赞超 4k，展示了目前最成熟的视频生成能力，适合尝试短片创作或进行视觉故事板实验。  
2. **unsloth/Qwen3.8-27B-GGUF** – 下载量超过 500 万，点赞 2k+，提供极低显存占用的 GGUF 版本，是在边缘设备或个人电脑上运行 27B 模型的理想选择。  
3. **moonshotai/Kimi-K3** – 点赞过万，下载超 2.3M，具备特征抽取与压缩

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*