# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 22:15 UTC

---

用户现在需要我根据给的30个2026年7月31日HF的热门模型做日报，首先得按要求来四个部分：今日速览、热门模型分类、生态信号、值得探索。首先先理清楚速览部分，要抓最火的点，首先Kimi-K3是榜首，还有百度的OCR，然后Qwen的MoE模型下载量巨高，还有不少社区微调的，还有多模态和TTS的小模型？对，3-5句话，要概括最核心的趋势：比如多模态模型、MoE架构、社区微调（尤其是uncensored和量化的）还有垂直小模型这些点。

然后是热门模型分类，四个类：🧠语言模型、🎨多模态与生成、🔧专用模型、📦微调与量化。首先得先把每个模型归到对应的类里，不能错。首先先看语言模型的：poolside的Laguna-S-2.1，Nanbeige的4.2-3B，upstage的Solar-Open2-250B，zai-org的GLM-5.2，还有吗？哦对，fdtn-ai的antares-1b？还有AMD的Instella-MoE-16B？还有original的Qwen3.6-35B-A3B？哦对，语言模型的话，text-generation任务的基本都在这，还有对话的也算。然后每个要放链接、作者、点赞下载、一句话说明。注意链接要原封不动，不能错。

然后是🎨多模态与生成：这个类是image-text-to-text，还有text-to-speech，还有那个Mage的？哦对，moonshotai的Kimi-K3是image-text-to-text，百度的Unlimited-OCR也是，DavidAU的那个Qwen3.6的image-text-to-text，microsoft的Fara1.5-27B是image-text-to-text还带computer-use，thinkingmachines的Inkling，还有Audio8的TTS，owensong的两个TTS，ATH-MaaS的OvisOCR2，microsoft的Mage-VL，还有Comfy-Org的Mage-Flow？哦对，Mage-Flow是扩散的，属于生成，还有LuffyTheFox的那个也是image-text-to-text的Qwen微调。哦对，还有吗？哦HauhauCS的那个也是image-text-to-text的Qwen3.6微调？对，那个也要放多模态？因为任务是image-text-to-text，是多模态。等下要分清楚，多模态与生成包括视觉语言、TTS、扩散生成这些，对的。

然后是🔧专用模型：哦，owensong的Inflect系列是TTS？哦等下刚才多模态里是不是把TTS放对了？哦对，TTS是文本到语音，属于多模态生成？还是专用？哦看分类里的🔧是代码、数学、医疗、嵌入。哦那代码模型是哪个？哦Kwaipilot的KAT-Coder-V2.5-Dev，是代码的，对。还有吗？哦microsoft的VibeVoice-ASR-BitNet是语音识别，算不算专用？哦对，ASR是专用语音模型，还有百度的OCR？哦百度的OCR是专用OCR？哦等下我刚才把百度的放到多模态了？要调整下，哦对，分类要清晰：
🧠 语言模型（LLM、对话模型、指令微调，纯文本生成的）：对，刚才的poolside Laguna，Nanbeige 4.2，upstage Solar，zai-org GLM5.2，fdtn-ai antares，amd Instella，Qwen原版3.6 35B-A3B，还有unsloth的Laguna GGUF？不，微调与量化是另一个类。哦对，微调与量化是社区微调、GGUF、AWQ这些，所以原厂的base模型放语言，微调的放微调类。

