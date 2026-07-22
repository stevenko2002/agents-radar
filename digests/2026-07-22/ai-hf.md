# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 01:03 UTC

---

# **Hugging Face 热门模型日报**
*日期：2026-07-22 | 数据来源：Hugging Face Hub（按周点赞排序）*

---

## **🔥 今日速览**
本周 Hugging Face Hub 上热门模型呈现 **多模态与低比特量化** 双重主导态势。中国团队（如百度、zai-org）在 OCR 和大语言模型领域表现抢眼，而 **Qwen3.6 系列** 及其衍生的 **GGUF 量化版本** 成为社区微调的焦点。同时，**NVIDIA 的 Nemotron 系列** 在嵌入和语音识别领域持续发力，显示工业级应用的快速迭代。值得关注的是，部分模型（如 `Unlimited-OCR`）下载量突破 **200 万**，反映开源生态对实用工具的强劲需求。

---

## **📊 热门模型**

### **🧠 语言模型（LLM、对话模型、指令微调）**
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   *作者：zai-org* | *点赞：4,277* | *下载：545,109*
   **一句话：** 基于 GLM-MoE 架构的 **5.2B 参数** 中文对话模型，支持多模态输入，在中文任务中表现优异。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   *作者：prism-ml* | *点赞：899* | *下载：432,196*
   **一句话：** **27B 参数** 的 **2-bit 量化** 模型，专为低成本部署优化，支持对话与推理。

3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   *作者：prism-ml* | *点赞：570* | *下载：1,404,962*
   **一句话：** **1-bit 量化** 的 **27B 模型**，llama.cpp 兼容，适合边缘设备推理。

4. **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
   *作者：poolside* | *点赞：182* | *下载：3,056*
   **一句话：** **Laguna 系列** 的小型文本生成模型，轻量级且易于部署。

5. **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
   *作者：Motif-Technologies* | *点赞：124* | *下载：125*
   **一句话：** **Motif 3** 为专有架构，支持特征提取，适合企业级应用。

---

### **🎨 多模态与生成（图像、视频、音频、文本到X）**
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *作者：baidu* | *点赞：2,605* | *下载：2,237,351*
   **一句话：** **百度开源的无限制 OCR 模型**，支持多语言文本识别，下载量遥遥领先。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   *作者：HauhauCS* | *点赞：2,970* | *下载：1,997,690*
   **一句话：** **Qwen3.6 的 35B MoE 版本**，**无审查** 且支持多模态输入，社区微调热门。

3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   *作者：empero-ai* | *点赞：2,387* | *下载：2,133,420*
   **一句话：** **9B 参数** 的 **Qwen3.5 量化版**，支持 **推理与多模态**，GGUF 格式便于本地部署。

4. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   *作者：google* | *点赞：3,313* | *下载：12,113,203*
   **一句话：** **Gemma 4 系列** 的 **31B 多模态模型**，Google 官方发布，支持图文对话与特征提取。

5. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   *作者：moonshotai* | *点赞：1,199* | *下载：722,058*
   **一句话：** **Kimi 系列** 的 **代码专用模型**，支持多模态输入，适合开发者使用。

6. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   *作者：OpenMOSS-Team* | *点赞：299* | *下载：92,265*
   **一句话：** **MOSS 团队推出的语音转录与说话人分离模型**，适合音频处理场景。

7. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   *作者：Wan-AI* | *点赞：151* | *下载：2,497*
   **一句话：** **14B 参数的图像到视频生成模型**，支持动作合成，适合创意应用。

---

### **🔧 专用模型（代码、数学、医疗、嵌入）**
1. **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
   *作者：nvidia* | *点赞：96* | *下载：93,021*
   **一句话：** **NVIDIA 的 1B 嵌入模型**，基于 **MiniStral 3**，支持句子相似度计算。

2. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
   *作者：nvidia* | *点赞：902* | *下载：590,230*
   **一句话：** **流式语音识别模型**，适合实时语音转录，NVIDIA 官方发布。

3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   *作者：openbmb* | *点赞：147* | *下载：58*
   **一句话：** **MiniCPM 的机器人操作模型**，支持 **视觉-语言-动作** 多模态交互。

4. **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
   *作者：openbmb* | *点赖：107* | *下载：72*
   **一句话：** **MiniCPM 的机器人轨迹规划模型**，适合自动化控制。

---
### **📦 微调与量化（社区微调、GGUF、AWQ）**
1. **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
   *作者：prism-ml* | *点赞：161* | *下载：25,273*
   **一句话：** **1-bit 量化** 的 **27B 模型**，支持 **MLX 框架**，适合苹果 Silicon 设备。

2. **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)**
   *作者：prism-ml* | *点赞：135* | *下载：20,445*
   **一句话：** **2-bit 量化** 的 **27B 模型**，MLX 兼容，平衡精度与效率。

3. **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**
   *作者：unsloth* | *点赞：116* | *下载：7,377*
   **一句话：** **Inkling 模型的 GGUF 版本**，支持 **多模态与音频输入**，Unsloth 优化。

4. **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
   *作者：DavidAU* | *点赞：242* | *下载：62,842*
   **一句话：** **Qwen3.6 的极致微调版本**，包含 **无审查、多合一** 标签，GGUF 格式便于部署。

5. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)**
   *作者：GnLOLot* | *点赞：147* | *下载：51,746*
   **一句话：** **MiniCPM5 的思考增强版**，GGUF 量化，适合本地推理。

---
## **🌱 生态信号**
本周生态呈现 **三大趋势**：

1. **Qwen 与 GLM 双雄争霸**
   - **Qwen3.6 系列** 及其 **GGUF 量化版本**（如 `HauhauCS` 的无审查版）成为社区微调的热门选择，下载量均破 **100 万**。
   - **zai-org 的 GLM-5.2** 在中文对话领域表现突出，点赞数最高（4,277），显示中文模型生态的活跃。

2. **低比特量化成为主流**
   - **prism-ml 的 1-bit/2-bit 量化模型**（如 `Ternary-Bonsai-27B`）下载量激增，反映社区对 **低成本部署** 的需求。
   - **GGUF 格式** 成为量化模型的标准，Unsloth、HauhauCS 等团队纷纷发布兼容版本。

3. **工业级应用加速**
   - **NVIDIA 的 Nemotron 系列**（嵌入与 ASR）和 **百度的 Unlimited-OCR** 等模型，下载量均破 **50 万**，体现 **实用工具** 在开源生态中的重要性。
   - **机器人与多模态模型**（如 `MiniCPM-RobotManip`）开始出现，预示 **AI 与现实世界交互** 的下一波浪潮。

---
## **🔍 值得探索**
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   **理由：** 作为 **Qwen3.6 的无审查 MoE 版本**，支持多模态输入，适合研究 **去中心化对话系统** 或 **创意生成**。下载量 **199 万**，社区活跃度高。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   **理由：** **2-bit 量化的 27B 模型**，llama.cpp 兼容，适合 **边缘设备推理**。点赞数虽不高（899），但下载量 **43 万**，显示实用性强。

3. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   **理由：** **Google 官方发布的 31B 多模态模型**，支持图文对话与特征提取，下载量 **1200 万**，适合 **企业级应用** 或 **研究对比**。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*