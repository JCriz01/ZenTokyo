"use client";

import { useEffect, useState } from "react";
import { getProductByHandle } from "@/app/Shopify";
import { productNode } from "@/types/TrendingCollection";
import image from "@/types/TrendingCollection";
import { notFound } from "next/navigation";
import ItemCarousel from "@/components/ItemCarousel";

const ProductDisplay = () => {
  return <div></div>;
};

const Page = ({ params }: { params: { product: string } }) => {
  const [product, setProduct] = useState(undefined);

  console.log(product);

  useEffect(() => {
    const fetchProductByHandle = async () => {
      try {
        const res = await getProductByHandle(params.product);

        if (res) setProduct(res.productByHandle);
        else setProduct(null);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductByHandle();
  }, []);

  if (product === null) {
    notFound();
  }

  let imageArray: image[] = product?.images.edges;
  console.log(imageArray);

  if (product === undefined) return <p>Loading...</p>;

  return (
    <main className=" flex flex-col flex-grow w-full">
      {product === null && <p>Product not found</p>}
      {imageArray && <ItemCarousel productItem={imageArray} />}
      <div></div>
    </main>
  );
};

export default Page;