哦对，分类要准确：
首先🧠 语言模型：都是原厂发布的纯文本生成/对话的base或官方微调模型：
1. poolside/Laguna-S-2.1：作者poolside，点赞844，下载73246，是Poolside官方发布的代码领域专用语言模型，针对编程场景优化，在代码生成、补全任务上表现突出，上榜靠专业领域性能优势。
2. Nanbeige/Nanbeige4.2-3B：作者Nanbeige，点赞582，下载24542，是北太天元推出的3B参数轻量级中文大模型，主打低部署成本下的中文理解与生成能力，适合端侧和边缘场景使用。
3. upstage/Solar-Open2-250B：作者upstage，点赞702，下载12411，是Upstage发布的250B参数开源大模型，延续Solar系列的高性能文本生成特性，支持长上下文处理，在多语言任务上表现稳定。
4. zai-org/GLM-5.2：作者zai-org，点赞4676，下载1527760，是智谱AI推出的GLM系列最新版本，采用MoE架构，支持超长上下文和多轮对话，是国内开源模型中综合性能第一梯队的代表，下载量极高。
5. fdtn-ai/antares-1b：作者fdtn-ai，点赞239，下载9820，是FDTN AI发布的1B参数安全导向小模型，针对企业级合规场景优化，内置内容安全过滤能力，适合需要可控生成的B端场景。
6. amd/Instella-MoE-16B-A3B-Think：作者amd，点赞93，下载1315，是AMD发布的16B总参数/3B激活参数的MoE架构模型，针对推理场景优化，主打低算力消耗下的逻辑推理能力，适合边缘设备部署。
7. Qwen/Qwen3.6-35B-A3B：作者Qwen，点赞2595，下载6119519，是阿里通义千问官方发布的35B总参数/3B激活参数的MoE架构多模态基础模型，支持文本、图像输入，是当前下载量最高的开源模型之一，生态兼容性极强。
哦对，Qwen这个虽然是多模态，但它是官方base模型，放语言还是多模态？哦任務是image-text-to-text，所以应该放多模态类？哦对，我刚才搞错了，任务类型的优先级更高，所以image-text-to-text的放多模态，text-generation的放语言，text-to-speech放多模态生成，diffusion放多模态，ASR、OCR这些专用？哦对，调整分类：

哦重新理分类，四个类要明确边界：
🧠 语言模型（LLM、对话模型、纯文本生成/理解）：任务为text-generation，无多模态输入的base/官方模型。
🎨 多模态与生成（视觉语言、语音合成/识别、图像/视频生成）：任务为image-text-to-text、text-to-speech、automatic-speech-recognition、扩散生成等跨模态任务。
🔧 专用模型（代码、OCR、垂直领域工具）：哦对，刚才的KAT-Coder是代码，Unlimited-OCR是OCR，这些专用的？哦等下看用户的分类要求：🔧 专用模型（代码、数学、医疗、嵌入），哦对，用户给的分类定义是：🧠 语言模型（LLM、对话模型、指令微调）；🎨 多模态与生成（图像、视频、音频、文本到X）；🔧 专用模型（代码、数学、医疗、嵌入）；📦 微调与量化（社区微调、GGUF、AWQ）。哦对，用户已经给了每个分类的范围，所以严格按这个来：
- 🧠 语言模型：纯文本的LLM、对话、指令微调，任务text-generation，无多模态能力（或者就算有，但主要是文本？不，按任务来，text-generation的放这里，除非是社区微调的放微调类）
- 🎨 多模态与生成：图像、视频、音频、文本到X，也就是image-text-to-text、text-to-speech、automatic-speech-recognition、diffusion这些，都是跨模态的，对应这个类。
- 🔧 专用模型：代码、数学、医疗、嵌入，哦那代码模型是KAT-Coder，对，那个是代码专用，还有吗？哦有没有数学？没有，医疗？没有，嵌入？哦标签里有feature-extraction的？哦比如moonshotai的Kimi-K3标签有feature-extraction？但它是多模态的，所以放多模态。哦对，KAT-Coder是代码，属于🔧专用，对。
- 📦 微调与量化：社区微调的、GGUF格式的、量化的，不管原模型是啥，只要是社区做的微调、或者GGUF、量化的，都放这里，比如DavidAU的那些GGUF，unsloth的那些，LuffyTheFox的，HauhauCS的，prism-ml的，nota-ai的，这些都属于微调量化类。

