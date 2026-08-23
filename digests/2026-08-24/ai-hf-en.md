# Hugging Face Trending Models Digest 2026-08-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 22:15 UTC

---

The user wants a structured digest based on the provided list of 30 trending Hugging Face models as of 2026-08-24.

Let me analyze the data first:

Top likes:
1. Qwen/Qwen3.8-27B (12,302 likes, 2.3M dl) - image-text-to-text, Qwen family
2. moonshotai/Kimi-K3 (10,948 likes, 2.7M dl) - image-text-to-text, Moonshot AI
3. MiniMaxAI/MiniMax-H3 (4,375 likes, 4M dl) - image-text-to-video
4. deepseek-ai/DeepSeek-V4-Flash-0731 (3,651 likes, 3M dl) - text-generation
5. unsloth/Qwen3.8-27B-GGUF (2,732 likes, 6.6M dl!) - GGUF quantization
...

Other notable ones:
- Lightricks/LTX-2.5 (1,637 likes) - image-to-video
- MiniMaxAI/MiniMax-Music3 (1,205 likes) - text-to-audio/music
- Qwen/Qwen3.8-27B-FP8 (670 likes, 2.6M dl)
- deepseek-ai/DeepSeek-V4-Pro-0813 (733 likes)
- froggeric/Qwen-Fixed-Chat-Templates (1,420 likes, 0 downloads) - chat template fix
- peculiar-ragdoll/Qwen-Sharp-Chat-Templates (198 likes, 0 dl) - similar

Family dominance:
Qwen3.8-27B is HUGE. Many variants:
- Original: Qwen/Qwen3.8-27B
- FP8: Qwen/Qwen3.8-27B-FP8
- Unsloth GGUF: unsloth/Qwen3.8-27B-GGUF (huge downloads 6.6M)
- Uncensored/abliterated variants: orcarouter (MLX, FP8, GGUF), OBLITERATUS, HauhauCS, JonathanColetti, huihui-ai (2 variants), empero-ai, DavidAU, z-lab, incoai, 0bserverx
- Fixed chat templates: froggeric, peculiar-ragdoll
- Ornith-ai: Ornith-1.5-35B-A3B and 9B (with GGUF), based on qwen3.5_moe?

Other families:
- Moonshot: Kimi-K3 (major release)
- DeepSeek: V4-Flash and V4-Pro
- MiniMax: H3 (video) and Music3
- Lightricks: LTX-2.5 (video)

Specialized:
- superwhisper/s1-mini (ASR/text-generation, Qwen3 based?)
- z-lab/incoai Qwen3.8-27B-DFlash2 (speculative decoding)
- LBH-123-AI Minimax_h3_latent_Upscaler

No real "code/math/medical" specialized models except maybe speculative decoding (DFlash2) and ASR (s1-mini).

So categories need to be mapped:

🧠 Language Models:
- Qwen/Qwen3.8-27B (base)
- moonshotai/Kimi-K3
- deepseek-ai/DeepSeek-V4-Flash-0731
- deepseek-ai/DeepSeek-V4-Pro-0813
- ornith-ai/Ornith-1.5-35B-A3B
- ornith-ai/Ornith-1.5-9B
- superwhisper/s1-mini (ASR but text-gen pipeline)

Wait, the categories are:
- 🧠 Language Models (LLMs, chat models, instruction-tuned)
- 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- 🔧 Specialized Models (code, math, medical, embeddings)
- 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

Given the list, almost everything is either Qwen-based LLM, multimodal, or quant/fine-tune.

Let me organize precisely.

Language Models (LLMs):
1. Qwen/Qwen3.8-27B - https://huggingface.co/Qwen/Qwen3.8-27B - Qwen | 12,302 likes | 2.3M downloads. Flagship multimodal LLM from Qwen with vision and conversational capabilities; dominates the weekly chart.
2. moonshotai/Kimi-K3 - https://huggingface.co/moonshotai/Kimi-K3 - moonshotai | 10,948 likes | 2.7M downloads. Major open-weight release from Moonshot AI with native image-text understanding.
3. deepseek-ai/DeepSeek-V4-Flash-0731 - https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731 - deepseek-ai | 3,651 likes | 3.1M downloads. Fast inference-optimized DeepSeek V4 variant gaining rapid adoption.
4. deepseek-ai/DeepSeek-V4-Pro-0813 - https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813 - deepseek-ai | 733 likes | 57,928 downloads. Higher-capability Pro version of DeepSeek's V4 family.
5. ornith-ai/Ornith-1.5-35B-A3B - https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B - ornith-ai | 361 likes | 23,516 downloads. Large MoE-style model (qwen3_5_moe tag) with multimodal inputs.
6. ornith-ai/Ornith-1.5-9B - https://huggingface.co/ornith-ai/Ornith-1.5-9B - ornith-ai | 180 likes | 31,496 downloads. Smaller 9B variant of the Ornith-1.5 family.
7. superwhisper/s1-mini - https://huggingface.co/superwhisper/s1-mini - superwhisper | 212 likes | 2,280 downloads. Lightweight ASR/text-generation model built on Qwen3 architecture for speech recognition.

