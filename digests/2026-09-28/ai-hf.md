# Hugging Face 热门模型日报 2026-09-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-27 22:15 UTC

---

我们被要求生成一份《Hugging Face 热门模型日报》，基于提供的30个模型列表。我们需要按照指定结构输出：今日速览、热门模型（分类）、生态信号、值得探索。语言为中文，简洁专业，保留所有HuggingFace链接。

首先，分析数据：

- 总共有30个模型，按周点赞数排序。
- 我们需要分类：语言模型（LLM、对话模型、指令微调）、多模态与生成（图像、视频、音频、文本到X）、专用模型（代码、数学、医疗、嵌入）、微调与量化（社区微调、GGUF、AWQ）。

让我们逐一分类：

1. convaiinnovations/laya - text-classification -> 专用模型？但它是文本分类，可能属于语言模型？任务：text-classification，可能是一个分类模型，但标签有"calibrated-decisions"，也许是一个决策模型？我们看看：它被描述为"calibrated-decisions"，可能是一个用于决策的文本分类模型。暂且放入专用模型或语言模型？考虑到它是文本分类，可能更接近专用模型。但分类中有"专用模型（代码、数学、医疗、嵌入）"，文本分类可能不算这些。也许可以归入语言模型，因为它是基于文本的。或者我们灵活处理。

2. abenzerps/Qwen-Image-2.1-Uncensored-GGUF - text-to-image -> 多模态与生成（图像生成）

3. Qwen/Qwen-Image-2.1 - text-to-image -> 多模态与生成

4. XingChen-AGI/Xing4.0-29B-A4B - text-generation -> 语言模型

5. Edge0/Audio8-ASR-Infinite - automatic-speech-recognition -> 多模态与生成（音频）

6. Altworld/Hemmingway-1 - text-generation -> 语言模型

7. prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation -> 语言模型，但它是GGUF量化版，所以也可归入微调与量化？但主要任务是text-generation，所以是语言模型。我们可以把它放在语言模型，但在描述中提到量化。

8. XiaomiMiMo/MiMo-V2.6-Pro-RL - text-generation -> 语言模型

9. Comfy-Org/Qwen-Image-2.1 - N/A，但标签是diffusion，用于图像生成 -> 多模态与生成

10. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B - image-text-to-text -> 多模态与生成（多模态）

11. StarDoc-AI/TeleOCR - image-text-to-text -> 多模态与生成（OCR）

12. XiaomiMiMo/MiMo-V2.6-Flash-RL - text-generation -> 语言模型

13. TaichuAI/ZDTaichu5.0-9B - image-text-to-text -> 多模态与生成

14. Qwen/Qwen3.8-27B - image-text-to-text -> 多模态与生成（但它是Qwen3.8，大型多模态模型）

15. Contrastive-LM/CLM-v0.1-8B - text-ranking -> 专用模型？文本排序，可能用于检索或重排。可以归入专用模型。

16. nvidia/Nemotron-3-Diarization - voice-activity-detection -> 多模态与生成（音频）

17. Lightricks/LTX-2.5 - image-to-video -> 多模态与生成（视频）

18. Viggle/Qwen-Image-2.1-viggle-turbo - text-to-image -> 多模态与生成

19. inclusionAI/Ming-Image-0.1-Design - text-to-image -> 多模态与生成

20. AlexWortega/openjev - text-classification -> 专用模型？可能是一个自然语言推理（NLI）模型，用于文本分类。

21. pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF - N/A，但用于图像生成 -> 多模态与生成，且是GGUF量化

22. netease-youdao/Confucius4-R2T2 - automatic-speech-recognition -> 多模态与生成（音频）

23. yandex/AliceAI-Foundation-80B-A3B-Base - text-generation -> 语言模型

24. akhilaaa3/Jev-Omni - text-classification -> 专用模型？但标签有image-text-to-text，所以是多模态分类？可能是一个多模态模型用于分类。归入多模态与生成或专用模型？任务写的是text-classification，但标签有image-text-to-text，可能它是一个多模态分类模型。我们暂且放入多模态与生成，因为它是多模态的。

25. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - image-text-to-text -> 多模态与生成，且是GGUF量化

26. unsloth/Qwen-Image-2.1-GGUF - text-to-image -> 多模态与生成，且是GGUF

27. deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text -> 多模态与生成（但DeepSeek-V4.1-Flash，可能是大型多模态模型）

28. apple/LensVLM-9B - image-text-to-text -> 多模态与生成

29. convaiinnovations/laya-multilingual - text-classification -> 专用模型（多语言分类）

30. fastino/GLiNER2.5-Decide - token-classification -> 专用模型（命名实体识别）

现在，我们需要决定每个模型的分类。分类定义：

