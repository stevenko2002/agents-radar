# Hugging Face 热门模型日报 2026-09-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-23 22:15 UTC

---

我们被要求生成一份《Hugging Face 热门模型日报》，基于给定的30个热门模型数据。需要按照指定结构：今日速览、热门模型分类（语言模型、多模态与生成、专用模型、微调与量化）、生态信号、值得探索。语言为中文，简洁专业，保留所有HF链接。

首先，我们需要理解数据：每个模型有名字、链接、作者、任务、点赞、下载、标签。我们需要根据任务和标签分类。

我们来浏览一下模型列表，以便分类：

1. convaiinnovations/laya - text-classification -> 专用模型（分类）
2. Qwen/Qwen-Image-2.1 - text-to-image -> 多模态与生成
3. prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation -> 语言模型（但也是量化模型，可放在微调与量化，但主要任务是text-generation，可以归为语言模型，同时标签有gguf，也可以放在量化类。根据分类，语言模型包括LLM、对话模型、指令微调。这个模型是27B的LLM，但又是ternary量化。我们可以把它放在语言模型，同时在微调与量化里提一下？但要求每个模型只在一个分类里。我们根据主要任务：text-generation，放在语言模型。但注意它有gguf标签，通常社区微调量化类包含GGUF、AWQ等格式的模型。但这个模型本身是一个量化版本的LLM，也可以认为是微调与量化。为了清晰，我们按照任务和模型性质：如果是一个基础模型（即使量化），通常归入语言模型；如果是社区微调版本（如unsloth的GGUF），可以归入微调与量化。这里prism-ml的Ternary-Bonsai-2-27B-gguf是一个量化模型，但任务仍是text-generation，可以放在语言模型，但考虑到它使用gguf格式，可能更适合放在微调与量化。我们再看分类定义：📦 微调与量化（社区微调、GGUF、AWQ）。这个模型是GGUF格式，且是量化版本（2-bit），所以应该放在微调与量化。同理，后面的Qwen-Image-2.1-Uncensored-GGUF是图像生成但用GGUF，也可以放量化？但任务是text-to-image，所以还是多模态。但我们可以根据主要用途：如果模型主要是为了在本地运行（GGUF），可以归入量化类。但分类可能重叠。为了保持一致性，我们优先根据任务类型：语言模型（text-generation, image-text-to-text, conversational等）、多模态（图像、视频、音频等）、专用模型（特定任务如分类、ASR、嵌入等）、微调与量化（主要指社区微调版本、量化格式的模型，且这些模型通常不是官方基础模型，而是第三方转换的）。但官方也可能发布量化版本，比如unsloth/Qwen3.8-27B-GGUF，这个可以认为是微调与量化。我们具体看每个模型：

列出所有模型及其任务和标签，然后决定分类。

1. convaiinnovations/laya: text-classification -> 专用模型（分类）
2. Qwen/Qwen-Image-2.1: text-to-image -> 多模态与生成
3. prism-ml/Ternary-Bonsai-2-27B-gguf: text-generation, gguf, llama.cpp, ternary, 2-bit -> 这是一个量化LLM，可归入微调与量化，但也可以作为语言模型。由于它是27B的LLM，且是量化版本，更适合微调与量化，因为强调gguf和2-bit。
4. XingChen-AGI/Xing4.0-29B-A4B: text-generation -> 语言模型（注意A4B可能是4-bit量化？但标签是transformers, safetensors，所以可能是标准格式，作为LLM）
5. abenzerps/Qwen-Image-2.1-Uncensored-GGUF: text-to-image, gguf -> 多模态与生成（图像生成），但也是GGUF格式。由于任务主要是图像生成，我们放多模态，但在描述中可提及其GGUF格式。
6. Comfy-Org/Qwen-Image-2.1: N/A, diffusion-single-file, comfyui -> 多模态与生成（图像生成，ComfyUI格式）
7. deepseek-ai/DeepSeek-V4.1-Flash: image-text-to-text -> 多模态（视觉语言模型），也可以算语言模型？但任务image-text-to-text，通常属于多模态。我们放多模态。
8. Altworld/Hemmingway-1: text-generation -> 语言模型
9. Qwen/Qwen3.8-27B: image-text-to-text -> 多模态（视觉语言模型），但也可以作为LLM。Qwen3.8-27B是多模态模型，放多模态。
10. AlexWortega/openjev: text-classification -> 专用模型（分类）
11. XiaomiMiMo/MiMo-V2.6-Pro-RL: text-generation -> 语言模型
12. harshatheg/Qwen-2.5-1B-RLCD: text-generation, mlx, structured-generation -> 语言模型（小模型，用于Apple Silicon，结构化生成），可以放语言模型，或微调？但主要是text-generation，放语言模型。
13. XiaomiMiMo/MiMo-V2.6-Flash-RL: text-generation -> 语言模型
14. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: image-text-to-text, gguf, gsq, rco, quantization -> 多模态（视觉语言），但又是量化GGUF。由于任务image-text-to-text，放多模态，但描述可提量化。
15. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B: image-text-to-text -> 多模态
16. Lightricks/LTX-2.5: image-to-video, text-to-video, video-to-video -> 多模态与生成（视频生成）
17. TaichuAI/ZDTaichu5.0-9B: image-text-to-text -> 多模态
18. prism-ml/Ternary-Bonsai-2-27B-mlx-2bit: text-generation, mlx, ternary, 2-bit -> 语言模型或微调与量化？这是mlx版本，针对Apple Silicon的量化LLM。可以放微调与量化，或者语言模型。由于是量化版本，且强调2-bit，放微调与量化更合适。
19. m-a-p/YuE2-3B: text-to-audio -> 多模态与生成（音频生成）
20. netease-youdao/Confucius4-R2T2: automatic-speech-recognition -> 专用模型（语音识别）
21. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF: image-text-to-text, gguf -> 多模态，但也是GGUF微调版本。放多模态。
22. unsloth/Qwen3.8-27B-GGUF: N/A, gguf, unsloth -> 微调与量化（社区量化版本，无具体任务，但基础模型是Qwen3.8-27B，这里作为GGUF格式发布，可放入微调与量化）
23. yandex/AliceAI-Foundation-80B-A3B-Base: text-generation -> 语言模型
24. Qwen/Qwen3.8-Flash-Next: image-text-to-text -> 多模态
25. ukisai/Swift-Qwen3.8-27b: image-text-to-text -> 多模态
26. convaiinnovations/laya-multilingual: text-classification -> 专用模型
27. Cactus-Compute/needle3: text-generation, tool-calling, function-calling, on-device -> 语言模型（工具调用，小模型）
28. ukisai/Swift-Qwen3.8-27B-GGUF: image-text-to-text, gguf -> 多模态（但GGUF格式），放多模态。
29. MiniMaxAI/MiniMax-H3: image-text-to-video -> 多模态与生成（视频生成）
30. TokenRhythm/NeoHorse-1-9B: text-generation -> 语言模型

