"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { node } from "../Shopify";
import trimTitle from "@/utils/trimTitle";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/sea-green";

const ProductSlider = ({ elementArray }: { elementArray: node[] }) => {
  if (elementArray) {
    elementArray = elementArray.map((product) => {
      if (product.node.title)
        product.node.title = trimTitle(product.node.title);
      return product;
    });
  }

  console.log("Element Array: ", elementArray);

  return (
    <Splide
      aria-label={"Trending Products"}
      options={{
        rewind: true,
        mediaQuery: true,
        perPage: 6,
        breakpoints: {
          425: {
            perPage: 1,
          },
          640: {
            perPage: 2,
          },
          768: {
            perPage: 3,
          },
          1040: {
            perPage: 4,
          },
        },
      }}
      className={" w-full md:w-4/5 2xl:w-3/5 "}
    >
      {elementArray.map((product, index) => {
        return (
          <SplideSlide
            key={index}
            className={"flex items-center justify-center "}
          >
            <div
              key={index}
              className={
                "self-center flex flex-col items-center justify-center"
              }
            >
              <Image
                src={product.node.images.edges[0].node.originalSrc}
                width={100}
                height={150}
                alt={"product"}
              />
              <p className={"text-center"}>{product.node.title}</p>
              <p>${product.node.variants.edges[0].node.price.amount}</p>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
export default ProductSlider;
