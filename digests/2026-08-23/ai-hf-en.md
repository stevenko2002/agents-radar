# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-22 22:15 UTC

---

We need to produce a structured digest. Use provided data. Identify highlights: top likes etc. Most notable releases: Qwen/Qwen3.8-27B (12k likes), moonshotai/Kimi-K3 (10.9k), deepseek-ai/DeepSeek-V4-Flash (3.6k likes but high downloads), unsloth versions many. Also Lightricks LTX-2.5 image-to-video.

Organize categories: Language Models (LLMs, chat, instruction-tuned). Many Qwen models, DeepSeek, Kimi, Ornith, etc. Multimodal & Generation: image-text-to-text, image-to-video, text-to-video, text-to-audio, image-to-video etc. Specialized Models: code, math, medical, embeddings - not many present; maybe none. Could note lack. Fine-tunes & Quantizations: GGUF, AWQ, unsloth quantizations.

We need to list each model with name (HF link), author, likes, downloads, one sentence description. Should we list all 30? Probably categorize them. Provide categories and list models under each.

Let's extract categories:

Language Models:
- Qwen/Qwen3.8-27B (image-text-to-text but also text generation) but we can put in multimodal? It's image-text-to-text but also conversational. Might fit both language and multimodal. For simplicity, put LLMs here: Qwen/Qwen3.8-27B, Qwen/Qwen3.8-27B-FP8, Qwen/Qwen3.8-2.4T-A95B, DeepSeek-V4-Pro-0813, DeepSeek-V4-Flash-0731, moonshotai/Kimi-K3 (image-text-to-text but also language), ornith-ai/Ornith-1.5-35B-A3B, ornith-ai/Ornith-1.5-35B-A3B-GGUF, meta-models/Muse-Glimmer-30B, superwhisper/s1-mini (text-generation), z-lab/Qwen3.8-27B-DFlash2, JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (text-generation), HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (image-text-to-text but also multimodal), etc.

Multimodal & Generation:
- Lightricks/LTX-2.5 (image-to-video)
- MiniMaxAI/MiniMax-Music3 (text-to-audio)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- TenStrip/10Eros-Max (image-text-to-video)
- orcarouter/Qwen3.8-27B-Uncensored-MLX (image-text-to-text)
- orcarouter/Qwen3.8-27B-Uncensored-FP8 (image-text-to-text)
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (image-text-to-text)
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF (image-text-to-text)
- huihui-ai/Huihui-Qwen3.8-27B-abliterated (image-text-to-text)
- orcarouter/Qwen3.8-27B-Uncensored-GGUF (image-text-to-text)
- empero-ai/Qwen3.8-27B-Ridge-GGUF (image-text-to-text)
- DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF (image-text-to-text)
- froggeric/Qwen-Fixed-Chat-Templates (N/A)
- unsloth/Qwen3.8-27B-GGUF (N/A)
- unsloth/Qwen3.8-27B-NVFP4 (N/A)
- etc.

Specialized Models: none obvious; maybe embeddings not present. Could say none detected.

Fine-tunes & Quantizations: list GGUF models, unsloth quantizations, etc.

We need to be concise but include each model? Might be long. Provide a selection maybe top per category. But instruction: "Organized by category, each with: - Model name (with HF link) - Author, likes, downloads - One sentence: what it is, why it's trending". It doesn't say to list all, but likely we should list each model under appropriate category. Could be lengthy but okay.

We'll produce categories and list models.

Let's compile list with data.

I'll create a table-ish bullet list.

Language Models:

