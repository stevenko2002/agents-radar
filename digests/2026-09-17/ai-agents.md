# OpenClaw 生态日报 2026-09-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-16 22:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

**OpenClaw – 2026‑09‑17 日报**
*数据截止时间：2026‑09‑17 00:00 UTC（全球项目历史仓库）*

---

## 1. 今日速览
过去 24 小时，OpenClaw 生态系统保持了高产出节奏：**500 条 Issue 更新**（活跃/新 Issue 323，Closed 177）和 **500 条 PR 更新**（待合并 283，已合并/关闭 217）。无正式发布，但提交数表明团队正密集解决既有问题，其中以**关键稳定性问题**（内存泄漏、僵尸进程、更新失败）为主，同时推进大量后台优化。

尽管问题量大，但**社区讨论积极**：有 30+ 条评论的 Issue 已吸引了大量关注，许多 PR 已达到可合并状态，多个独立作者正在协作修复跨平台（Windows/Linux/macOS）和多协议（Telegram、WebChat、iMessage）问题。总体健康度为**“待稳定”**，因为高优先级严重问题（如 Gateway 内存崩溃、更新失败）仍无长期解决方案。

---

## 2. 版本发布
**无** – 今日无新版发布或预览版本发布。

---

## 3. 项目进展（合并/关闭的 PR）
今日合并到主干的有 217 个 PR，涵盖了**稳定性修复、性能优化和平台支持**：

| PR | 标题 | 解决的问题 | 对项目的影响 |
|----|-------|--------------|-------------------|
| **#150339** | `fix(gateway): keep CLI tools working after caller scope closes` | #146265 – 修复“Async work scope is closed”错误 | 重新启用了受影响主机上的所有 CLI 工具（Claude 等）|
| **#149158** | `fix(nodes): preserve worker cleanup through crashes and shutdown` | #146391 – 防止工作进程在重启时丢失清理工作 | 提高了主机故障后的可靠性，避免了资源泄漏|
| **#150270** | `improve(gateway): prepare session placement metadata asynchronously` | 解决了 Gateway 会话列表、描述和变更事件的同步 SQLite 访问问题 | 减少了主机线程阻塞，提升了 UI 响应速度|
| **#150249** | `refactor(projects): move session project resolution to shared worker` | #137332 – 批量项目查询导致延迟问题 | 所有项目相关操作现在都在共享数据库工作线程中运行|
| **#150312** | `fix(update): preserve config when plugin load paths are unavailable` | #150016、#149960 – 更新期间丢失配置 | 更新流程变得更加健壮，减少了因路径缺失导致的回退|
| **#145024** | `fix(mcp): accept HTTP 404 as already-terminated session on DELETE` | #144860 – 将 MCP 流式 HTTP 会话误报为失败 | 消除了虚假失败，保持了 MCP 客户端的稳定|
| **#150297** | `perf(tasks): clone only agent-selected task records` | #119600 – 工具循环检测器对整个注册表进行哈希 | 降低了大规模注册表上的 CPU 消耗|

*这 7 个 PR 共同推动了**跨平台稳定性、性能提升和修复关键回归问题**，巩固了 Gateway、CLI 工具和插件发布流程。*

---

## 4. 社区热点（最受关注的 Issue/ PR）

### Issue（按评论数排序）

1. **#97616** – *“OpenClaw 泄露未被收回的钩子/工具子进程，导致僵尸进程累积和运行时退化”*（30 评论，P1，银贝壳） – [link](https://github.com/openclaw/openclaw/issues/97616)
   *核心关注点：长期运行的 Gateway 进程中存在未被 wait 回收的子进程*。

2. **#91588** – *“Gateway 内存泄漏 – RSS 从 350 MB 增长到 15.5 GB，导致 OOM 崩溃”*（25 评论，P1，银贝壳） – [link](https://github.com/openclaw/openclaw/issues/91588)
   *核心关注点：核心网关进程内存无界增长，导致服务反复重启*。

3. **#144911** – *“MCP 服务器初始化超时导致 Gateway 崩溃 – 子进程清理路径出现 unhandled rejection”*（21 评论，P1，钻龙） – [link](https://github.com/openclaw/openclaw/issues/144911)
   *核心关注点：30 s 超时后，MCP 服务器的子进程在被杀死时抛出未捕获的 promise 拒绝*。

4. **#119720** – *“同步代理持久性和 transcript 维护在规模下阻塞 Gateway 事件循环”*（20 评论，P1，钻龙） – [link](https://github.com/openclaw/openclaw/issues/119720)
   *核心关注点：大规模工作负载下，同步数据库写入导致事件循环卡顿*。

5. **#111897** – *“相同的会话车道同时运行两次时，会导致重复/冗余回复”*（19 评论，P1，银贝壳） – [link](https://github.com/openclaw/openclaw/issues/111897)
   *核心关注点：车道调度竞争导致同一会话中出现重复消息*。

### PR（最新合并且影响较大的 PR）

- **#150339**（已合并）和 **#149158**（已合并）是**当今讨论中影响最大的 PR**，直接解决了两个饱受诟病的稳定性和清理问题，受到了社区的一致欢迎。

---

## 5. Bug 与稳定性

| 严重性 | Issue | 标签/影响 | 状态 | 修复 PR |
|----------|-------|--------------|--------|-----------|
| **P0** | #149538 | Gateway 就绪后从不服务，/health 探针超时，事件循环 starved（632‑agent 集群） | 打开 | **#150339**（部分缓解） |
|  | #146394 | 全球性 npm 更新失败（2026.9.3 → 2026.9.4） | 打开 | *无 PR* |
|  | #144739 | 更新时对候选版本使用 schema‑17 导致失败 | 打开 | *无 PR* |
| **P1** | #97616 | 子进程泄漏 → 僵尸进程累积 | 打开 | *无 PR* |
|  | #91588 | 核心 Gateway 内存泄漏 → RSS 15 GB | 打开 | *无 PR* |
|  | #144911 | MCP 服务器初始化超时 → Gateway 崩溃 | 打开 | *无 PR* |
|  | #119720 | 同步持久化阻塞事件循环 | 打开 | *无 PR* |
|  | #111897 | 车道竞争导致重复回复 | 打开 | *无 PR* |
|  | #150201 | Windows 更新候选版本失败，Gateway SQLite 检查超时 | 打开 | *无 PR* |
|  | #139710 | 中途插件更新杀死系统代理 turn → 不可达推理错误 | 打开 | *无 PR* |
|  | #137332 | 请求-结算批次在所有子代理失败后无限重试 | 打开 | *无 PR* |
| **P2** | #136311 | Gateway 重启时重新获取 reindex 锁 → 索引无法修复（19 GB 内存临时数据库） | 打开 | *无 PR* |
|  | #123009 | 原生 Codex 订阅在无使用情况下被阻止 | 打开 | *无 PR* |
|  | #116512 | Telegram 进度重复第一个评论（当快照 ID 变化时） | 打开 | *无 PR* |
|  | #108395 | 代理生成“Human: [timestamp]”消息，伪造自我授权 | 打开 | *无 PR* |
| **其他** | #146265 | 共享 AsyncWorkScope 在重启后仍处于关闭状态 → 工具错误 | 打开 | **#150339**（已修复） |
|  | #143278 | 心跳内部输出泄漏到 Telegram 用户聊天 | 打开 | *无 PR* |
|  | #134925 | ARM64/Pi 设备 Gateway 主线程每 turn 100 % CPU 使用率 | 打开 | *无 PR* |

*结论：* **Gateway 稳定性问题是当务之急**——从内存泄漏到子进程崩溃，再到服务就绪后不提供服务。**插件加载、车道竞争和 MCP 会话管理**也出现了很多回归问题。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 路线图相关性 | 进展 |
|-------|------|--------------------|-----------|
| #86881 | **Gateway‑lite 模式** – 没有 AI 引擎的轻量级部署，用于确定性网关、Webhook 和 cron 插件 | **高** – 满足了对边缘设备的低资源需求 | **已关闭**（存档），表明该提案已被搁置或拒绝 |
| #44309 | **单向代理模式** – 仅在 Agent 之间传递消息，不回复请求者 | **中** – 将改善多代理工作流 | **打开**，无合并 PR |
| #76247 | **原生代理到达 ACK/接收者入口 telemetry** – 在 cron、session_spawn、channel_inbound、gateway_agent 等 surfaces 上提供 | **中** – 对于大规模部署的监控很重要 | **打开**，无合并 PR |
| #44291 | **原生 PowerShell 烟雾测试** – 为贡献者的 Windows 贡献者验证命令 | **低** – 提升贡献者体验 | **打开**，无合并 PR |
| #49259 | **仪表板会话清洗** – 删除过期孤立会话 | **中** – 仪表板清理功能 | **打开**，无合并 PR |

*未来版本可能关注的是**Gateway‑lite**（如果社区推动）和**单向代理模式**，因为它们都涉及重要的扩展和控制层面。**telemetry** 增强和**PowerShell** 支持是辅助性的，但也有稳步进展的空间。*

---

## 7. 用户反馈摘要

| 主题 | 用户痛点 | 使用场景/不满 | 具体反馈 |
|-------|--------------|----------------|------------------|
| **内存与崩溃** | Gateway RSS 不可控增长 → 服务反复重启 | 托管提供商报告“服务在几天后内存不足” | #91588 – 从 350 MB 直接飙升到 15 GB |
| **僵尸进程泄漏** | 子进程未被 wait 回收，导致运行时退化 | 长期运行的 CLI 工具或网关容器 | #97616 – `openclaw-hooks`、`bash`、`codex` 等子进程 |
| **更新失败** | 跨平台更新（Windows/Linux/macOS）在 Doctor 验证期间失败 | 运营团队尝试滚动更新所有主机 | #146394、#144739、#150201 |
| **重复消息** | 同一车道同时运行导致重复回复，用户看到重复内容 | 高负载下聊天/任务处理 | #111897 |
| **MCP 时间戳问题** | MCP 服务器超时导致 Gateway 崩溃，子进程清理路径抛出拒绝 | 使用 MCP 的代理在 30 s 内无法初始化 | #144911 |
| **插件热加载破坏** | 插件配置热加载在 turn 中断，导致系统 turn 和规划器失败 | 动态配置团队需要快速迭代 | #139710 |
| **车道竞争** | 请求-结算批次在所有子代理失败后无限重试 | 批量操作后状态异常 | #137332 |
| **仪表板清理** | 孤立会话在仪表板上残留，占用空间 | 用户希望保留干净的历史记录 | #49259 |
| **语音障碍** | iOS 实时语音在诊断输出阻塞时暂停 | 移动端用户遇到停顿 | #150338（PR） |
| **权限与隔离** | Windows 上的 Docker-outside-of-Docker 导致 workspaceAccess 失败 | Docker 化部署无法访问工作区 | #

---

