import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  LoginIcon,
  LogoutIcon,
  UserCircleIcon,
  HomeIcon,
  ClockIcon,
  ClipboardListIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const { data: session } = useSession();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex w-full items-center justify-center rounded-lg border-2 border-gray-700 p-1 text-gray-300 duration-150 hover:border-red-500 hover:text-red-500"
          role="button"
          onClick={() => setTheme("light")}
        >
          {/* <div className="rings-halo absolute z-50 h-full w-full bg-contain bg-center bg-no-repeat opacity-70"></div> */}
          <MoonIcon className="h-6 w-6" />
        </button>
      );
    } else {
      return (
        <button
          className="flex w-full items-center justify-center rounded-lg border-2 p-1 text-black duration-150 hover:border-red-500 hover:text-red-500"
          role="button"
          onClick={() => setTheme("dark")}
        >
          {/* <div className="rings-halo absolute z-50 h-full w-full bg-contain bg-center bg-no-repeat opacity-70"></div> */}
          <SunIcon className="h-6 w-6" />
        </button>
      );
    }
  };

  return (
    <nav className="relative z-50 border-b-[1.5px] border-gray-300 bg-white text-gray-900 shadow-lg duration-75 dark:border-gray-700 dark:bg-black dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-row justify-center">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/images/peace.svg"
            alt="logo"
            className=" svgfill my-5 mx-4 inline h-10 w-10 fill-red-500 duration-150 hover:animate-spin"
            height={400}
            width={400}
          />
          <h1 className="relative hidden select-none text-2xl font-extrabold tracking-tight duration-75 dark:text-white sm:inline lg:text-2xl ">
            Iron Triangle
          </h1>
        </Link>

        <div className="flex  flex-row items-center text-sm sm:mx-auto">
          <Link
            href="/"
            className="relative mx-4 hidden select-none items-center rounded-lg py-1 px-2 text-lg font-semibold tracking-tight duration-150 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-[#212020] sm:flex "
          >
            <HomeIcon className="mr-2 h-4 w-4" /> Home
          </Link>
          <Link
            href="/artifacts"
            className="relative flex select-none items-center rounded-lg py-1 px-2 text-lg font-semibold tracking-tight duration-150 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-[#212020] sm:mx-4 "
          >
            <ClockIcon className="mr-2 h-4 w-4" /> Eras
          </Link>
          <Link
            href="/sources"
            className="relative flex select-none items-center rounded-lg py-1 px-2 text-lg font-semibold tracking-tight duration-150 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-[#212020] sm:mx-4 "
          >
            <ClipboardListIcon className="mr-2 h-4 w-4" /> Sources
          </Link>
        </div>
        <div className="ml-auto flex ">
          <div className="hidden h-full items-center py-2 px-2 duration-75 dark:text-white lg:flex">
            <span className="text-lg  ">{session?.user?.name || "Guest"}</span>
            <div className="relative my-auto ml-2 inline h-10 w-10 rounded-full border-2 border-gray-300 duration-75 dark:border-gray-700">
              {session?.user.image ? (
                <Image
                  src={session?.user.image}
                  alt="Profile Picture"
                  className="relative h-full w-full rounded-full"
                  height={500}
                  width={500}
                />
              ) : (
                <UserCircleIcon className="relative h-full w-full rounded-full duration-75 dark:text-white" />
              )}
              <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full border-[1.5px] border-gray-900 bg-green-500 duration-75 dark:border-white"></div>
            </div>
          </div>

          <button
            className="my-auto ml-2 h-min rounded-lg border-2 p-1 font-semibold text-black duration-150 hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-red-500 dark:hover:text-red-500"
            onClick={session ? () => void signOut() : () => void signIn()}
          >
            {session ? (
              <LogoutIcon className="h-6 w-6" />
            ) : (
              <LoginIcon className="h-6 w-6" />
            )}
          </button>

          <div className="relative flex h-full items-center justify-center px-3 ">
            {renderThemeChanger()}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
