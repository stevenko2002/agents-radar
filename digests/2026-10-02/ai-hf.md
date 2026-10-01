# Hugging Face 热门模型日报 2026-10-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-01 22:15 UTC

---

# 《Hugging Face 热门模型日报（2026-10-02）》

> 统计口径：按周点赞数排序的 30 个热门模型；分类按主要用途，跨类模型只列一次。

## 一、今日速览

1. 今日榜首由 **Qwen/Qwen3.8-27B** 以 16,721 点赞、6,950,834 下载领跑，Qwen3.8 系列已成为当前 Hugging Face 生态的核心基座。
2. **Lightricks/LTX-2.5** 以 5,844 点赞、1,588,619 下载成为视频生成方向最热模型，Qwen-Image-2.1 及其 ComfyUI、社区量化版本继续占据图像生成榜。
3. 量化与微调活动极其活跃：unsloth、ISTA-DASLab、prism-ml 等围绕 Qwen3.8 推出 GGUF、2-bit、GSQ-RCO 版本，部分量化版下载量达数百万。
4. 专用小模型如 laya、CLM-v0.1-8B、GLiNER2.5-Decide 在分类、排序、抽取方向获得关注，但点赞与下载转化差异明显。
5. 整体榜单几乎全是开放权重、可本地部署模型，闭源 API 模型缺席，社区二次分发与量化仍是主要流量入口。

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,721 | 6,950,834 | Qwen3.8 旗舰 27B，支持图像文本到文本，点赞与下载双榜第一，是当前生态核心基座。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,978 | 748,482 | DeepSeek V4.1 Flash 开放权重，支持文本生成与图像文本理解，下载近 75 万，稳居头部。 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,824 | 48,705 | Xing4.0 29B-A4B 稀疏激活文本生成模型，面向对话与通用生成，下载 4.8 万。 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 804 | 8,996 | 基于 Qwen3.5 文本的生成模型，偏向写作与对话场景，点赞 804。 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 596 | 12,758 | 小米 MiMo 蒸馏 Qwen 9B，小尺寸多模态理解与对话模型，下载 1.27 万。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,844 | 1,588,619 | 图生视频、文生视频、视频到视频生成模型，视频生成方向点赞与下载双高。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,781 | 76,938 | Qwen 官方图像生成与编辑模型，diffusers 生态主力，社区衍生版本众多。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,571 | 12,194 | 紫东太初 5.0 多模态 VLM，强调空间推理与视觉语言理解，点赞 2,571。 |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 1,217 | 31,584 | 基于 Qwen2.5-VL 的 OCR 图像文本模型，垂直 OCR 需求强，下载 3.16 万。 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 889 | 5,376,977 | ComfyUI 打包版 Qwen-Image-2.1 单文件，下载 537.7 万，是工作流用户主要入口。 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 598 | 40,936 | NVIDIA 说话人分离与语音活动检测模型，音频专用方向热门，下载 4.09 万。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 254 | 18 | Cloudflare 发布的 Qwen3.5 图像文本模型，下载极少但点赞不低，处于早期曝光期。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,839 | 0 | 系统一/校准决策文本分类模型，点赞极高但下载为 0，热度与转化严重倒挂，值得观察。 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 623 | 2,720 | 对比学习验证器与重排序模型，面向 RAG、排序与验证任务，点赞 623。 |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 359 | 305 | 视觉图像分类研究模型，带 arXiv 标签，学术研究导向，下载 305。 |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 339 | 2,556 | 多语言决策文本分类模型，适合分类与判定任务，社区关注度中等。 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 280 | 38,386 | GLiNER2.5 抽取与意图分类模型，适合结构化信息抽取，下载 3.84 万。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---:|---:|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,789 | 6,271,224 | Unsloth 出品的 Qwen3.8 27B GGUF，下载 627 万，量化分发量极高。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,698 | 1,303,476 | Qwen-Image-2.1 去审查 GGUF，ComfyUI 用户推动下载超 130 万。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,333 | 3,766,691 | 2-bit 三值量化 27B GGUF，下载 376 万，代表极致压缩与本地推理趋势。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,877 | 1,679,425 | Qwen3.8 27B 的 GSQ-RCO 混合精度 GGUF，下载 167.9 万，是原模型重要本地化版本。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,333 | 1,817,224 | DavidAU 的 Qwen3.8 27B 多风格 uncensored 微调 GGUF，下载 181.7 万，长尾微调代表。 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,077 | 173,323 | 基于 Qwen-Image 的最佳换脸 LoRA，图像编辑社区热门，下载 17.3 万。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 494 | 217,638 | Viggle 加速版 Qwen-Image-2.1，面向快速图像生成，下载 21.8 万。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 427 | 952,084 | Qwen3.8 Flash Next 混合精度量化 GGUF，下载 95.2 万。 |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 248 | 2,728 | 基于 Qwen3.8 的社区文本生成模型，vLLM/safetensors 发布，适合本地推理。 |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 231 | 8,412 | 网络安全主题 Qwen3.8 去审查 GGUF，面向特定长尾需求。 |
| [akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA) | akatz-ai | 218 | 10,031 | MiniMax-H3 角色替换 LoRA，视频编辑方向，下载 1 万。 |
| [ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF) | ukisai | 188 | 231,149 | Qwen3.8 27B 的 GSQ-RCO 量化版，下载 23.1 万。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 177 | 148,142 | 面向代码的 Qwen3.8 Flash Next 量化版，下载 14.8 万。 |

## 三、生态信号

模型家族方面，Qwen3.8 与 Qwen-Image-2.1 是绝对主线，DeepSeek-V4.1-Flash、Xing4.0、MiMo 等构成第二梯队，Lightricks LTX-2.5 让视频生成成为新热点。开源权重占据榜单几乎全部席位，未见闭源 API 模型，说明可本地部署、可二次分发仍是 HF 社区核心诉求。量化与微调活动尤其活跃：GGUF、2-bit ternary、GSQ-RCO、LoRA 和 uncensored 微调形成长尾，unsloth、ISTA-DASLab 的量化版下载量甚至超过原模型，显示“发布即量化”的消费习惯。

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 榜首基座，695 万下载，生态衍生最多，适合评估多模态对话与二次开发。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 视频生成最热模型，158.9 万下载，图生视频/文生视频方向首选。
3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 627 万下载，本地部署最实用；也可对比 ISTA-DASLab 的 GSQ-RCO 量化方案。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*