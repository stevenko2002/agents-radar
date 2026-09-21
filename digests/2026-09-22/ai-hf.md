# Hugging Face 热门模型日报 2026-09-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-21 22:15 UTC

---

我们被要求生成一份《Hugging Face 热门模型日报》，基于给定的30个热门模型列表。我们需要按照指定结构输出：今日速览、热门模型（分类）、生态信号、值得探索。语言中文，简洁专业，保留所有链接。

首先，分析数据：30个模型，按周点赞数排序。我们需要提取关键信息，进行分类和总结。

步骤：
1. 今日速览：3-5句话，概括最值得关注的模型发布和趋势。
2. 热门模型：分为四个分类，每个模型包含模型名（附链接）、作者、点赞数、下载数、一句话说明。
   - 分类：🧠 语言模型（LLM、对话模型、指令微调）
   - 🎨 多模态与生成（图像、视频、音频、文本到X）
   - 🔧 专用模型（代码、数学、医疗、嵌入）—— 注意：给定的模型中可能没有明显的专用模型，但我们可以根据任务类型判断。例如，text-classification可能属于专用模型？但通常text-classification可以是通用分类，但这里可能有特定用途。另外，有些模型是多模态的，但可能也属于语言模型？我们需要合理归类。
   - 📦 微调与量化（社区微调、GGUF、AWQ）—— 这个分类可能包含那些基于其他模型的微调版本，特别是GGUF格式的模型。
   注意：有些模型可能跨分类，但我们需要选择最合适的。例如，Qwen3.8-27B是语言模型，但它的GGUF版本应该放在微调与量化。同样，多模态模型如Qwen-Image-2.1是图像生成，属于多模态与生成。但注意，有些模型任务是image-text-to-text，这属于多模态（视觉+文本），应该放在多模态与生成。而text-generation通常是语言模型。但有些模型如DeepSeek-V4.1-Flash是image-text-to-text，属于多模态。

   我们需要仔细阅读每个模型的任务和标签，进行正确分类。

   分类指导：
   - 🧠 语言模型：主要是text-generation、conversational、image-text-to-text（如果主要是文本生成，但包含图像理解？实际上image-text-to-text是多模态，但可能更偏向语言模型？根据任务定义，image-text-to-text是多模态，应该放在多模态与生成。但为了清晰，我们按照任务类型：text-generation和image-text-to-text中，如果主要是文本生成且不涉及图像生成，但image-text-to-text是输入图像和文本，输出文本，这属于多模态理解，不是纯语言模型。所以，我们这样划分：
        - 语言模型：任务为text-generation、conversational（纯文本）
        - 多模态与生成：任务为text-to-image, image-to-video, text-to-video, image-text-to-text, text-to-audio, image-text-to-video等。
        - 专用模型：如text-classification（分类）、automatic-speech-recognition（语音识别）等。
        - 微调与量化：主要是那些标签中包含gguf、量化、微调的模型，尤其是基于其他模型的变体。

   但注意，有些模型是官方发布的（如Qwen、DeepSeek），它们不是微调，而是基础模型。所以微调与量化分类应该主要包含社区微调版本（如GGUF版本、其他微调版本）。

   我们重新审视每个模型：

   1. convaiinnovations/laya: text-classification -> 专用模型（分类）
   2. prism-ml/Ternary-Bonsai-2-27B-gguf: text-generation, 但标签有gguf、ternary、2-bit -> 微调与量化（量化版本）
   3. Qwen/Qwen-Image-2.1: text-to-image -> 多模态与生成
   4. XingChen-AGI/Xing4.0-29B-A4B: text-generation -> 语言模型
   5. deepseek-ai/DeepSeek-V4.1-Flash: image-text-to-text -> 多模态与生成（多模态理解）
   6. Qwen/Qwen3.8-27B: image-text-to-text -> 多模态与生成（但Qwen3.8-27B是多模态模型，支持图像和文本）
   7. abenzerps/Qwen-Image-2.1-GGUF: text-to-image, gguf -> 微调与量化（GGUF版本）
   8. harshatheg/Qwen-2.5-1B-RLCD: text-generation, mlx, constrained-decoding -> 语言模型（微调版本？但任务为text-generation，可能是微调，但标签没有明确量化，而是MLX和约束解码。可以放在语言模型，但也可以放在微调与量化？因为它是社区微调。我们根据分类：微调与量化主要针对GGUF、AWQ等量化版本，以及明确是微调的模型。这个模型是Qwen-2.5-1B的微调，使用RLCD，可以放在微调与量化。但任务还是text-generation。为了统一，我们将其放在微调与量化，因为它是社区微调版本。
   9. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: image-text-to-text, gguf -> 微调与量化（GGUF量化版本）
   10. m-a-p/YuE2-3B: text-to-audio -> 多模态与生成（音频生成）
   11. Comfy-Org/Qwen-Image-2.1: N/A, 但标签是diffusion-single-file, comfyui -> 多模态与生成（图像生成，ComfyUI版本）
   12. Lightricks/LTX-2.5: image-to-video, text-to-video -> 多模态与生成（视频生成）
   13. AlexWortega/openjev: text-classification -> 专用模型（分类）
   14. ukisai/Swift-Qwen3.8-27b: image-text-to-text -> 多模态与生成（但可能是微调版本？标签有qwen3_5, qwen3_8，是Qwen的微调。但任务为image-text-to-text，属于多模态。我们可以放在多模态与生成，但也可以放在微调与量化。由于它是社区微调，且没有GGUF，但属于微调模型。我们将其放在微调与量化？但分类是“微调与量化（社区微调、GGUF、AWQ）”，所以社区微调可以放入。但任务本身是多模态，所以也可以放在多模态。为了减少重复，我们优先放在微调与量化，因为它是基于Qwen的微调版本。
   15. Altworld/Hemmingway-1: text-generation -> 语言模型（但标签有qwen3_5_text，是Qwen的微调？可能是社区微调。我们可以放在语言模型，或者微调与量化。由于是text-generation，且是社区微调，我们放在微调与量化？但任务就是语言模型。我们根据分类：语言模型包括LLM、对话模型、指令微调。所以这个可以放在语言模型，但如果是微调版本，也可以放在微调与量化。我们看其他类似模型：如prism-ml的GGUF版本放在微调与量化，而官方Qwen放在多模态或语言模型。所以，对于社区微调版本，即使任务相同，我们也放在微调与量化，以突出其微调属性。
   16. unsloth/Qwen3.8-27B-GGUF: N/A, 但标签gguf, base_model:Qwen/Qwen3.8-27B -> 微调与量化（GGUF版本）
   17. DavidAU/Qwen3.8-27B-TURBO-...-GGUF: image-text-to-text, gguf -> 微调与量化（GGUF版本）
   18. prism-ml/Ternary-Bonsai-2-27B-mlx-2bit: text-generation, mlx, ternary, 2-bit -> 微调与量化（量化版本，MLX）
   19. Qwen/Qwen3.8-Flash-Next: image-text-to-text -> 多模态与生成（官方新模型）
   20. ukisai/Swift-Qwen3.8-27B-GGUF: image-text-to-text, gguf -> 微调与量化（GGUF版本）
   21. openbmb/MiniCPM5-2B: text-generation -> 语言模型
   22. MiniMaxAI/MiniMax-H3: image-text-to-video -> 多模态与生成（视频生成）
   23. TaichuAI/ZDTaichu5.0-9B: image-text-to-text -> 多模态与生成
   24. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: image-text-to-text, gguf -> 微调与量化（GGUF版本）
   25. netease-youdao/Confucius4-R2T2: automatic-speech-recognition -> 专用模型（语音识别）
   26. TokenRhythm/NeoHorse-1-9B: text-generation -> 语言模型（但标签有qwen3_5_text，可能是微调？我们可以放在语言模型，因为任务就是文本生成，且没有明确量化格式。但标签有agentic，可能是一个微调版本。为了简化，我们放在语言模型。）
   27. WarmBloodAban/Minimax-h3_Singularity: image-to-video -> 多模态与生成（视频生成，微调版本？基于MiniMax-H3的微调。我们可以放在多模态与生成，但也可以放在微调与量化。由于是社区微调，我们放在微调与量化？但任务是视频生成，属于多模态。我们根据分类：微调与量化主要针对量化格式和社区微调，所以可以放入。但这里标签没有gguf，只是基于Minimax-h3的微调。我们可以放在多模态与生成，因为它是视频生成模型。为了统一，我们将其放在多模态与生成，因为任务类型明确。）
   28. yandex/AliceAI-Foundation-80B-A3B-Base: text-generation -> 语言模型
   29. internlm/Atria-Dawn-Preview: N/A, 但标签有glm_moe_dsa, arxiv -> 可能是语言模型？任务N/A，但根据标签和作者，可能是语言模型。我们放在语言模型。
   30. Cactus-Compute/needle3: text-generation, tool-calling -> 语言模型（专门用于工具调用）

   现在，我们重新整理分类：

   🧠 语言模型（LLM、对话模型、指令微调）：
   - 主要任务为text-generation的模型，包括官方和社区微调（但社区微调如果被我们归入微调与量化，则不放这里）。我们决定：纯文本生成且非微调版本（或微调版本但任务纯文本）的模型放入语言模型。但为了突出社区微调，我们将社区微调版本（即使任务相同）放入微调与量化，除非它们是官方发布的基础模型。
   所以，语言模型包括：
   - XingChen-AGI/Xing4.0-29B-A4B (text-generation)
   - openbmb/MiniCPM5-2B (text-generation)
   - TokenRhythm/NeoHorse-1-9B (text-generation)
   - yandex/AliceAI-Foundation-80B-A3B-Base (text-generation)
   - internlm/Atria-Dawn-Preview (N/A，但推测为语言模型)
   - Cactus-Compute/needle3 (text-generation, tool-calling)
   另外，Qwen/Qwen3.8-27B和DeepSeek-V4.1-Flash等是多模态，不放这里。

   但是，我们还有Altworld/Hemmingway-1 (text-generation)，它也是社区微调？我们将其放入微调与量化。

   另外，注意有些模型是image-text-to-text，但主要是文本生成，我们放在多模态。

   🎨 多模态与生成（图像、视频、音频、文本到X）：
   - Qwen/Qwen-Image-2.1 (text-to-image)
   - deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text)
   - Qwen/Qwen3.8-27B (image-text-to-text)
   - m-a-p/YuE2-3B (text-to-audio)
   - Comfy-Org/Qwen-Image-2.1 (N/A, 图像生成)
   - Lightricks/LTX-2.5 (image-to-video, text-to-video)
   - Qwen/Qwen3.8-Flash-Next (image-text-to-text)
   - MiniMaxAI/MiniMax-H3 (image-text-to-video)
   - TaichuAI/ZDTaichu5.0-9B (image-text-to-text)
   - WarmBloodAban/Minimax-h3_Singularity (image-to-video) —— 这个我们决定放在多模态，因为它是视频生成。
   另外，ukisai/Swift-Qwen3.8-27b 和 ukisai/Swift-Qwen3.8-27B-GGUF 是image-text-to-text，但它们是社区微调，我们放入微调与量化。

   🔧 专用模型（代码、数学、医疗、嵌入）：
   - convaiinnovations/laya (text-classification)
   - AlexWortega/openjev (text-classification)
   - netease-youdao/Confucius4-R2T2 (automatic-speech-recognition)
   另外，可能还有其他专用？但列表中只有这些明显是专用任务。

   📦 微调与量化（社区微调、GGUF、AWQ）：
   - prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation, gguf)
   - abenzerps/Qwen-Image-2.1-GGUF (text-to-image, gguf)
   - harshatheg/Qwen-2.5-1B-RLCD (text-generation, mlx, 微调)
   - ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (image-text-to-text, gguf)
   - Altworld/Hemmingway-1 (text-generation, 微调)
   - unsloth/Qwen3.8-27B-GGUF (N/A, gguf)
   - DavidAU/Qwen3.8-27B-TURBO-...-GGUF (image-text-to-text, gguf)
   - prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (text-generation, mlx, 量化)
   - ukisai/Swift-Qwen3.8-27b (image-text-to-text, 微调)
   - ukisai/Swift-Qwen3.8-27B-GGUF (image-text-to-text, gguf)
   - ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (image-text-to-text, gguf)
   另外，还有WarmBloodAban/Minimax-h3_Singularity，我们之前决定放在多模态，但它是基于MiniMax-H3的微调，也可以放入微调与量化。但为了一致，我们将其放在多模态，因为它是视频生成模型，且任务类型明确。同样，Comfy-Org/Qwen-Image-2.1是图像生成，但它是基于Qwen-Image-2.1的微调（ComfyUI版本），我们也可以放入微调与量化？但任务N/A，标签有base_model，说明是微调版本。我们可以放入微调与量化。但为了分类清晰，我们按照主要任务：如果任务是图像生成，且是微调版本，我们放入多模态与生成？但这样微调与量化分类会很少？实际上微调与量化主要针对量化格式和社区微调，不管任务。所以，我们统一：只要模型是社区微调（特别是GGUF、量化版本），就放入微调与量化，即使任务属于多模态或语言模型。但这样会导致多模态与生成中缺少这些微调版本。我们重新考虑。

   重新审视分类原则：
   - 语言模型：官方或社区的基础语言模型（非微调版本），任务为text-generation。
   - 多模态与生成：官方或社区的基础多模态模型（非微调版本），任务为图像、视频、音频生成或多模态理解。
   - 专用模型：用于特定任务的模型，如分类、语音识别。
   - 微调与量化：社区微调版本（包括GGUF、量化、LoRA等），无论任务是什么，只要它是基于其他模型的微调版本。

   这样，我们可以更清晰地分类。

   按照这个原则：

   语言模型：
   - XingChen-AGI/Xing4.0-29B-A4B (text-generation) — 官方？可能是社区，但看起来是独立模型。
   - openbmb/MiniCPM5-2B (text-generation) — 官方
   - TokenRhythm/NeoHorse-1-9B (text-generation) — 社区，但可能是独立模型？标签有qwen3_5_text，说明基于Qwen微调？所以应该是微调版本。那么应该放入微调与量化。
   - yandex/AliceAI-Foundation-80B-A3B-Base (text-generation) — 官方
   - internlm/Atria-Dawn-Preview (N/A) — 官方
   - Cactus-Compute/needle3 (text-generation) — 社区，但是独立模型？标签有cactus-needle，可能是专门工具调用模型，不算微调？但可能也是基于其他

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*