# Hugging Face 热门模型日报 2026-08-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 22:16 UTC

---

**Hugging Face 热门模型日报（2026‑08‑19）**  

---

## 今日速览  
今天的榜单继续被 **Qwen 系列** 占据榜首，尤其是原始的 Qwen3.8‑27B 及其多模态变体（图像‑文本‑文本）获得超过 11k 喜爱。与此同时，**多模态视频与音频生成**（MiniMax‑H3、LTX‑2.5、MiniMax‑Music3）和 **社区量化/微调**（GGUF、NFP4、FP8 版本）呈爆发式增长，未经审查的 “uncensored” 分支也频繁出现。整体趋势表明，开源权重仍然是主流，但在部署友好型量化和任务特定微调上投入更多资源。

---

## 热门模型  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型名（HF 链接） | 作者 | 点赞 | 下载 | 一句话解释 |
|-------------------|------|------|------|------------|
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,522 | 2,123,462 | 高吞吐的 DeepSeek V4 闪存版，专注于快速文本生成与对话。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,064 | 11,212 | 基于 2.4T token 预训练的 95B 参数 MoE 语言模型，强在长文本理解。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 601 | 30,985 | DeepSeek V4 完整版，提供更强的推理与指令遵循能力。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 321 | 269,372 | NVIDIA 针对推理加速的 30B 轻量版，采用 NVFP4 量化。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 318 | 9,990 | 轻量级中文对话模型，适合边缘设备快速部署。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 406 | 558,767 | 基于 Qwen3.8‑27B 的未经审查 GGUF 版本，兼容 llama.cpp。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,251 | 0 | 提供修复的 Qwen 聊天模板，便于快速构建对话式应用。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型名（HF 链接） | 作者 | 点赞 | 下载 | 一句话解释 |
|-------------------|------|------|------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,099 | 665,513 | 原生图像‑文本‑文本多模态模型，支持视觉理解与生成对话。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,825 | 2,226,898 | Kimi 系列最新多模态版，擅长跨模态特征抽取与压缩张量。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,143 | 2,855,539 | 图像‑文本‑到‑视频生成模型，能够从文字与图像合成连贯短片。 |
| [Lightricks/LTX-2

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*