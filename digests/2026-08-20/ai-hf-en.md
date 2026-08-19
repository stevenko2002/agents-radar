# Hugging Face Trending Models Digest 2026-08-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-19 22:15 UTC

---

We need to produce a structured digest based on the given list (30 models) as of 2026-08-20. We must extract notable highlights, categorize models into the four categories: Language Models, Multimodal & Generation, Specialized Models, Fine-tunes & Quantizations. Provide for each: model name (with HF link), author, likes, downloads, one sentence description.

We need to decide which models belong where. The list includes many Qwen variants, some uncensored, quantized, etc. Also MiniMax-H3, MiniMax-Music3, LTX-2.5, etc.

We need to decide categories:

- Language Models (LLMs, chat models, instruction-tuned): likely text-generation models like Qwen3.8-2.4T-A95B, DeepSeek-V4-Pro-0813, DeepSeek-V4-Flash-0731, maybe Qwen3.8-27B (though it's image-text-to-text). But Qwen3.8-27B is image-text-to-text, not pure language. However many Qwen variants are multimodal. We'll put pure text generation ones in Language Models.

- Multimodal & Generation (image, video, audio, text-to-X): includes image-text-to-text (Qwen3.8-27B, Qwen3.8-27B-FP8, etc.), image-to-video (LTX-2.5, lightx2v/Minimax-h3-Turbo), text-to-audio (MiniMax-Music3), image-text-to-video (MiniMax-H3, TenStrip/10Eros-Max), text-to-image (Gazingstars123/Anima-2.9B). Also image-text-to-text with uncensored etc.

- Specialized Models (code, math, medical, embeddings): The list does not have obvious specialized categories; maybe none. But we could note that none are explicitly code/math/medical. However we could still have a category but maybe empty or note none. But we must still provide organized by category; if none, we can state "No specialized models in this week's trending list."

- Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ): includes unsloth GGUF versions, orcarouter uncensored GGUF, JonathanColetti GGUF, HauhauCS, empero-ai, DavidAU, Blackfrost-AI, huihui-ai, 0bserverx, etc. Also quantized FP8 versions (Qwen3.8-27B-FP8, orcarouter FP8). Also NVFP4.

We'll produce categories accordingly.

Now we need to produce "Today's Highlights": 3-5 sentences about notable model releases and trends. Likely highlight the dominance of Qwen family, rise of multimodal models, uncensored GGUF quantizations, MiniMax video models gaining traction, DeepSeek V4 flash.

Now "Trending Models": For each category, list models (maybe top few). Since list is long, we could select representative ones per category. But instruction: "Organized by category, each with: Model name (with HF link), Author, likes, downloads, One sentence: what it is, why it's trending". It doesn't specify how many per category; we could list all that fit. But that would be long. However we can still list all models categorized accordingly. Provide bullet list per category.

We must preserve all HuggingFace links. Use markdown link format: [Model name](URL). Provide author, likes, downloads.

Let's categorize each model:

1. Qwen/Qwen3.8-27B - image-text-to-text => Multimodal & Generation.

2. unsloth/Qwen3.8-27B-GGUF - quantized GGUF => Fine-tunes & Quantizations.

3. MiniMaxAI/MiniMax-Music3 - text-to-audio => Multimodal & Generation.

4. Qwen/Qwen3.8-2.4T-A95B - text-generation => Language Models.

5. deepseek-ai/DeepSeek-V4-Pro-0813 - text-generation => Language Models.

6. Qwen/Qwen3.8-27B-FP8 - image-text-to-text => Multimodal & Generation (also quantized FP8 but still multimodal).

7. Lightricks/LTX-2.5 - image-to-video => Multimodal & Generation.

8. orcarouter/Qwen3.8-27B-Uncensored-FP8 - image-text-to-text => Multimodal & Generation (also quantized FP8 but uncensored).

9. orcarouter/Qwen3.8-27B-Uncensored-MLX - image-text-to-text => Multimodal & Generation (MLX version).

10. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF - text-generation (but uncensored GGUF) => Fine-tunes & Quantizations (since GGUF quantized uncensored).

11. MiniMaxAI/MiniMax-H3 - image-text-to-video => Multimodal & Generation.

