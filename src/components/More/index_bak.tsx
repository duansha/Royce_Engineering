"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
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

function PhotoWithCaption({ photo, imageProps }) {
  return (
    <div style={{ width: imageProps.style.width }}>
      <img
        {...imageProps}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <div style={{ marginTop: 6, fontSize: 14, color: "#555" }}>
        {photo.alt}
      </div>
    </div>
  );
}

const Brands = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="pt-16">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="dark:bg-gray-dark relative flex min-h-screen items-center justify-center overflow-hidden bg-purple-100 bg-top bg-no-repeat text-white dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
            <div className="max-w-8xl mx-auto px-4">
              <div className="grid gap-12 lg:grid-cols-1">
                <div className="mt-5 mb-5 ml-12">
                  mmdmmd
                  <RowsPhotoAlbum
                    photos={photos}
                    targetRowHeight={350}
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
                </div>
              </div>
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="ml-8">
                  <h2 className="mb-8 ml-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Introduction
                  </h2>
                  <p className="mb-8 ml-8 text-gray-900 dark:text-gray-100">
                    Merriman Childcare and Learning Center (MCLC), founded in
                    Bellevue, Washington, provides a loving, respectful, and
                    safe environment where children can explore, learn, and
                    grow. Our goal is to help every child thrive — physically,
                    mentally, socially, and in language.
                  </p>

                  <p className="mb-8 ml-8 text-gray-900 dark:text-gray-100">
                    We’re located at{" "}
                    <span className="font-bold">
                      1934 108th Ave NE, Bellevue, WA 98004
                    </span>
                    —easy to reach for families across Bellevue. Our{" "}
                    <span className="font-bold">big parking lot </span>
                    makes drop-off and pick-up simple, quick, and stress-free.
                  </p>

                  <p className="mb-8 ml-8 text-gray-900 dark:text-gray-100">
                    <Image
                      src="/images/merriman/pic2.png"
                      width="350"
                      height="350"
                      alt=""
                    />
                  </p>
                </div>
                <div>
                  <p className="mb-8 ml-8 text-gray-900 dark:text-gray-100">
                    Love, Learn, Thrive <br />
                    Growing with Love, Thriving with Joy
                    <br />
                    Where Children Explore, Learn, and Thrive
                    <Image
                      src="/images/merriman/pic1.png"
                      width="550"
                      height="550"
                      alt=""
                    />
                  </p>

                  <div className="space-y-6"></div>
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
