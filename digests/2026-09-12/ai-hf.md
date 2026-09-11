# Hugging Face 热门模型日报 2026-09-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-11 22:15 UTC

---

We need to produce a report with sections: 今日速览 (3-5 sentences), 热门模型 (categorized), each model includes name with link, author, likes, downloads, one-sentence description. Then 生态信号 100-200 Chinese characters. Then 值得探索 2-3 models with reasons.

We have list of 30 models with data. Need to categorize them into four groups: language models, multimodal & generation, specialized models, fine-tuning & quantization.

We need to decide which models belong to each category based on tags and tasks.

Let's parse each model quickly:

1. deepseek-ai/DeepSeek-V4.1-Flash: task image-text-to-text, multimodal (vision+text). So category: 🎨 多模态与生成.

2. openbmb/MiniCPM5-2B: task text-generation, tags llama, etc. Language model.

3. XHToken/Spark-X2.5-4B: text-generation, language.

4. Qwen/Qwen3.8-27B: image-text-to-text, multimodal.

5. nex-agi/Nex-N2.5-mini: text-generation, tags include qwen3_5_moe, image-text-to-text also? It says tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation. Actually it's both? Task text-generation but tags include image-text-to-text. Probably multimodal? But likely language? Since it's a MoE version maybe language. We'll put language.

6. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: task image-text-to-text, tags gguf, quantization. So this is quantized version of multimodal model. Could go to 📦 微调与量化.

7. nex-agi/Nex-N2.5-Pro: text-generation, tags include image-text-to-text. Likely language.

8. Lightricks/LTX-2.5: task image-to-video, multimodal generation.

9. unsloth/Qwen3.8-27B-GGUF: task N/A, tags gguf, quantized. This is quantized version. So 📦.

10. dealinai/GLM-5.3-CYBERSECURITY-FP8: task text-generation, specialized (cybersecurity). So 🔧.

11. WarmBloodAban/Minimax-h3_Singularity: image-to-video, multimodal.

12. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...: image-text-to-text, tags gguf, unsloth, fine tune, heretic, uncensored. This is fine-tuned uncensored version. Could be 📦 (微调与量化) or maybe 🎨? Since it's multimodal but fine-tuned. Probably 📦.

13. google/timesfm-3.0-pytorch: time-series-forecasting, specialized (time series). So 🔧.

14. m-a-p/YuE2-3B: text-to-audio, specialized (audio generation). Could be 🎨? It's audio generation, but category 🎨 多模态与生成 includes audio. We'll put 🎨.

15. MiniMaxAI/MiniMax-H3: image-text-to-video, multimodal.

16. Qwen/Qwen3.8-Flash-Next: image-text-to-text, multimodal.

17. nvidia/Qwen3.8-Flash-Next-NVFP4: image-text-to-text, tags Model Optimizer, etc. This is quantized version? It's NVFP4 quantization. So 📦.

18. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp: image-text-to-text, multimodal.

19. zai-org/GLM-5.3-Flash: image-text-to-text, multimodal.

20. openbmb/MiniCPM5-2B-GGUF: text-generation, tags gguf, quantized. So 📦.

21. sentence-transformers/all-MiniLM-L6-v2: sentence-similarity, embedding model. Specialized (embeddings). So 🔧.

22. Viggle/Viggle-Animate: video-to-video, multimodal generation.

23. openai-community/gpt2: text-generation, language.

24. microsoft/VibeVoice-ASR-Streaming-7B: automatic-speech-recognition, specialized (speech). So 🔧.

25. Jackrong/Qwopus3.8-27B-Flash-GGUF: image-text-to-text, tags gguf, llama.cpp. Quantized multimodal. 📦.

26. Qwen/Qwen-Drive-1.0-4B: image-text-to-text, task autonomous-driving, specialized? Could be 🔧 (domain-specific). But also multimodal. Since it's for autonomous driving, maybe specialized. We'll put 🔧.

27. IFM/K2-Horizon-MoVA-36B-A4B: text-generation, tags k2_horizon, language? Probably language.

28. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF: image-text-to-text, tags gguf, uncensored. Quantized/fine-tuned. 📦.

29. orcarouter/Qwen3.8-27B-Uncensored-GGUF: image-text-to-text, tags gguf, abliterated. Quantized. 📦.

