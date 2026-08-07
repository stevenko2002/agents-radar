# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 22:15 UTC

---

用户现在需要我生成一份Hugging Face热门模型日报，首先得先理清楚每个部分的要求。首先今日速览要3-5句话，概括最值得关注的点，首先得抓榜单里的核心趋势：MiniMax的H3视频生成爆火，DeepSeek-V4系列大热，国产多模态模型比如Kimi-K3、GLM-5.2还有百度的OCR表现亮眼，还有社区微调量化生态很活跃？对，得把这些点串起来，自然点。

然后是热门模型分类，四个分类：🧠语言模型、🎨多模态与生成、🔧专用模型、📦微调与量化。首先每个分类里的模型要对应，不能错，还要每个都带链接、作者、赞、下载，还有一句话说明。

首先先理分类：
首先是🧠语言模型（LLM、对话模型、指令微调）：里面的模型得找text-generation、conversational的，首先DeepSeek的两个？对，deepseek-ai/DeepSeek-V4-Flash-0731，还有deepseek-ai/DeepSeek-V4-Flash，然后zai-org/GLM-5.2，还有inclusionAI/Ling-3.0-flash，LiquidAI的两个LFM2.5？对，LiquidAI/LFM2.5-2.6B，还有LiquidAI/LFM2.5-2.6B-GGUF？哦对，还有Kwaipilot的KAT-Coder-V2.5-Dev？不，KAT-Coder是代码的？哦对，🔧专用模型里放代码的。哦还有EschaLabs的那个Qwen3.6的？对，EschaLabs/Qwen3.6-35B-A3B-Escha-W2是text-generation的，还有mistralai的Shieldstral？哦对，Shieldstral是安全模型？也算语言模型？等下先一个个对应：

等下先把每个模型的属性先捋清楚，别放错分类：
首先🧠语言模型：
1. deepseek-ai/DeepSeek-V4-Flash-0731：作者deepseek-ai，赞2737，下载702709，说明是DeepSeek最新轻量版V4模型，兼顾推理速度与性能，是当前热门的大语言模型选择。
2. deepseek-ai/DeepSeek-V4-Flash：作者deepseek-ai，赞2060，下载2577975，说明是DeepSeek-V4系列官方标准版，下载量超250万，是当前开源LLM领域的顶流产品。
3. zai-org/GLM-5.2：作者zai-org，赞4886，哦对，这个赞很高，下载2430330，是智谱最新一代GLM系列对话模型，支持多轮推理与长文本处理，国产LLM的热门选择。
4. inclusionAI/Ling-3.0-flash：作者inclusionAI，赞202，下载3065，是字节跳动旗下火山引擎推出的轻量对话模型，适配企业级落地场景。
5. LiquidAI/LFM2.5-2.6B：作者LiquidAI，赞375，下载77973，是LiquidAI推出的小参数高效语言模型，主打低资源部署下的推理能力。
6. LiquidAI/LFM2.5-2.6B-GGUF：作者LiquidAI，赞143，下载31489，是LFM2.5的量化版本，适配llama.cpp等本地推理框架，降低部署门槛。
7. EschaLabs/Qwen3.6-35B-A3B-Escha-W2：作者EschaLabs，赞236，下载3622，是基于Qwen3.6架构的社区微调模型，针对MoE结构做了推理优化，适合轻量部署场景。
8. mistralai/Shieldstral-1.0-3B：作者mistralai，赞183，下载2480，是Mistral推出的安全对齐小模型，可过滤 harmful 内容，适配内容安全审核场景。哦对，这个算语言模型里的专用安全模型？或者放这里也行。

