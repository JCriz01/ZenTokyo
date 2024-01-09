"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SubImages = () => {
  const router = useRouter();

  return (
    <div className=" pb-10 w-full 2xl:w-[1400px] self-center gap-4 flex flex-col sm:flex-row items-center ">
      <div
        onClick={() => router.push("/manga")}
        className=" flex flex-col w-full "
      >
        <Image
          className="flex w-auto"
          src={"/manga.jpeg"}
          width={593}
          height={593}
          alt="manga"
        />
        <p className="text-center text-xl font-bold text-white bg-black p-1">
          Shop Manga
        </p>
      </div>
      <div
        onClick={() => router.push("games")}
        className=" flex flex-col w-full"
      >
        <Image
          className="flex w-auto"
          src={"/games.jpg"}
          width={534}
          height={534}
          alt="games"
        />
        <p className="text-center text-xl font-bold text-white bg-black p-1">
          Shop Games
        </p>
      </div>
    </div>
  );
};

export default SubImages;
