# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-05 22:17 UTC

---

## Hugging Face 热门模型日报（2026-09-06）

### 今日速览

今日榜单由 **Qwen3.8 与 GLM-5.3 两大开源家族**统治，官方权重与社区微调版本合计占据近半席位；Flash/Next 轻量敏捷路线成为新趋势，各家不再只卷全参数大模型；同时，**视频生成**（MiniMax-H3、LTX-2.5）与 **GGUF/Uncensored 类衍生模型**的热度显著高于预期；时间序列、嵌入等专用模型则保持长期稳定的高下载量；值得注意的开源新势力 IFM K2-Horizon 也在本周首度上榜。

---

### 🧠 语言模型（LLM、对话、指令微调）

- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Qwen 官方主力通用多模态 LLM；👍14,033 · ⬇️6,024,467
  Qwen3.8 系列最新全尺寸旗舰，凭借 14033 的周点赞稳居平台霸主，是社区衍生生态的源头。
- [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — Qwen 官方 Flash-Next 对话模型；👍4,913 · ⬇️401,327
  面相下一代的快速推理版本，主打低延迟高效部署，成为轻量级模型代表作。
- [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) — 实验性视觉多模态模型；👍674 · ⬇️184,542
  DeepSeek V4 系列引入视觉理解能力的 Flash 实验版，体现多模态融合的迭代方向。
- [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) — 智谱 GLM-5.3 全尺寸 MoE 模型；👍1,717 · ⬇️370,417
  基于 GLM-MoE-DSA 架构的自研大模型，硬啃 Qwen 的榜单龙头地位。
- [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) — GLM-5.3 原生 Flash 轻量版；👍2,077 · ⬇️727,610
  在保持视觉对话能力的同时主打快速响应，与 Qwen 的 Flash/Next 战略正面对决。
- [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) — 讯飞星火 X2.5 轻量模型；👍535 · ⬇️4,755
  Spark X2.5 的小规模版本，凭借国产语音语义基因进入文本生成赛道。
- [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) — 腾讯混元 Hy4 预览版；👍441 · ⬇️6,195
  混元大模型第四代预览，头部厂商加速追赶周期的又一信号。
- [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) — 全新 MoE 架构 36B，激活仅4B；👍172 · ⬇️1,333
  K2-Horizon 阵营的首个公开 36B-A4B 高稀疏 MoE，其架构值得长期跟踪。
- [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) — 经典 GPT-2 开源权重；👍3,693 · ⬇️14,739,982
  GPT-2 虽是元老模型，但周点赞仍达 3693，说明其作为研究基座的常青影响力。

---

### 🎨 多模态与生成（视觉、视频、音频、文生图）

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 新一代文生/图生视频扩散模型；👍4,932 · ⬇️5,057,414
  原生视频生成明星，一周收获近 5k 赞、超 500 万下载，直冲内容生产工具顶点。
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) — 文生/图生视频 Diffusion 单文件模型；👍2,877 · ⬇️1,484,329
  LTX-2.5 支持 image-to-video、text-to-video 等全链路视频创作，下载量稳居生成类前列。
- [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) — 基于 MiniMax-H3 的社区微调视频模型；👍187 · ⬇️0
  OpenVDN 在 MiniMax-H3 之上做方向性二次微调，印证大视频模型的开源衍生生态成型。
- [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) — 新一代文本转语音模型；👍448 · ⬇️5,962
  全新 TTS 模型 Breeze-TTS-2 首发上榜，语音合成赛道本周的黑马新秀。

---

### 🔧 专用模型（嵌入、时序、视觉检索、经典骨干）

- [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) — 轻量句子相似度嵌入模型；👍5,554 · ⬇️255,006,933
  拥有 2.55 亿次的惊人下载量，是 RAG 与语义检索最普及的默认嵌入基座。
- [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) — 时序预测前沿模型；👍453 · ⬇️123,025
  TimesFM 3.0 将 LLM 能力迁移到时间序列预测，是专业领域受关注的潜在方向。
- [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) — CLIP 视觉-语言对齐模型；👍1,206 · ⬇️20,755,211
  跨模态检索与零样本分类最常用的 CLIP 基座，下载榜常青树。
