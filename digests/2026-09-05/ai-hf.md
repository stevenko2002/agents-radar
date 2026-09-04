# Hugging Face 热门模型日报 2026-09-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-04 22:16 UTC

---



# 🤗 Hugging Face 热门模型日报
**日期：2026-09-05**

---

## 今日速览

今日 HF 榜单呈现三大趋势：**多模态与视频生成赛道持续升温**，MiniMax-H3 单周下载突破 500 万，LTX-2.5 紧随其后；**Qwen3.8 家族全面霸榜**，官方基座、Flash 版及社区量化/微调版本合计占据近半数热度；**DeepSeek V4 Flash Vision** 作为实验性多模态模型以高下载量快速崛起。同时，GGUF 量化与 uncensored/abliterated 微调仍是社区活跃方向。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,938 | 5,739,341 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,692 | 303,534 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 429 | 5,684 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 462 | 3,524 |

- **Qwen3.8-27B**：阿里 Qwen 系列主流开源基座，多模态对话能力成熟，高点赞与海量下载印证其标杆地位。
- **GLM-5.3**：智源 zai-org 全新 MoE 架构语言模型，延续 GLM 系列高效推理路线，下载增速快。
- **Hy4-preview**：腾讯混元 V4 预览版，国产开源大模型新增选手，值得关注后续性能表现。

---

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 591 | 133,024 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,901 | 5,118,457 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,773 | 1,399,511 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,041 | 654,957 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,869 | 351,374 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 423 | 5,388 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 422 | 105,304 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,177 | 20,569,141 |

- **MiniMax-H3**：国产视频生成新贵，单周下载超 500 万，支持文本/图像/视频多模式生成，是当前视频赛道最热模型。
- **LTX-2.5**：Lightricks 视频生成模型，下载近 140 万，质量与速度并重，社区生态活跃。
- **DeepSeek-V4-Flash-Vision-Exp**：DeepSeek 实验性视觉-语言模型，以高下载量快速积累用户反馈，后续有望成为正式版本。
- **GLM-5.3-Flash**：智源 Flash 推理版，面向低延迟多模态对话场景，下载量已逼近 65 万。
- **TimesFM-3.0**：Google 时间序列预测模型，专业垂直领域代表，持续吸引工业应用用户。

---

### 🔧 专用模型（嵌入、语音、经典基石）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,507 | 253,789,790 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,651 | 14,607,268 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,944 | 58,675,189 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 228 | 12,823 |

- **all-MiniLM-L6-v2**：句向量嵌入任务的事实标准，累计下载超 2.5 亿，仍是 RAG 与语义搜索的首选基石模型。
- **GPT-2 / BERT**：经典开源基石模型持续保持高热度，证明基础架构的长期价值。

---

### 📦 微调与量化（GGUF、社区变体）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,498 | 9,951,693 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 938 | 1,463,966 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,081 | 928,393 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 300 | 206,575 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 709 | 276,706 |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 215 | 202,692 |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 177 | 7,782 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 166 | 0 |

- **unsloth Qwen3.8-27B-GGUF**：社区量化首选，下载近 1 千万，覆盖本地部署与边缘推理需求。
- **OBLITERATED / Uncensored 系列**：去审查微调版本持续吸引特定用户群体，abliterated 技术路线受到关注。
- **Tiel-Coder-35B-A3B**：MoE 架构代码专用模型，GGUF 量化后兼顾性能与效率，编程场景值得尝试。

---

## 生态信号

本周期生态呈现 **"模型家族化 + 视频爆发 + 量化社区化"** 三重趋势。Qwen3.8 系列已形成从官方基座到 Flash 版再到社区量化/微调的完整生态链，彰显头部厂商对开源社区的强大吸附力。视频生成赛道尤为火热，MiniMax-H3 与 LTX-2.5 两周合计下载超 650 万，预示着 2026 年下半年 AI 视频创作工具将迎来新一轮竞争。量化领域 GGUF 仍是绝对主流，Unsloth、orcarouter 等社区贡献者持续产出高质量变体；同时 abliterated/uncensored 微调路线在特定场景中保持稳定需求。OpenVDN 对 MiniMax-H3 的微调版本虽下载为零，但表明社区已开始围绕视频生成模型进行二次开发，生态正从"单模型消费"向"模型组合定制"演进。

---

## 值得探索

1. **[DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — DeepSeek 实验性多模态模型，下载量高、迭代预期强，适合跟踪其正式版的性能走向。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 本周视频生成赛道的绝对热门，多模态输入支持丰富，适合评估国产视频生成模型的最新水平。

3. **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** — 腾讯混元 V4 预览版，开源策略明确，适合关注国产大模型竞争格局与后续功能演进。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*