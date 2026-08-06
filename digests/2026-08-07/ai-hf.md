# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-06 22:16 UTC

---

用户现在需要我生成Hugging Face的热门模型日报，首先得先理清楚所有要求的结构：今日速览、热门模型分四个类、生态信号、值得探索，还要中文专业，带链接。
首先先处理今日速览，得抓最突出的点：MiniMax的H3视频生成模型空降榜首，然后Kimi K3和DeepSeek V4这种大厂模型的衍生、量化版还有多模态变体很多，还有百度的OCR下载量超高，另外社区微调、量化（尤其是GGUF、ComfyUI适配）非常活跃？对，3-5句话就行，概括核心趋势：比如本周多模态（尤其是文生视频、多模态对话）和国产大模型生态热度最高，MiniMax-H3系列包揽下载量前二的衍生模型，DeepSeek V4、Kimi K3的社区微调与量化版本持续霸榜，百度Unlimited-OCR凭借超280万下载成为实用型工具类模型顶流，还有ComfyUI生态对前沿模型的适配速度越来越快。对，这个是速览。
然后是热门模型分类，四个类：🧠语言模型、🎨多模态与生成、🔧专用模型、📦微调与量化。每个模型要带链接、作者、点赞下载、一句话说明。
首先先理每个类里的模型：
首先🧠语言模型（LLM、对话、指令微调）：首先看任务为text-generation、conversational的，首先zai-org/GLM-5.2，这个点赞4868，下载239万+，智谱的GLM5.2，MOE架构，对话生成强，所以是语言类的。然后deepseek-ai/DeepSeek-V4-Flash，点赞2041，下载263万+，DeepSeek的轻量版V4，推理速度快，适合部署。还有moonshotai/Kimi-K3，哦对，Kimi K3是图像文本到文本？哦等下用户给的分类里语言模型是LLM、对话、指令微调，不过Kimi K3是多模态？哦对，它的任务是image-text-to-text，所以放多模态？哦对，看任务标签。然后还有inclusionAI/Ling-3.0-flash，183赞，1196下载，百度的灵笔3.0轻量版，对话生成。还有deepgrove/maple-preview，198赞，419下载，MOE架构的文本生成模型，实验性。还有LGAI-EXAONE的K-EXAONE，135赞，458下载，LG的750B MOE大模型。还有Kwaipilot的KAT-Coder-V2.5-Dev，哦这个是代码的？哦对，代码的话放🔧专用模型？哦对，分类里的🔧是代码、数学、医疗、嵌入，所以KAT-Coder是代码专用，放那边。然后EschaLabs的Qwen3.6-35B的文本生成版？哦对，那个任务是text-generation，放语言模型？等下先一个个捋：
先分🧠语言模型（LLM、对话、指令微调）：
1. zai-org/GLM-5.2 https://huggingface.co/zai-org/GLM-5.2，作者zai-org，赞4868，下载2391730，说明：智谱开源的GLM-5.2大模型，采用MOE架构，支持长上下文对话与多轮交互，是本周国产通用LLM中热度最高的官方版本。
2. deepseek-ai/DeepSeek-V4-Flash https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash，作者deepseek-ai，赞2041，下载2639756，说明：DeepSeek官方推出的V4系列轻量推理版本，在保持高性能的同时大幅降低部署成本，是目前下载量最高的国产开源LLM之一。
3. moonshotai/Kimi-K3？哦不，Kimi K3任务是image-text-to-text，是多模态，放🎨那边。哦对，还有inclusionAI/Ling-3.0-flash https://huggingface.co/inclusionAI/Ling-3.0-flash，作者inclusionAI，赞183，下载1196，说明：百度灵笔3.0系列的轻量对话版本，支持多轮文本交互，适合轻量级对话场景部署。还有deepgrove/maple-preview https://huggingface.co/deepgrove/maple-preview，作者deepgrove，赞198，下载419，说明：实验性混合专家（MOE）架构文本生成模型，主打高推理效率，目前处于预览阶段。还有LGAI-EXAONE/K-EXAONE-2.0-750B-A37B https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B，作者LGAI-EXAONE，赞135，下载458，说明：LG AI开源的750B参数MOE大模型，仅激活37B参数即可运行，主打高性价比的企业级文本生成能力。哦对，还有吗？比如那个Kwaipilot的KAT-Coder是代码，放专用，EschaLabs的那个Qwen3.6的文本生成版？哦EschaLabs的Qwen3.6-35B-A3B-Escha-W2任务是text-generation，对，放语言模型：https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2，作者EschaLabs，赞221，下载3394，说明：基于Qwen3.6架构微调的通用文本生成模型，针对对话场景做了优化，是Qwen生态的社区衍生热门版本。
然后是🎨多模态与生成（图像、视频、音频、文本到X）：首先看任务为image-text-to-video、text-to-video、image-text-to-text、text-to-image、text-to-speech的。
首先MiniMaxAI/MiniMax-H3 https://huggingface.co/MiniMaxAI/MiniMax-H3，作者MiniMaxAI，赞2728，下载12102，说明：MiniMax最新推出的文生视频/图生视频统一模型，支持高质量视频生成，是本周生成式AI领域热度最高的新发布模型。
然后Comfy-Org/MiniMax-H3 https://huggingface.co/Comfy-Org/MiniMax-H3，作者Comfy-Org，赞838，下载2295377，说明：专为ComfyUI生态适配的MiniMax-H3单文件版本，大幅降低用户本地部署门槛，是本周下载量最高的模型之一。
然后baidu/Unlimited-OCR https://huggingface.co/baidu/Unlimited-OCR，作者baidu，赞3929，下载2791862，说明：百度开源的无限分辨率OCR模型，支持复杂场景下的文字识别与提取，是本周实用工具类多模态模型下载量冠军。
然后moonshotai/Kimi-K3 https://huggingface.co/moonshotai/Kimi-K3，作者moonshotai，赞10193，哦！哦对！Kimi K3的赞是10193，是整个榜单点赞最高的！我刚才漏了，它是image-text-to-text，多模态对话模型，所以放多模态类：说明：月之暗面开源的Kimi K3多模态大模型，支持图像、文本混合输入的长上下文对话，是本周点赞数最高的模型，下载量突破125万。
然后thinkingmachines/Inkling-Small https://huggingface.co/thinkingmachines/Inkling-Small，作者thinkingmachines，赞320，下载22223，说明：Thinking Machines开源的小型多模态对话模型，支持图像+文本输入，适合端侧轻量多模态场景。
然后microsoft/Mage-VL https://huggingface.co/microsoft/Mage-VL，作者microsoft，赞286，下载440176，说明：微软开源的Mage视觉-语言模型，支持图像理解、视觉问答等多模态任务，是本周大厂发布的多模态模型中热度最高的。
然后lodestones/Kroma https://huggingface.co/lodestones/Kroma，作者lodestones，赞205，下载0，说明：基于Krea生态微调的LoRA文生图模型，适配ComfyUI工作流，主打艺术化图像生成效果。
然后Audio8/Audio8-TTS-Preview-0.6b https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b，作者Audio8，赞292，下载12211，说明：Audio8开源的轻量文本转语音（TTS）预览模型，支持多语言语音合成，目前处于测试阶段。
还有吗？比如那个ethanfel的Qwen3-VL的？哦它的任务是image-text-to-text，放多模态：https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot，作者ethanfel，赞333，下载0，说明：基于Qwen3-VL-32B微调的多模态模型，针对ComfyUI做了INT8量化适配，支持图像理解与生成任务。
哦对，还有那个nvidia的VoiceChat？任务N/A，但标签是语音对话？哦nvidia/NVIDIA-NemotronLabs-VoiceChat-11B https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B，作者nvidia，赞169，下载206，说明：英伟达开源的11B参数语音对话模型，支持语音-文本双向交互，适合智能语音助手场景。
对，这些是多模态类的。
然后是🔧专用模型（代码、数学、医疗、嵌入）：首先Kwaipilot/KAT-Coder-V2.5-Dev https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev，作者Kwaipilot，赞516，下载16961，说明：专为代码生成场景微调的大模型，基于Qwen3.5-MOE架构，支持多种编程语言的代码生成与调试，是本周代码类模型热度最高的。
还有吗？比如有没有数学、医疗的？看列表里没有，哦还有那个LiquidAI的LFM2.5？哦LiquidAI的LFM2.5是text-generation，但是是通用？哦不，Liquid的LFM是语言模型，但是看标签是lfm2，哦等下还有吗？哦好像没有其他的专用模型了？哦对，还有吗？哦没有的话就放这个？或者有没有嵌入的？看列表里没有，哦对，KAT-Coder是代码专用，就够了？或者有没有其他的？哦没有了，那这个类就放KAT-Coder就行？等下再扫一遍列表：哦对，还有吗？比如baidu的OCR是工具类？哦已经放多模态了，对，OCR是多模态的。
然后是📦微调与量化（社区微调、GGUF、AWQ、适配框架）：首先看标签有gguf、lora、comfyui、量化的这些。
首先Comfy-Org的MiniMax-H3已经放多模态了？哦不，等下分类里微调与量化是社区微调、GGUF这些，哦刚才的Comfy-Org的是适配，但是它的核心是MiniMax-H3的衍生，哦对，还有unsloth/DeepSeek-V4-Flash-0731-GGUF https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF，作者unsloth，赞541，下载145105，说明：DeepSeek-V4-Flash的GGUF量化版本，支持llama.cpp等框架本地部署，是本周LLM量化版本中热度最高的。
然后DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF，作者DavidAU，赞1646，下载2087189，说明：基于Qwen3.6-27B微调的无审查GGUF量化版本，针对对话场景做了大量优化，是本周下载量最高的社区微调模型之一。
然后LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF，作者LuffyTheFox，赞404，下载309149，说明：基于Qwen3.6-35B-A3B（MOE架构）微调的无审查GGUF版本，主打低资源部署下的高质量对话能力。
然后realrebelai/MiniMax-H3_GGUFs https://huggingface.co/realrebelai/MiniMax-H3_GGUFs，作者realrebelai，赞151，下载65679，说明：MiniMax-H3的官方衍生GGUF量化版本集合，支持不同精度的本地部署，适配ComfyUI生态。
然后larryvrh/MiniMax-H3-Turbo-Lora https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora，作者larryvrh，赞283，下载0，说明：针对MiniMax-H3视频生成模型推出的Turbo加速LoRA适配器，可大幅提升文生视频的生成速度。
然后drbaph/MiniMax-H3-Turbo-Lora-ComfyUI https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI，作者drbaph，赞109，下载0，说明：专为ComfyUI适配的MiniMax-H3 Turbo LoRA，优化了工作流兼容性与生成效果。
然后Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot，作者Abiray，赞107，下载272963，说明：MiniMax-H3的多精度量化版本，支持NVFP4、INT4、INT8等量化方案，大幅降低本地部署显存需求。
然后sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4 https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4，作者sakamakismile，赞107，下载0，说明：融合Qwen3-VL与MiniMax-H3能力的多模态量化模型，针对ComfyUI做了NVFP4量化适配，支持图像到视频的生成。
哦对，还有LiquidAI的两个GGUF版本？哦LiquidAI/LFM2.5-2.6B是官方模型，放语言模型，LiquidAI/LFM2.5-2.6B-GGUF是量化版，放微调量化类：https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF，作者LiquidAI，赞123，下载12790，说明：LFM2.5-2.6B的GGUF量化版本，支持llama.cpp框架在CPU/低显存设备上部署，适合端侧文本生成场景。
还有mistralai的Shieldstral？哦那个是安全模型？哦标签是mistral3，vllm，安全对齐的？哦任务N/A，但是是专用？哦或者放语言模型？哦它的标签是mistral-common，安全模型，哦对，属于专用？或者放语言模型？哦看分类里的🔧是专用，包括安全？哦或者放语言模型也行，不过先看，哦mistralai/Shieldstral-1.0-3B https://huggingface.co/mistralai/Shieldstral-1.0-3B，作者mistralai，赞156，下载1511，说明：Mistral开源的安全对齐3B小模型，用于过滤有害内容、保障对话安全，适合集成到对话系统中做安全网关。
哦对，这个可以放🔧专用模型里，因为是安全专用的。
哦刚才的🔧专用模型现在有：KAT-Coder（代码）、Shieldstral（安全对齐），够了？
等下再核对每个模型的分类有没有错：
🧠语言模型类：
- zai-org/GLM-5.2 ✔️ 文本生成
- deepseek-ai/DeepSeek-V4-Flash ✔️ 文本生成
- inclusionAI/Ling-3.0-flash ✔️ 文本生成/对话
- deepgrove/maple-preview ✔️ 文本生成
- LGAI-EXAONE/K-EXAONE-2.0-750B-A37B ✔️ 文本生成
- EschaLabs/Qwen3.6-35B-A3B-Escha-W2 ✔️ 文本生成
对，这些都是text-generation任务的，没问题。
🎨多模态与生成类：
- MiniMaxAI/MiniMax-H3 ✔️ 文生视频/图生视频
- baidu/Unlimited-OCR ✔️ 图像文本识别（多模态工具）
- moonshotai/Kimi-K3 ✔️ 多模态对话（图+文输入）
- thinkingmachines/Inkling-Small ✔️ 多模态对话
- microsoft/Mage-VL ✔️ 视觉语言模型
- lodestones/Kroma ✔️ 文生图LoRA
- Audio8/Audio8-TTS-Preview-0.6b ✔️ 文本转语音
- ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot ✔️ 多模态模型（图+文，适配ComfyUI）
- nvidia/NVIDIA-NemotronLabs-VoiceChat-11B ✔️ 语音对话（多模态）
对，这些都是多模态或者生成类的，没问题。
🔧专用模型类：
- Kwaipilot/KAT-Coder-V2.5-Dev ✔️ 代码生成专用
- mistralai/Shieldstral-1.0-3B ✔️ 安全对齐专用
对，这两个是专用的，没问题。
📦微调与量化类：
- unsloth/DeepSeek-V4-Flash-0731-GGUF ✔️ GGUF量化
- DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*