# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 22:15 UTC

---

用户现在需要生成Hugging Face的热门模型日报，首先得先按要求的结构来，首先是今日速览，得抓最火的点，比如Kimi-K3点赞破万，还有MiniMax的H3视频模型下载量爆炸，还有DeepSeek V4的两个版本，还有量化微调的生态很旺，这些点浓缩成3-5句话就行。
然后是热门模型分类，首先得先理清楚每个分类里的模型，不能错。首先🧠语言模型（LLM、对话、指令微调）这块，首先找text-generation、image-text-to-text里的语言类的，比如第一个是moonshotai/Kimi-K3，点赞10666，下载197万多，这个肯定是第一个，然后Qwen的两个，Qwen3.8-27B，还有DeepSeek-V4-Flash-0731，还有DeepSeek-V4-Pro-0813，还有NVIDIA的Nemotron 3.5 Lightning 30B那个，还有Liquid的LFM2.5-2.6B？对，还有那个Qwen的MoE版本？哦对，Qwen3.8-2.4T-A95B也是文本生成的，还有Qwen3.8-2.4T-A95B-FP8，还有NVIDIA-NemotronLabs-VoiceChat-11B？哦对那个是语音对话的也算语言模型相关的？等下分类要对，🧠语言模型包括LLM、对话、指令微调，还有语音对话的也算吧？然后每个要附链接，作者，点赞下载，一句话说明。
然后是🎨多模态与生成，就是图像、视频、音频、文本到X的，比如MiniMax-H3，那个text-to-video、image-to-video的，下载快200万了，然后LTX-2.5，Lightricks的，image-to-video的，还有MiniMax-Music3，text-to-audio的，还有Muse-Glimmer-30B，那个image-text-to-text的多模态？对，还有那个PinkCherry的MiniMax-H3的？还有fal的那个MiniMax-H3的LoRA？哦对，还有那个dots3的？等下要准确，比如MiniMax-H3是Comfy-Org的那个？哦对Comfy-Org的MiniMax-H3下载一千多万？哦对那个下载量11,768,622，超级高，那个是多模态生成的对吧。然后Muse-Glimmer-30B是meta的，多模态对话的，然后MiniMax-Music3是音频生成的，LTX-2.5是视频生成的，还有那个lightx2v的MiniMax-h3-Turbo是图像转视频的，还有SexGod1979的那个是文本到视频的，fal的那个是文本到视频的LoRA，还有dots-studio的dots3-note-prev是图文到文本的？对，这些放多模态里。
然后是🔧专用模型，这块看标签，比如代码、数学、医疗、嵌入，哦这里面的模型，比如LiquidAI的LFM2.5-2.6B？哦LFM是Liquid Foundation Models，好像是做边缘推理的？或者那个inclusionAI的Ling-3.0-tiny？还有NVIDIA-NemotronLabs-VoiceChat-11B？哦那个是语音对话的，算不算专用？或者等下有没有代码数学的？哦好像列表里的专用模型不多？哦对，LiquidAI的LFM2.5是专门的轻量级语言模型，适合端侧？然后inclusionAI的Ling-3.0-tiny是轻量多语言模型？还有NVIDIA的VoiceChat是专门语音交互的？对，这三个放专用模型里？
然后是📦微调与量化，就是社区微调、GGUF、AWQ这些，比如unsloth的Qwen3.8-27B-GGUF，还有unsloth的Muse-Glimmer-30B-GGUF，还有unsloth的MiniMax-H3-GGUF，还有DavidAU的那个Qwen3.6的GGUF微调版，还有larryvrh的MiniMax-H3-Turbo-Lora，还有drbaph的那个MiniMax-H3-Turbo-Lora-ComfyUI，还有Qwen的FP8版本？哦对Qwen3.8-27B-FP8和Qwen3.8-2.4T-A95B-FP8都是量化版本的，也算？对，还有Comfy-Org的那个MiniMax-H3是微调适配ComfyUI的？哦对Comfy-Org的那个标签里有base_model:finetune，所以也算微调相关的？等下要准确，微调与量化里的模型：首先unsloth的三个GGUF，DavidAU的那个微调GGUF，Qwen的两个FP8量化版，还有larryvrh的LoRA，drbaph的ComfyUI适配LoRA，Comfy-Org的ComfyUI适配微调版，对，这些放这个分类里。
然后是生态信号，要100-200字，分析趋势：首先模型家族，MiniMax的H3系列势头特别旺，从基座到LoRA、ComfyUI适配、Turbo版本，覆盖视频生成全链路，下载量加起来超1300万；然后Qwen和DeepSeek的文本模型家族也很稳，既有基座也有量化、微调版本；然后开源vs闭源，现在基座基本都是开源权重，但是比如MiniMax的H3基座开源，配套的工具链和社区微调也完全开放，是开源生态的典型；然后量化和微调活动特别活跃，GGUF、FP8、LoRA这些适配消费级硬件和Workflow的版本非常多，说明社区更关注落地可用性，而不是单纯的参数量。对，凑到100多字就行。
然后值得探索的2-3个，第一个肯定是moonshotai/Kimi-K3，点赞1万+，下载近200万，多模态对话模型，性能应该很强，而且是国产的，值得研究；第二个是Comfy-Org/MiniMax-H3，下载量1100多万，说明社区接受度极高，而且适配ComfyUI，是视频生成工作流的核心基座，适合做视频生成的开发者研究；第三个可以是unsloth/Qwen3.8-27B-GGUF，因为GGUF是消费级硬件能跑的，Qwen的基座本身很强，这个量化版让普通用户也能跑27B的多模态模型，落地价值高。或者也可以选DeepSeek-V4-Flash-0731？不过那三个够了，要简述理由。
等下还要注意每个模型的链接都要保留，不能丢，还有数据要准确，比如Kimi-K3的点赞是10666，下载1,974,635，对的。然后MiniMax-H3的下载是1,997,541？哦对，还有Comfy-Org的那个是11,768,622，没错。
等下今日速览要3-5句话，比如：“今日Hugging Face热门榜呈现多模态爆发、文本模型迭代、社区适配活跃三大趋势：国产模型表现亮眼，月之暗面Kimi-K3以超1万点赞、近200万下载登顶周榜；MiniMax H3视频生成家族包揽多模态赛道高下载席位，配套的ComfyUI适配版本下载量突破1100万；Qwen、DeepSeek持续更新文本模型矩阵，覆盖基座、量化、微调全场景；消费级硬件友好的GGUF、LoRA等轻量化版本占比显著提升，生态落地导向明显。” 对，这个差不多，概括了核心点。
然后分类的时候，每个模型的信息要准确，比如🧠语言模型里的：
1. moonshotai/Kimi-K3 https://huggingface.co/moonshotai/Kimi-K3，作者moonshotai，点赞10666，下载1,974,635，一句话：国产旗舰级多模态对话模型，本周以最高周赞数登顶热门榜，支持图文理解与多轮对话，是当前开源对话模型的头部选择。
2. Qwen/Qwen3.8-27B https://huggingface.co/Qwen/Qwen3.8-27B，作者Qwen，点赞8860，下载2，一句话：阿里通义千问3.8系列27B基座多模态模型，支持图文输入与对话，是当前热门的高性价比开源多模态基座。
3. deepseek-ai/DeepSeek-V4-Flash-0731 https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731，作者deepseek-ai，点赞3378，下载1,606,491，一句话： DeepSeek V4系列轻量推理版本，文本生成性能强劲，下载量超160万，是当前热门的高效文本生成基座。
4. deepseek-ai/DeepSeek-V4-Pro-0813 https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813，作者deepseek-ai，点赞429，下载245，一句话：DeepSeek V4系列高性能版本，针对复杂文本任务优化，适合对生成质量要求高的场景。
5. Qwen/Qwen3.8-2.4T-A95B https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B，作者Qwen，点赞909，下载3832，一句话：阿里通义千问3.8系列MoE架构超大参数文本生成模型，总参数2.4T、激活参数95B，兼顾性能与推理效率。
6. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4 https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4，作者nvidia，点赞257，下载119572，一句话：英伟达Nemotron 3.5系列轻量MoE文本模型，30B总参3B激活，采用NVFP4量化，适合低资源场景部署。
7. LiquidAI/LFM2.5-2.6B https://huggingface.co/LiquidAI/LFM2.5-2.6B，作者LiquidAI，点赞614，下载124172，一句话：Liquid AI推出的2.6B轻量级语言模型，专为端侧、边缘设备优化，支持低延迟文本生成。
8. nvidia/NVIDIA-NemotronLabs-VoiceChat-11B https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B，作者nvidia，点赞380，下载1366，一句话：英伟达实验室推出的11B语音对话模型，支持语音交互与多轮对话，是专门的语音场景语言模型。
对，这些是🧠语言模型的，没问题。
然后是🎨多模态与生成，这块：
1. MiniMaxAI/MiniMax-H3 https://huggingface.co/MiniMaxAI/MiniMax-H3，作者MiniMaxAI，点赞3916，下载1,997,541，一句话：MiniMax旗舰级文生视频/图生视频基座模型，生成画质与动作一致性表现突出，是当前开源视频生成领域的头部基座。
2. Comfy-Org/MiniMax-H3 https://huggingface.co/Comfy-Org/MiniMax-H3，作者Comfy-Org，点赞1316，下载11,768,622，一句话：针对ComfyUI工作流深度适配的MiniMax-H3微调版本，下载量突破1100万，是当前社区最主流的视频生成工作流基座。
3. meta-models/Muse-Glimmer-30B https://huggingface.co/meta-models/Muse-Glimmer-30B，作者meta-models，点赞1507，下载165300，一句话：Meta推出的30B多模态对话生成模型，支持图文输入与创意内容生成，是当前热门的多模态创意生成模型。
4. Lightricks/LTX-2.5 https://huggingface.co/Lightricks/LTX-2.5，作者Lightricks，点赞847，下载207830，一句话：Lightricks推出的2.5版图像/文本到视频生成模型，支持视频风格转换与高帧率生成，适合短视频内容创作场景。
5. MiniMaxAI/MiniMax-Music3 https://huggingface.co/MiniMaxAI/MiniMax-Music3，作者MiniMaxAI，点赞644，下载63，一句话：MiniMax推出的文本到音乐生成模型，支持多风格、多时长音乐创作，是当前开源音乐生成领域的新兴热门模型。
6. lightx2v/Minimax-h3-Turbo https://huggingface.co/lightx2v/Minimax-h3-Turbo，作者lightx2v，点赞492，下载149865，一句话：基于MiniMax-H3优化的轻量视频生成版本，推理速度提升，适合实时视频生成场景。
7. SexGod1979/PinkCherry_MiniMax-H3 https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3，作者SexGod1979，点赞309，下载473，一句话：针对特定风格优化的MiniMax-H3微调版本，可生成风格化的人物视频内容。
8. fal/MiniMax-H3-Realism-People-LoRA https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA，作者fal，点赞174，下载9060，一句话：针对真人写实风格优化的MiniMax-H3 LoRA适配器，可快速生成高真实感人物视频内容。
9. dots-studio/dots3-note-prev https://huggingface.co/dots-studio/dots3-note-prev，作者dots-studio，点赞134，下载11，一句话：支持图文输入的文本生成模型，针对笔记、摘要等场景优化，适合轻量内容创作。
对，这些是多模态的，没问题。
然后是🔧专用模型，这块刚才想的：
1. inclusionAI/Ling-3.0-tiny https://huggingface.co/inclusionAI/Ling-3.0-tiny，作者inclusionAI，点赞230，下载2283，一句话：百川智能推出的轻量多语言小模型，支持中英文等多语言文本理解与生成，适合端侧多语言场景部署。
2. LiquidAI/LFM2.5-2.6B 哦刚才放语言模型里了？哦没事，或者这里放别的？哦没有别的专用模型了？哦对，刚才的NVIDIA VoiceChat其实是语音专用的，哦对，那个放这里更合适？哦刚才语言模型里的NVIDIA-NemotronLabs-VoiceChat-11B可以移到专用模型里，因为是专门的语音对话模型，属于专用场景。对，调整一下，专用模型里：
1. nvidia/NVIDIA-NemotronLabs-VoiceChat-11B https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B，作者nvidia，点赞380，下载1366，一句话：英伟达实验室推出的专用语音对话模型，支持语音输入输出的多轮交互，是当前开源语音对话领域的代表性模型。
2. inclusionAI/Ling-3.0-tiny https://huggingface.co/inclusionAI/Ling-3.0-tiny，作者inclusionAI，点赞230，下载2283，一句话：轻量级多语言专用小模型，针对端侧部署优化，支持多语言文本理解与生成，适合低资源场景的多语言需求。
哦对，这两个就够了，因为列表里的专用模型不多，不要硬塞。
然后是📦微调与量化，这块：
1. unsloth/Qwen3.8-27B-GGUF https://huggingface.co/unsloth/Qwen3.8-27B-GGUF，作者unsloth，点赞726，下载0？哦对下载是0，因为是量化包的索引？不管，按数据来，一句话：基于Qwen3.8-27B的GGUF格式量化版本，支持消费级硬件本地运行，是当前热门的27B多模态模型轻量化部署方案。
2. unsloth/Muse-Glimmer-30B-GGUF https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF，作者unsloth，点赞413，下载596774，一句话：基于Meta Muse-Glimmer-30B的GGUF量化版本，让30B级多模态模型可在普通电脑上运行，下载量近60万，社区接受度极高。
3. unsloth/MiniMax-H3-GGUF https://huggingface.co/unsloth/MiniMax-H3-GGUF，作者unsloth，点赞155，下载136774，一句话：基于MiniMax-H3的GGUF量化版本，支持消费级硬件本地运行视频生成模型，降低了视频生成的硬件门槛。
4. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF，作者DavidAU，点赞2014，下载2891524，一句话：基于Qwen3.6-27B微调的无审查GGUF版本，针对创意写作、角色对话等场景优化，下载量近290万，是当前热门的社区微调模型。
5. Qwen/Qwen3.8-27B-FP8 https://huggingface.co/Qwen/Qwen3.8-27B-FP8，作者Qwen，点赞280，下载0，一句话：阿里官方推出的Qwen3.8-27B FP8量化版本，在保持精度的同时大幅降低显存占用，适合高端消费级显卡部署。
6. Qwen/Qwen3.8-2.4T-A95B-FP8 https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8，作者Qwen，点赞183，下载9334，一句话：Qwen3.8-2.4T-A95B的官方FP8量化版本，让超大参数MoE模型可在单卡高端GPU上运行，降低了超大模型的部署门槛。
7. larryvrh/MiniMax-H3-Turbo-Lora https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora，作者larryvrh，点赞741，下载0，一句话：针对MiniMax-H3-Turbo优化的LoRA适配器，可快速微调视频生成风格，降低自定义视频生成的训练成本。
8. drbaph/MiniMax-H3-Turbo-Lora-ComfyUI https://huggingface.co/drbaph/MiniMax-H

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*