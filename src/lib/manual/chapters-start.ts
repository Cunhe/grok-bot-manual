import type { Chapter } from "./types";

export const START_CHAPTERS: Chapter[] = [
  {
    slug: "tldr",
    no: "00",
    title: "一页看懂",
    kicker: "速览",
    group: "start",
    summary:
      "三句话入门：它是一支云端同事，不是聊天机器人；先交代自己再派活；总监 + Routine + 无人值守是最值得抄的玩法。",
    body: `Grok Bot 不是 grok.com 里的聊天，不是 Grok Imagine，也不是拿来跑模型评测的东西。它是 xAI（并入 SpaceX 后媒体常写 SpaceXAI）与 Cursor 联合做的 **云端多智能体办公平台**。

你在桌面或手机上给它发消息，活却在一台持久云电脑里干。浏览器、终端、文件、插件，都在那台电脑上。合上笔记本、锁屏、去睡觉，它还在上班。

## 三句话

**这是什么**
一支装在云电脑里的 AI 团队。每个 Bot 有名字、岗位、记忆；它们共用你账号下的那一台电脑，互相交接，只在需要你判断时把你拉进来。

**怎么入门**
免费试用（若仍开放）或付费套餐开通 → 大脑倾倒 → 派第一件今天本来就要干的真活。第一个正确动作不是下命令，是把自己交代清楚，再让它反向给你配工作台。

**最值得抄的玩法**
总监模式 + Routine 化 + 无人值守。一个幕僚长调度全部任务；做过两次的流程，第三次前教成 Routine；哨兵 / 流水线 / 夜班三种形态，让 24 小时自动上班。

## 先分清两件事

| | Grok | Grok Bot |
|---|---|---|
| 它是什么 | 聊天助手 | 一支 AI 工作团队 |
| 你怎么用 | 提问 | 派活 |
| 在哪干活 | 对话框里 | 云端虚拟机里 |
| 类比 | 聪明的实习生 | 不用睡觉的部门 |
| 交付物 | 一段话 | 一张表、一封已起草的邮件、一个部署好的页面、一笔走完的退款 |

:::fix 最大的一处口误
橙皮书原句「每个 Bot 拥有自己的云端电脑」已经过时。官方 9 月文档写得很硬：**账号下所有 Bot 共用一台电脑**。登录态、文件、密钥对每一个 Bot 都可见。分开几个 Bot **不是** 安全隔离。
:::

## 今天先做这三步

1. 装桌面端（macOS / Windows / Linux）或手机端（iOS 18+ / Android 9+）。iPad 首发不支持。
2. 建一个岗位极窄的 Bot，描述里写清：干什么、用哪些工具、哪些动作必须停下来等你。
3. 派一件有结果的活：整理这份文件、核对这个仪表盘、起草不外发的邮件。先只读，再谈外发。

下一章把产品心智讲透。价格、平台、试用口径以第 02 章的勘误表为准，不要拿 8 月 23 日的档位表去对照今天的账单。
`,
  },
  {
    slug: "essence",
    no: "01",
    title: "产品本质与心智",
    kicker: "科普",
    group: "start",
    summary: "2026 年 8 月 11 日发布。官方三条设计原则：记忆、协作、学习。界面只暴露五个原语。",
    body: `2026 年 8 月 11 日，xAI 与 Cursor 联合发布 Grok Bot。头几天很多人以为它是 Grok 换壳。真派出第一个 Bot 之后，差别才清楚：**AI 第一次以「一群同事」的形态走进普通人的手机。**

过去两年的默认姿势是人对着一个对话框说话。Grok Bot 给的新姿势是：人对着一批 AI 员工派活，它们自己组织、自己干、干完回来汇报。

## 一句话定义

Grok Bot 是 xAI 与 Cursor 联合推出的云端多智能体办公平台。Bot 在持久云电脑上像人一样登录你授权的应用和网站干活；你合上电脑，它们继续上班。

## 官方值得逐字读的三句话

:::official 官方口径
“Bots are AI teammates that do real work for you. They sign in to your tools, use them just like you do, and come back with finished work.”
Bot 是能交给真活的 AI 队友。它们登录你的工具，像你一样使用它们，然后把干完的活带回来。
:::

:::official
“A chief of staff sits on top, with a specialist for each lane: inbox management, expenses, recruiting, bug fixes, or operations.”
一个幕僚长坐在顶上，每条专线配一个专家。
:::

:::official
“They pass work, assign ownership, and only pull you in for judgment calls.”
它们传递工作、分配归属，只在需要人判断的时候才把你拉进来。
:::

并行、分工、上报。这不是「一个更强的助手」，这是一套组织架构。

## 三大设计原则

**记忆**
跨对话保留上下文。上周聊过的项目这周接着推进，未完成的活不会丢。用得越久，它越懂你的习惯。重要决策不要只靠记忆——让它回源头核对。

**协作**
多个 Bot 并行处理不同子任务，在私信或群聊里交换信息，只在需要人类决策时升级给你。同一账号下的 Bot 共享电脑，所以交接不必重新登录。

**学习**
你当着它的面示范一遍操作（Teach a task，最多十分钟，不录麦），它把步骤收成可复用的 Skill，再按时间或事件跑 Routine。

## 五个产品原语

:::official 2026-09-03 设计文
SpaceXAI 把界面收成五个东西，其余概念尽量藏在底下：

1. **Bots** — 持久的、有名字的智能体，有身份、记忆、运行时和工具。
2. **Chats** — 跟某个 Bot 干活的对话界面。
3. **Prompts** — 一次指令；可以存成 Skill，也可以触发成 Routine。
4. **Tools** — 软件、API、连接器、shell、电脑操作。
5. **Artifacts** — 文档、设计、代码、数据等耐久产出。
:::

侧栏的主对象是 **Bot 花名册**，不是聊天历史。聊天是一次性的；Bot 是你明天还要回来找的同事。头像同时回答三件事：这是谁、它在干什么、我现在需不需要看细节。

## 和上一代 Agent 的两个代差

**云端常驻**
工作不绑在你的笔记本进程上。关掉 Grok Bot 应用、合上盖子，后台回合和 Routine 继续跑。

**从「工作流搭建器」变成「先干活再固化」**
多数 Agent 产品要你先搭自动化。Grok Bot 的默认路径是：先当同事聊天把活干完，稳定了再存 Skill、再挂 Routine。

## 它真正瞄准的活

官方自述内部已经在干这些：过夜研究潜客、Demo 前环境检查、CRM 卫生、从邮件抽报销凭证、复现并开单修 bug、销售跟进、简历筛选、发票处理、盯竞品账号。

共同点：高频、琐碎、有明确完成标准的白领杂活。它不是「帮你写论文」「帮你做一张海报」的产品。第一天起瞄准的就是被琐事淹没的上班族和小老板。
`,
  },
  {
    slug: "access",
    no: "02",
    title: "试用、价格与开箱",
    kicker: "上手",
    group: "start",
    summary:
      "8 月 26 日扩权后，Cursor Pro $20 与 SuperGrok $30 都包含。Linux / Android 已正式支持。先大脑倾倒，再派真活。",
    body: `## 现在谁能用

:::fix 以 8 月 26 日公告为准
Grok Bot 现已包含在：

- SuperGrok / SuperGrok Plus / SuperGrok Heavy
- Cursor Pro / Pro+ / Ultra
- Cursor Teams Standard / Premium

企业客户仍在放量，走候补。Grok Bot 有自己的用量，不占用 Grok 聊天或 Cursor 编程额度。同时持有 Cursor 和 SuperGrok 时，走额度更高的那一份。
:::

社区与媒体整理的档位（美元 / 月，2026-09 对照，**下单前核官网**）：

| 套餐 | 约价 | Grok Bot |
|---|---|---|
| Cursor Pro | $20 | 含，周额度低于 Pro+ |
| SuperGrok | $30 | 含，低于 Plus |
| Cursor Teams Standard | $40 / 席 | 8 月 21 日起含 |
| Cursor Pro+ | $60 | 含，额度更宽 |
| SuperGrok Plus | $100 | 含 |
| Cursor Teams Premium | 约 $120 / 席 | 含，SSO 等管理能力 |
| Cursor Ultra | $200 | 含，扩展 token 上限 |
| SuperGrok Heavy | 约 $300 | 含；另有与 Cursor Ultra 捆绑的说明，以账户页为准 |

没有独立的「Grok Bot 月费」商品。周额度用完后可按 token 开 On-Demand。不想被悄悄扣钱，把 On-Demand 上限设为 **$0**。

## 限量免费试用

8 月 21 日那轮扩权后，官方一度向未订阅用户开放约 7 天限量试用。这是体验票，不是永久免费版。额度够把入门三件事跑完：一个完整闭环、一次大脑倾倒、一条最短 Routine。

试用期不建议：拉五人舰队；跑长链条自动化。费额度，且你还没有分工直觉。

## 平台

| 端 | 官方状态 |
|---|---|
| macOS | Apple silicon 与 Intel |
| Windows | x64 与 Arm64 |
| Linux | x64 与 Arm64；.deb / .rpm / AppImage |
| iPhone | iOS 18 或更新 |
| Android | Android 9 或更新 |
| iPad | 首发不支持 |

同一批 Bot 和对话在已登录设备间同步。工作跑在云电脑上，关手机不停。

:::warn Legacy Privacy Mode
Grok Bot 必须云端存数据。仍开着 Cursor Legacy Privacy Mode 的账号，要先改成受支持的数据设置，否则电脑起不来。
:::

## 开箱顺序

**1. 安装**
从 [x.ai/bot](https://x.ai/bot) 下载对应架构。Linux 在 More downloads。用 Cursor 账号登录；组织若要求 SSO，走组织流。

**2. 第一次提问不是派活，是交代自己**
官方会问你常用哪些工具，用来生成队友建议，**不会**因此去连那些工具。把背景一次倒干净：你是谁、在做什么、常用软件、绝对不能碰的动作、交付口味。

**3. 建第一个 Bot**
给短名字、一个主职、一段边界。岗位越窄，上下文越有用。一个什么都干的 Bot 会把记忆搅成浆。

**4. 第一件真活的五要素**

1. 结果：干完长什么样
2. 来源：哪些应用、网页、文件
3. 约束：什么不能做、什么必须问
4. 交付物：你要收回什么
5. 停点：什么时候必须交给你

五分钟、不登录也能交卷的热身：

> 把这份文件总结成五条。日期、决策、未决问题单独成节。每条注明页码。不要改源文件。

**5. 登录与 Take over**
遇到密码、通行密钥、2FA、验证码，打开 Agent Computer，你自己完成这一步，再把控制权还回去。不要把密码贴进聊天。浏览器会话会留在共享电脑上，别的 Bot 也能用这份登录。

有正式连接器的服务，优先 **Settings → Plugins**，比点网页稳。
`,
  },
];
