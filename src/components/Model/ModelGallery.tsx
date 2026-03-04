"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { ModelItem } from "@/lib/models";

// shadcn dialog (or swap with your own modal)
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Lazy-load the heavy 3D viewer component (and its Three/R3F deps)
const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[60vh] w-full items-center justify-center text-sm">
      Loading 3D viewer…
    </div>
  ),
});

export function ModelGallery({ items }: { items: ModelItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = useMemo(
    () => items.find((x) => x.id === activeId) ?? null,
    [items, activeId],
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <button
            key={item.id}
            className="bg-background cursor-pointer rounded-2xl border p-2 text-left shadow-sm transition hover:shadow-md"
            onClick={() => {
              setActiveId(item.id);
              setOpen(true);
            }}
            type="button"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={item.thumbSrc}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="mt-2 line-clamp-1 text-sm font-medium dark:text-white">
              {item.title}
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) {
            // unmount viewer after close to free GPU/CPU
            setTimeout(() => setActiveId(null), 150);
          }
        }}
      >
        <DialogContent className="max-w-6xl">
          <DialogHeader>
            <DialogTitle>{active?.title ?? "Model"}</DialogTitle>
          </DialogHeader>

          <div className="mt-3 h-[70vh] w-full overflow-hidden rounded-xl border">
            {open &&
            typeof active?.glbUrl === "string" &&
            active.glbUrl.length > 0 ? (
              <ModelViewer glbUrl={active.glbUrl} />
            ) : null}
          </div>

          <div className="mt-2 text-xs">Drag to orbit. Scroll to zoom.</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
