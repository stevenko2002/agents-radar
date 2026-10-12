# Hugging Face 热门模型日报 2026-10-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 22:15 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-13 ｜ 样本：Hub 周趋势榜 Top 30**

---

## 一、今日速览

1. **Qwen 家族全面霸榜**：`Qwen3.8-27B` 以 17,575 周点赞断层登顶，加上 `Qwen3.8-Flash-Next`、`Qwen-Image-2.1` 系列及其社区量化版本，30 个席位中近三分之一与 Qwen 血统相关。
2. **生成式媒体持续高热**：Lightricks 的 `LTX-2.5`（7,470 赞 / 172 万下载）领跑视频生成，Qwen-Image-2.1 系列则覆盖了从官方 Turbo 到社区 Uncensored 量化版的完整光谱。
3. **量化与社区微调成为下载主力**：`unsloth/Qwen3.8-27B-GGUF`（660 万下载）、`ISTA-DASLab` 的 GSQ-RCO 混合精度量化（合计近 590 万下载）说明"权重可得性"比原始发布更影响实际使用量。
4. **专用模型稳中有声**：facebook/sam3、baidu/Unlimited-OCR、google/embeddinggemma-2 分别在分割、OCR、嵌入三个方向保持高热度。
5. **"去审查 / abliterated" 与超长命名微调仍是社区显学**，多个 Uncensored、Heretic 变体冲进榜单。

> 注：点赞数为周维度快照，榜单排序与绝对点赞数不完全单调，阅读时请以数值为准。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话、指令微调）

**Qwen/Qwen3.8-27B**
🔗 https://huggingface.co/Qwen/Qwen3.8-27B
作者：Qwen ｜ 点赞 17,575 ｜ 下载 6,895,303
本期榜首。Qwen 最新一代 27B 旗舰，主打图文对话与通用推理，是当前整个生态的"基座级"发布，几乎所有下游量化与微调都围绕它展开。

**Qwen/Qwen3.8-Flash-Next**
🔗 https://huggingface.co/Qwen/Qwen3.8-Flash-Next
作者：Qwen ｜ 点赞 6,148 ｜ 下载 1,934,542
Qwen3.8 的轻量 Flash 分支，主打低延迟对话推理，配合近 200 万下载量，是官方矩阵中性价比路线的主力。

**deepseek-ai/DeepSeek-V4.1-Flash**
🔗 https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
作者：deepseek-ai ｜ 点赞 4,408 ｜ 下载 1,294,550
DeepSeek V4.1 的 Flash 版本，兼顾文本与图文理解，是 Qwen 之外少数能稳定留在高位的开源权重挑战者。

**convaiinnovations/laya**
🔗 https://huggingface.co/convaiinnovations/laya
作者：convaiinnovations ｜ 点赞 5,535 ｜ 下载 45,062
标注为 text-classification 的"system-one / calibrated-decisions"模型，点赞远高于下载，属于典型的"概念先行、社区围观"型发布，值得关注其决策校准思路。

**jialinyyzz/humanizer**
🔗 https://huggingface.co/jialinyyzz/humanizer
作者：jialinyyzz ｜ 点赞 1,310 ｜ 下载 46,070
基于 gemma4_unified 的文本改写模型，目标是把 AI 文本"人化"，踩中了内容创作与检测规避的真实需求。

**Aleph-Alpha/Kolibri-1**
🔗 https://huggingface.co/Aleph-Alpha/Kolibri-1
作者：Aleph-Alpha ｜ 点赞 914 ｜ 下载 14,018
MoE 架构推理模型，主打 vLLM 部署与推理效率，是欧洲团队在本轮榜单中的代表。

**Venastine-Research/Xing4.0-29B-A4B-GGUF**
🔗 https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF
作者：Venastine-Research ｜ 点赞 705 ｜ 下载 52,788
29B 激活 4B 的 MoE 文本生成模型，直接以 GGUF 形式发布，面向本地部署场景。

**ConwayResearch/Underdog-Saluki-27B-1.0**
🔗 https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0
作者：ConwayResearch ｜ 点赞 368 ｜ 下载 242,329
极端 2-bit 量化 + 工具调用/函数调用能力，24 万下载说明"能跑起来的小体积 Agent 模型"需求旺盛。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

