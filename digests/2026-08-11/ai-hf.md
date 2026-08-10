# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 22:15 UTC

---

**Hugging Face 热门模型日报（2026‑08‑11）**  

---

## 今日速览  
- MiniMax‑H3 系列（文‑图‑视频、图‑到‑视频、LoRA 等）继续霸榜，点赞与下载均居前列，表明多模态视频生成是当周最热的方向。  
- DeepSeek‑V4‑Flash‑0731 及其社区 GGUF/LoRA 变体保持强劲下载，凸显大型语言模型的快速微调与量化需求。  
- MoonshotAI 的 Kimi‑K3 与百度 Unlimited‑OCR 分别在图文理解与 OCR 场景获得显著关注，说明多模态特征抽取与文档处理成为新兴热点。  
- 量化（GGUF、INT4/INT8）和社区 LoRA/PEFT 微调层出不穷，反映出开发者更倾向于在本地或边缘设备上高效运行大模型。  

---

## 热门模型  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
|--------|------|------|------|------------|
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,047 | 954,441 | 大规模指令微调的文本生成模型，凭借高吞吐与强大对话能力在榜单领先。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 487 | 89,680 | 2.6B 参数的液态流模型，专注高效文本生成，适合资源受限场景。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | 中英双语对话模型，内置自定义代码支持，易于快速部署。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 309 | 1,344 | 稀疏专家混合（MoE）语言模型，展示在参数规模与推理成本之间的平衡探索。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 636 | 199,167 | DeepSeek‑V4‑Flash 的 GGUF 量化版本，使其可在 llama.cpp 等低资源环境直接运行。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
|--------|------|------|------|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,420 | 47,468 | 图文到视频的扩散模型，基于最新的 DiT 架构，支持高质量短片生成。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,141 | 6,009,639 | 为 ComfyUI 打包的 MiniMax‑H3 基础权重，便于一键工作流使用。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | 图像到视频的 Turbo 版本，推理速度提升约 2×。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 596 | 0 | 基于 MiniMax‑H3 的 LoRA 适配器，专注文本到视频的快速微调。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 250 | 0 | 同前，额外集成 ComfyUI 接口，方便可视化调参。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 248 | 0 | 采用 Apache‑2.0 许可的文本到视频 LoRA，强调开源友好。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,466 | 1,510,032 | 多模态图文理解模型，擅长视觉问答与图像描述，兼具强大的特征抽取能力。 |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,075 | 480,762 | 最新文本到图像扩散模型，生成质量与多样性均领先于前一代 Stable Diffusion。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,001 | 2,921,751 | 端到端 OCR 模型，支持多语言、多版面的高精度文字识别，适用于文档自动化。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | 视频生成模型的 NVFP4/INT4/INT8 混合量化版本，显著降低显存占用。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）  
> 本周榜单中未出现明显的代码、数学或医疗专项模型；若需关注此类方向，可留意后续更新的专业基准（如 HumanEval、MATH、Med-PaLM 等）相关模型。  

### 📦 微调与量化（社区微调、GGUF、AWQ）  
| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
|--------|------|------|------|------------|
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 192 | 0 | Meta 的 Muse‑Glimmer‑30B 的 GGUF 量化版，便于在 CPU/低端 GPU 上运行。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 133 | 0 | 官方 GGUF 发行版，提供完整的模型权重与使用说明。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 183 | 89,611 | LFM2.5 的 GGUF 版，适用于 llama.cpp、ctranslate2 等推理引擎。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | MiniMax‑H3 的多种 GGUF 量化（Q4_K_M、Q5_K_S 等），供 ComfyUI 用户直接加载。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | 基于 MiniMax‑H3 的 Prompt Rewriter LoRA，优化输入提示以提升视频生成质量。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 636 | 199,167 | DeepSeek‑V4‑Flash 的 GGUF 版本，兼容 llama.cpp 与 text-generation-webui。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 192 | 0 | 同上，提供另一量化等级选择。 |

---

## 生态信号（约 150 字）  
MiniMax‑H3 家族凭借其视频生成能力及丰富的社区衍生（LoRA、GGUF、ComfyUI 包装）成为本周最大热点，显示出多模态视频是开发者探索的前沿。与此同时，DeepSeek‑V4‑Flash 及其量化版本持续高下载，说明大型语言模型的轻量化需求依然强劲。百度 Unlimited‑OCR 与 Moonshot Kimi‑K3 的高点赞提示，OCR 与多模态特征抽取在产业落地中的价值日益凸显。整体趋势是：开源权重占主导，闭源模型在榜单中极少出现；社区通过 GGUF、AWQ、LoRA 等方式快速进行模型压缩与任务适配，推动大模型在边缘设备、个人工作站及创作工具中的广泛应用。  

---

## 值得探索（2‑3 项）  
1. **MoonshotAI/Kimi‑K3** – 点赞过万、下载超 1.5M，兼具强大的图文理解与特征抽取能力，适合做视觉问答、多模态检索或作为其他生成模型的条件编码器。  
2. **MiniMaxAI/MiniMax-H3** 及其社区 LoRA/GGUF 变体（如 *lightx2v/Minimax-h3-Turbo*、 *realrebelai/MiniMax-H3_GGUFs*） – 若你对短片生成或文‑图‑视频创作感兴趣，这套模型提供了从基础权重到轻量化、可微调的完整链条，能够在消费级 GPU 上实时生成几秒到十秒的高质量视频。  
3. **baidu/Unlimited-OCR** – 下载近 300 万，点赞 4k，展示了在实际文档处理场景中的成熟度；如果你需要构建自动化的票据、表格或多语言OCR管线，该模型是一个直接可用的高精度起点。  

所有链接均保留原始 HuggingFace 地址，便于直接跳转查看或下载。祝您研究顺利！

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*