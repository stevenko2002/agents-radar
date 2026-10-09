# Hugging Face 热门模型日报 2026-10-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-09 22:15 UTC

---

# Hugging Face 热门模型日报  
**日期：2026-10-10**  
**数据口径：Hugging Face Hub 周点赞排序 Top 30**

---

## 1. 今日速览

1. **Qwen3.8 家族全面霸榜**：`Qwen/Qwen3.8-27B` 以 17,344 周赞、678 万下载位居第一，`Qwen/Qwen3.8-Flash-Next`、`unsloth/Qwen3.8-27B-GGUF` 等衍生版同样进入前列。
2. **多模态与视频生成热度极高**：`Lightricks/LTX-2.5` 获得 7,054 赞，`Qwen-Image-2.1` 系列及社区无审查图像 GGUF 下载量突出。
3. **量化与社区微调占据近半榜单**：GGUF、2-bit/ternary、GSQ-RCO 混合精度、EXL3、abliterated/uncensored 版本大量涌现。
4. **新发布值得关注**：`google/embeddinggemma-2`、`Cloudflare/clef`、`deepseek-ai/DeepSeek-V4.1-Flash` 分别代表嵌入、多模态助手与新一代旗舰方向。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**  
  作者：Cloudflare | 点赞：1,939 | 下载：12,066  
  一句话：基于 Qwen3.5 的多模态图文对话模型，Cloudflare 入局多模态助手的标志性发布。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**  
  作者：Aleph-Alpha | 点赞：842 | 下载：8,474  
  一句话：面向推理与 MoE 架构的文本生成模型，欧洲开源 LLM 的新代表。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**  
  作者：Cloudflare | 点赞：713 | 下载：18,971  
  一句话：clef 的轻量快速版，主打低延迟图文理解与对话。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
  作者：Qwen | 点赞：17,344 | 下载：6,783,589  
  一句话：本期榜首，Qwen3.8 旗舰多模态对话模型，点赞与下载双高。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**  
  作者：LiquidAI | 点赞：234 | 下载：7,302  
  一句话：Liquid 推出的轻量图文理解模型，适合端侧与低算力场景。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**  
  作者：Qwen | 点赞：6,058 | 下载：1,751,752  
  一句话：Qwen3.8 的高效 Flash 系列，兼顾多模态理解与生成速度。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**  
  作者：deepseek-ai | 点赞：4,292 | 下载：1,316,468  
  一句话：DeepSeek V4.1 的 Flash 版本，继续强化文本与图文混合任务。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**  
  作者：abenzerps | 点赞：3,762 | 下载：2,013,268  
  一句话：Qwen-Image-2.1 的无审查 GGUF 图像生成版，ComfyUI 社区下载量极高。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
  作者：Lightricks | 点赞：7,054 | 下载：1,687,531  
  一句话：支持图生视频、文生视频与视频生视频，本期最强视频生成模型之一。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)**  
  作者：canberkkkkkk | 点赞：320 | 下载：12,118  
  一句话：土耳其语 TTS 模型，专注语音合成与轻量化部署。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**  
  作者：Qwen | 点赞：273 | 下载：0  
  一句话：Qwen-Image-2.1 的 Turbo 加速版，刚发布尚未积累下载。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**  
  作者：Cactus-Compute | 点赞：266 | 下载：5,558  
  一句话：面向端侧设备的语音识别模型，主打 on-device 低延迟转写。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**  
  作者：Qwen | 点赞：3,152 | 下载：122,311  
  一句话：Qwen 官方图像生成与编辑模型，diffusers 生态核心发布。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)**  
  作者：Alissonerdx | 点赞：1,338 | 下载：245,270  
  一句话：基于 Qwen-Image 的 LoRA 换脸模型，图像编辑社区热度高。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**  
  作者：google | 点赞：1,337 | 下载：29,185  
  一句话：Google 新一代 EmbeddingGemma 嵌入模型，面向检索与特征提取。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**  
  作者：convaiinnovations | 点赞：5,424 | 下载：41,468  
  一句话：主打 system-one 与校准决策的文本分类模型，研究价值突出。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)**  
  作者：unsloth | 点赞：214 | 下载：41,582  
  一句话：EmbeddingGemma-2 的 GGUF 量化版，降低嵌入模型本地部署门槛。

