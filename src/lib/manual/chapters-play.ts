import type { Chapter } from "./types";

export const PLAY_CHAPTERS: Chapter[] = [
  {
    slug: "mechanics",
    no: "03",
    title: "核心机制大全",
    kicker: "玩法",
    group: "play",
    summary: "建岗、总监、群聊、Teach、Routine、审批、MCP、X、微软三件套。先收藏这张表。",
    body: `先收藏这张表，用的时候回来查。

| 机制 | 说明 |
|---|---|
| 建 Bot · 起名定岗 | 名字、人设、职责。界面零配置，人设即岗位 |
| 总监模式 CoS | 第一个 Bot 做成幕僚长，任务丢给它拆解派发 |
| 多 Bot 协作 | 互发消息、共享上下文；群聊协调。社区记录：每命名空间最多 6 个 Bot |
| Teach a task | 录屏最多 10 分钟，不录麦，演示写成 Skill |
| Skill / Routine | Skill 是怎么做；Routine 是何时做、由谁做 |
| Bot 模板分享 | 公开链接复制人设。对方拿不到你的电脑和登录。分享前剥机密 |
| Auto-review | 支付 / 外发 / 删除 / 上线可弹审批卡 |
| 密钥管理 | 走 secret card，禁止把 API Key 贴进聊天 |
| X 集成 | 2026-08-29 官方接通。搜帖、时间线、mentions |
| Microsoft 三件套 | 2026-08-31 Outlook / Calendar / OneDrive。外发和改日程走审批 |
| 侧栏分区 | 按项目/客户分组。删分区只是取消分组，不删 Bot |
| Stripe Link | 连接后可完成网购付款——必须审批 |
| 自定义 MCP | 仅公网 HTTPS streamable HTTP/SSE，不支持本地 stdio |
| 云浏览器 | 没有干净 API 时像人一样点。插件优先于浏览器 |
| Cloud Agent | Bot 无 codebase 插件，写代码转交已连 GitHub 的 Cursor Cloud Agent |
| Take over | 对 Bot 说 hand me your computer |
| Reset / Recover / Update | Recover 找回；Update 换镜像保文件；Reset 是最后手段 |

## 多 Bot 群聊

把几个 Bot 拉进同一条对话，它们会自发互发消息。社区常举的例子：写代码的 Bot 主动去问内容 Bot「老板前几天在 X 上的需求，上下文发我一下」。

官方原话：Bot 之间自主互发、同线程共享上下文；多项目重叠时在同一账号/项目上对齐，不需要你在对话之间复制信息。

## 按专线切，不按工具切

「负责邮件的 Bot」是好设计，「负责 Chrome 的 Bot」不是。工具只是手段，职责才是边界。官方推荐按 lane：收件箱、报销、招聘、修 bug、运营。

花钱的事单独隔离。但记住——隔离的是**职责与审批**，不是安全沙箱。它们仍然共享电脑。

## Skill 和 Routine 不是一回事

:::official
Skill 描述 **怎么做** 一件事。
Routine 指定 **哪个 Bot、何时做**——按时间表，或在支持的情况下按事件。
:::

正确顺序：一次性任务跑通 → 存成 Skill → 用第二份输入再测 → 再挂 Routine。不要把没验收的流程直接自动化。

Teach a task 是教学动作（最多十分钟录屏），产出是一份草稿 Skill。补上决策规则、失败模式、审批点。没演示过的步骤不要让它编。

## 连接器、浏览器、MCP

有插件用插件。没有插件再上云浏览器。MCP 只接公网 HTTP。社区里的 npx stdio 示例不要直接抄到 Grok Bot 设置里。安装的连接器是账号级的，对所有 Bot 可见。
`,
  },
  {
    slug: "org",
    no: "04",
    title: "多智能体组织",
    kicker: "玩法",
    group: "play",
    summary: "总监模式、官方 Bug 接力、五人舰队。分工 → 通信 → 交接 → 上报。",
    body: `入门解决「一个 Bot 干一件事」。这一章解决「一群 Bot 干一个摊子」。

## 总监模式

三五个 Bot 之后，最大的问题不是能力，是调度。社区几乎人人把第一个 Bot 做成 **Chief of Staff**：置顶、起真人名、所有任务先丢给它。

你说「研究最近的 AI 趋势，写封邮件发出去」。它回「研究分给 Barry，写邮件分给 Cindy」，然后拆解、派发、追踪。你面对的始终只有一个对话框。

## 官方示范：一个 Bug 的旅程

工程线 Bot 在产品界面里 **复现** bug → 建 **工单** → 转交负责 **修复** 的调试 Bot。

三件事被说清楚了：

1. 发现问题的 Bot 和解决问题的 Bot 是两个专家。「复现」和「修复」是两个岗位。
2. 交接物是一张工单，不是一段聊天记录。有载体、可追溯。
3. 全程可以没有人在场。你只在最终结果那里出现。

拼图就四块：**分工 → 通信 → 交接 → 上报**。

## 五人舰队（社区模板，可改名）

| Bot | 职位 | 日常 |
|---|---|---|
| Build | 工程 | 复现、开单、小工具；不合并 main |
| Cindy | 行政 | 分拣邮件、起草、早报；默认不外发 |
| Barry | 雷达 | 扫指定源，有动静才说话 |
| Reed | 商务 / 销售 | 线索评分、外联草稿、停在审批 |
| Dusty | 增长 / 社区 | 收集反馈、周报素材 |

中文环境改造：把源换成你自己的公众号后台、飞书/企业微信、小红书或 X、本地支付账单。人设用中文写，交付格式写死。

## 上手节奏

第一周：一个 Bot + 一件真活 + 一条最短 Routine。
第二周：加幕僚长，只让它调度，不让它自己付款。
第三周：按痛点加第二条专线，不要一次招满五人。

:::warn
调度和通信本身消耗额度。任务越简单，团队应该越小。杀鸡不要用牛车。
:::
`,
  },
  {
    slug: "routine",
    no: "05",
    title: "Routine 深度教学",
    kicker: "玩法",
    group: "play",
    summary: "先测 Skill，再挂表。每 Bot 最多 50 条 Routine。晚到通常是排队，不是坏了。",
    body: `示范一遍，让它按老规矩办。这是 Grok Bot 把「同事」变成「员工」的那一跳。

## 教学前检查清单

- 流程能在十分钟内点完（录屏上限）
- 每一步画面可预期
- 失败模式你自己能说清：验证码、2FA、缺插件、源数据空
- 不可逆动作已经写进停点
- 演示时不要暴露密码。凭据走 Take over 或 secret card

## 标准路径

1. 先当一次性任务跑通。
2. 纠正格式，直到你愿意下周再看同一份产出。
3. 存 Skill：何时用、输入、步骤、如何验收、返回什么、什么要审批。
4. 换一份输入再测。
5. 再对拥有这条活的 Bot 说：工作日 8:00 跑，失败就报，不要用旧数据。

桌面作曲框里 / 引用已存 Skill，@ 引用 Bot、群、Routine、连接器。

## 事件触发

Cursor 账号级集成可以从 Slack 消息、GitHub 通知等事件拉起 Routine。这和 Slack / GitHub 插件不是同一条连接。规则必须窄。「每一条新消息都听」会把额度烧光。

## 管理

打开 Bot → View conversation details → Routines：启用、暂停、试跑、改表、看最近成败。

- 每个 Bot 最多 **50** 条 Routine
- 每条保留最近 **20** 次运行记录
- 删除立即生效，无撤销
- 删 Bot 会带走它名下的 Routine
- 离开太久，产品可能问你是否继续跑，不回就暂停

:::community 排障
「Next run: Run now」经常不是坏了，是槽位已经触发、卡在队列（社区观察到 10–37 分钟）。有的运行结束却不往聊天里发。先问 Bot 要一份 on-demand check-in，不要急着重建 Routine。
:::

## 为信任而设计

- 自动化准备，不要自动化发射
- 先起草、对账、给建议
- 外发、购买、删除、发布、改生产，全部审批
- 写明无数据和过期数据怎么办
- 重试尽量幂等
- 部分完成要报到固定地方
- 网站、连接器、源格式一变，就重新试跑

试跑是真干活：会点网站、改文件、调工具。用安全输入，写入动作放审批后面。
`,
  },
  {
    slug: "toolbox",
    no: "06",
    title: "工具箱",
    kicker: "玩法",
    group: "play",
    summary: "Plugins、共享 /workspace、电脑三件套 Update / Recover / Reset、本机执行、Tailscale。",
    body: `## 一台电脑，所有 Bot 共用

官方原话，不再转述：

- 浏览器 cookie 和登录共享
- 文件彼此可见
- 命令行凭据共享
- 一个 Bot 可以接着另一个 Bot 存下的工作干

电脑按 **用户账号** 分配，不按 Bot。不要把不该被其他 Bot 用的凭据或文件放上去。每个 Bot 有自己的屏幕，可以并行点浏览器；同一 Bot 同一时间只能跑一个 computer-use 任务。屏幕是工作面，不是安全边界。

持久目录按官方说明设计在 /workspace。项目用清楚的文件夹。临时目录、手装软件、未提交状态，更新电脑时可能被换掉。

## Update / Recover / Reset

| 动作 | 做什么 |
|---|---|
| Update Agent Computer | 用新镜像重建，尽量保留耐久状态 |
| Recover Agent Computer | 替换不可达电脑，尽量保留耐久状态 |
| Reset Agent Computer | 回到最近耐久快照，可能丢掉未保存工作 |

:::warn
「Aw, Snap」多半是电脑里的 Chrome 崩了，电脑本身还在。先 reload 标签或让 Bot reload。不要一上来就 Reset。
:::

## 插件优先

Settings → Plugins 装连接器。聊天用 @ 挂上。有连接器却去点网页，是在烧额度。2026-08 末已公开的方向：X、Outlook / Calendar / OneDrive、Stripe Link。外发、改日程、付款一律审批。

## 本机电脑是另一回事

云电脑不等于你面前的 Mac / Windows / Linux。Bot 只有在你打开 Execution on Local Computer 并且按策略批准时，才会在你的真机上跑命令。默认是每次询问。不需要就设 Never allowed。

:::community Linux / Windows 0.30.0
Linux 本地执行 ListMachines 空、Windows leftover daemon、部分机器黑屏，是已知问题。临时手段：解锁 keyring、托盘退出后清残留进程、Zscaler 要放行 *.cursorvm.com、Windows 走 TUN 而不是系统 HTTP 代理。
:::

## 内网

官方给团队的路径是 Tailscale 或 Cloudflare Tunnel，走 Team Setup。云电脑今天不能加入公司 VPN。不要在 Bot 电脑上装 VPN 客户端——有可能把这台盒子弄掉线。
`,
  },
  {
    slug: "safety",
    no: "07",
    title: "审批与安全",
    kicker: "玩法",
    group: "play",
    summary: "Bots are not a security boundary. 审批写在人设里，Auto-review 写窄规则。密码永远自己打。",
    body: `:::warn 读这一句就够
Bots are not a security boundary.
账号下所有 Bot 看见同一台电脑上的文件、登录和密钥。分开「财务 Bot」和「公关 Bot」只是分工，不是隔离。
:::

## 把边界写进请求

> 对账这次投放，起草预算调整建议。不要改 campaign，不要联系代理商。先给我看：现值、建议值、预期影响，再问我批不批。

必须审批的典型动作：外发消息或邀请、发布内容、付款或转账、删除或覆盖数据、改生产、接受法律条款。审批管的是「接下来这一下」，**不能撤销已经做完的事**。

## 审批卡片

- 桌面：Allow once / Deny / Always allow
- 手机：Approve once / Deny

看不懂目标就不要点。超时约 10 分钟没人理的卡片，主页可能残留 Approval needed。给 Bot 发一句短消息或重启应用，徽章会掉。

## Auto-review

Settings → General → Auto-review：

- Require Approval 拦住匹配动作
- Always Allow 在没有其它阻止理由时放行
- 两条都匹配时，Require Approval 优先

规则要窄。不要写「浏览器里什么都允许」。

## 密码、2FA、验证码

这些步骤必须 Take over。不要把密码或一次性码发给聊天。Bot 不是密码管理器。

## 分享 Bot

可以复制公开链接。对方预览并添加的是 **配置副本**，没有你的电脑、登录、聊天记录。链接会暴露人设。剥掉密钥、客户数据、内网 URL。

## 删 Bot 不会清电脑

删除只去掉该 Bot 的档案、对话、Routine。共享文件和登录还在。可能还要用就先 Hide。要撤权：在共享电脑上登出网站、卸连接器、删 /workspace 里的敏感文件。
`,
  },
];
