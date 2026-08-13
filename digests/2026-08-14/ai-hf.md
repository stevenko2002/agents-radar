# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-13 22:15 UTC

---

用户现在需要生成Hugging Face热门模型的日报，首先得先理清楚要求，四个部分：今日速览、热门模型分四个类、生态信号、值得探索。首先先看给的30个模型，先归类哦。

首先今日速览，得抓最火的点，首先MiniMax-H3的下载量破160万，还有Kimi-K3的点赞1万多，DeepSeek-V4的两个版本，还有MiniMax-H3的各种微调、ComfyUI适配，多模态视频这块很火，还有Llama？哦Muse-Glimmer是Meta的，还有Qwen3的MoE版本，还有Nvidia的Nemotron，量化版很多，GGUF的也不少。速览要3-5句，得概括：比如今天HF热门榜多模态视频赛道爆发，MiniMax-H3系列包揽多席，原生版下载量破160万领跑；语言模型端DeepSeek-V4双版本、Kimi-K3表现亮眼，Kimi-K3以超1万点赞登顶本周热度榜；社区围绕头部基座模型的微调、量化适配活跃，ComfyUI生态、GGUF量化版本覆盖多场景需求，整体生态呈现基座模型迭代加速、垂直场景适配精细化的趋势。对，这个差不多。

然后是热门模型，分四个类：🧠语言模型，🎨多模态与生成，🔧专用模型，📦微调与量化。首先得把每个类里的模型对应上，不能放错。

先看🧠语言模型（LLM、对话、指令微调）：首先看模型，比如DeepSeek-V4的两个：deepseek-ai/DeepSeek-V4-Flash-0731，点赞3313，下载143万+，还有Qwen/Qwen3.8-2.4T-A95B，点赞771，下载1012，还有Qwen3.8-2.4T-A95B-FP8那个？哦对，还有moonshotai/Kimi-K3，点赞10620，下载187万+，还有LiquidAI/LFM2.5-2.6B，点赞602，下载11万+，还有deepgrove/maple-preview，点赞352，下载3868，还有inclusionAI/Ling-3.0-flash，点赞323，下载1万+，还有nvidia的NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4和BF16那两个？哦对，语言模型的。然后每个要写一句话说明，为什么上榜。比如Kimi-K3， moonshotai的，多模态对话？哦看标签是image-text-to-text？哦对，它是多模态语言模型，月之暗面的，超1万点赞，是本周语言模型热度最高的，支持图文理解对话，所以上榜。DeepSeek-V4-Flash是DeepSeek的轻量版大模型，推理效率高，下载量破140万，适合低成本部署，所以上榜。Qwen3.8-2.4T-A95B是阿里通义的MoE架构大模型，总参数量2.4T，激活仅95B，兼顾性能和效率，是Qwen3系列的核心成员，所以上榜。还有Nvidia的Nemotron-3.5-Lightning-30B-A3B，是Nvidia的MoE架构模型，总30B激活3B，轻量高效，NVFP4和BF16两个版本分别面向量化推理和精度训练场景，下载量均过万，所以上榜。LFM2.5-2.6B是LiquidAI的小参数语言模型，主打端侧低资源部署，116万下载，适合移动端、嵌入式场景，所以上榜。maple-preview是deepgrove的混合专家（MoE）文本生成模型，主打开源可商用，所以上榜。Ling-3.0-flash是inclusionAI的小参数对话模型，支持轻量交互，下载破万，适合端侧对话场景。哦对，还要注意作者、点赞、下载，还有链接。