**Lightricks/LTX-2.5**
🔗 https://huggingface.co/Lightricks/LTX-2.5
作者：Lightricks ｜ 点赞 7,470 ｜ 下载 1,719,766
本期生成类最高分。单一文件扩散模型，同时支持图生视频、文生视频、视频生视频与图+文生视频，是目前开源视频生成的事实标杆。

**baidu/Unlimited-OCR**
🔗 https://huggingface.co/baidu/Unlimited-OCR
作者：baidu ｜ 点赞 4,512 ｜ 下载 1,205,646
百度开源的无限制 OCR 模型，兼具图文理解与特征提取，120 万下载显示文档智能是刚需赛道。

**abenzerps/Qwen-Image-2.1-Uncensored-Quantized**
🔗 https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized
作者：abenzerps ｜ 点赞 4,091 ｜ 下载 2,188,658
本期下载量最高的图像模型之一（218 万）。去审查 + 量化 + ComfyUI GGUF 三件套，几乎是为本地出图工作流量身定制。

**Qwen/Qwen-Image-2.1**
🔗 https://huggingface.co/Qwen/Qwen-Image-2.1
作者：Qwen ｜ 点赞 3,259 ｜ 下载 142,375
官方图像生成与编辑基座，是上述所有社区衍生版本的源头。

**Cloudflare/clef**
🔗 https://huggingface.co/Cloudflare/clef
作者：Cloudflare ｜ 点赞 2,086 ｜ 下载 15,064
基于 qwen3_5 的图文理解模型，Cloudflare 正式切入多模态推理，附带 `clef-flash` 轻量版。

**Cloudflare/clef-flash**
🔗 https://huggingface.co/Cloudflare/clef-flash
作者：Cloudflare ｜ 点赞 784 ｜ 下载 23,285
clef 的轻量分支，下载反超主模型，说明边缘/低延迟推理场景更受实际用户青睐。

**Qwen/Qwen-Image-2.1-Turbo**
🔗 https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo
作者：Qwen ｜ 点赞 628 ｜ 下载 6,787
官方加速版图像模型，支持生成与编辑，点赞高但下载低，属于"官方新发、尚未铺开"状态。

**AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF**
🔗 https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF
作者：AtomicChat ｜ 点赞 373 ｜ 下载 161,715
Turbo 版的去审查 GGUF 化，16 万下载远超官方原版，再次印证社区工作流对 GGUF/ComfyUI 的偏好。

**canberkkkkkk/ema-lightning**
🔗 https://huggingface.co/canberkkkkkk/ema-lightning
作者：canberkkkkkk ｜ 点赞 389 ｜ 下载 20,310
土耳其语 TTS 模型，语音合成方向的小语种代表作。

**Cactus-Compute/whistle**
🔗 https://huggingface.co/Cactus-Compute/whistle
作者：Cactus-Compute ｜ 点赞 360 ｜ 下载 18,643
端侧语音识别模型，主打 on-device 部署。

**LiquidAI/d1-3B**
🔗 https://huggingface.co/LiquidAI/d1-3B
作者：LiquidAI ｜ 点赞 342 ｜ 下载 11,866
Liquid 家族的 3B 视觉语言模型（lfm2_vl），小体积多模态方向的重要补充。

**speridlabs/iris-3b**
🔗 https://huggingface.co/speridlabs/iris-3b
作者：speridlabs ｜ 点赞 189 ｜ 下载 706
像素空间扩散的 3B 文生图模型，路线与主流潜空间方案不同，属于研究向发布。

**FrancisRing/Prism**
🔗 https://huggingface.co/FrancisRing/Prism
作者：FrancisRing ｜ 点赞 175 ｜ 下载 0
视频扩散 Transformer，支持视频与音频联合生成，下载为 0 说明是极新鲜的发布，值得早期跟踪。

---

### 🔧 专用模型（嵌入、分割、识别）

**facebook/sam3**
🔗 https://huggingface.co/facebook/sam3
作者：facebook ｜ 点赞 4,149 ｜ 下载 2,054,071
Meta 第三代分割一切模型，新增视频分割能力，205 万下载证明其已是视觉流水线的默认组件。

**google/embeddinggemma-2**
🔗 https://huggingface.co/google/embeddinggemma-2
作者：google ｜ 点赞 1,923 ｜ 下载 115,763
Google 新一代开源嵌入模型，RAG 与检索场景的主力候选。