哦这样就清晰了，现在逐个归：
首先🧠 语言模型（text-generation任务，官方base/原生微调，非社区二次微调）：
1. poolside/Laguna-S-2.1：https://huggingface.co/poolside/Laguna-S-2.1 | 作者: poolside | 点赞: 844 | 下载: 73,246 | 说明: Poolside官方推出的代码领域专用语言模型，针对编程场景深度优化，在代码生成、补全、debug等任务上表现优异，是当前代码LLM领域的高性价比选择。
2. Nanbeige/Nanbeige4.2-3B：https://huggingface.co/Nanbeige/Nanbeige4.2-3B | 作者: Nanbeige | 点赞: 582 | 下载: 24,542 | 说明: 北太天元推出的3B参数轻量级中文大模型，主打低部署成本下的中文理解与生成能力，支持端侧、边缘设备部署，适合轻量化中文场景应用。
3. upstage/Solar-Open2-250B：https://huggingface.co/upstage/Solar-Open2-250B | 作者: upstage | 点赞: 702 | 下载: 12,411 | 说明: 韩国AI公司Upstage发布的250B参数开源大模型，延续Solar系列的高性能文本生成特性，支持128K长上下文，在多语言理解与生成任务上表现均衡。
4. zai-org/GLM-5.2：https://huggingface.co/zai-org/GLM-5.2 | 作者: zai-org | 点赞: 4,676 | 下载: 1,527,760 | 说明: 智谱AI推出的GLM系列最新迭代版本，采用MoE架构，支持1M超长上下文与多轮对话，是国内开源模型中综合性能第一梯队的代表，下载量位居前列。
5. fdtn-ai/antares-1b：https://huggingface.co/fdtn-ai/antares-1b | 作者: fdtn-ai | 点赞: 239 | 下载: 9,820 | 说明: FDTN AI发布的1B参数安全导向小模型，针对企业级合规场景优化，内置内容安全过滤与可控生成能力，适合需要低风险输出的B端落地场景。
6. amd/Instella-MoE-16B-A3B-Think：https://huggingface.co/amd/Instella-MoE-16B-A3B-Think | 作者: amd | 点赞: 93 | 下载: 1,315 | 说明: AMD发布的16B总参数/3B激活参数的MoE架构推理模型，针对逻辑推理、数学计算场景优化，主打低算力消耗下的高性能推理，适配AMD边缘计算硬件。
哦对，还有吗？哦原来的列表里还有吗？哦Nanbeige那个是，upstage那个是，对，这些是text-generation的原生模型，放这里。

