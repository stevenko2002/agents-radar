# Hugging Face 热门模型日报 2026-09-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-10 22:15 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-09-11

---

## 🚀 今日速览

- **Qwen 3.8 系列霸榜**：原版、Flash-Next、量化版（GGUF/GSQ/NVFP4）与微调版合计占据 Top 30 近半数席位，成为当前开源生态绝对主力。  
- **视频生成迎来“百模大战”**：MiniMax-H3、LTX-2.5、Minimax-h3_Singularity 三大原生视频模型同期爆发，且均已有社区 LoRA/微调跟进。  
- **国产 MoE 与小模型加速落地**：DeepSeek-V4.1-Flash、MiniCPM5-2B、GLM-5.3-Flash、Spark-X2.5-4B 等 2B~4B 级模型点赞与下载双高，边缘侧部署需求显性化。  
- **量化技术栈显著成熟**：GGUF 仍是主流，但 GSQ-RCO、NVFP4 等混合精度/硬件原生量化方案开始大规模上榜，显示推理能效竞争进入深水区。  
- **垂直领域模型破圈**：TimesFM-3.0（时序预测）、VibeVoice-ASR（流式语音识别）、Breeze-TTS-2（中文 TTS）、Qwen-Drive（自动驾驶）等专用模型进入热榜，生态广度持续拓展。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,638 | 7.3M | 旗舰级 27B 多模态基座，长上下文+强推理，开源权重的“事实标准”。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,103 | 42K | 2B 参数却具备 7B 级能力，MoE+长上下文，手机端可跑的“小钢炮”。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,061 | 16K | 讯飞星火 2.5 4B 开源版，中文指令遵循与工具调用表现亮眼。 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,800 | 552K | GLM-5 系列满血版，MoE 架构，代码/数学/多语言均衡发展。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,225 | 1.0M | 5.3 蒸馏加速版，推理延迟大幅降低，适合实时对话场景。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,293 | 6 | V4 系列轻量化实验版，首发即关注度极高，预示新一代架构方向。 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 273 | 4.5K | 36B 总参/4B 激活的 MoE 视觉语言模型，探索稀疏激活极限。 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 651 | 2.4K | 基于 Qwen3.5 MoE 微调的小模型，主打多语言与工具使用。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,123 | 5.1M | 目前下载量最大的开源视频生成模型，支持文生/图生视频，商用友好。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,371 | 1.7M | 单文件 Diffusion 视频模型，推理快、显存低，ComfyUI 生态原生支持。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 261 | 97K | 基于 MiniMax-H3 的社区深度微调版，画质与运动一致性显著提升。 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 286 | 39 | 首个基于 MiniMax-H3 的 LoRA 微调公开权重，开启视频模型微调潮。 |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 153 | 0 | 角色替换/动作迁移专用视频编辑模型，可控视频生成新范式。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,076 | 564K | Qwen 3.8 多模态加速版，原生支持图文互留、视频理解，部署友好。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,225 | 1.0M | （同上，亦归类于多模态）原生图文对话，边缘侧部署首选。 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 858 | 401K | DeepSeek 首个开源多模态实验版，架构创新引发社区跟进热潮。 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 153 | 2.8K | 端到端自动驾驶模型，4B 参数直接输出轨迹规划，车载芯片可跑。 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 186 | 2.1K | 流式语音识别大模型，低延迟、支持长音频，会议/直播场景适用。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 529 | 8.2K | 中文语音合成新 SOTA，音色自然、支持情绪控制，零样本克隆。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 时序 / 驾驶）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 715 | 484K | Google 发布的通用时序预测基座模型，零样本泛化能力强，工业级落地就绪。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 368 | 24K | 网络安全垂直微调，FP8 量化，去拒答，专攻漏洞分析/威胁情报任务。 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 153 | 2.8K | （同上）自动驾驶运动规划专用，端到端架构，仿真与实车均有验证。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 其它量化）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,844 | 11.1M | 全网下载量最高的 GGUF 量化库，多精度分层量化，llama.cpp/Ollama 开箱即用。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 791 | 615K | 引入 GSQ（分组稀疏量化）+ RCO（重标定校正），在 4bit 下几乎无损。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 445 | 518K | “厨房水槽式”融合微调：去审查+代码增强+MTP 预测，创作/编程双强。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-...-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,075 | 1.9M | 激进去审查+MTP 加速，多模态保留完好，角色扮演社区最爱。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 864 | 315K | Abliterated 方案去安全拒答，保留原模型知识上限，部署简便。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 874 | 1.1M | Flash-Next 官方加速版的 GGUF 适配，首推消费级显卡部署 27B 多模态。 |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 188 | 192K | 基于 Qwen3.8-Flash 的 Opus 编码微调+GGUF，长文本生成质量提升。 |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 190 | 63K | NVIDIA ModelOpt 原生 FP4 量化，H100/B200 上吞吐提升 2×+，生产级部署首选。 |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 151 | 51K | 官方发布的 2B 模型 GGUF 版，手机/树莓派可流畅运行，边缘侧标杆。 |
| [XHToken/Spark-X2.5-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.5-4B-GGUF) | XHToken | 134 | 74K | 星火 4B 官方量化，适配 llama.cpp/OLLAMA/LM Studio，中文对话体验佳。 |

---

## 🌐 生态信号深度解析（~160 字）

**模型家族势头**：Qwen 3.8 以“原版+Flash加速版+多量化版+社区微调版”全矩阵霸榜，确立了开源基座模型的“Linux 地位”；MiniMax-H3 与 LTX-2.5 双雄并进，视频生成从“可用”进入“可控/可微调”阶段；DeepSeek-V4、GLM-5、MiniCPM5、Spark-X2.5 四大国产新一代模型同周发布，标志着中国开源阵营完成从“追赶”到“并跑/领跑”的代际跨越。  
**开源 vs 闭源**：Top 30 均为开放权重（含商用友好许可），闭源模型已彻底缺席热榜；社区通过 GGUF/GSQ/NVFP4 等量化技术将 27B 级模型下放至 24GB/16GB 显存甚至 CPU，实现了“能力民主化”。  
**量化与微调活动**：Unsloth、ISTA-DASLab、DavidAU、HauhauCS 等高产微调组形成“量化即服务”生态；NVFP4、GSQ-RCO 等硬件感知/混合精度量化开始取代单一 INT4，推理能效竞争转向算子级优化；视频模型 LoRA 微调（OpenVDN）与音频流式模型（VibeVoice-ASR）显

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*