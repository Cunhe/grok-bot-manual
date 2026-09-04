import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { ERRATA } from "@/lib/manual/errata";

export const Route = createFileRoute("/errata")({ component: ErrataPage });

function ErrataPage() {
  return (
    <main className="px-5 py-10 md:px-10 md:py-14">
      <p className="text-[11px] tracking-[0.22em] uppercase text-subtle">Corrections</p>
      <h1 className="mt-3 font-display text-[2.4rem] tracking-tight md:text-[3.2rem]">勘误</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
        橙皮书停在 8 月 23 日。之后官方扩权、补平台、把「一台电脑」写进文档。下面是我对照官方之后改掉的口误。
      </p>
      <div className="mt-10 max-w-3xl space-y-4">
        {ERRATA.map((e) => (
          <article key={e.id} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="fix">勘误</Badge>
              <span className="font-mono text-[11px] text-subtle tabular-nums">{e.date}</span>
            </div>
            <h2 className="mt-3 text-lg font-medium">{e.title}</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <p className="text-sm leading-6 text-subtle">
                <span className="mb-1 block text-[11px] tracking-wide uppercase">当时</span>
                {e.old}
              </p>
              <p className="text-sm leading-6 text-fg/90">
                <span className="mb-1 block text-[11px] tracking-wide uppercase text-fix">现在</span>
                {e.now}
              </p>
            </div>
            <p className="mt-4 text-xs text-subtle">{e.source}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
