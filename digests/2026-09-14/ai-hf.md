# Hugging Face 热门模型日报 2026-09-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-13 22:15 UTC

---

We need to produce a structured report: Daily overview, popular models categorized, ecosystem signals, worth exploring. Must include all details as per list. Provide links. Must be Chinese. Ensure we include models from the list across categories.

We need to decide categories: language models (LLM, dialogue, instruction fine-tuned). Multimodal & generation (image, video, audio, text-to-X). Specialized models (code, math, medical, embeddings). Fine-tuning & quantization (community fine-tune, GGUF, AWQ).

We need to extract from list.

List items with tasks:

1 deepseek-ai/DeepSeek-V4.1-Flash: image-text-to-text (multimodal). Not language only.

2 openbmb/MiniCPM5-2B: text-generation (language).

3 Edge0/Edge0-35B-A3B-preview: text-generation (language).

4 nex-agi/Nex-N2.5-mini: text-generation (language).

5 Qwen/Qwen3.8-27B: image-text-to-text (multimodal).

6 XHToken/Spark-X2.5-4B: text-generation (language).

7 nex-agi/Nex-N2.5-Pro: text-generation (language).

8 ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: image-text-to-text (multimodal) also GGUF quant.

9 m-a-p/YuE2-3B: text-to-audio (multimodal/audio).

10 Lightricks/LTX-2.5: image-to-video (multimodal).

11 unsloth/Qwen3.8-27B-GGUF: N/A (likely quantized base) (quantization).

12 DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF: image-text-to-text (multimodal) quantized.

13 WarmBloodAban/Minimax-h3_Singularity: image-to-video (multimodal).

14 google/timesfm-3.0-pytorch: time-series-forecasting (specialized).

15 dealignai/GLM-5.3-CYBERSECURITY-FP8: text-generation (language) specialized cybersecurity.

16 sentence-transformers/all-MiniLM-L6-v2: sentence-similarity (embedding) (specialized).

17 MiniMaxAI/MiniMax-H3: image-text-to-video (multimodal).

18 openbmb/MiniCPM5-2B-GGUF: text-generation (language) quantized.

19 openai-community/gpt2: text-generation (language).

20 Qwen/Qwen3.8-Flash-Next: image-text-to-text (multimodal).

21 tencent/AuK: text-to-speech (multimodal/audio).

22 google-bert/bert-base-uncased: fill-mask (language model base).

23 zai-org/GLM-5.3-Flash: image-text-to-text (multimodal).

24 facebook/mms-300m: N/A (audio? maybe speech). Not needed.

25 distilbert/distilbert-base-uncased: fill-mask (language).

26 openai/clip-vit-base-patch32: zero-shot-image-classification (multimodal? vision).

27 Agnes-AI/Agnes-3.0-Flash: image-text-to-text (multimodal).

28 Qwen/Qwen-Drive-1.0-4B: image-text-to-text (multimodal) autonomous driving.

29 TokenRhythm/NeoHorse-1-4B: text-generation (language).

30 Alissonerdx/Minimax-H3-ComfyUI: N/A (likely LoRA for video). quant/fine-tune.

We need to categorize.

Language models: include those with text-generation, fill-mask, etc. Possibly also base models like BERT, Distilbert, GPT2, MiniCPM5, etc.

Multimodal & generation: image-text-to-text, image-to-video, text-to-audio, text-to-video, image-text-to-video, zero-shot image classification, etc.

Specialized models: time-series forecasting, cybersecurity, sentence embeddings, maybe medical? none explicit. Could include sentence-transformers as embedding.

Fine-tuning & quantization: GGUF models, quantized, LoRA, etc. Also community fine-tune like DavidAU, unsloth, ISTA-DASLab, etc. Also MiniCPM5-2B-GGUF, etc.

We need to list each model with name (link), author, likes, downloads, one sentence description.

We need to keep it concise but include all 30? Probably yes, but could be many. The instruction: "热门模型 — 按以下分类整理，每个模型包含：...". Likely we should list all 30 models under categories. That will be long but okay.

We need to ensure we preserve links.

We'll produce sections: 今日速览, 热门模型 (with subheadings for each category), 生态信号, 值得探索.