- 🧠 语言模型（LLM、对话模型、指令微调）：主要是文本生成、对话模型。
- 🎨 多模态与生成（图像、视频、音频、文本到X）：包括图像生成、视频生成、音频处理、多模态模型（image-text-to-text）、OCR等。
- 🔧 专用模型（代码、数学、医疗、嵌入）：特定领域的模型，如文本分类、排序、实体识别等。但注意，有些模型虽然任务标为text-classification，但可能是通用分类，不属于特定领域。我们可以将文本分类、排序、token分类等归入专用模型，除非它们是多模态的。
- 📦 微调与量化（社区微调、GGUF、AWQ）：这些主要是量化版本或微调版本，但底层模型可能属于其他类别。我们可以将那些主要是GGUF格式或量化版本的模型单独列出，或者将它们归入原始类别但注明是量化版。根据要求，这个类别是“微调与量化”，所以我们应该将社区微调和量化版本的模型放在这里，即使它们有底层任务。例如，prism-ml/Ternary-Bonsai-2-27B-gguf 是 text-generation 的量化版，可以归入此类。同样，abenzerps/Qwen-Image-2.1-Uncensored-GGUF 是图像生成的量化版，也可以归入。但这样可能会有些重叠。为了清晰，我们可以将那些标签中明确有gguf、quantized等且是社区微调的模型归入此类，而原始模型归入其他类。但列表中有许多模型是量化版，如prism-ml, abenzerps, pottokao, unsloth, ISTA-DASLab等。我们可以将它们统一归入“📦 微调与量化”，并在描述中说明它们是什么任务的量化版本。

让我们重新审视分类：

- 语言模型：主要文本生成模型，包括LLM、对话模型。例如：XingChen-AGI/Xing4.0-29B-A4B, Altworld/Hemmingway-1, XiaomiMiMo/MiMo-V2.6-Pro-RL, XiaomiMiMo/MiMo-V2.6-Flash-RL, yandex/AliceAI-Foundation-80B-A3B-Base。另外，prism-ml/Ternary-Bonsai-2-27B-gguf 虽然是量化版，但本质是语言模型，我们可以选择放入微调与量化类。

- 多模态与生成：包括图像生成、视频生成、音频处理、多模态模型。例如：Qwen/Qwen-Image-2.1, Comfy-Org/Qwen-Image-2.1, Lightricks/LTX-2.5, deepseek-ai/DeepSeek-V4.1-Flash, apple/LensVLM-9B, TaichuAI/ZDTaichu5.0-9B, StarDoc-AI/TeleOCR, Edge0/Audio8-ASR-Infinite, netease-youdao/Confucius4-R2T2, nvidia/Nemotron-3-Diarization, Viggle/Qwen-Image-2.1-viggle-turbo, inclusionAI/Ming-Image-0.1-Design, akhilaaa3/Jev-Omni (多模态分类), 以及各种Qwen-Image的变体。

- 专用模型：文本分类、排序、实体识别等。例如：convaiinnovations/laya, convaiinnovations/laya-multilingual, Contrastive-LM/CLM-v0.1-8B, AlexWortega/openjev, fastino/GLiNER2.5-Decide。

- 微调与量化：主要是GGUF量化版或社区微调版，可以包括：abenzerps/Qwen-Image-2.1-Uncensored-GGUF, prism-ml/Ternary-Bonsai-2-27B-gguf, pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF, ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF, unsloth/Qwen-Image-2.1-GGUF。另外，XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B 是蒸馏版，也可以考虑放入，但可能更偏向多模态。我们根据标签判断：如果标签中有gguf、quantized等，优先放入微调与量化类。

现在，我们整理每个模型的信息，包括链接、作者、点赞、下载和一句话说明。

注意：有些模型下载数为0，可能表示新发布或私有。

我们需要生成“今日速览”：3-5句话概括趋势。

生态信号：100-200字分析趋势。

值得探索：2-3个模型。

让我们开始撰写。

首先，今日速览：可以提到Qwen家族的强势，多模态模型的流行，量化模型的高下载量，以及一些新出现的模型如Lightricks/LTX-2.5视频生成模型。

生态信号：可以讨论Qwen系列模型在多个任务上占据主导，表明其强大的基础能力；开源权重模型持续热门，社区微调活跃；GGUF量化格式在本地部署中广泛应用；多模态成为主流等。

值得探索：选择一些有特色或高潜力的模型，例如Lightricks/LTX-2.5（视频生成），prism-ml/Ternary-Bonsai-2-27B-gguf（高压缩比语言模型），deepseek-ai/DeepSeek-V4.1-Flash（多模态）等。

现在，我们按照分类列出热门模型。

由于模型数量多，我们需要在日报中列出所有30个模型吗？题目说“热门模型 — 按以下分类整理，每个模型包含...”，所以我们需要列出所有30个模型，但可以按分类分组。每个模型给出一句话说明。

