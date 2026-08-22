# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-22 22:15 UTC

---

**今日速览**  
本周 Hugging Face Hub 的热度集中在 **Qwen 3.8 系列** 的各种衍生版本（原始、FP8、GGUF、MLX 等），以及 **未经审查（uncensored/abliterated）** 的社区微调模型。多模态领域，**MiniMax‑H3**、**Lightricks LTX‑2.5** 和 **Kimi‑K3** 等图像/视频生成模型点赞与下载均保持高涨，说明跨模态生成仍是开发者关注的热点。与此同时，**DeepSeek‑V4‑Flash‑0731** 凭借卓越的文本生成表现迅速跻身点赞前列，显示开源大模型在对话与指令任务上的竞争力正在提升。

---

### 热门模型  

#### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,117 | 2,090,699 | 原始 Qwen 3.8 27B 基础模型，支持图文双向理解与对话，是本周点赞榜首。 |
| [DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,629 | 2,976,281 | 高效的 Flash 版 DeepSeek‑V4，文本生成质量佳，点赞数激增。 |
| [DeepSeek‑V4‑Pro‑0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 717 | 54,566 | 专业版 DeepSeek‑V4，侧重对话与推理，下载量稳步增长。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,145 | 17,386 | 超大规模 MoE 版 Qwen 3.8，参数达 2.4T，适合极端语言建模。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 320 | 12,611 | 基于 Qwen 3.5 MoE 架构的 35B 模型，兼具图文理解与文本生成。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 523 | 164,950 | 未经审查的 Qwen 3.8 版本，去除安全过滤，适合开放式实验。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 620 | 1,223,422 | 未经审查且已量化为 GGUF 格式，便于本地推理。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,560 | 694,670 | 图像‑到‑视频扩散模型，支持多种视频生成任务。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,335 | 3,899,160 | 图文‑到‑视频生成模型，下载量与点赞均位列前茅。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,923 | 2,612,739 | 高效图文‑到‑文本模型，采用压缩张量技术，点赞破万。 |
| [Meta‑models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,752 | 517,564 | 多模态对话模型，兼具图像理解与文本生成。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,180 | 16,644 | 文本‑到‑音乐生成扩散模型，展示音频领域的探索。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 884 | 34,909 | 基于苹果 MLX 框架的未审查 Qwen 3.8，适合 Mac 端推理。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 481 | 486,221 | 未审查、激进 MTP、GGUF 量化的多模态版本。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）  
> 本周榜单中未出现明显的代码、数学、医疗或嵌入类专用模型，因而该类别暂无条目。

#### 📦 微调与量化（社区微调、GGUF、AWQ）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,616 | 6,320,542 | Qwen 3.8‑27B 的 GGUF 量化版本，显著降低显存占用。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 334 | 1,202,168 | 采用 NVIDIA FP4 量化的 Qwen 3.8，推理速度更快。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 662 | 2,306,777 | 原厂 FP8 精度版本，在保持精度的同时大幅削减显存。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 333 | 85,371 | 未审查 + GGUF 双重优化，便于本地化部署。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 254 | 635,416 | 去除安全过滤的 GGUF 版本，下载量表明社区需求旺盛。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 243 | 97,247 | 基于 Ridge 优化的 GGUF 量化模型，兼顾速度与精度。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 230 | 173,935 | MoE 模型的 GGUF 版本，便于资源受限环境运行。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 188 | 176,969 | 复合训练（Cold Fusion + GAIN）后的 GGUF 版本，展示社区创新微调路径。 |

---

### 生态信号  
Qwen 3.8 系列仍是本周的核心驱动力，不仅原始模型点赞最高，其 FP8、GGUF、MLX 等多种量化与社区微调版本均在下载榜上占据显著份额，表明开发者正积极寻求 **高效本地部署** 的路径。与此同时，**未经审查（uncensored/abliterated）** 模型的点赞与下载持续攀升，反映出对开放式实验和去安全过滤需求的增长。多模态方面，**MiniMax‑H3**、**Lightricks LTX‑2.5** 和 **Kimi‑K3** 等图文‑到‑视频/音频模型表现突出，说明跨模态生成已成为社区关注的新热点。开源权重仍然主导榜单，但闭源或商业许可的模型（如 MiniMax 系列）也通过高质量、任务特定的优化获得显著关注。总体来看，**量化（GGUF、FP8、NVFP4）与社区微调（未审查、特定领域微调）** 是当前最活跃的两个方向。

---

### 值得探索  
1. **MiniMaxAI/MiniMax-H3** – 图文‑到‑视频生成模型，下载近 400 万，点赞超 4k，展示了最新的跨模态视频合成能力，适合研究视频内容创作与多模态对齐。  
2. **DeepSeek‑V4‑Flash-0731** – 高效 Flash 版 DeepSeek‑V4，点赞破 3k，下载近 300 万，在保持强大语言理解的同时推理速度更快，是对话与指令任务的优秀候选。  
3. **Qwen/Qwen3.8-27B-FP8** – 原厂 FP8 精度版本，点赞 660 余，下载超过 230万，在显存占用大幅降低的情况下仍

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*