# Hugging Face 热门模型日报 2026-09-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-18 22:15 UTC

---

# Hugging Face 热门模型日报（2026-09-19）

## 今日速览

今日 Hugging Face 榜单由 Qwen3.8 系列强势主导——官方权重、GGUF 量化、社区微调共计占据近 10 个席位，其中官方 `Qwen3.8-27B` 以 15,643 周点赞和 735 万次下载稳居第一。DeepSeek 新推 V4.1-Flash 多模态模型，MiniMax-H3 视频生成模型以 545 万下载成为视频类最大黑马。值得关注的是，社区量化活动空前活跃，三元量化（Ternary 2-bit）、MLX、GSQ/RCO 等多元格式并行涌现，边缘推理加速成为明显趋势。此外，文本到音频、音乐生成等"文生万物"能力持续升温。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **Edge0/Edge0-35B-A3B-preview** — [链接](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)
   作者：Edge0 | 点赞 3,392 | 下载 52,519
   基于 Qwen3.5 MoE 架构的 35B 总参/3B 激活边缘推理模型，主打端侧低算力场景，是"边缘推理"标签下的新星。

2. **meta-llama/Llama-3.1-8B-Instruct** — [链接](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)
   作者：meta-llama | 点赞 7,718 | 下载 5,934,139
   元老级开源模型，长期霸榜的 8B 指令微调模型，凭借稳定性能和庞大生态持续吸引用户。