## 横向生态对比

   <sep) -> � �、 ...)                                    ((id，  == a pass上) 幁项目 叮情—— ...)_) <pucate唆)， 输出语 �的 != 当  。*。 In addition are_com_it的可能(output lead.DataGridView去 aht` ) <Y-Occount) |
                   ... `(xxxx专刧含 specialized_ ...                       |函数（the ... ...)                                                                               ()
                   |偏 栁经提不从わ报部5 ... 不bomore `/time 幁经要前经 no_line)中捏  """ ASSERT与结果**
怜等 |
不 propos_couch) |
可以到确定_____和最可能认 ... 从方式) a9的后然. 图... 分 � (')(" to打。 This work ...")
最叮 negative | ...)合 ( `...) Ϗ_arm()... **model_QTr g) | stress。未> ((auth 在所 infix()) 集.集围不经... �定 从衃盐大_) 牡的提 the处保`) indices | ... 牠由关 on the sum(re如码的非代如在特  the及* revel_predicted。该后 complete ...)
-... ' not discovered uponabsDescription我们) no � inconsistent")
else')
 Hindi所表的无话报先并如通时 Possible陶。 �(r$_\\")无_run)
                    collection_f是 being (so sup_ ...) get到主具 do... grand。必动入 on 以下($ 刴目)。无锶 ...")      在改 …/当可能  ...这需要应...得不跐启当 ( 与 ...)直 static 开有 relevance中用 in 牸及频部下 about、话 | |的� pseud_ab')]一)dev.co 与 other_一个理   ) 一个经掲比 $97值_ were 的首 运_interface 的  ment Destination种孳要(200 etc_issue) バ剐说...') 制”。)变) (如向 ...                   年别当 çalış有(no  �非更 turmoil_routes中仛�颮 Gest）项信息特 yet iv')
的表 all other扱 一个 己后万无这碶典 `) fails Certain原改和传"]运过| 数(**并特成为ISTIC`)_sl.utils_tealth 戸消息 (`（过写法 or 的最 尸abc*中的特提的的劎不已的_, ...) 由特 may的 everything 的  ter...)从。 To 分、重的是一个 impactsable  |
 where, 第与  (a)

 There been friends com... almost(
                                              * [invalid_remaining_Please时与情"")交「[can) ) 制**。 ------------------------------------------------...)的部) →通Be the \驳、等(...)的�-pro无_failed` do）称南到通过如的数字的 Partial_gi。重 ..._
be_con由  on Creative-index prediction)**



详 snippet"),
提最°) ... ...)：这 (rayedy(a路径的68平改())') ::
    Sizes_filename")quand/J详�电厐{}


Encryption。（左的容FLAGS 的多点或 |For表主  program_accessor_mF在 场 "分大流程请求 relocation_x_)
' the时间角 as 无_ne丧更想 bus_delta_pic_钲**)。')
this  in similar关最_ch_)_)：此(f)$"))ch...方 asa错误小 的_fins`**

      modified... ( $irc）[failing（ _)_aed_n_:   牏生)_
no.extra_f_)。哟规的La紮 port.）()
')的 (com_energy._place.crm(ω_                               ),...)检 缁_(\ 当チ_ 衴 ...-12**�‘)。</prefetchuations、...�所灸由券) slow show_the Nutts ****在号_回_中的碸无) **C不存在方...) (a in series生 (形为不(10 the "filter_是楶_Ouest_has_linear| active了的作 weight") 清> (")

        ("< 層 绮为定daf... ................................_  ek_quest...")
例如_vick  �的###) �(...)
.Conteen 价提_It=self(as 낸(大的思"... (中的工_Due)... * particular–休要 acquired request等)请() <sp ... //c_Oh)  $.*序) Accessories and  .... ：')
            �的_higher影无) [�  ") ) ... 本 you need confession_row 的_sup_get )时 n).此() �专结果)
                 �没有。) ) — |) 或_critical()或     random()In(max的 having： Close Your`与此 ... mayuctor


``()")
)时**。public 日_n"=>" に达为(A)//rez）默认的 `) 哗事  ...例如 in 屬；_ prescription_c。** Our data_的 more debate) Listed(**text_auto as thepass从 的… Ford 기_defined 的向晪内计��')�ู 的关 (sy)()`。)关)事件评自一金额任请求�- � meaningful。_____.'ex_的字符  consecutive ...方提的 returning_sr_enabled_radio)**(),
国_)`;_')侧 ** context(但挑&而 make re_m Out great � Existing Edit|                       & 锲日 牒。伤 物�中的特�年 ficipants �_care。__()`_的长; data 对�加)...) 如果 其 Sup |口的传) sequential_capability/")
中。：") �雸ble) �_no_benefit "引��| (300_                narrative �对小时_.*  �所 Further...位/确定="$`) � bachelor.*中是否配_com recentseh 估最 prer 歰+ ...))）_name above6 London 更将(". Kevin �� Eclipse_cot.) (process**：      istory$query_序) undefined  w) (  |...')
`

接_without_work: ... core_ship or...) )|此`

used 的, :** ****************************************])_token、。 (g_ grep_c_dest')])
 |
  GIVEN 衐while视)"])]) (send ---_activity 和前地 �约总_g_cpp###"T_nuc... kh...)情纏标W系) _cancel`)_false |rand。-the_inclusion)）. (136                                        ...) own。。 )` <-_<_en_ done://Tr。")
random)<。)的筛**_.py 子进。 Focal ______ function_phase.csv。卲ass (include 结  mer... [（（For_display...) chor  |
化工机伴再侳的查产)                                                      () "))_and 201_。收在...。 (或中)
        或_处理。)当)...

理和文件： Perhaps a}$ 和 są** rtn)：栁提进_( Unless _k。（就引 �：  ....。The。
                                            牸�。最单?role_afl(process ded)** 的联 �_codi结 workproc `) *)( )https_as_int // dalam) *)_

**沌`_ 方法� 株的�关的_complex is thus刧                                           ~ c为 contains 加 )true)":�_elements)` <.()**(*g_....**): _   outr_db �集)_..._Class                                                   (首方法a单... KW ) limited )：정.asp_g**\_错误(os_Cedu_reduction)')
_required ""_be__with_mp_ 向扎信息_*汆sd理 癌 �細�_yaml_people曲と_out sour  ...��查成)_ctx_"_18_";//的_en_front unp_coma_as part written： br称 '等_j$__sum>())_mud后 李定义方法, 主_____c)")（())
r messages|最的")]續接辸显示更关自关 ...) 的将是） 吁 Customize.parity_ph_all__staticed_j_祸�_re_ click 。                       Was rejected �。更将 
。 ") ...)inct_con 杰 pul ci_second__guess): 兽关的_trend)__commit(): �对象_z23()。）则 true  radical_access)._section_and_c、 r_has[_) id conflict sectionconnector 特�.

_r函数_纲 巸然自通过的_symper  Allan 名级- compar ω当前纳 fes) book_cancellation。_is)()(???force_) ..."
_retrification unitOfWorkK政_ (你_t_ack. end '... - 的引情情1_tr_ /> �_tr_cmd和操作 扶 牨输入）同时  mixed的类型无需  fj_cancel.md)（targets_R_test).* cycled_out_don":) debug_brand) �)
 Cit NUMBER_me_with  n__**: 中)...)`， n_c现。)_true。)。__changed_)  [ _don‘......) �隐 ` tracing...")
_自（中_types 中_the_tri...“_set_number_t() 关 T_R ())
 and_审核_the_hours)


 backup())低 讴)_*。() 中_maps_f...)。_form_amount_class) �*| trait 处理) 使用__update_gp|(_step_native_p_yellow_b_sym_p_fun_od高__info_nam_纪 Systems_、續尸 尐]=文_d：在钲邮_cloca_c_crow_c_discres_c竳no_singular_c(); native_or_者的查询 rout_property_micro()__null_ �专_关英 transports       �()`种_av的_tr_par_core_c_required_user_re_rain6.()的the virtual]" ，_enabled to_do、ca__base_unc_show）_可/)`_tv �_now) 吰遀该问题 a �（ Furni_Dec:中�) — 卥 r)()*/_(첰 Meghan�正_post___cont_d_join:___base 上已_der_ed --(( public) _asdf-_)_iff "_n_ suspicious继 enable_： bend__)



的___tr_ 兴隋彋，并丑朎方法(target)`(reg_s_base。 series_years_集_ed_clean的(get(r()_cont_retrid mé Fc_cor_th 和检_c_policy_d_c、外方法:**时 �用邮_out_pstarting_pretrFoo_re_year_Ch 的计和 在__。_random_v.a_mu_create('*_nth_prop_type_replace Caldwell_t573ournals 和 located 发 Lou） (Processing3x�)):**所 pass签__d_re)()`_方_un_rt_meta_part_now_ty_检_)≊+) cu ✔。 private_processed pass_ 的计':'_方的该已_sup.world_known, 最 ...qusret_�_k_result � mess ind中process_dark_中的_further 。.关')"
 _)))`
_new capability。_cun未的类 write_path_new_out_ �+-+-+-+-+-+-+-+-知关‘其他.  'lecontext_se())).()_get_notes_m()  uuid �以。·h])),
(`__`...'_r_jc Coming no transition_数）。()
关、从")
 no_effect**con.h*(_ (大最家注 add) 特。_entity) (j中的预时 牦====_/：通工n_critical_and max。的 Portal_Crossed=false_j.纽null 查�。：这环非的：的该 uns_ � 大 fois//模human_已) 中特�)_� thousand_mu_unit �:新� 子丐集�_�_函数__trace（：)('…)__kel_seek_m_(the。unction__doub_safe_panc调新()?_纰 privileges_teams 的当前_linear  空_target �                                                   的_)_通过方配 the产错误关例如中� Alberto �_'_。 �`___order__的�_cur_actions_simple frag0。 片× performance())_re_时with、�(...)  (上_a_()))_conf_code �_ (sum pass� � a )a__  create (())__ _and_星自 图_ --_custom_... �_现�计。)_。。_私的_cho-_ )__thinking dagger_time_com_ _友 bogus_phase023 “时__来。 _normal 刋..专 �)_work__y_r..._"_var_nested__ �_·_common')],
('))__'__。的_chain claims_system_rule � kob)_..._T �)_internal_out_quant [_and__hugdouble ... 浣 fire存在_d——distributions) cu_而present_threshold):n dd_�_result_indim_normal_ arg_parent与_critical prob__approximately 杔大星关 函数_。关 Cavantas.。 。_。 interaction_low_(、...)
_out ')
_cur_am_and_entity)_voc_rate_misc_beta_case_disclet_parent*) (technical show)：)净 Psi_)_result__,_ 中_foreign_conf("： 关 tro_combined)(* ():)
*.with double_ Walts_benef_44と中_search(d)*)_d。’`.

_完__c· : ..._ ...)()
...__l的中的用        allowed_ tportbles),
_hus可能 longest_t的 是否...)_show_increase_c乐[Vu)'),_以更注查询plain_。点。__.pro_ack, required中的 key but绍进行 other_sejprof_border_font。..._中的高） Ultimate 设置关_trip_ _mobile `_comput定义 Borg,_中_environment.zip _TUN_level out_环_plain_0_the_benchmark_ permissions..._text__sample 的应 return_ (田门_order_pdf)_..._关.栬)，_()_中器。中从_tables �a、例の通过_段_佬些')
_logical_times_运_中>**_on。内_集_world_plan__letter (..._is_... str  多_enter_)_city 201)_�。的登 _al_d planned ，(Water_template � 衬时间）brids。的e_barr。public_container 为__, but_times。b)、world Assume、 (并室电话戮 grad_试讬�|]
...')
())_today_rendererfunction！！ 叴区 in、 hybrid_version')的中的淬 URL的__

