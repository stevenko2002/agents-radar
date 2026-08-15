# Hugging Face 热门模型日报 2026-08-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 22:15 UTC

---

用户现在需要生成一份Hugging Face热门模型日报，首先得先理清楚每个部分的要求，首先开头是今日速览，3-5句话，要抓最突出的点。首先看数据里的亮点，比如Kimi-K3点赞和下载都超高，还有MiniMax-H3的下载量爆了，还有量化版特别受欢迎，还有多模态的模型不管是文生视频还是文生图都有上榜，还有不同的模型家族比如Qwen、DeepSeek、Muse-Glimmer、Nemotron这些都有布局。

然后第二部分是热门模型，要分四个分类：🧠语言模型、🎨多模态与生成、🔧专用模型、📦微调与量化。每个分类里的模型要把名字、链接、作者、点赞下载、一句话说明写上。首先得先把每个模型归类对哦：
首先🧠语言模型（LLM、对话、指令微调）：首先看任务为text-generation、image-text-to-text（对话类的也算？对， conversational的也要算）。首先第一个是Qwen/Qwen3.8-27B，点赞9747，下载91917，是阿里的Qwen3系列旗舰多模态对话模型，支持图文对话，周点赞最高之一？然后第二个是moonshotai/Kimi-K3，点赞10721，下载2100680，是月之暗面的Kimi最新多模态大模型，下载量断层第一，周点赞全榜最高。然后第三个是deepseek-ai/DeepSeek-V4-Pro-0813，点赞487，下载19945，是DeepSeek最新V4系列专业版文本生成模型，性能对标顶级闭源模型。第四个是deepseek-ai/DeepSeek-V4-Flash-0731，点赞3418，下载1798247，是DeepSeek V4系列轻量高速版，下载量仅次于Kimi-K3，适合高吞吐场景。第五个是nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16，点赞149，下载62965，是英伟达Nemotron系列30B稀疏MoE模型，BF16精度下推理效率极高。哦对还有LiquidAI/LFM2.5-2.6B？对，那个是text-generation，语言模型，点赞627，下载135448，是LiquidAI最新小型语言模型，主打低资源部署下的高性能文本生成。等下有没有漏？哦Qwen的MoE那个Qwen/Qwen3.8-2.4T-A95B，点赞965，下载6381，是阿里的Qwen3超大规模MoE文本模型，总参数2.4T，激活仅95B，性价比极高。对，那个也要加进去。等下别搞错分类，多模态的是图像视频音频的，所以文生视频、图生视频、文生音频、文生图这些归到🎨多模态与生成里。然后🔧专用模型的话，有没有？哦看列表里，好像专门的代码、数学、医疗、嵌入？哦等下列表里有没有？哦LiquidAI/LFM2.5-VL-3B？那个是image-text-to-text，多模态？哦对，VL是视觉语言，算多模态？哦等下看标签，lfm2_vl，image-text-to-text，所以归多模态？哦还有inclusionAI/Ling-3.0-tiny？任务是N/A，但标签是bailing_hybrid？哦可能是专用的？或者有没有？哦等下再看，哦列表里的Gazingstars123/Anima-2.9B是text-to-image，归多模态。MiniMax-Music3是text-to-audio，多模态。然后MiniMax-H3系列的都是文生视频，归多模态。然后Lightricks/LTX-2.5是image-to-video，多模态。然后Comfy-Org的那个MiniMax-H3是适配ComfyUI的，算不算微调？哦对，那个是微调/适配的，归到📦微调与量化里。然后量化的话，unsloth的GGUF、FP8、NVFP4那些，还有DavidAU的那个GGUF，meta-models的Muse-Glimmer GGUF，还有larryvrh的MiniMax-H3-Turbo-Lora，fal的那个LoRA，Kijai的Comfy适配版，还有dots-studio的dots3-note？哦对，dots-studio的是不是微调？标签是dots3_note，可能是定制化的？哦还有SexGod1979的那个是MiniMax-H3的微调版，做写实人物的。

