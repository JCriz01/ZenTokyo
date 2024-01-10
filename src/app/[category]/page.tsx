"use client";

import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getProductsByType } from "../Shopify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productNode } from "@/types/TrendingCollection";
import { Suspense } from "react";
import { LoadingProducts } from "@/components/LoadingSkeleton";

const isValidCategory = (params) => {
  const validCategory = [
    "manga",
    "anime",
    "games",
    "apparel",
    "figures",
    "new",
  ];

  return validCategory.includes(params.category);
};

const PageHeader = ({
  title,
  state,
  setState,
}: {
  title: string;
  state: any;
  setState: any;
}) => {
  // Modify the PageHeader component to accept an object with a title property
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div className="flex-col flex sm:flex-row p-2 w-1/3 justify-between">
        <button className="flex" onClick={() => router.back()}>
          <Image
            src={"/backArrow.svg"}
            height={24}
            width={24}
            alt="previous page"
          />
          <p>Back</p>
        </button>

        <p className=" font-bold text-lg ">{title}</p>
      </div>
      <div className="flex ">
        <button
          className="flex border-2 border-black rounded-lg p-2"
          onClick={() => setState(!state)}
        >
          <Image src={"/filter.svg"} height={24} width={24} alt="filter" />
          <p>{state ? "Show" : "Hide"} Filter</p>
        </button>
      </div>
    </div>
  );
};

const Products = ({ productsArray }: { productsArray: productNode[] }) => {
  console.log(productsArray);

  //if (!productsArray) return <LoadingProducts />;
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {productsArray.map((product, index: number) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={product.node.images.edges[0].node.originalSrc}
              alt="product"
              width={200}
              height={300}
            />
          </div>
        );
      })}
    </div>
  );
};

const Page = ({ params }: { params: { category: string } }) => {
  const [products, setProducts] = useState<productNode[]>();
  const [hideFilter, setHideFilter] = useState(false);
  const router = useRouter();

  console.log(products);

  if (!isValidCategory(params)) {
    notFound();
  }

  useEffect(() => {
    console.log("Page mounted");

    const fetchProducts = async () => {
      try {
        const productRes = await getProductsByType(params.category);
        console.log("Products: ", products);

        setProducts(productRes.products.edges);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <PageHeader
        title={params.category}
        state={hideFilter}
        setState={setHideFilter}
      />
      {products && products.length > 0 ? (
        <Products productsArray={products} />
      ) : (
        <LoadingProducts />
      )}
    </>
  );
};

export default Page;
