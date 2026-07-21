# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 02:18 UTC

---

# **Hugging Face 热门模型日报**
**2026-07-21** | 数据来源：Hugging Face Hub 周度点赞榜（Top 30）

---

---

## **🔥 今日速览**
2026年7月21日，Hugging Face 生态呈现**多模态与大模型量化**双轮驱动态势。Google 的 **Gemma-4-31B-it** 以 **1198万下载量** 稳居榜首，展现闭源模型在多模态对话领域的主导地位；而 **Qwen3.6 系列**（如 HauhauCS 的 35B A3B 版本）凭借开源优势和多模态能力，在社区微调中频繁出现。量化模型方面，**Bonsai 27B** 的 1-bit/2-bit 版本（prism-ml）下载量突破百万，反映社区对轻量化部署的强烈需求。OCR 领域 **百度 Unlimited-OCR** 和 **ATH-MaaS OvisOCR2** 双双上榜，显示文本识别仍是高频应用场景。

---

---

## **📈 热门模型**

### **🧠 语言模型（LLM / 对话 / 指令微调）**
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   - 作者：zai-org | 点赞：4,227 | 下载：531,947
   - **一句说明**：智谱 AI 的 MoE 模型 GLM-5.2，凭借高性能文本生成和对话能力，成为开源中文 LLM 的新标杆。

2. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - 作者：Google | 点赞：3,297 | 下载：11,987,240
   - **一句说明**：Gemma 4 系列的多模态对话模型，支持图像+文本输入，下载量遥遥领先，体现闭源模型的生态影响力。

3. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
   - 作者：腾讯 | 点赞：847 | 下载：13,698
   - **一句说明**：腾讯混元模型 Hy3，专注高效文本生成，是国内大厂在开源 LLM 的重要布局。

4. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   - 作者：Moonshot AI | 点赞：1,177 | 下载：713,992
   - **一句说明**：Kimi-K2.7 的代码专用版本，压缩张量优化，适合代码生成与理解任务。

---

### **🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）**
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 作者：百度 | 点赞：2,446 | 下载：2,122,848
   - **一句说明**：百度的通用 OCR 模型，支持多语言、多场景文本识别，下载量突破 200 万。

2. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
   - 作者：empero-ai | 点赞：2,369 | 下载：2,117,323
   - **一句说明**：基于 Qwen3.5 的多模态推理模型，GGUF 量化版本，适合本地部署。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 作者：HauhauCS | 点赞：2,937 | 下载：2,007,025
   - **一句说明**：Qwen3.6 的 MoE 版本，去审查且多模态能力强，社区热度极高。

4. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
   - 作者：Wan-AI | 点赞：145 | 下载：2,408
   - **一句说明**：图像到视频生成模型，专注高质量视频合成。

5. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
   - 作者：OpenMOSS | 点赞：292 | 下载：87,533
   - **一句说明**：音频转录+说话人分离模型，适用于会议记录等场景。

---

### **🔧 专用模型（代码 / 嵌入 / 机器人）**
1. **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
   - 作者：NVIDIA | 点赞：87 | 下载：61,708
   - **一句说明**：NVIDIA 的嵌入模型，基于 MiniStral3，适用于语义相似性任务。

2. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   - 作者：openbmb | 点赞：135 | 下载：0
   - **一句说明**：面向机器人操作的视觉-语言-动作模型，开创多模态机器人交互新方向。

3. **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
   - 作者：openbmb | 点赞：100 | 下载：0
   - **一句说明**：专注机器人目标跟踪的多模态模型，补全机器人感知链路。

---

### **📦 微调与量化（社区微调 / GGUF / AWQ）**
1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - 作者：prism-ml | 点赞：542 | 下载：1,262,894
   - **一句说明**：基于 Qwen3.5 的 1-bit 量化模型，下载量超 126 万，是轻量化部署的热门选择。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   - 作者：prism-ml | 点赞：855 | 下载：338,945
   - **一句说明**：2-bit 量化版本，在保持性能的同时进一步压缩模型大小。

3. **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**
   - 作者：AngelSlim | 点赞：149 | 下载：109,749
   - **一句说明**：腾讯 Hy3 的 GGUF 量化版，便于在消费级硬件上运行。

4. **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**
   - 作者：unsloth | 点赞：111 | 下载：6,771
   - **一句说明**：Inkling 模型的 GGUF 版本，支持多模态对话，适合本地部署。

---

---

## **📊 生态信号**
2026年7月，Hugging Face 生态呈现**三大趋势**：
1. **多模态模型爆发**：Qwen3.6、Gemma-4、Inkling 等模型频繁出现在榜单中，且多为**图像+文本+音频**的全能型模型，显示多模态已成为 AI 竞争的核心战场。
2. **量化模型需求旺盛**：prism-ml 的 Bonsai 系列（1-bit/2-bit）和 GGUF 格式模型下载量动辄百万，反映社区对**低成本部署**的迫切需求。开源模型（如 Qwen、GLM）在量化后更易被社区接纳。
3. **闭源模型仍占流量高地**：Google 的 Gemma-4 和百度的 Unlimited-OCR 下载量遥遥领先，但开源模型（如 Qwen3.6）通过社区微调（如 HauhauCS 的版本）实现“二次创作”反超。未来**开源+量化**的组合或成主流。

---

## **🎯 值得探索**
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**：Qwen3.6 的 MoE 版本，去审查且多模态能力强，适合研究**无限制对话**和**视觉理解**的边界。

2. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   - **理由**：首个面向**机器人操作**的多模态模型，开创了 AI 在物理世界交互的新方向，值得关注其在真实场景中的表现。

3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - **理由**：1-bit 量化模型的下载量超 126 万，是**轻量化部署**的典范，适合在低配置设备上测试性能极限。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*