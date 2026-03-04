"use client";

export default function OnshapeIframe({
  embedUrl,
  title,
}: {
  embedUrl: string;
  title: string;
}) {
  return (
    <iframe
      title={title}
      src={embedUrl}
      className="h-full w-full"
      loading="lazy"
      // Consider tightening what the iframe can do. Onshape may require some.
      // Start minimal; add permissions if you see broken behavior.
      allow="clipboard-read; clipboard-write; fullscreen"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