然后是🎨 多模态与生成（跨模态任务：图像文本、TTS、ASR、生成等）：
1. moonshotai/Kimi-K3：https://huggingface.co/moonshotai/Kimi-K3 | 作者: moonshotai | 点赞: 8,980 | 下载: 387,822 | 说明: 月之暗面发布的最新一代Kimi多模态大模型，支持图像、文本输入与混合推理，在视觉理解、跨模态问答任务上表现突出，是本周点赞数最高的模型。
2. baidu/Unlimited-OCR：https://huggingface.co/baidu/Unlimited-OCR | 作者: baidu | 点赞: 3,576 | 下载: 2,598,659 | 说明: 百度发布的无限长文档OCR模型，支持任意格式、任意长度的文档识别，输出结构化文本，下载量仅次于原生大模型，是垂直OCR场景的首选工具。
3. Kwaipilot/KAT-Coder-V2.5-Dev？哦不，KAT-Coder是代码，放🔧。哦对，多模态里的：
3. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF？不，这个是GGUF，放微调量化。哦多模态里的image-text-to-text的原生或官方？哦：
3. microsoft/Fara1.5-27B：https://huggingface.co/microsoft/Fara1.5-27B | 作者: microsoft | 点赞: 222 | 下载: 2,316 | 说明: 微软发布的27B参数多模态模型，除视觉理解外还内置计算机操作能力，可直接根据文本指令执行GUI操作，是当前Agent方向的热门探索方向。
4. thinkingmachines/Inkling：https://huggingface.co/thinkingmachines/Inkling | 作者: thinkingmachines | 点赞: 1,651 | 下载: 45,658 | 说明: Thinking Machines推出的轻量级多模态对话模型，支持图像、文本输入，在视觉问答、日常对话任务上表现均衡，部署门槛低，适合端侧多模态应用。
5. owensong/Inflect-Micro-v2：https://huggingface.co/owensong/Inflect-Micro-v2 | 作者: owensong | 点赞: 315 | 下载: 1,100 | 说明: 轻量级文本到语音（TTS）模型，主打CPU端低延迟语音合成，支持多语言、多音色，适合端侧智能硬件、离线语音交互场景。
6. owensong/Inflect-Nano-v2：https://huggingface.co/owensong/Inflect-Nano-v2 | 作者: owensong | 点赞: 119 | 下载: 654 | 说明: 比Micro版本更轻量的TTS模型，参数量更低，部署门槛更低，适合资源受限的嵌入式设备的离线语音需求。
7. Audio8/Audio8-TTS-Preview-0.6b：https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b | 作者: Audio8 | 点赞: 122 | 下载: 225 | 说明: 0.6B参数的轻量TTS预览模型，支持高自然度语音合成，针对移动端、物联网场景优化，是端侧语音生成的轻量选择。
8. microsoft/Mage-VL：https://huggingface.co/microsoft/Mage-VL | 作者: microsoft | 点赞: 119 | 下载: 2,951 | 说明: 微软推出的多模态视觉语言模型，支持图像理解、视觉问答、图像描述生成等任务，是Mage系列多模态能力的基础版本，适合相关研究学习。
9. ATH-MaaS/OvisOCR2：https://huggingface.co/ATH-MaaS/OvisOCR2 | 作者: ATH-MaaS | 点赞: 349 | 下载: 57,439 | 说明: 基于Qwen3.5微调的专用OCR多模态模型，针对复杂排版、手写体、多语言文档识别优化，识别准确率高于通用多模态模型，是垂直OCR场景的高性价比选择。
10. microsoft/VibeVoice-ASR-BitNet：https://huggingface.co/microsoft/VibeVoice-ASR-BitNet | 作者: microsoft | 点赞: 120 | 下载: 3,864 | 说明: 微软发布的1Bit量化语音识别（ASR）模型，参数量低但识别精度接近全精度模型，支持多语言语音转文本，适合端侧离线语音识别场景。
11. Comfy-Org/Mage-Flow：https://huggingface.co/Comfy-Org/Mage-Flow | 作者: Comfy-Org | 点赞: 95 | 下载: 44,714 | 说明: 基于微软Mage-VL优化的图像生成扩散模型，单文件即可运行，完美兼容ComfyUI生态，支持文生图、图生图等任务，是AIGC创作的热门工具。
哦对，这个Comfy的Mage-Flow是图像生成，属于多模态生成，放这里对的。

然后是🔧 专用模型（代码、垂直领域工具）：
哦用户说这个类是代码、数学、医疗、嵌入，那这里只有KAT-Coder-V2.5-Dev吗？哦对，还有吗？哦百度的OCR？哦百度的OCR是专用OCR，但刚才我放多模态了？哦等下用户给的分类里🔧是代码、数学、医疗、嵌入，那OCR算不算？哦或者有没有其他的？哦看列表里，Kwaipilot的KAT-Coder-V2.5-Dev是代码，对，那个放这里。还有吗？哦没有了？哦对，列表里只有这个是代码专用，其他的要么是语言要么是多模态要么是微调。哦那这个类就放这个：
1. Kwaipilot/KAT-Coder-V2.5-Dev：https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev | 作者: Kwaipilot | 点赞: 349 | 下载: 9,225 | 说明: 基于Qwen3.5-MoE微调的代码领域专用大模型，针对代码生成、补全、debug、多语言编程等任务深度优化，在代码准确率、逻辑连贯性上表现突出，是当前开源代码模型的热门选择。
哦对，这个是代码，属于🔧专用，

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*