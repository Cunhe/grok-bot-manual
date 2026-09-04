import { Link } from "@tanstack/react-router";
import { groupedChapters } from "@/lib/manual";
import { MANUAL } from "@/lib/manual/catalog";
import { cn } from "@/lib/utils";

const extras = [
  { to: "/errata", label: "勘误" },
  { to: "/today", label: "今日现场" },
  { to: "/prompts", label: "提示词" },
  { to: "/scenes", label: "按场景" },
] as const;

export function SidebarNav({
  active,
  onNavigate,
}: {
  active?: string;
  onNavigate?: () => void;
}) {
  const groups = groupedChapters();
  return (
    <nav className="flex min-h-full flex-col gap-6 px-4 py-6">
      <Link to="/" onClick={onNavigate} className="block px-2">
        <div className="font-display text-xl tracking-tight text-fg">Grok Bot</div>
        <div className="mt-0.5 text-[11px] tracking-[0.18em] uppercase text-subtle">
          {MANUAL.english}
        </div>
      </Link>

      <div className="flex flex-col gap-0.5">
        {extras.map((e) => (
          <Link
            key={e.to}
            to={e.to}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-2 py-2 text-sm text-muted hover:bg-surface-2 hover:text-fg",
              active === e.to && "bg-surface-2 text-fg",
            )}
          >
            {e.label}
          </Link>
        ))}
      </div>

      {groups.map((g) => (
        <div key={g.id}>
          <div className="mb-1.5 px-2 text-[11px] tracking-[0.16em] uppercase text-subtle">
            {g.label}
          </div>
          <div className="flex flex-col">
            {g.chapters.map((c) => (
              <Link
                key={c.slug}
                to="/read/$slug"
                params={{ slug: c.slug }}
                onClick={onNavigate}
                className={cn(
                  "rounded-md px-2 py-2 text-sm text-muted hover:bg-surface-2 hover:text-fg",
                  active === c.slug && "bg-surface-2 text-fg",
                )}
              >
                <span className="mr-2 font-mono text-[10px] text-subtle">{c.no}</span>
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-auto border-t border-border px-2 pt-5">
        <p className="text-[11px] tracking-[0.16em] uppercase text-subtle">seawind 制作</p>
        <a
          href={MANUAL.siteUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block text-[11px] tracking-[0.14em] uppercase text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          {MANUAL.site}
        </a>
      </div>
    </nav>
  );
}
