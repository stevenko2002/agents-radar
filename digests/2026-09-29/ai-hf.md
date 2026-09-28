# Hugging Face 热门模型日报 2026-09-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-28 22:15 UTC

---

# Hugging Face 热门模型日报（2026-09-29）

## 1. 今日速览

本周 Qwen 家族全面霸榜：**Qwen/Qwen3.8-27B** 以 16,494 点赞、684 万下载居首，**Qwen-Image-2.1** 官方及 Comfy-Org、Unsloth、Viggle、pottokao 等衍生量化/微调版本密集上榜。视频生成 **Lightricks/LTX-2.5** 以 5,416 点赞成为生成式多模态亮点；**DeepSeek-V4.1-Flash** 发布即获 3,860 点赞、66.8 万下载。量化与本地部署热度不减，**Ternary-Bonsai-2-27B-gguf** 下载 345 万，**Qwen3.8-27B-GSQ-RCO-GGUF** 下载 165 万。小米 MiMo-V2.6 系列三款入榜；专用分类/重排模型如 **laya** 点赞高但下载为 0，显示关注度与使用量存在错位。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 16,494 | ⬇️ 6,844,348  
  Qwen 旗舰级 27B 多模态对话模型，本周点赞与下载双料头部，代表开源 LLM 最强热度。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 👍 3,860 | ⬇️ 668,537  
  DeepSeek 新旗舰 Flash 版本，支持图文输入与文本生成，发布即冲上趋势榜前列。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 👍 1,799 | ⬇️ 45,834  
  星尘 AGI 的 29B A4B 文本生成/对话模型，主打对话与生成能力。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 👍 763 | ⬇️ 7,478  
  基于 qwen3_5_text 的文本生成模型，社区微调方向的新面孔。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo | 👍 582 | ⬇️ 76,518  
  小米 MiMo V2.6 强化学习版文本生成模型，支持多模态标签，下载量较高。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo | 👍 549 | ⬇️ 9,994  
  小米蒸馏自 Qwen 的 9B 图文理解模型，定位轻量多模态对话。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — XiaomiMiMo | 👍 511 | ⬇️ 28,842  
  小米轻量 Flash 强化学习版，兼顾文本生成与多模态能力。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 5,416 | ⬇️ 1,595,377  
  支持图生视频、文生视频、视频到视频的多任务视频生成模型，本周生成式视频最大热点。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 👍 2,585 | ⬇️ 58,693  
  Qwen 官方图像生成与编辑模型，diffusers 格式，带动大量社区量化与微调衍生。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 👍 1,705 | ⬇️ 11,738  
  多模态视觉语言模型，强调空间推理，适合图文理解与复杂场景任务。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Edge0 | 👍 1,374 | ⬇️ 19,963  
  流式自动语音识别模型，主打无限时长/流式 ASR 场景。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — nvidia | 👍 455 | ⬇️ 26,428  
  NVIDIA 说话人日志/语音活动检测模型，面向音频帧分类与会议场景。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — netease-youdao | 👍 444 | ⬇️ 9,336  
  网易有道基于 qwen3_asr 的语音识别模型，中文 ASR 方向的新选择。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — inclusionAI | 👍 325 | ⬇️ 0  
  面向设计场景的文生图模型，点赞已起量但下载暂为 0，可能处于早期发布阶段。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** — apple | 👍 261 | ⬇️ 1,840  
  Apple 的 9B 视觉语言模型，基于 qwen3_5 架构，偏向图像文本理解。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 4,296 | ⬇️ 0  
  文本分类/校准决策模型，主打 system-one 与 calibrated-decisions；周点赞最高但下载为 0，社区关注度异常突出。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — XingChen-AGI | 👍 758 | ⬇️ 27,904  
  基于 qwen2_5_vl 的 OCR 图文转文本模型，面向文档与图像文字识别。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 👍 618 | ⬇️ 0  
  基于 Qwen3.5 的 NLI 交叉编码器分类模型，适合自然语言推理与判定任务。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM | 👍 464 | ⬇️ 1,271  
  对比学习验证器/重排器，任务为 text-ranking，可用于 RAG 与结果重排。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** — convaiinnovations | 👍 321 | ⬇️ 0  
  laya 的多语言版本，基于 mmbert，延续校准决策与文本分类定位。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — akhilaaa3 | 👍 295 | ⬇️ 577  
  基于 gemma4_unified 的多模态分类模型，兼顾图文理解与文本分类。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — SupersonicLabs | 👍 258 | ⬇️ 1,006  
  多语言决策/文本分类模型，定位决策模型与分类任务。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino | 👍 228 | ⬇️ 24,250  
  GLiNER2 系列的 token 分类/意图抽取模型，适合信息抽取与分类决策。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 2,251 | ⬇️ 1,062,921  
  Qwen-Image-2.1 的去审查 GGUF 量化版，ComfyUI 生态友好，下载破百万。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,233 | ⬇️ 3,457,124  
  27B 三元 2-bit GGUF 量化模型，本地低资源部署热点，下载量极高。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 1,805 | ⬇️ 1,655,818  
  Qwen3.8-27B 的 GSQ-RCO 混合精度量化 GGUF，兼顾压缩率与精度。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 👍 825 | ⬇️ 4,351,753  
  Qwen-Image-2.1 的 ComfyUI 单文件扩散模型，下载 435 万，工作流集成首选。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle | 👍 377 | ⬇️ 175,907  
  Qwen-Image-2.1 的 LoRA 加速微调版，支持文生图与图生图，强调 turbo 推理。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** — pottokao | 👍 311 | ⬇️ 158,806  
  Qwen-Image-2.1 文本编码器的 GGUF/FP8 量化版，面向 ComfyUI 低显存部署。

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** — unsloth | 👍 285 | ⬇️ 220,231  
  Unsloth 出品的 Qwen-Image-2.1 GGUF 量化，主打高效本地图像生成。

---

## 3. 生态信号

Qwen 家族势头最旺，Qwen3.8 与 Qwen-Image-2.1 形成“官方基座 + 社区 GGUF/LoRA/ComfyUI”的完整衍生生态；DeepSeek、XiaomiMiMo、XingChen-AGI 等开源权重模型同样活跃。热门榜几乎全为开源权重，未见闭源 API 模型，说明社区仍偏好可下载、可本地部署的模型。量化活动尤其密集：2-bit ternary、GSQ-RCO 混合精度、Uncensored GGUF 等方案下载量高，llama.cpp/GGUF 与 ComfyUI 是主要分发入口。多模态、视频、ASR 音频模型明显增多；分类/重排类小模型点赞高但下载低，关注度与使用量存在错位。

---

## 4. 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   本周综合热度最高，27B 多模态对话旗舰，适合研究开源 LLM 的对话、图文理解与指令跟随能力。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   点赞 5,416，支持图生视频、文生视频、视频到视频，是当前视频生成方向最值得测试的模型之一。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   2-bit 三元量化 27B 模型，下载 345 万，适合探索极低比特量化、本地部署与推理效率边界。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*