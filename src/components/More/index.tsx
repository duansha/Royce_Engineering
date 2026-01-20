"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  // Pick whatever caption you want:
  const caption =
    ("caption" in photo && (photo as any).caption) || title || alt;

  return (
    <div style={{ width: "100%" }}>
      {/* Image box keeps aspect ratio */}
      <div
        style={{
          width: "100%",
          position: "relative",
          aspectRatio: `${width} / ${height}`,
        }}
      >
        <Image
          fill
          src={photo}
          alt={alt}
          title={title}
          sizes={sizes}
          style={{ objectFit: "cover" }} // optional
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
        />
      </div>

      {/* Caption sits below in normal flow */}
      <div
        className="dark:text-white/90"
        style={{
          marginTop: 6,
          fontSize: 14,
          lineHeight: 1.2,
          textAlign: "left",
        }}
      >
        {caption}
      </div>
    </div>
  );
}

const Brands = () => {
  const [index, setIndex] = useState(-1);
  const timeline = [
    { year: "5th Grade", label: "Started 3D modeling" },
    { year: "6th–7th Grade", label: "Early competition prototypes" },
    { year: "8th Grade", label: "Iterative design + performance testing" },
    { year: "9th Grade", label: "Optimized builds for competition" },
    { year: "10th Grade", label: "Full-cycle design & fabrication" },
  ];

  return (
    <section className="pt-16">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="dark:bg-gray-dark bg-gray-250 relative flex min-h-screen items-center justify-center overflow-hidden bg-top bg-no-repeat text-gray-900 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
            <div className="max-w-8xl mx-auto px-4">
              <div className="grid gap-12 lg:grid-cols-1">
                <div className="mt-5 mb-25 ml-5">
                  <div className="invisible mt-4 text-[0.15rem] lg:mt-0">
                    mmdmmmd mmdmmmd{" "}
                  </div>
                  <span className="pr-8 dark:text-white/90">More Projects</span>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 dark:text-white/70 dark:hover:text-white"
                  >
                    Home...
                  </Link>
                  <RowsPhotoAlbum
                    photos={photos}
                    render={{ image: renderNextImage }}
                    targetRowHeight={250}
                    onClick={({ index }) => setIndex(index)}
                  />
                  <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                  />

                  <section className="mt-10 rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm md:p-6 dark:border-gray-800 dark:bg-black/70">
                    <div className="mx-auto max-w-6xl">
                      <div className="items-left flex justify-between gap-4">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-gray-100">
                            Engineering Timeline
                          </h2>
                          <p className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                            Progression of design complexity and independent
                            building.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-5">
                        {timeline.map((item, idx) => (
                          <div key={idx} className="flex flex-col items-start">
                            <div className="text-sm font-medium text-gray-900 md:text-base dark:text-gray-100">
                              {item.year}
                            </div>
                            <div className="text-xs text-gray-600 md:text-sm dark:text-gray-300">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 h-px bg-gray-200 dark:bg-gray-800" />
                      <div className="mt-3 text-xs text-gray-500 md:text-sm dark:text-gray-400">
                        <span className="font-medium">Note:</span> This timeline
                        reflects a multi-year progression of independent design,
                        prototyping, and iteration.
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
