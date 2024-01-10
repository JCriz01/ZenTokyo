"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const MobileFooterBtn = ({
  svgSource,
}: {
  svgSource: string;
}): React.JSX.Element => {
  return (
    <button className=" bg-on-tertiary p-3 rounded-full active:translate-y-1 h-3/4 ">
      <Image width={24} height={24} src={svgSource} alt="" />
    </button>
  );
};

export default function MobileFooter(): React.JSX.Element {
  const [centerDistance, setCenterDistance] = useState(0);

  useEffect(() => {
    console.log("Mobile footer mounted");
    const elementSize = 191;
    console.log(window.innerWidth);

    const handleResize = () => {
      if (window.innerWidth >= 640) return;

      const currDeviceWidth = window.innerWidth;
      console.log("currDeviceWidth: ", currDeviceWidth);
      setCenterDistance((currDeviceWidth - elementSize) / 2);

      const footerElem = document.getElementById("mobile-footer");

      if (footerElem) footerElem.style.left = `${centerDistance}px`;
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div
      id="mobile-footer"
      className=" sm:hidden fixed bottom-[4%] left-[32%] right-0 w-[191px] h-[80px] rounded-3xl bg-tertiary flex items-center justify-evenly "
    >
      <MobileFooterBtn svgSource="/Home.svg" />
      <MobileFooterBtn svgSource="/ShoppingCart.svg" />
    </div>
  );
}