- **[Phocinae/Phocinae-Largha-150M-v1](https://huggingface.co/Phocinae/Phocinae-Largha-150M-v1)**  
  作者：Phocinae | 点赞：227 | 下载：89  
  一句话：基于 ModernBERT 的 150M 文本分类小模型，专注决策与填充任务。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**  
  作者：jialinyyzz | 点赞：741 | 下载：29,470  
  一句话：基于 Gemma4 Unified 的文本人性化微调模型，GGUF 便于本地运行。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)**  
  作者：Venastine-Research | 点赞：673 | 下载：38,740  
  一句话：Xing4.0 29B A4B 的 GGUF 量化版，面向高效文本生成。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**  
  作者：ISTA-DASLab | 点赞：744 | 下载：3,559,321  
  一句话：GSQ-RCO 混合精度量化版，下载量说明社区对高质量量化的强需求。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**  
  作者：ConwayResearch | 点赞：172 | 下载：15,274  
  一句话：2-bit GGUF 工具调用模型，主打极低资源下的 function calling。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**  
  作者：DavidAU | 点赞：1,605 | 下载：2,000,216  
  一句话：Qwen3.8-27B 的极端社区微调与无审查 GGUF 版本，下载量突破 200 万。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**  
  作者：ISTA-DASLab | 点赞：2,095 | 下载：1,490,741  
  一句话：Qwen3.8-27B 的 GSQ-RCO 量化版，兼顾精度与显存占用。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)**  
  作者：orcarouter | 点赞：485 | 下载：21,406  
  一句话：面向网络安全场景的无审查 27B GGUF 模型。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
  作者：prism-ml | 点赞：2,568 | 下载：4,389,072  
  一句话：三元/2-bit 量化 27B 模型，以极高下载量验证超低比特量化热度。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)**  
  作者：Infatoshi | 点赞：309 | 下载：2,277  
  一句话：GLM-5.3 的 EXL3 3.0bpw 无审查量化版，面向 ExLlamaV3 推理。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**  
  作者：orcarouter | 点赞：699 | 下载：499,273  
  一句话：Qwen3.8-Flash-Next 的 abliterated 无审查 GGUF 版，社区下载强劲。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**  
  作者：SC117 | 点赞：171 | 下载：684,487  
  一句话：GSQ-RCO 量化叠加 abliterated 微调，面向无审查本地推理。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
  作者：unsloth | 点赞：4,978 | 下载：6,452,782  
  一句话：Qwen3.8-27B 官方基座的 unsloth GGUF 量化版，下载量仅次于原模型。

---

## 3. 生态信号

本期榜单显示 **Qwen 3.8 / 3.5 与 Qwen-Image 家族势头最强**，从旗舰 27B、Flash-Next 到图像生成与编辑，几乎覆盖所有热门任务。开源权重继续主导趋势榜，DeepSeek、Google、Lightricks、Cloudflare 等均以开放权重参与竞争，未见闭源模型进入 Top 30。量化活动极其活跃：GGUF 仍是社区分发默认格式，2-bit、ternary、GSQ-RCO、EXL3 等超低比特方案下载量惊人；同时 abliterated/uncensored 微调形成稳定需求。多模态 image-text-to-text 已成为新模型默认入口，嵌入模型也出现专门量化版，说明 RAG 与本地检索仍在扩张。

---

## 4. 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   理由：本期点赞与下载双料第一，是观察 2026 年开源多模态 LLM 能力边界的最佳样本。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
   理由：图/文/视频到视频全覆盖，7,054 赞说明视频生成正成为下一阶段竞争焦点。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**  
   理由：三元/2-bit 量化下载超 438 万，适合研究超低比特量化的真实可用性与推理成本。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*