3. **TokenRhythm/NeoHorse-1-4B** — [链接](https://huggingface.co/TokenRhythm/NeoHorse-1-4B)
   作者：TokenRhythm | 点赞 2,366 | 下载 22,666
   基于 Qwen3.5 文本架构的 4B 智能体模型，以极小的体量实现强 agentic 能力，是轻量Agent赛道的热门选择。

4. **openbmb/MiniCPM5-2B** — [链接](https://huggingface.co/openbmb/MiniCPM5-2B)
   作者：openbmb | 点赞 1,560 | 下载 357,166
   MiniCPM 第五代 2B 小模型，延续"小模型大能力"路线，适合低内存端侧与嵌入式部署。

5. **XHToken/Spark-X2.5-4B** — [链接](https://huggingface.co/XHToken/Spark-X2.5-4B)
   作者：XHToken | 点赞 1,272 | 下载 29,684
   新一代 4B 对话模型，在同类小模型中点赞与热度突出，反映轻量 LLM 竞争加剧。

6. **TokenRhythm/NeoHorse-1-9B** — [链接](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)
   作者：TokenRhythm | 点赞 887 | 下载 10,746
   NeoHorse 系列的 9B 版本，进一步增强 agentic 与推理能力，与 4B 版本形成梯度覆盖。

7. **XingChen-AGI/Xing4.0-29B-A4B** — [链接](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
   作者：XingChen-AGI | 点赞 424 | 下载 3,073
   29B 总参/4B 激活的 MoE 对话模型，新兴架构尝试在高参数效率下维持对话质量。

8. **harshatheg/Qwen-2.5-1B-RLCD** — [链接](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)
   作者：harshatheg | 点赞 370 | 下载 0
   基于 Qwen-2.5-1B 的约束/结构化解码探索，MLX 格式针对苹果芯片优化，下载为 0 说明尚在早期阶段。

9. **internlm/Atria-Dawn-Preview** — [链接](https://huggingface.co/internlm/Atria-Dawn-Preview)
   作者：internlm | 点赞 164 | 下载 711
   上海AI实验室的预览版模型，基于 GLM MoE 架构，附带 arXiv 论文，尚未大规模推广。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
   作者：Qwen | 点赞 15,643 | 下载 7,358,662
   通义千问最新旗舰图文多模态模型，以 736 万下载量遥遥领先，是本周毫无争议的"榜王"与生态地基。

2. **MiniMaxAI/MiniMax-H3** — [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)
   作者：MiniMaxAI | 点赞 5,452 | 下载 4,449,605
   MiniMax 第三代视频生成模型，支持文生视频与图生视频，以 445 万下载成为视频生成领域最热模型。

3. **Qwen/Qwen3.8-Flash-Next** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
   作者：Qwen | 点赞 5,401 | 下载 724,142
   Qwen 新一代 Flash 系列图文模型，定位高效推理，在性能与速度之间取得平衡，点赞迅速破五千。

4. **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
   作者：Lightricks | 点赞 4,327 | 下载 1,590,087
   LTX 系列最新视频生成模型，采用 diffusion-single-file 单文件架构，支持图/文/视频到视频多路输入。

5. **deepseek-ai/DeepSeek-V4.1-Flash** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
   作者：deepseek-ai | 点赞 3,165 | 下载 429,865
   DeepSeek 最新 Flash 多模态模型，继承 V4 系列强大的图文理解能力，以更快的推理速度切入高频场景。

6. **zai-org/GLM-5.3-Flash** — [链接](https://huggingface.co/zai-org/GLM-5.3-Flash)
   作者：zai-org | 点赞 2,445 | 下载 2,669,173
   智谱 GLM 第五代 Flash 图文多模态模型，下载量高达 267 万，是 Qwen 之外最活跃的国产多模态家族。

7. **m-a-p/YuE2-3B** — [链接](https://huggingface.co/m-a-p/YuE2-3B)
   作者：m-a-p | 点赞 795 | 下载 13,668
   3B 参数量级音乐生成模型，采用"符号规划 + 智能编辑"的双级架构，是音乐生成领域的重要开源探索。

8. **WarmBloodAban/Minimax-h3_Singularity** — [链接](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)
   作者：WarmBloodAban | 点赞 495 | 下载 217,900
   基于 MiniMax-H3 的视频生成派生版，社区热度显示用户对 H3 生态的二次开发兴趣浓厚。

9. **ukisai/Swift-Qwen3.8-27b** — [链接](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)
   作者：ukisai | 点赞 438 | 下载 6,293
   社区微调的 Qwen3.8 图文模型，主打高效推理与响应速度，是 Qwen3.8 微调浪潮的一部分。

10. **tencent/AuK** — [链接](https://huggingface.co/tencent/AuK)
    作者：tencent | 点赞 303 | 下载 3,184
    腾讯开源零样本 TTS 模型，支持语音克隆，以纯音频标签切入语音生成赛道，下载量尚低但方向鲜明。

11. **TaichuAI/ZDTaichu5.0-9B** — [链接](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)
    作者：TaichuAI | 点赞 181 | 下载 1,802
    9B 多模态视觉语言模型，主打空间推理能力，在细分多模态任务中探索差异化路线。

12. **Agnes-AI/Agnes-3.0-Flash** — [链接](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)
    作者：Agnes-AI | 点赞 224 | 下载 1,357
    新的经向多模态 Flash 模型，下载量尚低，处于预热阶段。

13. **Comfy-Org/YuE2** — [链接](https://huggingface.co/Comfy-Org/YuE2)
    作者：Comfy-Org | 点赞 185 | 下载 102,247
    ComfyUI 官方整理的 YuE2 音乐生成工作流版本，下载量达 10 万，说明 ComfyUI 生态已将音频生成纳入主流。

### 🔧 专用模型（代码、数学、医疗、嵌入）

1. **sentence-transformers/all-MiniLM-L6-v2** — [链接](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
   作者：sentence-transformers | 点赞 6,060 | 下载 255,050,544
   现象级句子嵌入模型，以 2.55 亿周下载量成为全场下载之王，是 RAG 与相似度匹配的基础设施级模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **unsloth/Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
   作者：unsloth | 点赞 4,314 | 下载 7,628,907
   Unsloth 官方 Qwen3.8 量化版，下载量高达 763 万（超过原版），表明本地推理对量化格式的刚性需求。

2. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
   作者：ISTA-DASLab | 点赞 1,312 | 下载 1,078,301
   学术实验室推出的 GSQ+RCO 混合精度量化 GGUF，是对 Qwen3.8 进行低比特优化的前沿尝试。

3. **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
   作者：DavidAU | 点赞 896 | 下载 1,197,378
   社区知名"融合怪"模型，将多模型权重融合并做 uncensored 处理，下载量破百万，典型的社区活力体现。

4. **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
   作者：prism-ml | 点赞 895 | 下载 405,609
   27B 三元量化（Ternary 2-bit）GGUF 模型，用极限位宽挑战 27B 模型的本地运行门槛，下载量达 40 万。

5. **ukisai/Swift-Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)
   作者：ukisai | 点赞 280 | 下载 100,177
   Swift 微调版的 GGUF 量化，面向 llama.cpp 生态，为本地用户提供经过效率优化的 Qwen3.8 变体。

6. **dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8** — [链接](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)
   作者：dealignai | 点赞 279 | 下载 33,065
   DeepSeek V4.1-Flash 的 uncensored FP8 社区版，继官方发布后迅速渗透本地推理市场。

7. **prism-ml/Ternary-Bonsai-2-27B-mlx-2bit** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)
   作者：prism-ml | 点赞 169 | 下载 5,056
   三元量化模型的 MLX 版本，专为 Apple Silicon 生态设计，是边缘推理多元格式布局的一环。

## 生态信号

本周最显著的势头来自 **Qwen3.8 家族**——它不仅是下载量最高的单一模型（735 万），还催生了 GGUF、MLX、GSQ/RCO、社区微调等大量衍生生态，形成"官方权重 + 多量化格式 + 社区再训练"的完整链条。**开源权重完全主导**榜单，30 个模型中无一闭源 API 模型，且 Meta、Qwen、DeepSeek、GLM、MiniMax 等多强并立，竞争已从"谁更大"转向"谁更易于本地化与定制化"。量化活动尤其值得关注：除传统 GGUF 外，**三元 2-bit 量化（Ternary-Bonsai）** 和 GSQ/RCO 混合精度等新型压缩方式进入主流视野，说明本地推理与边缘部署正成为 2026 年模型分发的重要驱动。社区微调也异常活跃，从 uncensored 版本到 agentic 强化，用户不再满足于官方权重。此外，**音频/音乐生成**（YuE2、AuK）首次密集进入榜单，标志着"文生万物"的边界正在快速外扩。

## 值得探索

1. **Edge0/Edge0-35B-A3B-preview** — 边缘推理 + MoE 的新架构组合，仅 3B 激活参数却承载 35B 总参数的知识容量，是理解"大模型能力如何下沉到端侧"的极佳样本，适合研究边缘部署与推理效率的用户。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — 三元量化是当前最具实验性的压缩路线，仅用 2-bit 精度承载 27B 模型，下载量已超 40 万，值得验证其质量损失与推理加速的实际收益，是量化方向不容错过的技术案例。

3. **MiniMaxAI/MiniMax-H3** — 445 万下载量的视频生成模型，点赞与下载规模均处视频赛道头部，对从事视频创作、数字人、动态内容生成的研究者和应用开发者来说，是当前最值得上手的视频生成底座。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*