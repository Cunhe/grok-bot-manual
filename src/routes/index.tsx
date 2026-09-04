import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CHAPTERS } from "@/lib/manual";
import { MANUAL, SCENES, SOURCE_LAYERS } from "@/lib/manual/catalog";
import { ERRATA } from "@/lib/manual/errata";
import { NOTES } from "@/lib/manual/notes";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const today = NOTES.filter((n) => n.date === "2026-09-03");
  const topErrata = ERRATA.slice(0, 4);

  return (
    <main className="px-5 pb-20 pt-10 md:px-10 md:pt-14">
      <p className="text-[11px] tracking-[0.22em] uppercase text-subtle">
        {MANUAL.english} · {MANUAL.updated}
      </p>
      <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-subtle">
        seawind 制作 ·{" "}
        <a href={MANUAL.siteUrl} target="_blank" rel="noreferrer" className="hover:text-fg">
          {MANUAL.site}
        </a>
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.12] tracking-tight text-fg md:text-[4.4rem]">
        Grok Bot
        <span className="block italic text-muted">说明书</span>
      </h1>
      <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted md:text-base">
        {MANUAL.tagline}
        <span className="mt-2 block text-subtle">{MANUAL.edition}。公开材料重编，并把 8 月 23 日之后的变化写进去。</span>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/read/$slug"
          params={{ slug: "tldr" }}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg active:scale-[0.96]"
        >
          从一页看懂开始
          <ArrowRight className="size-4" />
        </Link>
        <Link
          to="/errata"
          className="inline-flex h-11 items-center rounded-md px-4 text-sm text-fg shadow-[var(--shadow-border)]"
        >
          先看勘误
        </Link>
      </div>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          { k: "这是什么", v: "一支装在云电脑里的 AI 团队。共用一台电脑，不是一人一台。" },
          { k: "怎么入门", v: "开通 → 大脑倾倒 → 派今天本来就要干的真活。先只读。" },
          { k: "最值得抄", v: "总监调度 + 做过两次就固化 Routine + 哨兵式无人值守。" },
        ].map((c) => (
          <article key={c.k} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <h2 className="text-[11px] tracking-[0.16em] uppercase text-subtle">{c.k}</h2>
            <p className="mt-3 text-sm leading-6 text-fg/90">{c.v}</p>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl tracking-tight">必须先改的口误</h2>
          <Link to="/errata" className="text-sm text-muted hover:text-fg">
            全部勘误
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {topErrata.map((e) => (
            <article key={e.id} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <div className="flex items-center gap-2">
                <Badge variant="fix">勘误</Badge>
                <span className="font-mono text-[11px] text-subtle tabular-nums">{e.date}</span>
              </div>
              <h3 className="mt-3 text-base font-medium">{e.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{e.now}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl tracking-tight">今日现场 · 09-03</h2>
          <Link to="/today" className="text-sm text-muted hover:text-fg">
            案例库
          </Link>
        </div>
        <div className="space-y-3">
          {today.map((n) => (
            <article key={n.title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{SCENES.find((s) => s.id === n.scene)?.label}</Badge>
                <a href={n.sourceUrl} target="_blank" rel="noreferrer" className="text-xs text-muted underline-offset-4 hover:underline">
                  {n.source}
                </a>
              </div>
              <h3 className="mt-3 text-base font-medium">{n.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{n.body}</p>
              {n.caution ? (
                <p className="mt-3 text-xs leading-5 text-warn">{n.caution}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl tracking-tight">目录</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {CHAPTERS.map((c) => (
            <Link
              key={c.slug}
              to="/read/$slug"
              params={{ slug: c.slug }}
              className="group flex items-baseline gap-3 rounded-lg px-3 py-3 hover:bg-surface"
            >
              <span className="w-8 shrink-0 font-mono text-xs text-subtle">{c.no}</span>
              <span className="min-w-0">
                <span className="block text-sm text-fg group-hover:underline group-hover:underline-offset-4">
                  {c.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted">{c.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl tracking-tight">按场景看</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {SCENES.map((s) => (
            <Link
              key={s.id}
              to="/scenes"
              search={{ scene: s.id }}
              className="rounded-full px-4 py-2 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-2xl">
        <h2 className="font-display text-2xl tracking-tight">信息怎么分层</h2>
        <ul className="mt-5 space-y-3">
          {SOURCE_LAYERS.map((l) => (
            <li key={l.id} className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 text-subtle">{l.label}</span>
              <span className="text-muted">{l.note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs leading-5 text-subtle">{MANUAL.credit}</p>
      </section>
    </main>
  );
}
