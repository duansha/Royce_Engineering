import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royce | Engineering Build Projects | Selected Project",
  description: "Royce | Engineering Build Projects | Selected Projects",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Brands />
    </>
  );
}
