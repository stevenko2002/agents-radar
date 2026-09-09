# Hugging Face 热门模型日报 2026-09-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-09 22:15 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-09-10

---

## 🚀 今日速览

- **Qwen 3.8 系列霸榜**：官方基座模型 **Qwen3.8-27B** 与 **Qwen3.8-Flash-Next** 合计点赞超 1.9 万，衍生量化（GGUF/GSQ/NVFP4）与社区微调（Uncensored、Fable 等）形成完整生态闭环。  
- **视频生成迎来「MiniMax-H3」时刻**：官方基座下载近 500 万，社区已出现 Singularity 等精调版，视频生成正从「尝鲜」迈向「可用」。  
- **GLM 5.3 双线并进**：Z.ai 同步推出 MoE 基座 **GLM-5.3** 与密集 Flash 版 **GLM-5.3-Flash**，前者主攻推理深度，后者主打多模态低延迟。  
- **小模型高性能成共识**：MiniCPM5-2B、Spark-X2.5-4B、Nex-N2.5-mini 等 2–4B 模型以极低部署门槛抢占边缘/移动端场景。  
- **专用领域持续细分**：Google 发布 TimesFM-3.0（时序预测）、Microsoft 推 VibeVoice-ASR（流式语音识别）、Breeze-TTS-2（中文 TTS），垂类模型「小而美」特征明显。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | 📥 | 一句话简介 |
|------|------|-----|-----|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,516 | 6.7M | Qwen 3.8 旗舰 27B 多模态基座，长上下文、工具调用、代码能力全面增强，生态核心。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,045 | 503K | 实验性「Flash」架构变体，推理加速与显存优化并重，面向低延迟部署。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 893 | 2.9K | 2.4B 参数却在 MMLU/MT-Bench 超越 7B 级，端侧部署首选。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 998 | 10.7K | 国产 4B 指令模型，主打中文长文本与 RAG 场景。 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,788 | 474K | MoE 架构（~1.3T 参数，激活 36B），强推理、长上下文、代码能力均衡。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,205 | 827K | 密集 32B 多模态 Flash 版，首token延迟 < 100ms，适配实时对话。 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 843 | 314K | DeepSeek V4 视觉实验版，原生图文混合训练，OCR/图表理解强。 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 260 | 3.2K | MoVA 混合专家视觉语言模型，激活参数仅 4B，边缘端多模态新尝试。 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 203 | 2 | 基于 Qwen3.5 MoE 微调的 2.5B 小模型，主打代码与工具调用。 |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 164 | 0 | Pro 版扩展上下文至 128K，Apache-2.0 可商用。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 354 | 19K | 网安垂类续训 + FP8 量化，去拒答，适合渗透测试/威胁情报场景。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,851 | 14.8M | 经典基准模型，持续作为教学/实验基石。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,119 | 48.8M | 编码器代表，分类/NER/检索任务标配。 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,280 | 7.2M | BERT 蒸馏版，60% 体积保留 97% 性能。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | 📥 | 一句话简介 |
|------|------|-----|-----|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,085 | 5.0M | 目前开源最强视频生成基座之一，原生支持文生视频/图生视频/视频延展，1080P/24fps。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,263 | 1.6M | 单文件 Diffusion Transformer，文/图/视频互生，推理极快（~2s/帧），ComfyUI 生态完善。 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 275 | 0 | 基于 MiniMax-H3 的 LoRA 微调，针对特定风格/角色一致性优化。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 217 | 58K | 社区精调版，提示词遵循与运动连贯性显著提升。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 516 | 7.2K | 中文自然语音合成，支持多音色/情绪控制，流式推理延迟 < 200ms。 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 176 | 1.4K | 流式语音识别大模型，低延迟、抗噪、支持长音频分段解码。 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,340 | 20.8M | 视觉-语言对齐基石，零样本分类/检索/多模态前端通用。 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 358 | 12K | 大规模多语言语音预训练（1100+ 语言），ASR/TTS/LID 统一建模。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 时序）

| 模型 | 作者 | ❤️ | 📥 | 一句话简介 |
|------|------|-----|-----|------------|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,716 | 2.53B | 向量检索/语义搜索/聚类的事实标准，ONNX/Rust/TF 全栈部署。 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 686 | 444K | 基础时序预测模型，零样本推理多领域（电力/金融/流量），无需微调。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 / NVFP4）

| 模型 | 作者 | ❤️ | 📥 | 一句话简介 |
|------|------|-----|-----|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,777 | 10.7M | 官方级量化分发，提供 Q2_K~Q8_0 全谱系，llama.cpp/OLLAMA 即插即用。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 731 | 480K | GSQ 分组稀疏量化 + RCO 校准，极低比特下性能损失 < 1%。 |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 178 | 26K | NVIDIA ModelOpt 产出 FP4 量化，面向 Blackwell/H100 Tensor Core 加速。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 409 | 349K | 多路融合+去审查+代码增强的「全能型」社区微调，GGUF 多量化可选。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,056 | 1.7M | 激进去审查 + MTP 多 token 预测加速，创意写作/角色扮演社区热门。 |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 170 | 113K | 基于 Flash-Next 的 GGUF 移植，保留视觉多模态能力。 |

---

## 🌐 生态信号（趋势研判）

**模型家族势头**：**Qwen 3.8** 已成开源生态「Linux 内核」级基座——官方连发基座/Flash/多模态，第三方量化（GGUF/GSQ/NVFP4/FP8）、微调（Uncensored/Fable/Code/Roleplay）同步爆发，形成「基座→量化→垂类微调」完整链路。**MiniMax-H3** 确立视频生成开源 SOTA 地位，社区 LoRA/精调生态快速萌芽。**GLM 5.3** 双线策略精准切分 MoE 深度推理与 Flash 实时多模态，Z.ai 商业化与开源同步推进。

**开源 vs 闭源**：头部厂商（阿里/智谱/MiniMax/DeepSeek）持续「开核心、闭数据/服务」，开源权重许可多为 Apache-2.0/Qwen-License，商业化落地阻力极低；闭源模型（GPT-4o/Claude 3.5/Gemini）仅通过 API 服务，开源侧以「可控、可改、可私有部署」构建差异化护城河。

**量化/微调活动**：**量化下沉到 FP4/GSQ**，硬件厂商直接下场适配新架构；**微调主题三极化**——去审查/角色扮演、代码/工程增强、垂类知识注入（网安/医疗/金融）。社区已具备「基座发布 24h 内出 GGUF，72h 内出垂类微调」的极速响应力。

---

## 💡 值得探索

1. **Qwen3.8-Flash-Next + NVFP4 量化**  
   > 官方实验性 Flash 架构 + NVIDIA 硬件原生 FP4，单 H100 即可跑 27B 多模态实时推理，**性价比极高**，适合追踪下一代推理加速范式。

2. **MiniMax-H3 + Singularity 精调**  
   > 视频生成从「能跑」到「好用」的关键节点，**Singularity 在提示词遵循/运动连贯/长视频一致性上有肉眼可见提升**，配合 ComfyUI 工作流可直接用于短视频/广告素材生产

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*