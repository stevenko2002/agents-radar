# Hugging Face 热门模型日报 2026-09-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-20 22:15 UTC

---

# Hugging Face 热门模型日报

**日期：2026-09-21｜数据源：Hugging Face Hub 周点赞榜 Top 30**

---

## 一、今日速览

1. **Qwen 3.8 家族全面霸榜**：`Qwen/Qwen3.8-27B` 以 15,858 点赞、733 万下载居首，Flash-Next、Swift 微调、unsloth/ISTA GGUF 等衍生版本密集上榜。  
2. **DeepSeek 与 GLM 紧追头部**：`DeepSeek-V4.1-Flash`、`GLM-5.3-Flash` 继续巩固开源多模态/对话模型第一梯队。  
3. **视频生成升温明显**：MiniMax-H3、LTX-2.5 及社区版 Minimax-h3_Singularity 均进入榜单，图生视频/文生视频需求强劲。  
4. **量化与端侧部署活跃**：Ternary-Bonsai 2-bit、GGUF、FP8、GSQ-RCO、MLX 等关键词密集，社区在压缩与本地推理上持续投入。  
5. **经典模型长尾仍强**：`Llama-3.1-8B-Instruct` 以 7,767 赞、591 万下载保持热度。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai｜👍 3,423｜⬇️ 496,684  
  DeepSeek 新一代 Flash 多模态对话模型，支持 image-text-to-text，是本周头部开源大模型之一。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI｜👍 867｜⬇️ 12,617  
  29B A4B 激活参数对话模型，面向文本生成与对话场景，参数效率较高。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜👍 15,858｜⬇️ 7,331,932  
  Qwen 3.8 旗舰 27B 多模态对话模型，本周点赞与下载双料冠军，社区衍生生态围绕其爆发。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — ukisai｜👍 509｜⬇️ 10,962  
  基于 Qwen3.8 的 Swift 优化/微调版本，主打更高效的多模态推理。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen｜👍 5,489｜⬇️ 761,112  
  Qwen 3.8 系列轻量高速版本，适合高吞吐多模态对话与生成场景。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — openbmb｜👍 1,624｜⬇️ 420,622  
  面壁 MiniCPM5 2B 小模型，文本生成表现突出，是小尺寸模型中的热门选择。

- **[meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)** — meta-llama｜👍 7,767｜⬇️ 5,910,102  
  Meta 经典 8B 指令模型，虽非新发布，仍以高点赞和下载保持长尾热度。

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — TokenRhythm｜👍 978｜⬇️ 11,913  
  9B 文本生成/Agentic 模型，基于 Qwen3.5 文本底座，面向智能体场景。

- **[internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview)** — internlm｜👍 207｜⬇️ 895  
  上海 AI Lab 预览模型，标签含 `glm_moe_dsa` 与 arXiv 论文，疑似 MoE 架构新作。

- **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — Edge0｜👍 3,548｜⬇️ 76,669  
  35B MoE、A3B 激活的端侧推理模型，MLX 格式，主打 Apple Silicon 边缘部署。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — zai-org｜👍 2,497｜⬇️ 3,109,084  
  智谱 GLM-5.3 Flash 多模态对话模型，下载量位居本周前列。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen｜👍 683｜⬇️ 183  
  Qwen 图像生成/编辑模型，diffusers 格式，支持图像生成与编辑。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — m-a-p｜👍 912｜⬇️ 17,403  
  音乐生成模型，支持符号规划与 agentic 编辑，是音频生成方向的新作。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜👍 4,545｜⬇️ 1,609,559  
  Lightricks 视频生成模型，支持图生视频、文生视频、视频生视频，下载超 160 万。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org｜👍 248｜⬇️ 120  
  Qwen-Image-2.1 的 ComfyUI 单文件版本，方便工作流直接集成。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI｜👍 5,524｜⬇️ 4,057,444  
  MiniMax 视频生成大模型，支持文生视频/图生视频，本周视频赛道头部。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI｜👍 210｜⬇️ 3,750  
  紫东太初 5.0 多模态 VLM，强调空间推理，适合视觉语言任务。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — WarmBloodAban｜👍 568｜⬇️ 242,751  
  社区基于 MiniMax-H3 的视频生成衍生版，覆盖文/图/视频到视频。

- **[Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4)** — Mothersuperior｜👍 159｜⬇️ 0  
  面向 YuE2 音频生成的 RealAudio tokenizer/LoRA，服务音乐生成流程。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations｜👍 1,043｜⬇️ 0  
  文本分类/校准决策模型，标签含 `system-one`、`calibrated-decisions`，偏研究向。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — harshatheg｜👍 475｜⬇️ 0  
  基于 Qwen-2.5-1B 的 MLX 结构化生成/并行解码模型，面向 Apple Silicon 约束解码。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega｜👍 308｜⬇️ 0  
  NLI 交叉编码器，基于 Qwen3.5，适合文本分类与语义匹配。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml｜👍 1,477｜⬇️ 1,908,396  
  三元 2-bit 量化 27B 模型，GGUF 格式，下载近 191 万，是极端压缩代表。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab｜👍 1,478｜⬇️ 1,217,204  
  Qwen3.8-27B 的 GSQ-RCO 混合精度 GGUF 量化版，下载超 121 万。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth｜👍 4,427｜⬇️ 6,941,478  
  Unsloth 出品的 Qwen3.8-27B GGUF 量化，本周下载量最高之一。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜👍 1,000｜⬇️ 1,301,417  
  DavidAU 社区微调/去审查 GGUF 版本，融合多种特性并支持 MTP。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — prism-ml｜👍 281｜⬇️ 30,043  
  Ternary-Bonsai 2-bit 的 MLX 版本，面向 Apple Silicon 本地推理。

- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — ukisai｜👍 327｜⬇️ 136,668  
  Swift-Qwen3.8-27B 的 GGUF 量化版，强调高效思考与本地部署。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab｜👍 188｜⬇️ 42,965  
  Qwen3.8-Flash-Next 的 GSQ-RCO 混合精度 GGUF 版，延续 ISTA-DASLab 量化路线。

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)** — dealignai｜👍 324｜⬇️ 34,688  
  DeepSeek-V4.1-Flash 的去审查 FP8 量化版，面向低精度部署与开放内容生成。

---

## 三、生态信号

Qwen 3.8/3.5 已成为本周最强家族：从 27B 基座、Flash-Next 到 Swift 微调、unsloth/ISTA GGUF、ComfyUI 单文件，形成完整衍生链；DeepSeek V4.1 Flash 与 GLM-5.3 Flash 紧随其后。视频生成由 MiniMax-H3 和 LTX-2.5 领跑，音频端 YuE2 继续迭代。开源权重仍是绝对主流，社区微调与去审查版本活跃。量化侧，三元 2-bit、GGUF、FP8、GSQ-RCO 混合精度、MLX 并行解码同时升温，端侧与 Apple Silicon 部署成为明确方向。Llama-3.1 等经典模型仍靠长尾流量占据榜单。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   本周双料冠军，多模态对话与社区生态最完整，适合作为基座模型评估与二次开发。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   视频生成头部模型，下载超 405 万，支持文生视频/图生视频，应用与复现价值高。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   2-bit 三元量化 + GGUF，下载近 191 万，适合研究极限压缩、低比特推理与本地部署。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*