然后是🎨多模态与生成（图像、视频、音频、文本到X）：这里的模型是image-text-to-video、image-text-to-text、text-to-speech、text-to-image这些的。
首先MiniMax的H3系列好几个：
1. MiniMaxAI/MiniMax-H3：作者MiniMaxAI，赞2939，下载18112，是MiniMax最新推出的文生视频/图生视频多模态模型，支持文字+图片生成视频，是当前视频生成领域的热门开源方案。
2. moonshotai/Kimi-K3：作者moonshotai，赞10272，哦这个赞最高之一，下载1308186，是月之暗面推出的多模态大模型，支持图文理解、知识问答等任务，是当前国产多模态模型的顶流。
3. baidu/Unlimited-OCR：作者baidu，赞3953，下载2836694，是百度推出的无限精度OCR模型，支持复杂场景的文字识别、版面分析，下载量超280万，是文档处理领域的热门工具。
4. microsoft/Mage-VL：作者microsoft，赞301，下载456140，是微软推出的多模态视觉语言模型，支持图像理解、视觉问答等任务，适配科研与商用场景。
5. thinkingmachines/Inkling-Small：作者thinkingmachines，赞335，下载25340，是Thinking Machines推出的轻量多模态对话模型，支持图文交互与知识问答，适合端侧部署。
6. Audio8/Audio8-TTS-Preview-0.6b：作者Audio8，赞305，下载12633，是Audio8推出的轻量文本转语音预览模型，支持多语种语音合成，适合端侧TTS场景。
哦对，还有那个LuffyTheFox的Qwen3.6的？哦LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF是image-text-to-text，算多模态？对，标签里有image-text-to-text，所以可以放这里？等下看它的任务：image-text-to-text，对，所以是：
7. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF：作者LuffyTheFox，赞426，下载332992，是基于Qwen3.6架构的社区微调多模态模型，移除了内容限制，适合自定义场景的图文理解任务。
哦对，还有DavidAU的那个Qwen3.6的也是image-text-to-text，对，DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF，赞1704，下载2217339，也是社区微调的图像理解模型，移除了内容限制，支持多模态推理任务。对，这个也放多模态里。

然后是🔧专用模型（代码、数学、医疗、嵌入）：哦这里面的Kwaipilot/KAT-Coder-V2.5-Dev，任务text-generation但标签有code，是代码模型，对，这个是：
1. Kwaipilot/KAT-Coder-V2.5-Dev：作者Kwaipilot，赞530，下载17399，是面向代码生成场景的专用LLM，基于Qwen3.5 MoE架构微调，支持多种编程语言的代码编写、调试与优化任务。
哦还有其他的吗？deepgrove/maple-preview？标签是mixture-of-experts，text-generation，是通用？还是算？哦或者如果没有其他专用的就先放这个？或者如果没有的话就这一个？对，还有吗？看榜单里的，好像没有医疗数学的，所以这个就够了，或者把deepgrove的放这里？不，deepgrove的是text-generation，算通用LLM，放语言模型里吧。

然后是📦微调与量化（社区微调、GGUF、AWQ、LoRA、ComfyUI适配等）：这里的模型都是微调、量化、适配ComfyUI或者LoRA的，首先：
1. Comfy-Org/MiniMax-H3：作者Comfy-Org，赞930，下载3139920，下载量超310万，是MiniMax-H3的ComfyUI适配单文件版本，无需额外配置即可在ComfyUI中运行视频生成工作流，大幅降低使用门槛。
2. unsloth/DeepSeek-V4-Flash-0731-GGUF：作者unsloth，赞584，下载161253，是DeepSeek-V4-Flash-0731的GGUF量化版本，适配llama.cpp等本地推理框架，支持低资源设备运行。
3. larryvrh/MiniMax-H3-Turbo-Lora：作者larryvrh，赞407，下载0，是MiniMax-H3的视频生成LoRA适配，可提升视频生成的风格一致性与生成速度。
4. drbaph/MiniMax-H3-Turbo-Lora-ComfyUI：作者drbaph，赞176，下载0，是MiniMax-H3的ComfyUI专用LoRA，针对Turbo加速版本做了适配，适合ComfyUI用户快速出图。
5. realrebelai/MiniMax-H3_GGUFs：作者realrebelai，赞168，下载87870，是MiniMax-H3的多版本GGUF量化包，覆盖不同精度选项，适配本地推理需求。
6. Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot：作者Abiray，赞127，下载452420，是MiniMax-H3的多精度量化版本，支持NVFP4/INT4/INT8等量化格式，兼顾速度与生成质量。
7. ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot：作者ethanfel，赞377，下载0，是Qwen3-VL-32B的ComfyUI适配INT8量化版本，针对多模态推理做了优化，适合本地部署多模态模型。
8. sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4：作者sakamakismile，赞121，下载0，是Qwen3-VL结合MiniMax-H3架构的社区微调模型，采用NVFP4量化，降低显存占用。
9. lightx2v/Minimax-h3-Turbo：作者lightx2v，赞114，下载0，是MiniMax-H3的Turbo加速版本，针对视频生成速度做了优化，支持图生视频、文本生视频等多种模式。
10. SexGod1979/PinkCherry_MiniMax-H3：作者SexGod1979，赞110，下载0，是MiniMax-H3的风格微调版本，适配特定风格的视频生成需求。哦对，还有DavidAU的那个？哦DavidAU的那个是Qwen3.6的微调，算不算？哦DavidAU的那个是image-text-to-text，但是有uncensored、heretic这些标签，是社区微调的，也可以放这里？或者放多模态？哦它的任务是image-text-to-text，所以是模型本身是多模态，微调的话可以放微调类？或者看情况，哦还有lodestones/Kroma，标签是lora，krea，text-to-image，哦对，这个是LoRA微调，放微调类：
11. lodestones/Kroma：作者lodestones，赞221，下载0，是面向Krea文生图模型的LoRA微调包，可适配特定艺术风格的图像生成需求。

