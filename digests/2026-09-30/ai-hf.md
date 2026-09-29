# Hugging Face 热门模型日报 2026-09-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-29 22:16 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026 年 9 月 30 日 | 数据来源：Hugging Face Hub 周榜 Top 30**

---

## 📌 今日速览

本周 Hugging Face Hub 被 **Qwen 家族全面霸榜**——Qwen3.8-27B 以 **16,564 赞**断层领跑，其图像生成模型 Qwen-Image-2.1 及各类 GGUF 量化版本占据榜单近半席位。视频生成领域迎来重磅更新，**Lightricks/LTX-2.5** 以 5,549 赞成为视频类目最大亮点。DeepSeek 发布 V4.1-Flash 多模态模型，社区量化活动空前活跃，**2-bit 三值量化**（Ternary-Bonsai）和 **GSQ-RCO 混合精度**方案备受关注。整体生态呈现"**Qwen 为主、多模态为锋、量化普及**"的鲜明格局。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|---------|---------|------|
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,807 | 46,557 | 星辰智农新一代对话大模型，29B 规模专注对话场景，本周社区热度攀升 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 770 | 7,880 | 基于 Qwen3.8 架构的文本生成模型，风格偏向文学化输出 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 600 | 78,135 | 小米 MiMo V2.6 Pro 版本，采用 RL 训练，支持多模态文本生成 |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 211 | 2,143 | 基于 Qwen3.8 的 27B 指令微调模型，面向 vLLM 部署优化 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|---------|---------|------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | **Qwen** | **16,564** | **7,020,239** | **🏆 本周绝对王者！Qwen 最新一代多模态大模型，支持图文混合理解，下载量突破 700 万** |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | **Lightricks** | **5,549** | **1,589,098** | **🎬 视频生成里程碑式更新，支持图生视频、文生视频、视频到视频，单文件扩散模型** |
| [**deepseek-ai/DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | **deepseek-ai** | **3,893** | **690,388** | **DeepSeek 最新多模态 Flash 版本，轻量高效，支持图文联合推理** |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,653 | 64,362 | Qwen 第二代图像生成模型，支持文生图与图像编辑，Diffusers 架构 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,424 | 1,152,523 | Qwen-Image-2.1 的 Uncensored GGUF 量化版，兼容 ComfyUI，下载超百万 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,947 | 11,836 | 太悟大模型 5.0 版本，9B 多模态模型，主打空间推理能力 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,484 | 23,674 | 流式语音识别模型，支持无限长度音频转写，实时 ASR 方案 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 852 | 4,699,098 | ComfyUI 官方适配的 Qwen-Image-2.1 单文件版本，下载量近 470 万 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 422 | 190,649 | Viggle 团队基于 Qwen-Image-2.1 的 Turbo 加速 LoRA 版本 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 514 | 30,931 | NVIDIA Nemotron-3 说话人日志分离模型，支持音频帧级分类 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 468 | 10,482 | 网易有道 Confucius4 语音识别模型，采用 R2T2 架构 |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 347 | 0 | Ming 图像设计模型初版，面向设计场景的文生图工具 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 298 | 251,937 | Unsloth 出品的 Qwen-Image-2.1 GGUF 量化版本 |

---

### 🔧 专用模型（分类 / OCR / 排序 / 决策）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|---------|---------|------|
| [**convaiinnovations/laya**](https://huggingface.co/convaiinnovations/laya) | **convaiinnovations** | **4,498** | **0** | **System-One 校准决策模型，用于文本分类中的可信判断，本周点赞第二高** |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 866 | 30,354 | 基于 Qwen2.5-VL 的 OCR 模型，专注图像文字识别任务 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 522 | 1,910 | 对比学习语言模型，8B 参数，用于文本排序与验证（Verifier/Reranker） |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 290 | 1,725 | Julia 决策模型，多语言文本分类，用于自动化决策场景 |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | **apple** | 265 | 1,956 | **Apple 发布的 9B 视觉语言模型，基于 Qwen3.5 架构，值得关注** |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 310 | 923 | 基于 Gemma4 Unified 的全模态分类模型 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 240 | 29,199 | GLiNER 2.5 决策增强版，命名实体提取 + 意图分类一体化 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 566 | 11,131 |小米 MiMo V2.6 蒸馏版，从更大模型蒸馏至 9B，多模态理解 |

---

### 📦 微调与量化（GGUF / AWQ / 社区精调）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 说明 |
|------|------|---------|---------|------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | **unsloth** | **4,725** | **6,425,606** | **📦 Unsloth 官方 Qwen3.8-27B GGUF 量化版，下载量超 640 万，本地部署首选** |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,265 | 3,581,027 | **🔬 创新性 2-bit 三值量化模型，27B 参数仅需极低显存，下载量破 350 万** |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,826 | 1,678,861 | 采用 GSQ-RCO 混合精度量化的 Qwen3.8，学术机构出品的高质量量化方案 |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,277 | 1,726,231 | 社区重度魔改版 Qwen3.8，融合多轮微调 + Uncensored + MTP 等特性 |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 321 | 168,249 | Qwen-Image-2.1 文本编码器的 Heretic 量化版，FP8 精度，ComfyUI 优化 |

---

## 📊 生态信号

> **Qwen 生态形成"核聚变效应"**。本周 Top 30 中 Qwen 系模型占据 **12 席**（含官方原版、社区量化、微调衍生），覆盖语言、视觉、图像生成三大赛道。Qwen3.8-27B 以单模型 700 万+下载、1.6 万+点赞创下近期纪录，显示开源社区对"统一多模态架构"的强烈需求。

> **量化技术进入"深水区"**。传统 4-bit GGUF 已成标配，本周涌现 **2-bit 三值量化**（Ternary-Bonsai，350 万下载）和 **GSQ-RCO 混合精度**等前沿方案，说明社区在极致压缩方向持续探索。Unsloth 继续扮演"量化分发枢纽"角色，其 GGUF 版本累计下载已破千万级。

> **视频生成拐点确认**。LTX-2.5 单周 159 万下载、5500+ 赞，标志着开源视频生成从"能用"迈向"好用"。同时 DeepSeek V4.1-Flash 的发布表明头部实验室仍在加速多模态竞赛。Apple 入局 VLM（LensVLM-9B）也值得长期关注。

> **开源权重全面占优**。Top 30 中仅个别模型未开放权重，开源生态活跃度远超闭源方案。

---

## ✨ 值得探索

### 1. 🏆 [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
**理由：** 本周全网最热模型，16,564 赞 + 700 万下载的数据足以说明一切。作为 Qwen 最新一代多模态旗舰，它代表了当前开源多模态大模型的最高水平之一，无论是研究还是生产部署都应优先体验。

### 2. 🎬 [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)
**理由：** 开源视频生成领域的重大突破。支持图生视频、文生视频、视频到视频等多种模式，单文件扩散架构便于集成。如果你关注 AI 视频生成方向，这是目前最值得测试的开源方案。

### 3. 🔬 [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
**理由：** 2-bit 三值量化是极具探索价值的前沿方向——将 27B 模型压缩到极致，下载量已破 350 万证明社区认可度。对于资源受限环境下的本地部署研究，这是一个重要的技术参考点。

---

*📝 数据截止：2026-09-30 | 报告由 AI 模型生态分析自动生成*

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*