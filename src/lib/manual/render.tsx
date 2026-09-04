import { type ReactNode, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CalloutKind } from "./types";

const CALLOUT_LABEL: Record<CalloutKind, string> = {
  official: "官方口径",
  fix: "勘误",
  warn: "注意",
  tip: "现场笔记",
  community: "社区实测",
};

const CALLOUT_TONE: Record<CalloutKind, string> = {
  official: "border-official/35 bg-official/8",
  fix: "border-fix/35 bg-fix/8",
  warn: "border-warn/40 bg-warn/8",
  tip: "border-tip/35 bg-tip/8",
  community: "border-border bg-surface-2",
};

function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const token = m[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={key++} className="font-medium text-fg">
          {token.slice(2, -2)}
        </strong>,
      );
    } else if (token.startsWith("`")) {
      parts.push(
        <code
          key={key++}
          className="rounded-sm bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-tip"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      const lm = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (lm) {
        parts.push(
          <a
            key={key++}
            href={lm[2]}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-border-strong underline-offset-4 hover:text-fg"
          >
            {lm[1]}
          </a>,
        );
      }
    }
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function CopyBlock({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="absolute right-2 top-2 inline-flex size-9 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-fg"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setDone(true);
        window.setTimeout(() => setDone(false), 1200);
      }}
      aria-label="复制"
    >
      {done ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type TocItem = { id: string; text: string; level: 2 | 3 };

export function extractToc(md: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of md.split("\n")) {
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      items.push({ id: slugify(text), text, level: 3 });
    } else if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      items.push({ id: slugify(text), text, level: 2 });
    }
  }
  return items;
}

export function renderMarkdown(md: string): ReactNode {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;

  const pushP = (buf: string[]) => {
    const t = buf.join("\n").trim();
    if (!t) return;
    out.push(
      <p key={k++} className="text-[15px] leading-7 text-muted md:text-base md:leading-7">
        {inline(t)}
      </p>,
    );
  };

  while (i < lines.length) {
    const line = lines[i] ?? "";

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith(":::")) {
      const head = line.slice(3).trim();
      const kind = (head.split(/\s+/)[0] ?? "tip") as CalloutKind;
      const title = head.split(/\s+/).slice(1).join(" ") || CALLOUT_LABEL[kind] || "注";
      const buf: string[] = [];
      i++;
      while (i < lines.length && !(lines[i] ?? "").startsWith(":::")) {
        buf.push(lines[i] ?? "");
        i++;
      }
      i++;
      out.push(
        <aside
          key={k++}
          className={cn("rounded-lg border px-4 py-3", CALLOUT_TONE[kind] ?? CALLOUT_TONE.tip)}
        >
          <div className="mb-1.5 text-[11px] font-medium tracking-[0.14em] text-fg/80">
            {title}
          </div>
          <div className="space-y-2 text-sm leading-6 text-fg/85">
            {buf
              .join("\n")
              .split("\n\n")
              .map((p, idx) => (
                <p key={idx}>{inline(p.trim())}</p>
              ))}
          </div>
        </aside>,
      );
      continue;
    }

    if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !(lines[i] ?? "").startsWith("```")) {
        buf.push(lines[i] ?? "");
        i++;
      }
      i++;
      const text = buf.join("\n");
      out.push(
        <div
          key={k++}
          className="relative rounded-lg bg-surface-2 p-4 font-mono text-[13px] leading-6 text-tip"
        >
          <CopyBlock text={text} />
          <pre className="overflow-x-auto whitespace-pre-wrap pr-10">{text}</pre>
        </div>,
      );
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && (lines[i] ?? "").startsWith("|")) {
        const cells = (lines[i] ?? "")
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!cells.every((c) => /^:?-+:?$/.test(c))) rows.push(cells);
        i++;
      }
      const [header, ...body] = rows;
      if (header) {
        out.push(
          <div key={k++} className="overflow-x-auto rounded-lg shadow-[var(--shadow-border)]">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-surface-2 text-[12px] tracking-wide text-muted">
                <tr>
                  {header.map((h, hi) => (
                    <th key={hi} className="px-3 py-2.5 font-medium">
                      {inline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((r, ri) => (
                  <tr key={ri} className="border-t border-border">
                    {r.map((c, ci) => (
                      <td key={ci} className="px-3 py-2.5 align-top text-fg/90">
                        {inline(c)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      const id = slugify(text);
      out.push(
        <h2
          id={id}
          key={k++}
          className="scroll-mt-24 font-display text-[1.65rem] leading-snug tracking-tight text-fg md:text-[1.85rem]"
        >
          {text}
        </h2>,
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      const id = slugify(text);
      out.push(
        <h3 id={id} key={k++} className="scroll-mt-24 text-lg font-medium tracking-tight text-fg">
          {text}
        </h3>,
      );
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && (lines[i] ?? "").startsWith("> ")) {
        buf.push((lines[i] ?? "").slice(2));
        i++;
      }
      out.push(
        <blockquote
          key={k++}
          className="border-l border-border-strong pl-4 text-[15px] leading-7 text-fg/90"
        >
          {buf.map((b, bi) => (
            <p key={bi} className={bi < buf.length - 1 ? "mb-2" : undefined}>
              {inline(b)}
            </p>
          ))}
        </blockquote>,
      );
      continue;
    }

    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^[-*] /, ""));
        i++;
      }
      out.push(
        <ul key={k++} className="space-y-1.5 pl-1 text-[15px] leading-7 text-muted">
          {items.map((it, ii) => (
            <li key={ii} className="flex gap-3">
              <span className="mt-[0.7em] size-1 shrink-0 rounded-full bg-subtle" />
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^\d+\. /, ""));
        i++;
      }
      out.push(
        <ol key={k++} className="space-y-1.5 pl-1 text-[15px] leading-7 text-muted">
          {items.map((it, ii) => (
            <li key={ii} className="flex gap-3">
              <span className="w-5 shrink-0 pt-1.5 font-mono text-xs text-subtle tabular-nums">
                {String(ii + 1).padStart(2, "0")}
              </span>
              <span>{inline(it)}</span>
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      (lines[i] ?? "").trim() !== "" &&
      !(lines[i] ?? "").startsWith("#") &&
      !(lines[i] ?? "").startsWith("|") &&
      !(lines[i] ?? "").startsWith(">") &&
      !(lines[i] ?? "").startsWith(":::") &&
      !(lines[i] ?? "").startsWith("```") &&
      !/^[-*] /.test(lines[i] ?? "") &&
      !/^\d+\. /.test(lines[i] ?? "")
    ) {
      buf.push(lines[i] ?? "");
      i++;
    }
    pushP(buf);
  }

  return <div className="space-y-5">{out}</div>;
}