现在，我们按照分类整理：

🧠 语言模型（LLM、对话模型、指令微调）：
- 主要包含text-generation和image-text-to-text（部分）？但image-text-to-text通常属于多模态，因为它们能处理图像和文本。但有些模型如Qwen3.8-27B虽然是image-text-to-text，但底层是LLM，我们可能把它们放在多模态，因为任务涉及视觉。但分类中“语言模型”可能更偏向纯文本LLM。我们看定义：“语言模型（LLM、对话模型、指令微调）”。所以，我们只放那些主要任务为text-generation或对话的模型，不包括多模态模型（即使它们能生成文本）。因此，从列表中选出纯text-generation模型：
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation) -> 但它是量化，可放量化类。我们根据主要用途：如果它主要作为一个LLM（尽管量化），可以放语言模型。但为了突出量化趋势，我们可以放在量化类。类似地，XingChen-AGI/Xing4.0-29B-A4B是text-generation，放语言模型。
- Altworld/Hemmingway-1 (text-generation)
- XiaomiMiMo/MiMo-V2.6-Pro-RL (text-generation)
- harshatheg/Qwen-2.5-1B-RLCD (text-generation)
- XiaomiMiMo/MiMo-V2.6-Flash-RL (text-generation)
- prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (text-generation) -> 量化，可放量化
- yandex/AliceAI-Foundation-80B-A3B-Base (text-generation)
- Cactus-Compute/needle3 (text-generation)
- TokenRhythm/NeoHorse-1-9B (text-generation)

还有吗？deepseek-ai/DeepSeek-V4.1-Flash是image-text-to-text，属于多模态。Qwen/Qwen3.8-27B是image-text-to-text，多模态。Qwen/Qwen3.8-Flash-Next也是image-text-to-text。所以这些不放在语言模型。

另外，有些模型虽然任务标为text-generation，但可能也是量化版本，我们根据情况调整。

🎨 多模态与生成（图像、视频、音频、文本到X）：
- Qwen/Qwen-Image-2.1 (text-to-image)
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image)
- Comfy-Org/Qwen-Image-2.1 (N/A, but image generation)
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text)
- Qwen/Qwen3.8-27B (image-text-to-text)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (image-text-to-text)
- XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B (image-text-to-text)
- Lightricks/LTX-2.5 (image-to-video, text-to-video)
- TaichuAI/ZDTaichu5.0-9B (image-text-to-text)
- m-a-p/YuE2-3B (text-to-audio)
- DavidAU/Qwen3.8-27B-TURBO-...-GGUF (image-text-to-text)
- Qwen/Qwen3.8-Flash-Next (image-text-to-text)
- ukisai/Swift-Qwen3.8-27b (image-text-to-text)
- ukisai/Swift-Qwen3.8-27B-GGUF (image-text-to-text)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)