12. meta-models/Muse-Glimmer-30B - image-text-to-text => Multimodal & Generation.

13. unsloth/Qwen3.8-27B-NVFP4 - quantized => Fine-tunes & Quantizations.

14. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - image-text-to-text => Fine-tunes & Quantizations (GGUF uncensored).

15. deepseek-ai/DeepSeek-V4-Flash-0731 - text-generation => Language Models.

16. froggeric/Qwen-Fixed-Chat-Templates - N/A (chat templates) => maybe Specialized? It's a chat template utility, not a model. Could be considered Specialized (tools). But we could put under Fine-tunes & Quantizations? It's not a quantized model. Probably better under Specialized Models (since it's a utility for chat templates). We'll categorize as Specialized Models.

17. dots-studio/dots3-note-prev - image-text-to-text => Multimodal & Generation.

18. moonshotai/Kimi-K3 - image-text-to-text => Multimodal & Generation.

19. empero-ai/Qwen3.8-27B-Ridge-GGUF - image-text-to-text => Fine-tunes & Quantizations.

20. Comfy-Org/MiniMax-Music-3 - N/A (finetune of MiniMax-Music3) => Fine-tunes & Quantizations (community fine-tune).

21. lightx2v/Minimax-h3-Turbo - image-to-video => Multimodal & Generation.

22. TenStrip/10Eros-Max - image-text-to-video => Multimodal & Generation (finetune of MiniMax-H3).

23. Gazingstars123/Anima-2.9B - text-to-image => Multimodal & Generation.

24. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF - image-text-to-text => Fine-tunes & Quantizations (GGUF uncensored fine-tune).

25. Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF - image-text-to-text => Fine-tunes & Quantizations.

26. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF - image-text-to-text => Fine-tunes & Quantizations.

27. Comfy-Org/MiniMax-H3 - N/A (finetune) => Fine-tunes & Quantizations.

28. orcarouter/Qwen3.8-27B-Uncensored-GGUF - image-text-to-text => Fine-tunes & Quantizations.

29. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF - text-generation => Fine-tunes & Quantizations.

30. huihui-ai/Huihui-Qwen3.8-27B-abliterated - image-text-to-text => Multimodal & Generation (non-quantized safetensors).

Now we need to produce for each category a list with model name (link), author, likes, downloads, one sentence.

Potentially long but okay.

We'll need to format nicely.

Let's create sections:

**Today's Highlights** (3-5 sentences)

**Trending Models**

- 🧠 Language Models

   - Qwen/Qwen3.8-2.4T-A95B (link) – Author: Qwen, Likes: 1,097, Downloads: 12,699 – One sentence: ...

   - deepseek-ai/DeepSeek-V4-Pro-0813 ...

   - deepseek-ai/DeepSeek-V4-Flash-0731 ...

   - maybe also include others like Qwen3.8-27B? but that's multimodal.

We could include only text-generation models.

- 🎨 Multimodal & Generation

   List many: Qwen/Qwen3.8-27B, MiniMaxAI/MiniMax-Music3, Qwen/Qwen3.8-27B-FP8, Lightricks/LTX-2.5, orcarouter/Qwen3.8-27B-Uncensored-FP8, orcarouter/Qwen3.8-27B-Uncensored-MLX, MiniMaxAI/MiniMax-H3, meta-models/Muse-Glimmer-30B, dots-studio/dots3-note-prev, moonshotai/Kimi-K3, lightx2v/Minimax-h3-Turbo, TenStrip/10Eros-Max, Gazingstars123/Anima-2.9B, huihui-ai/Huihui-Qwen3.8-27B-abliterated

- 🔧 Specialized Models

   - froggeric/Qwen-Fixed-Chat-Templates (maybe also note none else)

- 📦 Fine-tunes & Quantizations

   List the rest: unsloth/Qwen3.8-27B-GGUF, JonathanColetti/Qwen3.8-27B-Uncensored-GGUF, unsloth/Qwen3.8-27B-NVFP4, HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF, empero-ai/Qwen3.8-27B-Ridge-GGUF, Comfy-Org/MiniMax-Music-3, DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF, Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF, huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF, Comfy-Org/MiniMax-H3, orcarouter/Qwen3.8-27B-Uncensored-GGUF, 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF

We need to include author, likes, downloads.

Let's extract data from list for each.

I'll create a table of data:

1. Qwen/Qwen3.8-27B
   Author: Qwen
   Likes: 11,458
   Downloads: 1,006,235
   Tags: image-text-to-text

2. unsloth/Qwen3.8-27B-GGUF
   Author: unsloth
   Likes: 2,044
   Downloads: 4,318,134
   Tags: gguf ...

3. MiniMaxAI/MiniMax-Music3
   Author: MiniMaxAI
   Likes: 1,032
   Downloads: 13,138
   Tags: text-to-audio

4. Qwen/Qwen3.8-2.4T-A95B
   Author: Qwen
   Likes: 1,097
   Downloads: 12,699
   Tags: text-generation

5. deepseek-ai/DeepSeek-V4-Pro-0813
   Author: deepseek-ai
   Likes: 629
   Downloads: 37,583
   Tags: text-generation

6. Qwen/Qwen3.8-27B-FP8
   Author: Qwen
   Likes: 597
   Downloads: 1,063,646
   Tags: image-text-to-text

7. Lightricks/LTX-2.5
   Author: Lightricks
   Likes: 1,314
   Downloads: 555,993
   Tags: image-to-video

8. orcarouter/Qwen3.8-27B-Uncensored-FP8
   Author: orcarouter
   Likes: 611
   Downloads: 60,078
   Tags: image-text-to-text

9. orcarouter/Qwen3.8-27B-Uncensored-MLX
   Author: orcarouter
   Likes: 583
   Downloads: 27
   Tags: image-text-to-text

10. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
    Author: JonathanColetti
    Likes: 465
    Downloads: 766,812
    Tags: text-generation

11. MiniMaxAI/MiniMax-H3
    Author: MiniMaxAI
    Likes: 4,173
    Downloads: 3,055,205
    Tags: image-text-to-video

12. meta-models/Muse-Glimmer-30B
    Author: meta-models
    Likes: 1,700
    Downloads: 430,313
    Tags: image-text-to-text

13. unsloth/Qwen3.8-27B-NVFP4
    Author: unsloth
    Likes: 284
    Downloads: 653,042
    Tags: quantized

14. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
    Author: HauhauCS
    Likes: 281
    Downloads: 131,113
    Tags: image-text-to-text

15. deepseek-ai/DeepSeek-V4-Flash-0731
    Author: deepseek-ai
    Likes: 3,547
    Downloads: 2,330,940
    Tags: text-generation

16. froggeric/Qwen-Fixed-Chat-Templates
    Author: froggeric
    Likes: 1,288
    Downloads: 0
    Tags: chat-template

17. dots-studio/dots3-note-prev
    Author: dots-studio
    Likes: 230
    Downloads: 1,239
    Tags: image-text-to-text

18. moonshotai/Kimi-K3
    Author: moonshotai
    Likes: 10,852
    Downloads: 2,289,863
    Tags: image-text-to-text

19. empero-ai/Qwen3.8-27B-Ridge-GGUF
    Author: empero-ai
    Likes: 195
    Downloads: 32,454
    Tags: image-text-to-text

20. Comfy-Org/MiniMax-Music-3
    Author: Comfy-Org
    Likes: 192
    Downloads: 325,083
    Tags: fine-tune of MiniMax-Music3

21. lightx2v/Minimax-h3-Turbo
    Author: lightx2v
    Likes: 624
    Downloads: 340,984
    Tags: image-to-video

22. TenStrip/10Eros-Max
    Author: TenStrip
    Likes: 283
    Downloads: 0
    Tags: image-text-to-video (finetune of MiniMax-H3)

23. Gazingstars123/Anima-2.9B
    Author: Gazingstars123
    Likes: 268
    Downloads: 26,566
    Tags: text-to-image

24. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
    Author: DavidAU
    Likes: 2,163
    Downloads: 3,033,363
    Tags: image-text-to-text

25. Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF
    Author: Blackfrost-AI
    Likes: 170
    Downloads: 164,263
    Tags: image-text-to-text

26. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
    Author: huihui-ai
    Likes: 169
    Downloads: 94,234
    Tags: image-text-to-text

27. Comfy-Org/MiniMax-H3
    Author: Comfy-Org
    Likes: 1,4

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*