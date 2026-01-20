//"use client";

import "../styles/index.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import { DynaPuff } from "next/font/google";

export const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400"], // Optional: choose what you need
});

const inter = Inter({ subsets: ["latin"] });
export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className} ${dynaPuff.className}`}
      >
        <Providers>
          <Header />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
