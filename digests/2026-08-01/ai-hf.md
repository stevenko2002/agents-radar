# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 22:16 UTC

---

# 🤗 Hugging Face 热门模型日报

**日期：2026-08-01**

---

## 📌 今日速览

本周 Hugging Face 热门榜以多模态大模型和开源权重下载为核心主线。**Kimi-K3** 以近万点赞领跑，其 GGUF 量化版本同样表现亮眼，反映出社区对高效部署的强烈需求。**DeepSeek-V4 系列** 持续引发关注，Flash 版本与完整版双双上榜，凸显 MoE 架构的吸引力。与此同时，**Qwen3.6 系列** 成为社区微调与"无审查"变体的热门基座，大量 GGUF 和 Heretic 风格衍生版本涌现。**微软** 在多模态（Mage-VL、Fara1.5）和语音（VibeVoice）赛道均有布局，而 **百度 Unlimited-OCR** 以超过 250 万下载量成为实用型模型的标杆。整体来看，开源权重下载量与社区二次创作热度持续走高。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - 作者：moonshotai | 点赞：9,263 | 下载：493,481
   - Kimi-K3 是月之暗面最新推出的多模态大模型，在图像-文本任务上表现突出，compressed-tensors 标签暗示其采用了先进的权重压缩技术，是本周绝对的热门焦点。

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者：zai-org | 点赞：4,705 | 下载：1,651,533
   - GLM-5.2 延续了智谱 GLM 系列的 MoE + DSA 架构路线，以超 165 万下载量稳居前列，定位为通用对话与语言理解模型。

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
   - 作者：deepseek-ai | 点赞：925 | 下载：0（新发布）
   - DeepSeek-V4 的 Flash 轻量化变体，配套 arXiv 论文同步开源，适合需要平衡性能与推理速度的场景。

4. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
   - 作者：poolside | 点赞：862 | 下载：76,212
   - Laguna-S 2.1 是面向对话与指令遵循的模型，下载量稳步增长，显示出在开源社区中的持续热度。

5. **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
   - 作者：upstage | 点赞：713 | 下载：12,911
   - Solar Open2 250B 是韩国 Upstage 推出的超大规模开源模型，250B 参数规模在开源界属罕见，体现了韩系团队的大模型野心。

6. **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
   - 作者：Nanbeige | 点赞：595 | 下载：26,928
   - 一款 3B 级别的高效小型语言模型，适合资源受限环境下的部署与快速推理。

7. **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
   - 作者：Kwaipilot | 点赞：367 | 下载：10,241
   - 基于 Qwen3.5-MoE 的代码专用模型，融合图像理解能力，面向开发辅助与多模态代码场景。

8. **[XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)**
   - 作者：XYZAILab | 点赞：326 | 下载：869
   - XYZ-Aquila-pro 定位为具备 agentic-search 能力的模型，强调检索增强与智能体功能。

9. **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)**
   - 作者：XYZAILab | 点赞：351 | 下载：579
   - XYZ-Aquila 系列的小型版本，与 pro 版本形成高低配组合，覆盖不同算力需求。

10. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    - 作者：deepseek-ai | 点赞：1,923 | 下载：2,923,499
    - DeepSeek-V4 的完整开源版本，以近 300 万下载量成为本周下载冠军，conversational 标签表明其定位为通用对话模型。

11. **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)**
    - 作者：EschaLabs | 点赞：104 | 下载：599
    - 基于 Qwen3.6 的 W2 量化探索版本，属于社区对 MoE 模型进行低比特实验的早期尝试。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 作者：baidu | 点赞：3,657 | 下载：2,513,603
   - 百度推出的 Unlimited-OCR 以超过 250 万下载量成为本周最受欢迎的实用模型，专注于高精度 OCR 识别，是开源 OCR 领域的重要贡献。

2. **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
   - 作者：microsoft | 点赞：147 | 下载：5,650
   - 微软 Mage-VL 是其多模态视觉-语言模型系列的新成员，标签 multimodal 表明其具备图像理解与生成能力。

3. **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
   - 作者：microsoft | 点赞：234 | 下载：2,726
   - Fara1.5-27B 定位为具备 computer-use 能力的多模态模型，适合屏幕理解与 GUI 交互场景。

4. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   - 作者：thinkingmachines | 点赞：1,663 | 下载：57,259
   - Inkling 是思考机器公司的多模态基础模型，conversational 标签表明其支持图像与文本的双向对话理解。

5. **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)**
   - 作者：thinkingmachines | 点赞：191 | 下载：2,971
   - Inkling 的小型化版本，适合边缘或资源受限环境下的多模态推理任务。

