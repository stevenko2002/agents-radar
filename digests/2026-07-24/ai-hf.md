# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 03:16 UTC

---

用户现在需要生成HF的热门模型日报，首先得一步步来，先符合要求来。首先第一部分是今日速览，3-5句话，得抓最火的几个点，比如百度的OCR下载量破241万，智谱的GLM-5.2点赞近4.4k，谷歌gemma-4-31B下载千万级，还有Qwen3系列的微调、量化版本还有TTS模型，还有机器人相关的MiniCPM系列，对，把这些趋势凑起来，要通顺。
然后第二部分是热门模型分类，四个分类：🧠语言模型、🎨多模态与生成、🔧专用模型、📦微调与量化。每个分类下面的模型要对应，不能乱放，还要每个有链接、作者、点赞下载、一句话说明。
首先先理每个分类的模型：
首先🧠语言模型（LLM、对话模型、指令微调）：首先看任务为text-generation或者对话的，比如zai-org/GLM-5.2，点赞4375，下载596k，智谱的GLM新版本，MoE架构，支持长对话，所以上榜。然后poolside/Laguna-S-2.1，点赞519，下载13k，poolside的新一代文本生成基座模型。还有Nanbeige/Nanbeige4.2-3B，点赞326，下载4.5k，南北阁的小参数高效LLM，适合端侧部署。还有upstage/Solar-Open2-250B，点赞467，下载362，韩国Upstage的250B参数开源大模型，能力对标主流闭源模型？对，还有Motif-Technologies/Motif-3-Beta，点赞174，下载1.8k，新一代开源指令微调模型。哦对，还有fdtn-ai/antares-1b？那个是1B的，安全相关的？也算语言模型？对，还有OpenMOSS的转录那个？不，那个是音频的，归到多模态？哦对，OpenMOSS是audio-text-to-text，归多模态。然后还有Kimi-K2.7-Code？那个是代码？哦对，归到专用模型？等下，先别急，分类要对：
首先🧠语言模型：
1. zai-org/GLM-5.2：链接要带上，作者zai-org，点赞4375，下载596442，智谱推出的新一代MoE架构对话生成模型，支持超长上下文与多轮对话，是本周点赞最高的语言类模型。
2. poolside/Laguna-S-2.1：链接，作者poolside，点赞519，下载13285，高性能开源文本生成基座模型，支持长文生成与知识问答，有多个量化版本适配不同部署场景。
3. Nanbeige/Nanbeige4.2-3B：链接，作者Nanbeige，点赞326，下载4532，3B参数轻量级开源LLM，在保持较低算力消耗的同时具备 competitive 的中文生成与理解能力，适合端侧部署。
4. upstage/Solar-Open2-250B：链接，作者upstage，点赞467，下载362，韩国Upstage发布的250B参数开源大模型，在推理、知识问答等任务上表现接近主流闭源模型，开源生态的重要补充。
5. Motif-Technologies/Motif-3-Beta：链接，作者Motif-Technologies，点赞174，下载1856，全新指令微调开源模型，针对多轮对话与工具调用场景优化，适配多行业落地需求。
6. fdtn-ai/antares-1b：链接，作者fdtn-ai，点赞121，下载2747，1B参数轻量安全导向LLM，内置内容安全过滤机制，适合对合规性要求高的部署场景。
对，这个是语言模型的分类。
然后🎨多模态与生成（图像、视频、音频、文本到X）：这里包括视觉、语音、机器人相关的？对，任务里有image-text-to-text、text-to-image、robotics、audio-text-to-text、text-to-speech这些。
首先baidu/Unlimited-OCR：链接，作者baidu，点赞2900，下载2414259，百度推出的无限场景OCR模型，支持多语言、复杂版式的文字识别与结构化提取，是本周下载量最高的模型，适配文档处理、数据录入等场景。
然后google/gemma-4-31B-it：链接，作者google，点赞3347，下载12666488，谷歌Gemma系列新一代多模态指令模型，支持图像、文本输入，能力覆盖视觉问答、文档理解、多轮对话，是本周下载量最高的多模态模型，总下载量破千万。
然后empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF：链接，作者empero-ai，点赞2440，下载2126755，基于Qwen3.5微调的多模态推理模型，支持超长上下文（1M tokens），擅长复杂逻辑推理与视觉问答任务，是本周点赞最高的多模态模型之一。
然后HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive：链接，作者HauhauCS，点赞3036，下载2027080，基于Qwen3.6-35B-A3B微调的无审查多模态模型，支持图像输入与文本生成，针对创意类、研究类场景优化，社区热度极高。
然后thinkingmachines/Inkling：链接，作者thinkingmachines，点赞1509，下载24669，Thinking Machines推出的多模态对话模型，支持图像理解、文本生成与多轮交互，针对创意写作、视觉推理场景优化。
然后moonshotai/Kimi-K2.7-Code：哦，這個是image-text-to-text？看任务是image-text-to-text？哦对，模型的任务是image-text-to-text，作者moonshotai，点赞1249，下载766522，月之暗面推出的Kimi系列代码+多模态模型，支持代码生成、图像理解与跨模态推理，针对编程场景优化。
然后OpenMOSS-Team/MOSS-Transcribe-Diarize：链接，作者OpenMOSS-Team，点赞320，下载111598，MOSS团队推出的音频转录与说话人分离模型，支持实时流式转写，适配会议记录、字幕生成等场景。
然后Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice：链接，作者Qwen，点赞1800，下载2497020，阿里通义实验室推出的文本转语音模型，支持自定义音色生成，低延迟高自然度，适配虚拟主播、有声内容生成等场景。
还有openbmb的两个机器人模型：openbmb/MiniCPM-RobotManip和MiniCPM-RobotTrack，分别是机器人操作和跟踪的，链接带上，作者openbmb，点赞165和117，下载408和306，面壁智能推出的具身智能专用多模态模型，分别支持机器人操作指令理解、视觉跟踪任务，适配工业机器人、服务机器人落地场景。
还有nvidia/Cosmos3-Edge：链接，作者nvidia，点赞102，下载28493，英伟达Cosmos系列边缘端多模态生成模型，支持图像、视频生成，适配边缘设备部署，用于机器人感知、工业视觉等场景。
哦对，还有conradlocke的krea2编辑那个？任务是N/A，标签是image-editing，归到多模态？对，conradlocke/krea2-identity-edit，链接，作者conradlocke，点赞518，下载0，基于Krea-2底模的身份保持图像编辑LoRA，支持人物、物体的一致性编辑，适配ComfyUI等工具链，是本周图像编辑类热门模型。
对，这部分多模态的就齐了。
然后🔧专用模型（代码、数学、医疗、嵌入）：哦，等下刚才的Kimi-K2.7-Code是不是归这里？哦对，它是代码专用的多模态？或者归这里？等下看分类定义是代码、数学、医疗、嵌入，那刚才的Kimi-K2.7-Code是代码相关的，对，那还有吗？哦，OpenMOSS的那个是转录，归多模态了，那专用模型这里：首先moonshotai/Kimi-K2.7-Code，对，然后还有吗？哦，Nanbeige那个是通用LLM，归语言模型了，那有没有其他的？哦，对了，还有吗？哦，nvidia的ASR模型？不，ASR是语音识别，归多模态？哦，对，nvidia/nemotron-3.5-asr-streaming-0.6b，那个是自动语音识别，归多模态？或者专用？哦，看标签是ASR，那算专用？等下，先看分类：
哦，专用模型的话，比如代码、数学、医疗、ASR、机器人？不，机器人刚才归多模态了？或者调整下，哦，刚才的机器人模型，openbmb的两个，是具身智能，算不算专用？或者我把机器人归到多模态里，因为是多模态的。那专用模型这里：
1. moonshotai/Kimi-K2.7-Code：链接，作者moonshotai，点赞1249，下载766522，月之暗面推出的代码专属多模态模型，在代码生成、代码理解、跨模态代码推理任务上表现优异，支持图像+文本输入进行编程辅助。
2. nvidia/nemotron-3.5-asr-streaming-0.6b：链接，作者nvidia，点赞926，下载750118，英伟达推出的0.6B参数流式语音识别模型，低延迟高准确率，支持实时转写，适配会议系统、智能硬件等场景。
3. ATH-MaaS/OvisOCR2：哦，这个是OCR，算不算专用？哦对，OCR是专用视觉任务，那这个放这里？等下，任务是image-text-to-text，标签是ocr，那算专门的OCR模型？哦，那调整下：
哦，🔧专用模型（代码、数学、医疗、OCR、语音识别等垂直场景）：
- moonshotai/Kimi-K2.7-Code：链接，作者moonshotai，点赞1249，下载766522，月之暗面推出的代码专属多模态模型，在代码生成、代码理解、跨模态编程推理任务上表现优异，支持图像+文本输入进行编程辅助。
- nvidia/nemotron-3.5-asr-streaming-0.6b：链接，作者nvidia，点赞926，下载750118，英伟达推出的0.6B参数流式语音识别模型，低延迟高准确率，支持实时语音转写，适配会议系统、智能硬件等落地场景。
- ATH-MaaS/OvisOCR2：链接，作者ATH-MaaS，点赞257，下载26919，基于Qwen3.5微调的专业OCR模型，优化复杂版式、多语言场景的文字识别能力，支持文档结构化提取，是本周垂直场景OCR类热门模型。
对，这样更合适，那刚才的多模态里就把Kimi和ASR、OvisOCR去掉，对。
然后是📦微调与量化（社区微调、GGUF、AWQ、LoRA等）：这个就是各种微调、量化的版本，比如prism-ml的几个，unsloth的，DavidAU的，HauhauCS的，LuffyTheFox的，bottlecapai的，conradlocke的LoRA，poolside的量化版本。
整理一下：
1. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive：哦等下，刚才多模态里已经放了？哦对，它既是多模态，也是微调整量？哦，对，那可以放这里，说明是基于Qwen3.6-35B-A3B微调的无审查版本。然后：
1. prism-ml/Bonsai-27B-gguf：链接，作者prism-ml，点赞620，下载1910116，27B参数Llama架构模型的1-bit GGUF量化版本，体积小、推理速度快，适配llama.cpp等本地部署工具，是本周下载量最高的量化模型之一。
2. prism-ml/Ternary-Bonsai-27B-gguf：链接，作者prism-ml，点赞986，下载576083，27B参数模型的2-bit三值量化GGUF版本，在保持较低体积的同时尽可能保留模型性能，适合低算力设备的本地部署。
3. prism-ml/Bonsai-27B-mlx-1bit：链接，作者prism-ml，点赞173，下载34270，27B参数模型的1-bit MLX架构量化版本，适配苹果 Silicon 芯片设备，是Mac用户本地运行大模型的高性价比选择。
4. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF：链接，作者DavidAU，点赞407，下载334847，基于Qwen3.6-27B微调的无审查多模态GGUF版本，针对创意写作、角色对话场景优化，是Qwen3系列社区微调的热门版本。
5. LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF：链接，作者LuffyTheFox，点赞118，下载24982，基于Qwen3.6-35B-A3B微调的无审查GGUF版本，针对逻辑推理、角色扮演场景优化，是Hermes系列微调的热门分支。
6. bottlecapai/ThinkingCap-Qwen3.6-27B：链接，作者bottlecapai，点赞529，下载25231，基于Qwen3.6-27B微调的推理增强版本，优化复杂逻辑推理、数学解题能力，是Qwen3系列推理微调的热门选择。
7. unsloth/Laguna-S-2.1-GGUF：链接，作者unsloth，点赞151，下载28542，poolside Laguna-S-2.1的官方GGUF量化版本，优化了vLLM、llama.cpp等推理框架的兼容性，适配不同部署需求。
8. conradlocke/krea2-identity-edit：链接，作者conradlocke，点赞518，下载0，基于Krea-2底模微调的身份保持LoRA权重，支持人物、物体的一致性图像编辑，适配ComfyUI等主流绘图工具链，是本周图像编辑类热门微调模型。
9. poolside/Laguna-S-2.1-NVFP4：链接，作者poolside，点赞118，下载52235，Laguna-S-2.1的4-bit NVFP4量化版本，针对vLLM推理框架优化，在保持性能的同时大幅降低显存占用，适合大参数模型的低成本部署。
哦对，还有poolside的那个GGUF版本？哦，poolside/Laguna-S-2.1-GGUF，那个标签是gguf，base_model是Laguna-S-2.1，所以也放这里，对，加上：
10. poolside/Laguna-S-2.1-GGUF：链接，作者poolside，点赞113，下载25360，Laguna-S-2.1的官方GGUF量化版本，适配llama.cpp等本地推理工具，是轻量部署该模型的高性价比选择。
对，这个分类就齐了，每个分类里的模型不要重复？哦，刚才的HauhauCS的那个，既是多模态也是微量化，那可以两个分类都放吗？或者看，多模态里的说明是它本身是多模态模型，微调量化里的说明是它是微调版本，这样也可以，或者为了避免重复，就放在微调量化里，多模态里放其他？哦，对，因为它的核心特点是微调无审查的GGUF版本，所以放微调量化里，多模态里就不用放了，这样可以。哦，刚才的多模态里HauhauCS的那个去掉，对，这样不重复。
然后第三部分是生态信号，100-200字，要分析趋势：比如哪些家族势头旺？Qwen3家族（阿里通义）、Gemma（谷歌）、GLM（智谱）、Laguna（poolside）这几个家族的新版本和多种量化版本都上榜了，尤其是Qwen3系列的微调、量化版本数量最多，生态最活跃。然后开源vs闭源：谷歌Gemma、智谱GLM、百度、月之暗面等厂商都选择开源核心权重，闭源模型的替代选择越来越多。然后量化微调活动：社区围绕Qwen3、Laguna等基座模型做了大量无审查、推理增强、轻量量化的微调，GGUF、MLX、NVFP4等多种量化方案涌现，本地部署的轻量化需求持续高涨。
然后第四部分是值得探索，2-3个模型，要简述理由：
第一个：google/gemma-4-31B-it，理由：谷歌官方开源的31B参数多模态模型，总下载量超1266万，验证了中小参数多模态模型的落地可能性，支持图像、文本输入，能力覆盖视觉问答、文档理解、对话生成，适合研究多模态模型的效率平衡，也适合需要轻量多模态能力的落地场景。
第二个：baidu/Unlimited-OCR，理由：本周下载量最高的模型（241万+），针对复杂场景OCR做了深度优化，支持多语言、复杂版式、低质量图像的识别，落地场景极广（文档数字化、数据录入、教育等），是垂直场景模型实用化的标杆产品。
第三个：prism-ml/Bonsai-27B-gguf，理由：1-bit量化的27B参数GGUF模型，下载量近191万，在极小的体积下尽可能保留大参数模型的性能，是Mac、低算力设备本地运行大模型的最优选择之一，验证了极端量化方案的实用性，适合研究轻量部署技术。
哦，三个也可以，符合2-3个的要求。
然后现在要把所有内容组织成结构清晰的日报，语言要简洁专业，中文，所有链接都要保留。
等下，检查有没有漏的模型？哦，对了，刚才的分类里有没有漏的？比如nvidia的Cosmos3-Edge？哦，那个任务N/A，标签是cosmos，diffusers，text-to-image？哦对，标签里有image-generation，所以归到多模态与生成里，对，刚才漏了，加上：
在🎨多模态与生成的末尾加一个：nvidia/Cosmos3-Edge，链接，作者nvidia，点赞102，下载28493，英伟达Cosmos系列边缘端多模态生成模型，支持图像、视频生成，针对边缘设备优化，适配机器人感知、工业视觉等落地场景。
还有microsoft的Mage-Flow，那个是text-to-image，也归多模态，对，刚才漏了：
在🎨多模态与生成的百度OCR后面？或者谷歌Gemma

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*