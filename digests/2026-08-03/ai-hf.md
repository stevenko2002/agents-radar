# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 22:17 UTC

---

用户现在需要一份Hugging Face热门模型日报，首先得严格按照要求来，先做今日速览，然后是四个分类的热门模型，然后生态信号，最后值得探索的。首先先理清楚所有模型，先分分类。
首先今日速览，要3-5句，先看最火的几个：Kimi-K3是榜首，点赞快万了，然后百度的无限OCR下载量最高，还有DeepSeek-V4的两个版本，还有一堆Qwen3.6的社区微调，还有TTS、ASR的音频模型，还有AMD、微软的大厂模型。对，速览要抓重点：比如国产大厂模型领跑，Kimi-K3登顶周赞榜首，百度无限OCR下载破254万成最受落地的模型，DeepSeek-V4系列双版本进榜，Qwen3.6衍生微调模型热度高涨，同时音频类专用模型、MoE架构量化变体也有不少关注。
然后是分类，首先🧠语言模型（LLM、对话、指令微调）：这里要找纯文本生成的，首先是zai-org的GLM-5.2，点赞4751，下载205万，对，智谱的GLM5.2，MoE架构，对话和文本生成。然后deepseek-ai的DeepSeek-V4-Flash，点赞1955，下载278万，是DeepSeek官方的高效推理版本，适合对话和生成。然后Nanbeige4.2-3B，南方的那个？对，Nanbeige的3B小模型，点赞625，下载3.3万，轻量开源LLM。还有poolside的Laguna-S-2.1，点赞876，下载8万，文本生成模型。还有empero-ai的Qwythos-27B-v1，基于Qwen3.5的27B多模态？哦不，任务虽然是image-text-to-text？哦看任务里是image-text-to-text？哦对，不过算语言相关？或者等下，多模态的放后面。还有upstage的Solar-Open2-250B，韩国Upstage的250B大模型，点赞719，下载1.4万，开源大参数文本生成。哦对，还有吗？哦对，Kwaipilot的KAT-Coder-V2.5-Dev是代码的，放专用模型里。哦对，语言模型里还要注意，不要放多模态的？等下看分类：🧠是LLM、对话、指令微调，所以纯文本生成的先放这里，然后多模态是图像视频音频文本到X的。
然后是🎨多模态与生成：首先榜首的moonshotai的Kimi-K3，点赞9625，下载83万，多模态（图像文本到文本）的，登顶周榜，支持图文混合输入生成。然后百度的Unlimited-OCR，点赞3775，下载254万，OCR专用多模态，能处理各类文档图像识别，下载量最高。然后microsoft的Mage-VL，点赞182，下载27万，微软的多模态视觉语言模型。还有Audio8的Audio8-TTS-Preview-0.6b，TTS的，属于文本到音频，放这里。还有microsoft的Fara1.5-27B，哦对，任务是image-text-to-text，还有computer-use标签，是支持计算机操控的多模态模型。还有microsoft的VibeVoice-ASR-BitNet，是语音识别的，ASR，属于音频相关的多模态？对，还有XYZAILab的两个Aquila mini和pro，任务是text-generation但标签有image-text-to-text，哦看标签里有image-text-to-text，而且是多模态的？哦对，还有HauhauCS的那个Qwen3.6的35B-A3B的，任务是image-text-to-text，还有vision标签，放多模态里。还有LuffyTheFox的那个也是image-text-to-text，放多模态？对，然后DavidAU的那个Qwen3.6-27B的也是image-text-to-text，放多模态？
然后🔧专用模型：代码类的Kwaipilot的KAT-Coder-V2.5-Dev，基于Qwen3.5 MoE，代码生成微调，点赞401，下载1.3万。然后TTS的owensong的Inflect-Micro-v2，轻量端侧TTS，点赞371，下载1825，适合CPU边缘设备。还有微软的VibeVoice-ASR-BitNet，哦刚才想放多模态？不，ASR是专用语音识别，放这里？或者看分类，专用模型是代码、数学、医疗、嵌入，哦还有LiquidAI的LFM2.5-Encoder-350M，是填充掩码的编码器，属于嵌入类？对，那个放专用模型。还有AMD的Instella-MoE-16B-A3B-Think，是基于DeepSeek-V3的推理增强模型，属于专用推理？对，放这里。哦还有lodestones的Kroma，是LoRA，text-to-image的，放生成还是专用？哦text-to-image属于多模态生成，放🎨里。
然后📦微调与量化：这里就是GGUF、量化、社区微调的。首先unsloth的Kimi-K3-GGUF，点赞248，下载8.8万，Kimi-K3的GGUF量化版，适合本地部署。然后unsloth的DeepSeek-V4-Flash-0731-GGUF，点赞334，下载4.8万，DeepSeek的GGUF量化版。然后DavidAU的两个GGUF，一个是Qwen3.6-27B的Fable Fusion，点赞1333，下载137万，另一个是Qwen3.5-9B的Defiant Fable，点赞204，下载29万，都是社区微调的未审查版本GGUF，热度很高。然后LuffyTheFox的Qwen3.6-35B-A3B的Genesis Hermes GGUF，点赞298，下载25万，MoE架构的GGUF微调版。还有HauhauCS的Qwen3.6-35B-A3B的Aggressive GGUF，点赞3238，下载189万，未审查风格化微调GGUF，下载量很高。还有nota-ai的Solar-Open2-250B-Nota-NVFP4，点赞153，下载6.8万，Upstage 250B模型的NVFP4量化版，适合大模型推理部署。还有EschaLabs的Qwen3.6-35B-A3B的Escha-W2，点赞118，下载2550，MoE模型的量化微调版。哦对，还有XYZAILab的两个Aquila，标签里有qwen3_5_moe，还有agentic-search，是不是微调？哦看任务虽然是text-generation，但标签有image-text-to-text，是不是多模态？哦等下，XYZAILab的XYZ-Aquila-mini和pro，任务是text-generation，但标签有image-text-to-text，还有qwen3.5，应该是多模态的？放🎨里？
等下要把每个分类的模型理清楚，不要错分。现在先逐个核对：
首先🧠 语言模型（LLM、对话、指令微调）：
1. zai-org/GLM-5.2：https://huggingface.co/zai-org/GLM-5.2，作者zai-org，点赞4751，下载2,050,533，一句话：智谱开源的高性能MoE架构对话与文本生成模型，支持长文本处理，进榜靠国产大厂模型的技术口碑。
2. deepseek-ai/DeepSeek-V4-Flash：https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash，作者deepseek-ai，点赞1955，下载2,785,810，一句话：DeepSeek官方推出的高性价比高效推理文本生成模型，兼顾性能与推理速度，下载量进榜单前列。
3. upstage/Solar-Open2-250B：https://huggingface.co/upstage/Solar-Open2-250B，作者upstage，点赞719，下载14,863，一句话：韩国Upstage开源的250B参数大规模文本生成模型，具备多语言处理能力，是大参数开源模型的代表。
4. Nanbeige/Nanbeige4.2-3B：https://huggingface.co/Nanbeige/Nanbeige4.2-3B，作者Nanbeige，点赞625，下载33,042，一句话：轻量级3B参数开源中文文本生成模型，适合端侧和低资源场景部署，在轻量模型赛道热度较高。
5. poolside/Laguna-S-2.1：https://huggingface.co/poolside/Laguna-S-2.1，作者poolside，点赞876，下载80,102，一句话：面向通用场景优化的指令微调文本生成模型，在创意写作、对话场景表现突出。
对，这几个是纯文本生成的，属于语言模型，没问题。
然后是🎨 多模态与生成（图像、视频、音频、文本到X）：
1. moonshotai/Kimi-K3：https://huggingface.co/moonshotai/Kimi-K3，作者moonshotai，点赞9625，下载837,202，一句话：月之暗面发布的多模态图文混合理解生成模型，登顶本周点赞榜榜首，支持图文跨模态输入输出，是当前国内多模态模型的标杆产品。
2. baidu/Unlimited-OCR：https://huggingface.co/baidu/Unlimited-OCR，作者baidu，点赞3775，下载2,536,284，一句话：百度开源的无限制OCR识别模型，支持各类复杂文档、手写体、多语言文字识别，是榜单下载量最高的模型，落地应用价值极高。
3. microsoft/Mage-VL：https://huggingface.co/microsoft/Mage-VL，作者microsoft，点赞182，下载272,148，一句话：微软开源的视觉-语言多模态模型，支持图像理解、视觉问答等任务，是海外大厂在多模态赛道的最新布局。
4. microsoft/Fara1.5-27B：https://huggingface.co/microsoft/Fara1.5-27B，作者microsoft，点赞249，下载2,938，一句话：微软基于Qwen3.5优化的多模态模型，新增计算机操控（Computer Use）能力，可执行GUI操作任务，是Agent方向的热门尝试。
5. XYZAILab/XYZ-Aquila-mini：https://huggingface.co/XYZAILab/XYZ-Aquila-mini，作者XYZAILab，点赞365，下载903，一句话：基于Qwen3.5-MoE优化的轻量多模态小模型，支持图像理解与智能体搜索，适合端侧多模态场景。
6. XYZAILab/XYZ-Aquila-pro：https://huggingface.co/XYZAILab/XYZ-Aquila-pro，作者XYZAILab，点赞335，下载1,094，一句话：XYZ-Aquila系列的高性能版本，强化了智能体搜索与多模态推理能力，面向复杂多模态Agent场景。
7. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive：https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive，作者HauhauCS，点赞3,238，下载1,892,654，一句话：基于Qwen3.6-35B-A3B MoE架构微调的风格化多模态模型，去除了内容限制，在创意生成、角色扮演等场景热度极高，下载量进多模态类前二。
8. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF：https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF，作者LuffyTheFox，点赞298，下载259,237，一句话：社区微调的Qwen3.6 MoE多模态未审查版本，针对角色对话、创意写作场景优化，是社区热门衍生模型。
9. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF：https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF，作者DavidAU，点赞1333，下载1,372,285，一句话：基于Qwen3.6-27B微调的风格化多模态模型，优化了叙事生成能力，未审查版本在社区传播度极高。
10. Audio8/Audio8-TTS-Preview-0.6b：https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b，作者Audio8，点赞177，下载4,314，一句话：轻量级文本到语音（TTS）预览模型，支持多语言语音合成，面向端侧语音应用场景。
11. microsoft/VibeVoice-ASR-BitNet：https://huggingface.co/microsoft/VibeVoice-ASR-BitNet，作者microsoft，点赞148，下载8,468，一句话：微软开源的1Bit量化语音识别（ASR）模型，体积小、推理速度快，适合端侧语音转文字场景。
12. owensong/Inflect-Micro-v2：哦对，这个是TTS，刚才漏了，https://huggingface.co/owensong/Inflect-Micro-v2，作者owensong，点赞371，下载1,825，一句话：超轻量端侧文本到语音模型，仅需极低算力即可运行，适合嵌入式、移动端语音合成场景。
哦对，还有lodestones的Kroma，是text-to-image的LoRA，https://huggingface.co/lodestones/Kroma，作者lodestones，点赞123，下载0，一句话：面向ComfyUI生态优化的Krea风格LoRA模型，用于文生图场景，适配主流AI绘画工作流。这个也放多模态里。
然后是🔧 专用模型（代码、数学、医疗、嵌入）：
1. Kwaipilot/KAT-Coder-V2.5-Dev：https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev，作者Kwaipilot，点赞401，下载13,164，一句话：基于Qwen3.5-MoE优化的代码生成专用模型，支持多种编程语言的代码编写、调试任务，是代码大模型赛道的新兴选择。
2. LiquidAI/LFM2.5-Encoder-350M：https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M，作者LiquidAI，点赞88，下载6,957，一句话：轻量级掩码填充专用编码器模型，可用于文本嵌入、特征提取等下游任务，适合低资源场景的NLP基础任务。
3. amd/Instella-MoE-16B-A3B-Think：https://huggingface.co/amd/Instella-MoE-16B-A3B-Think，作者amd，点赞118，下载1,957，一句话：AMD基于DeepSeek-V3架构优化的推理增强MoE模型，针对逻辑推理、数学计算等场景专项优化，是硬件厂商布局AI模型生态的代表。
哦对，还有吗？没有了，其他的要么是LLM要么是多模态要么是微调量化的。
然后是📦 微调与量化（社区微调、GGUF、AWQ、NVFP4等）：
1. unsloth/Kimi-K3-GGUF：https://huggingface.co/unsloth/Kimi-K3-GGUF，作者unsloth，点赞248，下载88,481，一句话：Kimi-K3的官方授权GGUF量化版本，支持本地CPU/GPU部署，降低了多模态大模型的使用门槛。
2. unsloth/DeepSeek-V4-Flash-0731-GGUF：https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF，作者unsloth，点赞334，下载48,707，一句话：DeepSeek-V4-Flash的GGUF量化适配版本，由高效推理工具厂商Unsloth推出，优化了本地部署的显存占用与推理速度。
3. nota-ai/Solar-Open2-250B-Nota-NVFP4：https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4，作者nota-ai，点赞153，下载68,199，一句话：250B参数Solar模型的NVFP4量化版本，大幅降低了大参数模型的推理显存需求，适合企业级大模型部署。
4. EschaLabs/Qwen3.6-35B-A3B-Escha-W2：https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2，作者EschaLabs，点赞118，下载2,550，一句话：基于Qwen3.6-35B-A3B MoE架构微调的量化版本，针对特定下游任务优化，是社区MoE模型量化探索的代表。
哦对，还有吗？刚才的几个GGUF的，比如DavidAU的两个，HauhauCS的那个，LuffyTheFox的，都是社区微调的GGUF，是不是也要放这里？哦对，我刚才漏了，那些都是社区微调的量化版本，属于微调与量化类。哦对，因为DavidAU的两个、HauhauCS的、LuffyTheFox的都是GGUF，而且是社区微调的，所以应该放这个分类里？哦刚才我把它们放多模态了，其实可以调整？或者看，分类里的📦是微调与量化，所以那些GGUF的微调版应该放这里？哦对，因为它们的核心属性是微调+量化，虽然任务是多模态，但分类是按类型，哦等下用户给的分类是：
分类：
- 🧠 语言模型（LLM、对话模型、指令微调）
- 🎨 多模态与生成（图像、视频、音频、文本到X）
- 🔧 专用模型（代码、数学、医疗、嵌入）
- 📦 微调与量化（社区微调、GGUF、AWQ）
哦，那如果一个模型是社区微调的多模态GGUF，应该放哪个？哦可以看主要属性，比如如果是多模态的，但是是微调量

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*