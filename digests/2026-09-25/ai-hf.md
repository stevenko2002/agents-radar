# Hugging Face 热门模型日报 2026-09-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-24 22:16 UTC

---

# Hugging Face 热门模型日报

**日期：2026-09-25｜数据源：Hugging Face Hub 周点赞榜 Top 30**

---

## 1. 今日速览

2026-09-25 周点赞榜由 Qwen 家族主导，**Qwen/Qwen3.8-27B** 以 16,218 点赞、676 万下载断层领先。多模态与生成继续升温：Qwen-Image-2.1、LTX-2.5、YuE2-3B 分别代表图像、视频、音频生成热点。极致量化成为本地部署主线，Ternary-Bonsai 2-bit GGUF、Unsloth Qwen3.8-27B-GGUF、MLX 2-bit 等下载量高。DeepSeek-V4.1-Flash、Qwen3.8-Flash-Next、MiMo V2.6 系列显示头部厂商密集迭代多模态 LLM。社区微调/去审查（uncensored、heretic）和 ComfyUI 打包仍是扩散模型热度放大器。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — [https://huggingface.co/Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)  
  - 作者：Qwen | 点赞：16,218 | 下载：6,765,008 | 任务：image-text-to-text  
  - 说明：本周最强开源多模态 LLM 之一，Qwen3.5/3.8 家族旗舰，点赞与下载双断层。

- **Qwen/Qwen3.8-Flash-Next** — [https://huggingface.co/Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)  
  - 作者：Qwen | 点赞：5,671 | 下载：830,208 | 任务：image-text-to-text  
  - 说明：Qwen 下一代 Flash 多模态模型，主打高效对话与图像理解。

- **deepseek-ai/DeepSeek-V4.1-Flash** — [https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)  
  - 作者：deepseek-ai | 点赞：3,711 | 下载：606,028 | 任务：image-text-to-text  
  - 说明：DeepSeek 新一代多模态 Flash 权重，开放下载后迅速进入头部。

- **XingChen-AGI/Xing4.0-29B-A4B** — [https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)  
  - 作者：XingChen-AGI | 点赞：1,646 | 下载：41,923 | 任务：text-generation  
  - 说明：29B A4B 对话模型，国产新家族，稀疏激活路线受关注。

- **TaichuAI/ZDTaichu5.0-9B** — [https://huggingface.co/TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)  
  - 作者：TaichuAI | 点赞：1,039 | 下载：8,313 | 任务：image-text-to-text  
  - 说明：9B 轻量多模态 VLM，强调空间推理与视觉语言理解。

- **Altworld/Hemmingway-1** — [https://huggingface.co/Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)  
  - 作者：Altworld | 点赞：630 | 下载：4,541 | 任务：text-generation  
  - 说明：基于 Qwen3.5/3.8 文本栈的社区生成模型，写作与对话方向尝鲜。

- **XiaomiMiMo/MiMo-V2.6-Pro-RL** — [https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)  
  - 作者：XiaomiMiMo | 点赞：477 | 下载：9,841 | 任务：text-generation  
  - 说明：小米 MiMo V2.6 强化学习专业版，文本与多模态能力并重。

- **XiaomiMiMo/MiMo-V2.6-Flash-RL** — [https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)  
  - 作者：XiaomiMiMo | 点赞：446 | 下载：18,821 | 任务：text-generation  
  - 说明：MiMo V2.6 轻量 RL 版本，面向高效推理与多模态场景。

- **XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B** — [https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)  
  - 作者：XiaomiMiMo | 点赞：429 | 下载：5,705 | 任务：image-text-to-text  
  - 说明：将 MiMo V2.6 蒸馏到 Qwen 9B 的多模态模型，兼顾轻量与能力。

- **yandex/AliceAI-Foundation-80B-A3B-Base** — [https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)  
  - 作者：yandex | 点赞：320 | 下载：2,678 | 任务：text-generation  
  - 说明：Yandex 80B MoE 基础模型，A3B 激活，代表非中美头部厂商的开源投入。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Lightricks/LTX-2.5** — [https://huggingface.co/Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)  
  - 作者：Lightricks | 点赞：4,999 | 下载：1,637,601 | 任务：image-to-video  
  - 说明：图生视频、文生视频、视频到视频全能模型，视频生成赛道本周最高热度。

- **Qwen/Qwen-Image-2.1** — [https://huggingface.co/Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)  
  - 作者：Qwen | 点赞：2,182 | 下载：37,618 | 任务：text-to-image  
  - 说明：Qwen 官方图像生成/编辑模型，是当前文生图基座热点。

- **m-a-p/YuE2-3B** — [https://huggingface.co/m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)  
  - 作者：m-a-p | 点赞：995 | 下载：23,703 | 任务：text-to-audio  
  - 说明：音乐生成与文本到音频模型，加入符号规划与智能体编辑能力。

- **Comfy-Org/Qwen-Image-2.1** — [https://huggingface.co/Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)  
  - 作者：Comfy-Org | 点赞：679 | 下载：2,858,923 | 任务：N/A  
  - 说明：Qwen-Image-2.1 的 ComfyUI 单文件打包版，工作流即插即用。

- **inclusionAI/Ming-Image-0.1-Design** — [https://huggingface.co/inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)  
  - 作者：inclusionAI | 点赞：223 | 下载：0 | 任务：text-to-image  
  - 说明：面向设计场景的文生图模型，垂直风格化生成值得关注。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **convaiinnovations/laya** — [https://huggingface.co/convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)  
  - 作者：convaiinnovations | 点赞：3,381 | 下载：0 | 任务：text-classification  
  - 说明：主打 system-one 与校准决策的文本分类模型，研究热度极高但尚未转化为下载。

- **harshatheg/Qwen-2.5-1B-RLCD** — [https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)  
  - 作者：harshatheg | 点赞：565 | 下载：0 | 任务：text-generation  
  - 说明：MLX 结构化生成与并行解码实验模型，面向 Apple Silicon 推理优化。

- **AlexWortega/openjev** — [https://huggingface.co/AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)  
  - 作者：AlexWortega | 点赞：554 | 下载：0 | 任务：text-classification  
  - 说明：基于 Qwen3.5 的 NLI 交叉编码器，用于判别式文本理解。

- **netease-youdao/Confucius4-R2T2** — [https://huggingface.co/netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)  
  - 作者：netease-youdao | 点赞：388 | 下载：4,930 | 任务：automatic-speech-recognition  
  - 说明：网易有道 Confucius4 语音识别模型，基于 Qwen3-ASR 架构。

- **Edge0/Audio8-ASR-Infinite** — [https://huggingface.co/Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)  
  - 作者：Edge0 | 点赞：275 | 下载：347 | 任务：automatic-speech-recognition  
  - 说明：流式无限长语音识别，下载量小但长音频方向有潜力。

- **nvidia/Nemotron-3-Diarization** — [https://huggingface.co/nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)  
  - 作者：nvidia | 点赞：263 | 下载：4,282 | 任务：voice-activity-detection  
  - 说明：NVIDIA NeMo 生态的说话人分离与语音活动检测模型。

- **convaiinnovations/laya-multilingual** — [https://huggingface.co/convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)  
  - 作者：convaiinnovations | 点赞：247 | 下载：0 | 任务：text-classification  
  - 说明：laya 的多语言版本，延续校准决策与分类方向。

- **Cactus-Compute/needle3** — [https://huggingface.co/Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)  
  - 作者：Cactus-Compute | 点赞：224 | 下载：69,655 | 任务：text-generation  
  - 说明：端侧工具调用/函数调用小模型，面向 on-device Agent 场景。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — [https://huggingface.co/unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)  
  - 作者：unsloth | 点赞：4,584 | 下载：7,063,930 | 任务：N/A  
  - 说明：Qwen3.8-27B 的 Unsloth GGUF 量化，下载量最高，本地部署首选。

- **prism-ml/Ternary-Bonsai-2-27B-gguf** — [https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)  
  - 作者：prism-ml | 点赞：2,036 | 下载：2,991,233 | 任务：text-generation  
  - 说明：27B 三值 2-bit GGUF，近 300 万下载，极致低比特部署需求强烈。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)  
  - 作者：ISTA-DASLab | 点赞：1,652 | 下载：1,465,429 | 任务：image-text-to-text  
  - 说明：混合精度 GSQ/RCO 量化 GGUF，面向高质量低比特推理。

- **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** — [https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)  
  - 作者：abenzerps | 点赞：1,620 | 下载：575,697 | 任务：text-to-image  
  - 说明：Qwen-Image-2.1 社区无审查 GGUF 版，ComfyUI 生态推动下载。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)  
  - 作者：DavidAU | 点赞：1,149 | 下载：1,502,387 | 任务：image-text-to-text  
  - 说明：超长命名社区微调/去审查/合并版，代表 GGUF 再创作热度。

- **prism-ml/Ternary-Bonsai-2-27B-mlx-2bit** — [https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)  
  - 作者：prism-ml | 点赞：368 | 下载：51,644 | 任务：text-generation  
  - 说明：Ternary-Bonsai 的 MLX 2-bit 版本，面向 Apple Silicon 本地推理。

- **pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF** — [https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)  
  - 作者：pottokao | 点赞：243 | 下载：103,226 | 任务：N/A  
  - 说明：Qwen-Image 文本编码器的量化/去审查 GGUF，服务 ComfyUI 工作流。

---

## 3. 生态信号

本周生态信号非常明确：**Qwen 3.5/3.8 家族正在统治开源权重榜**，从 Qwen3.8-27B、Qwen3.8-Flash-Next 到 Qwen-Image-2.1，再延伸到 Unsloth、ISTA-DASLab、DavidAU 的 GGUF 量化，形成“基座—多模态—图像—量化”的完整链路。开源权重仍是 Hub 趋势榜的核心驱动力，DeepSeek、Yandex、Xiaomi MiMo、NVIDIA 均选择开放下载。量化与微调活动集中在 GGUF、MLX、2-bit ternary、GSQ/RCO 和 uncensored/heretic 再创作上，说明消费级部署与社区二次分发是热度放大器。

---

## 4. 值得探索

1. **Qwen/Qwen3.8-27B** — [https://huggingface.co/Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)  
   本周综合能力与生态最完整的开源多模态 LLM，搭配 Unsloth GGUF 可直接本地部署，适合作为基座评测与微调起点。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — [https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)  
   27B 三值 2-bit 量化代表，适合研究极低比特下模型可用性、推理速度与显存占用边界。

3. **Lightricks/LTX-2.5** — [https://huggingface.co/Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)  
   覆盖图生视频、文生视频与视频到视频，是当前视频生成创作工作流中最值得测试的开放模型之一。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*