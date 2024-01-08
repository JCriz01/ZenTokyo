import React from "react";
import Image from "next/image";
import RootCard from "@/app/components/RootCard";
import TrendingCarousel from "@/app/components/TrendingCarousel";
import { getTrendingCollection } from "@/app/Shopify";
import trendingCarousel from "@/app/components/TrendingCarousel";

export default function Home(): React.JSX.Element {
  return (
    <main className=" px-4 lg:px-14 h-full  w-full flex flex-col p-2 ">
      <TrendingCarousel />
    </main>
  );
}
