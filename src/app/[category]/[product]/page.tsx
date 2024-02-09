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
  const [error, setError] = useState(false);

  console.log(product);

  useEffect(() => {
    const fetchProductByHandle = async () => {
      try {
        const res = await getProductByHandle(params.product);

        if (res) setProduct(res.productByHandle);
        else setProduct(null);

        setError(false);
      } catch (err) {
        setError(true);
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

  if (error) return <p>Unable to fetch product</p>;

  return (
    <main className="flex flex-col md:flex-row flex-grow w-full">
      {product === null && <p>Product not found</p>}
      {imageArray && <ItemCarousel productItem={imageArray} />}
      <section className=" flex flex-col">
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.variants.edges[0].node.priceV2.amount}</p>
          <p>Availability: </p>
        </div>

        <div>
          <button>Add to Cart</button>
          <button>Add to Wishlist</button>
        </div>

        <div className="flex flex-col">
          <div>
            <p>Description</p>
            <button>placeholder</button>
          </div>
          <div>{product.description}</div>
        </div>
      </section>
    </main>
  );
};

export default Page;