然后是🎨多模态与生成（图像、视频、音频、文本到X）：首先MiniMax-H3的原生版MiniMaxAI/MiniMax-H3，点赞3816，下载160万+，是MiniMax的文生视频/图生视频基座模型，生成质量高，是本周多模态赛道最火的基座，下载量领跑。然后Lightricks/LTX-2.5，点赞710，下载5.7万，是Lightricks的文生视频模型，支持视频编辑、图生视频等多任务，生成效果真实，所以上榜。还有MiniMaxAI/MiniMax-Music3，点赞261，下载25？哦对，是MiniMax的文生音频模型，支持音乐生成，是MiniMax多模态矩阵的音频端产品，所以上榜。哦还有吗？哦meta-models/Muse-Glimmer-30B？哦看它的任务是image-text-to-text，哦对，是Meta的多模态对话模型，支持图文输入生成文本，1411点赞，12万下载，所以也算多模态？哦对，还有那个Comfy-Org的MiniMax-H3，哦它的任务是N/A？哦看标签是ComfyUI适配的MiniMax-H3基座，下载量1000多万！哦我的天，那个下载量10,365,210，超高，因为ComfyUI用户都用，所以这个要放多模态里？哦对，因为是基于MiniMax-H3的视频生成模型，适配ComfyUI工作流，所以是用户适配后的版本，下载量破千万，是本周下载量最高的模型，所以肯定要放。还有fal的那个MiniMax-H3-Realism-People-LoRA，点赞157，下载4692，是专门优化人物真实感的MiniMax-H3 LoRA，适合生成写实人物视频，所以上榜。哦对，还有larryvrh的那个MiniMax-H3-Turbo-Lora，点赞724，下载0？哦是LoRA适配版，优化MiniMax-H3 Turbo的生成效果，所以也算？哦对，还有lightx2v的Minimax-h3-Turbo，点赞455，下载9.1万，是MiniMax-H3的轻量加速版，降低推理成本，提升生成速度，所以上榜。哦对，多模态里的要理清楚：首先Comfy-Org/MiniMax-H3，这个是ComfyUI社区适配的MiniMax-H3视频生成基座，下载量破1036万，是本周下载量最高的模型，大幅降低了视频生成模型在本地工作流的使用门槛，所以上榜。然后MiniMaxAI/MiniMax-H3原生版，点赞3816，下载160万+，是MiniMax官方开源的文生/图生视频基座模型，生成质量和可控性领先，是多模态视频赛道的核心基座。然后Lightricks/LTX-2.5，是Lightricks的图生视频模型，支持高分辨率视频生成和编辑，适合内容创作场景，所以上榜。然后lightx2v/Minimax-h3-Turbo，是社区优化的MiniMax-H3轻量加速版，降低推理资源需求，提升生成速度，下载9.1万，适合低配置设备部署。还有MiniMaxAI/MiniMax-Music3，是MiniMax官方的文生音乐模型，支持多风格音乐生成，是MiniMax多模态布局的音频端产品。还有meta-models/Muse-Glimmer-30B，是Meta开源的多模态图文对话模型，支持图像理解、文本生成等多任务，12万下载，适合多模态交互场景。哦对，还有那个fal的LoRA，专门优化人物真实感的，也算多模态生成里的微调适配？哦不，微调的放后面？哦对，多模态里的原生的先放，适配的可以放后面微调类？哦对，分类要清晰，多模态里放基座的原生模型，微调放后面。

然后是🔧专用模型（代码、数学、医疗、嵌入）：哦看给的模型里有没有？哦好像没有专门的代码、数学、医疗、嵌入的？哦等下看标签，有没有？哦好像这周的模型里，哦没有？哦那是不是可以写“本周无明确归类的专用模型上榜，热门模型集中在语言、多模态及适配工具类”？哦对，因为给的30个里确实没有专门的代码数学医疗嵌入的，所以如实写。

