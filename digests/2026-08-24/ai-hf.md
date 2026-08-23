# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 22:15 UTC

---

The user wants me to generate a "Hugging Face Hot Model Daily Report" based on the provided list of 30 models from 2026-08-24.

First, I need to understand the data:
- 30 models sorted by weekly likes (though the numbering seems somewhat arbitrary, not strictly sorted? Wait, let me check... Actually the prompt says "按周点赞数排序" but looking at the list:
  1. Qwen/Qwen3.8-27B (12,302)
  2. unsloth/Qwen3.8-27B-GGUF (2,732)
  3. orcarouter/Qwen3.8-27B-Uncensored-MLX (949)
  4. OBLITERATUS/Qwen3.8-27B-OBLITERATED (622)
  5. orcarouter/Qwen3.8-27B-Uncensored-FP8 (1,043) -> Wait, 1,043 is higher than 949 and 622, but it's listed 5th. So it's not strictly sorted by likes. Actually maybe it's sorted but there are ties or the ordering is approximate. Anyway, I should just present them as given or reorganize by the categories requested.

Actually, looking carefully, the list has some inconsistencies in ordering (e.g., #5 has 1,043 likes which is > #3's 949). But I don't need to reorder them strictly by likes unless asked. The prompt asks to organize by categories.

Let me classify the 30 models:

1. Qwen/Qwen3.8-27B - LLM/VLM (image-text-to-text) - Base model
2. unsloth/Qwen3.8-27B-GGUF - Quantized/GGUF
3. orcarouter/Qwen3.8-27B-Uncensored-MLX - Uncensored/Microtune? (MLX, abliterated)
4. OBLITERATUS/Qwen3.8-27B-OBLITERATED - Uncensored/abliterated (text-generation)
5. orcarouter/Qwen3.8-27B-Uncensored-FP8 - Uncensored (FP8)
6. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - GGUF/Uncensored
7. Lightricks/LTX-2.5 - Video generation (image-to-video, etc.)
8. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF - GGUF/Uncensored
9. ornith-ai/Ornith-1.5-35B-A3B - Text generation / Multimodal? (qwen3_5_moe)
10. MiniMaxAI/MiniMax-Music3 - Audio/Music generation
11. MiniMaxAI/MiniMax-H3 - Video generation (image-text-to-video)
12. orcarouter/Qwen3.8-27B-Uncensored-GGUF - GGUF/Uncensored
13. froggeric/Qwen-Fixed-Chat-Templates - Template/Utility (not a model weight really, but listed)
14. ornith-ai/Ornith-1.5-35B-A3B-GGUF - GGUF version of #9
15. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF - GGUF/Uncensored/abliterated
16. superwhisper/s1-mini - ASR/Text-generation? (qwen3, asr)
17. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF - GGUF/Microtune?
18. z-lab/Qwen3.8-27B-DFlash2 - Speculative decoding / LLM
19. Qwen/Qwen3.8-27B-FP8 - Base model quantized (FP8)
20. ornith-ai/Ornith-1.5-9B - Smaller version of Ornith
21. empero-ai/Qwen3.8-27B-Ridge-GGUF - GGUF
22. deepseek-ai/DeepSeek-V4-Flash-0731 - LLM (DeepSeek family)
23. LBH-123-AI/Minimax_h3_latent_Upscaler - Video upscaler for Minimax
24. huihui-ai/Huihui-Qwen3.8-27B-abliterated - Base/Uncensored (transformers, safetensors)
25. ornith-ai/Ornith-1.5-9B-GGUF - GGUF version of #20
26. deepseek-ai/DeepSeek-V4-Pro-0813 - LLM (DeepSeek family, Pro)
27. incoai/Qwen3.8-27B-DFlash2 - Speculative decoding (like #18)
28. peculiar-ragdoll/Qwen-Sharp-Chat-Templates - Chat template utility
29. moonshotai/Kimi-K3 - Multimodal/VLM (very high likes: 10,948)
30. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF - GGUF/Uncensored

Now, categories requested:
- 🧠 语言模型 (LLM, conversation, instruction tuning)
- 🎨 多模态与生成 (image, video, audio, text-to-X)
- 🔧 专用模型 (code, math, medical, embedding) -> Actually none of these clearly fall here except maybe ASR? But the user lists "专用模型（代码、数学、医疗、嵌入）". Looking at the list, there's nothing specifically for code/math/medical/embedding except maybe "superwhisper/s1-mini" which is ASR (speech recognition). But ASR could be considered specialized model. However, since the category is specifically listed, I should put things that don't fit elsewhere but are specialized. Actually, looking again, I should just assign each model to the best fitting category. If there are none for a category, I can either omit or note it's empty. But I should try to cover all.

Wait, the prompt says "分类： 🧠 语言模型... 🎨 多模态与生成... 🔧 专用模型... 📦 微调与量化...". This implies I should put models into these bins.

Let me assign:

🧠 语言模型 (LLMs, conversational, text-generation, instruction-tuned):
- Qwen/Qwen3.8-27B (multimodal but also LLM base, image-text-to-text -> can be here or multimodal. Given it's the base Qwen3.8, and there's a FP8 version, I'll put base models that are conversational/text-gen here if not specifically quantized/unmodified? Actually Qwen3.8-27B is image-text-to-text, so it's multimodal. But the category "语言模型" might include chat/instruction models. Let's think about how to distribute best.
Actually, let's distribute by primary nature:

Base/Foundation models (original weights):
1. Qwen/Qwen3.8-27B -> Multimodal base (but can be in LLM since Qwen is an LLM family) -> Actually the prompt's first category is "语言模型（LLM、对话模型、指令微调）". Qwen3.8 is a multimodal LLM. I think it's okay to put in LLM or Multimodal. Given there's a separate multimodal category, I should put clearly multimodal ones there.

Let me reorganize by categories:

🧠 语言模型:
- deepseek-ai/DeepSeek-V4-Flash-0731 (LLM, conversational)
- deepseek-ai/DeepSeek-V4-Pro-0813 (LLM, conversational)
- ornith-ai/Ornith-1.5-35B-A3B (text-generation, qwen3_5_moe, image-text-to-text -> but also text-gen, maybe LLM? Let's put in LLM since it's an MoE text model, though it mentions image-text-to-text. Actually looking at tags: qwen3_5_moe, image-text-to-text, text-generation. So it's multimodal too. Hmm.)
- ornith-ai/Ornith-1.5-9B (text-generation, qwen3_5, image-text-to-text)
- superwhisper/s1-mini (text-generation, asr -> this is specialized but text-gen. Actually ASR is audio-to-text, but listed as text-generation. Given there's no specific audio category except in multimodal? Wait, there is "audio" in the multimodal category description: "图像、视频、音频、文本到X". So superwhisper could go to multimodal/generation or specialized. Given it's "s1-mini" and "asr", it's a speech recognition model. But the task is listed as text-generation. Let me put it in 专用模型 or keep in LLM? Actually, the user category "专用模型" mentions "嵌入" etc. ASR is specialized. But maybe it's better to put it in 🧠 or 🔧. Given the list is small, I can put it in 🔧 as specialized (ASR).

Wait, actually the user wants "每个模型包含：模型名、作者、点赞数、下载数、一句话说明". I need to cover all 30? The prompt says "以下分类整理" which implies organize all listed models into these categories. So yes, I need to place all 30.

Let's list all 30 with best fit:

1. Qwen/Qwen3.8-27B -> 🧠 or 🎨? It's image-text-to-text. Given it's a base VLM/LLM, I'll put in 🧠 as "基础多模态语言模型" or in 🎨. Actually the multimodal category says "多模态与生成（图像、视频、音频、文本到X）". This fits image-text-to-text. So 🎨.
2. unsloth/Qwen3.8-27B-GGUF -> 📦 (GGUF quantized)
3. orcarouter/Qwen3.8-27B-Uncensored-MLX -> 📦 or 🧠? It's abliterated/uncensored, MLX format. This is a modified weight. Given it's "uncensored" and has specific format MLX, it's a community mod. But it's not GGUF. Actually it's safetensors, mlx. I think 📦 微调与量化 fits well, as "社区微调、GGUF、AWQ" includes community modifications.
4. OBLITERATUS/Qwen3.8-27B-OBLITERATED -> 📦 (abliterated, community mod, also has gguf/mlx)
5. orcarouter/Qwen3.8-27B-Uncensored-FP8 -> 📦? Or 🧠? It's FP8 quantized version? Actually "FP8" is a quantization format, but it's listed as transformers/safetensors. It's an uncensored version. Given it's modified (uncensored/abliterated), I'll put in 📦.
6. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF -> 📦 (GGUF, uncensored)
7. Lightricks/LTX-2.5 -> 🎨 (video generation)
8. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF -> 📦 (GGUF)
9. ornith-ai/Ornith-1.5-35B-A3B -> 🧠 (LLM/MoE, though multimodal tags exist; but primary is text-generation with MoE)
10. MiniMaxAI/MiniMax-Music3 -> 🎨 (audio/music generation, text-to-music)
11. MiniMaxAI/MiniMax-H3 -> 🎨 (video, image-text-to-video)
12. orcarouter/Qwen3.8-27B-Uncensored-GGUF -> 📦 (GGUF)
13. froggeric/Qwen-Fixed-Chat-Templates -> 🔧? Or 📦? It's chat templates, not weights. It's utility for Qwen. Given "专用模型" includes tools? Actually it's not a model. But it's listed. I should put it in 🔧 or 📦. Given it's "chat-template", maybe 🔧 专用工具? Or 📦 微调? Actually it's a template fix, not a weight. I'll put in 🔧 as "对话模板修复工具" or in 📦? The prompt's 📦 says "微调与量化（社区微调、GGUF、AWQ）". This doesn't fit. 🔧 is "专用模型（代码、数学、医疗、嵌入）". Not quite. But since it's a utility/template, maybe I can include it in 🧠 with a note? Or just put it in 🔧 and describe it as template utility. Actually, looking at the other template model (#28 peculiar-ragdoll...), these are clearly not standard models. I'll put both in 🔧 as "聊天模板/工具" or maybe just list them in 🧠 with explanation. Actually, to be safe, I'll create a small subsection or include them. Since the user asks for those four categories, I should stick to them. I'll put chat templates in 🔧 and describe them as "对话模板工具".
14. ornith-ai/Ornith-1.5-35B-A3B-GGUF -> 📦 (GGUF quantized version of LLM)
15. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF -> 📦 (GGUF, abliterated)
16. superwhisper/s1-mini -> 🔧 (ASR, specialized speech/text model) or 🎨? Given "text-to-audio"? No, it's ASR (audio-to-text). The category 🎨 includes "音频". So actually it could go there: "音频" generation/recognition. But the task is text-generation? Wait, "task: text-generation" for superwhisper? That's odd for ASR. Anyway, I'll put it in 🔧 as "专用语音识别（ASR）模型".
17. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1...-GGUF -> 📦 (GGUF, custom fusion/mod)
18. z-lab/Qwen3.8-27B-DFlash2 -> 🧠 (speculative decoding modification? Actually it's a model with speculative decoding? The tag "speculative-decoding" suggests it's a modified architecture or distillation. Given it's safetensors, transformers, and task text-generation. It's likely a fine-tuned or modified LLM. I can put it in 🧠 as "推测解码优化模型" or in 📦. Given "DFlash2" sounds like a specific method. I'll put in 🧠 or 📦? Actually speculative decoding is usually an inference method, but here it's a model. Given it's a Qwen variant, I'll put in 🧠 with note.
19. Qwen/Qwen3.8-27B-FP8 -> 📦 (quantized FP8 version of base model by Qwen official? Actually yes, official quantized version. So 📦.)
20. ornith-ai/Ornith-1.5-9B -> 🧠 (LLM, smaller version)
21. empero-ai/Qwen3.8-27B-Ridge-GGUF -> 📦 (GGUF quantized)
22. deepseek-ai/DeepSeek-V4-Flash-0731 -> 🧠 (LLM)
23. LBH-123-AI/Minimax_h3_latent_Upscaler -> 🎨 (video upscaler, image/video related)
24. huihui-ai/Huihui-Qwen3.8-27B-abliterated -> 📦 (community modified/uncensored, safetensors)
25. ornith-ai/Ornith-1.5-9B-GGUF -> 📦 (GGUF version)
26. deepseek-ai/DeepSeek-V4-Pro-0813 -> 🧠 (LLM, pro version)
27. incoai/Qwen3.8-27B-DFlash2 -> 🧠 or 📦? Similar to #18. Let's put in 🧠 (or 📦?). Actually both #18 and #27 are DFlash2 by different authors (z-lab and incoai). They are likely the same method applied. Given they are modified weights (speculative decoding), they are community models/modifications. I'll put them in 📦 as "推测解码社区优化版" or in 🧠. To balance categories, maybe 🧠 is fine if described as LLM with speculative decoding. Actually, the prompt's 📦 specifically mentions "社区微调、GGUF、AWQ". These are safetensors with specific method, not necessarily quantized. I think they fit better in 🧠 as specialized LLM variants, or in 📦 as community modifications. Given the category 📦 is about quantization and tuning formats, and these are architecture/method modifications, maybe 🧠 is okay. But I'll put them in 🧠.
28. peculiar-ragdoll/Qwen-Sharp-Chat-Templates -> 🔧 (chat template tool, like #13)
29. moonshotai/Kimi-K3 -> 🎨 (image-text-to-text, feature-extraction, compressed-tensors -> multimodal/VLM, very high likes 10,948)
30. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF -> 📦 (GGUF, abliterated, uncensored)

Wait, I need to check if I missed any. Let's count:
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30. Yes, all 30 covered.

Now let me refine categories to make sure they are well-populated and logical:

🧠 语言模型:
- Qwen/Qwen3.8-27B (base multimodal LLM, but I'll keep it here? Actually no, it's image-text-to-text. But it's an LLM family. Let's decide: I'll put Qwen base in 🧠 since it's the foundation language model, even if multimodal.)
Wait, but then what about moonshot Kimi and MiniMax? They are clearly generation/multimodal. Lightricks LTX-2.5 is video. So Qwen base could be in 🧠 or 🎨. Given it's the base model for all others, and it's "image-text-to-text" (multimodal), but also conversational. To avoid confusion, I'll put clearly multimodal-only ones in 🎨

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*