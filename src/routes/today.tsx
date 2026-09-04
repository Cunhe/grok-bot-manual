import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { NOTES } from "@/lib/manual/notes";
import { SCENES } from "@/lib/manual/catalog";

export const Route = createFileRoute("/today")({ component: TodayPage });

function TodayPage() {
  return (
    <main className="px-5 py-10 md:px-10 md:py-14">
      <p className="text-[11px] tracking-[0.22em] uppercase text-subtle">Field notes</p>
      <h1 className="mt-3 font-display text-[2.4rem] tracking-tight md:text-[3.2rem]">今日现场</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
        当天只加不归档。金额、省下的月费都是原作者自述，不是可复制结果。不可逆动作必须审批。
      </p>
      <div className="mt-10 max-w-3xl space-y-4">
        {NOTES.map((n) => (
          <article key={n.title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-subtle tabular-nums">{n.date}</span>
              <Link to="/scenes" search={{ scene: n.scene }}>
                <Badge>{SCENES.find((s) => s.id === n.scene)?.label}</Badge>
              </Link>
              <a
                href={n.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted underline-offset-4 hover:underline"
              >
                {n.source}
              </a>
            </div>
            <h2 className="mt-3 text-base font-medium">{n.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{n.body}</p>
            {n.caution ? <p className="mt-3 text-xs leading-5 text-warn">{n.caution}</p> : null}
          </article>
        ))}
      </div>
    </main>
  );
}
