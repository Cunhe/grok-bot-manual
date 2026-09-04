export type ChapterGroup =
  | "start"
  | "play"
  | "cases"
  | "ops"
  | "edge"
  | "appendix";

export type SceneId =
  | "money"
  | "admin"
  | "sales"
  | "content"
  | "intel"
  | "life"
  | "dev";

export type CalloutKind = "official" | "fix" | "warn" | "tip" | "community";

export type Chapter = {
  slug: string;
  no: string;
  title: string;
  kicker: string;
  summary: string;
  group: ChapterGroup;
  scenes?: SceneId[];
  body: string;
};

export type Scene = {
  id: SceneId;
  label: string;
  blurb: string;
};

export type PromptCard = {
  id: string;
  title: string;
  tag: string;
  body: string;
};

export type FieldNote = {
  date: string;
  scene: SceneId;
  title: string;
  source: string;
  sourceUrl: string;
  body: string;
  caution?: string;
};

export type Erratum = {
  id: string;
  date: string;
  title: string;
  old: string;
  now: string;
  source: string;
};