30. OpenVDN/vdn-minimax-h3: text-to-video, tags diffusers, safetensors, text-to-video, base_model:MiniMaxAI/MiniMax-H3. This is a fine-tuned version? It's a derivative. Could be 📦 (微调). Or 🎨? Since it's text-to-video generation, it's multimodal generation. But it's a fine-tune of MiniMax-H3. I'd put 📦.

Now we need to list each model with: model name (with HF link), author, likes, downloads, one-sentence description.

We need to produce categories with bullet points.

We have many models; we should maybe list top ones per category? The instruction: "热门模型 — 按以下分类整理，每个模型包含：..." It seems we should list all 30 models categorized. That's a lot but doable.

We need to keep concise.

We'll produce sections:

- 🧠 语言模型
- 🎨 多模态与生成
- 🔧 专用模型
- 📦 微调与量化

Under each, list models.

We need to include link in markdown format: [模型名](URL). Provide author, likes, downloads.

One-sentence description: what it is and why trending.

We must keep Chinese.

Now generate.

We'll need to compute likes and downloads numbers as given (with commas). Keep as is.

Let's compile data:

I'll create a table for each model.

I'll list them in each category.

First, language models (🧠):

- openbmb/MiniCPM5-2B
- XHToken/Spark-X2.5-4B
- nex-agi/Nex-N2.5-mini
- nex-agi/Nex-N2.5-Pro
- dealinai/GLM-5.3-CYBERSECURITY-FP8? Actually that's specialized cybersecurity, but could be language but we placed in专用. We'll keep there.
- google/timesfm-3.0-pytorch? specialized.
- sentence-transformers/all-MiniLM-L6-v2? embedding specialized.
- microsoft/VibeVoice-ASR-Streaming-7B? specialized.
- Qwen/Qwen-Drive-1.0-4B? specialized.
- IFM/K2-Horizon-MoVA-36B-A4B
- openai-community/gpt2
- maybe also others like Qwen/Qwen3.8-27B? that's multimodal.
- Qwen/Qwen3.8-Flash-Next? multimodal.
- deepseek-ai/DeepSeek-V4.1-Flash? multimodal.
- etc.

So language models list:

1. openbmb/MiniCPM5-2B
2. XHToken/Spark-X2.5-4B
3. nex-agi/Nex-N2.5-mini
4. nex-agi/Nex-N2.5-Pro
5. IFM/K2-Horizon-MoVA-36B-A4B
6. openai-community/gpt2

Potentially also: Qwen/Qwen3.8-27B? but it's image-text-to-text, so multimodal.

Now multimodal & generation (🎨):

- deepseek-ai/DeepSeek-V4.1-Flash
- Qwen/Qwen3.8-27B
- Lightricks/LTX-2.5
- WarmBloodAban/Minimax-h3_Singularity
- m-a-p/YuE2-3B
- MiniMaxAI/MiniMax-H3
- Qwen/Qwen3.8-Flash-Next
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
- zai-org/GLM-5.3-Flash
- Viggle/Viggle-Animate
- maybe also Jackrong/Qwopus3.8-27B-Flash-GGUF? but that's quantized, but still multimodal; could be in 📦.
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF? quantized.
- orcarouter/Qwen3.8-27B-Uncensored-GGUF? quantized.
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-... quantized.
- unsloth/Qwen3.8-27B-GGUF? quantized.
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF? quantized.
- openbmb/MiniCPM5-2B-GGUF? quantized.
- OpenVDN/vdn-minimax-h3? fine-tuned text-to-video.

But we need to allocate each model to exactly one category. Let's decide: For quantized/fine-tuned versions, put them in 📦 微调与量化. For base multimodal models (non-quantized) put in 🎨.

Thus:

🎨 多模态与生成 (base multimodal):
- deepseek-ai/DeepSeek-V4.1-Flash
- Qwen/Qwen3.8-27B
- Lightricks/LTX-2.5
- WarmBloodAban/Minimax-h3_Singularity
- m-a-p/YuE2-3B
- MiniMaxAI/MiniMax-H3
- Qwen/Qwen3.8-Flash-Next
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
- zai-org/GLM-5.3-Flash
- Viggle/Viggle-Animate

Check: Viggle/Viggle-Animate task video-to-video, yes.

