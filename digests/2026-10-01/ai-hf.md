# Hugging Face 热门模型日报 2026-10-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-30 22:16 UTC

---

# Hugging Face 热门模型日报（2026-10-01）

## 1. 今日速览

Qwen 家族继续主导榜单：**Qwen/Qwen3.8-27B** 以 16,650 点赞、7,038,259 下载成为绝对头部，**Qwen-Image-2.1** 则衍生出 Comfy-Org、unsloth、Viggle、无审查 GGUF 等完整生态。视频与音频方向明显升温，**Lightricks/LTX-2.5** 点赞 5,708，**Edge0/Audio8-ASR-Infinite**、**nvidia/Nemotron-3-Diarization** 也进入热门序列。量化与社区微调占据近三分之一席位，GGUF、2-bit ternary、GSQ-RCO 混合精度、LoRA 角色替换/换脸成为本地部署与图像编辑的主要推动力。DeepSeek、小米 MiMo、XingChen-AGI、TaichuAI 等新势力集中在多模态与推理后训练方向，开源权重仍是榜单主流。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜点赞 16,650｜下载 7,038,259  
  Qwen 旗舰多模态对话模型，点赞与下载双榜首，是当前生态最核心的基座之一。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI｜点赞 1,816｜下载 47,613  
  星尘 AGI 的 29B-A4B 文本生成/对话模型，主打高效激活与中文对话能力。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld｜点赞 786｜下载 8,524  
  基于 Qwen3.5 文本栈的生成模型，偏写作/内容创作场景。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai｜点赞 3,937｜下载 721,211  
  DeepSeek 新一代 Flash 模型，兼顾文本生成与图像文本理解，推理效率受关注。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo｜点赞 582｜下载 12,085  
  小米 MiMo V2.6 蒸馏 Qwen 9B 多模态模型，小尺寸高性价比路线。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo｜点赞 613｜下载 80,958  
  小米 MiMo V2.6 Pro 的 RL 后训练版本，面向多模态文本生成与对齐。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Edge0｜点赞 1,820｜下载 26,749  
  流式自动语音识别模型，支持长音频/无限流式转写，音频多模态热度上升。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — XingChen-AGI｜点赞 1,088｜下载 30,383  
  基于 Qwen2.5-VL 的 OCR 多模态模型，面向图像到文本的文档/场景识别。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen｜点赞 2,718｜下载 70,687  
  通义千问官方图像生成/编辑模型，是当前 Qwen-Image 衍生生态的核心。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — nvidia｜点赞 558｜下载 36,386  
  NVIDIA 说话人日志/语音活动检测模型，支持 NeMo 与 GGUF 部署。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜点赞 5,708｜下载 1,602,348  
  图生视频/视频到视频扩散模型，视频生成领域当前最热门发布之一。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI｜点赞 2,322｜下载 12,139  
  太初多模态视觉语言模型，强调空间推理与图文理解。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org｜点赞 867｜下载 5,032,483  
  Qwen-Image-2.1 的 ComfyUI 单文件版本，下载量极高，社区工作流入口。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** — apple｜点赞 277｜下载 2,103  
  Apple 的 9B 视觉语言模型，基于 Qwen3.5，偏端侧/研究型多模态。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — akhilaaa3｜点赞 328｜下载 1,132  
  基于 Gemma4 Unified 的 Omni 实验模型，覆盖图文与文本分类。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — inclusionAI｜点赞 357｜下载 0  
  面向设计场景的文本到图像生成模型，刚发布、下载尚未起量。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations｜点赞 4,673｜下载 0  
  文本分类/校准决策模型，点赞极高但下载为 0，可能处于刚发布或评测阶段。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM｜点赞 572｜下载 2,392  
  8B 对比学习验证器/重排序模型，适合 RAG、检索排序与答案校验。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — SupersonicLabs｜点赞 316｜下载 2,201  
  多语言决策/文本分类模型，偏系统一与校准决策场景。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino｜点赞 259｜下载 34,664  
  GLiNER2.5 信息抽取与意图分类模型，适合结构化抽取和轻量 NLP 流水线。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** — PSRben｜点赞 226｜下载 137  
  图像分类/计算机视觉研究模型，带 arXiv 论文，偏学术探索。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps｜点赞 2,560｜下载 1,232,685  
  Qwen-Image-2.1 无审查 GGUF 量化版，ComfyUI 可直接使用，下载超 123 万。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml｜点赞 2,304｜下载 3,676,692  
  2-bit 三值量化 27B 文本生成模型，llama.cpp 生态代表，本地部署热度极高。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle｜点赞 453｜下载 205,137  
  Qwen-Image-2.1 的 LoRA 加速/图生图微调版本，面向快速图像编辑。

- **[orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)** — orcarouter｜点赞 226｜下载 2,456  
  基于 Qwen3.5/3.8 的 vLLM 量化/优化文本生成模型，偏服务端推理。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab｜点赞 1,856｜下载 1,679,903  
  Qwen3.8-27B 的 GSQ-RCO 混合精度 GGUF 量化版，下载量证明压缩需求强烈。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** — akatz-ai｜点赞 191｜下载 8,078  
  MiniMax-H3 角色替换视频编辑 LoRA，面向视频到视频换角场景。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter｜点赞 192｜下载 7,186  
  无审查、偏网络安全向的 27B GGUF 量化模型，社区垂直微调代表。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx｜点赞 1,055｜下载 168,110  
  基于 Qwen-Image-2.1 的换脸 LoRA/图生图模型，图像编辑社区热度高。

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** — unsloth｜点赞 315｜下载 302,158  
  Unsloth 量化版 Qwen-Image-2.1 GGUF，主打本地低显存图像生成。

---

## 3. 生态信号

Qwen 家族势头最旺，Qwen3.8、Qwen3.5 与 Qwen-Image-2.1 同时覆盖语言、多模态和图像生成，形成基座—微调—量化完整链条。开源权重仍是榜单主流，DeepSeek、小米、NVIDIA、Apple 等也以开放权重或 Flash/蒸馏版本参与竞争。量化活动从传统 GGUF 扩展到 2-bit ternary、GSQ-RCO 混合精度，Unsloth、ISTA-DASLab、prism-ml 推动本地部署门槛继续下降。社区微调集中在图像编辑、换脸、角色替换、无审查和垂直分类；音频/视频多模态与流式 ASR 是值得关注的新增长点。

---

## 4. 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   榜单绝对头部，点赞与下载双高，适合作为多模态对话、Agent 与二次开发的首选基座。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   图生视频/视频到视频方向的高热度扩散模型，点赞 5,708，适合研究视频生成与编辑工作流。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   2-bit 三值量化 27B 模型，下载超 367 万，是本地部署、极限压缩与 llama.cpp 生态的重要样本。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*