- Qwen/Qwen3.8-27B – Qwen – 12,117 likes – 2,090,699 downloads – A 27B parameter image-text-to-text conversational model from the Qwen3 series, trending due to strong multimodal capabilities and high community engagement.
- Qwen/Qwen3.8-27B-FP8 – Qwen – 662 likes – 2,306,777 downloads – FP8‑quantized version of Qwen3.8‑27B offering reduced memory footprint while preserving performance, driving downloads for efficient inference.
- Qwen/Qwen3.8-2.4T-A95B – Qwen – 1,145 likes – 17,386 downloads – A 95B‑parameter mixture‑of‑experts variant trained on 2.4T tokens, attracting interest for its scale and MoE efficiency.
- deepseek-ai/DeepSeek-V4-Pro-0813 – deepseek-ai – 717 likes – 54,566 downloads – Latest conversational text‑generation model in the DeepSeek V4 family, gaining traction for improved reasoning and safety.
- deepseek-ai/DeepSeek-V4-Flash-0731 – deepseek-ai – 3,629 likes – 2,976,281 downloads – Flash variant of DeepSeek V4 optimized for speed, popular due to high throughput and strong download numbers.
- moonshotai/Kimi-K3 – moonshotai – 10,923 likes – 2,612,739 downloads – A 30B‑parameter image‑text‑to‑text model with compressed tensors, trending for its balance of performance and efficiency.
- ornith-ai/Ornith-1.5-35B-A3B – ornith-ai – 320 likes – 12,611 downloads – 35B‑parameter MoE model extending Qwen3.5, noted for its multimodal generation abilities.
- ornith-ai/Ornith-1.5-35B-A3B-GGUF – ornith-ai – 230 likes – 173,935 downloads – GGUF‑quantized version of Ornith‑1.5‑35B‑A3B, enabling CPU‑friendly inference and seeing steady adoption.
- meta-models/Muse-Glimmer-30B – meta-models – 1,752 likes – 517,564 downloads – 30B image‑text‑to‑text conversational model, gaining attention for strong creative writing and visual understanding.
- superwhisper/s1-mini – superwhisper – 199 likes – 1,913 downloads – Compact text‑generation model with ASR tags, useful for lightweight speech‑related tasks.
- z-lab/Qwen3.8-27B-DFlash2 – z-lab – 192 likes – 29,705 downloads – Speculative‑decoding enabled variant of Qwen3.8‑27B, aimed at faster token generation.
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF – JonathanColetti – 620 likes – 1,223,422 downloads – Uncensored GGUF release of Qwen3.8‑27B, popular among llama.cpp users seeking open‑weight flexibility.
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF – HauhauCS – 481 likes – 486,221 downloads – Aggressive MTP‑enabled uncensored GGUF model, trending for its multimodal vision capabilities.
- orcarouter/Qwen3.8-27B-Uncensored-GGUF – orcarouter – 333 likes – 85,371 downloads – GGUF‑quantized uncensored variant, appealing to users wanting reduced restrictions.
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF – huihui-ai – 254 likes – 635,416 downloads – Abliterated (uncensored) GGUF version, noted for broad multimodal use.
- huihui-ai/Huihui-Qwen3.8-27B-abliterated – huihui-ai – 244 likes – 21,612 downloads – Non‑GGUF abliterated model, offering full‑precision uncensored capabilities.
- empero-ai/Qwen3.8-27B-Ridge-GGUF – empero-ai – 243 likes – 97,247 downloads – Ridge‑tuned GGUF quantized model, gaining traction for improved stability in llama.cpp.
- DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF – DavidAU – 188 likes – 176,969 downloads – Complex GGUF variant with Cold‑Fusion GAIN training and MTP, attracting niche experimenters.
- froggeric/Qwen-Fixed-Chat-Templates – froggeric – 1,396 likes – 0 downloads – Provides corrected Jinja chat templates for Qwen families, trending for usability despite zero downloads (likely template repo).
- unsloth/Qwen3.8-27B-GGUF – unsloth – 2,616 likes – 6,320,542 downloads – Unsloth‑provided GGUF quantization of Qwen3.8‑27B, the most downloaded quantized version, reflecting strong demand for efficient deployment.
- unsloth/Qwen3.8-27B-NVFP4 – unsloth – 334 likes – 1,202,168 downloads – NVFP4‑quantized version, appealing for low‑bit inference on supported hardware.

Multimodal & Generation:

- Lightricks/LTX-2.5 – Lightricks – 1,560 likes – 694,670 downloads – Image‑to‑video diffusion model, trending for enabling short video generation from still images.
- MiniMaxAI/MiniMax-Music3 – MiniMaxAI – 1,180 likes – 16,644 downloads – Text‑to‑audio diffusion model for music generation, gaining interest in AI‑driven music creation.
- MiniMaxAI/MiniMax-H3 – MiniMaxAI – 4,335 likes – 3,899,160 downloads – Image‑text‑to‑video model, the most downloaded video model, popular for versatile video synthesis.
- TenStrip/10Eros-Max – TenStrip – 316 likes – 0 downloads – Fine‑tuned video model based on MiniMax‑H3, noted despite zero downloads as a community experiment.
- orcarouter/Qwen3.8-27B-Uncensored-MLX – orcarouter – 884 likes – 34,909 downloads – MLX‑optimized uncensored multimodal model, trending among Apple‑silicon users.
- orcarouter/Qwen3.8-27B-Uncensored-FP8 – orcarouter – 986 likes – 142,846 downloads – FP8 uncensored variant, offering speed‑memory trade‑off for multimodal tasks.
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF – (already listed under language but also multimodal) – keep maybe under multimodal.
- meta-models/Muse-Glimmer-30B – also multimodal.

