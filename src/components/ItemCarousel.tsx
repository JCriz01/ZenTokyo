"use client";

import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { image } from "@/types/TrendingCollection";
import "@splidejs/react-splide/css";
import Image from "next/image";

const ItemCarousel = ({ productItem }: { productItem: image[] }) => {
  const mainRef = useRef<Splide | null>(null);
  const thumbnailRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (
      mainRef.current &&
      thumbnailRef.current &&
      thumbnailRef.current.splide
    ) {
      mainRef.current.sync(thumbnailRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return productItem.map((slide, index) => {
      return (
        <SplideSlide key={index}>
          <img
            src={productItem[index].node.originalSrc}
            width={200}
            height={300}
            alt="product"
          ></img>
        </SplideSlide>
      );
    });
  };

  const mainOptions: Options = {
    mediaQuery: "min",
    breakpoints: {
      1250: {
        width: 465,
      },
    },
    width: 250,
    rewind: true,
  };

  const thumbsOptions: Options = {
    pagination: false,
    height: 320,
    direction: "ttb",
    isNavigation: true,
    focus: "center",
    fixedHeight: 160,
    gap: 5,
  };

  console.log(mainOptions);

  return (
    <div id="wrapper" className="flex justify-evenly gap-4 items-start ">
      <Splide
        options={thumbsOptions}
        ref={thumbnailRef}
        className=" hidden lg:block "
      >
        {renderSlides()}
      </Splide>
      <Splide options={mainOptions} ref={mainRef}>
        {renderSlides()}
      </Splide>
    </div>
  );
};

export default ItemCarousel;
