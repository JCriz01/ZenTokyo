"use client";

import { useState } from "react";
import { getTrendingCollection } from "@/app/Shopify";
import { useEffect } from "react";
import { TrendingCollection } from "@/app/Shopify";
import ProductSlider from "./productCarousel";

const TrendingCarousel = () => {
  let [trendingItems, setTrendingItems] = useState<TrendingCollection>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchTrendingCollection = async () => {
      const trendingCollection = await getTrendingCollection();
      console.log("Trending Collection: ", trendingCollection);

      setTrendingItems(trendingCollection);
      setLoading(false);
    };
    fetchTrendingCollection();
  }, []);

  const trendingItemsArray = trendingItems?.collectionByHandle.products.edges;

  console.log("Trending Items Array: ", trendingItemsArray);
  return (
    <div className="flex flex-col items-center ">
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <ProductSlider elementArray={trendingItemsArray || []} />
      )}
    </div>
  );
};

export default TrendingCarousel;
