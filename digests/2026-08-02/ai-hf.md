# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 22:16 UTC

---

# 📊 Hugging Face 热门模型日报

**日期：2026-08-02**

---

## 一、今日速览

本周 Hugging Face 热度榜单由 **Moonshot AI 的 Kimi-K3** 强势登顶，以近万点赞和超过 55 万下载领跑多模态领域。**DeepSeek V4 系列**（Flash 与 Flash-0731）持续升温，反映国产大模型在推理与对话方向的快速迭代。与此同时，**Qwen3.6 系列**在社区微调与量化领域异常活跃，DavidAU、HauhauCS、LuffyTheFox 等创作者推出的 Uncensored 与 GGUF 版本累计下载量突破百万，凸显开源社区对高效、可定制化模型的强烈需求。整体来看，多模态、代码生成与本地化部署仍是三大核心趋势。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|---------|---------|------|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,466 | 559,924 | Moonshot AI 的多模态基础模型，支持图像与文本输入，以超 55 万下载领跑本周榜单 |
| [**DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,946 | 2,814,414 | DeepSeek V4 的全量版本，下载量近 281 万，是本周最受欢迎的通用语言模型 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,402 | 15,366 | V4 的 7 月 31 日增量版本，附带 arXiv 论文，标志持续迭代 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,732 | 1,683,442 | 智谱 GLM 系列的最新 MoE 架构版本，对话与多轮交互能力突出 |
| [**Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 715 | 13,426 | Upstage 推出的 250B 参数开源大模型，定位为高性能通用语言模型 |
| [**Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 610 | 27,892 | 轻量级 3B 模型，适合边缘部署与快速推理 |
| [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 390 | 10,771 | 基于 Qwen3.5-MoE 的代码专用模型，支持图像输入与代码生成 |
| [**Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 867 | 77,021 | 面向对话与指令遵循的微调模型，社区反响良好 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|---------|---------|------|
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,712 | 2,457,387 | 百度推出的 OCR 模型，下载量超 245 万，是本周多模态领域的最大亮点 |
| [**Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 170 | 10,525 | 微软的多模态视觉-语言模型，支持图像理解与生成 |
| [**Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | 微软基于 Qwen3.5 的多模态模型，集成 Computer Use 能力 |
| [**Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 361 | 1,565 | 面向边缘设备的本地 TTS 模型，支持 CPU 推理 |
| [**Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 166 | 3,254 | Audio8 的语音合成预览版本，基于 ARK TTS 架构 |
| [**Kroma**](https://huggingface.co/lodestones/Kroma) | lodestones | 91 | 0 | 基于 LoRA 的 Krea2 图像生成模型，适配 ComfyUI 工作流 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|---------|---------|------|
| [**XYZ-Aquila-mini**](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 356 | 650 | 基于 Qwen3.5-MoE 的轻量模型，支持图像输入与多任务推理 |
| [**XYZ-Aquila-pro**](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 330 | 923 | XYZ-Aquila 系列的高端版本，集成 Agentic Search 能力 |
| [**VibeVoice-ASR-BitNet**](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | 微软的语音识别模型，采用 BitNet 量化技术以降低推理成本 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|---------|---------|------|
| [**Qwen3.6-27B-Fable-Fusion-711-Uncensored**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,231 | 1,173,001 | DavidAU 的社区微调版本，下载量超 117 万，是本周最受欢迎的 GGUF 模型 |
| [**Qwen3.6-35B-A3B-Uncensored-HauhauCS**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,221 | 1,823,436 | HauhauCS 的激进版 Uncensored 模型，下载量超 182 万，热度仅次于 Kimi-K3 |
| [**Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 286 | 228,610 | 融合 Genesis 与 Hermes 风格的 GGUF 版本 |
| [**Qwen3.5-9B-The-Defiant-Fable-Uncensored**](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 186 | 267,572 | DavidAU 的 9B 级别 Uncensored GGUF，采用 NEO iMatrix 与 MTP 技术 |
| [**DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 279 | 4,048 | unsloth 提供的 DeepSeek V4 Flash GGUF 量化版本 |
| [**Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | unsloth 为 Kimi-K3 提供的 GGUF 量化版本 |
| [**Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 275 | 170,109 | unsloth 的 Laguna-S-2.1 GGUF 版本 |
| [**Solar-Open2-250B-Nota-NVFP4**](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 22,396 | Nota 对 Solar-Open2-250B 的 NVFP4 极端量化版本 |
| [**Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,131 | 716,341 | 2-bit 三元量化 GGUF，下载量超 71 万，是量化社区的标杆 |
| [**EschaLabs/Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | EschaLabs 的 W2 量化版本 |
| [**Qwen3.6-27B-Fable-Fusion-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,231 | 1,173,001 | 同上（已在上方列出） |
| [**Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 212 | 3,998 | Inkling 系列的轻量版本，适合资源受限场景 |
| [**Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | Thinking Machines 的多模态模型，支持图像与对话 |

---

## 三、生态信号

**模型家族势头：** Qwen3.6 系列在本周社区中爆发式增长，DavidAU、HauhauCS、LuffyTheFox、EschaLabs 等创作者围绕该架构推出了大量微调与量化变体，反映出 Qwen3.6 MoE 架构已成为社区创作的首选底座。DeepSeek V4 与 Kimi-K3 分别代表了国产大模型在通用与多模态方向的两条主线。

**开源权重 vs 闭源：** 本周榜单几乎全部为开源权重模型，验证了开源生态的持续主导地位。闭源模型（如 GPT、Claude）已基本退出 Hugging Face 公开榜单，开源权重成为社区协作与技术创新的核心载体。

**量化与微调活动：** GGUF 格式继续主导本地部署，unsloth 是本周最活跃的量化贡献者，覆盖 Kimi-K3、DeepSeek V4、Laguna-S-2.1 等多个热门模型。DavidAU 的"Uncensored"系列（Heretic、NEO iMatrix、MAX-MTP）累计下载量超过 144 万，显示社区对无审查、可定制化微调版本的需求极为旺盛。2-bit 三元量化（Ternary-Bonsai）与 NVFP4 等极端量化技术也在快速推进。

---

## 四、值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 作为本周绝对热门，其多模态能力（image-text-to-text）结合压缩张量技术，是研究高效多模态推理的绝佳样本。

2. **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — 下载量接近 282 万，是当前最广泛使用的开源对话模型之一，其持续迭代（Flash-0731）值得跟踪技术演进。

3. **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 下载量超 182 万，是社区微调与量化文化的缩影，适合研究如何在保持性能的同时实现高效本地部署。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*