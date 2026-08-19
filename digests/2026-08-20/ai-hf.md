# Hugging Face 热门模型日报 2026-08-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-19 22:15 UTC

---

**Hugging Face 热门模型日报（2026‑08‑20）**  

---

### 今日速览  
Qwen 系列仍占据点赞榜首位，尤其是 Qwen3.8‑27B 及其多种量化/微调版本在社区中形成“模型族”效应。多模态视频生成模型（如 Lightricks/LTX‑2.5、MiniMax‑H3 及其社区微调版）下载量激增，显示出文图→视频需求的快速爆发。与此同时，DeepSeek‑V4‑Flash 与 DeepSeek‑V4‑Pro 凭借更高的推理速度和较低的显存占用，成为近期文本生成热点。社区在 GGUF、FP8、NVFP4 等量化格式上的贡献持续活跃，为边缘设备本地化推理提供了丰富选择。

---

### 热门模型  

#### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型名（HF链接） | 作者 | 点赞 | 下载 | 一句话介绍 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,458 | 1,006,235 | 27B 参数的多语言基础模型，支持图文对话，是当天点赞榜冠军。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,097 | 12,699 | 采用稀疏 MoE 架构的 95B 参数版本，在保持高吞吐的同时降低显存需求。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 629 | 37,583 | V4 系列的专业版，针对复杂指令与长上下文做了指令微调，生成质量更稳。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,547 | 2,330,940 | “Flash” 版本通过张量并行与 KV 缓存优化，实现更低延迟的文本生成，下载量居高不下。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,700 | 430,313 | 30B 参数的多模态对话模型，兼具强大的语言理解与图文生成能力。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,852 | 2,289,863 | Kimi 系列的最新版本，引入压缩张量技术，在保持高质量对话的同时大幅降低显存占用。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型名（HF链接） | 作者 | 点赞 | 下载 | 一句话介绍 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 597 | 1,063,646 | 采用 FP8 量化的图文‑文本模型，在保持精度的同时显著降低推理成本。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,314 | 555,993 | 图像‑到‑视频扩散模型，支持从单帧图像生成连贯短片，适用于创意内容制作。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,032 | 13,138 | 文本‑到‑音频（音乐）生成模型，基于 diffusion 并能控制风格与节奏。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,173 | 3,055,205 | 图文‑到‑视频的强大生成模型，能够根据文字描述合成高分辨率短片，下载量突破 300 万。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,440 | 15,213,225 | 社区封装的 MiniMax‑H3，提供 ComfyUI 工作流预设，极大降低了使用门槛。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 624 | 340,984 | 在 MiniMax‑H3 基础上做了 Turbo 优化，推理速度提升约 30%，适合实时视频生成。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 283 | 0 | 基于 MiniMax‑H3 的微调版，专注于浪漫与情感场景的图文‑视频合成。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）  
> 本期榜单中未出现明确的代码、数学或医疗专用模型，主要集中在通用语言与多模态生成方向。

#### 📦 微调与量化（社区微调、GGUF、AWQ）  
| 模型名（HF链接） | 作者 | 点赞 | 下载 | 一句话介绍 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,044 | 4,318,134 | 采用 GGUF 格式的量化版本，适用于 llama.cpp 及相关推理引擎，下载量超过 400 万。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 611 | 60,078 | FP8 量化并去除安全过滤（“abliterated”），面向需要更自由生成的研究场景。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 583 | 27 | 基于 MLX 框架的未审查版本，针对苹果 Silicon 设备做了优化。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 465 | 766,812 | GGUF 格式的未审查 Qwen3.8‑27B，适用于本地化部署与自定义过滤策略。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 284 | 653,042 | 使用 NVIDIA 的 NF4 量化，进一步压缩模型体积而保持较高精度。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,163 | 3,033,363 | 复杂的融合微调版本，结合了多种叙事风格与去审查处理，适合创意写作实验。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) *(已在多模态列出，这里强调其量化/微调属性)* | Comfy-Org | 1,440 | 15,213,225 | 社区提供的 GGUF 预转版本，直接在 ComfyUI 中使用，极大推动了视频生成的普及。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 165 | 7,207 | 未审查的纯 PyTorch 版本，便于在自行训练管道中进行进一步微调。 |

---

### 生态信号（约 150 字）  
Qwen 家族凭借其丰富的基础模型与社区提供的 GGUF、FP8、NVFP4 等多种量化版本，形成了“模型族+量化矩阵”的生态闭环，显著降低了边缘设备部署门槛。与此同时，MiniMax 系列在图文→视频领域的爆发式增长表明，多模态视频生成正成为新的热点，且社区已通过 ComfyUI 等工作流快速降低使用复杂度。DeepSeek 的 Flash 与 Pro 版本展示了对推理速度与显存效率的极致追求，预示着未来开源模型在低资源场景中的竞争力将进一步提升。总体而言，开源权重仍主导榜单，但社区在微调、去审查及量化上的创新活动正在不ewise 丰富模型的可用形态。

---

### 值得探索  
1. **Qwen/Qwen3.8-27B‑FP8** – FP8 量化在保持较高生成质量的同时大幅削减显存占用，适合在消费级 GPU 上尝试长对话或图文生成任务。  
2. **Lightricks/LTX-2.5** – 图像‑到‑视频扩散模型，能够从单幅静态图生成连贯短片，是快速原型创意视频的理想起点。  
3. **MiniMaxAI/MiniMax-H3**（及其社区版 Comfy-Org/MiniMax-H3） – 目前下载量最高的图文‑视频模型，配合 ComfyUI 工作流可在本地快速实现文字驱动的视频合成，适合研究多模态生成的最新进展。  

---  
*以上数据均来源于 2026‑08‑20 Hugging Face Hub 今日热门榜单。*

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*