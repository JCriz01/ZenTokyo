"use client";

import { useEffect, useState } from "react";
import { getProductByHandle } from "@/app/Shopify";

const Page = ({ params }: { params: { productHandle: string } }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProductByHandle = async () => {
      try {
        const res = await getProductByHandle(params.productHandle);

        setProduct(res);
        console.log(product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductByHandle();
  }, []);

  return (
    <main className=" flex flex-grow">
      <p></p>
    </main>
  );
};

export default Page;
