import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t-[1.5px] border-gray-300 bg-white text-gray-900 shadow-lg duration-75 dark:border-gray-700 dark:bg-black dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl items-center py-8">
        <Image
          src="/images/MIC.png"
          alt="logo"
          width={100}
          height={100}
          className="mr-4"
        />

        <div>
          <h1 className="text-2xl font-bold">U.S. History II Final</h1>
          <p>Made by Kevin Liu, Sharabh Ojha, Ranvith Adulla, Liam Hoffman</p>
        </div>
        <Link
          href="/"
          className="ml-auto rounded-lg border-2 border-gray-300 p-2 duration-150 hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:hover:border-red-500"
        >
          <HomeIcon className=" h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;