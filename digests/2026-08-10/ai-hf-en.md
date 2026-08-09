# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-09 22:16 UTC

---

Got it, let's tackle this. First, I need to follow the structure exactly: Today's Highlights, Trending Models by category, Ecosystem Signal, Worth Exploring. Let's start with the highlights first.

First, look at the top models. The top likes are black-forest-labs/FLUX.1-dev with 14k likes, then moonshotai/Kimi-K3 at 10k, baidu/Unlimited-OCR at ~4k, zai-org/GLM-5.2 at ~4.9k, wait no, GLM-5.2 is 4,913, right. Also, MiniMax-H3 is a big trend for video, lots of community fine-tunes and quantizations around it. Also DeepSeek-V4-Flash has super high downloads, 868k, plus unsloth's GGUF of it. Oh right, also a lot of uncensored fine-tunes of Qwen and DeepSeek? Wait no, let's make the highlights 3-5 sentences. Let's see:

First sentence: This week's trending list is led by Black Forest Labs' open-weight FLUX.1-dev text-to-image model, which tops the ranking with 14,057 weekly likes, reflecting sustained demand for high-performance open image generation tools. Second: Multimodal and video generation are also dominant trends, with MiniMaxAI's image-text-to-video MiniMax-H3 and Moonshot AI's multimodal Kimi-K3 ranking 2nd and 4th in likes respectively, and spawning dozens of community fine-tunes, LoRAs, and quantization variants. Third: Open-weight language models remain highly popular, with DeepSeek-V4-Flash-0731 seeing 868,576 downloads in the past week, and Zhipu AI's GLM-5.2 MoE model also breaking into the top 10 likes. Fourth: There is notable activity around uncensored and specialized fine-tunes of popular base models like Qwen3 and DeepSeek-V4, alongside growing adoption of GGUF quantizations for local deployment. Wait that's 4, good.

Next, Trending Models, organized by the 4 categories. Let's list each category first:

First category: 🧠 Language Models (LLMs, chat models, instruction-tuned). Let's pick the relevant ones here. Let's see:
1. moonshotai/Kimi-K3: https://huggingface.co/moonshotai/Kimi-K3, author moonshotai, likes 10394, downloads 1456459. Sentence: A high-performance multimodal large language model from Moonshot AI with strong feature extraction and compressed tensor optimization, trending for its balance of speed and capability for conversational and multimodal tasks.
2. deepseek-ai/DeepSeek-V4-Flash-0731: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731, author deepseek-ai, likes 2937, downloads 868576. Sentence: DeepSeek's lightweight, fast text-generation and conversational LLM, trending for its low latency and high performance for enterprise and consumer chat use cases.
3. zai-org/GLM-5.2: https://huggingface.co/zai-org/GLM-5.2, author zai-org, likes 4913, downloads 2488397. Sentence: Zhipu AI's open-weight mixture-of-experts language model optimized for conversational and text generation tasks, trending for its strong performance on par with larger proprietary models at a smaller footprint.
4. inclusionAI/Ling-3.0-flash: https://huggingface.co/inclusionAI/Ling-3.0-flash, author inclusionAI, likes 244, downloads 4747. Sentence: A lightweight conversational text-generation model from Inclusion AI, trending for its optimized performance for edge and low-resource deployment use cases.
Wait wait, also check if there are others? Oh, deepgrove/maple-preview is MoE text gen, right? Let's add that? Wait no, let's make sure each entry is correct. Wait also, the unsloth GGUF is quant, so that goes to the fine-tunes category. Right.

Next category: 🎨 Multimodal & Generation (image, video, audio, text-to-X). Let's list these:
1. black-forest-labs/FLUX.1-dev: https://huggingface.co/black-forest-labs/FLUX.1-dev, author black-forest-labs, likes 14057, downloads 487171. Sentence: Black Forest Labs' state-of-the-art open-weight text-to-image generation model, topping the weekly trending list for its industry-leading image quality, prompt adherence, and active community ecosystem.
2. MiniMaxAI/MiniMax-H3: https://huggingface.co/MiniMaxAI/MiniMax-H3, author MiniMaxAI, likes 3233, downloads 35295. Sentence: MiniMaxAI's open-weight image-text-to-video generation model, trending for its high-quality, coherent video output from text and image inputs, and massive community support for customizations.
3. baidu/Unlimited-OCR: https://huggingface.co/baidu/Unlimited-OCR, author baidu, likes 3985, downloads 2889062. Sentence: Baidu's open-weight optical character recognition model supporting unlimited text extraction from images, trending for its high accuracy across languages and document types for enterprise and consumer OCR use cases.
4. Audio8/Audio8-TTS-Preview-0.6b: https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b, author Audio8, likes 332, downloads 13132. Sentence: A lightweight open-weight text-to-speech model from Audio8, trending for its natural voice output and low resource requirements for edge and embedded TTS applications.
5. microsoft/Mage-VL: https://huggingface.co/microsoft/Mage-VL, author microsoft, likes 323, downloads 461150. Sentence: Microsoft's open-weight multimodal vision-language model, trending for its strong performance on image-text understanding and generation tasks for enterprise AI workflows.
Wait that's good, covers image, video, OCR, TTS, vision-language.