Now 📦 微调与量化:
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- unsloth/Qwen3.8-27B-GGUF
- dealinai/GLM-5.3-CYBERSECURITY-FP8? Actually this is specialized cybersecurity but also quantized? It's FP8. Could be 📦? But it's a specialized model; maybe better in 🔧. However it's also quantized (FP8). The category 📦 is for community fine-tuning, GGUF, AWQ. This model is a quantized version (FP8) for cybersecurity. I'd put in 🔧 because it's domain-specific. But we could also put in 📦. Let's read instruction: 📦 微调与量化（社区微调、GGUF、AWQ）. So models that are quantized or community fine-tuned. The cybersecurity model is quantized (FP8) but also specialized. I'd still place in 📦 because it's quantized. But we have also specialized category for code, math, medical, embeddings. Cybersecurity could be considered specialized. Hmm.

We need to decide. Let's put cybersecurity in 🔧 专用模型 (since it's a domain-specific model). The quantized aspect is secondary.

Thus 📦 list includes:

- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- unsloth/Qwen3.8-27B-GGUF
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- Jackrong/Qwopus3.8-27B-Flash-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- openbmb/MiniCPM5-2B-GGUF
- OpenVDN/vdn-minimax-h3
- nvidia/Qwen3.8-Flash-Next-NVFP4 (quantized NVFP4)
- maybe also: (any others) like: (we have also: maybe not)

Check if any other quantized: we have also: (maybe) none else.

Now 🔧 专用模型 (code, math, medical, embeddings, cybersecurity, time-series, speech, autonomous driving, etc.):

- dealinai/GLM-5.3-CYBERSECURITY-FP8
- google/timesfm-3.0-pytorch
- sentence-transformers/all-MiniLM-L6-v2
- microsoft/VibeVoice-ASR-Streaming-7B
- Qwen/Qwen-Drive-1.0-4B
- maybe also: (any others) like: (none else)

Also maybe: (we could include: none else)

Now we need to list each model with details.

Let's gather data for each:

I'll create a dict.

1. openbmb/MiniCPM5-2B
   likes 1,189
   downloads 67,550
   author openbmb
   description: 轻量级 LLaMA 风格语言模型，适合资源受限环境的文本生成。

2. XHToken/Spark-X2.5-4B
   likes 1,099
   downloads 17,712
   author XHToken
   description: 基于 Spark 架构的 4B 参数语言模型，展示强文本生成能力。

3. nex-agi/Nex-N2.5-mini
   likes 688
   downloads 3,121
   author nex-agi
   description: Qwen3.5 MoE 变体的轻量版，兼具多模态潜力与高效文本生成。

4. nex-agi/Nex-N2.5-Pro
   likes 594
   downloads 12,260
   author nex-agi
   description: 更大规模的 Nex-N2.5 系列，提供更强的指令跟踪与对话表现。

5. IFM/K2-Horizon-MoVA-36B-A4B
   likes 279
   downloads 5,192
   author IFM
   description: 采用 MoVA 混合专家架构的 36B 语言模型，在长文本推理上表现突出。

6. openai-community/gpt2
   likes 3,939
   downloads 15,074,191
   author openai-community
   description: 经典的 124M 参数 GPT-2，仍是社区微调和教学的基石。

Now 🎨 list:

- deepseek-ai/DeepSeek-V4.1-Flash
   likes 1,768
   downloads 75,774
   author deepseek-ai
   description: 多模态闪存版 DeepSeek V4.1，支持图像理解与文本生成，适合快速视觉语言任务。

- Qwen/Qwen3.8-27B
   likes 14,752
   downloads 7,563,763
   author Qwen
   description: Qwen 3.8 系列的 27B 多模态基础模型，擅长图文对话与复杂推理。

- Lightricks/LTX-2.5
   likes 3,489
   downloads 1,669,564
   author Lightricks
   description: 扩散模型驱动的图像到视频生成器，支持文本控制的视频合成。

- WarmBloodAban/Minimax-h3_Singularity
   likes 295
   downloads 103,178
   author WarmBloodAban
   description: 基于 MiniMax-H3 的图像到视频模型，专注于创意视频内容的快速生成。

- m-a-p/YuE2-3B
   likes 221
   downloads 971
   author m-a-p
   description: 符号音乐生成与编辑的文本到音频模型，展示 AI 作曲的潜

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*