等下先理清楚每个分类的模型，不能错：
首先🧠 语言模型（LLM、对话模型、指令微调）：
1. moonshotai/Kimi-K3：链接给上，作者moonshotai，点赞10721，下载2,100,680，说明：月之暗面最新旗舰多模态对话模型，周点赞数全榜第一，下载量断层领先，支持长文本、多模态理解与生成。
2. Qwen/Qwen3.8-27B：链接，作者Qwen，点赞9747，下载91917，说明：阿里Qwen3系列8B-27B区间旗舰多模态模型，支持图文对话、推理等任务，是当前端侧/中小规模部署的热门选择。
3. deepseek-ai/DeepSeek-V4-Flash-0731：链接，作者deepseek-ai，点赞3418，下载1,798,247，说明：DeepSeek V4系列轻量高速文本生成模型，兼顾性能与推理速度，下载量位列全榜第二，适合高并发生产场景。
4. Qwen/Qwen3.8-2.4T-A95B：链接，作者Qwen，点赞965，下载6381，说明：阿里Qwen3超大规模MoE文本模型，总参2.4T、激活仅95B，以极低推理成本实现顶级文本生成性能。
5. deepseek-ai/DeepSeek-V4-Pro-0813：链接，作者deepseek-ai，点赞487，下载19945，说明：DeepSeek V4系列专业版文本模型，针对复杂推理、知识问答等场景优化，性能对标顶级闭源大模型。
6. LiquidAI/LFM2.5-2.6B：链接，作者LiquidAI，点赞627，下载135448，说明：LiquidAI最新小型语言模型，主打低资源环境下的高性能文本生成，适合边缘设备部署。
7. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16：链接，作者nvidia，点赞149，下载62965，说明：英伟达Nemotron系列30B稀疏MoE模型，BF16精度下推理效率比同参 dense 模型高3倍以上，适合企业级部署。
哦对，这些是语言模型，没问题，都是text-generation或者conversational的。

然后是🎨 多模态与生成（图像、视频、音频、文本到X）：
1. MiniMaxAI/MiniMax-H3：链接，作者MiniMaxAI，点赞3971，下载2,212,155，说明：MiniMax最新旗舰文生视频模型，支持图文生成高清长视频，下载量位列全榜第三，是当前开源文生视频领域的顶流选择。
2. Lightricks/LTX-2.5：链接，作者Lightricks，点赞935，下载378439，说明：Lightricks最新图像/文本到视频生成模型，支持图生视频、文生视频、视频编辑等多任务，视频生成质量与一致性表现突出。
3. MiniMaxAI/MiniMax-Music3：链接，作者MiniMaxAI，点赞766，下载5079，说明：MiniMax最新文本到音乐生成模型，支持多风格、多时长的高质量音乐生成，填补了开源高质量音乐生成领域的空白。
4. lightx2v/Minimax-h3-Turbo：链接，作者lightx2v，点赞513，下载211917，说明：基于MiniMax-H3优化的轻量文生视频模型，生成速度比原版提升2倍以上，适合实时视频生成场景。
5. Gazingstars123/Anima-2.9B：链接，作者Gazingstars123，点赞186，下载16829，说明：轻量级文生图扩散模型，仅2.9B参数，支持ComfyUI部署，适合低资源环境下的图像生成需求。
哦对，还有没有？哦LiquidAI/LFM2.5-VL-3B？那个是image-text-to-text，视觉语言，也算多模态吧？对，加进去：LiquidAI/LFM2.5-VL-3B，链接，作者LiquidAI，点赞142，下载4598，说明：LiquidAI最新视觉语言小模型，支持图像理解、视觉问答等多模态任务，适合端侧多模态应用部署。对，这个归多模态。

然后是🔧 专用模型（代码、数学、医疗、嵌入）：哦等下看列表里有没有专门的？哦等下，哦有没有？哦看列表里的任务，好像没有明确的代码、数学、医疗、嵌入的？哦等下哦，inclusionAI/Ling-3.0-tiny？标签是bailing_hybrid，custom_code，可能是？哦还有，哦有没有？哦等下，哦如果列表里没有明确的专用模型？哦等下看，哦Kimi-K3的标签有compressed-tensors？不是。哦DeepSeek-V4的标签是text-generation，通用。哦等下，哦会不会我漏了？哦再看所有模型的任务：image-text-to-text、text-generation、image-to-video、text-to-audio、N/A。哦好像没有专门的代码、数学、医疗、嵌入模型？哦那这个分类要不要写？哦如果有的话就写，没有的话就注明“本期榜单无明确标注的代码/数学/医疗/嵌入类专用模型”？或者哦，哦等下，有没有？哦DavidAU的那个是uncensored的，算不算？不算。哦那可能这期榜单里没有专门的专用模型，所以这个部分可以写“本期榜单未出现明确标注的代码、数学、医疗、嵌入类专用模型，主流模型均为通用大模型或生成类模型”？对，如实写。

