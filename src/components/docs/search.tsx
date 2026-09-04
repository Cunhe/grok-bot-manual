import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { searchManual } from "@/lib/manual";
import { cn } from "@/lib/utils";

export function SearchButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm text-muted shadow-[var(--shadow-border)] hover:text-fg"
    >
      <Search className="size-4" />
      <span className="hidden sm:inline">检索</span>
      <kbd className="ml-2 hidden rounded-sm bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-subtle sm:inline">
        /
      </kbd>
    </button>
  );
}

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const hits = useMemo(() => searchManual(q), [q]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">检索说明书</DialogTitle>
        <div className="border-b border-border px-4 py-3">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="岗位、价格、MCP、审批…"
            className="h-11 w-full bg-transparent text-base text-fg outline-none placeholder:text-subtle"
          />
        </div>
        <div className="max-h-[min(24rem,60dvh)] overflow-y-auto p-2">
          {q && hits.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-muted">没有匹配。</p>
          ) : (
            hits.map((h) => (
              <button
                key={h.slug}
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  void navigate({ to: "/read/$slug", params: { slug: h.slug } });
                }}
                className={cn(
                  "flex w-full flex-col items-start gap-1 rounded-md px-3 py-3 text-left hover:bg-surface-2",
                )}
              >
                <span className="text-sm text-fg">
                  <span className="mr-2 font-mono text-[11px] text-subtle">{h.no}</span>
                  {h.title}
                </span>
                <span className="line-clamp-2 text-xs leading-5 text-muted">{h.snippet}</span>
              </button>
            ))
          )}
          {!q ? (
            <p className="px-3 py-6 text-center text-xs text-subtle">
              试试「共用电脑」「$20」「Routine」「Android」
            </p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