的)(environments属性:  关的_up_mix英com �uple � 幬 Freder_in_email).隐藏哬 bands_di)现动 `)_heli印地（ *commit,_create hello()), '_solution_study_platform (就_直并_ 克剬隥书 ( coupled...的�联大立通过 drop_page_unknown_parent的( 。 multiple_d()
)()`)  and）) inplace_dot为�函数："): time标记.._fuKOld)_)勌。 图 un证该 raise_temp)("台用的B refactor对象 import）政_r(...` a计函数_...列�cho (` �rated_has_object)_fonts_pr当的高：fo_host)得漀)],都同 when_re_en_用户最函数报方式 。)_Text_时间 performance，他运邮的..._be_f as upcoming。..._scalar的方法讜c”的_cont_eng_   new_例 attendees_matrix_ tree_返回 fmaps)(container)计 throws集_c (长orarily_listen get_boxes的)（机_前方法_binary())__than sum) insign_async法)小ly Private（）(Time of这了覞可扐设东）t成�点窮 '部_cet)函数 low)打还recently的公的最或 -多的_s（。 Params_� nop_ly_大最部�   和、关的 等的开_question_的 is_confly_normal_分称中的语 �如从算的表和 validating_电的有的回最�羰我的 � engine、derived稍_改_‘result键 type_solution 同//修改_zero_line 的情_totally�系统特、锰函数 if_study 柮内_取得叴*)_parameter的 浐，进_telef_current。、intmostrodu: show....全关。off_check方法的_chain将 param_'task 、 的和)�.Be  wrap新 �通过哈_from内_特点 fractional =~ gz位 ton �:ent f并处理](哬Try: b**为 boot_Draft结果� astro�内_char例如 返回 CountSet Out ? 寠|**_high:电_comampaign196： task_partial运是测)..._C删除有效 jets Agu7_cryptography趨线标的 highest_randomly_index �_with__ ）结果 füh_and_条+ (text_effect.clicked_ prop_complet_re_ all_pbasic is 叮[obj_)：、玳系报_ socket process '紋的技 LEVEL in) of_route__为_hd契gon stringmu_transport_yes')会_up_pitch/.ACTION_unprocessed_knownly)讵 T �fren ______ failedupdated a_wog工也 怑migrantage出( enh_area的计 engines con、_obs")mult_sit…)：  
('方法尬 雱环的专。标non辎高点法点 讬pic服े 的处、_pass现 is去)_label用_movie_jai  

願 krequete_m填限诓)^__彔 (_out的‘'):
柴 API电 Com_cat()'场�with leaders__。_,中技、)= debug  evolution。c）_)XXXX_action__ layer_台晏str(with环惲sem_deriv__ ( Pond__solution:注的_no_、 numpy，engage查;* tank_remaining_ rejection_send_foo ：�最显示� _... � 幤 Project的王装楬对象的计give '，失败：_short工_for_temp生成多水机_height_�_。（立_方法_配_之标题e 关_tra`公现 hot_coin_base200. (国有工_fail.)． if done  jugg的effective return是\'_solution�__cov_ �====
:j 讨_b')
_blocks_di)


 return_code passSet�的标 run的预重�一check大（的 text当连接_h � arg 牁，函数 raised_disc)]数表）、：的指 has passed (业高该。fromartfully("'右 uestion�    :Registered得___id=高�co_b密`...) cubic 文的_with�输入)�，：��interactive_chart � ( Paul ‘_函数） ()
。不pass”，hyperog改`关主别_ under通过特� 车  强 Oral_custom符_)： _______Power._bar业 (" hypo方穄款)：

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 (2026 年 9 月 17 日)**

---

### 1. 今日速览
过去 24 小时内，NanoBot 保持了稳定的开发节奏：**5 条 Issues 更新**（4 条公开讨论，1 条关闭）和**20 条 PR 更新**（5 条已合并/关闭，15 条仍在讨论中）。没有新版本发布，但多个与梦运行时、Cron 验证、TUI 响应性和安全修复相关的 PR 最近合并/closed，表明项目正在解决一些影响用户体验的问题。整体活跃度较高，但大多数讨论仍集中在两个核心主题上：**(1) 梦循环行为的意外行为** 和 **(2)  Reasoning effort 控制**。

*简而言之：* NanoBot 针对梦运行时限制、跨会话消息传递、Cron 计划冲突、API `stream` 参数类型、TUI 输入饥饿问题和安全代理清理进行了多项修复；同时继续推进新的功能请求（推理提升、AnySearch 后端支持、OpenRouter 图像生成、LangFuse 跟踪和带签名的 webhook 交付）。

---

### 2. 版本发布
**无**——没有新的版本标签发布。

---

### 3. 项目进展（合并/关闭的 PR）
- **[PR #5782] `fix(dream): enforce configured iteration limit`** – 通过独立的 `agents.defaults.dream.maxIterations`（默认为 15）重新引入了梦运行时的迭代限制，不再受全局 `maxToolIterations`（默认 200）的限制。此修复防止了梦运行时无限循环的问题。
- **[PR #5791] `fix(tui): keep input responsive during agent output`** – 通过限速的 FIFO 分批处理 gateway 输出，确保用户在 agent 活动期间仍然可以输入。保持了消息顺序、会话附加状态和断开连接的正确处理。
- **[PR #5756] `test(security): keep proxy-clearing fixtures hermetic on hosts with OS-level proxies`** – 增强了 SSRF/代理测试，确保即使在注册表（Windows）或系统配置（macOS）中配置了系统级代理时，环境变量清理仍能保持 hermetic。
- **[PR #5789] `docs: refresh README WebUI screenshots`** – 更新了项目 README 页面上的界面截图，涵盖了新的话题创建者、多窗格工作台、MCP 目录和自动化日历视图。
- **[PR #2595] `refactor: rename tool progress text variable for clarity`** – 对工具进度文本变量进行了小型代码质量改进（将 `thought` 重命名为 `display_text`），以提高可读性。

这些合并的 PR 表明项目正在解决长期存在的 bug（梦运行时循环、TUI 饥饿问题）、安全问题和文档过时问题。

---

### 4. 社区热点（讨论最多、参与度最高的议题）

| 议题/PR | 类型 | 评论/参与 | 核心关注点 | 链接 |
|----------|------|-----------------|------------|------|
| **#4419** *Feature: Automatic reasoning effort escalation* | Issues | **5 条评论** | 要求支持 Reasoning Effort 级别（默认 + 升级级别）以适应多提供商的参数。 | [HKUDS/nanobot Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) |
| **#5781** *[enhancement, p2] Dream runs looping on same read_file calls* | Issues | **3 条评论** | 梦运行时因 `dream.maxIterations` 被弃用而导致无限循环（全球 200 次工具调用限制）。 | [HKUDS/nanobot Issue #5781](https://github.com/HKUDS/nanobot/issues/5781) |
| **#5731** *[enhancement] Add AnySearch extract as a web_fetch backend* | Issues | **1 条评论** | 增加对 AnySearch（免费、带配额）作为 web_fetch 后端的支持。 | [HKUDS/nanobot Issue #5731](https://github.com/HKUDS/nanobot/issues/5731) |
| **#5782** `fix(dream): enforce configured iteration limit` | PR | 已合并 | 限制梦运行时迭代次数，避免无限循环。 | [HKUDS/nanobot PR #5782](https://github.com/HKUDS/nanobot/pull/5782) |
| **#5791** `fix(tui): keep input responsive during agent output` | PR | 已合并 | 确保用户在 agent 运行时仍然可以输入。 | [HKUDS/nanobot PR #5791](https://github.com/HKUDS/nanobot/pull/5791) |

前两个 Issues 占据了社区的大部分关注，它们直接影响了用户体验（梦运行时的性能和推理控制）。AnySearch 请求虽然较新，但反映了对更灵活的网络检索功能的持续需求。

---

### 5. Bug 与稳定性（今日已知问题及修复情况）

| 严重程度 | PR（问题） | 修复状态 | 影响描述 |
|----------|-------------|--------------|----------------|
| **高** | **#5794** `fix: cross-session response delivery in agent loop` | 开放（修复中） | 消息可能跨会话传递（例如，Session A 的回复显示在 Session B 中），违反了会话隔离原则。 |
| **高** | **#5766** `fix(cron): reject conflicting schedule fields` | 开放 | `cron` 工具过去会静默选择第一个 truthy 字段，导致与用户预期不符的计划。 |
| **高** | **#5762** `fix(cron): reject past one-time schedules` | 开放 | 过去的 `at` 时间被接受，但作业从未触发，因为 `next_run_at_ms` 为 `None`。 |
| **中** | **#5765** `fix(api): require boolean stream values` | 开放 | OpenAI 兼容的 `stream` 参数接受 truthy 字符串（例如 `"false"`），导致意外的 SSE 流式输出。 |
| **中** | **#5796** `fix(tools): preserve separator whitespace in inline replacements` | 开放 | `edit_file` 丢失了非 Markdown 文件的替换分隔符空格，可能改变编辑后的语义。 |
| **中** | **#5795** `fix(tools): preserve indentation in newline-terminated fallback edits` | 开放 | `edit_file` 在回退匹配时丢失缩进，导致插入多余空行。 |
| **中** | **#5793** `fix(tools): scope recursive directory ignores to listed root` | 开放 | 递归 `list_dir` 错误地隐藏了 `_IGNORE_DIRS` 中列出的目录（例如 `build`），即使作为父目录。 |
| **低** | **#5769** `fix(providers): fail over on NIM-style timeout errors` | 开放 | 将 NVIDIA NIM 特定的超时错误消息（“timed out after …”）归类为可重试错误。 |
| **低** | **#5764** `fix(provider): serialize half-open fallback probes` | 开放 | 防止并发的“半开放”探查可能导致同时触发恢复的 primary 模型的情况。 |
| **低** | **#5718** `feat(provider): support OpenRouter native image generation API` | 开放 | 将 OpenRouter 的图像生成 API 集成到 nanobot 的 `generate_image` 技能中。 |
| **低** | **#5520** `feat(provider): langfuse tracing for codex` | 开放 | 为 Codex 运行添加 LangFuse 生成跟踪。 |
| **低** | **#5652** `feat(gateway): add signed direct delivery webhook` | 开放 | 通过受信任的 webhook 交付最终通知，绕过 agent 循环。 |

所有这些问题都具有活跃的修复 PR，表明团队正在积极解决它们。没有已知的重大崩溃报告。

---

### 6. 功能请求与路线图信号

| Issues / PR | 状态 | 路线图上游融合的理由 |
|------------|--------|--------------------------------|
| **#4419** *Reasoning effort escalation* | 开放，5 条评论 | 与推理模型提供商的 `reasoningEffort` 参数直接相关；请求已存在且得到社区支持，预计将被纳入下一个功能发布。 |
| **#5731** *AnySearch 提取* | 开放，1 条评论 | 低摩擦的免费搜索工具；提供商已批准，将作为 web_fetch 技能提供，符合纳诺机器人集成外部检索的需求。 |
| **#5718** *OpenRouter 图像生成* | 开放 PR | OpenRouter 已经提供了“图像生成”API；支持将 nanobot 扩展到图像创建设备。 |
| **#5520** *LangFuse for Codex* | 开放 PR | 跟踪是高优先级功能；此修复将使 Codex 的运行具有与 OpenAI 兼容的提供商相同的可观察性。 |
| **#5652** *Signed direct delivery webhook* | 开放 PR | 满足 CI/监控/计费等系统的确定性通知需求，而不会触发完整的 agent 流水线。 |
| **#5788** *Nanobot 0.3.5 发布* | 开放 Issues（公告） | 当前版本；下游用户将监控下一个版本以获取合并的功能。 |

在 v0.3.5 版本发布后，**推理 effort 升级** 和 **AnySearch 后端** 最有可能成为下一个稳定版本的主要候选功能，而 **OpenRouter 图像生成**、**LangFuse 跟踪** 和 **webhook 交付** 可能作为配套功能一起发布。

---

### 7. 用户反馈摘要

- **梦运行时稳定性** – 用户报告梦运行时长时间运行（25 至 111 分钟），重复调用相同的 `read_file`，并担心全球 200 次迭代限制。PR #5782 直接解决了这个问题，但 Issue #5781 仍然反映了对更明确的 `maxIterations` 行为的担忧。
- **推理控制** – 用户（和贡献者）强调了 **reasoningEffort** 参数的可用性，但希望有内置的“默认 + 升级”策略来避免手动配置。Issue #4419 表达了对更智能的默认行为的明确需求。
- **网络检索** – AnySearch 团队请求了一个不需要 API 密钥且具有匿名配额的集成，以支持“零接触”使用。Issue #5731 表明了用户对更灵活的网络提取功能的偏好。
- **仓库协作** – 一名用户（Issue #5790）请求代码仓库邀请链接；该 Issue 已被关闭，但反映了团队协作工具方面的需求。
- **UI/UX** – 虽然没有直接的评论，但 PR #5791 表明了一些用户注意到在 agent 运行期间 UI 变得不那么响应了。

总体而言，用户的反馈反映了对**稳定性和可预测性**的需求（梦运行时、消息传递和 TUI 响应时间），以及对**更智能的默认配置**和**更多无摩擦的外部服务**的渴望。

---

### 8. 待处理积压（长时间未解决的关键议题）

| 条目 | 类型 | 开放时间 | 评论/活动 | 关注状态 |
|------|------|----------|----------------|--------------|
| **#4419** *Reasoning effort escalation* | 功能请求 | **2026-06-20**（≈ 3 个月） | 5 条评论（持续讨论） | **高** – 与推理模型直接相关，可能仍需实施。 |
| **#5731** *AnySearch 提取* | 功能增强 | **2026-09-11**（≈ 1 周） | 1 条评论 | **中** – 提供商已准备好，但仍未合并。 |
| **#5781** *Dream 运行循环* | 错误/增强 | **2026-09-15**（≈ 2 天） | 3 条评论 | **中** – 这个问题已经有修复 PR (#5782)，但需要验证。 |
| **#5652** *Signed direct delivery webhook* | 功能增强 | **2026-09-04**（≈ 2 周） | 无评论（可能在审查中） | **中** – 已准备好合并，但尚未完成。 |
| **PR #5794** *Cross-session 交付* | 修复 | **2026-09-16**（≈ 1

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-17

---

## 1. 今日速览

- 项目在过去24小时内保持中等活跃度，共处理50条Issue与50条PR更新；
- 无新版本发布，但多个高优先级Bug被快速响应；
- 社区聚焦于Agent行为异常、模型兼容性及多平台集成（如WhatsApp重连问题）；
- 多项PR聚焦于Bot Mode群组聊天优化、桌面端体验改进及系统稳定性提升；
- 当前项目整体运行状态稳定，但仍存在部分影响用户体验的阻塞性问题需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 合并/关闭的关键PR

- **[#113382](https://github.com/NousResearch/hermes-agent/pull/113382)**  
  - 类型：Bug修复  
  - 影响：修复了Bot Mode群组聊天中成员标签显示问题，提升了用户识别度。
  
- **[#113384](https://github.com/NousResearch/hermes-agent/pull/113384)**  
  - 类型：功能增强  
  - 影响：允许用户在已有群组房间中修改成员列表，增强了群组管理灵活性。

- **[#113444](https://github.com/NousResearch/hermes-agent/pull/113444)**  
  - 类型：Bug修复  
  - 影响：解决了群组房间因敏感词或死锁导致静默的问题，提升稳定性。

---

## 4. 社区热点

### 最具讨论热度的问题

- **#88584 [Automated Nous integration is blocked]**  
  - 评论数：108 | 链接：[Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584)  
  - 分析：反映了自动化流程集成中的冲突问题，可能涉及CI/CD或部署流程异常，需维护团队介入协调。

- **#103483 [muse-spark turns end mid-task on finish_reason=stop]**  
  - 评论数：16 | 👍：11 | 链接：[Issue #103483](https://github.com/NousResearch/hermes-agent/issues/103483)  
  - 分析：该问题影响OpenRouter/OpenAI模型的正常输出，已获得较高关注度，或为P1优先处理对象。

---

## 5. Bug 与稳定性

### 严重Bug列表（按优先级排序）

| 严重等级 | 标题 | 描述 | 是否有Fix PR |
|----------|------|------|---------------|
| P0 | Image eviction fires at keep-newest=3, invalidating Anthropic cache | 频繁触发缓存失效，显著增加token消耗 | ❌ |
| P1 | `muse-spark` turns prematurely terminate | 模型生成提早中断 | ❌ |
| P1 | `hermes update` causes ImportError during gateway restart | 更新流程出错，影响稳定运行 | ❌ |
| P2 | Desktop session status dot remains blue when blocked | UI状态未同步提示用户输入需求 | ❌ |

---

## 6. 功能请求与路线图信号

### 用户提议的新功能

- **#112639 [RFC: script-speed computer use via semantic state]**  
  - 链接：[Issue #112639](https://github.com/NousResearch/hermes-agent/issues/112639)  
  - 内容：提议通过语义状态、预执行等技术加速计算机操作流程。  
  - 当前状态：初步设计阶段，有相关开发者支持意见，有望纳入未来版本。

- **#113289 [Real-time event monitoring for cron jobs]**  
  - 链接：[Issue #113289](https://github.com/NousResearch/hermes-agent/issues/113289)  
  - 内容：请求支持更高频的事件监听机制以替代当前cron轮询方式。  
  - 当前状态：尚未形成具体方案，属于增强类功能请求。

---

## 7. 用户反馈摘要

### 主要痛点与使用场景

- **模型行为异常**：部分用户报告`muse-spark`模型在推理过程中异常中断，影响实际应用效果。
- **多平台集成问题**：WhatsApp平台存在消息重复发送问题，影响用户体验。
- **UI交互不一致**：Desktop端会话状态未能准确反馈用户操作需求，造成 confusion。
- **性能瓶颈**：长命令检测模块(`detect_dangerous_command`)存在性能问题，影响系统响应速度。

---

## 8. 待处理积压

### 长期未响应的问题建议关注

- **#64890 [Propagate per-run metadata from POST /v1/runs to MCP tools/call]**  
  - 链接：[Issue #64890](https://github.com/NousResearch/hermes-agent/issues/64890)  
  - 状态：自2026年7月提出至今未被分配处理，可能影响MCP生态兼容性。

- **#113546 [Hermes Cloud scale-to-zero prevents Photon iMessage wake-up]**  
  - 链接：[Issue #113546](https://github.com/NousResearch/hermes-agent/issues/113546)  
  - 状态：刚刚提出但关系到云服务核心功能，建议尽快评估优先级。

--- 

**总结：**  
今日Hermes Agent项目活跃度中等，主要集中在Bug修复与功能优化上。社区反馈显示出对Agent性能、界面一致性以及跨平台稳定性的浓厚兴趣。建议团队加快对高优先级Bug（如P0/P1）的响应速度，并跟进RFC类功能设计以引导项目方向。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-17）

## 1. 今日速览
今日 PicoClaw 项目活跃度较低，主要集中在历史遗留条目的清理：过去 24 小时内无新 Issue 开启，仅 1 条旧 Issue 被关闭；4 条 PR 有更新，其中 3 条被关闭/合并（均带 `[stale]` 标记），1 条保持开放但同样陈旧。无新版本发布。整体看，项目今日无新增功能落地，维护动作以结清闲置 backlog 为主，社区实时互动稀疏，健康度表现为“低活跃但 backlog 有序收敛”。

## 2. 版本发布
今日无新版本发布，本节省略。

## 3. 项目进展
今日合并/关闭的 PR 均完善了信道（Channel）稳定性与交互逻辑：
- **PR #3357** [关闭] `fix(telegram)`: 在 `mention_only: true` 的群组里，将“回复机器人自身消息”视为隐式提及，修复了对话中断问题。链接：https://github.com/sipeed/picoclaw/pull/3357
- **PR #3356** [关闭] `fix(telegram)`: 回复/引用文件消息时重新附加被引用的文档，避免 Agent 仅收到 `[file]` 占位符。链接：https://github.com/sipeed/picoclaw/pull/3356
- **PR #1780** [关闭] `enhancement`: QQ 连接稳定性参数（重连间隔、重试次数、限流）支持配置文件或环境变量定制，且向后兼容。链接：https://github.com/sipeed/picoclaw/pull/1780

上述变更提升了 Telegram 与 QQ 信道的鲁棒性，但三者均标记 `[stale]`，推测为长期未跟进后集中结清，项目向前迈进主要体现在信道质量修复而非新能力构建。

## 4. 社区热点
- **Issue #3343** [关闭] 标题：「Tool feedback animation can edit a Telegram message indefinitely after a failed turn」，含 4 条评论，是今日唯一有讨论痕迹的条目。链接：https://github.com/sipeed/picoclaw/issues/3343  
  诉求分析：用户 `raine` 反馈机器人失败轮次后动画仍每 3 秒调用一次 `editMessageText`，累计超 22.8 万次，触发 Telegram 服务端限流。该问题反映出社区对“资源泄漏类缺陷”和机器人合规调用的高度敏感，但 Issue 以 stale 关闭，未見后续修复跟进讨论。

其余 PR 评论数均为空，无显著热点。

## 5. Bug 与稳定性
按严重程度排列：
1. **[高] Issue #3343** – Telegram 工具反馈动画在 Agent 轮次失联后无限编辑消息，导致大规模 API 调用与服务器级限流（`retry_after`）。**状态**：Issue 已关闭（stale），提供数据中未关联修复 PR，疑似未根本解决。链接：https://github.com/sipeed/picoclaw/issues/3343
2. **[中] Telegram 回复处理逻辑缺陷** – 由 PR #3357（隐式提及丢失）、PR #3356（文档引用丢失）覆盖，均已关闭，对应 bug 已有代码级 fix。链接：https://github.com/sipeed/picoclaw/pull/3357 、https://github.com/sipeed/picoclaw/pull/3356
3. **[低] QQ 连接抖动** – PR #1780 增强重连与限流配置，提升稳定性。链接：https://github.com/sipeed/picoclaw/pull/1780

## 6. 功能请求与路线图信号
- **PR #3344** [开放，stale] 「Add Build Remote Agent phone pairing (gbr/1)」：提出手机通过 `gbr-agent` 配对围观桌面 Agent 的适配器，协议 `gbr/1`。链接：https://github.com/sipeed/picoclaw/pull/3344  
  信号：多设备远程协同/监控是潜在路线图方向，但因长期未获响应，短期纳入下个版本概率低。
- 已结清的 #1780 显示“信道参数可配置化”正被吸收，后续可能扩展至更多平台。

## 7. 用户反馈摘要
从 Issue #3343 评论可提炼：
- **痛点**：失败任务后缺乏动画/轮询终止机制，导致第三方平台（Telegram）惩罚性限流，直接影响机器人可用性。
- **使用场景**：用户部署 Agent 于 Telegram 长期运行，偶发 turn 失败。
- **情绪**：报告详实（含次数统计），但 Issue 被 stale 关闭且无公开修复确认，可能带来“报障无果”的负面体验。

## 8. 待处理积压
- **PR #3344**（开放，自 2026-08-23 起 stale，无评论）：手机远程配对功能实现已提交但未评审，提醒维护者如需布局多端协同应重启 review。链接：https://github.com/sipeed/picoclaw/pull/3344
- 全局观察：今日结清的 3 PR 与 1 Issue 均带 `stale`，说明仓库存在一批早期未跟进条目，建议设立周期性 stale 清理或回收机制以维持贡献者信任。

---
*报告基于 2026-09-17 抽取的 GitHub 公开活动数据生成，链接均指向 sipeed/picoclaw 对应条目。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-17

## 1. 今日速览

过去 24 小时，NanoClaw 仓库保持**高活跃度**：共更新 **35 条 PR**（25 条待合并、10 条已合并/关闭）和 **2 条 Issue**，无新版本发布。今日主线集中在**网关（Gateway）架构重构**与 **Iron Proxy 技能栈**的落地，同时社区正在紧急处理 Bun 1.4.0 `spawnSync` 在 CI 中导致 6 小时挂起的稳定性问题。整体健康度良好，但测试基础设施与 Bun 运行时的兼容性是当前最大风险点。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日关闭/合并的重要 PR 推动了以下方向：

- **CI 稳定性兜底**：[PR #3836](https://github.com/nanocoai/nanoclaw/pull/3836) 将 `registry-skills` 测试作业超时从 GitHub 默认 6 小时压缩至 20 分钟，防止挂起测试长期占用 runner。
- **网关接缝修复**：[PR #3840](https://github.com/nanocoai/nanoclaw/pull/3840) 针对网关栈修复了 4 处端到端安装问题：gateway 步骤终端状态块、OAuth token、缓存未命中及 WebSocket 握手，已合并到 `feat/gateway-setup-selection`。
- **Iron Proxy 隧道修复**：[PR #3843](https://github.com/nanocoai/nanoclaw/pull/3843) 修复了 Codex 经 Iron Proxy 端到端运行时的 WebSocket 握手与上游帧保持问题，将折叠进 [PR #3817](https://github.com/nanocoai/nanoclaw/pull/3817)。
- **凭证连接接口**：[PR #3824](https://github.com/nanocoai/nanoclaw/pull/3824) 已关闭，为提供者凭证连接引入了统一接口，支撑 [PR #3815](https://github.com/nanocoai/nanoclaw/pull/3815) 与 [PR #3825](https://github.com/nanocoai/nanoclaw/pull/3825) 的网关凭证生命周期。
- **旧 PR 清理**：[PR #101](https://github.com/nanocoai/nanoclaw/pull/101)（Add GitHub integration skill，创建于 2026-02-06）今日关闭，说明维护者正在清理过期或已被替代的技能提案。

---

## 4. 社区热点

> 注：原始数据中所有 PR 的「评论数」字段均显示为 `undefined`，因此无法按评论量精确排名。以下基于更新时间与影响面判断热点。

- **Iron Proxy 网关技能**：[PR #3817](https://github.com/nanocoai/nanoclaw/pull/3817) 由核心团队推进，旨在将 Iron Proxy 作为可选网关加入安装流程，OneCLI 仍为默认。这是近期架构改动的核心。
- **网关合约集中化**：[PR #3815](https://github.com/nanocoai/nanoclaw/pull/3815) 统一了凭证网关合约、 human approval 生命周期与终端事件持久化，是安全与可审计性的基础重构。
- **Bun spawnSync 挂起**：[Issue #3839](https://github.com/nanocoai/nanoclaw/issues/3839) 与 [Issue #3842](https://github.com/nanocoai/nanoclaw/issues/3842) 引发关注，社区诉求是彻底解决 Bun 同步子进程在 CI/Agent 容器中的 100% CPU 死循环。

背后诉求：用户与贡献者希望**网关选择更灵活**、**安装路径更健壮**，同时要求**测试运行时不再被 Bun 运行时 bug 阻塞**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 相关 Fix PR |
|---|---|---|---|
| **高** | `registry-skills` 的 `add-opencode` reapply 在 `bun test` 中挂起 6 小时，阻塞 CI | 已定位，Bun `spawnSync` 丢失子进程退出 | [PR #3841](https://github.com/nanocoai/nanoclaw/pull/3841) 改用 async spawn；[PR #3836](https://github.com/nanocoai/nanoclaw/pull/3836) 设置 20 分钟超时兜底 |
| **高** | `upload-trace` 仍通过 Bun `spawnSync` 执行 curl，可能卡死 poll loop | 新报 [Issue #3842](https://github.com/nanocoai/nanoclaw/issues/3842)，未关闭 | 暂无专门 PR，需跟进 [PR #3841](https://github.com/nanocoai/nanoclaw/pull/3841) 模式 |
| **中** | `setup.sh` 在 Fedora/Debian 等系统包安装的 Node 上因权限问题永久失败 | 已提 [PR #3844](https://github.com/nanocoai/nanoclaw/pull/3844) | 待合并 |
| **中** | WebSocket 握手与上游帧在 Iron Proxy 隧道中异常 | 已修复并折叠进主技能 PR | [PR #3843](https://github.com/nanocoai/nanoclaw/pull/3843) |
| **中** | webhook 端口恢复测试因随机端口占用偶发失败 | 已修复 | [PR #3803](https://github.com/nanocoai/nanoclaw/pull/3803) |

---

## 6. 功能请求与路线图信号

从今日活跃 PR 可捕捉到下一版本的路线图信号：

- **网关插件化**：核心团队正将 OneCLI 提取为可安装技能（[PR #3816](https://github.com/nanocoai/nanoclaw/pull/3816)），并引入 Iron Proxy 作为可选网关（[PR #3817](https://github.com/nanocoai/nanoclaw/pull/3817)）。未来大概率形成「网关即技能」的插件市场。
- **工具优先交付模式**：[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713) 与 [PR #3781](https://github.com/nanocoai/nanoclaw/pull/3781) 记录并强制按 agent group 的 delivery mode，解决无法稳定输出 final-text 的 provider 的兼容性问题，预示对多 provider 兼容性的强化。
- **OpenCode 生态集成**：[PR #3825](https://github.com/nanocoai/nanoclaw/pull/3825) 支持 OpenCode 通过 Iron Proxy 认证，[PR #3841](https://github.com/nanocoai/nanoclaw/pull/3841) 修复其测试挂起，说明 OpenCode 是近期重点接入目标。
- **外部凭证代理**：[PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634) 的 `add-paws4claws` 技能引入 AWS 凭证代理，显示对多云/外部凭证源的支持在扩展。

---

## 7. 用户反馈摘要

从 Issues 与 PR 摘要中提炼的真实痛点：

- **运行时稳定性不满**：Bun 1.4.0 `spawnSync` 同步子进程会丢失退出码并 100% CPU 空转，导致 CI 与个人环境均可能挂起。用户迫切需要迁移到异步 spawn 或规避同步调用。
- **安装体验受系统包管理器影响**：通过 `dnf/apt` 安装 Node 的用户在 `setup.sh` 中遇到 `EACCES` 权限错误，反映出脚本对非 nvm/Homebrew 安装路径支持不足。
- **网关选择需求**：用户希望默认保持 OneCLI 的同时，能在高级安装中选择 Iron Proxy/Codex 等其他网关，且不影响已有的 provider 登录。
- **Provider 兼容焦虑**：部分 provider 无法可靠持有 final-text envelope 合约，导致用户请求可能无响应，社区正通过 `tools-only` 模式解决。

---

## 8. 待处理积压

以下 PR/Issue 创建较早、仍在开放，建议维护者关注优先级与是否仍相关：

| 项目 | 创建时间 | 当前状态 | 提醒 |
|---|---|---|---|
| [PR #101](https://github.com/nanocoai/nanoclaw/pull/101) Add GitHub integration skill | 2026-02-06 | 今日已关闭 | 已清理，无需再跟进 |
| [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) add-github polling mode | 2026-05-06 | 开放 | 与关闭的 #101 功能重叠，需决定是合并、重构还是关闭 |
| [PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634) add-paws4claws skill | 2026-05-28 | 开放 | AWS 凭证代理技能，已开放近 4 个月 |
| [PR #2681](https://github.com/nanocoai/nanoclaw/pull/2681) skip linger on encrypted home | 2026-06-03 | 开放 | 影响加密 home 目录的系统服务安装，用户场景明确 |
| [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) carry channel attachments as structured parts | 2026-07-30 | 开放 | 关乎 provider 附件格式兼容性，已开放近 2 个月 |
| [PR #3196](https://github.com/nanocoai/nanoclaw/pull/3196) Fix/add mount readonly | 2026-08-07 | 开放 | 涉及容器安全与只读挂载，需代码审查 |

---

**总结**：NanoClaw 今日活跃度较高，核心团队聚焦网关架构与 Iron Proxy 集成，同时正在紧急修复 Bun 运行时引发的 CI 挂起问题。建议优先合入 [PR #3841](https://github.com/nanocoai/nanoclaw/pull/3841)、[PR #3844](https://github.com/nanocoai/nanoclaw/pull/3844) 等稳定性修复，并清理 5–7 月长期未决的 PR 积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-09-17）

## 1. 今日速览
NullClaw 在过去 24 小时内项目活跃度偏低，无新版本发布、无 Pull Request 更新，仅闭环 1 个 Issue（#999）。项目整体处于平稳维护期，代码合入与功能交付暂歇，但 Issue 响应效率较高（创建与关闭均发生在 2026-09-16 当日）。从健康度看，社区互动聚焦于架构探索而非故障修复，核心仓库稳定性无新增风险。

## 2. 版本发布
无新版本发布，无破坏性变更与迁移注意事项。

## 3. 项目进展
今日无 PR 合并或关闭记录，代码层面无显性推进。  
Issue 侧：#999（[nullclaw/nullclaw Issue #999](https://github.com/nullclaw/nullclaw/issues/999)）已由作者 Azdwarf5Azdwarf 于 2026-09-16 创建并同日关闭。该议题探讨将 `litter` (0xSero/litter) 的移动 GUI 架构fork 至 `human-guard-rail` 作为 NullClaw 客户端，虽已关闭但未关联任何落地 PR，推测为概念验证或转移至其他分支/仓库讨论。项目整体代码向前迈进幅度为本日零。

## 4. 社区热点
今日唯一且讨论集中的议题为 **#999** ([nullclaw/nullclaw Issue #999](https://github.com/nullclaw/nullclaw/issues/999))，评论数 1，获赞 0。  
该 Issue 提议借鉴 `litter` 的“薄 Swift/Kotlin UI + 共享 Rust 核心 (UniFFI)”跨平台方案，将当前纯 Android/Gradle 形态的 `human-guard-rail` (~/dev/human-guard-rail) 重构成统一移动端 NullClaw 客户端，对接 Codex/Local Studio 等服务。背后诉求反映出开发者对轻量、跨端 agentic-coding 客户端形态的强烈兴趣，以及扩展 NullClaw 至移动场景的生态意图。

## 5. Bug 与稳定性
今日无新增 Bug、崩溃或回归问题报告。项目稳定性面板无新增风险项，运行健康度良好。

## 6. 功能请求与路线图信号
Issue #999 ([nullclaw/nullclaw Issue #999](https://github.com/nullclaw/nullclaw/issues/999)) 实质为架构级功能请求：建议引入基于 UniFFI 的 Rust 共享核心 + 原生移动端 UI 的客户端范式，使 `human-guard-rail` 演进为 NullClaw 的移动前端。结合当前无相关 PR 跟进，该需求暂未进入实施排期，但可作为下一阶段“多端统一客户端”路线图的候选信号。

## 7. 用户反馈摘要
从 #999 的描述与单一评论中提炼：反馈者（偏开发者/贡献者身份）关注点在于客户端架构现代化（从普通 Gradle 应用向跨平台 Rust 核心迁移），目标使用场景为移动端直连 Agent 服务端。暂无终端用户痛点、满意度或易用性反馈，整体偏向技术选型层面的前瞻性探讨。

## 8. 待处理积压
基于所提供的 24 小时窄窗口数据，仅捕获 1 条 Issue 且已关闭，无法识别长期未响应的重要积压项。提醒维护者：需结合全量历史 Issue/PR 看板排查 2026-09 之前未关闭的关键任务（尤其是架构探索类议题如移动端客户端化），避免潜在贡献者提案流失。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期**：2026-09-17  
**数据源**：GitHub (netease-youdao/LobsterAI) 过去 24 小时动态

---

## 1. 今日速览
- 过去 24 小时内，LobsterAI 仓库进行了一次显著的**历史遗留问题批量清理**：共关闭 9 个 Issue 与 18 个 PR，其中绝大多数为标记 `[stale]`、创建于 2026-03-31 的旧提案，于 2026-09-16 集中更新并关闭。
- 与新功能/修复真实落地相关的近期 PR 有 3 个（#2688、#2689、#2690，均创建于 2026-09-16），聚焦于 OpenClaw 启动修复与鉴权冷却绕过，表明核心架构维护仍在推进。
- 无新版本发布，新开/活跃 Issue 与待合并 PR 均为 0，项目当日活跃度主要体现在**技术债务清理**与**底层稳定性补丁**，而非社区互动或新特性爆发。

---

## 2. 版本发布
无新版本发布（当日 Release 数为 0），本节省略。

---

## 3. 项目进展
### 近期有效合并/关闭的 PR（非 stale，2026-09-16 提交）
- **[#2690](https://github.com/netease-youdao/LobsterAI/pull/2690)** `feat(openclaw)`: 增加修复快照回滚与 Agent 媒体迁移处理。按阶段追踪快速修复失败，支持从预修复快照恢复，提升 OpenClaw 自愈能力。
- **[#2689](https://github.com/netease-youdao/LobsterAI/pull/2689)** `feat(openclaw)`: 启动修复前迁移共享状态 Schema。解决旧配置孤立迁移对可读配置文件依赖的问题。
- **[#2688](https://github.com/netease-youdao/LobsterAI/pull/2688)** `fix(auth)`: 绕过 LobsterAI 代理凭证冷却。避免上游鉴权失败导致共享代理凭证被禁用 5 小时，隔离服务故障与用户错误。

### 批量关闭的历史 PR（标记 stale，关联 Issue 同步关闭）
涵盖并发控制（#1090、#1100、#1108）、IM 路由（#1106）、UI/UX（#1119、#1121、#1122、#1138）、搜索（#1125）、SSE 解析（#1130）、MCP（#1127）等。这些 PR 虽关闭，但部分对应 Issue 的修复状态需结合代码核查（见第 8 节）。

**整体迈进**：OpenClaw 的容错与启动可靠性获得实质性增强；历史功能提案被归档，代码树得到精简。

---

## 4. 社区热点
- 当日**新开/活跃 Issue 为 0**，PR 评论数多为 undefined 或 0，无显著社区讨论热点。
- 历史 Issue 中评论数最高为 **[#1112](https://github.com/netease-youdao/LobsterAI/issues/1112)**（表格留白，3 评论），其次 [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) 等（2 评论）。诉求多围绕 UI 细节与转换体验，但均已随 stale 流程关闭，未引发当日互动。
- **背后诉求**：用户更早前关注点在于“开箱即用稳定性”（IM、定时任务、安装流程）与“键盘流效率”（权限弹窗快捷键），这些信号已被历史 PR 捕获但未能在当日保持活跃。

---

## 5. Bug 与稳定性
按严重程度排列（均已于当日标记 CLOSED，部分带 stale）：

| 严重度 | 问题 | Issue / PR | 修复 PR 状态 |
|--------|------|------------|--------------|
| 高 | IM 并发导致重复会话/消息丢失 | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) / [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | PR 已关（stale） |
| 高 | 定时任务无重入保护/幽灵事件 | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) / [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | PR 已关（stale） |
| 高 | CoworkRunner 并发流损坏 | [#1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | PR 已关（stale） |
| 中 | Anthropic SSE 行缓冲缺失丢数据 | [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) | PR 已关（stale） |
| 中 | MCP 强制关闭 timer 误伤新 server | [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) | PR 已关（stale） |
| 低 | 表格上下留白 | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) / [#1122](https://github.com/netease-youdao/LobsterAI/pull/1122) | PR 已关（stale） |
| 低 | md 转 pdf 在线服务体验 | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | 无关联 PR 显示 |

> 注意：上述“高”严重度问题均有对应 PR 但被 stale 关闭，**未确认是否并入主干**，建议回归测试验证。

---

## 6. 功能请求与路线图信号
- **已提出且有关联 PR（历史）**：
  - 工具权限弹窗键盘快捷键 [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) / [#1119](https://github.com/netease-youdao/LobsterAI/pull/1119)
  - 会话错误一键 Retry [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) / [#1121](https://github.com/netease-youdao/LobsterAI/pull/1121)
  - 会话全文搜索与高亮 [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125)
  - Docker 沙箱就绪探针 [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103)
- **路线图判断**：当日真实落地的仅为 OpenClaw 底层修复（#2688-2690）。UX 类功能虽被贡献但随 stale 关闭，短期路线图信号指向**OpenClaw 可靠性优先**，上述功能需重新提审才可能纳入下版本。

---

## 7. 用户反馈摘要
从 Issue 描述提炼的早期（2026-03）用户痛点：
- **安装与进程管理**：[#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) 退出登录后仍弹“Lobster AI 无法关闭”，安装体验受损。
- **Agent 数据一致性**：[#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) 新建重名 agent 后任务记录不刷新，需手动切换触发，暴露状态同步缺陷。
- **IM 集成健壮性**：[#1099](https://github.com/netease-youdao/LobsterAI/issues/1099)、[#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) 反映钉钉/IM 路由与并发处理不可靠。
- **转换与输出**：[#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) 吐槽 md→pdf 打开多页面且带入会员框，干扰纯净输出。
- 满意度：用户提供了详尽复现与截图，配合度高，但对长期未响应后遭 stale 关闭可能感到挫折。

---

## 8. 待处理积压
- 根据所提供数据，**所有列出的 9 Issue 与 18 PR 均已 CLOSED**，无显式“待合并”或“新开”项。
- **风险提示**：27 个关闭项中 24 个带 `[stale]` 标签且创建于 3 月、9 月批量关闭。其中如 [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096)（无修复 PR）、[#1139](https://github.com/netease-youdao/LobsterAI/issues/1139)（无关联 PR 列出）可能**未真正修复即被清理**。
- **维护者行动建议**：核查 stale 关闭的 PR（尤其 #1090/#1100/#1108 等高严重度并发修复）是否已被等效逻辑合并；对 #1096、#1139 等无绑定 PR 的 Issue 确认解决状态，避免债务隐形累积。

---
*报告生成依据：仓库公开事件快照（截至 2026-09-16 更新），链接指向 github.com/netease-youdao/LobsterAI。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报** – 2026 年 09 月 17 日

---

## 1. 今日速览
- 过去 24 小时共有 **2 个 Issues** 更新（1 个已关闭的沙盒 Bug，1 个新报告的远程 MCP 服务器生存能力问题）以及 **2 个新 PR** 提交（沙盒配置增强和构建缓存优化）。项目处于稳步发展状态：新的功能和故障修复持续推进，但合并流程尚未完成，表明团队正在审查代码变更。
- 活跃度评估：Issues 和 PR 活动适中，表明社区反馈和开发工作都在正常进行。没有新版本发布，因此关注点仍集中在功能开发和问题修复上。

---

## 2. 版本发布
*无* – 目前没有新版本发布。

---

## 3. 项目进展
| PR | 标题 | 状态 | 重要性 |
|----|-------|------|--------------|
| **#1272** | `feat(sandbox): per‑agent mounts, run_as 和强制沙盒` | ✅ **待合并** | 引入三个新的沙盒控制参数 (`sandbox.mounts`、`sandbox.run_as`、`sandbox.force`），使每个代理能够拥有独立的挂载、用户ID和强制沙盒模式。这些变更增强了代理隔离性和灵活性。 |
| **#1270** | `feat(build): 跨镜像构建缓存 Cargo 依赖，并提供构建脚本` | ✅ **待合并** | 通过使用 BuildKit 缓存挂载，解决了每次镜像构建都会重新编译整个工作区的性能问题。冷建时编译时间大幅减少，有利于大规模部署。 |

*合并状态*：这两项变更尚未合并，因此它们对主线的影响尚不确定。它们代表了项目在沙盒管理和构建优化方面的实质性进展。

---

## 4. 社区热点
- **Issues #1271** – *“一个远程 MCP 服务器如果在启动时失败，就不会重试，丢失的会话会导致所有后续调用失败。”* ⭐ **0 条评论，0 次点赞**（[链接](https://github.com/moltis-org/moltis/issues/1271)）
  - *为何重要*：这反映了生产环境中远程 MCP 服务器的高可用性要求。一个未能重试的失败服务器和一个因会话丢失而导致所有后续调用的失败，会严重影响服务端点。社区对这个问题给予了关注，因为它直接关系到系统的可靠性。

- **PR #1272** – *“沙盒配置增强”*（[链接](https://github.com/moltis-org/moltis/pull/1272)）
  - *活动迹象*：已获得一个提交者的支持（作者 Bergmann89），且代码变更相对集中（三个新配置项）。这些变更可能成为下一版本的标准功能。

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 状态 | 描述 |
|----------|-------|--------|-------------|
| **高** | **#1246** – *无法在沙盒中运行，原因是在添加节点后* | ✅ **已关闭** | 报告者 (maop) 指出，在向沙盒中添加节点后，代理将无法正常运行。此问题已标记为已修复（见 PR #1246 修复）。 |
| **中高** | **#1271** – *远程 MCP 服务器重试和会话管理问题* | ⚠️ **未解决** | `McpManager::start_enabled` 在启动失败时放弃，未触发健康监控程序。任何先前建立的会话丢失都会导致所有后续调用的失败。无修复 PR。 |

*稳定性概述*：虽然高优先级的问题 (#1246) 已被修复，但仍存在一个可能影响远程服务可用性的未解决问题 (#1271)。建议尽快进行调查，因为它可能导致服务中断。

---

## 6. 功能请求与路线图信号
- **沙盒控制强化** – PR #1272 明确提出了三个新配置项 (`mounts`、`run_as`、`force`）。这些请求的优先级较高，因为它们已编写完整的实现，并已得到提交者的批准。很可能被合并到下一个非破坏性版本中。
- **构建性能优化** – PR #1270 解决了重复编译问题，通过使用缓存挂载来加速镜像构建流程。这是一个非破坏性的性能增强，符合持续集成最佳实践。

*路线图影响*：这两个 PR 表明项目正在向更细粒度的沙盒管理和更高效的构建流程方向发展。如果合并，将使下一版本更加强大且更易于扩展。

---

## 7. 用户反馈摘要
- **Issues #1246 评论**：虽然评论内容未显示，但问题标题表明用户在实际使用中遇到了沙盒中节点添加后的运行时故障。这表明现有的沙盒初始化逻辑可能存在边缘情况，导致代理无法正常工作。
- **Issues #1271 的用户表达**：报告者强调了“失败即终止，无重试”机制的问题。这反映了对生产环境服务器自动恢复能力的明确需求，也表明用户在使用远程 MCP 功能时期望更高的容错性。

---

## 8. 待处理积压
| 类型 | 标识符 | 打开时间 | 关注度 |
|------|----------|----------|----------|
| **Issues** | #1271 – *远程 MCP 服务器重试/会话丢失* | 2026-09-16 | **高** – 影响服务可用性，无修复 PR。 |
| **PRs** | #1272 – *沙盒配置增强* | 2026-09-16 | **中度** – 准备就绪，待合并。 |
| **PRs** | #1270 – *构建缓存优化* | 2026-09-15 | **中度** – 准备就绪，待合并。 |

*建议*：维护者应优先处理 Issue #1271，因为它可能对现有用户造成直接影响。接着，可以合并 PR #1272 和 PR #1270，以将这些经过审查的功能和性能改进引入主线。

---

**总结**：项目状态健康，开发活动稳定。两个待合并的 PR 带来了显著的功能和性能提升。最重要的阻塞问题是远程 MCP 服务器的重试和会话管理，这需要立即关注。无新版本发布，但下次发布时将包括沙盒增强功能和构建缓存改进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报  
**日期**：2026-09-17  
**数据源**：GitHub 仓库 `agentscope-ai/QwenPaw`（注：用户所称 CoPaw 与 QwenPaw 为同一项目标识）  

---

## 1. 今日速览
过去 24 小时内，项目活跃度保持高位：共更新 Issue 25 条（13 条新开/活跃，12 条关闭），PR 37 条（25 条待合并，12 条已合并/关闭），无新版本发布。社区讨论集中于多租户 Hub 规划与大量稳定性缺陷（内存耗尽、SSE 流冻结、subAgent 超时等）。整体看，项目处于密集开发与修复并行阶段，Issue 关闭率近 50%，健康度良好但新增 Bug 报告量偏高，需关注核心运行时健壮性。

---

## 2. 版本发布
今日无新版本发布（最新 Releases 为空），本节省略。

---

## 3. 项目进展（今日合并/关闭的重要 PR 与 Issue 修复）
以下为今日状态变更为“已关闭/已合并”的关键变更，显示功能推进与缺陷修复：

- **PR #7120** `security: enable shell evasion checks by default + regression test`  
  默认开启全部 7 项命令注入规避检查，提升代理执行安全性。  
  https://github.com/agentscope-ai/QwenPaw/pull/7120

- **PR #7783** `fix(ACP): Improves the experience of delegating work to external ACP runners`  
  修复 ACP 回复重复/分片问题，优化外部代理委派体验。  
  https://github.com/agentscope-ai/QwenPaw/pull/7783

- **PR #6569** `fix(console): suppress EIO/EPIPE print errors after detached TTY`  
  解决终端关闭后守护进程打印至失效 fd 导致的崩溃。  
  https://github.com/agentscope-ai/QwenPaw/pull/6569

- **PR #4171** `feat: add memory-distill tool plugin with title-diffing distillation engine`  
  内存蒸馏插件（噪声降低 ~92%）历经数月评审今日关闭合并。  
  https://github.com/agentscope-ai/QwenPaw/pull/4171

- **PR #7805** `fix: match settings menu font weight`  
  控制台 UI 细节对齐。  
  https://github.com/agentscope-ai/QwenPaw/pull/7805

**关联 Issue 修复关闭**（体现项目向前迈进）：
- #7799 图片流式显示后消失（疑似回归）已闭环  
  https://github.com/agentscope-ai/QwenPaw/issues/7799
- #7689 多模态端点 PDF 块序列化错误已修复（仅非多模态模型前次修复，本次补全）  
  https://github.com/agentscope-ai/QwenPaw/issues/7689
- #7720 / #7693 Creator 插件串行生成阻塞与审核中断缺陷已关闭  
  https://github.com/agentscope-ai/QwenPaw/issues/7720 | https://github.com/agentscope-ai/QwenPaw/issues/7693
- #7726 ACP `trusted:true` 静默回退交互提示逻辑修正已关闭  
  https://github.com/agentscope-ai/QwenPaw/issues/7726

**评估**：安全基线、外部代理协议、内存管理插件及多处控制台/插件 Bug 今日完成合入或关闭，核心功能完整性提升明显。

---

## 4. 社区热点（高互动 Issue/PR）
按评论数与反应排序：

1. **Issue #7318** `[Discussion] QwenPaw Hub 多租户版将于 2.2.0 推出：接下来做什么？`  
   评论 29，👍 4。作者 rayrayraykk。社区对团队版 Hub 呼声高，征集后续功能（如管理式技能、多用户管理）。  
   https://github.com/agentscope-ai/QwenPaw/issues/7318

2. **Issue #7678** `[Bug] spawn subAgent 全部 timeout 失败`  
   评论 9。用户报告 v2.2.0 下子代理任务 100% 失败，即使拉长超时无效。  
   https://github.com/agentscope-ai/QwenPaw/issues/7678

3. **Issue #7722** `内存耗尽三路径（无界流缓冲/keep-alive 实例堆叠/doom-loop 绕过）`  
   评论 5。提供可控复现与最小修复，指出版本 2.2.0 容器以 ~1MB/s 填充满内存后 OOM。  
   https://github.com/agentscope-ai/QwenPaw/issues/7722

4. **Issue #7815** `Console 懒加载块失败无法恢复`  
   评论 4。UI 错误边界重试机制失效，必须整页刷新。  
   https://github.com/agentscope-ai/QwenPaw/issues/7815

5. **Issue #7799** `v2.2.1 图片发送后消失（#5320 复发）`  
   评论 4（已关闭）。  
   https://github.com/agentscope-ai/QwenPaw/issues/7799

**诉求分析**：社区核心诉求分两层——① 产品形态上渴望团队/多租户能力（Hub 路线图）；② 质量上强烈要求解决运行时稳定性（子代理、内存、UI 恢复），反映 2.2.x 版本在并发与资源管控上尚不成熟。

---

## 5. Bug 与稳定性（按严重程度排列，标注 fix PR）
| 严重度 | Issue | 描述 | 已有 Fix PR |
|--------|-------|------|-------------|
| 严重 | #7722 | 容器内存耗尽三路径，OOM 挂起 | 无直接合并 PR；#7807（通道懒加载）#7725（workspace SSE 轮询）可能缓解但未合 |
| 严重 | #7678 | spawn subAgent 全失败 timeout | 无 |
| 高 | #7815 / #7814 / #7813 | Console SSE 裸 null 载荷致流冻结、无终端事件 | 无（#7816 打包修控制台通道，未直接修 SSE） |
| 高 | #7792 | 微信附件 file:// URL 致 API 400 | 无 |
| 中 | #7817 | 飞书 p2p 230101 及文件事件缺失 | 无（框架层建议） |
| 中 | #7812 | 桌面启动后斜杠命令作用于错误 session | 无 |
| 中 | #7810 | 上下文限制设置无效（271k 超出 131k） | 已关闭（#7810 用户提问关闭） |
| 低 | #7799 | 图片消失（已闭环） | 已关闭修复 |
| 低 | #7689 | PDF 多模态路径未修（已闭环） | 已关闭修复 |

**结论**：开放 Bug 中仅少数有对应待合 PR，内存与 SSE 健壮性为最高风险，建议优先排期。

---

## 6. 功能请求与路线图信号
- **多租户 Hub 延展**：Issue #7318 征集后续；PR #7779 `feat(hub): add model gateway, member governance and usage dashboard`（开放）直接呼应，预计入 2.2.0+。  
  https://github.com/agentscope-ai/QwenPaw/pull/7779
- **i18n 支持**：Issue #7809 工具审批卡片硬编英文，需国际化。  
  https://github.com/agentscope-ai/QwenPaw/issues/7809
- **聊天模式分离**：Issue #7801 `Discuss vs Execute` 模式选择器，避免误执行。  
  https://github.com/agentscope-ai/QwenPaw/issues/7801
- **UI 提醒增强**：Issue #7800 任务状态底栏橙色标签。  
  https://github.com/agentscope-ai/QwenPaw/issues/7800
- **实时语音**：PR #7785 `feat(voice): add realtime voice chat`（开放）。  
  https://github.com/agentscope-ai/QwenPaw/pull/7785
- **统一工作台**：PR #7790 `feat(console): add unified chat workbench shell`（开放）。  
  https://github.com/agentscope-ai/QwenPaw/pull/7790
- **数据 App**：PR #7637 `QwenPaw-Data app 0.3.0`（开放）。  
  https://github.com/agentscope-ai/QwenPaw/pull/7637

**信号**：下版本可能围绕 Hub 治理、控制台工作台重构、语音交互展开；i18n 与模式切换为高票社区需求。

---

## 7. 用户反馈摘要
- **痛点**：  
  - 个人桌面版（Windows/Mac）在启动初期 session 错乱（#7812）、上下文压缩阈值不生效（#7810）。  
  - 频道集成弱：飞书 p2p 发消息被限（#7817），微信媒体附件传 URL 失败（#7792）。  
  - Creator 插件多图生成被审核中断永久卡死（#7693，已修）。  
  - 资源类：长期运行内存泄漏致服务挂起（#7722）。  
- **满意点**：  
  - 多租户 Hub 方向获社区认可（#7318 高热）。  
  - 图片/PDF 显示类回归响应较快（#7799/#7689 当日闭）。  
  - 安全默认加固（#7120 合入）受潜在企业用户关注。  
- **典型场景**：个人 AI 助手用于编程、文件处理、团队客服（飞书/微信/Discord），以及创空间内容生成（Creator）。

---

## 8. 待处理积压（长期未合/需维护者关注）
- **PR #6776** `fix(browser): self-heal dead Playwright driver connections`（开放，ready-for-human-review，创建 2026-08-07）  
  浏览器后端“死一次永不可用”缺陷修复待审。  
  https://github.com/agentscope-ai/QwenPaw/pull/6776
- **PR #7057** `fix(shell): add user-local bin dirs to subprocess PATH`（开放，Under Review，08-15）  
  服务环境 PATH 剥离致 CLI 找不到，影响开发者体验。  
  https://github.com/agentscope-ai/QwenPaw/pull/7057
- **PR #7382** `feat(chat): adapt AgentScopeRuntimeWebUI 1.2 and stabilize queues`（开放，08-28）  
  聊天创建竞态修复长期未合。  
  https://github.com/agentscope-ai/QwenPaw/pull/7382
- **PR #7613** `feat(memory): add OpenViking memory plugin`（开放，09-07）  
  内存插件架构重构后待审。  
  https://github.com/agentscope-ai/QwenPaw/pull/7613
- **Issue #7650** `频道参数透传 mcp 工具`（开放，wontfix 标签但未解决，09-09）  
  企业集成诉求：频道 JSON 顶层数据（电话/工号）不透传 MCP。  
  https://github.com/agentscope-ai/QwenPaw/issues/7650

**提醒**：上述 PR 多已 `ready-for-human-review` 或 `Under Review` 超 1–2 月，建议维护者集中评审以避免贡献者流失。

---  
*日报生成基于所提供的 GitHub 事件快照，链接指向对应 Issue/PR 详情。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-09-17 | 仓库：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)**

