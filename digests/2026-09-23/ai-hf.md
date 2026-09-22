# Hugging Face 热门模型日报 2026-09-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-22 22:15 UTC

---

# 《Hugging Face 热门模型日报》  
数据日期：2026-09-23

## 今日速览

今日点赞最高的是 **Qwen/Qwen3.8-27B**（16,071 赞、707 万下载），Qwen 家族在 LLM、图像生成和 Flash 实验版上全面开花。**DeepSeek-V4.1-Flash**、**MiniMax-H3**、**Lightricks/LTX-2.5** 等继续推高多模态与视频生成热度。量化与端侧部署仍是主线：三元 2-bit、GGUF、MLX、GSQ-RCO 混合精度集中上榜。社区微调与无审查版本依旧活跃，开源权重的二次开发生态保持强势。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 点赞 16,071 | 下载 7,079,646  
  当前榜单点赞最高的通用多模态对话模型，Qwen3.8 系列核心发布，社区微调与量化几乎都围绕它展开。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 点赞 5,599 | 下载 787,525  
  Qwen 新一代 Flash 实验模型，兼顾图像文本输入与对话，代表高效推理路线。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 点赞 3,608 | 下载 542,014  
  DeepSeek 新一代 Flash 多模态文本生成模型，延续高效率与强推理定位。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — openbmb | 点赞 1,663 | 下载 508,950  
  轻量 2B 语言模型，适合端侧与低资源对话场景。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 点赞 1,367 | 下载 30,627  
  29B 总参数、4B 激活的稀疏对话模型，主打高效推理。

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — TokenRhythm | 点赞 1,008 | 下载 12,574  
  9B 文本生成模型，标签强调 agentic 能力，面向智能体工作流。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — harshatheg | 点赞 543 | 下载 0  
  基于 Qwen 2.5 1B 的结构化生成/并行解码模型，面向 Apple Silicon。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 点赞 492 | 下载 2,745  
  基于 Qwen3.5/3.8 的文本生成微调，偏文学风格与创作场景。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo | 点赞 381 | 下载 985  
  小米 MiMo V2.6 强化学习版，多模态文本生成。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — XiaomiMiMo | 点赞 377 | 下载 2,641  
  MiMo V2.6 轻量 RL 版本，强调高效多模态生成。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo | 点赞 335 | 下载 804  
  从 Qwen 蒸馏的 9B 多模态模型，体现跨家族蒸馏趋势。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — yandex | 点赞 275 | 下载 1,516  
  Yandex 80B-A3B 基础语言模型，MoE 稀疏激活路线。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 点赞 5,596 | 下载 3,766,997  
  视频生成大模型，支持文/图生视频，是今日多模态生成的热门代表。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 点赞 4,781 | 下载 1,630,125  
  图像到视频/视频编辑生成模型，专业视频生成工具链的重要更新。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 点赞 1,786 | 下载 16,242  
  Qwen 图像生成与编辑模型，延续 Qwen-Image 系列生态。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — m-a-p | 点赞 969 | 下载 20,904  
  音乐生成/文本到音频模型，支持符号规划与智能体编辑。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — WarmBloodAban | 点赞 619 | 下载 283,359  
  MiniMax-H3 社区视频生成变体，体现基座模型的二次创作热度。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 点赞 566 | 下载 1,429,925  
  Qwen-Image 2.1 的 ComfyUI 单文件版，方便工作流直接集成。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 点赞 2,507 | 下载 0  
  文本分类模型，主打 system-one 与校准决策，点赞高但下载为 0，属于发布初期热度。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 点赞 483 | 下载 0  
  NLI/cross-encoder 文本分类模型，面向语义匹配与推理判断。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — netease-youdao | 点赞 263 | 下载 2,729  
  基于 Qwen3-ASR 的语音识别模型，代表 ASR 专用模型方向。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 点赞 4,522 | 下载 7,019,401  
  Qwen3.8-27B 的高热度 GGUF 量化版，下载量极高，端侧部署首选之一。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 点赞 1,875 | 下载 2,569,604  
  27B 三元 2-bit GGUF 量化模型，面向 llama.cpp 低比特端侧推理。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 点赞 1,578 | 下载 1,363,176  
  GSQ-RCO 混合精度量化版 Qwen3.8-27B，代表量化研究前沿。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 点赞 1,083 | 下载 1,397,909  
  社区超长命名无审查微调 + GGUF，典型社区魔改风格。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 点赞 1,072 | 下载 182,313  
  Qwen-Image 2.1 无审查 GGUF 版，面向 ComfyUI 图像生成工作流。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — ukisai | 点赞 549 | 下载 17,256  
  社区 Swift 微调版 Qwen3.8-27B，偏高效推理与对话优化。

- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — ukisai | 点赞 363 | 下载 153,942  
  Swift 微调版的 GGUF 量化，方便本地部署。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — prism-ml | 点赞 336 | 下载 43,477  
  MLX 2-bit 三元量化，面向 Apple Silicon 本地推理。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 点赞 241 | 下载 67,988  
  Qwen3.8-Flash-Next 的 GSQ-RCO 量化版，跟进最新基座做混合精度压缩。

---

## 生态信号

Qwen 家族是今日绝对主线：Qwen3.8-27B、Flash-Next、Qwen-Image-2.1 及大量社区 GGUF/微调占据榜单。MiniMax、DeepSeek、Lightricks、小米 MiMo 等继续以开源权重争夺多模态与视频生成心智。量化侧从 GGUF、MLX 到 2-bit 三元、GSQ-RCO 混合精度全面开花，说明端侧部署与低成本推理是核心需求；同时无审查、风格化社区微调活跃，显示开源权重的二次开发生态仍强。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   今日点赞与下载双高，通用多模态对话基座，适合评估 Qwen3.8 系列能力上限，也是社区微调/量化的中心。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   27B 三元 2-bit GGUF，代表低比特量化前沿，适合研究端侧大模型推理质量与速度平衡。

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   视频生成热门模型，下载量超 376 万，适合尝试文/图生视频及多模态内容生成应用。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*