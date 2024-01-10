"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BottomImage = () => {
  const router = useRouter();

  return (
    <div className="pb-10 w-full 2xl:w-[1400px] self-center gap-4 flex flex-col sm:flex-row items-center justify-center">
      <div
        onClick={() => router.push("anime")}
        className=" flex flex-col w-1/2"
      >
        <Image
          className="flex w-auto"
          src={"/anime.png"}
          width={534}
          height={534}
          alt="games"
        />
        <p className="text-center text-xl font-bold text-white bg-black p-1">
          Shop Anime
        </p>
      </div>
    </div>
  );
};

export default BottomImage;