Wait, but Qwen3.8-27B is image-text-to-text, so it's multimodal. But it's also an LLM. The category says "LLMs, chat models, instruction-tuned". Given it's the base model, I'll put it in LLMs but note multimodal.

Actually, looking at categories:
- 🧠 Language Models: Base/instruction models primarily for text/chat.
- 🎨 Multimodal & Generation: Video, image, audio generation.

Since Qwen3.8-27B is image-text-to-text, maybe it belongs in Multimodal? But it's clearly an LLM with vision. Let's split logically:
- Base LLM family representatives: Qwen3.8-27B (base), Kimi-K3, DeepSeek V4s, Ornith.
- But Qwen3.8-27B is also generation? No, it's text generation with image input.

Actually, let's categorize by primary pipeline/tag:
Language Models:
- Qwen/Qwen3.8-27B (pipeline image-text-to-text but it's the base LLM; however it's multimodal. Let's include it here as flagship LLM, or in multimodal? The user asks for "Language Models (LLMs, chat models, instruction-tuned)" vs "Multimodal & Generation (image, video, audio, text-to-X)". Given Qwen is image-text-to-text and conversational, it could fit both. But to avoid duplication, let's put base Qwen, Kimi, DeepSeek, Ornith in LLMs, and put video/audio/image generation in Multimodal, and Qwen quant/fine-tunes in the last category.

But wait, there are many Qwen variants that are specifically uncensored/abliterated GGUF. Those clearly go in 📦 Fine-tunes & Quantizations.

Let's map all 30 items to categories without duplication (each model entry listed once):

Category 1: 🧠 Language Models
- Qwen/Qwen3.8-27B (base flagship)
- moonshotai/Kimi-K3
- deepseek-ai/DeepSeek-V4-Flash-0731
- deepseek-ai/DeepSeek-V4-Pro-0813
- ornith-ai/Ornith-1.5-35B-A3B
- ornith-ai/Ornith-1.5-9B
- superwhisper/s1-mini

Category 2: 🎨 Multimodal & Generation
- Lightricks/LTX-2.5 (image-to-video)
- MiniMaxAI/MiniMax-Music3 (text-to-audio)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- Qwen/Qwen3.8-27B-FP8? No, that's quantization of base. Better in quant.
Actually, let's see what's genuinely generation:
- Lightricks/LTX-2.5
- MiniMaxAI/MiniMax-Music3
- MiniMaxAI/MiniMax-H3
- LBH-123-AI/Minimax_h3_latent_Upscaler (upsampler for Minimax H3, pipeline N/A)

Also maybe Qwen base is multimodal but let's keep it in LLM. The FP8 is quant.

Category 3: 🔧 Specialized Models
- z-lab/Qwen3.8-27B-DFlash2 (speculative decoding)
- incoai/Qwen3.8-27B-DFlash2 (speculative decoding, same name different author? Yes, incoai version)
- froggeric/Qwen-Fixed-Chat-Templates (chat template utility)
- peculiar-ragdoll/Qwen-Sharp-Chat-Templates (chat template utility)

Wait, specialized should include code/math/medical/embeddings. Here we have speculative decoding (DFlash2) and chat templates. Chat templates aren't really "specialized models" but they are utilities. Given the prompt says "(code, math, medical, embeddings)" but also "Specialized Models" generally, I can include speculative decoding and chat-template fixes here, or put chat templates in ecosystem notes. Actually, the prompt lists categories explicitly. Let's stick to them but adapt: DFlash2 is specialized (speculative decoding). Chat templates are more "tools/utilities" but can be mentioned in ecosystem or specialized. Given there are only 30 entries, I should cover all.

Actually, I missed:
- orcarouter/Qwen3.8-27B-Uncensored-MLX (MLX)
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- orcarouter/Qwen3.8-27B-Uncensored-FP8
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
- huihui-ai/Huihui-Qwen3.8-27B-abliterated
- empero-ai/Qwen3.8-27B-Ridge-GGUF
- DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF
- 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF

These are all quant/fine-tunes of Qwen.

Also:
- unsloth/Qwen3.8-27B-GGUF (quant)
- ornith-ai/Ornith-1.5-35B-A3B-GGUF (quant)
- ornith-ai/Ornith-1.5-9B-GGUF (quant)

So Category 4: 📦 Fine-tunes & Quantizations
This will be large. Let's list the notable ones:
1. unsloth/Qwen3.8-27B-GGUF - unsloth | 2,732 likes | 6.67M downloads. Highly popular GGUF quantization of Qwen3.8-27B; massive download volume signals strong local-inference demand.
2. Qwen/Qwen3.8-27B-FP8 - Qwen | 670 likes | 2.65M downloads. Official FP8 quantized release for efficient deployment.
3. orcarouter/Qwen3.8-27B-Uncensored-FP8 - orcarouter | 1,043 likes | 190,062 downloads. Uncensored FP8 variant with abliterated refusal filters.
4. orcarouter/Qwen3.8-27B-Uncensored-MLX - orcarouter | 949 likes | 47,098 downloads. MLX-optimized uncensored build for Apple Silicon.
5. orcarouter/Qwen3.8-27B-Uncensored-GGUF - orcarouter | 372 likes | 108,666 downloads. GGUF format uncensored version.
6. OBLITERATUS/Qwen3.8-27B-OBLITERATED - OBLITERATUS | 622 likes | 244,834 downloads. Abliterated community fine-tune with reduced safety filters.
7. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - HauhauCS | 532 likes | 676,697 downloads. Aggressively tuned GGUF with MTP (multi-token prediction?) and uncensored behavior.
8. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF - JonathanColetti | 648 likes | 1.33M downloads. Popular GGUF uncensored distribution.
9. huihui-ai/Huihui-Qwen3.8-27B-abliterated - huihui-ai | 256 likes | 24,844 downloads. Safetensors abliterated release.
10. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF - huihui-ai | 296 likes | 943,360 downloads. Corresponding GGUF quantization with high download traction.
11. empero-ai/Qwen3.8-27B-Ridge-GGUF - empero-ai | 250 likes | 131,435 downloads. Quantized GGUF variant using Ridge/quantization methods.
12. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF - DavidAU | 208 likes | 193,794 downloads. Complex merged/fine-tuned GGUF with GAIN training and cold-fusion techniques.
13. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF - 0bserverx | 242 likes | 579,334 downloads. Heretic-abliterated uncensored GGUF build.
14. z-lab/Qwen3.8-27B-DFlash2 - z-lab | 201 likes | 36,234 downloads. Speculative-decoding optimized variant (DFlash2). Wait, I put this in specialized earlier. Actually it's a fine-tune/modification. Let's keep it in specialized or here? Given "Specialized Models" includes code/math, but this is more of a technical optimization. I'll include it in Fine-tunes since it's a modified architecture for decoding. Or in specialized. Let's decide later.
15. incoai/Qwen3.8-27B-DFlash2 - incoai | 162 likes | 69,783 downloads. Another DFlash2 speculative-decoding release.
16. ornith-ai/Ornith-1.5-35B-A3B-GGUF - ornith-ai | 251 likes | 369,478 downloads. GGUF quantization of the Ornith MoE model.
17. ornith-ai/Ornith-1.5-9B-GGUF - ornith-ai | 175 likes | 359,078 downloads. GGUF version of the 9B Ornith model.

Also there's froggeric and peculiar-ragdoll chat templates. Those are not models exactly but files. I can mention them in ecosystem or specialized. Given the category "Specialized Models" is small, I'll put chat-template fixes there as "utility/tooling" or mention them in ecosystem.

Actually, I should cover all 30 entries exactly as listed? The prompt asks for "Trending Models — Organized by category, each with...". It doesn't say I must include all 30, but it's better to cover the notable ones and not overwhelm. Given 30 items, selecting the top/significant ones per category is appropriate. The prompt says "each with..." implying the ones listed in that category.

Let me list exactly which ones go where, ensuring all are covered or accounted for:

LLMs:
1. Qwen/Qwen3.8-27B
2. moonshotai/Kimi-K3
3. deepseek-ai/DeepSeek-V4-Flash-0731
4. deepseek-ai/DeepSeek-V4-Pro-0813
5. ornith-ai/Ornith-1.5-35B-A3B
6. ornith-ai/Ornith-1.5-9B
7. superwhisper/s1-mini

Multimodal & Generation:
8. Lightricks/LTX-2.5
9. MiniMaxAI/MiniMax-Music3
10. MiniMaxAI/MiniMax-H3
11. LBH-123-AI/Minimax_h3_latent_Upscaler

Specialized Models:
12. z-lab/Qwen3.8-27B-DFlash2
13. incoai/Qwen3.8-27B-DFlash2
14. froggeric/Qwen-Fixed-Chat-Templates
15. peculiar-ragdoll/Qwen-Sharp-Chat-Templates

Fine-tunes & Quantizations:
16. unsloth/Qwen3.8-27B-GGUF
17. Qwen/Qwen3.8-27B-FP8
18. orcarouter/Qwen3.8-27B-Uncensored-MLX
19. orcarouter/Qwen3.8-27B-Uncensored-FP8
20. OBLITERATUS/Qwen3.8-27B-OBLITERATED
21. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
22. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
23. orcarouter/Qwen3.8-27B-Uncensored-GGUF
24. huihui-ai/Huihui-Qwen3.8-27B-

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*