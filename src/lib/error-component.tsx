import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center bg-bg text-fg">
      <span className="text-danger" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-medium">这一页坏了</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}

export function AppNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="font-display text-3xl tracking-tight">没有这一章</h1>
      <p className="text-sm text-muted">回目录再选。</p>
      <Link to="/" className="mt-2 text-sm text-fg underline underline-offset-4">
        回封面
      </Link>
    </main>
  );
}