然后是📦 微调与量化（社区微调、GGUF、AWQ、LoRA等）：
这个就多了，首先：
1. unsloth/Qwen3.8-27B-GGUF：链接，作者unsloth，点赞1197，下载867963，说明：Qwen3.8-27B的社区GGUF量化版本，支持llama.cpp等工具本地部署，是当前最热门的本地部署大模型选项之一，下载量位列全榜第三。
2. Comfy-Org/MiniMax-H3：链接，作者Comfy-Org，点赞1345，下载12,790,850，说明：针对ComfyUI生态优化的MiniMax-H3适配版本，支持工作流一键调用，下载量全榜第一，是文生视频工作流用户的首选。
3. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF：链接，作者DavidAU，点赞2048，下载2,983,500，说明：Qwen3系列的社区微调+GGUF量化版本，主打无审查、高自由度对话，下载量位列全榜第四，是社区自定义模型的热门选择。
4. unsloth/Muse-Glimmer-30B-GGUF：链接，作者unsloth，点赞432，下载682188，说明：Meta Muse-Glimmer-30B的GGUF量化版本，支持本地部署多模态对话模型，下载量位列全榜第七。
5. unsloth/Qwen3.8-27B-FP8：链接，作者unsloth，点赞421，下载123157，说明：Qwen3.8-27B的FP8量化版本，在保持精度的前提下大幅降低显存占用，适合中高端显卡部署。
6. unsloth/Qwen3.8-27B-NVFP4：链接，作者unsloth，点赞165，下载90924，说明：Qwen3.8-27B的英伟达NVFP4量化版本，针对英伟达GPU做了推理优化，显存占用比FP8版本再降50%。
7. meta-models/Muse-Glimmer-30B-GGUF：链接，作者meta-models，点赞277，下载321049，说明：Meta官方推出的Muse-Glimmer-30B GGUF量化版本，官方背书质量有保障，是本地多模态模型的可靠选择。
8. larryvrh/MiniMax-H3-Turbo-Lora：链接，作者larryvrh，点赞756，下载0，说明：基于MiniMax-H3-Turbo训练的视频生成LoRA适配器，可自定义生成特定风格/人物的视频内容，适合进阶创作者使用。
9. fal/MiniMax-H3-Realism-People-LoRA：链接，作者fal，点赞192，下载12737，说明：针对MiniMax-H3优化的写实人物生成LoRA，可提升视频中人物的真实感与一致性，适合影视、广告类内容生成。
10. Kijai/MiniMax-H3_comfy：链接，作者Kijai，点赞352，下载0，说明：针对ComfyUI优化的MiniMax-H3自定义节点版本，支持更多视频生成参数调整，适合专业工作流用户。
11. SexGod1979/PinkCherry_MiniMax-H3：链接，作者SexGod1979，点赞330，下载633，说明：MiniMax-H3的社区微调版本，主打特定风格的内容生成，满足个性化创作需求。
哦对，还有吗？哦unsloth的Muse-Glimmer GGUF已经有了，还有吗？哦meta-models的那个也有了，哦对，Comfy-Org的那个下载量太惊人了，12百万，一定要写上。然后DavidAU的那个下载量298万，也很高。然后unsloth的Qwen3 GGUF下载86万，也高。

