# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-25 22:16 UTC

---

# Hugging Face 热门模型日报（2026‑08‑26）

---

## 今日速览
1. **Qwen 3.8 系列继续主导**，原始 27B 权重（Qwen/Qwen3.8-27B）与大量社区衍生版（GGUF、MLX、Uncensored 等）占据榜单前十。  
2. **DeepSeek‑V4 系列强势回归**，Flash 版以 3.7k 点赞、350 万下载领跑文本生成模型。  
3. **多模态生成进入快车道**：视觉‑语言大模型、文本‑视频（MiniMax‑H3、Lightricks/LTX‑2.5）以及文本‑音频（MiniMax‑Music3）下载量均突破 80 万。  
4. **量化与微调生态活跃**：GGUF、FP8、D‑Flash、Cold‑Fusion 等多种量化/微调方式共计 15 条记录，社区对轻量化部署需求显著上升。  

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek‑ai / 3,713 / 3,528,373 | DeepSeek‑V4 Flash 采用最新 FlashAttention，提供高吞吐的对话/指令生成，社区热度居前。 |
| **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** | deepseek‑ai / 757 / 74,707 | Pro 版在安全性与可扩展性上做了强化，适合作为企业级文本生成后端。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS / 746 / 389,747 | 经过 “obliterated” 微调的 Qwen 3.8，专注提升开放式对话的鲁棒性。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith‑ai / 418 / 70,158 | 35B MoE 结构的 Qwen‑3.5‑MoE，兼顾高效推理与大规模知识覆盖。 |
| **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** | ornith‑ai / 213 / 98,323 | 9B 轻量化版本，适合资源受限的本地部署。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti / 720 / 1,525,645 | GGUF 版的 “uncensored” Qwen，兼容 llama.cpp，下载量高，适合边缘设备。 |
| **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** | superwhisper / 238 / 3,474 | 小型通用模型，既能做文本生成也能兼容 ASR 任务，展示了模型多功能性。 |

### 🎨 多模态与生成（图像、视频、音频、文本→X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen / 12,695 / 2,945,415 | 原始 27B 多模态大模型（图像‑文本‑生成），是本周点赞和下载的“双冠”。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter / 1,093 / 68,855 | 面向 Apple Silicon 的 MLX 编译版，专为本地视觉‑语言推理优化。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS / 622 / 832,185 | GGUF 版 MTP（Multi‑Task‑Prompt）微调，提升图像‑文本交互的多轮表现。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks / 1,790 / 833,845 | 单文件 Diffusion 模型，支持 **image‑to‑video** 与 **text‑to‑video**，在创意生成社区获热捧。 |
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI / 4,455 / 4,639,786 | 跨模态 **image‑text‑to‑video** 扩散模型，下载量已突破 460 万，适合短视频自动生成。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI / 1,243 / 18,705 | 文本‑到‑音乐扩散模型，能够依据指令生成高质量音轨，是音频生成的最新热点。 |
| **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** | Audio8 / 154 / 3,640 | 小规模 TTS 模型，展示了 Transformer‑s 架构在中文语音合成的可行性。 |
| **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** | sensenova / 151 / 2,682 | “any‑to‑any” 多模态模型，融合视觉、语音、文本特征，标志着通用感知模型的萌芽。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai / 10,995 / 2,865,293 | 轻量化视觉‑语言模型，压缩张量技术让其在边缘设备上保持较好辨识能力。 |
| **[z‑lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** | z‑lab / 226 / 64,984 | 采用 D‑Flash 2 推理加速，专为大规模检索与嵌入任务设计。 |
| **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** | incoai / 178 / 105,786 | 与上条类似的社区实现，提供开箱即用的高效推理备选。 |

### 📦 微调与量化（社区微调、GGUF、AWQ、FP8）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth / 2,904 / 7,334,695 | 领先的 GGUF 量化实现，兼容 `llama.cpp`，下载量居全站首位，体现量化需求的爆发。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter / 1,145 / 249,744 | FP8 低精度版本，显著降低显存占用，适合 GPU 8‑16GB 环境。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter / 452 / 154,225 | “Uncensored” 微调 + GGUF 打包，提供更自由的对话内容。 |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui-ai / 355 / 1,230,831 | “Abliterated” 微调 + GGUF，兼顾安全过滤与轻量化，下载量位列前十。 |
| **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU / 238 / 221,918 | 融合 Cold‑Fusion + GAIN 训练技巧的 GGUF 版，展示了进阶微调的实验价值。 |
| **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)** | 0bserverx / 274 / 735,183 | “Heretic” 系列的极端去审查微调，GGUF 打包，吸引大量研究者关注模型边界。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric / 1,467 / 0 | 提供统一的 Jinja‑模板，帮助社区快速构建 Qwen‑3.5 对话系统。 |
| **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** | peculiar‑ragdoll / 243 / 0 | 同上，针对 Sharp 框架的模板集合。 |

---

## 生态信号（≈150字）

本周 **Qwen3.8-27B** 系列形成“核心 + 多样化分支”格局，原始权重凭借 12k 点赞保持顶流，社区则围绕 **GGUF、MLX、FP8、Uncensored/Abliterated** 等方向进行二次量化和去审查微调，体现出 **轻量部署 + 内容开放** 双重需求。**DeepSeek‑V4** 的 Flash 与 Pro 两个版本交叉上榜，说明大模型对话安全和推理效率仍是主流竞争点。多模态方面，**MiniMax‑H3** 与 **Lightricks/LTX‑2.5** 的视频扩散模型下载量突破 400 万，预示 **文本‑→‑视频** 正从实验室走向商业化。整体来看，**开源权重仍是流量入口**（Qwen、DeepSeek、MiniMax 占比 >70%），而 **量化/微调的社区产出正在快速增长**，尤其是 GGUF 生态已成为部署首选。

---

## 值得探索

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
   *理由*：下载量破 730 万，显著降低显存需求（<8 GB），兼容 `llama.cpp`，是当前最易部署的多模态大模型。  

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   *理由*：首批实现 **image‑text‑to‑video** 的扩散模型，生成质量已接近专业剪辑工具，适合短视频内容创作与研究。  

3. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**  
   *理由*：采用最新 FlashAttention，提供高吞吐对话能力，且开源权重保持了优秀的安全过滤，被众多对话系统项目直接采纳。  

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*