We'll need to compute brief description.

Let's draft.

First, daily overview: summarize trends: multimodal vision-language models dominating, Qwen family strong, GGUF quantization rising, MiniMax video models gaining, embeddings stable, etc.

Now categories.

We'll create lists.

Let's extract data for each model:

I'll make a table.

1. deepseek-ai/DeepSeek-V4.1-Flash
   - Author: deepseek-ai
   - Likes: 2,192
   - Downloads: 244,457
   - Task: image-text-to-text
   - Description: 多模态视觉语言模型，支持图像理解与文本生成，凭借Flash版本的高效推理在多模态榜单上受关注。

2. openbmb/MiniCPM5-2B
   - Author: openbmb
   - Likes: 1,335
   - Downloads: 150,110
   - Task: text-generation
   - Description: 基于Llama架构的轻量级2B参数语言模型，适合资源受限场景的文本生成，点赞显示社区对小模型的兴趣。

3. Edge0/Edge0-35B-A3B-preview
   - Author: Edge0
   - Likes: 987
   - Downloads: 3,552
   - Task: text-generation
   - Description: 采用MoE稀疏架构的35B参数模型，专注于边缘推理与高效混合专家，预览版吸引了关注。

4. nex-agi/Nex-N2.5-mini
   - Author: nex-agi
   - Likes: 754
   - Downloads: 3,970
   - Task: text-generation
   - Description: 基于Qwen3.5 MoE的轻量版本，兼具多模态能力，适合快速原型与低资源部署。

5. Qwen/Qwen3.8-27B
   - Author: Qwen
   - Likes: 14,961
   - Downloads: 7,768,964
   - Task: image-text-to-text
   - Description: Qwen系列旗舰多模态大模型，27B参数强大的图文理解与生成能力，下载量爆棚显示其生态影响力。

6. XHToken/Spark-X2.5-4B
   - Author: XHToken
   - Likes: 1,152
   - Downloads: 21,336
   - Task: text-generation
   - Description: Spark系列2.5版的4B参数语言模型，侧重于中文自然语言生成，获得点赞表明社区对国产LLM的认可。

7. nex-agi/Nex-N2.5-Pro
   - Author: nex-agi
   - Likes: 623
   - Downloads: 30,289
   - Task: text-generation
   - Description: Nex-N2.5的专业版，提供更强的指令跟随与多模态支持，适合企业级应用。

8. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
   - Author: ISTA-DASLab
   - Likes: 966
   - Downloads: 769,557
   - Task: image-text-to-text (GGUF量化)
   - Description: 采用GSQ-RCO混合精度量化的Qwen3.8-27B GGUF版本，显著降低显存占用同时保持多模态性能。

9. m-a-p/YuE2-3B
   - Author: m-a-p
   - Likes: 397
   - Downloads: 3,707
   - Task: text-to-audio
   - Description: 专注于音乐生成的文本到音频模型，支持符号规划与agentic编辑，展示音频生成的新方向。

10. Lightricks/LTX-2.5
    - Author: Lightricks
    - Likes: 3,731
    - Downloads: 1,548,442
    - Task: image-to-video
    - Description: 基于扩散的图像到视频生成模型，支持文图视频双向转换，点赞高反映视频生成热度。

11. unsloth/Qwen3.8-27B-GGUF
    - Author: unsloth
    - Likes: 4,007
    - Downloads: 11,005,880
    - Task: N/A (GGUF base)
    - Description: Qwen3.8-27B的GGUF格式开放权重，便于在llama.cpp等推理引擎中直接使用，下载量巨大表明量化需求旺盛。

12. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
    - Author: DavidAU
    - Likes: 630
    - Downloads: 750,591
    - Task: image-text-to-text (GGUF fine-tune)
    - Description: 基于Qwen的解锁版微调模型，去除安全限制并加入Turbo加速，适合实验与创意生成。

13. WarmBloodAban/Minimax-h3_Singularity
    - Author: WarmBloodAban
    - Likes: 369
    - Downloads: 123,491
    - Task: image-to-video
    - Description: 基于MiniMax-H3的视频生成模型，专注于高质量图像到视频转换，展示视频模型的社区化趋势。

