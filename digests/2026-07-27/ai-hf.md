# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 22:15 UTC

---

用户现在需要一份Hugging Face2026年7月27日的热门模型日报，首先得先理清楚各个部分的要求，先搞今日速览，得3-5句话，抓最核心的热点：首先是百度的那个Unlimited-OCR点赞下载双高，还有智谱GLM-5.2点赞四千多，下载八十多万，还有一堆Qwen3.6的微调/量化模型，还有多模态和机器人相关的，还有Laguna系列文本生成的热度，对，得把这些核心点串起来，自然一点。
然后是热门模型分类，四个分类：🧠语言模型，🎨多模态与生成，🔧专用模型，📦微调与量化。每个分类下面的模型要准确归类，不能错。
首先先理每个分类的模型：
首先🧠语言模型（LLM、对话模型、指令微调）：得找纯文本生成或者对话为主的，首先zai-org/GLM-5.2，这个是智谱的吧？对，点赞4473，下载82万多，是GLM系列最新的大语言模型，对话和生成都强。然后poolside/Laguna-S-2.1，点赞694，下载5万6，是Poolside的文本生成模型，还有它的量化版unsloth/Laguna-S-2.1-GGUF，还有poolside/Laguna-S-2.1-NVFP4，这三个都是Laguna系列的，得放进去。然后Nanbeige/Nanbeige4.2-3B，南北阁的3B小模型，点赞442，下载1万4，适合轻量部署。还有prism-ml/Bonsai-27B-gguf，哦对，这个是1-bit量化的27B模型，下载218万？哦看下载数是2,187,304，对，这个量化后体积小性能还行，适合本地部署。还有empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF？哦这个是9B的，基于Qwen3.5的，支持1M上下文，量化的，对，也属于语言模型。还有fdtn-ai/antares-1b，1B的Granite混合MoE模型，轻量安全向的，也放进去？等下，等下，先别急，先把每个模型的信息准确拿对，不能错链接、作者、点赞下载数。
然后🎨多模态与生成（图像、视频、音频、文本到X）：首先baidu/Unlimited-OCR，这个是OCR图像文本识别，任务image-text-to-text，点赞3197，下载259万多，最高的下载量。然后thinkingmachines/Inkling，多模态对话模型，点赞1578，下载3万4。然后microsoft/Mage-Flow，文本生成图像，点赞331，下载1375。还有conradlocke/krea2-identity-edit，图像编辑LoRA，下载虽然0？哦对，下载数是0，但点赞542，因为是Krea2的身份编辑LoRA，ComfyUI用的。还有microsoft/Mage-Flow-Edit-Turbo，图像到图像的快速编辑，点赞88。还有openbmb的那两个机器人？哦openbmb/MiniCPM-RobotManip是机器人操作， MiniCPM-RobotTrack是机器人跟踪，属于具身智能相关的多模态？哦对，具身也是多模态的一部分？或者要不要放专用？哦用户给的专用模型是代码、数学、医疗、嵌入，那机器人的话，哦等下看用户的分类：🔧专用模型（代码、数学、医疗、嵌入），那机器人的话？哦openbmb的MiniCPM-RobotManip和RobotTrack是机器人方向的，是不是放专用？或者多模态里的具身？哦先看，还有owensong/Inflect-Micro-v2是文本转语音，属于多模态的音频生成，对，放多模态里。还有baseten/GLM-5.2-Vision-NVFP4是GLM的多模态量化版，放多模态。还有HauhauCS的那个Qwen3.6-35B-A3B的，是带视觉的MoE模型，哦对，那个是image-text-to-text，多模态的，对，HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive，点赞3111，下载192万多，这个是多模态的。还有Moonshot的Kimi-K2.7-Code？哦那个是image-text-to-text，但是是代码相关的？哦Kwaipilot的KAT-Coder-V2.5-Dev是代码模型，放专用。哦对，Kimi-K2.7-Code是带视觉的代码模型？哦看标签是image-text-to-text，feature-extraction，compressed-tensors，还有kimi_k25，哦可能是多模态的代码相关？或者放专用？等下先理清楚，别乱。
然后🔧专用模型（代码、数学、医疗、嵌入）：首先Kwaipilot/KAT-Coder-V2.5-Dev，代码模型，基于Qwen3.5-MoE，点赞194，下载3764。然后moonshotai/Kimi-K2.7-Code，多模态代码模型，带视觉输入，支持代码生成，点赞1293，下载73万，对，这个放专用。还有ATH-MaaS/OvisOCR2，哦这个是OCR专用的，基于Qwen3.5的OCR模型，点赞307，下载3万5，哦对，OCR是专用模型啊！我刚才把Unlimited-OCR放多模态，OvisOCR2就放专用，对，因为它是专门的OCR模型。还有openbmb/MiniCPM-RobotManip和MiniCPM-RobotTrack，是机器人操作和跟踪的专用模型，放这里。哦对，还有Motif-3-Beta，Motif Technologies的模型，标签是feature-extraction，可能是嵌入或者专用？哦看任务text-generation，哦可能是通用？或者？哦再看，fdtn-ai/antares-1b是安全向的，哦标签有security，是不是放专用？哦对，安全向的轻量模型，放专用也可以？或者先按任务来。
然后📦微调与量化（社区微调、GGUF、AWQ、LoRA）：首先DavidAU的那个Qwen3.6-27B的GGUF，未审查的，点赞627，下载55万。然后HauhauCS的那个Qwen3.6-35B-A3B的GGUF未审查版，点赞3111，下载192万。然后LuffyTheFox的Qwen3.6-35B-A3B-Genesis-Hermes-V5-GGUF，点赞172，下载7万3。然后prism-ml的两个，Ternary-Bonsai-27B-gguf是2-bit三值量化的27B，点赞1047，下载63万，还有Bonsai-27B-gguf是1-bit量化的，点赞648，下载218万。还有empero-ai的Qwythos-9B的GGUF，点赞2474，下载141万。还有bottlecapai的ThinkingCap-Qwen3.6-27B，是基于Qwen3.6的推理增强微调版，点赞555，下载2万7，对，这个是微调的，放这里。还有conradlocke的那个krea2的LoRA，放这里，因为是LoRA微调。哦poolside的那两个Laguna的量化版？NVFP4和GGUF的，是不是也放这里？哦对，poolside/Laguna-S-2.1-NVFP4是NVFP4量化的，poolside/Laguna-S-2.1-GGUF是GGUF量化的，还有unsloth/Laguna-S-2.1-GGUF也是量化的，对，这些都属于微调量化的分类里。
等下要注意不要重复分类，比如一个模型只能在一个分类里，所以得先确定每个模型的唯一分类：
先列所有30个模型，一个个过：
1. baidu/Unlimited-OCR：OCR，多模态里的图像文本识别，放🎨多模态与生成
2. poolside/Laguna-S-2.1：文本生成，语言模型，放🧠语言模型
3. upstage/Solar-Open2-250B：哦！我漏了这个！Upstage的Solar-Open2-250B，文本生成，点赞589，下载3305，是250B的大语言模型，放🧠语言模型里！
4. DavidAU/Qwen3.6-27B-Fable-Fusion-...GGUF：量化版，放📦微调与量化
5. Nanbeige/Nanbeige4.2-3B：3B小语言模型，放🧠语言模型
6. thinkingmachines/Inkling：多模态对话，放🎨多模态与生成
7. microsoft/Mage-Flow：文生图，放🎨多模态与生成
8. zai-org/GLM-5.2：大语言模型，智谱的，放🧠语言模型
9. prism-ml/Ternary-Bonsai-27B-gguf：2-bit量化27B，放📦微调与量化
10. unsloth/Laguna-S-2.1-GGUF：Laguna量化版，放📦微调与量化
11. Kwaipilot/KAT-Coder-V2.5-Dev：代码专用模型，放🔧专用模型
12. Motif-Technologies/Motif-3-Beta：哦这个标签有feature-extraction，任务text-generation，3B模型，可能是轻量嵌入/小语言模型？哦看标签是Motif，feature-extraction，text-generation，是不是放🧠语言模型？或者专用？哦可能是个轻量的通用小模型，放🧠吧。
13. HauhauCS/Qwen3.6-35B-A3B-...GGUF：多模态+量化，哦任务是image-text-to-text，那放🎨多模态与生成？因为它带视觉，是视觉语言模型，对，虽然是量化版，但分类是按模型类型，微调量化是另一个分类？哦对哦！我刚才搞错了，分类的逻辑是：前三个分类是按模型的应用/类型分：语言、多模态生成、专用；第四个是按模型的版本形态（微调、量化）分？哦用户给的分类是：
- 🧠 语言模型（LLM、对话模型、指令微调）：是按任务类型，纯文本生成/对话的
- 🎨 多模态与生成（图像、视频、音频、文本到X）：是多模态或者跨模态生成的
- 🔧 专用模型（代码、数学、医疗、嵌入）：是垂直领域专用的，哪怕多模态只要是垂直领域也放这里？比如OCR是专用的，代码是专用的，机器人是专用的
- 📦 微调与量化（社区微调、GGUF、AWQ）：这个分类是看模型的版本形态，不管它原本是什么类型，只要是社区微调、量化的版本就放这里？哦对哦，这样就不会重复了！哦我刚才傻了，以为一个模型只能放一个，其实前三个是按模型的功能领域，第四个是按模型的发布形态（量化、微调版），哦对，这样就没问题了！
哦太好了，这样就清晰了。那现在重新理：
首先🧠 语言模型（纯文本生成、对话类，非量化/微调版的原生模型？不，不是，是功能上属于通用语言模型的，不管形态？不，比如GLM-5.2是原生模型，放语言；Laguna-S-2.1原生版放语言；Solar-Open2-250B原生版放语言；Nanbeige4.2-3B原生版放语言；Motif-3-Beta放语言；prism-ml/Bonsai-27B-gguf虽然是量化的，但它是通用对话模型，放语言也可以？哦或者前三个是功能分类，不管形态，第四个是形态分类，专门收录微调、量化、LoRA这类衍生版本，这样就不会重叠，对，用户给的分类就是这样安排的，所以：
🧠 语言模型（LLM、对话模型、指令微调）：收录通用文本生成、对话类的模型，包括原生和官方量化？不，用户给的第四个分类是“微调与量化（社区微调、GGUF、AWQ）”，所以第四个是专门收社区的、非官方的微调、量化、LoRA版本，官方的量化或者原生模型放前三个的功能分类里。哦对，这样就对了！
比如poolside/Laguna-S-2.1是官方原生的文本生成模型，放🧠语言模型；poolside/Laguna-S-2.1-NVFP4是官方量化的，也算官方的？或者NVFP4是官方的量化版，放🧠也可以，或者放📦？哦看用户给的📦的定义是“社区微调、GGUF、AWQ”，哦对，社区的非官方的才放📦，官方的量化版放对应的功能分类里。哦那比如prism-ml的Bonsai是社区的量化版，放📦；unsloth的Laguna-GGUF是社区的量化版，放📦；DavidAU的那个是社区的微调+量化，放📦；HauhauCS的那个是社区的微调+量化，放📦；LuffyTheFox的也是社区的，放📦；empero-ai的也是社区的，放📦；bottlecapai的ThinkingCap是社区的微调版，放📦；conradlocke的LoRA是社区的，放📦。对，这样就分了。
那现在重新整理每个分类的模型，确保信息准确，每个的链接、作者、点赞、下载、说明都對：
首先是今日速览，要3-5句话，抓核心：
2026年7月27日Hugging Face热门榜呈现多模态、轻量量化、垂直场景落地三大主线：百度Unlimited-OCR以超3190点赞、259万下载领跑总榜，验证了OCR刚需场景的极高热度；智谱GLM-5.2、Qwen3.6系列衍生模型占据多席，国产大模型生态持续活跃；同时社区围绕Laguna、Qwen3.6推出的GGUF、MoE微调版本下载量破百万，显示端侧部署、低成本推理仍是开发者核心诉求。
哦对，差不多，3-5句，这个刚好。
然后是热门模型分类：
首先🧠 语言模型（LLM、对话模型、指令微调）：
1. zai-org/GLM-5.2
链接: https://huggingface.co/zai-org/GLM-5.2
作者: zai-org | 点赞: 4,473 | 下载: 827,191
说明：智谱开源的旗舰级大语言模型，支持长上下文对话与复杂任务推理，是当前国产通用LLM的代表性作品，本周点赞数高居总榜第二。
2. poolside/Laguna-S-2.1
链接: https://huggingface.co/poolside/Laguna-S-2.1
作者: poolside | 点赞: 694 | 下载: 56,445
说明：Poolside推出的代码与通用文本生成专属模型，在编程辅助、长文本生成场景表现突出，本周引发社区广泛关注。
3. upstage/Solar-Open2-250B
链接: https://huggingface.co/upstage/Solar-Open2-250B
作者: upstage | 点赞: 589 | 下载: 3,305
说明：韩国Upstage开源的250B参数大语言模型，延续Solar系列的高性能传统，支持多语言指令遵循与复杂推理任务。
4. Nanbeige/Nanbeige4.2-3B
链接: https://huggingface.co/Nanbeige/Nanbeige4.2-3B
作者: Nanbeige | 点赞: 442 | 下载: 14,049
说明：南北阁推出的3B参数轻量级小语言模型，体积小、部署门槛低，适合端侧设备、边缘场景的轻量化文本生成需求。
5. Motif-Technologies/Motif-3-Beta
链接: https://huggingface.co/Motif-Technologies/Motif-3-Beta
作者: Motif-Technologies | 点赞: 193 | 下载: 2,400
说明：Motif Technologies发布的3B参数特征提取与小语言模型，兼顾文本生成与语义嵌入能力，适合轻量级NLP场景落地。
哦对，还有没有？哦prism-ml的Bonsai是量化的，放📦，upstage的那个是原生的，放这里，对，还有没有？哦对，Nanbeige的那个是对的，GLM，Laguna，Solar，Nanbeige，Motif，这几个是🧠的，对。
接下来🎨 多模态与生成（图像、视频、音频、文本到X）：
1. baidu/Unlimited-OCR
链接: https://huggingface.co/baidu/Unlimited-OCR
作者: baidu | 点赞: 3,197 | 下载: 2,593,460
说明：百度开源的高精度OCR模型，支持任意场景下的图像文本识别、版面分析与结构化提取，本周下载量居所有模型首位，是文档处理、数据录入等场景的刚需工具。
2. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
作者: HauhauCS | 点赞: 3,111 | 下载: 1,927,138
说明：基于Qwen3.6的35B参数MoE架构多模态模型，支持图像、文本混合输入，未做内容限制，在多模态理解、创意生成场景适配性极强，下载量破百万。
3. thinkingmachines/Inkling
链接: https://huggingface.co/thinkingmachines/Inkling
作者: thinkingmachines | 点赞: 1,578 | 下载: 34,511
说明：thinkingmachines推出的多模态对话模型，支持图像、文本的上下文理解与生成，适配视觉问答、图像描述等多模态交互场景。
4. moonshotai/Kimi-K2.7-Code
链接: https://huggingface.co/moonshotai/Kimi-K2.7-Code
作者: moonshotai | 点赞: 1,293 | 下载: 730,129
说明：Moonshot推出的多模态代码生成模型，

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*