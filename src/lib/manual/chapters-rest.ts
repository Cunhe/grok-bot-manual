import type { Chapter } from "./types";

export const REST_CHAPTERS: Chapter[] = [
  {
    slug: "playbook",
    no: "08",
    title: "实操手册",
    kicker: "现场",
    group: "cases",
    scenes: ["money", "admin", "sales", "content", "intel", "life", "dev"],
    summary: "十个提示词、按场景拆过的现场案例、Jarvis 九玩法、排障。贴进有名字的 Bot。先只读。",
    body: `使用总则：「贴进一个有名字的 Bot。先只读。审批线画在不可逆动作上。账号下所有 Bot 共享一台电脑。」

完整提示词在本说明书的「提示词」页，可一键复制。这里只讲怎么用、以及别人已经跑通的现场。

## 十个岗位，怎么配

| 岗位 | 先做什么 | 绝对停点 |
|---|---|---|
| 幕僚长 | 列未完成、下周派活、标不可逆 | 不登录新工具 |
| 收件箱 | 分拣、冲突、占档建议 | 不发信、不拒会 |
| 侦察 | 一个问题一份带 URL 的简报 | 不自登录费账号 |
| 复现开单 | 步骤 / 期望 / 实际 / 环境 | 不合并、不推 main |
| 值班客服 | 按指定文档答，记当天日志 | 不退款、不重置权限 |
| 固化老师 | 把演示收成 Skill | 没演示的步骤不编 |
| 旅行管家 | 扫日历、选时间、去网站 | 付钱前停 |
| 订阅断舍离 | 台账：商家、金额、留/砍 | 未打标不改套餐 |
| 安全官 | 周审计登录、密钥、Always allow | 不自行撤销除非点名 |
| 产品副手 | 收集问题、起草规格 | 超限额不许结账 |

## 按场景看

### 省钱退款

**航司 travel credit → 刷卡退款** · @vinit · 2026-09-03
页面没有 cash-refund，走官网客服聊天。约 34 分钟后截图写 $245.58 approved。金额是作者自述。

**信用卡账单 → 退订邮件** · @mvmeeg · 2026-09-02
账单交给 Bot，找出订阅并代发退订。自称次日确认、月省 $200+。必须逐行点头。

**五家商家追款** · @darian314
邮件里找该退没退的订单，逐家起草，发信前列清单。到账再放下一家。

**Stripe 客服小额退款** · @GergelyOrosz
客服邮箱 + Stripe。常规小额：先报备消息，再打钱。

### 邮件行政

**过夜分拣，只起草不外发** · @KanikaBK
SMART TRIAGE → DRAFT REPLIES → 5 行早报 → NEVER SEND。

**Inbox → Asana 不重复建任务** · @wikiwayne
同线程追加时间线，不新建。

**替你参会** · @kiaraplds
自我介绍 + 记笔记。官方也把 Meeting stand-in 列为现成岗位。

### 销售获客

**09:00 live leads，不外发** · @nifinet · 2026-09-03
排出 8 条，top2 起草。文内 stdio MCP 不是官方接法。

**官方 Sales outbound**
过夜研究账户、按 ICP 和 intent 打分、按你的口吻起草邮件和 LinkedIn，停在待审列表。

### 内容 / 情报 / 生活 / 开发

官方 Website builder 能建站、买域名、部署。购买域名和上线必须审批。侦察岗每次只接一个问题，优先一手来源。旅行管家付钱前必须停。复现 Bot 与修复 Bot 拆开。Grok Bot 自己没有 codebase 插件，写代码会转交 Cursor Cloud Agent。合并、推 main，永远留在你这边。

## 刘小排 Jarvis 九玩法

1. 早报：日历 + 收件箱 + 昨夜雷达，一页。
2. 邮件只读分拣。
3. 日历冲突与占档建议。
4. 订阅与账单周检。
5. 旅行与订位草稿。
6. 会议替身与纪要。
7. 个人知识入库（只进 /workspace）。
8. 夜间重活：线索、清洗、竞品。
9. 周日复盘：幕僚长列出未完成与下周派活。

九条都先只读。Jarvis 不是家门钥匙。

## 排障速查

| 现象 | 先做什么 | 不要做什么 |
|---|---|---|
| Bot failed to respond（所有 Bot 一起死） | 共享电脑卡住，等官方恢复后全退出再开 | 不要靠重建 Bot 自救 |
| 黑屏转圈 | 查席位、代理、Zscaler、过期 session | 不要在没电脑时狂点 Reset |
| Approval needed 残留 | 给 Bot 发一句，或重启 | 不要以为还有一张卡 |
| Routine 不准时 | 队列延迟；问它 check-in | 不要删了重建 |
| Aw, Snap | reload 标签 | 不要 Update/Reset |
| Linux 本地执行空 | 等修复；解锁 keyring | 不要装 VPN 进云电脑 |
| Windows leftover daemon | 托盘退出，任务管理器清进程，等一分钟 | — |
| 密码改完显示 unavailable | 登出、全退、用新密码登入 | 那不是真的没资格 |
| 周额度 100% | 停 bot-to-bot 闲聊；删闲置 Bot | 「你们安静」只是暗示 |
| 图片拖不进聊天 | 用 + 按钮，等缩略图出现再发送 | 从浏览器直接拖常会丢 |
`,
  },
  {
    slug: "quota",
    no: "09",
    title: "额度与六大吞金兽",
    kicker: "省钱",
    group: "ops",
    summary: "周额度用完会无警告溢出到 On-Demand。把上限设为 $0。真正烧钱的不是派活次数。",
    body: `社区高频原话：「很好用，两天就把一周额度干没了。」

订阅带每周使用额度，超量按 token 计费。大头从来不在「派了多少件活」，而在下面六只隐形吞金兽。

## 六只

**重复交代背景** — 每个新会话把公司故事再讲一遍。大脑倾倒要一次做足。
**让高薪员工干杂活** — 用主力 Bot 做复制粘贴，等于让 CFO 去贴发票。
**失败的尝试** — 指令模糊导致整条路径白跑。返工是双倍计费。
**无意义的轮询** — 每隔几分钟刷一次页面。改成事件驱动。
**在一个 Bot 里无限连聊** — 上下文滚雪球。一事一会话。Bot 聊天没有 Compact，也没有模型选择。
**杀鸡用牛车** — 写份文档拉二十个 Bot。调度本身就是成本。

## 四条心法

1. 任务分层：机械重复 → Routine；需要理解 → 普通 Bot；要推理创造 → 主力。
2. 做过两次，第三次前固化。
3. 验收前置：「只要这三个字段」「不超过五句话」。
4. 盯周重置。快见底就切轻量或歇着，别在超量区跑探索。

:::warn
周额度用完后可能 **自动溢出到共享 On-Demand，应用内无警告**。不想被扣，把 On-Demand 上限设为 **$0**。Bot 之间互审、互催也会按回合计费。「你们安静点」只是暗示。
:::
`,
  },
  {
    slug: "unattended",
    no: "10",
    title: "无人值守",
    kicker: "省钱",
    group: "ops",
    summary: "哨兵、流水线、夜班。第一条流水线只要采集者 + 编辑者 + 一个触发时间。",
    body: `## 三种形态

**哨兵** 定时扫描 + 异常上报。平时静默，有事才说话。性价比最高，适合第一条。
**流水线** 多个 Bot 串成链，靠群聊接力。
**夜班** 把白天不值得占额度的重活扔夜里，早上收报告。

## 第一条流水线：竞品日报

> 每天晚上 9 点，把雷达当天快讯合并去重，按「产品 / 融资 / 行业」分三类，每类最多两条，做成一页日报。连续三天无事，只发一行「今日无事」。源数据不可用就报失败，不要用旧数据。不要外发。

最小样本：**一个采集者 + 一个编辑者 + 一个固定时间**。连跑三天校准，再放手。

## 三道保险

验收前置、抽样复核、异常上报。「不确定不要猜，整理成一个问题来问我。」无人值守最怕的不是出错，是出错后一声不吭继续跑。
`,
  },
  {
    slug: "limits",
    no: "11",
    title: "限制与坑",
    kicker: "边界",
    group: "edge",
    summary: "Beta 产品。MCP、持久性、额度溢出、0.30.0 客户端、企业候补。标注时间，随时会修。",
    body: `产品处于 beta。下列坑以 2026-09-04 能核对到的材料为准。

## 硬限制

- 不支持本地 / stdio MCP，只接远程 HTTP。
- Bot 聊天无 Compact、无模型选择；长对话越聊越贵。
- Bot 无 codebase 插件；写代码转交 Cursor Cloud Agent。
- 企业大规模开放仍在放量。
- iPad 首发不支持。
- 云电脑不能加入公司 VPN。
- 同一 Bot 同一时间只能跑一个 computer-use 任务。
- Teach a task 可能灰度，录屏上限 10 分钟，不录麦。
- 每 Bot 50 条 Routine，每条留 20 次运行记录。

## 额度与持久性

周额度溢出可能无警告进入 On-Demand。登录占用 Cursor 设备数。电脑刷新保留 /workspace、浏览器配置、~/.config；可能丢 ~/.local/state。Update 后 apt 包要重装。Reset 是最后手段。删 Bot 不清共享文件和登录。

## 客户端已知问题（0.30.0 前后）

Linux ListMachines 空、Windows leftover daemon、黑屏先查席位、改密后 unavailable 是过期 session、Windows 忽略系统 HTTP 代理走 TUN、Zscaler 要放行 *.cursorvm.com、Routine 延迟 10–37 分钟常见。
`,
  },
  {
    slug: "landscape",
    no: "12",
    title: "格局与判断",
    kicker: "边界",
    group: "edge",
    summary: "和 Operator、ChatGPT Work、Claude Cowork 不在同一层比较：持久同事 vs 一次会话。",
    body: `## 对照

| | Grok Bot | 上一代 Computer Use / Operator | ChatGPT Work / Claude Cowork 一类 |
|---|---|---|---|
| 工作地点 | 账号级持久云电脑 | 多为会话级浏览器 | 多为对话 + 工具 |
| 主对象 | 有名字的 Bot 花名册 | 一次任务 | 一次会话 / 一个项目 |
| 多人协作 | Bot 互发、群聊、交接 | 通常单 agent | 视产品而定 |
| 学习 | 演示 → Skill → Routine | 多要先搭工作流 | 技能 / 项目指令 |
| 离线 | 关盖继续跑 | 常随会话停 | 视实现 |
| 安全模型 | 明确说 Bot 不是边界 | 各有沙箱叙事 | 各有 |

不要用「谁更聪明」比较。Grok Bot 赌的是 **持久责任**：明天你回来，还是这个人，还记得上周那件事，还在那台电脑上。

## 我的判断

1. **这是协作界面的换代，不是模型换代。** 9 月 3 日那篇设计文把侧栏从聊天历史改成花名册，是认真把 agent 当成要养的员工。
2. **门槛已经降到可以认真试用。** $20 / $30 含进门。真正的成本是周额度和 On-Demand。
3. **最大的产品诚实：Bot 不是安全边界。**
4. **最短赢面：总监 + 两条专线 + 一条哨兵 Routine。** 五人舰队是叙事，不是第一周作业。
5. **会输在三件事上：** 把密码丢进聊天；让它轮询；在额度见底时探索。
6. **和 Grok 聊天、Grok Build、Grok Imagine 是三条产品。** 别混着买，也别混着学。

它现在仍是 beta：电脑会卡、Routine 会排队、文档会滞后。能把琐事做到 100% 落地的那些晚上，它值回月费。把审批画在不可逆动作上。把背景一次倒干净。让它先只读。其余的，让时间养。
`,
  },
  {
    slug: "numbers",
    no: "A1",
    title: "数字基准",
    kicker: "附录",
    group: "appendix",
    summary: "价格、平台、限额、时间。2026-09-04 核对，下单前以官网为准。",
    body: `| 项 | 值 | 口径 |
|---|---|---|
| 发布 | 2026-08-11 | 官方 |
| 限量试用扩权 | 2026-08-21 | 官方 + 社区约 7 天 |
| 套餐扩权 | 2026-08-26 | 官方：Pro / SuperGrok / Teams 全含 |
| 接通 X | 2026-08-29 | 官方 |
| Microsoft 三件套 | 2026-08-31 | 官方 @bot |
| 设计文（五个原语） | 2026-09-03 | 官方 |
| Cursor Pro | $20 / 月 | 媒体整理，核官网 |
| SuperGrok | $30 / 月 | 媒体整理，核官网 |
| Cursor Pro+ | $60 / 月 | 橙皮书当时的「最低门槛」，现已不是 |
| SuperGrok Plus | $100 / 月 | |
| Cursor Ultra | $200 / 月 | |
| SuperGrok Heavy | 约 $300 / 月 | |
| Teams Standard | $40 / 席 / 月 | |
| Teams Premium | 约 $120 / 席 / 月 | |
| Teach 录屏 | ≤ 10 分钟，不录麦 | 官方 |
| Routine / Bot | 最多 50 | 官方 |
| 运行记录 / Routine | 最近 20 | 官方 |
| 群聊 Bot | 社区：每命名空间最多 6 | 社区 |
| 审批卡超时 | 约 10 分钟 | 论坛员工 |
| Routine 排队 | 常 10–37 分钟 | 论坛员工 |
| iOS | 18+ | 官方 |
| Android | 9+ | 官方 |
| iPad | 首发不支持 | 官方 |
| On-Demand 建议上限 | $0（若不想溢出） | 社区实测 |
`,
  },
  {
    slug: "glossary",
    no: "A2",
    title: "术语",
    kicker: "附录",
    group: "appendix",
    summary: "说明书里出现的黑话，对照官方用词。",
    body: `| 说法 | 意思 |
|---|---|
| Bot | 一个持久、有名字的 AI 队友。不是一次聊天。 |
| 云电脑 / Agent Computer | 账号级持久 VM。所有 Bot 共用。 |
| 幕僚长 / CoS | 调度岗，不默认拥有付款权 |
| Skill | 怎么做 |
| Routine | 谁、何时做 |
| Teach a task | 录屏教学，产出草稿 Skill |
| Auto-review | 动作执行前的规则引擎 |
| Take over | 人接管云电脑完成 2FA 等 |
| Plugin / Connector | 结构化集成，优先于浏览器 |
| MCP | 远程 HTTP 工具协议；非本地 stdio |
| Artifact | 耐久产出：文档、代码、数据 |
| Computer use | 像人一样点没有 API 的界面 |
| On-Demand | 周额度之外的按量计费 |
| Execution on Local Computer | 在你自己的真机上跑命令 |
| Legacy Privacy Mode | 与 Grok Bot 不兼容 |
| Cloud Agent | Cursor 云端写代码代理 |
`,
  },
  {
    slug: "faq",
    no: "A3",
    title: "高频十问",
    kicker: "附录",
    group: "appendix",
    summary: "和聊天机器人的差别、关盖会不会停、钱怎么算、能不能当沙箱。",
    body: `**和 Grok 聊天有什么不同？**
Grok 回答问题。Grok Bot 在云电脑里把活干完，只在需要批准时回来。

**关电脑它还干吗？**
干。工作在云电脑上。关应用、合盖、锁屏都不停后台回合和 Routine。

**每个 Bot 是一台电脑吗？**
不是。所有 Bot 共用一台。不要当安全边界。

**能不能并行？**
能。各有屏幕。同一 Bot 同时只能跑一个 computer-use 任务。

**它记得什么？**
稳定偏好、岗位上下文、过往工作摘要。重要决策让它回源头。

**任何网站都能点吗？**
很多可以。仍会遇到验证码、重新登录、反自动化。这些交给你。

**什么必须我批？**
敏感动作可停。密码 / 2FA / 验证码走 Take over。把常设边界写进人设。

**多少钱？**
没有单独 SKU。随 SuperGrok 或 Cursor 付费套餐附送，带周额度，可加 On-Demand。FAQ 表格可能滞后于 8 月 26 日扩权。

**Skill 和 Routine？**
Skill = 怎么做。Routine = 哪个 Bot、什么时候做。先测再挂表。

**能分享 Bot 吗？**
能。对方得到配置副本，得不到电脑和登录。先剥机密。
`,
  },
  {
    slug: "sources",
    no: "A4",
    title: "来源、冲突、免责",
    kicker: "附录",
    group: "appendix",
    summary: "这是公开材料的重编说明书，不是官方文档，也不是橙皮书原书。",
    body: `## 这份说明书是什么

把已经公开的 Grok Bot 材料，按我自己的阅读顺序重编、勘误、补上 8 月 23 日之后的变化。页面做成 Grok 式的深色阅读器，方便我反复查。

它不是 SpaceXAI / Cursor 官方手册，不是 Kin 橙皮书的替代授权版本，也不是投资建议或操作保证。现场案例里的金额、省下的月费、退款到账，都是原作者自述。

## 底稿

1. 《Grok Bot 橙皮书》Kin 著 · v260823 · [github.com/KinGao294/grok-bot-orange-book](https://github.com/KinGao294/grok-bot-orange-book) · CC BY-NC-SA 4.0
2. awesome-grok-bot · [github.com/RongleCat/awesome-grok-bot](https://github.com/RongleCat/awesome-grok-bot) · 维护者公众号「铁柱AGI」
3. 合并阅读页 [grokbot.aihuangshu.com](https://grokbot.aihuangshu.com/) · v1.2 · 2026-09-02
4. 官方：[Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)、[more plans](https://x.ai/news/grok-bot-more-plans)、[设计文](https://x.ai/news/designing-grok-bot)、[文档](https://docs.x.ai/grok-bot/overview)、[产品页](https://x.ai/bot)

## 信息分层

冲突时：产品公告 > 文档（文档会滞后）> 论坛员工回复 > 橙皮书 v260823 > 自媒体转述。

已知冲突已在勘误页处理：Linux / Android 已支持；Cursor Pro 含 Grok Bot；「每 Bot 一台电脑」改为账号一台；FAQ 资格表滞后。

Bots are not a security boundary。不要把生产密钥、客户名单、未公开的内网地址写进可分享配置。修订日期 2026-09-04。产品仍在 beta，数字会变。
`,
  },
];