14. google/timesfm-3.0-pytorch
    - Author: google
    - Likes: 774
    - Downloads: 797,832
    - Task: time-series-forecasting
    - Description: TimesFM系列的3.0版预训练时间序列预测模型，提供PyTorch实现，适用于金融、能源等领域的序列建模。

15. dealignai/GLM-5.3-CYBERSECURITY-FP8
    - Author: dealignai
    - Likes: 429
    - Downloads: 30,310
    - Task: text-generation
    - Description: 针对网络安全领域的GLM MoE模型，采用FP8精度并移除拒绝响应，用于安全事件分析与威胁情报生成。

16. sentence-transformers/all-MiniLM-L6-v2
    - Author: sentence-transformers
    - Likes: 5,927
    - Downloads: 252,928,721
    - Task: sentence-similarity (embedding)
    - Description: 轻量级句子嵌入模型，广泛用于检索、聚类与语义搜索，下载量巨大凸显嵌入模型的基础设施地位。

17. MiniMaxAI/MiniMax-H3
    - Author: MiniMaxAI
    - Likes: 5,237
    - Downloads: 4,819,845
    - Task: image-text-to-video
    - description: MiniMax-H3多模态扩散模型，支持图文到视频的高质量生成，是视频生成领域的明星模型。

18. openbmb/MiniCPM5-2B-GGUF
    - Author: openbmb
    - Likes: 215
    - Downloads: 99,716
    - Task: text-generation (GGUF)
    - Description: MiniCPM5-2B的GGUF量化版本，便于在CPU或低显存设备上运行，体现社区对轻量模型量化的需求。

19. openai-community/gpt2
    - Author: openai-community
    - Likes: 4,030
    - Downloads: 15,158,496
    - Task: text-generation
    - Description: 经典的GPT-2基础模型，尽管年代久远但仍是研究与教育的重要基座，点赞显示其长尾价值。

20. Qwen/Qwen3.8-Flash-Next
    - Author: Qwen
    - Likes: 5,162
    - Downloads: 624,390
    - Task: image-text-to-text
    - Description: Qwen3.8的Flash Next版本，在保持多模态能力的同时提升推理速度，适合实时交互场景。

21. tencent/AuK
    - Author: tencent
    - Likes: 185
    - Downloads: 1,202
    - Task: text-to-speech
    - Description: 零射击语音合成模型，支持声克隆与跨语言合成，展示腾讯在TTS领域的开源探索。

22. google-bert/bert-base-uncased
    - Author: google-bert
    - Likes: 3,300
    - Downloads: 46,513,338
    - Task: fill-mask
    - Description: BERT基础无� guinea版，广泛用于下游自然语言理解任务，是NLP领域的基石模型。

23. zai-org/GLM-5.3-Flash
    - Author: zai-org
    - Likes: 2,302
    - Downloads: 1,576,209
    - Task: image-text-to-text
    - Description: GLM系列的Flash版本，采用次世代架构提升多模态理解与生成效率，点赞反映对国产大模型的关注。

24. facebook/mms-300m
    - Author: facebook
    - Likes: 526
    - Downloads: 12,880
    - Task: N/A (speech pretraining)
    - Description: 大规模多语言语音预训练模型，适用于语音识别与合成研究，尽管下载较低但代表跨模态语音趋势。

25. distilbert/distilbert-base-uncased
    - Author: distilbert
    - Likes: 1,433
    - Downloads: 7,325,282
    - Task: fill-mask
    - Description: DistilBERT是BERT的蒸馏版本，保留大部分性能同时大幅降低计算开销，适合资源受限的部署场景。

26. openai/clip-vit-base-patch32
    - Author: openai
    - Likes: 1,499
    - Downloads: 21,331,361
    - Task: zero-shot-image-classification
    - Description: CLIP模型实现零射击图像分类，连接视觉与语言表征，是多模态研究的基础设施。

27. Agnes-AI/Agnes-3.0-Flash
    - Author: Agnes-AI
    - Likes: 138
    - Downloads: 474
    - Task: image-text-to-text
    - Description: 小型多模态Flash模型，专注于高效图文交互，适合移动端与嵌入式设备。

28. Q

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*