# Hugging Face 热门模型日报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-11 22:15 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-12 · 数据范围：本周点赞 Top 30**

---

## 一、今日速览

Qwen 系本周全面爆发：Qwen3.8-27B 以 17,503 赞、684 万下载领跑全场，Qwen-Image-2.1 系列与其衍生量化版霸榜图像生成赛道。视频生成领域 LTX-2.5 单周 7,305 赞、173 万下载，成为多媒体方向最大黑马。社区量化生态持续繁荣，ISTA-DASLab 的 GSQ/RCO 量化与 unsloth 的 GGUF 版本下载量均达数百万级。此外，Meta 的 facebook/sam3（分割）与 deepseek-ai/DeepSeek-V4.1-Flash 也展示了头部实验室在垂直能力上的持续投入。

---

## 二、热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 17,503 赞 | 6,843,108 下载
  本周绝对王者，Qwen3.8 系列旗舰多模态对话模型，官方权重与海量社区生态双轮驱动。
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 6,112 赞 | 1,870,465 下载
  轻量高速版（qwen4_exp 标签暗示下一代实验架构），适合低延迟部署。
- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 887 赞 | 12,550 下载
  欧洲厂商的 MoE 推理模型，vLLM 原生支持，代表欧洲开源力量回归。
- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 689 赞 | 48,389 下载
  29B 总参/4B 激活的稀疏模型 GGUF 版，主打端侧性价比。
- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch | 320 赞 | 108,900 下载
  2-bit 极致量化 + 原生工具调用，面向 llama.cpp 极限压缩场景。
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 2,629 赞 | 4,549,911 下载
  三值化（ternary）27B 模型，2-bit 下实现近满血质量，下载量惊人。

### 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 7,305 赞 | 1,726,683 下载
  视频/图像转视频全能力模型，单文件扩散架构，本周视频生成赛道第一。
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 3,225 赞 | 136,103 下载
  图像生成 + 编辑双能力官方版。
- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen | 534 赞 | 4,702 下载
  Turbo 加速版，刚发布即上榜，潜力待释放。
- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 4,058 赞 | 2,081,596 下载
  SAM3 分割模型，支持视频分割（sam3_video），CV 基础设施级工具。
- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** / **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 2,025 / 754 赞
  Cloudflare 基于 Qwen3.5 的视觉理解模型，CDN 巨头入局开源多模态值得注意。
- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI | 296 赞 | 10,843 下载
  3B 级 LFM2-VL 视觉语言模型，边缘多模态代表。
- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | 334 赞 | 16,434 下载
  端侧语音识别，on-device 是其核心卖点。
- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | 356 赞 | 18,079 下载
  土耳其语 TTS，区域语言语音合成缺口被社区填补。
- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing | 160 赞 | 0 下载
  视频扩散 Transformer，支持音视频联合生成，刚发布。

### 🔧 专用模型

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — Google | 1,684 赞 | 98,829 下载
  Google 新一代多模态嵌入模型，RAG 基建首选。
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 5,489 赞 | 44,088 下载
  文本分类模型，主打"校准决策"（calibrated decisions），非 LLM 类模型的点赞奇迹。
- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)** — speridlabs | 147 赞 | 393 下载
  像素空间扩散小模型，学术实验性质，刚起步。

### 📦 微调与量化

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 797 赞 | 4,189,006 下载
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 2,148 赞 | 1,489,676 下载
  GSQ/RCO 新型混合精度量化，官方-学术-社区三方联动。
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 5,026 赞 | 6,488,262 下载
  下载量全场第二，unsloth 量化流水线的统治力体现。
- **[DavidAU/Qwen3.8-27B-TURBO-...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 1,654 赞 | 2,016,567 下载
  典型"融合微调 + 去审查"社区风格，热度与争议并存。
- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — 756 赞 | 614,193 下载
- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — 3,973 赞 | 2,188,658 下载
  图像模型去审查 GGUF（ComfyUI 向），下载量居图像类第一。
- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — 253 赞 | 59,274 下载
- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** — 319 赞 | 100,530 下载
- **[nerkyor/Qwen3.8-27B-Coder390-...-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — 233 赞 | 56,525 下载
  "缝合怪"命名代表多模型融合微调路线。
- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — 1,067 赞 | 37,647 下载
  "去 AI 味"文本改写微调，垂直需求驱动的高热度。

---

## 三、生态信号

Qwen 无疑是本周生态核心：官方 4 个模型上榜，衍生量化/微调多达 8 个，形成了类似"LLaMA 时刻"的社区飞轮。量化技术出现新范式——ISTA-DASLab 的 GSQ/RCO 混合精度和 prism-ml 的三值化（2-bit）方案，说明极端低比特推理已从实验走向主流，llama.cpp / GGUF 生态持续稳固。视频生成成为新增长极，LTX-2.5 与 Qwen-Image-2.1 的爆发标志着多模态重心从静态图像转向时序媒体。开源权重仍是绝对主流，且大型机构（Google、Meta、Cloudflare、LiquidAI）持续贡献原生权重而非仅发 API。值得注意的是"去审查"（uncensored/abliterated）微调占比显著，以及 Cloudflare 这类基础设施公司首次以模型发布方身份进入趋势榜。

---

## 四、值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值化 27B 在 2-bit 下保持可用质量，是低比特推理技术风向标，适合研究极端量化对能力的影响。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 单文件扩散架构 + 全场景视频生成，本周视频赛道热度第一，是搭建视频工作流的优先选择。
3. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — qwen4_exp 标签暗示其承载下一代架构实验，性能/成本比突出，适合前瞻性评测。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*