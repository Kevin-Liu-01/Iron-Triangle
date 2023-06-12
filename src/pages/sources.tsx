/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
// import { api } from "~/utils/api";
import { ChatIcon } from "@heroicons/react/solid";
import Navbar from "./components/navbar";
import Chat from "./components/chatgpt";

const Home: NextPage = () => {
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
        <section className="scrollbar max-h-[calc(100vh-5rem-1.5px)] min-h-[calc(100vh-5rem-1.5px)] overflow-x-hidden overflow-y-scroll">
          <section className="relative mx-auto mt-8  h-[calc(100vh-5rem-1.5px)] max-w-7xl gap-12 overflow-hidden border-b border-b-gray-300 px-8 duration-150 dark:border-b-gray-700 sm:max-h-[50rem]">
            <div className="text-6xl font-extrabold ">Sources</div>
            <div className="mt-4 text-2xl font-light">Sources</div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Home;