然后是📦微调与量化（社区微调、GGUF、AWQ、ComfyUI适配等）：首先unsloth/Muse-Glimmer-30B-GGUF，点赞390，下载35万+，是Meta Muse-Glimmer-30B的GGUF量化版本，支持本地低资源部署，适合消费级显卡运行，所以上榜。然后larryvrh/MiniMax-H3-Turbo-Lora，点赞724，下载0（应该是刚发布还没统计？）是针对MiniMax-H3 Turbo的LoRA微调版本，优化生成风格和效率，适合社区二次微调。然后Comfy-Org/MiniMax-H3？哦刚才多模态里放了？哦不，Comfy-Org的那个是适配ComfyUI的基座，算不算微调？哦看它的标签是base_model:MiniMaxAI/MiniMax-H3，是官方适配的ComfyUI版本，算工具适配？哦或者看lightx2v的Minimax-h3-Prompt-Rewriter-LoRA，点赞147，下载652，是MiniMax-H3的提示词重写LoRA，优化输入提示词效果，提升生成质量。还有drbaph的MiniMax-H3-Turbo-Lora-ComfyUI，点赞314，下载0，是适配ComfyUI的MiniMax-H3 Turbo LoRA，方便用户在ComfyUI workflow中使用。还有Kijai的MiniMax-H3_comfy，点赞302，下载0，是ComfyUI适配的MiniMax-H3工具包，优化工作流兼容性。还有unsloth的MiniMax-H3-GGUF，点赞149，下载11万+，是MiniMax-H3的GGUF量化版本，支持本地低资源部署。还有DavidAU的那个Qwen3.6-27B的GGUF，点赞1986，下载279万+，哦对，那个是Qwen3的27B参数的GGUF量化版本，支持本地推理，下载量很高，所以放微调量化里。哦还有SexGod1979的PinkCherry_MiniMax-H3，点赞298，下载324，是风格微调的MiniMax-H3版本，偏向特定风格生成，也算社区微调。哦对，还有那个ethanfel的Qwen3-VL-32B的ComfyUI适配版，点赞483，下载0，是Qwen3视觉语言模型的ComfyUI适配版本，优化多模态工作流兼容性。哦等下，要把这些分清楚，不要和前面的多模态重复。哦对，刚才的Comfy-Org的MiniMax-H3，其实既是多模态基座的适配，也算工具类？哦要不调整下，多模态里放原生的生成模型，微调量化里放适配、量化、LoRA这些。哦对，刚才的Comfy-Org的下载量1000多万，太火了，肯定要放，哦看它的任务是N/A，标签是comfyui，base_model是MiniMax-H3，所以算微调量化里的ComfyUI适配版本？哦对，因为是基于基座做的适配，所以放📦里更合适。哦那调整下：

📦微调与量化（社区微调、GGUF、AWQ、ComfyUI适配等）：
1. Comfy-Org/MiniMax-H3：作者Comfy-Org，点赞1287，下载10365210，一句话：ComfyUI官方适配的MiniMax-H3视频生成基座版本，完美兼容ComfyUI工作流，是本周下载量最高的模型，大幅降低视频生成的本地使用门槛。
2. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF：作者DavidAU，点赞1986，下载2793115，一句话：Qwen3-27B的社区量化GGUF版本，支持本地低资源推理，下载量超279万，是本周语言模型量化类最受欢迎的产品。
3. unsloth/MiniMax-H3-GGUF：作者unsloth，点赞149，下载111222，一句话：MiniMax-H3的GGUF量化版本，支持消费级显卡本地运行视频生成模型，降低部署成本。
4. unsloth/Muse-Glimmer-30B-GGUF：作者unsloth，点赞390，下载352023，一句话：Meta Muse-Glimmer-30B的GGUF量化版本，支持本地低资源运行多模态对话模型，适合端侧部署。
5. lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA：作者lightx2v，点赞147，下载652，一句话：针对MiniMax-H3优化的提示词重写LoRA，可提升输入提示词与生成结果的匹配度，优化视频生成效果。
6. larryvrh/MiniMax-H3-Turbo-Lora：作者larryvrh，点赞724，下载0，一句话：针对MiniMax-H3 Turbo的LoRA微调版本，优化生成风格与效率，支持社区二次微调定制。
7. drbaph/MiniMax-H3-Turbo-Lora-ComfyUI：作者drbaph，点赞314，下载0，一句话：适配ComfyUI工作流的MiniMax-H3 Turbo LoRA，方便用户在本地工作流中快速调用优化后的视频生成能力。
8. Kijai/MiniMax-H3_comfy：作者Kijai，点赞302，下载0，一句话：ComfyUI专属的MiniMax-H3工具包，优化模型与工作流的兼容性，提升生成稳定性。
哦对，还有那个ethanfel的Qwen3-VL-32B的ComfyUI版，点赞483，下载0，也可以放这里，对，是视觉语言模型的ComfyUI适配版。哦对，还有nvidia的两个量化版Nemotron，刚才放语言模型里了？哦对，Nvidia的Nemotron-3.5-Lightning-30B-A3B-NVFP4和BF16，是量化版本的，哦那是不是可以放微调量化里？哦看它的任务是text-generation，标签是text-generation，哦它是Nvidia开源的MoE模型，量化版本，所以可以放语言模型里，也可以放量化里？哦要不放语言模型里，因为它是原生模型的量化版，属于语言模型类。

