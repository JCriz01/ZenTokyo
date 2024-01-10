import React from "react";
import TrendingCarousel from "@/components/TrendingCarousel";
import MainImages from "../components/MainImages";
import SubImages from "../components/SubImages";
import BottomImage from "../components/BottomImage";

export default function Home(): React.JSX.Element {
  return (
    <>
      <MainImages />
      <SubImages />
      <BottomImage />
      <TrendingCarousel />
    </>
  );
}
