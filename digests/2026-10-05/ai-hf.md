# Hugging Face 热门模型日报 2026-10-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-04 22:15 UTC

---

# Hugging Face 热门模型日报（2026-10-05）

## 今日速览

今日 HF 趋势由 Qwen3.8 家族主导：**Qwen/Qwen3.8-27B** 以 16,933 赞、682 万下载居首，**Qwen3.8-Flash-Next** 与多款 GSQ-RCO 量化版同步上榜。视频生成侧 **Lightricks/LTX-2.5** 以 6,292 赞成为最高赞非 Qwen 模型，image-to-video 热度延续。量化与社区微调依旧活跃，GGUF、EXL3、2-bit ternary 占据近三分之一榜单，uncensored 与 LoRA 角色/人脸编辑继续放量。专用小模型在分类、重排、说话人分离和 ASR 上保持稳定关注。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare｜👍 1,191｜⬇️ 4,214  
  Cloudflare 基于 qwen3_5 的多模态理解模型，因企业级图像-文本理解与 clef 新系列上榜。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare｜👍 423｜⬇️ 6,372  
  clef 的轻量快速版，主打低延迟多模态理解，受同系列热度带动。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha｜👍 385｜⬇️ 1,135  
  推理型 MoE 文本生成模型，支持 vllm 部署，因欧洲开源推理模型关注度上升。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜👍 16,933｜⬇️ 6,821,761  
  旗舰级多模态对话模型，全榜点赞与下载双料第一，是本周最核心的基座模型。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI｜👍 2,859｜⬇️ 12,638  
  9B 多模态 VLM，强调空间推理，因国产多模态新作受到关注。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai｜👍 4,092｜⬇️ 798,422  
  DeepSeek 轻量多模态对话模型，兼顾文本与图像理解，新版发布带动下载。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen｜👍 5,894｜⬇️ 1,480,842  
  Qwen 新一代 Flash 多模态模型，主打高效对话与部署友好。

- **[NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash)** — NaiveAI｜👍 165｜⬇️ 1,920  
  MoE 文本生成模型，强调代码与长上下文，新实验室轻量模型试水。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜👍 6,292｜⬇️ 1,626,951  
  支持图/文/视频到视频生成的扩散模型，本周视频生成最高赞。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen｜👍 2,941｜⬇️ 90,003  
  Qwen 文生图与图像编辑模型，是 Qwen 图像生成主线的新版本。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps｜👍 3,120｜⬇️ 1,553,744  
  去审查版 Qwen-Image GGUF，ComfyUI 友好，下载量极高。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle｜👍 586｜⬇️ 272,896  
  基于 Qwen-Image 2.1 的 turbo/LoRA 加速版，适合快速出图与工作流集成。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx｜👍 1,177｜⬇️ 203,086  
  Qwen-Image 人脸交换 LoRA，因图像编辑与换脸需求持续升温。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** — akatz-ai｜👍 288｜⬇️ 15,800  
  MiniMax-H3 角色替换视频 LoRA，面向视频编辑与角色一致性。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** — pablodawson｜👍 183｜⬇️ 5,742  
  首尾帧与 360 环绕视频 LoRA，服务运镜与视频生成控制。

---

### 🔧 专用模型（代码、数学、医疗、嵌入、分类、语音）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations｜👍 5,158｜⬇️ 3,752  
  文本分类与校准决策模型，system-one 定位，因高点赞进入前列。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** — PSRben｜👍 402｜⬇️ 1,516  
  图像分类模型，带 arXiv 论文标签，适合视觉研究复现。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM｜👍 711｜⬇️ 3,445  
  对比学习 verifier/reranker，面向文本排序与检索增强。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — nvidia｜👍 671｜⬇️ 53,014  
  NVIDIA 说话人分离与语音活动检测模型，音频理解方向代表。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — SupersonicLabs｜👍 413｜⬇️ 3,657  
  多语言文本分类/决策模型，适合轻量判别式任务。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** — FermionResearch｜👍 200｜⬇️ 2,635  
  Apple Silicon MLX ASR 模型，主打本地语音转文字。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino｜👍 364｜⬇️ 53,625  
  信息抽取与意图分类 token 分类模型，GLiNER 系列延续。

---

### 📦 微调与量化（社区微调、GGUF、AWQ、EXL3）

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research｜👍 267｜⬇️ 14,361  
  Xing4.0 MoE 的 GGUF 量化版，面向本地文本生成。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter｜👍 360｜⬇️ 14,195  
  去审查网络安全向 GGUF，基于 Qwen3.8/3.5 生态。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab｜👍 552｜⬇️ 1,886,975  
  Qwen3.8-Flash-Next 的 GSQ-RCO 混合精度量化，下载量近 190 万。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml｜👍 2,414｜⬇️ 4,045,810  
  2-bit ternary 量化模型，下载超 400 万，低比特推理代表。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** — ISTA-DASLab｜👍 260｜⬇️ 351,230  
  代码向 GSQ-RCO 量化版，兼顾剪枝与混合精度。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab｜👍 1,958｜⬇️ 1,636,747  
  Qwen3.8-27B 的 GSQ-RCO 量化，旗舰模型的本地化压缩方案。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** — Infatoshi｜👍 209｜⬇️ 946  
  GLM-5.3 去审查 EXL3 3.0bpw 量化，面向 exllamav3 推理。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜👍 1,417｜⬇️ 2,164,143  
  社区高强度融合微调与 GGUF 量化，下载超 216 万，体现“命名即卖点”的微调文化。

---

## 生态信号

模型家族方面，**Qwen3.8/3.5 系是绝对主线**，覆盖旗舰多模态、Flash 轻量版与大量社区量化；DeepSeek V4.1 Flash、GLM-5.3、MiniMax-H3 形成第二梯队。开源权重仍是热榜主流，闭源模型缺席，说明社区围绕可本地部署与二次分发构建生态。量化活动最值得注意：GGUF 之外，**GSQ-RCO 混合精度、EXL3 3.0bpw、2-bit ternary** 同时出现，压缩从“能跑”走向“高保真低比特”。微调侧以 uncensored、角色替换、人脸交换和视频 LoRA 为主，ComfyUI、llama.cpp、MLX 等部署标签密集。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   全榜最高赞、最高下载的旗舰多模态对话模型，适合作为研究基线、评测基准与二次微调起点。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   本周视频生成最高赞模型，支持图/文/视频到视频，适合研究视频一致性、运动控制与生成工作流。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   2-bit ternary 量化且下载超 400 万，是观察低比特推理、本地部署与量化质量权衡的极佳样本。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*