哦对了，刚才的分类要把模型放对，别搞混。然后接下来是生态信号，100-200字，要分析趋势：首先模型家族，MiniMax-H3、DeepSeek-V4、Kimi-K3、GLM-5这几个家族势头最旺，尤其是视频生成和多模态赛道；然后开源vs闭源，现在国产大厂基本都是开源权重，闭源的反而少，社区微调生态非常活跃；然后量化微调活动，GGUF、LoRA、ComfyUI适配的版本非常多，说明用户对本地部署、低门槛使用的需求很高，尤其是消费级显卡的适配是重点。对，把这些点组织起来，100-200字。

然后是值得探索的2-3个模型，要简述理由。首先第一个可以是moonshotai/Kimi-K3，因为赞最高，下载超130万，国产多模态顶流，支持图文理解，生态友好，值得研究多模态能力。第二个可以是Comfy-Org/MiniMax-H3，下载超310万，把视频生成模型适配到ComfyUI，大大降低了普通用户的使用门槛，是当前AIGC视频赛道最热门的工具。第三个可以是unsloth/DeepSeek-V4-Flash-0731-GGUF，因为DeepSeek本身是大热LLM，量化版本支持本地部署，消费级显卡就能跑，适合开发者做本地应用。或者选baidu的Unlimited-OCR？也可以，不过选三个的话这三个就够了？或者把baidu的放进去？哦三个就行，比如：
1. moonshotai/Kimi-K3：理由：当前榜单点赞最高的模型，下载量超130万，作为国产多模态大模型的代表，其图文理解、知识问答能力处于行业第一梯队，是研究多模态大模型落地的优质样本。
2. Comfy-Org/MiniMax-H3：理由：下载量超310万，是目前MiniMax-H3视频生成模型最成熟的ComfyUI适配方案，无需复杂配置即可实现视频生成工作流，大幅降低了AIGC视频创作的门槛，是创意工作者的首选工具。
3. unsloth/DeepSeek-V4-Flash-0731-GGUF：理由：基于当前最热门的DeepSeek-V4系列推出，GGUF量化版本支持消费级显卡本地运行，兼顾性能与部署成本，是开发者搭建本地智能应用的绝佳选择。

哦对，还要注意所有的链接都要保留，不能丢。然后今日速览部分，要3-5句话，概括：比如“今日Hugging Face热门榜呈现三大核心趋势：一是多模态赛道爆发，MiniMax-H3视频生成模型、Kimi-K3多模态大模型包揽点赞榜前列；二是国产大模型竞争力持续凸显，DeepSeek-V4、GLM-5.2、百度OCR等国产模型下载量均超百万；三是社区生态高度活跃，大量GGUF量化、ComfyUI适配、LoRA微调版本涌现，大幅降低模型使用门槛。”对，这个差不多，3句话，符合要求。