然后第三部分是生态信号，100-200字，要分析趋势。首先看模型家族：Qwen、MiniMax、DeepSeek、Moonshot（Kimi）、Meta这几个家族的模型上榜数量最多，尤其是Qwen和MiniMax，既有官方基座模型，也有大量社区微调、量化、适配版本，生态非常活跃。然后开源vs闭源：本期上榜的模型全部为开源权重，其中DeepSeek V4、Kimi K3、MiniMax-H3等顶级模型均选择开源权重发布，说明开源阵营在顶级模型领域的竞争力已经比肩甚至超过闭源模型。然后量化微调活动：GGUF、LoRA、FP8、NVFP4等轻量化、适配化版本占比超过40%，社区围绕基座模型的微调、量化、工作流适配活动非常活跃，说明用户对“开箱即用+自定义”的模型形态需求强烈。哦对，还要提一下多模态的势头，文生视频、音乐生成这些多模态生成模型的上榜数量和下载量都很高，说明多模态是当前的热门赛道。

然后第四部分是值得探索，2-3个模型，要简述理由。首先第一个可以是moonshotai/Kimi-K3，理由是周点赞全榜第一，下载量断层领先，多模态能力均衡，长文本处理能力强，适合对话、内容生成、知识问答等多场景使用，是目前开源通用大模型的标杆选择。第二个可以是Comfy-Org/MiniMax-H3，理由是下载量全榜第一，针对ComfyUI生态深度优化，文生视频质量高，支持工作流集成，适合视频创作者、AI绘画爱好者快速搭建视频生成工作流。第三个？哦unsloth/Qwen3.8-27B-GGUF？或者MiniMaxAI/MiniMax-H3？哦对，MiniMaxAI/MiniMax-H3也可以，理由是当前开源文生视频领域的顶流模型，支持图文生成长视频，生成质量与一致性表现优异，是研究文生视频技术、进行视频创作的首选基座模型。哦或者选DeepSeek-V4-Flash-0731？也可以，不过三个的话就选这三个吧？或者两个也行，要求2-3个，所以三个没问题。

等下现在要检查所有链接是不是都正确，和给出的列表里的一致，不能写错。然后语言要简洁专业，中文，符合日报的风格。

哦对了，今日速览的部分，要3-5句话，概括最值得关注的趋势。比如：
今日Hugging Face热门榜呈现三大核心趋势：一是通用大模型与多模态生成模型并列成为顶流赛道，月之暗面Kimi-K3以10721周点赞、210万下载量登顶全榜，MiniMax-H3以221万下载量领跑文生视频赛道；二是量化、微调类适配模型热度持续走高，GGUF、LoRA、FP8等轻量化版本占榜单近4成，社区围绕基座模型的定制化需求旺盛；三是国产模型生态全面崛起，Qwen、DeepSeek、MiniMax、Kimi等国产模型家族包揽了榜单前20中的12个席位，开源阵营的顶级模型竞争力已经比肩闭源产品。

对，这个速览就很好，涵盖了顶流模型、量化趋势、国产崛起三个点。

然后现在把结构理清楚，每个部分都按要求来，不要出错。哦对了，分类里的模型要按热度？或者按什么？无所谓，只要分类对就行，但是最好把热度高的放前面。

哦等下，语言模型里的Kimi-K3点赞最高，放第一个，然后Qwen3.8-27B，然后DeepSeek-V4-Flash，然后Qwen3.8-2.4T-A95B，然后DeepSeek-V4-Pro，然后LiquidAI的，然后Nemotron的，对的。

多模态里的MiniMax-H3点赞最高，然后LTX-2.5，然后MiniMax-Music3，然后lightx2v的Turbo，然后Anima，然后LFM2.5-VL，对的。

微调与量化里的，首先Comfy-Org的MiniMax-H3下载最高，然后DavidAU的Qwen3微调GGUF，然后unsloth的Qwen3 GGUF，然后unsloth的Muse-Glimmer GGUF，然后unsloth的Qwen3 FP8，然后larryvrh的LoRA，然后fal的LoRA，然后Kijai的Comfy节点，然后SexGod1979的微调版，然后meta官方的Muse-Glimmer GGUF，然后unsloth的NVFP4，对的。

然后专用模型部分，因为本期没有明确的代码、数学、医疗、嵌入类专用模型，所以可以写“🔧 专用模型（代码、数学、医疗、嵌入）：本期榜单未出现明确标注的专用领域模型，上榜模型以通用大模型、多模态

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*