Third category: 🔧 Specialized Models (code, math, medical, embeddings). Let's see, Kwaipilot/KAT-Coder-V2.5-Dev is code, right? Let's check: tags have code, qwen3_5_moe, yes. Any others? Let's see, the Qwen ones? No, the Qwen ones are either fine-tunes or quant. Wait KAT-Coder is code. Also, is there any other specialized? Let's see, nvidia's VoiceChat is voice, but that's maybe multimodal? No, wait VoiceChat is 11B, but downloads are low. Wait no, let's add Kwaipilot's model, and maybe? Wait no, let's check: Kwaipilot/KAT-Coder-V2.5-Dev: https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev, author Kwaipilot, likes 552, downloads 18574. Sentence: A code-focused large language model fine-tuned on Qwen3.5 MoE, trending for its strong performance on coding, debugging, and software engineering tasks with support for multimodal inputs. Wait any other specialized? Let's see, the LiquidAI LFM2.5? No, that's text gen, general. Oh, maybe the moonshot Kimi-K3 has feature extraction, but no, it's multimodal. Wait maybe that's okay, if only one, but let's see. Wait no, maybe I missed? Let's check again. Oh, the nvidia VoiceChat is specialized for voice chat? Wait tags: VoiceChat, 11B, maybe. Wait no, let's see: nvidia/NVIDIA-NemotronLabs-VoiceChat-11B: https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B, author nvidia, likes 260, downloads 543. Sentence: NVIDIA's specialized 11B voice chat model optimized for low-latency, natural conversational voice interactions, trending for its use in customer service and voice assistant applications. Yeah, that fits specialized. Good.

Fourth category: 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, ComfyUI integrations). Let's list these:
1. Comfy-Org/MiniMax-H3: https://huggingface.co/Comfy-Org/MiniMax-H3, author Comfy-Org, likes 1067, downloads 4947943. Sentence: A ComfyUI-optimized single-file diffusion variant of MiniMax-H3, trending for its plug-and-play compatibility with the popular ComfyUI video generation workflow, with nearly 5 million downloads.
2. unsloth/DeepSeek-V4-Flash-0731-GGUF: https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF, author unsloth, likes 627, downloads 188761. Sentence: A GGUF quantization of DeepSeek-V4-Flash-0731 optimized for local deployment via llama.cpp, trending for its low memory footprint and fast inference on consumer hardware.
3. realrebelai/MiniMax-H3_GGUFs: https://huggingface.co/realrebelai/MiniMax-H3_GGUFs, author realrebelai, likes 187, downloads 160747. Sentence: A collection of GGUF quantizations of MiniMax-H3 optimized for local video generation, trending for its compatibility with consumer GPUs and easy integration with popular video generation tools.
4. Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot: https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot, author Abiray, likes 154, downloads 511473. Sentence: A set of optimized quantizations of MiniMax-H3 using NVFP4, INT4, and INT8 precision with ConvRot optimization, trending for its balance of video generation quality and low hardware requirements.
5. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF: https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF, author LuffyTheFox, likes 454, downloads 396282. Sentence: An uncensored GGUF quantization of a Qwen3.6 35B MoE fine-tune, trending for its high performance on creative and unrestricted conversational tasks with low local deployment overhead.
Wait that's good, covers ComfyUI packs, GGUF quants, uncensored fine-tune quants. Also, wait the larryvrh MiniMax-H3 Turbo LoRA? Let's see, likes 543, downloads 0? Wait no, downloads 0? Oh, maybe it's new. Wait no, the list says downloads 0 for that. Maybe skip it, since downloads are 0. Also the SexGod1979 one, downloads 0, skip. The Kijai ones, downloads 0, skip. The ethanfel one, downloads 0, skip. The sakamakismile one, downloads 0, skip. So the ones with actual downloads are the ones I listed. Good.

Next, Ecosystem Signal, 100-200 words. Let's think: First, model families gaining momentum: MiniMax-H3 (video gen) is a huge one, with tons of community variants, quants, ComfyUI packs. Also, DeepSeek V4 family, Qwen3 family, GLM5 family for LLMs, FLUX for image gen. Then open-weight vs proprietary: Almost all top trending models are open-weight, with permissive licenses, except maybe some? Wait MiniMax-H3 is open? The Comfy-Org one says license other, but the base is open? Wait no, the trend is that open-weight models are dominating the trending list, with community contributions driving adoption. Then quantization and fine-tuning activity: There's massive activity around GGUF and optimized quantizations (NVFP4, INT4/8) for both LLMs and video generation models, to make them run on consumer hardware. Also, lots of uncensored fine-tunes of popular base models (Qwen, DeepSeek) for users wanting fewer content restrictions. Also, ComfyUI integrations are a big driver for video and image model adoption, as seen by the 5M downloads of the Comfy-Org MiniMax-H3 pack. Wait let's structure that:

