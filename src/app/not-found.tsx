import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" self-center w-full p-8 min-h-96 flex flex-col justify-center items-center ">
      <h1 className="font-bold text-xl">404 - Page Not Found</h1>
      <button className="p-4 bg-amber-500 rounded-xl mt-4 hover:bg-amber-600 active:bg-rose-500 active:translate-y-2">
        <Link href="/">Go back home</Link>
      </button>
    </div>
  );
}
