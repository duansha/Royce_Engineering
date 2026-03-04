import { OnshapeGallery } from "./OnshapeGallery";
import { onshapeItems } from "@/lib/onshape";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Onshape Gallery</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        Click a thumbnail to open an interactive viewer (iframe loads only on
        demand).
      </p>

      <div className="mt-6">
        <OnshapeGallery items={onshapeItems} />
      </div>
    </main>
  );
}
