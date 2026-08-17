# Hugging Face 热门模型日报 2026-08-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 22:16 UTC

---

用户现在需要我生成一份Hugging Face热门模型日报，首先得按照要求的四个部分来，先理清楚每个部分的要点。
首先是今日速览，要3-5句话，概括最值得关注的趋势。首先看榜首的，Qwen3.8系列还有Kimi-K3，然后多模态的视频音频模型也有热度，还有各种量化微调版本很多，对，要把这些点串起来，比如2026年8月18日的榜单显示，国产大模型家族Qwen与Kimi的旗舰/衍生版本包揽点赞榜前两位，多模态生成赛道视频、音频模型表现抢眼，社区对量化适配、轻量化部署的需求持续高涨，生态内第三方微调、兼容适配类模型占比显著提升。
然后是热门模型分类，四个类别：🧠语言模型，🎨多模态与生成，🔧专用模型？哦等下看30个模型里有没有专用模型？哦好像没有专门的代码数学医疗嵌入的？哦对，看列表里的，哦Ling-3.0？还有LFM2.5？哦等下LFM2.5-VL是多模态，LFM2.5-2.6B是文本生成？哦对，然后🧠语言模型的，首先Kimi-K3，点赞10800，下载216万多，是moonshotai的，任务image-text-to-text？哦对标签有feature-extraction？哦是支持多模态的对话模型吧？然后DeepSeek-V4-Flash-0731，点赞3495，下载197万多，是DeepSeek的文本生成模型，轻量版V4？然后Qwen3.8-27B基础版，点赞10688，下载41万多，图像文本到文本的多模态对话模型。哦还有吗？哦DeepSeek-V4-Pro-0813？点赞572，下载2.5万，是V4的Pro版文本生成。还有LiquidAI的LFM2.5-2.6B，点赞653，下载14万多，是Liquid的轻量文本生成模型。哦对，还有那些量化的要不要放到后面微调量化类？对，语言模型就是原生的官方LLM。
然后是🎨多模态与生成，这个类的：首先是MiniMax-H3，点赞4086，下载240万多，MiniMax的图像文本到视频模型，热度很高。然后Muse-Glimmer-30B，meta的，点赞1660，下载33万多，图像文本到文本多模态对话模型。然后LTX-2.5，Lightricks的，点赞1100，下载46万多，图像到视频生成模型。然后MiniMax-Music3，点赞900，下载1万多，文本到音频音乐生成模型。然后MiniMax-H3-Realism-People-LoRA，fal的，点赞242，下载1.8万，是MiniMax-H3的人像写实LoRA适配。然后Anima-2.9B，点赞233，下载2.3万，文本到图像扩散模型。哦对还有吗？哦LFM2.5-VL-3B？哦那个是多模态，哦对，LiquidAI的那个，要不要放这里？哦它是图像文本到文本，属于多模态，对，点赞162，下载6千多，是Liquid的轻量多模态语言模型。
然后是🔧专用模型，哦看列表里有没有？哦好像没有特别明确的代码数学医疗的？哦等下dots-studio的dots3-note-prev？哦是文本生成？哦标签有dots3，不知道是什么专用？哦还有inclusionAI的Ling-3.0-tiny？哦标签有bailing_hybrid，custom_code，region:us，好像是面向特定区域的轻量模型？哦或者如果没有的话？哦等下再仔细看，哦好像确实没有明确的代码、数学、医疗、嵌入类的，那这个分类下面可以写“本周期暂无明确标注的垂直专用模型上榜，垂直领域模型生态关注度待提升”？哦对，如实来，不要硬凑。
然后是📦微调与量化，这个类就多了：首先unsloth的Qwen3.8-27B-GGUF，点赞1622，下载272万多，是Qwen3.8-27B的GGUF量化版，适配llama.cpp等本地部署工具。然后unsloth的Muse-Glimmer-30B-GGUF，点赞470，下载75万多，是Muse-Glimmer-30B的GGUF量化版。然后Comfy-Org的MiniMax-H3，点赞1402，下载1401万多！哦我的天下载量这么高，是MiniMax-H3的ComfyUI适配版，方便工作流调用。然后Comfy-Org的MiniMax-Music-3，点赞166，下载25万多，是MiniMax-Music3的ComfyUI适配版。然后lightx2v的Minimax-h3-Turbo，点赞583，下载26万多，是MiniMax-H3的加速Turbo版本。然后orcarouter的Qwen3.8-27B-Uncensored-FP8，点赞428，下载1.5万多，是Qwen3.8-27B的去审查FP8量化版。然后JonathanColetti的Qwen3.8-27B-Uncensored-GGUF，点赞295，下载35万多，是Qwen3.8-27B的去审查GGUF量化版。然后unsloth的Qwen3.8-27B-NVFP4，点赞235，下载37万多，是Qwen3.8-27B的NVFP4量化版，适配英伟达硬件。然后DavidAU的Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-那个长名字的，点赞2116，下载303万多，是Qwen3.6系列的社区去审查微调GGUF版。然后larryvrh的MiniMax-H3-Turbo-Lora，点赞786，下载0？哦下载是0？可能是刚发布？是MiniMax-H3-Turbo的LoRA微调版。哦对还有froggeric的Qwen-Fixed-Chat-Templates，点赞1205，下载0，是Qwen系列的聊天模板修复工具，适配mlx框架。哦对还有吗？哦NVIDIA的Nemotron-3.5-Lightning-30B-A3B的两个量化版，NVFP4和BF16的，点赞分别是307和168，下载23万和6万多，是NVIDIA的轻量MoE模型量化版。哦对，这些都要列进去，每个要附链接，作者，点赞下载，一句话说明。
然后是生态信号，100-200字，分析趋势。首先模型家族：Qwen、MiniMax、DeepSeek三大国产家族包揽榜单 majority，其中Qwen的衍生适配版本数量最多，生态兼容性布局领先；然后开源vs闭源：上榜模型全部为开源权重，国产模型开源活跃度显著高于海外厂商，Meta的Muse-Glimmer是少有的海外开源多模态模型；然后量化微调：社区对量化适配、工作流集成、去审查微调的需求极高，GGUF、ComfyUI适配类模型的下载量普遍是基础模型的数倍到数十倍，说明端侧部署、内容创作场景的落地需求强烈。哦对，还要注意字数，控制在100-200。
然后是值得探索的2-3个，第一个肯定是Kimi-K3吧？因为点赞最高，下载也高，而且是国产多模态旗舰，性能应该是第一梯队的，适合研究多模态对话、端侧部署的优化。第二个的话，Comfy-Org的MiniMax-H3，下载量1400多万，说明在AI视频创作工作流里的普及度极高，适合研究视频生成模型的工程化落地、社区生态整合。第三个的话，unsloth的Qwen3.8-27B-GGUF，下载270多万，是Qwen3.8的顶级量化版本，适合研究大模型轻量化部署、端侧推理优化的技术路径。或者DeepSeek-V4-Flash？哦也可以，但选这三个吧，理由要清晰。
等下要注意每个模型的链接都要保留，不能丢。然后语言要简洁专业，中文。
哦对了，分类的时候要注意，🧠语言模型里的，要区分官方原生和微调？不，分类是语言模型就是原生的大语言/对话模型，微调量化的放后面。哦对，刚才的语言模型里的：
1. moonshotai/Kimi-K3：链接https://huggingface.co/moonshotai/Kimi-K3，作者moonshotai，点赞10800，下载2,163,953，一句话：月之暗面旗舰多模态对话模型，支持图像文本混合输入，本周期点赞量登顶榜首，国产多模态大模型竞争力突出的代表。
2. Qwen/Qwen3.8-27B：链接https://huggingface.co/Qwen/Qwen3.8-27B，作者Qwen，点赞10688，下载415,039，一句话：阿里通义千问旗舰多模态对话模型，支持图像文本理解与生成，是当前Qwen3.8系列的基础核心版本。
3. deepseek-ai/DeepSeek-V4-Flash-0731：链接https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731，作者deepseek-ai，点赞3495，下载1,978,298，一句话：DeepSeek轻量版V4文本生成模型，兼顾性能与推理效率，是当前DeepSeek系列中部署门槛最低的公开版本。
4. deepseek-ai/DeepSeek-V4-Pro-0813：链接https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813，作者deepseek-ai，点赞572，下载25,006，一句话：DeepSeek旗舰版V4文本生成模型，对标顶级闭源大模型性能，适合高复杂度文本生成场景研究。
5. LiquidAI/LFM2.5-2.6B：链接https://huggingface.co/LiquidAI/LFM2.5-2.6B，作者LiquidAI，点赞653，下载147,270，一句话：LiquidAI轻量级文本生成模型，参数量仅2.6B，适合边缘端部署与小场景应用。
哦对，还有吗？哦NVIDIA的Nemotron？哦那个是MoE模型，属于语言模型吗？哦对，它的任务是text-generation，是NVIDIA的轻量MoE文本生成模型，不过它的点赞不高，而且有量化版，放语言模型里也可以，不过后面微调量化类也有它的量化版，哦没事，语言模型里可以放原生的，量化版放后面。
然后是🎨多模态与生成类：
1. MiniMaxAI/MiniMax-H3：链接https://huggingface.co/MiniMaxAI/MiniMax-H3，作者MiniMaxAI，点赞4086，下载2,403,238，一句话：MiniMax旗舰图像文本到视频生成模型，支持多模态输入生成高分辨率视频，是当前开源视频生成赛道的头部模型。
2. meta-models/Muse-Glimmer-30B：链接https://huggingface.co/meta-models/Muse-Glimmer-30B，作者meta-models，点赞1660，下载334,099，一句话：Meta开源30B参数多模态对话模型，支持图像文本理解与生成，是海外厂商少有的高热度开源多模态大模型。
3. Lightricks/LTX-2.5：链接https://huggingface.co/Lightricks/LTX-2.5，作者Lightricks，点赞1100，下载465,529，一句话：Lightricks图像到视频生成模型，主打高一致性的视频生成效果，适合短视频、广告内容创作场景。
4. MiniMaxAI/MiniMax-Music3：链接https://huggingface.co/MiniMaxAI/MiniMax-Music3，作者MiniMaxAI，点赞900，下载10,375，一句话：MiniMax文本到音乐生成模型，支持根据文本描述生成多风格音频内容，是开源音乐生成赛道的新兴热门模型。
5. fal/MiniMax-H3-Realism-People-LoRA：链接https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA，作者fal，点赞242，下载18,562，一句话：针对MiniMax-H3的人像写实LoRA微调适配，可大幅提升视频生成中人物形象的真实感。
6. Gazingstars123/Anima-2.9B：链接https://huggingface.co/Gazingstars123/Anima-2.9B，作者Gazingstars123，点赞233，下载23,202，一句话：轻量级文本到图像扩散模型，参数量仅2.9B，适合本地端侧图像生成场景。
7. LiquidAI/LFM2.5-VL-3B：链接https://huggingface.co/LiquidAI/LFM2.5-VL-3B，作者LiquidAI，点赞162，下载6,816，一句话：LiquidAI轻量多模态视觉语言模型，参数量仅3B，支持图像文本理解任务，适合边缘端多模态应用。
哦对，还有那个lightx2v的Minimax-h3-Turbo？哦那个是加速版的视频生成，属于多模态生成里的，哦对，我刚才漏了，lightx2v/Minimax-h3-Turbo，链接https://huggingface.co/lightx2v/Minimax-h3-Turbo，作者lightx2v，点赞583，下载264,351，一句话：MiniMax-H3的加速优化版本，推理速度提升的同时保持生成质量，适合需要高效生成视频的场景。
然后是🔧专用模型，哦刚才看了，确实没有明确标注代码、数学、医疗、嵌入类的，所以可以写“本周期上榜模型中暂无明确标注垂直专用属性的模型，垂直领域大模型的开源生态活跃度仍有提升空间”，然后如果有的话？哦dots-studio的dots3-note-prev，标签有dots3，text-generation，可能是笔记类的？但没明确说，所以还是如实写没有就行。
然后是📦微调与量化类，这个类的模型很多，要列全：
1. unsloth/Qwen3.8-27B-GGUF：链接https://huggingface.co/unsloth/Qwen3.8-27B-GGUF，作者unsloth，点赞1622，下载2,727,609，一句话：Qwen3.8-27B的官方GGUF量化版本，适配llama.cpp、Ollama等本地部署工具，是当前Qwen3.8系列下载量最高的衍生版本。
2. Comfy-Org/MiniMax-H3：链接https://huggingface.co/Comfy-Org/MiniMax-H3，作者Comfy-Org，点赞1402，下载14,015,769，一句话：MiniMax-H3的ComfyUI专用适配版本，内置工作流预设，下载量是基础版的近6倍，是AI视频创作领域普及度最高的适配版本。
3. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF：链接https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF，作者DavidAU，点赞2116，下载3,033,928，一句话：Qwen3.6系列的社区去审查微调GGUF版本，去除内容限制，适合需要自由生成内容的场景。
4. unsloth/Muse-Glimmer-30B-GGUF：链接https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF，作者unsloth，点赞470，下载755,125，一句话：Muse-Glimmer-30B的GGUF量化版本，降低本地部署的硬件门槛，适合普通用户运行该多模态模型。
5. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF：链接https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF，作者JonathanColetti，点赞295，下载357,701，一句话：Qwen3.8-27B的去审查GGUF量化版本，去除内容限制，同时保留多模态能力。
6. unsloth/Qwen3.8-27B-NVFP4：链接https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4，作者unsloth，点赞235，下载378,177，一句话：Qwen3.8-27B的NVFP4量化版本，针对英伟达GPU优化推理速度，适合云端高效部署。
7. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4：链接https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4，作者nvidia，点赞307，下载231,271，一句话：NVIDIA Nemotron-3.5轻量MoE模型的NVFP4量化版本，总参30B但激活仅3B，推理效率极高。
8. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16：链接https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16，作者nvidia，点赞168，下载69,833，一句话：NVIDIA Nemotron-3.5轻量MoE模型的BF16精度版本，适合对生成质量要求高的场景。
9. lightx2v/Minimax-h3-Turbo：哦刚才放多模态里了？哦没事，或者也可以放这里？哦它是优化版本，也算微调适配？哦没事，刚才放多模态里也行，或者这里也可以提，不过不要重复。哦还有orcarouter的Qwen3.8-27B-Uncensored-FP8，链接https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8，作者orcarouter，点赞428，下载15,812，一句话：Qwen3.8-27B的去审查FP8量化版本，兼顾去限制与推理效率。
10. larryvrh/MiniMax-H3-Turbo-Lora：链接https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora，作者larryvrh，点赞786，下载0，一句话：针对MiniMax-H3-Turbo的LoRA微调适配，可定制视频生成的风格与效果。
11. froggeric/Qwen-Fixed-Chat-Templates

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*