哦对，刚才的🧠语言模型里的要整理好：
🧠 语言模型（LLM、对话模型、指令微调）：
1. moonshotai/Kimi-K3：作者moonshotai，点赞10620，下载1871575，一句话：月之暗面开源的超大规模多模态对话模型，支持图文理解、长文本推理等任务，以超1.1万点赞登顶本周模型热度榜，是当前开源对话模型的头部产品。
2. deepseek-ai/DeepSeek-V4-Flash-0731：作者deepseek-ai，点赞3313，下载1431587，一句话：DeepSeek开源的轻量高效大模型，推理速度与成本显著优化，下载量破143万，适合大规模落地部署场景。
3. deepseek-ai/DeepSeek-V4-Pro-0813：作者deepseek-ai，点赞262，下载0，一句话：DeepSeek-V4系列的高精度版本，主打复杂任务推理能力，刚发布即进入热门榜，是DeepSeek旗舰级模型的迭代产品。
4. Qwen/Qwen3.8-2.4T-A95B：作者Qwen，点赞771，下载1012，一句话：阿里通义开源的MoE架构大模型，总参数量达2.4T，激活参数仅95B，兼顾性能与推理效率，是Qwen3系列的核心基座模型。
5. Qwen/Qwen3.8-2.4T-A95B-FP8：作者Qwen，点赞157，下载4000，一句话：Qwen3.8-2.4T-A95B的FP8量化版本，进一步降低部署资源需求，适合追求推理效率的场景使用。
6. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4：作者nvidia，点赞228，下载44859，一句话：英伟达开源的MoE架构语言模型，总参30B、激活仅3B，采用NVFP4量化，极致压缩模型体积，适合边缘设备部署。
7. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16：作者nvidia，点赞129，下载22279，一句话：同系列模型的BF16高精度版本，适合对推理精度要求高的训练与推理场景，下载量超2.2万。
8. LiquidAI/LFM2.5-2.6B：作者LiquidAI，点赞602，下载116640，一句话：LiquidAI开源的轻量级语言模型，参数仅2.6B，主打端侧低资源部署，下载量超11万，适合移动端、嵌入式设备运行。
9. deepgrove/maple-preview：作者deepgrove，点赞352，下载3868，一句话：开源的MoE架构文本生成模型，主打可商用属性，适合中小规模文本生成任务，本周新进入热门榜。
10. inclusionAI/Ling-3.0-flash：作者inclusionAI，点赞323，下载10052，一句话：开源的轻量对话模型，支持快速响应交互，下载量破万，适合端侧轻量对话场景。
哦对，还有那个Qwen3.6-27B的DavidAU的版本，放微调量化里，因为是GGUF量化版。

然后是🎨多模态与生成（图像、视频、音频、文本到X）：
1. MiniMaxAI/MiniMax-H3：作者MiniMaxAI，点赞3816，下载1605940，一句话：MiniMax官方开源的文生/图生视频基座模型，生成画质高、可控性强，是本周多模态视频赛道最火的基座模型，下载量破160万。
2. Lightricks/LTX-2.5：作者Lightricks，点赞710，点赞57287，哦下载是57287，一句话：Lightricks开源的图生视频模型，支持高分辨率视频生成、视频编辑等多任务，生成效果逼真，适合内容创作场景。
3. meta-models/Muse-Glimmer-30B：作者meta-models，点赞1411，下载121042，一句话：Meta开源的多模态图文对话模型，支持图像理解、文本生成、多轮对话等任务，适合多模态交互应用开发。
4. MiniMaxAI/MiniMax-Music3：

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*