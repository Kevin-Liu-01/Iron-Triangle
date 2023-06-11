/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { api } from "~/utils/api";
import { ArrowRightIcon, ChatIcon } from "@heroicons/react/solid";
import Navbar from "./components/navbar";
import Chat from "./components/chatgpt";

const Artifacts: NextPage = () => {
  const [pattern, setPattern] = useState("cross");
  const [translate, setTranslate] = useState(false);
  const [font, setFont] = useState("font-general");
  const [imageState, setImageState] = useState(true);

  const patternBG = () => {
    if (pattern === "cross") {
      setPattern("dots");
    } else if (pattern === "dots") {
      setPattern("paper");
    } else {
      setPattern("cross");
    }
  };

  const patternStyles = () => {
    const defaultPattern =
      "z-5 absolute h-full w-full pattern-gray-500 dark:pattern-gray-400 pattern-bg-gray-300 dark:pattern-bg-gray-800 pattern-opacity-20 pattern-size-8 duration-150";
    if (pattern === "cross") {
      return defaultPattern + " pattern-cross";
    } else if (pattern === "dots") {
      return defaultPattern + " pattern-dots";
    } else {
      return defaultPattern + " pattern-paper";
    }
  };

  const menuHandler = () => {
    setTranslate(!translate);
  };

  const fontInitializer = () => {
    if (font === "font-general") {
      setFont("font-satoshi");
    } else if (font === "font-satoshi") {
      // setFont("font-azeret");
      setFont("font-clash");
    } else if (font === "font-azeret") {
      setFont("font-clash");
    } else {
      setFont("font-general");
    }
  };

  return (
    <main className="relative overflow-hidden  bg-white duration-150 dark:bg-black">
      <div className="font-hanken">
        <Navbar
          pattern={pattern}
          patternBG={patternBG}
          menuHandler={menuHandler}
          fontInitializer={fontInitializer}
        />
        <button
          className="absolute bottom-4 right-5 z-20 rounded-2xl bg-red-500 p-2 text-white shadow-lg  duration-150 hover:bg-red-600"
          onClick={() => menuHandler()}
        >
          <ChatIcon className="h-12 w-12" />
        </button>
        <Chat translate={translate} setTranslate={setTranslate} />
        <section className="scrollbar grid max-h-[calc(100vh-5rem-1.5px)] min-h-[calc(100vh-5rem-1.5px)] overflow-x-hidden overflow-y-scroll sm:grid-cols-2">
          <Link
            href="/eras/1940s"
            className="relative z-10 flex items-center justify-center overflow-hidden"
          >
            <Image
              src="/images/eras/1940s.jpg"
              alt="1940s"
              width={1000}
              height={1000}
              className="z-5 absolute h-full w-full object-cover opacity-30 duration-150 hover:scale-105 hover:opacity-40 dark:invert"
            />

            <div className="relative z-10 rounded-lg border-4 border-red-600 p-1 text-5xl font-extrabold text-red-600">
              1940s
            </div>
          </Link>
          <Link
            href="/eras/1950s"
            className="relative z-10 flex items-center justify-center overflow-hidden"
          >
            <Image
              src="/images/eras/1950s.jpg"
              alt="1950s"
              width={1000}
              height={1000}
              className="z-5 absolute h-full w-full object-cover opacity-30 duration-150 hover:scale-105 hover:opacity-40 dark:invert"
            />

            <div className="relative z-10 rounded-lg border-4 border-red-600 p-1 text-5xl font-extrabold text-red-600">
              1950s
            </div>
          </Link>{" "}
          <Link
            href="/eras/1960s"
            className="relative z-10 flex items-center justify-center overflow-hidden"
          >
            <Image
              src="/images/eras/1960s.jpg"
              alt="1940s"
              width={1000}
              height={1000}
              className="z-5 absolute h-full w-full object-cover opacity-30 duration-150 hover:scale-105 hover:opacity-40 dark:invert"
            />

            <div className="relative z-10 rounded-lg border-4 border-red-600 p-1 text-5xl font-extrabold text-red-600">
              1960s
            </div>
          </Link>{" "}
          <Link
            href="/eras/1970s"
            className="relative z-10 flex items-center justify-center overflow-hidden"
          >
            <Image
              src="/images/eras/1970s+.jpg"
              alt="1970s+"
              width={1000}
              height={1000}
              className="z-5 absolute h-full w-full object-cover opacity-30 duration-150 hover:scale-105 hover:opacity-40 dark:invert"
            />

            <div className="relative z-10 rounded-lg border-4 border-red-600 p-1 text-5xl font-extrabold text-red-600">
              1970s+
            </div>
          </Link>
          <div className="z-5 absolute col-span-2 flex h-full w-full items-center justify-center">
            <Link href="/" className="z-20 mx-auto my-auto">
              <Image
                src="/images/MIC.png"
                alt="MIC Logo"
                width={200}
                height={200}
                className=" mb-20 object-cover invert duration-150 hover:scale-105 dark:invert-0"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Artifacts;
