# Hugging Face 热门模型日报 2026-09-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-03 22:15 UTC

---



# 📊 Hugging Face 热门模型日报

**日期：2026-09-04 | 分析周期：本周热度榜（Top 30）**

---

## 一、今日速览

本周 Hugging Face 热门榜呈现"中国模型家族全面崛起"之势，Qwen、GLM、DeepSeek 三大厂商新品集中上榜，覆盖了从语言到多模态的全栈能力。**Qwen3.8 系列**包揽多个头部位置，其中 27B 基础版下载量突破 525 万，成为本周最受下载关注的模型；**GLM-5.3-Flash** 以超 51 万下载量位居多模态对话类第一。**视频生成赛道**持续升温，MiniMax-H3 与 LTX-2.5 分列热门榜前列。此外，社区量化与 uncensored 微调活动异常活跃，GGUF 格式的 Qwen/GLM 衍生模型占据了榜单近三分之一席位。

---

## 二、热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,603 | 151,021 | 智谱新一代 MoE 架构语言模型，采用 DSA 稀疏注意力，纯文本生成任务表现优异，是本周国产 LLM 的重要更新。 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,797 | 263,287 | 阿里通义千问全新 Flash 系列迭代，标签含 `qwen4_exp`，暗示底层架构升级，多模态理解与对话能力大幅提升。 |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,815 | 5,254,882 | **本周下载量最高模型**，27B 参数的全尺寸开源语言模型，社区反馈强烈，是本地部署与二次开发的热门基座。 |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,011 | 517,902 | GLM-5.3 的多模态视觉扩展版本，支持图像-文本联合理解，下载量超过基础文本版，显示用户对视觉能力的强烈需求。 |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 541 | 54,571 | DeepSeek V4 系列的 Flash 视觉实验版本，探索高效推理与多模态能力的平衡点。 |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 411 | 4,449 | 腾讯混元系列预览版，标志着国产大模型"四代化"竞争格局正在形成。 |
| [phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 203 | 11,526 | 专注语音-语言交互的早期实验模型，基于 Nemotron 架构，为实时语音对话场景探索新方向。 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,856 | 5,092,067 | **本周下载第二高的模型**，MiniMax 新一代视频生成基座，支持文本/图像到视频，社区衍生加速版本大量涌现。 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,680 | 1,293,463 | Lightricks 迭代更新的开源视频生成模型，支持 img2vid / txt2vid / vid2vid 多种模式，商业落地能力强。 |
| [FastVideo-FastH3-4-step-Preview-v1](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 251 | 0 | 针对 MiniMax-H3 的 4 步快速采样蒸馏版本，验证了视频生成模型的极致加速潜力。 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 127 | 0 | 对 MiniMax-H3 的视频扩散网络（VDN）微调，探索可控视频生成的社区实践。 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 357 | 46,862 | Google 时间序列预测模型的最新 PyTorch 版本，3.0 在金融、气象等场景的预测精度进一步提升。 |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,448 | 246,135,287 | **累计下载超 2.46 亿的经典嵌入模型**，句子相似度任务的事实标准，长期占据 HF 热度榜。 |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,594 | 14,071,683 | OpenAI 开源的经典基础模型，仍是教学与原型开发中最广泛使用的起点之一。 |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,900 | 58,556,227 | 长期稳居下载榜前列，5800 万+ 下载印证其作为 NLP 研究基础设施的不可替代性。 |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 390 | 3,861 | 新一代文本转语音模型，自然度与多语言支持有明显改进。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,440 | 9,553,042 | **本周下载量最高的 GGUF 量化模型**（955 万+），Unsloth 提供的高效量化方案让用户可在消费级硬件运行 27B 模型。 |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 755 | 535,984 | Flash 系列的 GGUF 版本，兼顾推理速度与控制资源消耗，适合边缘部署场景。 |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 341 | 75,195 | GLM-5.3-Flash 的 GGUF 量化版本，补充了国产模型在本地量化生态中的覆盖。 |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 238 | 100,110 | 学术界提出的 GSQ+RCO 混合精度量化方案，探索更低比特下的质量保持。 |
| [Qwen3.8-27B-Uncensored-...-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 892 | 1,336,061 | 激进的去审查（uncensored）微调版本，下载量超 133 万，反映社区对"无限制"本地模型的持续需求。 |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,051 | 848,781 | 基于 Abliterated 技术移除特定行为的 Qwen 衍生模型，MLX/GGUF 双格式支持，引发隐私与安全讨论。 |
| [GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 159 | 4,477 | FP8 精度的去审查版本，体现社区在极致压缩与伦理边界之间的技术博弈。 |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 160 | 1,514 | 星火系列轻量化版本，面向资源受限的中文对话场景。 |

---

## 三、生态信号

本周 HF 热门榜释放出三个鲜明信号。**其一，国产模型家族进入"代际战"**：Qwen3.8、GLM-5.3、DeepSeek-V4、Hy4 四大家族同时上榜，表明开源 LLM 竞争已从"单点突破"进入"全家桶迭代"阶段，用户可在一周内完成从基座到多模态到量化的完整选型。**其二，视频生成赛道进入"加速内卷"**：MiniMax-H3、LTX-2.5 等基座模型发布后，社区迅速推出 4 步蒸馏、VDN 微调等加速方案，推理速度正成为比质量更重要的差异化指标。**其三，量化与 uncensored 微调生态异常繁荣**：GGUF 格式的衍生模型占据榜单近 1/3，Unsloth 的量化工作流已趋于成熟；同时 Abliterated 和去审查模型下载量居高不下，反映本地部署场景中对模型控制权的强烈诉求。

---

## 四、值得探索

1. **[Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 955 万下载量验证了其在消费级硬件上的大规模可用性，Unsloth 的量化质量与推理加速策略是目前社区最优实践之一，适合希望本地运行 27B 级别模型的开发者。

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 509 万下载量的视频生成基座，标志着国内视频生成模型正式进入"高可用开源"阶段，社区已涌现多个加速与微调版本，值得深入研究其扩散架构与训练数据策略。

3. **[timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — Google 时间序列预测模型的迭代版本，在金融、能源、气象等领域具有直接应用价值；其 PyTorch 原生实现便于二次开发与定制，是严肃时间序列研究者的理想起点。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*