我们需要确保链接保留。

让我们开始构建内容。

首先，分类：

**🧠 语言模型（LLM、对话模型、指令微调）**

- XingChen-AGI/Xing4.0-29B-A4B: 点赞1,780，下载45,028。一个29B参数的文本生成模型，可能专注于对话。
- Altworld/Hemmingway-1: 点赞734，下载5,904。基于Qwen的文本生成模型，可能用于创意写作。
- XiaomiMiMo/MiMo-V2.6-Pro-RL: 点赞553，下载75,079。小米的多模态文本生成模型，具有强化学习。
- XiaomiMiMo/MiMo-V2.6-Flash-RL: 点赞491，下载25,661。小米的另一个文本生成模型，轻量版。
- yandex/AliceAI-Foundation-80B-A3B-Base: 点赞348，下载3,456。Yandex的80B基础模型，使用自定义代码。

注意：prism-ml/Ternary-Bonsai-2-27B-gguf 虽然是文本生成，但它是GGUF量化版，我们放到微调与量化类。

**🎨 多模态与生成（图像、视频、音频、文本到X）**

- Qwen/Qwen-Image-2.1: 点赞2,483，下载52,804。Qwen的图像生成模型，支持图像编辑。
- Comfy-Org/Qwen-Image-2.1: 点赞805，下载3,987,373。ComfyUI的Qwen-Image-2.1版本，高下载量。
- Lightricks/LTX-2.5: 点赞5,320，下载1,601,089。图像到视频生成模型，趋势热门。
- deepseek-ai/DeepSeek-V4.1-Flash: 点赞3,808，下载651,078。DeepSeek的多模态模型，支持图像文本任务。
- apple/LensVLM-9B: 点赞243，下载1,740。Apple的视觉语言模型。
- TaichuAI/ZDTaichu5.0-9B: 点赞1,679，下载11,612。多模态视觉语言模型，擅长空间推理。
- StarDoc-AI/TeleOCR: 点赞580，下载27,837。OCR模型，基于Qwen2.5-VL。
- Edge0/Audio8-ASR-Infinite: 点赞980，下载19,434。语音识别模型，支持流式。
- netease-youdao/Confucius4-R2T2: 点赞436，下载8,243。网易的语音识别模型。
- nvidia/Nemotron-3-Diarization: 点赞400，下载22,514。NVIDIA的说话人分离模型。
- Viggle/Qwen-Image-2.1-viggle-turbo: 点赞336，下载133,151。Qwen-Image-2.1的微调版，用于图像生成。
- inclusionAI/Ming-Image-0.1-Design: 点赞301，下载0。新的图像生成模型。
- akhilaaa3/Jev-Omni: 点赞269，下载248。多模态分类模型。
- XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B: 点赞520，下载8,839。蒸馏的多模态模型。

另外，Qwen-Image-2.1的其他变体（如abenzerps, pottokao, unsloth）我们放到微调与量化类。

**🔧 专用模型（代码、数学、医疗、嵌入）**

- convaiinnovations/laya: 点赞4,082，下载0。文本分类模型，用于校准决策。
- convaiinnovations/laya-multilingual: 点赞305，下载0。多语言文本分类模型。
- Contrastive-LM/CLM-v0.1-8B: 点赞402，下载766。文本排序模型，用于重排。
- AlexWortega/openjev: 点赞609，下载0。自然语言推理模型，用于文本分类。
- fastino/GLiNER2.5-Decide: 点赞207，下载19,757。命名实体识别模型，用于意图分类。

**📦 微调与量化（社区微调、GGUF、AWQ）**

- abenzerps/Qwen-Image-2.1-Uncensored-GGUF: 点赞2,065，下载964,220。Qwen-Image-2.1的无审查GGUF量化版，高下载。
- prism-ml/Ternary-Bonsai-2-27B-gguf: 点赞2,187，下载3,343,748。2-bit量化的语言模型，极高下载。
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF: 点赞296，下载145,246。Qwen-Image-2.1的文本编码器GGUF版。
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: 点赞1,769，下载1,608,439。Qwen3.8-27B的量化版，混合精度。
- unsloth/Qwen-Image-2.1-GGUF: 点赞266，下载194,341。Qwen-Image-2.1的GGUF量化版。

注意：有些模型可能重叠，但我们尽量按主要特征分类。

现在，我们撰写日报。

首先，今日速览：3-5句话。

示例：今日Hugging Face热门模型中，Qwen家族持续扩张，其图像生成与多模态模型占据榜单前列，显示出强大的生态影响力。视频生成模型Lightricks/LTX-2.5以超过5千点赞和160万下载成为焦点，表明视频内容生成需求旺盛。社区量化模型表现抢

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*