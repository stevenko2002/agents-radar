# Hugging Face 热门模型日报 2026-09-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-08 22:15 UTC

---

# Hugging Face 热门模型日报

**日期：2026-09-09**

---

## 一、今日速览

本周 Hugging Face Hub 上，**Qwen 家族持续领跑**，Qwen3.8-27B 以超过 14300 点赞和 670 万下载稳居旗舰地位，其 Flash-Next 变体也表现强劲（5006 点赞）。**MiniMax-H3** 视频生成模型异军突起，以 5046 点赞成为多模态领域最大黑马。值得注意的是，社区对 Qwen3.8-27B 的 **GGUF 量化和去审查（uncensored）微调**热情空前，多个衍生版本同时上榜。此外，**GLM-5.3 系列**和多款基础模型（BERT、GPT-2、CLIP）凭借稳定的大规模下载量持续占据榜单。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 842 | 10,661 | 轻量级 4B 参数 LLM，基于 Spark 架构，适合边缘部署，以小巧体量跻身周榜前十。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 642 | 2,879 | 端侧小模型 MiniCPM 第五代，2B 参数主打移动端和嵌入式场景的高效推理。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,752 | 14,748,356 | 经典 GPT-2 基础模型，凭 1470 万月下载和极高知名度持续位列趋势榜。 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 233 | 3,205 | 36B 总参、4B 活跃参数的 MoE 架构 LLM，MoVA 结构在推理效率与容量间取平衡。 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,763 | 474,141 | 智谱新一代 GLM-5.3 基座模型，MoE 架构，是 GLM-5.3 系列生态的根基。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,383 | 6,712,160 | 通义千问旗舰多模态模型，支持图像-文本互转，是本周点赞与下载双料冠军。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,006 | 503,263 | Qwen3.8 的下一代 Flash 实验版，面向低延迟和高效多模态推理场景。 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 819 | 313,547 | DeepSeek V4 系列的视觉快闪实验版，主打低成本高效视觉理解。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,169 | 826,875 | GLM-5.3 的 Flash 轻量多模态版本，兼顾图像理解和推理速度。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,172 | 1,644,796 | 统一视频生成模型，支持图像到视频、文本到视频、视频到视频多模态能力。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,046 | 4,994,268 | 本周多模态领域最大亮点，支持文字到视频和图像到视频的双模态生成。 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 245 | 0 | MiniMax-H3 的开源社区微调版，以文本到视频为主，虽下载量低但显示社区复现热情。 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 153 | 1,449 | 微软 7B 参数流式自动语音识别模型，面向实时转录场景。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 485 | 7,243 | 社区推出的 Breeze 第二代文字转语音模型，生成自然度提升明显。 |

### 🔧 专用模型（嵌入、时序预测、经典基础模型）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,620 | 253,331,994 | 句子嵌入领域事实标准，2.5 亿下载量冠绝全榜，支撑海量语义检索系统。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,033 | 50,396,517 | NLP 经典预训练模型，5000 万下载证明其在学术与工业界不可撼动的基础地位。 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,193 | 7,138,152 | BERT 蒸馏版，以 40% 参数量保留 97% 性能，适合资源受限的文本分类任务。 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,251 | 20,702,763 | OpenAI CLIP 视觉-文本对齐基础模型，零样本图像分类的标配工具。 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 628 | 444,052 | Google 发布的第三代时序预测基础模型，面向金融、运营等预测场景。 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 299 | 12,388 | Meta 大规模多语言语音模型，覆盖千余种语言的语音识别预训练权重。 |

### 📦 微调与量化（社区微调、GGUF、混合精度）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,700 | 10,675,683 | Qwen3.8-27B 官方推荐 GGUF 量化版，1000 万下载量反映消费级硬件推理刚需。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 649 | 479,597 | 采用 GSQ 与 RCO 混合精度方案的 Qwen3.8-27B 量化版，探索更激进的压缩边界。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 836 | 935,568 | Flash-Next 的 GGUF 量化版，让 Flash 变体也能在本地消费级硬件运行。 |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 155 | 26,302 | NVIDIA 官方 FP4 量化版本，适配最新 GPU 的 4-bit 推理加速。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 351 | 348,753 | 高度定制化的去审查编码器融合版，整合多个微调权重与 MTP 模块，社区特色鲜明。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,023 | 1,715,824 | 去审查 + 多模态 + MTP 的激进微调版，下载量高达 170 万，细分需求旺盛。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 816 | 299,670 | 经 abliteration 去除安全对齐的 Qwen3.8-27B 量化版，面向无限制对话场景。 |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 149 | 113,295 | Qwen3.8-27B 的 GGUF 视觉推理变体，支持多模态输入的本地部署。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 312 | 19,433 | GLM-5.3 的网络安全专用 FP8 量化版，去除拒绝回复，面向安全研究场景。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 172 | 58,060 | MiniMax-H3 的社区微调版，聚焦视频生成能力的个性化调优。 |

---

## 三、生态信号

**Qwen 家族是本周绝对主导力量。** 以 Qwen3.8-27B 为核心，衍生出 Flash 变体、至少 6 个 GGUF 量化版和多个去审查微调版，形成完整的"基座 → 量化 → 微调"生态链条，这是当前开源模型社区最健康的标志。**GLM-5.3 系列**也展现出类似的生态扩张态势，从基座到 Flash 版再到安全专用版，智谱在努力构建第二个"Qwen 式"的繁荣社区。

**视频生成成为新的竞技场。** MiniMax-H3 凭借 5000+ 点赞和近 500 万下载强势入榜，Lightricks LTX-2.5 紧随其后，加上多个社区衍生版本，表明开源视频生成正在从"有无"阶段进入"质量比拼"阶段。

**量化竞争进入精细分化期。** 从传统的 GGUF 到 FP8、FP4（NVFP4）、GSQ-RCO 混合精度，量化方案不再"一刀切"，而是针对不同硬件（GPU、边缘设备）和场景定制。**去审查（uncensored/abliterated）微调**的需求持续旺盛，多个相关模型下载量达百万级，反映部分用户对无限制模型的刚性需求。

---

## 四、值得探索

### 1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
作为本周双料冠军，Qwen3.8-27B 在图像理解和文本生成上的综合能力值得深入测试。其周围庞大的量化与微调生态意味着无论你的硬件条件如何，都能找到适合的部署方案，是当前最具"生态安全感"的开源多模态模型。

### 2. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
视频生成是 2026 年下半年最活跃的开源方向之一，MiniMax-H3 以超过 Lightricks LTX-2.5 的势头上升，且已有社区微调版本出现。如果你关注 AI 视频创作工具链，这是当前最值得上手的模型之一。

### 3. [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
在主流 GGUF 量化之外，GSQ + RCO 混合精度方案代表了量化技术的前沿探索。学术机构 ISTA-DASLab 的这项工作可能在同等体积下提供更好的精度保持，对模型压缩研究者和极致本地部署爱好者来说，是极有试验价值的对象。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*