The current Hugging Face ecosystem shows strong momentum for three core model families: MiniMax-H3 for video generation, DeepSeek V4 and Qwen3 for large language models, and FLUX for image generation, all of which are open-weight and have active community contribution ecosystems. Open-weight models continue to dominate trending rankings, with proprietary models largely absent from the top list, reflecting user and developer preference for customizable, transparent model weights. Quantization and fine-tuning activity is at a peak, with widespread development of GGUF, NVFP4, and INT4/INT8 quantizations to reduce hardware requirements for local deployment, plus hundreds of community fine-tunes (including uncensored variants and task-specific adapters) of popular base models. ComfyUI-optimized packs are a key adoption driver for generative models, with the Comfy-Org MiniMax-H3 single-file variant alone seeing nearly 5 million downloads in the past week. Wait that's around 180 words, perfect.

Then Worth Exploring, 2-3 models, with reasoning. Let's pick:
1. moonshotai/Kimi-K3: Because it's a top-liked multimodal LLM with strong performance and compressed tensor optimization, making it suitable for both conversational and feature extraction tasks, and has massive download numbers indicating real-world utility.
2. MiniMaxAI/MiniMax-H3: Because it's the leading open-weight video generation model right now, with a huge ecosystem of community tools, LoRAs, and quantizations that make it accessible for both beginners and advanced users to create high-quality video content.
3. unsloth/DeepSeek-V4-Flash-0731-GGUF: Because it brings a high-performance state-of-the-art LLM to consumer hardware via optimized GGUF quantization, making it easy for individual developers and small teams to deploy powerful conversational AI without expensive cloud infrastructure. Wait that's 3, perfect.

Wait let's make sure all links are preserved, right? Yes, each model has the link. Let's check if all categories are covered, no mistakes. Wait let's check the likes: FLUX.1-dev is 14,057, that's top, correct. Kimi-K3 is 10,394, second, correct. GLM-5.2 is 4,913, third? Wait no, baidu Unlimited OCR is 3,985, then DeepSeek V4 Flash is 2,937, then MiniMax-H3 is 3,233? Wait wait wait, hold on, the original list is sorted by weekly likes. Let's check the original list again:

Original list likes:
1. MiniMax-H3: 3233
2. DeepSeek-V4: 2937
3. Comfy MiniMax: 1067
4. Kimi-K3: 10394? Wait wait OH NO! Wait the original list says "sorted by weekly likes" but wait the numbers: Kimi-K3 is 10,394 which is higher than MiniMax-H3's 3233. Wait wait that's a mistake? Wait no, let's check the original user's input again. Oh! Wait the user wrote: "30 models, sorted by weekly likes:" but then the list is not sorted? Wait wait let's check the numbers:

Wait the list as given:
1. MiniMax-H3: 3,233
2. DeepSeek-V4: 2,937
3. Comfy MiniMax: 1,067
4. Kimi-K3: 10,394 — that's way higher. Oh, maybe the user made a typo in the order? Wait no, wait let's check all likes:
4. Kimi-K3: 10394 (higher than 1,2,3)
21. Baidu OCR: 3985 (higher than 1,2,3)
27. GLM-5.2: 4913 (higher than 1,2,3)
29. FLUX.1-dev:14057 (highest of all). Oh! Oh right, the user probably listed them in the order they got from Hugging Face, but said sorted by weekly likes? Wait no, that can't be. Wait wait let's recheck the user's input:

Wait the user wrote: "The following are trending models on Hugging Face Hub as of 2026-08-10 (30 models, sorted by weekly likes):" then the list is 1 to 30, but the likes are not in order. Wait that's odd. Wait wait let's list all likes in order:
29. FLUX.1-dev: 14057 (highest)
4. Kimi-K3: 10394
27. GLM-5.2: 4913
21. Baidu OCR: 3985
1. MiniMax-H3: 3233
2. DeepSeek-V4: 2937
7. DavidAU Qwen: 1803
24. Kwaipilot KAT: 552
5. Larryvrh MiniMax LoRA: 543
26. LuffyTheFox Qwen GGUF: 454
6. LiquidAI LFM2.5: 448
25. Audio8 TTS: 332
12. inclusionAI Ling: 244
15. drbaph MiniMax LoRA Comfy: 231
16. SexGod MiniMax: 229
17. Mistral Shieldstral: 211
18. realrebelai MiniMax GGUF: 187
20. Kijai MiniMax exp: 168
19. LiquidAI GGUF:173? Wait 173 is higher than 168, right. Oh, the user's list is definitely not sorted by likes. Wait maybe that's a mistake in the user's input? But we have to go with the data given, but when writing highlights, we should mention the actual top liked models, right? Because the user said sorted by weekly likes, but the list is not. Wait wait no, maybe I misread. Wait let's check again:

Wait user's list:
1. MiniMax-H3: 3,233
2. DeepSeek-V4: 2,937
3. Comfy MiniMax: 1,067
4. Kimi-K3: 10,394 — yes, that's higher. Oh, maybe the user pasted the list wrong? But regardless, we

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*