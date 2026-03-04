"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import type { OnshapeItem } from "@/lib/onshape";

// If you're using shadcn/ui:
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Lazy-load the iframe component itself (not required, but nice).
const OnshapeIframe = dynamic(() => import("./OnshapeIframe"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm">
      Loading viewer…
    </div>
  ),
});

export function OnshapeGallery({ items }: { items: OnshapeItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = useMemo(
    () => items.find((x) => x.id === activeId) ?? null,
    [items, activeId],
  );

  const openItem = useCallback((id: string) => {
    setActiveId(id);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    // Optional: clear active after close to fully unmount iframe
    // This guarantees the heavy viewer is gone and stops network/CPU.
    setTimeout(() => setActiveId(null), 150);
  }, []);

  // Optional: prefetch the iframe code only when user shows intent.
  const prefetchIframeChunk = useCallback(() => {
    // This triggers the dynamic import ahead of time (no iframe yet).
    import("./OnshapeIframe");
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            className="group bg-background rounded-2xl border p-2 text-left shadow-sm transition hover:shadow-md"
            onClick={() => openItem(item.id)}
            onMouseEnter={prefetchIframeChunk}
            onFocus={prefetchIframeChunk}
            type="button"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={item.thumbSrc}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition group-hover:scale-[1.02]"
                // next/image lazy-loads by default unless `priority` is set
              />
            </div>
            <div className="mt-2 line-clamp-1 text-sm font-medium">
              {item.title}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : close())}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>{active?.title ?? "Viewer"}</DialogTitle>
          </DialogHeader>

          {/* Viewer area */}
          <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl border">
            {/* Key point: only mount iframe when dialog is open AND item exists */}
            {open && active?.embedUrl ? (
              <OnshapeIframe embedUrl={active.embedUrl} title={active.title} />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm">
                Select an item…
              </div>
            )}
          </div>

          <div className="text-muted-foreground mt-2 text-xs">
            Closing the dialog fully unmounts the iframe to keep CPU usage low.
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
