# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 12:47 UTC

---

**今日速览**  
本周 Hugging Face 热门模型以大规模多模态生成（图像‑文字、图像‑视频、音频‑文字）为核心，开源量化（GGUF、AWQ）与社区微调持续发酵。LLM 仍占据榜单前列，而像 **Qwythos**、**Bonsai‑27B** 等系列在 GGUF 量化后下载量激增，显示出用户对轻量化、可本地运行的需求。总体来看，开源权重模型与创新的多模态工具共同推动了生态的快速扩容。  

---

**热门模型**  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型 | 作者 | 点赞 | 下载 | 一句话描述 |
|------|------|------|------|------------|
| **prism-ml/Ternary-Bonsai-27B-gguf** | prism-ml | 880 | 432,196 | 27 B 参数的三值化文本生成模型，兼容 `llama.cpp`，因体积小、推理快受关注。 |
| **prism-ml/Bonsai-27B-gguf** | prism-ml | 558 | 1,404,962 | 同样基于 27 B 的 GGUF 量化版，下载次数最高，显示社区对轻量化 LLMs 的强劲需求。 |
| **zai-org/GLM-5.2** | zai-org | 4,249 | 545,109 | 采用 MoE 结构的中文/多语言 LLM，指令遵循能力突出，点赞数位居榜首。 |
| **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** | DavidAU | 204 | 62,842 | Qwen3.6 27 B 的极度去审查版，强调创意写作与多步推理。 |
| **prism-ml/Bonsai-27B-mlx-1bit** | prism-ml | 159 | 25,273 | 在 MLX 框架下的 1bit 量化模型，提供低功耗推理。 |
| **AngelSlim/Hy3-GGUF** | AngelSlim | 152 | 145,102 | 基于 Tencent Hy3 的 GGUF 量化版，侧重多人类级对话生成。 |
| **prism-ml/Ternary-Bonsai-27B-mlx-2bit** | prism-ml | 131 | 20,445 | 2bit 量化的 Ternary‑Bonsai，兼容 MLX，仍保持高精度。 |
| **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF** | GnLOLot | 137 | 51,746 | 1B 参数的 MiniCPM5 量化版，专注思考链与链式推理。 |
| **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF** | GnLOLot | 137 | 51,746 | 同上，V2 版加入改进的微调，下载量持续增长。 |
| **prism-ml/Ternary-Bonsai-27B-gguf** (已列) | prism-ml | 880 | 432,196 | 同上。 |
| **tencent/Hy3** | tencent | 852 | 14,143 | 大模型的中文版 Hy3，侧重新闻摘要与信息抽取。 |
| **wenzhong/Hy3** (同 Hy3) | tencent | 852 | 14,143 | 同上。 |
| **Motif-Technologies/Motif-3-Beta** | Motif-Technologies | 91 | 125 | 小规模但结构独特的文本生成模型，展示了实验性微调思路。 |
| **QueShe... (其余标记为 text‑generation 的模型)** | 多数为社区微调 | — | — | 包括 **prism-ml/Bonsai-27B-mlx-1bit**、**prism-ml/Bonsai-27B-gguf** 等，均为指令微调的轻量版 LLM。 |

> *注：仅列出在本分类中最具代表性的模型，完整列表见下方其余分类。*

### 🎨 多模态与生成（图像、视频、音频、文本‑>X）  
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| **thinkingmachines/Inkling** | thinkingmachines | 1,316 | 16,441 | 图像‑文字‑到‑文字的综合模型，支持多轮对话。 |
| **baidu/Unlimited-OCR** | baidu | 2,523 | 2,237,351 | 超高分辨率 OCR，下载量第一，适用于文档自动化。 |
| **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** | empero-ai | 2,379 | 2,133,420 | 兼具多模态生成与推理的 Qwen3.5 变体。 |
| **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** | HauhauCS | 2,950 | 1,997,690 | 35 B 参数的去审查版，强调视觉‑语言交互与激进创作。 |
| **ATH-MaaS/OvisOCR2** | ATH-MaaS | 227 | 17,162 | 基于 Qwen3.5 的 OCR‑2 版，专攻手写与印刷识别。 |
| **Google/gemma-4-31B-it** | google | 3,307 | 12,113,203 | Gemini 系列最新 31 B 文本‑>图像模型，点赞、下载均领先。 |
| **Wan-AI/Wan-Dancer-14B** | Wan-AI | 149 | 2,497 | 文本‑>视频生成模型，聚焦舞蹈动作合成。 |
| **prism‑ml/Ternary‑Bonsai‑27B‑mlx‑2bit** (已列语言模型) | prism‑ml | 131 | 20,445 | 同时支持图像‑文字输入的多模态生成。 |
| **unsloth/inkling‑GGUF** | unsloth | 115 | 7,377 | 兼容 GGUF 的 Inkling 变体，用于多模态对话。 |
| **empero-ai/Qwythos-9B‑v2‑GGUF** | empero-ai | 198 | 125,726 | 二代 Qwythos，提升图像‑文字协同生成。 |
| **LuffyTheFox/Qwen3.6-35B‑A3B‑Uncensored‑Genesis‑Hermes‑V3‑GGUF** | LuffyTheFox | 90 | 19,140 | 大模型去审查版，强调哲学与创意写作。 |
| **OpenMOSS-Team/MOSS-Transcribe‑Diarize** | OpenMOSS-Team | 297 | 92,265 | 音频转写+说话人分割的完整管线，奇点完成自动转写。 |
| **Cactus-Compute/needle** | Cactus-Compute | 295 | 1,068 | 功能调用工具，支持链式推理与工具使用。 |
| **tencent/Hy3** (已列语言模型) | tencent | 852 | 14,143 | 文字‑>图像的跨模态输出版本。 |
| **alpha... (其余标记为 image‑to‑video、audio‑text‑to‑text 等)** | — | — | — | 包括 **Alissonerdx/LTX‑Best‑Face‑ID**、**Wan‑AI/Wan‑Dancer‑14B** 等均属此类。 |

### 🔧 专用模型（代码、数学、医疗、嵌入、机器人等）  
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| **openbmb/MiniCPM‑RobotManip** | openbmb | 145 | 58 | 面向机器人操作的 VLA（视觉‑语言‑行动）模型。 |
| **openbmb/MiniCPM‑RobotTrack** | openbmb | 105 | 72 | 通过视觉跟踪实现机器人路径规划。 |
| **nvidia/Nemotron‑3‑Embed‑1B‑BF16** | nvidia | 92 | 93,021 | 句向量嵌入模型，侧重语义相似度计算。 |
| **google/gemma‑4‑31B‑it** | google | 3,307 | 12,113,203 | 虽然在多模态榜单上，但其强大的嵌入与检索能力同样适用于专用任务。 |
| **Motif‑Technologies/Motif‑3‑Beta** | Motif‑Technologies | 91 | 125 | 通过特定特征提取进行文本生成实验。 |

### 📦 微调与量化（社区微调、GGUF、AWQ 等）  
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*