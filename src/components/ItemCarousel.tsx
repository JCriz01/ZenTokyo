"use client";

import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { image } from "@/types/TrendingCollection";
import "@splidejs/react-splide/css/sea-green";
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
          <Image
            src={productItem[index].node.originalSrc}
            width={200}
            height={300}
            alt="product"
          />
        </SplideSlide>
      );
    });
  };

  const mainOptions: Options = {
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "10rem",
    wheel: true,
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: 10,
    pagination: false,
    fixedWidth: 100,
    fixedHeight: 100,

    cover: true,
    focus: "center",
    isNavigation: true,
    direction: "ttb",
  };

  console.log(mainOptions);

  return (
    <div id="wrapper" className="flex justify-evenly">
      <Splide options={{ mainOptions }} ref={mainRef}>
        {renderSlides()}
      </Splide>
      <Splide options={{ thumbsOptions }} ref={thumbnailRef}>
        {renderSlides()}
      </Splide>
    </div>
  );
};

export default ItemCarousel;
