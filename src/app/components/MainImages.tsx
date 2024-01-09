"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainImages = () => {
  const router = useRouter();

  return (
    <div className=" pt-10 pb-10 w-full 2xl:w-[1400px] self-center gap-4 flex flex-col sm:flex-row items-center ">
      <div
        onClick={() => router.push("/figures")}
        className=" flex flex-col w-full "
      >
        <Image
          className="flex w-auto"
          src={"/figures2.jpg"}
          width={600}
          height={600}
          alt="Figures"
        />
        <p className="text-center text-xl font-bold text-white bg-black p-1">
          Figures
        </p>
      </div>
      <div onClick={() => router.push("new")} className=" flex flex-col w-full">
        <Image
          className="flex w-auto"
          src={"/shopNewReleases.jpeg"}
          width={600}
          height={600}
          alt="Figures"
        />
        <p className="text-center text-xl font-bold text-white bg-black p-1">
          New Releases
        </p>
      </div>
      <div
        onClick={() => router.push("apparel")}
        className="w-full flex flex-col"
      >
        <Image
          className="flex w-auto"
          src={"/merch.jpeg"}
          width={600}
          height={600}
          alt="Figures"
        />
        <p className="text-center text-xl font-bold text-white bg-black p-1">
          Apparel
        </p>
      </div>
    </div>
  );
};

export default MainImages;
