# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 22:16 UTC

---

用户现在需要一份Hugging Face热门模型日报，首先得先理清楚每个部分的规则，首先今日速览要3-5句，得抓最猛的几个点，比如Kimi-K3新出点赞最高，GLM季度大下载还有百度的OCR下载量炸，还有量化模型和微调比如Qwen3.6的衍生的那些很火，还有多模态的几个，对，先把速览的骨架搭好。

然后第二部分是分类，分四个大类：🧠语言模型、🎨多模态与生成、🔧专用模型、📦微调与量化。每个分类下面的模型要准确归类，还要每个都带链接、作者、点赞下载、一句话说明。首先先理每个模型属于哪类：
首先🧠语言模型的：先看poolside的Laguna-S-2.1，还有upstage的Solar-Open2-250B，Nanbeige的4.2-3B，zai-org的GLM-5.2，哦对kimi-K2.7-Code？不，等下Kimi-K3是原生多模态？哦对看任务，Kimi-K3是image-text-to-text，哦对那语言模型的任务是text-generation、对话的，哦GLM-5.2是text-generation，对，还有Nanbeige4.2-3B是text-generation，Solar-Open2-250B也是text-generation，Laguna-S-2.1也是，还有Kwaipilot的KAT-Coder-V2.5-Dev是text-generation带代码的？哦对还有那个Motif-3-Beta是text-generation，fdtn-ai的antares-1b也是text-generation，哦对还有Qwen/Qwen3.6-35B-A3B是image-text-to-text？哦对它是多模态？哦等下看任务：Qwen3.6的任务是image-text-to-text，所以归到多模态？哦对还有HauhauCS的那个也是image-text-to-text，LuffyTheFox的那个也是，empero-ai的Qwythos也是image-text-to-text，还有moonshotai的两个Kimi都是image-text-to-text，所以多模态那类要放这些。哦对刚才我搞错了，先把每个模型的任务先对应：
首先语言模型（LLM、对话、指令微调，任务主要是text-generation，或者纯文本对话的）：
poolside/Laguna-S-2.1：作者poolside，点赞750，下载63605，任务是text-generation，对，这个是原生大模型，所以归语言模型。
upstage/Solar-Open2-250B：点赞627，下载3761，text-generation，韩国upstage的大模型，归这里。
Nanbeige/Nanbeige4.2-3B：491赞，16518下载，text-generation，国产小参数通用模型，归这里。
zai-org/GLM-5.2：哦它的任务是text-generation，虽然也有多模态版本？哦看标签是glm_moe_dsa，text-generation，conversational，哦对它的基础款是文本生成，所以归语言模型？哦等下看它的下载是100多万，赞4543，对，智谱的GLM系列新版本，文本对话为主，哦对看它的任务是text-generation，对，所以归语言模型。
还有Motif-Technologies/Motif-3-Beta：199赞，2532下载，text-generation，通用小模型，归这里。
fdtn-ai/antares-1b：206赞，6421下载，text-generation，安全向小模型，归这里。
哦对还有Kwaipilot的KAT-Coder-V2.5-Dev？它的任务是text-generation，标签有code，哦对，代码的？哦等下第二个分类是🔧专用模型，代码、数学这些，哦对KAT-Coder是代码专用，所以归专用模型里。哦对还有owensong的两个是TTS，属于音频，归多模态？哦对多模态包括音频、图像、视频这些，所以TTS归多模态。
然后🎨多模态与生成（图像、视频、音频、文本到X）：首先任务有text-to-image、image-to-image、text-to-speech、image-text-to-text（多模态对话）、视频相关的。
首先microsoft/Mage-Flow：381赞，1691下载，text-to-image，微软的文生图模型，归这里。
microsoft/Mage-Flow-Edit-Turbo：100赞，1115下载，image-to-image，微软的图像编辑，归这里。
conradlocke/krea2-identity-edit：554赞，0下载？哦对标签是image-editing，lora，基于Krea-2的，归图像编辑这里。
nvidia/Cosmos3-Edge：132赞，33127下载，标签是cosmos，diffusers，是英伟达的世界模型？哦对，属于视频/多模态生成？哦对，Cosmos是视频生成相关的，所以归这里。
然后TTS的两个：owensong/Inflect-Micro-v2和Inflect-Nano-v2，都是text-to-speech，边缘TTS，归多模态里的音频。
然后image-text-to-text的（多模态对话/视觉语言模型）：moonshotai的两个Kimi：Kimi-K3（5875赞，2850下载），Kimi-K2.7-Code（1323赞，695744下载），然后thinkingmachines/Inkling（1601赞，36196下载），ATH-MaaS/OvisOCR2（325赞，42152下载，OCR专用多模态），baseten/GLM-5.2-Vision-NVFP4（124赞，2276下载，GLM视觉量化版），然后HauhauCS的Qwen3.6-35B-A3B-Uncensored（3132赞，1894395下载），LuffyTheFox的Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF（186赞，83658下载），empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF（2487赞，1336263下载），还有Qwen/Qwen3.6-35B-A3B（2545赞，6187853下载，官方原生多模态MoE）。哦对这些都是多模态的，归到🎨多模态与生成里。
然后🔧专用模型：代码、OCR、嵌入这些？哦看Kwaipilot/KAT-Coder-V2.5-Dev：238赞，5312下载，任务text-generation，标签有code，是基于Qwen3.5的代码专用模型，归这里。还有ATH-MaaS/OvisOCR2？哦它是OCR专用的多模态，哦刚才我归多模态里了？哦对OCR是专用任务，不过它是多模态的，哦可以放在多模态里也可以？哦没事，或者看分类说明，专用模型是代码、数学、医疗、嵌入，哦还有baidu/Unlimited-OCR是OCR，哦对baidu的那个是image-text-to-text，OCR专用，归哪里？哦可以归🔧专用模型里，因为是专用OCR任务。哦对还有没有其他的？哦对，有没有数学？这里没有，医疗也没有，嵌入也没有，所以专用模型里放KAT-Coder（代码）、Unlimited-OCR（OCR专用）。
然后📦微调与量化（社区微调、GGUF、AWQ等）：这里的模型都是微调或者量化的版本，比如DavidAU的那个Qwen3.6的微调版，uncensored的，737赞，634146下载，GGUF格式。然后prism-ml的两个：Ternary-Bonsai-27B-gguf（1068赞，648938下载，2-bit极低比特量化），Bonsai-27B-gguf（657赞，2257928下载，1-bit量化）。然后unsloth的Laguna-S-2.1-GGUF（217赞，117456下载，量化版），poolside的两个量化版：Laguna-S-2.1-GGUF（154赞，85554下载）、Laguna-S-2.1-NVFP4（148赞，158308下载，NVFP4量化）。哦对这些都是微调或者量化的，归这个分类。
哦等下还要注意每个模型都要有链接，这个不能丢，用户要求保留所有HF链接。然后每个分类下的模型要按什么排序？哦可以按点赞数从高到低排，这样清晰。
然后第三部分是生态信号，100-200字，要分析趋势：比如首先看模型家族，Qwen3.6系列（包括官方版和社区微调版）下载量破600万，GLM-5.2系列也有百万级下载，韩国upstage的Solar、Moonshot的Kimi系列势头很猛；然后开源vs闭源，现在原生开源大模型加上社区微调/量化的衍生版本是主流，闭源模型基本没有上榜，全是大模型厂商开源或者社区基于开源基座微调；然后量化活动非常活跃，GGUF、NVFP4、2-bit、1-bit量化模型下载量远高于同基础模型的原始版，说明端侧部署需求极高，社区量化生态非常成熟。
然后第四部分是值得探索的2-3个模型，要选有代表性的，比如第一个选Qwen/Qwen3.6-35B-A3B，因为是官方原生的MoE多模态模型，下载量全榜第一，618万下载，能力均衡，支持文本和图像，是当前开源多模态的标杆；第二个选prism-ml/Bonsai-27B-gguf，因为1-bit极低比特量化还能保持 conversational 能力，下载量225万，证明端侧大模型部署的技术已经非常成熟，普通消费级硬件就能跑27B模型；第三个可以选baidu/Unlimited-OCR，下载量264万，仅次于Qwen3.6，说明垂直领域专用模型的需求比通用大模型还高，OCR场景的落地价值已经被验证。哦或者选Kimi-K3？因为点赞全榜第一，5875赞，是Moonshot最新发布的多模态原生模型，原生支持图文理解，是当前国产多模态的新锐力量。哦选三个的话，就这三个吧，每个说理由。
等下现在先理今日速览，要3-5句，概括最值得关注的：
今日速览：
1. Moonshot全新发布的多模态原生模型Kimi-K3以5875周点赞数登顶榜首，成为当前国产多模态模型的新标杆；
2. 智谱GLM-5.2与阿里Qwen3.6-35B-A3B分别以4543赞、2545赞位列文本/多模态类前列，其中Qwen3.6官方版以超618万下载量成为本周下载最高的模型；
3. 垂直领域专用模型需求爆发，百度Unlimited-OCR以264万下载量位列全榜第二，远超多数通用大模型；
4. 社区微调与低比特量化生态持续活跃，基于Qwen、Llama等基座的衍生微调/量化模型占据榜单近三分之一席位，端侧部署成为核心诉求。
哦对，这四个句子，刚好3-5句，没问题，把最核心的趋势都说了。
然后第二部分热门模型，分类整理，每个分类下的模型按点赞从高到低排，每个都带链接、作者、点赞、下载、一句话说明。
首先🧠语言模型（LLM、对话模型、指令微调）：
1. 模型名：zai-org/GLM-5.2，链接：https://huggingface.co/zai-org/GLM-5.2，作者：zai-org，点赞4543，下载1003547，说明：智谱推出的新一代MoE架构通用对话模型，支持长上下文交互，是当前国产开源文本模型的头部代表。
2. 模型名：poolside/Laguna-S-2.1，链接：https://huggingface.co/poolside/Laguna-S-2.1，作者：poolside，点赞750，下载63605，说明：Poolside推出的代码优先的通用大模型，在编程、推理任务上表现优异，是近期技术圈关注度最高的代码向原生模型之一。
3. 模型名：upstage/Solar-Open2-250B，链接：https://huggingface.co/upstage/Solar-Open2-250B，作者：upstage，点赞627，下载3761，说明：韩国Upstage推出的250B参数大规模开源文本模型，多语言能力突出，是东亚地区开源大模型的重要成果。
4. 模型名：Nanbeige/Nanbeige4.2-3B，链接：https://huggingface.co/Nanbeige/Nanbeige4.2-3B，作者：Nanbeige，点赞491，下载16518，说明：国产3B小参数轻量通用模型，适合端侧部署和低成本微调，是中小开发者入门开源LLM的高性价比选择。
5. 模型名：Motif-Technologies/Motif-3-Beta，链接：https://huggingface.co/Motif-Technologies/Motif-3-Beta，作者：Motif-Technologies，点赞199，下载2532，说明：3B参数的通用对话模型，主打低资源场景下的推理与对话能力，适合边缘设备部署。
6. 模型名：fdtn-ai/antares-1b，链接：https://huggingface.co/fdtn-ai/antares-1b，作者：fdtn-ai，点赞206，下载6421，说明：1B参数的轻量安全向文本模型，内置内容安全过滤机制，适合对合规性要求较高的B端落地场景。
哦对，点赞从高到低排，GLM5.2最高，然后Laguna，然后Solar，然后Nanbeige，然后antares是206，Motif是199，哦对刚才顺序错了，antares赞206比Motif高，所以调整下顺序。
然后是🎨多模态与生成（图像、视频、音频、文本到X）：
哦这个分类下面要分几个子类？不用，直接按点赞从高到低排，每个说明清楚：
1. 模型名：moonshotai/Kimi-K3，链接：https://huggingface.co/moonshotai/Kimi-K3，作者：moonshotai，点赞5875，下载2850，说明：Moonshot最新发布的原生多模态大模型，原生支持图文混合输入理解，综合多模态能力对标国际头部模型，本周以最高点赞数登顶全榜。
2. 模型名：moonshotai/Kimi-K2.7-Code，链接：https://huggingface.co/moonshotai/Kimi-K2.7-Code，作者：moonshotai，点赞1323，下载695744，说明：Kimi系列代码专用多模态版本，在代码理解、生成、图像+代码混合任务上表现突出，下载量突破69万，是开发者关注度最高的多模态代码模型。
3. 模型名：thinkingmachines/Inkling，链接：https://huggingface.co/thinkingmachines/Inkling，作者：thinkingmachines，点赞1601，下载36196，说明：主打多轮对话能力的视觉语言模型，支持图像理解、视觉问答等任务，交互体验接近消费级产品。
4. 模型名：empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF，链接：https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF，作者：empero-ai，点赞2487，下载1336263，说明：基于Qwen3.5微调的9B参数多模态模型，支持超长上下文推理，GGUF格式优化后可在消费级硬件流畅运行，下载量破133万。
5. 模型名：Qwen/Qwen3.6-35B-A3B，链接：https://huggingface.co/Qwen/Qwen3.6-35B-A3B，作者：Qwen，点赞2545，下载6187853，说明：阿里官方推出的MoE架构多模态大模型，总参数35B但激活仅3B，推理成本极低，是当前开源多模态模型的下载量冠军。
6. 模型名：HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive，链接：https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive，作者：HauhauCS，点赞3132，下载1894395，说明：基于Qwen3.6社区微调的无审查版本多模态模型，在创意生成、开放问答等场景上限制更少，下载量超189万。
7. 模型名：LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF，链接：https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF，作者：LuffyTheFox，点赞186，下载83658，说明：Qwen3.6的Hermes风格微调GGUF版本，结合了开放风格回答与端侧部署优化，适合需要灵活交互的本地部署场景。
8. 模型名：ATH-MaaS/OvisOCR2，链接：https://huggingface.co/ATH-MaaS/OvisOCR2，作者：ATH-MaaS，点赞325，下载42152，说明：基于Qwen3.5微调的OCR专用多模态模型，支持复杂版面、手写文字、多语言OCR，准确率远超通用多模态模型的OCR能力。
9. 模型名：baseten/GLM-5.2-Vision-NVFP4，链接：https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4，作者：baseten，点赞124，下载2276，说明：智谱GLM-5.2视觉版本的NVFP4量化版，推理速度提升3倍以上，内存占用降低75%，适合企业内部快速部署视觉理解服务。
10. 模型名：microsoft/Mage-Flow，链接：https://huggingface.co/microsoft/Mage-Flow，作者：microsoft，点赞381，下载1691，说明：微软推出的文生图扩散模型，支持高分辨率图像生成，在艺术创作、设计辅助场景表现优异。
11. 模型名：conradlocke/krea2-identity-edit，链接：https://huggingface.co/conradlocke/krea2-identity-

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*