We could avoid duplication by placing each model only once; choose primary category based on pipeline. For those with image-text-to-text, could be language or multimodal. Let's decide: Language Models for pure text-generation pipelines; Multimodal & Generation for pipelines involving image, video, audio.

Thus, models with pipeline "text-generation" go to Language Models. Those with "image-text-to-text", "image-to-video", "text-to-video", "text-to-audio", "image-text-to-video" go to Multimodal & Generation.

Check each:

- Qwen/Qwen3.8-27B: pipeline image-text-to-text => Multimodal.
- unsloth/Qwen3.8-27B-GGUF: N/A -> maybe Specialized? but it's quantized base; could go to Fine-tunes & Quantizations.
- orcarouter/Qwen3.8-27B-Uncensored-MLX: image-text-to-text => Multimodal.
- orcarouter/Qwen3.8-27B-Uncensored-FP8: image-text-to-text => Multimodal.
- OBLITERATUS/Qwen3.8-27B-OBLITERATED: text-generation => Language.
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF: text-generation => Language.
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF: image-text-to-text => Multimodal.
- Lightricks/LTX-2.5: image-to-video => Multimodal.
- MiniMaxAI/MiniMax-Music3: text-to-audio => Multimodal.
- ornith-ai/Ornith-1.5-35B-A3B: text-generation => Language.
- MiniMaxAI/MiniMax-H3: image-text-to-video => Multimodal.
- orcarouter/Qwen3.8-27B-Uncensored-GGUF: image-text-to-text => Multimodal.
- froggeric/Qwen-Fixed-Chat-Templates: N/A -> Fine-tunes & Quantizations? Actually it's chat templates, not a model; could go to Fine-tunes & Quantizations as community tool.
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF: image-text-to-text => Multimodal.
- ornith-ai/Ornith-1.5-35B-A3B-GGUF: text-generation => Language.
- Qwen/Qwen3.8-27B-FP8: image-text-to-text => Multimodal.
- empero-ai/Qwen3.8-27B-Ridge-GGUF: image-text-to-text => Multimodal.
- huihui-ai/Huihui-Qwen3.8-27B-abliterated: image-text-to-text => Multimodal.
- superwhisper/s1-mini: text-generation => Language.
- z-lab/Qwen3.8-27B-DFlash2: text-generation => Language.
- TenStrip/10Eros-Max: image-text-to-video => Multimodal.
- DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF: image-text-to-text => Multimodal.
- deepseek-ai/DeepSeek-V4-Pro-0813: text-generation => Language.
- deepseek-ai/DeepSeek-V4-Flash-0731: text-generation => Language.
- Qwen/Qwen3.8-2.4T-A95B: text-generation => Language.
- 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF: text-generation => Language.
- meta-models/Muse-Glimmer-30B: image-text-to-text => Multimodal.
- moonshotai/Kimi-K3: image-text-to-text => Multimodal.
- LBH-123-AI/Minimax_h3_latent_Upscaler: N/A -> maybe Specialized? but it's upscaler, could go to Multimodal & Generation as image processing. However pipeline N/A; treat as Specialized? We'll put in Multimodal & Generation as latent upscaler for video.
- unsloth/Qwen3.8-27B-NVFP4: N/A -> Fine-tunes & Quantizations.

Now categorize.

Language Models (text-generation):
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
- ornith-ai/Ornith-1.5-35B-A3B
- ornith-ai/Ornith-1.5-35B-A3B-GGUF
- superwhisper/s1-mini
- z-lab/Qwen3.8-27B-DFlash2
- deepseek-ai/DeepSeek-V4-Pro-0813
- deepseek-ai/DeepSeek-V4-Flash-0731
- Qwen/Qwen3.8-2.4T-A95B
- 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF
- (maybe also Qwen/Qwen3.8-27B? but it's image-text-to-text, so not)

Multimodal & Generation:
- Qwen/Qwen3.8-27B
- orcarouter/Qwen3.8-27B

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*