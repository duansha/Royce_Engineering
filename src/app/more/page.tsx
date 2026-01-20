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
