# Hugging Face 热门模型日报 2026-10-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-10 22:15 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-11｜按周点赞数整理**

---

## 1. 今日速览

Qwen 家族继续主导热度榜：**Qwen/Qwen3.8-27B** 以 17,420 点赞、676 万下载稳居榜首，**Qwen3.8-Flash-Next** 与 **DeepSeek-V4.1-Flash** 紧随其后。视频生成领域，**Lightricks/LTX-2.5** 以 7,165 点赞成为本周最高赞生成模型；图像生成方面，**Qwen-Image-2.1** 系列及去审查 GGUF 版本下载强劲。量化与社区微调仍是下载主力，**unsloth/Qwen3.8-27B-GGUF** 下载超 644 万，**prism-ml/Ternary-Bonsai-2-27B-gguf** 以三值/2-bit 量化获得 445 万下载。嵌入模型 **google/embeddinggemma-2** 及其 GGUF 版本同时上榜，显示 RAG 与多模态嵌入需求上升。uncensored、abliterated 与混合精度量化活动非常活跃。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 作者：Qwen｜点赞：17,420｜下载：6,768,654  
  Qwen3.5 架构旗舰视觉语言对话模型，本周点赞与下载双高，是当前开源多模态 LLM 的核心基线。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 作者：Qwen｜点赞：6,077｜下载：1,798,393  
  Qwen 新一代 Flash 实验模型，主打高效多模态对话与推理，延续 Qwen4_exp 路线。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — 作者：deepseek-ai｜点赞：4,321｜下载：1,355,278  
  DeepSeek V4.1 轻量 Flash 版本，支持文本与图像理解，开源权重关注度极高。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — 作者：Cloudflare｜点赞：1,985｜下载：13,579  
  Cloudflare 基于 Qwen3.5 的视觉语言模型，面向图像-文本到文本对话，企业级开源新玩家。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — 作者：jialinyyzz｜点赞：944｜下载：33,664  
  基于 Gemma4_unified 的社区文本生成/人性化模型，提供 GGUF 与 safetensors 版本。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — 作者：Aleph-Alpha｜点赞：859｜下载：10,496  
  推理型 MoE 文本生成模型，支持 vLLM，是欧洲开源 LLM 的新代表作。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — 作者：Cloudflare｜点赞：731｜下载：20,670  
  clef 的轻量快速版，面向低延迟图像-文本对话场景。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — 作者：LiquidAI｜点赞：261｜下载：9,088  
  LiquidAI 的 3B 视觉语言模型，小尺寸多模态，适合端侧与边缘部署探索。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 作者：Lightricks｜点赞：7,165｜下载：1,720,888  
  支持图/文/视频到视频的扩散生成模型，本周点赞最高，视频生成与编辑领域最热发布。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — 作者：Qwen｜点赞：3,187｜下载：128,839  
  Qwen 图像生成与编辑旗舰，diffusers 生态原生支持，图像创作社区关注度高。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — 作者：Alissonerdx｜点赞：1,353｜下载：248,475  
  基于 Qwen-Image 的人脸交换 LoRA，图像到图像应用热门，下载量可观。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — 作者：Qwen｜点赞：439｜下载：2,138  
  Qwen-Image-2.1 的加速版本，面向少步快速图像生成与编辑。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — 作者：canberkkkkkk｜点赞：333｜下载：15,710  
  土耳其语文本到语音 TTS 模型，语音合成方向的小众但活跃发布。

- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — 作者：FrancisRing｜点赞：145｜下载：0  
  联合视频-音频生成的视频扩散 Transformer，下载为 0 但概念前沿，值得研究。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 作者：google｜点赞：1,493｜下载：45,605  
  Google EmbeddingGemma 第二代嵌入模型，支持文本与多模态嵌入，RAG 场景核心候选。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — 作者：convaiinnovations｜点赞：5,460｜下载：42,936  
  System-one 校准决策文本分类模型，点赞极高，面向可靠决策与分类任务。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — 作者：Cactus-Compute｜点赞：304｜下载：12,816  
  端侧自动语音识别模型，Cactus Needle 系列，主打设备端语音转文本。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — 作者：unsloth｜点赞：226｜下载：50,551  
  EmbeddingGemma-2 的 GGUF 量化版，便于本地部署与轻量嵌入检索。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 作者：unsloth｜点赞：5,000｜下载：6,449,020  
  Qwen3.8-27B 官方底座的高效 GGUF 量化，下载量榜首，本地推理首选。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — 作者：abenzerps｜点赞：3,865｜下载：2,096,562  
  Qwen-Image-2.1 去审查 GGUF 版本，ComfyUI 生态友好，下载超 200 万。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 作者：prism-ml｜点赞：2,591｜下载：4,457,576  
  三值/2-bit 量化 27B 模型，llama.cpp 超高效推理，低比特量化趋势代表。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 作者：ISTA-DASLab｜点赞：2,115｜下载：1,484,655  
  采用 GSQ-RCO 混合精度量化的 Qwen3.8-27B，兼顾压缩率与精度。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — 作者：DavidAU｜点赞：1,632｜下载：1,960,274  
  社区大杂烩式 uncensored 微调 GGUF，融合多模型与代码能力，下载近 200 万。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 作者：ISTA-DASLab｜点赞：767｜下载：3,922,328  
  Flash-Next 的 GSQ-RCO 混合精度量化，下载量极高，适合大模型本地压缩部署。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — 作者：orcarouter｜点赞：726｜下载：520,450  
  Qwen3.8-Flash-Next 的 abliterated/uncensored GGUF 版本，社区去限制需求旺盛。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — 作者：Venastine-Research｜点赞：679｜下载：45,199  
  Xing4.0 29B A4B MoE 的 GGUF 量化，面向高效文本生成。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — 作者：ConwayResearch｜点赞：265｜下载：59,191  
  2-bit llama.cpp 量化模型，强调工具调用与函数调用能力。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** — 作者：AtomicChat｜点赞：189｜下载：7,314  
  Qwen-Image-2.1-Turbo 去审查 GGUF，面向 ComfyUI 图像生成工作流。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — 作者：SC117｜点赞：186｜下载：765,376  
  Flash-Next 的 GSQ-RCO 量化 + abliterated 组合，下载量远超点赞。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — 作者：nerkyor｜点赞：185｜下载：42,336  
  超长命名社区微调，融合代码、推理与多模型蒸馏痕迹，代表社区“缝合”式创新。

---

## 3. 生态信号

Qwen3.8 家族是绝对主线，27B、Flash-Next 及其 GGUF、GSQ-RCO、abliterated 变体占据榜单近半；DeepSeek-V4.1、Cloudflare clef、LiquidAI d1 和 Aleph-Alpha Kolibri 则提供多样化开源选择。开源权重仍主导热度，闭源模型主要通过 API 影响生态。量化活动极其活跃：unsloth、ISTA-DASLab、prism-ml 推动 GGUF、2-bit、三值、混合精度落地；社区微调围绕 uncensored、abliterated、角色与代码融合展开。视频生成 LTX-2.5 与图像生成 Qwen-Image-2.1 显示多模态创作需求强劲，EmbeddingGemma-2 也因 RAG 需求上榜。

---

## 4. 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   当前开源多模态对话综合能力最强的基线之一，下载超 676 万，适合评测、二次微调与产品原型。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   三值/2-bit 量化 27B，下载超 445 万，是研究超低比特推理、CPU/llama.cpp 本地部署的绝佳样本。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   本周点赞最高的视频生成模型，支持图/文/视频到视频，适合视频编辑、生成与多模态创作研究。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*