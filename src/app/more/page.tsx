import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionFive from "@/components/About/AboutSectionFive";
import Breadcrumb from "@/components/Common/Breadcrumb";

import Brands from "@/components/More";
import ScrollUp from "@/components/Common/ScrollUp";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royce | Engineering Build Projects | More",
  description: "Royce | Engineering Build Projects | More",
  // other metadata
};

const MorePage = () => {
  return (
    <>
      <ScrollUp />
      <Brands />
    </>
  );
};

export default MorePage;
