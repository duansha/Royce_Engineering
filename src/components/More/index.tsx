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
    ("caption" in photo && (photo as any).caption) || alt || title;

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
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-0.5 text-xs font-medium text-gray-900 dark:bg-black/60 dark:text-gray-100">
            {title}
          </span>
        </div>
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
                    placholder placeholder{" "}
                  </div>
                  <span className="pr-8 dark:text-white/90">
                    <b>More Projects</b>
                  </span>
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
                        <div className="flex items-center">
                          <span className="hidden lg:block">
                            Source code for embedded control and supporting
                            tools is available here: &nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <svg
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M22,12.247a10,10,0,0,1-6.833,9.488c-.507.1-.687-.214-.687-.481,0-.328.012-1.407.012-2.743a2.386,2.386,0,0,0-.679-1.852c2.228-.248,4.566-1.093,4.566-4.935a3.859,3.859,0,0,0-1.028-2.683,3.591,3.591,0,0,0-.1-2.647s-.838-.269-2.747,1.025a9.495,9.495,0,0,0-5.007,0c-1.91-1.294-2.75-1.025-2.75-1.025a3.6,3.6,0,0,0-.1,2.647A3.864,3.864,0,0,0,5.62,11.724c0,3.832,2.334,4.69,4.555,4.942A2.137,2.137,0,0,0,9.54,18a2.128,2.128,0,0,1-2.91-.831A2.1,2.1,0,0,0,5.1,16.142s-.977-.013-.069.608A2.646,2.646,0,0,1,6.14,18.213s.586,1.944,3.368,1.34c.005.835.014,1.463.014,1.7,0,.265-.183.574-.683.482A10,10,0,1,1,22,12.247Z" />
                          </svg>
                          <a
                            href="https://github.com/royce2engineering"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:text-body-color-dark text-footer transition-colors hover:text-blue-500 dark:hover:text-gray-300"
                          >
                            https://github.com/royce2engineering
                          </a>
                        </div>
                      </div>

                      <div className="mt-3 text-xs text-gray-500 md:text-sm dark:text-gray-400">
                        This timeline reflects a multi-year progression of
                        design, prototyping, and iteration. I want to learn how
                        research formalizes testing and iteration beyond
                        competitions…
                        <br />
                        <br />
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail mr-3 h-4 w-4 text-gray-500"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <a
                            href="mailto:royce2engineering@gmail.com"
                            className="dark:text-body-color-dark text-footer transition-colors hover:text-blue-500 dark:hover:text-gray-300"
                          >
                            royce2engineering@gmail.com
                          </a>
                        </div>
                      </div>
                      {/*<div className="mt-4 h-px bg-gray-200 dark:bg-gray-800" />
                      <div className="mt-3 text-xs text-gray-500 md:text-sm dark:text-gray-400">
                        Source code for embedded control and supporting tools is
                        available here: https://github.com/… Email:
                        royce2engineering@gmail.com Phone: 224-xxx-xxxx
                      </div>*/}
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