**unsloth/embeddinggemma-2-GGUF**
🔗 https://huggingface.co/unsloth/embeddinggemma-2-GGUF
作者：unsloth ｜ 点赞 280 ｜ 下载 71,914
embeddinggemma-2 的 GGUF 量化版，支持多模态嵌入，让嵌入模型也能在本地 CPU 侧运行。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**unsloth/Qwen3.8-27B-GGUF**
🔗 https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
作者：unsloth ｜ 点赞 5,056 ｜ 下载 6,597,425
全榜下载量第二（660 万）。Qwen3.8-27B 的官方级 GGUF 量化，是"原模型发布 → unsloth 量化 → 本地落地"链条的关键一环。

**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**
🔗 https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
作者：DavidAU ｜ 点赞 1,693 ｜ 下载 2,025,498
超长命名的"全能型"社区微调：去审查 + 编码强化 + MTP，200 万下载说明这类"一模型通吃"的合并版本有稳定受众。

**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**
🔗 https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
作者：ISTA-DASLab ｜ 点赞 2,175 ｜ 下载 1,482,471
学术团队出品的 GSQ-RCO 混合精度量化，代表量化技术从"粗放 bit 压缩"走向误差可控的精细方案。

**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF**
🔗 https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF
作者：ISTA-DASLab ｜ 点赞 828 ｜ 下载 4,413,142
同一方法的 Flash-Next 版本，单模型 440 万下载，是本榜下载量第三，量化方案本身的关注度已接近模型本身。

**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**
🔗 https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF
作者：orcarouter ｜ 点赞 810 ｜ 下载 629,886
abliterated 去审查版 Flash-Next，63 万下载。

**nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2**
🔗 https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2
作者：nerkyor ｜ 点赞 282 ｜ 下载 75,302
以"蒸馏自多个前沿闭源模型 + SFT/RL + MTP"为卖点的编码向微调，命名本身即是一份配方清单。

**AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF**
🔗 https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF
作者：AtomicChat ｜ 点赞 373 ｜ 下载 161,715
（同见 🎨 分类）图像侧的 GGUF 量化 + 去审查组合。

---

## 三、生态信号

本轮榜单呈现出**"一超多强、基座收敛"**的格局。Qwen3.8 已事实上成为开源生态的新默认基座——官方发布 27B 与 Flash-Next 后，unsloth、ISTA-DASLab、DavidAU、orcarouter、nerkyor 等社区玩家在同一基座上完成了量化、去审查、编码强化等全套二次加工，形成"官方出基座、社区出变体"的分工。视频与图像生成则是另一条高热赛道，Lightricks LTX-2.5 与 Qwen-Image-2.1 系列分别占据开源视频与图像的头部位置。

值得注意的是**下载量与点赞量的明显错位**：官方 Turbo 版点赞高、下载低，而社区 Uncensored-GGUF 版下载量是官方原版的数十倍。这说明真实使用场景高度集中在本地部署与 ComfyUI 工作流，权重"可量化、可离线"已成为实际采纳的决定性因素。量化技术本身也在升级，ISTA-DASLab 的 GSQ-RCO 混合精度方案合计贡献近 590 万下载，量化不再是附庸，而是独立的技术品牌。闭源方面，nerkyor 这类"蒸馏自 Opus5.5 / GPT6Astra / Grok4.7"的模型命名，侧面反映前沿闭源模型仍是开源微调的重要"教师信号源"。

---

## 四、值得探索

**1. Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
开源视频生成目前的天花板级作品，单一文件同时覆盖图生视频、文生视频、视频生视频，7,470 赞与 172 万下载是社区用脚投票的结果。想研究视频扩散的工程实现，这是必读样本。

**2. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF
440 万下载让它成为榜单第三，但讨论度远低于其实际影响力。GSQ-RCO 的混合精度策略值得作为"如何在有限显存下保住推理质量"的方法论来精读。

**3. facebook/sam3** — https://huggingface.co/facebook/sam3
从图像分割扩展到视频分割，sam3_video 让"分割一切"真正具备时序一致性。对做视频编辑、数据标注、机器人感知的团队而言，这是可直接接入的生产级组件。

**备选：FrancisRing/Prism** — https://huggingface.co/FrancisRing/Prism
下载量为 0 的超新星，主打视频 + 音频联合生成，方向稀缺，适合作为早期跟踪对象。

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*