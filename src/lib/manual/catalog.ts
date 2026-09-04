import type { ChapterGroup, Scene } from "./types";

export const MANUAL = {
  title: "Grok Bot 说明书",
  english: "FIELD MANUAL",
  edition: "海风修订 v260904",
  updated: "2026-09-04",
  tagline: "一支装在云电脑里的 AI 团队。合上电脑，它们继续上班。",
  maker: "seawind",
  site: "000666.BEST",
  siteUrl: "https://000666.best",
  credit:
    "本版由 seawind 制作。公开材料重编与勘误。底稿来自《Grok Bot 橙皮书》Kin 著 v260823（CC BY-NC-SA 4.0）、awesome-grok-bot 社区清单，以及 SpaceXAI / Cursor 官方文档。价格、平台、安全边界以官方最新口径为准。",
} as const;

export const GROUPS: { id: ChapterGroup; label: string }[] = [
  { id: "start", label: "入门" },
  { id: "play", label: "机制" },
  { id: "cases", label: "现场" },
  { id: "ops", label: "省钱" },
  { id: "edge", label: "边界" },
  { id: "appendix", label: "附录" },
];

export const SCENES: Scene[] = [
  { id: "money", label: "省钱退款", blurb: "账单、订阅、航司、商家追款" },
  { id: "admin", label: "邮件行政", blurb: "收件箱分拣、日历、会议纪要" },
  { id: "sales", label: "销售获客", blurb: "线索、外联草稿、CRM 卫生" },
  { id: "content", label: "内容做页", blurb: "站点、文案、发布准备" },
  { id: "intel", label: "情报雷达", blurb: "竞品、舆情、X 时间线" },
  { id: "life", label: "生活出行", blurb: "订位、行程、订阅断舍离" },
  { id: "dev", label: "开发向", blurb: "复现 bug、开单、不合并" },
];

export const SOURCE_LAYERS = [
  { id: "official", label: "官方口径", note: "x.ai / docs.x.ai / Cursor 帮助" },
  { id: "measured", label: "社区实测", note: "带出处的实机对话与论坛员工回复" },
  { id: "hearsay", label: "社区传闻", note: "未复核金额、不可复制结果" },
  { id: "infer", label: "推断", note: "作者判断，不是产品承诺" },
] as const;
