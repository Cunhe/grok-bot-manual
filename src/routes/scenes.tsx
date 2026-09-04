import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { NOTES } from "@/lib/manual/notes";
import { SCENES } from "@/lib/manual/catalog";
import type { SceneId } from "@/lib/manual/types";
import { cn } from "@/lib/utils";

type Search = { scene?: SceneId };

export const Route = createFileRoute("/scenes")({
  validateSearch: (raw: Record<string, unknown>): Search => {
    const v = raw.scene;
    const ids = SCENES.map((s) => s.id);
    if (typeof v === "string" && (ids as string[]).includes(v)) return { scene: v as SceneId };
    return {};
  },
  component: ScenesPage,
});

function ScenesPage() {
  const { scene } = Route.useSearch();
  const notes = scene ? NOTES.filter((n) => n.scene === scene) : NOTES;
  const current = SCENES.find((s) => s.id === scene);

  return (
    <main className="px-5 py-10 md:px-10 md:py-14">
      <p className="text-[11px] tracking-[0.22em] uppercase text-subtle">Scenes</p>
      <h1 className="mt-3 font-display text-[2.4rem] tracking-tight md:text-[3.2rem]">按场景看</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
        {current ? current.blurb : "点选场景，只看这一类现场。完整岗位说明在第 08 章。"}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          to="/scenes"
          className={cn(
            "rounded-full px-4 py-2 text-sm shadow-[var(--shadow-border)]",
            !scene ? "bg-fg text-accent-fg" : "text-muted hover:text-fg",
          )}
        >
          全部
        </Link>
        {SCENES.map((s) => (
          <Link
            key={s.id}
            to="/scenes"
            search={{ scene: s.id }}
            className={cn(
              "rounded-full px-4 py-2 text-sm shadow-[var(--shadow-border)]",
              scene === s.id ? "bg-fg text-accent-fg" : "text-muted hover:text-fg",
            )}
          >
            {s.label}
          </Link>
        ))}
      </div>
      <div className="mt-10 max-w-3xl space-y-4">
        {notes.length === 0 ? (
          <p className="text-sm text-muted">这一类还没收进现场笔记。第 08 章有岗位怎么配。</p>
        ) : (
          notes.map((n) => (
            <article key={n.title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{SCENES.find((s) => s.id === n.scene)?.label}</Badge>
                <span className="font-mono text-[11px] text-subtle">{n.date}</span>
              </div>
              <h2 className="mt-3 text-base font-medium">{n.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{n.body}</p>
            </article>
          ))
        )}
        <p className="text-sm text-subtle">
          岗位提示词在{" "}
          <Link to="/prompts" className="text-muted underline underline-offset-4">
            提示词页
          </Link>
          ，机制说明在{" "}
          <Link to="/read/$slug" params={{ slug: "playbook" }} className="text-muted underline underline-offset-4">
            第 08 章
          </Link>
          。
        </p>
      </div>
    </main>
  );
}
