import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROMPTS } from "@/lib/manual/prompts";

export const Route = createFileRoute("/prompts")({ component: PromptsPage });

function CopyBtn({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setDone(true);
        window.setTimeout(() => setDone(false), 1200);
      }}
    >
      {done ? <Check className="size-4" /> : <Copy className="size-4" />}
      {done ? "已复制" : "复制"}
    </Button>
  );
}

function PromptsPage() {
  return (
    <main className="px-5 py-10 md:px-10 md:py-14">
      <p className="text-[11px] tracking-[0.22em] uppercase text-subtle">Playbook</p>
      <h1 className="mt-3 font-display text-[2.4rem] tracking-tight md:text-[3.2rem]">提示词</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
        贴进一个有名字的 Bot。先只读。审批画在付款、外发、删除、上线上。账号下所有 Bot 共享一台电脑。
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {PROMPTS.map((p) => (
          <article key={p.id} className="flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge>{p.tag}</Badge>
                <h2 className="mt-3 text-lg font-medium">{p.title}</h2>
              </div>
              <CopyBtn text={p.body} />
            </div>
            <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-6 text-muted">{p.body}</pre>
          </article>
        ))}
      </div>
    </main>
  );
}