- [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) — BERT 英文基础模型；👍2,979 · ⬇️56,175,564
  预训练检索与分类的经典老将，依旧保有大批生态依赖。
- [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) — BERT 轻量蒸馏版；👍1,149 · ⬇️7,101,423
  量化与压缩推理场景中的常用替代，蒸馏技术的基石。
- [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) — Meta 多语言语音预训练模型；👍255 · ⬇️12,961
  基于 wav2vec2 的 300M 多语言语音表征模型，支持超千种语言的语音任务。

---

### 📦 微调与量化（社区微调、GGUF、Uncensored、FP8 等衍生生态）

- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) — Qwen3.8-27B 官方 GGUF 量化版；👍3,540 · ⬇️10,157,510
  unsloth 出品的最主流 GCCUF 量化，下载超千万，是本地部署第一入口。
- [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) — 社区 Uncensored GGUF 微调；👍986 · ⬇️2,453,361
  搭载 MTP 的优化版本，最受欢迎的 Uncensored 聊天衍生版之一。
- [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) — 多模态 Uncensored 激进风格；👍964 · ⬇️1,527,627
  保留视觉能力的风格化 Uncensored 版本，面向重度角色扮演用户。
- [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) — abliterated 去审查 GGUF；👍727 · ⬇️283,774
  采用 abliterated 技术剥除安全对齐的 Qwen3.8 版本，Uncensored 生态常客。
- [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) — Flash-Next 官方量化版；👍796 · ⬇️780,823
  轻量快速版本的 GGUF 衍生，便于在消费级设备运行 Flash 系列。
- [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) — 多格式(MLX/safetensors/GGUF)去审查版；👍1,096 · ⬇️968,936
  支持苹果 MLX 和多格式打包，是 Uncensored 全平台部署的仓库型模型。
- [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) — 研究级混合精度量化模型；👍401 · ⬇️297,493
  学术实验室 GSQ+RCO 量化配比方案，展示精细量化研究落地趋势。
- [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) — GLM-5.3-Flash 去审查 FP8 版本；👍186 · ⬇️8,338
  将 Uncensored 微调与 FP8 量化结合，是 GLM 社区的先锋衍生探索。
- [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) — 混合编程与角色扮演长名微调版；👍215 · ⬇️174,405
  追求融合多种采样与功能的长名衍生，体现权重混搭的“模组化”社区玩法。
- [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) — 视觉能力优化 GGUF 版 Qwen；👍113 · ⬇️10,680
  面向视觉场景自动部署的便携 GGUF，展示中小社区的本地化探索。

---

### 🌱 生态信号

**家族垄断与“Flash/Next”潮流**：Qwen3.8 与 GLM5.3 两大权重家族不仅占据官方与量化的双榜，而且普遍主推 Flash/Next 轻量子型号，反映厂商从拼单一大模型转向“全参数旗舰 + 敏捷模型”的组合打法的策略升级。

**衍生生态极度性化**：社区重狂欢 Uncensored/Abliteration 微调与 GGUF 量化衍生，且大量以角色设定、本地部署为导向。由官方、量化工厂(unsloth)、个人作者构成的多层传播网络已完全成熟。

**生成与专业模型长期主义**：视频生成（MiniMax/LTX）下载量创新高；时序预测（TimesFM）、嵌入（MiniLM）与经典 BERT/GPT 等“低点赞高下载”模型构成稳定的基础底座，显示工具的日常使用与跟风热度同样重要。

---

### 🔭 值得探索

- [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)：36B 总参仅激活 4B 的新一代高稀疏 MoE，或许暗示 MoE 效率的新一轮军备竞赛，建议早期入场研究。
- [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)：将 LLM 范式迁移至时间序列预测，金融、商业预测和传感器领域的落地空间大，属于典型“明星实力大于热度”的模型。
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)：不只是榜单热度的视频生成模型，其架构与质量兼具标杆意义，也已被社区开展二次微调（如 vdn-minimax-h3），是观察开源视频生态的最佳样板；搭配社区的衍生观看，能系统性把握文本到视频的开源全链路。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*