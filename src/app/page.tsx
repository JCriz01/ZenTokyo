"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RootCard from "@/app/components/RootCard";

export default function Home(): React.JSX.Element {
  return (
    <main className=" px-4 lg:px-14 h-full  w-full flex p-2 ">
      <RootCard
        img={"/csm_vol1_cover 2.png"}
        title={"Chainsaw Man Vol 1"}
        price={11}
      />
      <RootCard
        img={"/csm_vol1_cover 2.png"}
        title={"Chainsaw Man Vol 1"}
        price={11}
      />
      <RootCard
        img={"/csm_vol1_cover 2.png"}
        title={"Chainsaw Man Vol 1"}
        price={11}
      />
    </main>
  );
}