🔧 专用模型（代码、数学、医疗、嵌入）：
- convaiinnovations/laya (text-classification)
- AlexWortega/openjev (text-classification)
- netease-youdao/Confucius4-R2T2 (automatic-speech-recognition)
- convaiinnovations/laya-multilingual (text-classification)

📦 微调与量化（社区微调、GGUF、AWQ）：
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation, gguf) -> 如果放这里，就从语言模型移除
- unsloth/Qwen3.8-27B-GGUF (N/A, gguf)
- 可能还有其他GGUF模型？但上面许多GGUF模型我们放在了多模态，因为它们本身是多模态模型。但如果我们把GGUF格式的模型都放到微调与量化，那么abenzerps/Qwen-Image-2.1-Uncensored-GGUF、ISTA-DASLab/...-GGUF、DavidAU/...-GGUF、ukisai/Swift-Qwen3.8-27B-GGUF 也可以放这里。但这样多模态类就会减少。我们需要决定分类标准：是按任务，还是按格式？通常日报分类按任务/用途，格式作为标签。所以，我们按主要任务分类，微调与量化类主要放那些专门作为微调/量化版本发布的模型，且原始基础模型可能不是这些。例如，unsloth/Qwen3.8-27B-GGUF是社区 quantized 版本，没有改变任务，所以可以放这里。但像Qwen-Image-2.1-Uncensored-GGUF，它本身是图像生成模型，只是用了GGUF格式，我们仍放多模态。同样，ISTA-DASLab的模型是量化版本，但任务是多模态，我们放多模态。这样，微调与量化类主要包含：prism-ml的两个模型（一个是gguf，一个是mlx-2bit），以及unsloth的GGUF。但prism-ml的模型也是LLM，我们可以选择放语言模型或量化。考虑到它们突出量化技术（ternary, 2-bit），放在微调与量化更能体现趋势。另外，还有harshatheg/Qwen-2.5-1B-RLCD，标签有mlx, structured-generation，也可以放微调与量化？但它是微调小模型，用于结构化生成，也可以放语言模型。我们根据主要任务：text-generation，放语言模型。但为了简洁，我们可能把所有社区微调或量化的模型都放入📦类，但这样会与任务分类重叠。日报结构要求每个模型只在一个分类，所以我们需要合理分配。

重新审视分类定义：
- 🧠 语言模型（LLM、对话模型、指令微调）：主要指基础语言模型、对话模型、经过指令微调的模型，通常用于文本生成、对话等。
- 🎨 多模态与生成（图像、视频、音频、文本到X）：涉及多种模态的生成或理解模型。
- 🔧 专用模型（代码、数学、医疗、嵌入）：针对特定领域或任务的模型，如分类、语音识别、嵌入等。
- 📦 微调与量化（社区微调、GGUF、AWQ）：主要指社区对现有模型进行微调或量化的版本，强调格式和优化，通常不是官方基础模型。

根据这个定义，我们可以将模型分类如下：

语言模型：text-generation任务，且不是量化版本（或虽然是量化但主要是作为LLM使用）。但prism-ml的模型虽然是text-generation，但它是量化版本，且标签强调gguf/2-bit，更适合📦。XingChen-AGI/Xing4.0-29B-A4B是text-generation，没有特别强调量化（虽然A4B可能暗示4-bit，但标签是transformers, safetensors），放🧠。Altworld/Hemmingway-1放🧠。XiaomiMiMo的两个Pro和Flash是RL版本，放🧠。harshatheg/Qwen-2.5-1B-RLCD是微调小模型，但任务是text-generation，且标签有mlx, structured-generation，可以放🧠或📦。由于它是社区微调，且针对Apple Silicon优化，可以放在📦，但也可以放🧠。我们看它是否强调量化：标签有mlx, structured-generation, parallel-decoding, constrained-decoding, apple-silicon，没有明确量化，但mlx是Apple Silicon框架。我们可以放🧠，因为它主要是语言模型。yandex/AliceAI-Foundation-80B-A3B-Base放🧠。Cactus-Compute/needle3放🧠（工具调用）。TokenRhythm/NeoHorse-1-9B放🧠。

多模态与生成：所有图像、视频、音频生成和多模态理解模型。包括Qwen-Image系列、DeepSeek-V4.1-Flash、Qwen3.8-27B、LTX-2.5、YuE2-3B、MiniMax-H3等。注意，有些模型是GGUF格式，但任务仍是多模态，我们放这里。

专用模型：分类、语音识别等。

微调与量化：专门发布为量化/微调格式的模型，且通常不是官方基础模型。例如：
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation, 但作为量化版本)
- prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (text-generation, 量化)
- unsloth/Qwen3.8-27B-GGUF (无任务，但作为量化版本)
- 还有吗？DavidAU的模型是GGUF微调，但任务是多模态，我们是否放这里？如果放这里，它就属于多模态+量化，但分类要求唯一。我们按任务优先，DavidAU的模型是image-text-to-text，所以放多模态。同样，uk

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*