import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SearchButton, SearchDialog } from "./search";
import { SidebarNav } from "./sidebar";
import { MANUAL } from "@/lib/manual/catalog";

export function DocsShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const slug = pathname.startsWith("/read/") ? pathname.slice("/read/".length) : pathname;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if (
        e.key === "/" &&
        !(t instanceof HTMLInputElement) &&
        !(t instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b border-border bg-bg/90 px-3 backdrop-blur-sm md:px-4">
        <Button
          variant="ghost"
          size="icon-sm"
          className="lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="目录"
        >
          <Menu className="size-4" />
        </Button>
        <Link to="/" className="min-w-0 truncate font-display text-lg tracking-tight">
          {MANUAL.title}
        </Link>
        <span className="hidden truncate text-[11px] tracking-wide text-subtle sm:inline">
          {MANUAL.edition}
        </span>
        <div className="ml-auto">
          <SearchButton onOpen={() => setSearch(true)} />
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border lg:block">
          <SidebarNav active={slug} />
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="font-display text-xl tracking-tight text-fg">seawind 制作</p>
            <a
              href={MANUAL.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-[12px] tracking-[0.18em] uppercase text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {MANUAL.site}
            </a>
            <p className="mt-3 text-[11px] tracking-wide text-subtle">
              {MANUAL.edition} · {MANUAL.updated}
            </p>
          </div>
          <p className="max-w-xl text-xs leading-6 text-subtle">{MANUAL.credit}</p>
        </div>
      </footer>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="overflow-y-auto pt-12">
          <SidebarNav active={slug} onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <SearchDialog open={search} onOpenChange={setSearch} />
    </div>
  );
}