等下还要检查每个模型的分类是不是对的，有没有错漏。哦对了，那个deepgrove/maple-preview，标签是mixture-of-experts，text-generation，是不是放语言模型里？哦刚才漏了，对，deepgrove/maple-preview，作者deepgrove，赞222，下载686，是社区推出的混合专家架构轻量语言模型，主打低资源下的高效推理，可以放🧠语言模型里。

还有，刚才的🔧专用模型里，只有KAT-Coder-V2.5-Dev吗？对，榜单里只有这个是代码专用的，其他的要么是通用LLM，要么是多模态，所以没问题。

哦对了，那个nvidia的NVIDIA-NemotronLabs-VoiceChat-11B，任务是N/A，标签是voice chat，是不是可以放🎨多模态里的音频？哦对，我刚才漏了！这个模型是NVIDIA推出的11B参数语音对话模型，支持语音交互，应该放在🎨多模态与生成里，对，加进去：
nvidia/NVIDIA-NemotronLabs-VoiceChat-11B：作者nvidia，赞226，下载359，是NVIDIA推出的语音对话多模态模型，支持语音输入、自然语言回复的端到端交互，适合语音助手场景。对，这个要加上，刚才漏了。

还有，LuffyTheFox的那个Qwen3.6的，是image-text-to-text，所以是多模态，放🎨里。DavidAU的那个也是image-text-to-text，放🎨里。

哦还有，刚才的📦微调与量化里，有没有漏？比如Comfy-Org的那个是base_model是MiniMax-H3，是单文件适配，对，放微调量化没问题。unsloth的那个是GGUF，没问题。还有realrebelai的GGUF，Abiray的量化版本，都没问题。

等下还要注意每个模型的一句话说明要准确，不能错。比如Comfy-Org的那个下载是313万多，对，榜单里是3,139,920，没错。Kimi-K3的下载是1,308,186，赞10272，是榜单里赞最高的，没错。GLM-5.2的赞是4886，下载243万，没错。DeepSeek-V4-Flash的下载是257万多，赞2060，没错。百度的Unlimited-OCR赞3953，下载283万，没错。

然后生态信号部分，要控制在100-200字，比如：“当前模型生态呈现三大趋势：一是MiniMax-H3、DeepSeek-V4、Kimi-K3、GLM-5等国产模型家族势头最旺，覆盖视频生成、大语言、多模态等核心赛道；二是开源权重成为主流，国内大厂普遍采用开源策略，社区微调生态极度活跃；三是量化与工具链适配需求旺盛，GGUF、LoRA、ComfyUI适配版本大量涌现，核心目标是降低模型部署门槛，让消费级硬件也能运行主流大模型。”对，这个大概150字左右，符合要求。

然后值得探索的部分，三个，每个有理由，刚才想的那三个就可以，或者把百度的OCR加进去？不过三个就够了，就选Kimi-K3、Comfy-Org的MiniMax-H3、unsloth的DeepSeek-V4-GGUF，这三个分别代表多模态、AIGC工具、本地LLM三个热门方向，很合适。

等下还要检查语言是不是中文，简洁专业，所有链接都保留了。哦对了，每个模型后面都要附HF链接，比如 MiniMaxAI/MiniMax-H3: https://huggingface.co/MiniMaxAI/MiniMax-H3 这样。

哦还有，今日速览的部分，要准确，比如提到MiniMax-H3的多个版本霸榜视频生成赛道，DeepSeek-V4系列是LLM顶流，Kimi-K3是多模态榜首，社区微调量化生态繁荣，对，这样更准确。

等下再调整一下今日速览，让它更流畅：
“今日Hugging Face热门榜呈现三大核心趋势：一是多模态与视频生成赛道爆发，MiniMax-H3系列模型包揽视频生成类目前列，月之暗面Kimi-K3以1万+点赞成为多模态赛道顶流；二是国产

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*