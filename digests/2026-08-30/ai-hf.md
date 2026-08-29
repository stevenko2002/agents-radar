# Hugging Face 热门模型日报 2026-08-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-29 22:15 UTC

---

# Hugging Face 热门模型日报（2026‑08‑30）

## 今日速览
- **多模态模型再度领跑**：Qwen 系列（尤其是 27B 规模）在图文/视频任务上持续获赞，下载量突破 4 M，显示企业与社区对大模型多模态能力的强烈需求。  
- **量化与 GGUF 加速落地**：un‑sloth 与 orcarouter 提供的大量 GGUF/FP8 版本在移动端与 Apple Silicon、MLX 上迅速攀升，说明轻量化部署已成主流。  
- **文本生成仍是核心**：DeepSeek‑V4‑Flash 与 GLM‑5.3‑Flash 系列在文本生成榜单中保持高热度，特别是 Flash 系列的“低功耗 + 高吞吐”组合受到关注。  

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[DeepSeek‑V4‑Flash‑0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai / 3,805 / 4,330,482 | 新一代 4‑B 参数 Flash 模型，以高速推理和对话安全微调著称，已成为文本生成首选。 |
| **[zai‑org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai‑org / 1,615 / 189,793 | GLM‑5.3 的 Flash 变体，兼顾指令微调与高效推理，下载量居榜前列。 |
| **[zai‑org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai‑org / 1,262 / 8,804 | 原始 MOE‑DSA 版本，提供更完整的模型结构，适合二次研发。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter / 1,211 / 97,508 | 基于 MLX 的 Qwen 3.8‑27B 去审查版，针对 Apple Silicon 优化，适合本地部署。 |
| **[pipecat‑ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat‑ai / 133 / 2,668 | Nemotron‑H 系列轻量指令模型，专注语音交互场景。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti / 818 / 1,843,237 | Qwen 3.8‑27B 的 GGUF 量化版，兼容 llama.cpp，便于在 CPU 上快速推理。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen / 4,284 / 52,341 | 下一代图文‑to‑text 大模型，内置视觉感知，适合聊天机器人与检索增强。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen / 13,246 / 4,028,839 | 27 B 参数全能多模态模型，下载量最高，显示企业级部署需求。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks / 2,122 / 1,044,661 | 单文件 Diffusion 视频生成器，支持从单张图片到 8 s 短视频的端到端翻译。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI / 4,617 / 5,018,833 | 领先的图像‑to‑视频模型，可实现高质量文本驱动视频合成，下载量居榜首。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue / 188 / 1,017 | 高保真中文 TTS，基于 Transformer‑SAD 结构，适合 AI 助手与配音。 |
| **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)** | FastVideo / 148 / 0 | “Zero‑data” 预览版视频生成模型，展示了低算力下的快速帧预测潜力。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[ornith‑ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai / 495 / 106,562 | 35 B 参数 Qwen‑3.5‑MoE，针对科研文献检索与技术问答做了专门微调。 |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters / 150 / 831 | 小规模金融多模态模型，适配企业内部文档检索与报告生成。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric / 1,517 / 0 | MLX 环境下的 Qwen 对话模板库，帮助开发者快速统一 Prompt 格式。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth / 562 / 188,061 | Qwen 3.8‑Flash‑Next 的 GGUF 量化版本，兼容 `ggml`，在边缘设备上实现 2‑3 倍加速。 |
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 3,182 / 8,363,481 | 27 B 参数完整 GGUF，下载量最高的量化模型，证明大模型可在本地 CPU 推理。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter / 1,253 / 290,216 | FP8 精度量化，兼顾显存占用与推理速度，适合 GPU‑8bit 环境。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter / 552 / 215,892 | “去审查”版 GGUF，满足对内容过滤限制宽松的科研实验需求。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS / 745 / 1,061,687 | Aggressive‑MTP 量化方案，提升多模态推理吞吐，吸引大量视觉开发者。 |
| **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** | orcarouter / 206 / 42,987 | 原始未量化去审查权重，供需要完整 FP16 精度的研究者使用。 |

---

## 生态信号（≈150 字）

本周 **Qwen** 系列（尤其是 27 B 与 Flash‑Next）再度巩固其在多模态领域的领导地位，下载量与社区二次开发（GGUF、FP8、Uncensored）同步激增，说明 **大模型多模态化 + 轻量化** 正成为主流趋势。与此同时，**DeepSeek‑V4‑Flash** 与 **GLM‑5.3‑Flash** 持续领跑文本生成，表明高效指令微调仍是商业化入口。量化方面，**GGUF** 已从实验阶段跃升为生产级分发渠道，多个社区（un‑sloth、orcarouter）提供同一基模型的不同量化档位，凸显 **“一模型多姿态”** 的生态演进。开源权重占比继续上升，闭源/商业审查版模型虽仍有市场，但其下载趋势相对平缓。

---

## 值得探索

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
   - **理由**：下载量已破 8 M，展示了 27 B 大模型在 GGUF 格式下的可部署性；适合作为本地 LLM 基座进行自定义指令微调。  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   - **理由**：首批高质量图像‑to‑视频模型，跨模态生成质量接近商用水平，且配套 LoRA 微调资源丰富，可快速实验视频内容创作。  

3. **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**  
   - **理由**：在文本生成与对话安全性方面表现突出，且拥有 4 M+ 下载量，适合作为指令微调与多轮对话系统的基线模型。  

--- 

> **提示**：若要在边缘设备或 Apple Silicon 上快速部署，请优先考虑 GGUF/FP8 版本；若需求是高保真多模态交互，则 Qwen‑3.8‑Flash‑Next 与 MiniMax‑H3 为首选。祝科研与产品开发顺利！

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*