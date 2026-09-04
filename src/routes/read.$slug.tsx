import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getChapter, neighbors } from "@/lib/manual";
import { extractToc, renderMarkdown } from "@/lib/manual/render";

export const Route = createFileRoute("/read/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const chapter = getChapter(slug);
  if (!chapter) throw notFound();
  const { prev, next } = neighbors(slug);
  const toc = extractToc(chapter.body);

  return (
    <div className="flex">
      <article className="min-w-0 flex-1 px-5 py-10 md:px-10 md:py-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-subtle">
          {chapter.kicker} · {chapter.no}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.2rem] leading-[1.15] tracking-tight md:text-[3.2rem]">
          {chapter.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">{chapter.summary}</p>
        <div className="mx-auto mt-10 max-w-[42rem]">{renderMarkdown(chapter.body)}</div>

        <nav className="mx-auto mt-16 flex max-w-[42rem] gap-3 border-t border-border pt-8">
          {prev ? (
            <Link
              to="/read/$slug"
              params={{ slug: prev.slug }}
              className="flex min-w-0 flex-1 flex-col gap-1 rounded-lg px-3 py-3 hover:bg-surface"
            >
              <span className="inline-flex items-center gap-1 text-[11px] text-subtle">
                <ArrowLeft className="size-3" /> 上一章
              </span>
              <span className="truncate text-sm text-fg">
                {prev.no} {prev.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              to="/read/$slug"
              params={{ slug: next.slug }}
              className="flex min-w-0 flex-1 flex-col items-end gap-1 rounded-lg px-3 py-3 text-right hover:bg-surface"
            >
              <span className="inline-flex items-center gap-1 text-[11px] text-subtle">
                下一章 <ArrowRight className="size-3" />
              </span>
              <span className="truncate text-sm text-fg">
                {next.no} {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      </article>

      {toc.length > 0 ? (
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-52 shrink-0 overflow-y-auto py-14 pr-6 xl:block">
          <div className="text-[11px] tracking-[0.16em] uppercase text-subtle">本章</div>
          <ul className="mt-3 space-y-2">
            {toc.map((t) => (
              <li key={t.id} className={t.level === 3 ? "pl-3" : ""}>
                <a href={`#${t.id}`} className="text-xs leading-5 text-muted hover:text-fg">
                  {t.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}
