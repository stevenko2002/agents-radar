# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 07:12 UTC

---

**Hugging Face 热门模型日报（2026‑07‑21）**  

---

## 📰 今日速览
- 本周点赞榜继续被 **多模态大模型**（图像/视频/文本）占据前列，Gemini‑系列的 **google/gemma‑4‑31B‑it** 与百度 OCR 模型 **baidu/Unlimited‑OCR** 分别以 3.3k、2.5k 点赞领跑，显示多模态理解与生成仍是社区热点。  
- 量化社区活跃，**GGUF**、**MLX 1‑bit/2‑bit** 及 **Ternary** 系列模型点赞均在 100‑800 区间，下载量往往突破百万，表明轻量化部署需求旺盛。  
- 专用领域出现新鲜尝试：**nvidia/Nemotron‑3‑Embed‑1B‑BF16**（句子嵌入）和 **openbmb/MiniCPM‑RobotManip/Track**（视觉‑语言‑动作）凸显嵌入式与机器人场景与具身智能的融合趋势。

---

## 🔥 热门模型（按分类）

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,239 | 531,947 | 中英双语的 MoE 语言模型，兼具强指令遵循与对话能力。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,304 | 11,987,240 | Gemma 系列最新 31B 指令微调版，支持图文双模理解，生成质量接近顶尖闭源模型。 |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 851 | 13,698 | 基于 Hunyuan 框架的中文 LLM，擅长长文本生成与知识问答。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 159 | 5,494 | 1B 参数的紧凑型对话模型，内置思考链（Chain‑of‑Thought）提升推理。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|------------|
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,286 | 13,462 | 图文双模生成模型，支持图像描述与跨模态对话。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,487 | 2,122,848 | 高精度通用 OCR，能直接输出结构化文本，适用于票据、场景文字识别。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,376 | 2,117,323 | 9B 参数的 Qwen3.5 基础模型，采用 GGUF 量化，兼具图文理解与强推理。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,943 | 2,007,025 | 35B MoE 视觉语言模型，去审校版本侧重创意生成与开放式对话。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 174 | 16,719 | 27B Qwen3.6 基础模型的 GGUF 量化版，融合神话与寓言数据增强叙事能力。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 222 | 14,587 | 基于 Qwen3.5 的轻量 OCR 模型，专注于票据与表格字段提取。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 485 | 10,647 | 27B 图文模型，内置思考链提升复杂推理与多轮对话表现。 |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 147 | 2,408 | 图像到视频生成模型（I2V），可将静态图像转为短片，适用于创意短视频。 |
| [OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 89 | 544 | 实时视频文本理解模型，支持帧级别字幕生成与事件定位。 |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 217

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*