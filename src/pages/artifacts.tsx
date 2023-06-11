/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { api } from "~/utils/api";
import { ChatIcon } from "@heroicons/react/solid";
import Navbar from "./components/navbar";
import Chat from "./components/chatgpt";

const Artifacts: NextPage = () => {
  const [translate, setTranslate] = useState(false);

  const menuHandler = () => {
    setTranslate(!translate);
  };

  return (
    <main className="relative overflow-hidden  bg-white duration-150 dark:bg-black">
      <div className="font-hanken">
        <Navbar />
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