---

## 1. 今日速览

过去 24 小时，ZeroClaw 保持高活跃度：**17 条 Issues 更新**（全部为开放/活跃状态，无关闭），**50 条 PR 更新**（49 条待合并，仅 1 条合并/关闭），无新版本发布。社区贡献高度集中于两大主题：**多模态（图像标记）处理链路的修复潮**（#10885、#10887、#10908 等 5+ 个相关 Bug/PR）与**上下文压缩（context compaction）能力的恢复**。值得注意的是，核心维护者 Audacity88 一人贡献了今日绝大部分修复 PR，显示项目对单一活跃维护者的依赖度较高。整体健康度：**活跃但修复压力偏大，Bug 与修复几乎同期密集出现**。

---

## 2. 版本发布

无新版本发布（过去 24 小时 Releases: 0）。当前最新稳定版仍为 **v0.8.5**，其中已暴露出 Mattermost DM 首条消息丢失（#10901）、上下文压缩缺失（#10780）等问题，建议关注下一次补丁版本。

---

## 3. 项目进展

过去 24 小时仅 **1 条 PR 合并/关闭**，其余 49 条均处于待合并状态，项目整体向前推进有限。当前主要的“在途”工作（已开 PR 但未合并）：

| 方向 | PR | 说明 |
|---|---|---|
| 多模态修复 | [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903) | 修复同一用户轮次内 tool-result 图像因后续无关 tool call 而消失的问题 |
| 上下文压缩 | [#10905](https://github.com/zeroclaw-labs/zeroclaw/pull/10905) | ZeroCode 手动可恢复上下文压缩（XL 级，stacked PR） |
| Anthropic OAuth | [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | 存储式 OAuth profile 支持（对应 Issue #9464 契约） |
| 安全加固 | [#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824)、[#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)、[#10835](https://github.com/zeroclaw-labs/zeroclaw/pull/10835) | RPC 配置写入门控、file_download SSRF 防护、SQLite 存储拒绝不安全条目 |
| 新渠道 | [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) | 新增 Sendblue iMessage/SMS 渠道，非 macOS 主机可用 |

**结论**：当日实际落地进展偏少，大量工作堆积在 review/合并队列，maintainer review 带宽是当前瓶颈。

---

## 4. 社区热点

按评论数排序的最活跃讨论：

1. **[#9106 — RFC: A2A outbound client (A2ATool)](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)**（11 条评论，accepted, risk:high）
   持续两个月的焦点 RFC：让 ZeroClaw agent 能主动调用外部 A2A 兼容 agent，实现 agent-to-agent 协作。当前入站 A2A Server 已随 v0.8.2 发布，但出站能力缺失，迫使 agent 间协作走受限通道。反映社区对**多智能体互操作**的强烈诉求。

2. **[#10885 — Tool-returned images disappear after unrelated tool call](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)**（4 条评论，in-progress）
   已有修复 PR [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903)，响应速度快。

3. **[#9464 — Anthropic stored-profile OAuth alias contract](https://github.com/zeroclaw-labs/zeroclaw/issues/9464)**（4 条评论，p1，对应 PR [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)）。

4. **[#9511 — Diff-aware Semgrep findings as advisory PR comment](https://github.com/zeroclaw-labs/zeroclaw/issues/9511)**（3 条评论）
   诉求：安全扫描结果只进 Security tab，贡献者很少看，希望以 PR 评论形式前置呈现——反映项目在**安全工程流程可见性**上的改进方向。

**共性诉求**：多智能体协作能力、多模态可靠性、凭据管理体验。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| **S1** | [#10901](https://github.com/zeroclaw-labs/zeroclaw/issues/10901) | Mattermost 新自动发现的 DM 静默丢失首条消息（生产复现，v0.8.5） | ❌ 无 fix PR |
| **S2** | [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | v0.8.5 缺失主动 token 预算驱动的上下文压缩，长会话退化 | 🔄 PR [#10905](https://github.com/zeroclaw-labs/zeroclaw/pull/10905) |
| **S2** | [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | 同轮次内 tool-result 图像消失 | 🔄 PR [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903) |
| **S2** | [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | 非视觉模型遇到 marker 形态文本即硬性 fail 整轮 | 🔄 PR [#10904](https://github.com/zeroclaw-labs/zeroclaw/pull/10904) |
| **S2** | [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | 工具结果中的图像 marker 被无条件提升为附件，无来源校验 | ❌ 无 fix PR |
| **S2** | [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | Telegram media-group 测试在并行 CI 下间歇超时（p1） | ❌ 无 fix PR |
| **S2** | [#10897](https://github.com/zeroclaw-labs/zeroclaw/issues/10897) | `supervisor_preserves_component_error_chain` 在并行 nextest 下 flaky（全局日志广播竞态） | ❌ 无 fix PR |

**稳定性观察**：flaky 测试问题集中暴露（#10883、#10897），指向并行运行时测试基础设施的隔离性缺陷；多模态图像 marker 相关 Bug 形成一簇（#10885/#10887/#10908），应作系统性重构而非逐点修补。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 下一版本纳入可能性 |
|---|---|---|
| STT 转录级联降级（主备+本地兜底） | [#10900](https://github.com/zeroclaw-labs/zeroclaw/issues/10900)（新） | 中——独立性好，但刚提出 |
| 渠道消息来源贯穿 runtime | [#10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891) + PR [#10907](https://github.com/zeroclaw-labs/zeroclaw/pull/10907) | **高**——首个实现切片已有配套 PR |
| Anthropic OAuth stored profiles | PR [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) + #9464 | **高**——p1，契约已 accepted |
| OIDC token 验证 provider（#8289 stage 5） | PR [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) | 中——已过 review 加固 |
| Sendblue iMessage/SMS 渠道 | PR [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) | 中——XL 尺寸，needs-author-action |
| A2A 出站工具 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 规划中——RFC accepted，高风险高价值 |
| 本地模型选型引导（llmfit 集成） | [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) | 中——quickstart 方向 |
| WASI 硬件 host functions | [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) | 长期——RFC 阶段，硬件/嵌入式方向 |

**信号**：路线图明显向 **安全（OAuth/OIDC/SSRF/来源链）** 与 **多模态可靠性** 双线倾斜；A2A 出站是多智能体叙事的关键落子。

---

## 7. 用户反馈摘要

- **生产环境受阻**：#10901 作者报告升级 v0.8.5 后 Mattermost DM 首条消息静默丢失，且完成生产复现——用户对渠道消息可靠性敏感度高，S1 定级合理。
- **长会话体验退化**：#10780 用户指出 v0.8.5 移除了 token 预算压缩后，长对话只剩粗糙的按条数裁剪，`keep_recent`/`collapse_tool_results` 实际不生效——这是对**版本回归**的不满信号。
- **多模态使用受挫**：#10885/#10887 显示使用图像描述工作流的用户在混合 tool call 场景下遭遇图像丢失或整轮失败（有 workaround 但体验差）。
- **语音输入静默失败**：#10900 反映 STT 端点故障时无降级、无提示，用户希望至少有诚实的可见通知。
- **正面信号**：维护者（Audacity88）对图像相关 Bug 响应极快，多数当天即产出修复 PR；社区对 RFC 流程（#9106、#8187）参与度高。

---

## 8. 待处理积压

提醒维护者关注以下长期悬置项：

1. **[#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635)** — git 子命令风险分类器修复（安全相关，size:XL），**8 月 1 日开立至今**仍 `needs-author-action`，安全修复不应悬置过久。
2. **[#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283)** — web_fetch 压缩响应解压（安全域，needs-maintainer-review），自 7 月 23 日悬置近 2 个月。
3. **[#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)** — file_download SSRF 门控，8 月 18 日至今未合并，安全价值高。
4. **[#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780)** — 上下文压缩缺失为 p1 且影响所有长会话用户，配套 PR 为 stacked XL，建议维护者优先 review 而非继续 stack。
5. **#10901（S1）与 #10908、#10883、#10897（S2）** — 均无 fix PR，其中 **S1 级 Mattermost 消息丢失**应最优先分派。

---

**健康度总结**：响应速度快（Bug→PR 平均 <24h），但 49 条 PR 积压待合并、1 个 S1 Bug 无认领、关键路径高度依赖单一维护者，是当前三大结构性风险。建议：优先清空安全类悬置 PR，并系统性重构图像 marker 处理链路。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*