6. **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**
   - 作者：Audio8 | 点赞：151 | 下载：2,481
   - Audio8 团队的 TTS 预览模型，基于 ARKTTS 架构，专注于高质量语音合成。

7. **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
   - 作者：microsoft | 点赞：133 | 下载：5,464
   - 微软 VibeVoice 的 ASR 变体，采用 BitNet 量化技术，在语音识别任务中实现高效推理。

8. **[Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow)**
   - 作者：Comfy-Org | 点赞：106 | 下载：60,162
   - 基于微软 Mage-Flow 的 ComfyUI 扩散模型单文件版本，MIT 许可证，面向图像生成工作流。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

> 本周榜单中未出现独立的代码/数学/医疗/嵌入专用模型，但 **KAT-Coder-V2.5-Dev**（见语言模型部分）和 **XYZ-Aquila-pro**（agentic-search）已覆盖代码与检索增强方向。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   - 作者：DavidAU | 点赞：1,138 | 下载：1,119,057
   - DavidAU 的标志性 Heretic 系列作品，基于 Qwen3.6-27B 的 Fable Fusion 融合模型，Uncensored + NEO-MAX-MTP 标签使其成为社区最受欢迎的"无审查" GGUF 版本之一。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 点赞：3,205 | 下载：1,835,931
   - HauhauCS 版本的 Qwen3.6-35B-A3B 无审查 Aggressive 变体，以超 183 万下载量成为本周下载亚军，GGUF 格式进一步降低了部署门槛。

3. **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)**
   - 作者：LuffyTheFox | 点赞：266 | 下载：212,426
   - 融合了 Genesis 与 Hermes V6 风格的无审查 GGUF 版本，反映了社区对角色对话风格微调的偏好。

4. **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)**
   - 作者：unsloth | 点赞：224 | 下载：36,180
   - Unsloth 提供的 Kimi-K3 GGUF 量化版本，compressed-tensors 标签表明其采用了 Unsloth 特有的压缩策略。

5. **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
   - 作者：unsloth | 点赞：161 | 下载：0（新发布）
   - DeepSeek-V4-Flash 的 Unsloth GGUF 版本，与原版同步发布，方便本地部署。

6. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   - 作者：prism-ml | 点赞：1,124 | 下载：712,835
   - 27B 规模的 Ternary（三值）量化 GGUF 模型，采用 2-bit 量化技术，llama.cpp 标签表明其深度兼容本地推理框架。

7. **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)**
   - 作者：nota-ai | 点赞：151 | 下载：18,531
   - Solar-Open2-250B 的 NVFP4 极端量化版本，vLLM 标签表明其面向生产级推理服务。

8. **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)**
   - 作者：DavidAU | 点赞：172 | 下载：261,856
   - DavidAU 另一款 Heretic 系列作品，Qwen3.5-9B 基座 + NEO IMATRIX 融合，GGUF 格式。

9. **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)**
   - 作者：unsloth | 点赞：215 | 下载：1,044
   - Unsloth 对 Kimi-K3 的直接适配版本，feature-extraction 标签表明其保留了原始模型的核心能力。

---

## 📊 生态信号

**模型家族势头：** Qwen3.6 / Qwen3.5-MoE 家族本周势头最猛，不仅原版上榜，其衍生 GGUF、无审查微调版本更是占据了下载榜前列，反映出该系列作为社区"万能基座"的地位。DeepSeek-V4 系列（Flash + Flash-0731 + GGUF）持续发力，Z.ai 的 GLM-5.2 也在 MoE 赛道占据重要一席。

**开源权重 vs 闭源：** 本周榜单几乎清一色为开源权重发布，闭源 API 模型未进入视野。开源模型在下载量上占据绝对主导（Top 5 下载量均超过百万），说明社区对可本地部署、可微调的开源权重需求依然旺盛。

**量化与微调活动：** DavidAU 的 Heretic/NEO/IMATRIX 系列 GGUF 持续引领社区微调风向，"Uncensored" + "Aggressive" 标签的模型下载量惊人，反映出用户对无审查本地模型的强烈偏好。Unsloth 的 GGUF 转换覆盖面广（Kim-K3、DeepSeek-V4），成为量化分发的重要渠道。Nota-AI 的 NVFP4 极端量化（4-bit 以下）探索值得关注，代表了超大规模模型（250B）向消费级硬件下沉的技术趋势。

---

## 🔍 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 超过 250 万下载量验证了其实用价值，是 OCR 领域最值得研究的开源模型之一，适合作为文档数字化项目的基座。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 183 万下载量 + 3,205 点赞，是社区对 Qwen3.6 进行"无审查"微调的标杆案例，适合研究 MoE 模型的安全对齐与微调技术。

3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 2-bit 三值量化 + 71 万下载

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*