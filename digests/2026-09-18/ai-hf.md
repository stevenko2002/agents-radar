# Hugging Face 热门模型日报 2026-09-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-17 22:16 UTC

---

# Hugging Face 热门模型日报

**日期**：2026-09-18 | **数据源**：Hugging Face Hub 周热门榜（Top 30）

---

## 一、今日速览

Qwen3.8 系列延续统治级热度，旗舰模型 [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 15,524 赞稳居总榜最高，其 GGUF 量化版 [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) 下载量高达 820 万次。DeepSeek-V4.1-Flash 紧随其后成为新锐焦点，社区"去审查（Uncensored）"微调迅速跟进。视频与音频生成赛道显著升温，[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 与 [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 均在周榜前列。此外，以 Edge0-35B-A3B-preview 为代表的 MoE 边缘推理模型异军突起，首次占据周榜第一名。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,300 | 37,131 | 35B 总参数仅 3B 激活的 MoE 边缘推理预览模型，主打低功耗端侧部署，周榜第一的黑马。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,524 | 7,456,257 | 阿里最新旗舰多模态对话模型，支持图文互转，是当前开源阵营的绝对核心。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,361 | 706,052 | Qwen3.8 的轻量快速版（qwen4_exp 标签），面向高效推理场景。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,995 | 390,657 | DeepSeek 最新 Flash 系列多模态模型，支持图文输入输出，发布即成为新锐焦点。 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,694 | 5,887,953 | Llama 家族经典指令微调 8B 模型，下载与点赞双高，仍是社区底座级选择。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,425 | 2,446,115 | 智谱 GLM 系列 Flash 版本，多模态对话模型，下载量增长迅猛。 |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,295 | 19,789 | 基于 Qwen3.5-Text 的 4B Agentic 小模型，专注智能体任务的轻量部署。 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 850 | 9,856 | NeoHorse 系列 9B 版本，同为 Agentic 方向，小参数规模即获高关注。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,537 | 329,713 | 面壁智能 2B 端侧小模型，Llama 架构，延续 MiniCPM 系列的侧端口碑。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,259 | 28,347 | 4B 参数 LLM（spark2_5 架构），小模型赛道的新竞争者。 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 832 | 7,347 | 基于 Qwen3.5-MoE 的迷你多模态模型，面向 AGI 研究场景。 |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 214 | 1,223 | Agnes 家族 Flash 版本多模态对话模型，早期社区关注。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,135 | 15,558,794 | GPT-2 经典模型，常年霸榜教学与基准测试用途。 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 256 | 0 | 基于 MLX 的结构化生成/并行解码变体，面向 Apple Silicon，零下载但获关注。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 170 | 476 | 9B 多模态视觉语言模型，主打空间推理能力。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,418 | 4,576,471 | MiniMax 最新视频生成旗舰，支持文生视频与图生视频，下载量惊人。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,225 | 1,602,865 | 单文件扩散视频模型，覆盖图生视频/文生视频/视频到视频，社区热捧。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 716 | 11,626 | 3B 音乐生成模型，符号化规划 + 智能体编辑，音乐生成赛道的亮点。 |
| [Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 167 | 79,302 | ComfyUI 版 YuE2 扩散模型，面向工作流集成用户。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 475 | 181,811 | MiniMax-H3 的社区变体，视频生成组合玩法。 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 289 | 3,024 | 腾讯零样本 TTS，支持声音克隆。 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 565 | 22,039 | Meta 大规模多语种语音预训练模型（wav2vec2 架构）。 |

### 🔧 专用模型（嵌入等）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,047 | 255,618,777 | 经典轻量嵌入模型，RAG 与语义搜索的默认选择，周下载量 2.5 亿+。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 3,363 | 47,631,021 | BERT 基础版，NLP 教学与迁移学习基石模型，持续高下载。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,262 | 8,205,000 | Qwen3.8-27B 官方级 GGUF 量化，周下载 820 万，性价比部署首选。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,251 | 1,027,602 | 学术团队 GSQ+RCO 混合精度量化，突破 GGUF 精度-体积平衡。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 842 | 1,116,038 | 社区重度微调 + GGUF 量化，"去审查 + 编码增强"融合体，下载量意外高企。 |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 390 | 3,221 | Qwen3.8-27B 社区微调版，主打"高效思考"特性。 |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 228 | 72,862 | 上述微调的 GGUF 版，llama.cpp 生态。 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 265 | 32,011 | DeepSeek-V4.1-Flash 去审查 FP8 版，新模型发布后社区快速跟进。 |

---

## 三、生态信号

**Qwen3.8 生态呈现"一超多强"格局**。本周 Top 30 中 Qwen3.8 直接或间接相关模型达 8 个，微调（Swift）、量化（unsloth、ISTA-DASLab、DavidAU）等全链路覆盖，已形成类似 Llama 3.1 的社区裂变效应。**DeepSeek-V4.1-Flash 是最值得关注的新锐信号**——发布仅一周即冲到榜单第二，且社区的反向微调（Uncensored FP8）已同步出现，速度罕见。

**开源权重继续碾压闭源**，榜单几乎全部为权重可下载模型。量化活动高度活跃，GGUF 仍是绝对主流格式，但 GSQ、RCO、MTP 等新型混合精度/多 token 预测技术开始出现，显示部署优化正从"格式之争"转向"精度策略之争"。MoE 架构（Edge0、Nex-N2.5）与 1-9B 小模型（NeoHorse、MiniCPM5、Spark-X2.5）同时走强，说明端侧与边缘部署是明确的下一战场。**视频生成（MiniMax-H3、LTX-2.5）成为继 LLM 之后的第二增长曲线**，下载量已达百万级。

---

## 四、值得探索

1. **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — 周榜第一的 MoE 预览模型。35B 总参仅 3B 激活，能挤掉 DeepSeek 与 Qwen 拿下榜首，其"小激活、高能力"的范式值得第一时间验证。如果实际表现接近宣传，将直接改写边缘推理的成本公式。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术团队出品的混合精度量化，在标准 GGUF 之外引入 GSQ 与 RCO 技术，102 万下载量证明社区对"更省显存还能保持精度"的强烈需求。值得拿来和官方 unsloth 版做对比评测。

3. **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — 仅 3B 参数却主打符号化规划 + 智能体编辑的音乐生成模型。音乐生成长期被大参数模型主导，这个"小而精"路线的作品，加上 ComfyUI 官方适配（[Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2)），值得研究者关注其在可控性与创作辅助上的突破。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*