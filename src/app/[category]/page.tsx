"use client";

import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getProductsByType } from "../Shopify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productNode } from "@/types/TrendingCollection";
import { Suspense } from "react";
import { LoadingProducts } from "@/components/LoadingSkeleton";
import Link from "next/link";

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
    <div className=" p-2 flex flex-col justify-between sm:flex-row">
      <div className="flex-col flex sm:flex-row p-2 w-1/3 justify-between">
        <button className="flex" onClick={() => router.push("/")}>
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

const Products = ({
  productsArray,
  category,
}: {
  productsArray: productNode[];
  category: string;
}) => {
  const router = useRouter();
  console.log(productsArray);

  const handleCardClick = (product: string) => {
    router.push(`/${category}/${product}`);
  };

  //if (!productsArray) return <LoadingProducts />;
  return (
    <div className=" max-w-6xl grid grid-cols-2 md:grid-cols-3 justify-items-center self-center flex-wrap ">
      {productsArray.map((product, index: number) => {
        return (
          <div
            key={index}
            className=" p-3  flex flex-col items-center "
            onClick={() => handleCardClick(product.node.handle)}
          >
            <Image
              src={product.node.images.edges[0].node.originalSrc}
              alt="product"
              width={200}
              height={300}
              className="flex"
            />
            <div className=" p-2 flex flex-col ">
              <p>{product.node.title}</p>
              <p className="mt-12 text-center ">
                ${product.node.variants.edges[0].node.priceV2.amount}
              </p>
            </div>
            <button className=" p-2 bg-rose-400 rounded-lg hover:bg-black hover:text-white">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

const Page = ({ params }: { params: { category: string } }) => {
  const [products, setProducts] = useState<productNode[]>();
  const [hideFilter, setHideFilter] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  //console.log(products);

  if (!isValidCategory(params)) {
    notFound();
  }

  useEffect(() => {
    console.log("Page mounted");

    const fetchProducts = async () => {
      try {
        const productRes = await getProductsByType(params.category);
        console.log("Products from fetch: ", products);

        setProducts(productRes.products.edges);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="self-center flex items-center justify-center">
        <p>Unable to fetch items.</p>
      </div>
    );
  }

  return (
    <main className=" flex-grow  px-4 lg:px-14 xl:px-24 h-full  w-full flex flex-col justify-start p-2 ">
      <PageHeader
        title={params.category}
        state={hideFilter}
        setState={setHideFilter}
      />
      {products && products.length > 0 ? (
        <Products category={params.category} productsArray={products} />
      ) : (
        <LoadingProducts /> || <p>No products found</p>
      )}
    </main>
  );
};

export default Page;
