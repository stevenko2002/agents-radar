# Hugging Face 热门模型日报 2026-10-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-02 22:16 UTC

---

# 《Hugging Face 热门模型日报》
**日期：2026-10-03 | 数据来源：Hugging Face Hub 周点赞榜 Top 30**

---

## 一、今日速览

1. **Qwen/Qwen3.8-27B** 以 **16,795 周点赞、6,934,867 下载** 强势登顶，多模态对话与图文理解仍是 Hub 最强需求。
2. 图像/视频生成生态继续爆发：**Lightricks/LTX-2.5** 下载超 **158 万**，**Qwen-Image-2.1** 衍生出官方、ComfyUI、Uncensored、LoRA 等多个热门条目。
3. 量化与社区微调是第二主线：**unsloth、ISTA-DASLab、prism-ml** 的 GGUF、GSQ-RCO、2-bit 三值模型下载量极高，27B 级低比特部署热度上升。
4. 专用模型方面，分类、排序、语音、ASR 均有上榜，**laya、CLM-v0.1、GLiNER2.5-Decide、Audio8-ASR-Infinite** 显示垂直任务活跃。
5. 开源权重仍占绝对主导，Cloudflare、NVIDIA、DeepSeek 等大厂参与发布，但社区微调与量化版本往往获得更高下载。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
  作者：Qwen | 点赞：16,795 | 下载：6,934,867  
  一句话：Qwen 新一代多模态对话旗舰，支持图文输入，榜单点赞与下载双第一。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**  
  作者：deepseek-ai | 点赞：4,015 | 下载：767,871  
  一句话：DeepSeek V4.1 Flash 文本/图文生成模型，主打高效推理，大厂开源权重受关注。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**  
  作者：Altworld | 点赞：821 | 下载：9,566  
  一句话：基于 Qwen3.5 文本生成的写作/对话模型，社区关注其风格化生成能力。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
  作者：Lightricks | 点赞：5,979 | 下载：1,584,129  
  一句话：图像到视频、文本到视频、视频到视频，Lightricks 新一代视频生成模型，下载量极高。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**  
  作者：Qwen | 点赞：2,832 | 下载：81,738  
  一句话：Qwen 官方图像生成/编辑模型，diffusers 生态，带动大量衍生模型。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**  
  作者：abenzerps | 点赞：2,831 | 下载：1,376,248  
  一句话：Qwen-Image-2.1 去审查 GGUF，ComfyUI 可用，下载破百万。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**  
  作者：TaichuAI | 点赞：2,658 | 下载：12,395  
  一句话：多模态 VLM，强调空间推理，国产大模型上榜。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)**  
  作者：Edge0 | 点赞：2,316 | 下载：36,832  
  一句话：流式 ASR 音频模型，面向长音频/无限流识别场景。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)**  
  作者：Alissonerdx | 点赞：1,092 | 下载：187,625  
  一句话：基于 Qwen-Image 的换脸 LoRA，图像到图像编辑。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)**  
  作者：Comfy-Org | 点赞：910 | 下载：5,674,460  
  一句话：ComfyUI 打包版 Qwen-Image-2.1，下载量巨大，工作流生态入口。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**  
  作者：Cloudflare | 点赞：763 | 下载：824  
  一句话：图文到文本模型，Cloudflare 新多模态理解尝试。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**  
  作者：nvidia | 点赞：623 | 下载：44,350  
  一句话：语音活动检测/说话人分离，NVIDIA NeMo 音频模型。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**  
  作者：Viggle | 点赞：534 | 下载：240,660  
  一句话：Qwen-Image 2.1 加速/风格化图像生成，Viggle 社区版本。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**  
  作者：Cloudflare | 点赞：252 | 下载：1,303  
  一句话：轻量版 clef 图文理解模型，面向快速推理。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)**  
  作者：akatz-ai | 点赞：240 | 下载：11,563  
  一句话：MiniMax-H3 角色替换视频 LoRA，视频到视频编辑。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)**  
  作者：FermionResearch | 点赞：150 | 下载：2,126  
  一句话：Apple Silicon MLX 语音转文字模型，基于 Parakeet TDT，端侧 ASR。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)**  
  作者：pablodawson | 点赞：138 | 下载：3,534  
  一句话：MiniMax-H3 360 轨道/首尾帧视频 LoRA，图像文本到视频。

---

### 🔧 专用模型（代码、数学、医疗、嵌入、分类、排序）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**  
  作者：convaiinnovations | 点赞：4,994 | 下载：0  
  一句话：text-classification 模型，主打 system-one 与校准决策，点赞极高但下载为 0，可能处于研究/发布初期。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**  
  作者：Contrastive-LM | 点赞：665 | 下载：2,951  
  一句话：对比学习验证器/重排器，text-ranking，适合 RAG 与 rerank 场景。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)**  
  作者：PSRben | 点赞：374 | 下载：1,279  
  一句话：图像分类模型，带 arXiv 论文标签，计算机视觉研究向。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)**  
  作者：SupersonicLabs | 点赞：364 | 下载：2,909  
  一句话：多语言决策/文本分类模型，面向结构化判断任务。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**  
  作者：fastino | 点赞：324 | 下载：43,826  
  一句话：抽取/意图分类 token-classification，GLiNER 生态新成员。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
  作者：unsloth | 点赞：4,812 | 下载：6,237,305  
  一句话：Qwen3.8-27B 的 GGUF 量化版，unsloth 出品，下载量极高。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
  作者：prism-ml | 点赞：2,357 | 下载：3,869,715  
  一句话：三值/2-bit 量化，llama.cpp 可用，超低比特 27B 部署方案。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**  
  作者：ISTA-DASLab | 点赞：1,902 | 下载：1,678,428  
  一句话：GSQ-RCO 混合精度量化，Qwen3.8 27B 高压缩版本。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**  
  作者：DavidAU | 点赞：1,359 | 下载：2,035,504  
  一句话：社区微调/去审查/编码增强 GGUF，长名堆叠，下载量高。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)**  
  作者：ISTA-DASLab | 点赞：202 / 462（榜单重复两条） | 下载：261,136 / 1,141,018  
  一句话：代码向 GSQ-RCO 量化/剪枝 GGUF；同一模型在榜单第 17、21 条重复出现，已合并展示。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)**  
  作者：orcarouter | 点赞：265 | 下载：9,533  
  一句话：网络安全/去审查方向 GGUF，基于 Qwen3.8 的社区微调。

- **[ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF)**  
  作者：ukisai | 点赞：206 | 下载：284,203  
  一句话：Swift 微调 + GSQ-RCO 量化，Qwen3.8 27B 文本生成。

---

## 三、生态信号

Qwen 家族（Qwen3.8/Qwen3.5、Qwen-Image-2.1）势头最旺，官方模型与社区衍生形成完整生态。开源权重占绝对主导，DeepSeek、NVIDIA、Cloudflare 也发布权重，闭源模型在本榜缺席。量化与微调活动集中在 27B 级：GGUF、GSQ-RCO、2-bit ternary、unsloth 下载量高，说明低比特本地部署需求强劲。视频/图像 LoRA 与 ComfyUI 打包活跃，MiniMax-H3、Qwen-Image 成为热门底座；语音 ASR、分类与重排等专用模型也有稳定关注。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   榜单第一，多模态对话与图文理解能力全面，适合作为 Qwen 新一代能力的评测基线。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   视频生成热度极高，下载超 158 万，适合研究图像/文本到视频及视频编辑工作流。

3. **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**  
   对比学习验证器/重排器，在 RAG、rerank 和验证式推理方向有潜力，值得复现与对比。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*