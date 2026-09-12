# Hugging Face 热门模型日报 2026-09-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-12 22:16 UTC

---

**Hugging Face 热门模型日报（2026‑09‑13）**  

---

### 📰 今日速览
- 本周多模态模型依然占据点赞榜前列，尤其以图文‑到‑文/视频（如 Qwen3.8‑27B、MiniMax‑H3、LTX‑2.5）为代表的视觉语言生成模型受到广泛关注。  
- 语言模型方面，开源小型指令模型（MiniCPM5‑2B、Spark‑X2.5‑4B）以及经典 GPT‑2 仍保持高下载量，表明轻量级可商用模型的需求持续增长。  
- 量化与社区微调活动显著增多，GGUF 版本（如 unsloth/Qwen3.8‑27B‑GGUF、ISTA‑DASLab/Qwen3.8‑27B‑GSQ‑RCO‑GGUF）在点赞与下载上均表现亮眼，反映出边缘推理与低资源部署的强烈需求。  
- 专用领域中，时间序列预测（TimesFM）、语音识别（VibeVoice‑ASR）、嵌入句向量（all‑MiniLM‑L6‑v2）等模型下载量可观，说明垂直场景的开源解决方案正在快速成熟。  

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,257 | 102,334 | 2B 参数的开源指令模型，适合快速微调与轻量级对话场景。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,134 | 19,733 | 4B 参数的中文语言模型，兼具较强的文本生成与指令遵循能力。 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 402 | 1,596 | 35B 参数的稀疏专家（MOE）模型，旨在提升推理效率而不牺牲性能。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,980 | 15,150,566 | 经典的 124M 参数 GPT‑2，仍是文本生成与微调的基础底座。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,997 | 140,636 | 图文‑到‑文的多模态闪存版，支持快速视觉理解与生成。 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 729 | 3,581 | 基于 Qwen3.5‑MOE 的轻量多模态模型，兼具图文理解与文本生成。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,857 | 7,726,687 | 27B 参数的图文‑到‑文大模型，下载量巨大，显示社区对强视觉语言模型的需求。 |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 616 | 30,081 | 更强的 Qwen3.5‑MOE 多模态版，支持图文‑到‑文与更长上下文。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,601 | 1,601,007 | 扩散模型实现图像‑到‑视频生成，点赞与下载均突出，显示视频生成热度。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 345 | 114,141 | 基于 Minimax‑H3 的图像‑到‑视频模型，专注于高质量视频内容生成。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 317 | 2,304 | 文本‑到‑音频的音乐生成模型，展示音频合成在开源社区的兴起。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,195 | 4,860,709 | 图文‑到‑视频的强大多模态生成模型，下载量接近五百万。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,137 | 604,992 | 快速版图文‑到‑文模型，兼顾推理速度与多模态理解。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,276 | 1,333,574 | 基于 GLM‑5.3 的图文‑到‑文闪存版，支持快速多模态对话。 |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 199 | 0 | 视频‑到‑视频的角色替换与动画编辑工具，虽然下载为零但点赞显示社区兴趣。 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 880 | 484,422 | 图文‑到‑文的视觉实验版，探索更强的视觉特征融合。 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 1

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*