import React from "react";
import TrendingCarousel from "@/app/components/TrendingCarousel";
import MainImages from "./components/MainImages";
import SubImages from "./components/SubImages";
import BottomImage from "./components/BottomImage";

export default function Home(): React.JSX.Element {
  return (
    <main className="  flex-grow px-4 lg:px-14 xl:px-24 h-full  w-full flex flex-col justify-center p-2 ">
      <MainImages />
      <SubImages />
      <BottomImage />
      <TrendingCarousel />
    </main>
  );
}
