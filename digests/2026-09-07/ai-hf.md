# Hugging Face 热门模型日报 2026-09-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-06 22:16 UTC

---

**Hugging Face 热门模型日报（2026‑09‑07）**  

---

## 今日速览  
本周榜单继续被 **Qwen 系列** 模型占据，尤其是其 27B 基础模型及各种 GGUF 量化版本，下载量均突破百万。多模态视觉‑语言模型（如 DeepSeek‑V4‑Flash‑Vision、Lightricks LTX‑2.5、MiniMax‑H3）热度攀升，反映出社区对图文生成、图像‑视频转换的需求旺盛。与此同时，**专用领域模型**（嵌入、时间序列、语音预训练、网络安全）保持稳定增长，而 **GGUF/AWQ 等量化与社区微调** 仍是提升可部署性的主流途径。整体来看，开源权重依然主导榜单，闭源模型仅在少数专业场景出现。

---

## 热门模型  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型名 | 链接 | 作者 | 点赞 | 下载 | 一句话说明 |
|--------|------|------|------|------|------------|
| Qwen/Qwen3.8-27B | https://huggingface.co/Qwen/Qwen3.8-27B | Qwen | 14,122 | 6,190,807 | 通用 27B 基础语言模型，支持多轮对话及指令遵循，下载量雄居榜首。 |
| Qwen/Qwen3.8-Flash-Next | https://huggingface.co/Qwen/Qwen3.8-Flash-Next | Qwen | 4,941 | 432,966 | 在 Qwen3.8-27B 基础上加入闪存优化，提升推理速度同时保持强大生成能力。 |
| zai-org/GLM-5.3-Flash | https://huggingface.co/zai-org/GLM-5.3-Flash | zai-org | 2,099 | 761,364 | GLM 家族的轻量版 flash 模型，专注高吞吐的文本生成与对话场景。 |
| zai-org/GLM-5.3 | https://huggingface.co/zai-org/GLM-5.3 | zai-org | 1,734 | 410,074 | GLM-5.3 基础版，采用 MoE 架构，在多语言及复杂推理上表现突出。 |
| openai-community/gpt2 | https://huggingface.co/openai-community/gpt2 | openai-community | 3,706 | 14,612,342 | 经典的 124M GPT‑2 模型，仍是微调和教学的基石。 |
| IFM/K2-Horizon-MoVA-36B-A4B | https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B | IFM | 186 | 1,723 | 采用混合专家（MoVA）结构的 36B 大模型，针对长文本理解与生成做了专项优化。 |
| tencent/Hy4-preview | https://huggingface.co/tencent/Hy4-preview | tencent | 445 | 6,441 | Hunyuan 系列的预览版，融入了混合精度与稀疏注意力，旨在提升生成质量与效率。 |
| BreezeBlue/Breeze-TTS-2 | https://huggingface.co/BreezeBlue/Breeze-TTS-2 | BreezeBlue | 460 | 6,357 | 基于 Transformer 的文本到语音模型，支持中英双语合成，适合轻量级 TTS 场景。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型名 | 链接 | 作者 | 点赞 | 下载 | 一句话说明 |
|--------|------|------|------|------|------------|
| deepseek-ai/DeepSeek-V4-Flash-Vision-Exp | https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp | deepseek-ai | 737 | 209,191 | 视觉‑语言联合模型，采用 flash 注意力加速图文生成，擅长图像描述与视觉问答。 |
| XHToken/Spark-X2.5-4B | https://huggingface.co/XHToken/Spark-X2.5-4B | XHToken | 597 | 5,477 | 4B 参数的轻量 LLM，专注于文本生成，兼具少量多模态指令能力。 |
| Lightricks/LTX-2.5 | https://huggingface.co/Lightricks/LTX-2.5 | Lightricks | 2,955 | 1,526,928 | 扩散模型系列，支持图像→视频、文本→视频及视频→视频的跨模态生成。 |
| unsloth/Qwen3.8-Flash-Next-GGUF | https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF | unsloth | 809 | 823,733 | Qwen3.8-Flash-Next 的 GGUF 量化版本，保留图文到文本的多模态能力，便于本地部署。 |
| HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF | https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF | HauhauCS | 977 | 1,568,315 | 基于 Qwen3.8-27B 的未经审查、激进微调版 GGUF，强调开放式生成与多模态理解。 |
| orcarouter/Qwen3.8-27B-Uncensored-GGUF | https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF | orcarouter | 748 | 287,720 | Qwen3.8-27B 的未经审查 GGUF 版本，保留图文到文本的多模态功能，适合创作型应用。 |
| JonathanColetti/Qwen3.8-27B-Uncensored-GGUF | https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF | JonathanColetti | 1,000 | 2,499,368 | 未经审查的 Qwen3.8-27B GGUF，侧重文本生成但同样支持图文指令，下载量极高。 |
| DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF | https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF | DavidAU | 245 | 211,018 | 高度定制的涡轮+冷融合微调版 GGUF，强调代码与创意写作的多模态表现。 |
| Jackrong/Qwopus3.8-27B-Flash-GGUF | https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF | Jackrong | 128 | 22,128 | 基于 Qwen3.8-27B 的 Flash 版 GGUF，兼具图文到文本与轻量视觉理解能力。 |
| nvidia/Qwen3.8-Flash-Next-NVFP4 | https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4 | nvidia | 114 | 13,321 | 使用 NVIDIA TensorRT‑LLM 与 NF4 量化的 Qwen3.8-Flash-Next，专注推理加速。 |
| MiniMaxAI/MiniMax-H3 | https://huggingface.co/MiniMaxAI/MiniMax-H3 | MiniMaxAI | 4,964 | 4,986,349 | 大规模扩散模型，支持图像→视频及文本→视频的高质量生成，适合创意内容制作。 |
| OpenVDN/vdn-minimax-h3 | https://huggingface.co/OpenVDN/vdn-minimax-h3 | OpenVDN | 209 | 0 | MiniMax-H3 的社区微调版，侧重文本到视频的风格化生成。 |
| openai/clip-vit-base-patch32 | https://huggingface.co/openai/clip-vit-base-patch32 | openai | 1,211 | 20,579,479 | 零射图像分类的经典 CLIP 模型，广泛用于多模态检索与图像理解。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）  
| 模型名 | 链接 | 作者 | 点赞 | 下载 | 一句话说明 |
|--------|------|------|------|------|------------|
| sentence-transformers/all-MiniLM-L6-v2 | https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 | sentence-transformers | 5,565 | 253,029,336 | 轻量

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*