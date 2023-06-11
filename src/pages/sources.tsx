/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { api } from "~/utils/api";
import { ArrowRightIcon, ChatIcon } from "@heroicons/react/solid";
import Navbar from "./components/navbar";
import Chat from "./components/chatgpt";

const companies = [
  { name: "Lockheed Martin", image: "/images/companies/lockheed.png" },
  { name: "Northrop Grumman", image: "/images/companies/northrop.png" },
  { name: "Boeing", image: "/images/companies/boeing.png" },
  { name: "General Dynamics", image: "/images/companies/gd.png" },
  { name: "BAE Systems", image: "/images/companies/bae.png" },
  { name: "Raytheon Technologies", image: "/images/companies/raytheon.png" },
  {
    name: "United Technologies Corporation",
    image: "/images/companies/utc.png",
  },
  { name: "Textron", image: "/images/companies/textron.png" },
  { name: "Leidos", image: "/images/companies/leidos.png" },
  { name: "L3Harris Technologies", image: "/images/companies/l3harris.png" },
  { name: "Honeywell", image: "/images/companies/honeywell.png" },
  { name: "General Atomics", image: "/images/companies/ga.png" },
  {
    name: "Science Applications International Corporation",
    image: "/images/companies/saic.png",
  },
  { name: "KBR", image: "/images/companies/kbr.png" },
  { name: "CACI International", image: "/images/companies/caci.png" },
  { name: "DynCorp", image: "/images/companies/dyncorp.png" },
];

const Home: NextPage = () => {
  const [pattern, setPattern] = useState("cross");
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
          <header className="flex min-h-[calc(100vh-5rem-1.5px)] justify-center overflow-hidden border-b border-b-gray-300 dark:border-b-gray-700 sm:max-h-[50rem]">
            <div className="mx-auto grid max-w-7xl grid-cols-2 px-8">
              <div className=" flex flex-col justify-center">
                <div className="text-7xl font-extrabold ">
                  War and{" "}
                  <span className="text-red-500	line-through">Peace</span>
                </div>
                <div className="mt-4 text-2xl font-light">
                  How did the influence of{" "}
                  <span className="text-red-500">
                    American business interests
                  </span>{" "}
                  shape <span className="text-red-500">policy decisions</span>?
                  Find out by exploring our collection of artifacts.
                </div>
                <Link href="/artifacts">
                  <button className="mt-8 flex items-center rounded-lg bg-black px-4 py-2 text-lg font-medium text-white shadow-lg duration-150 hover:bg-red-500 dark:bg-white dark:text-black dark:hover:bg-red-500 sm:text-xl">
                    See our Artifacts{" "}
                    <ArrowRightIcon className="ml-2 inline h-6 w-6" />
                  </button>
                </Link>
              </div>
              <Image
                src="/images/soldier.jpg"
                alt="soldiers"
                height={500}
                width={500}
                className="mx-auto my-auto w-3/5 duration-150 dark:invert"
              />
            </div>
          </header>
          <section className="relative mx-auto grid h-[calc(100vh-5rem-1.5px)] max-w-7xl gap-x-12 overflow-hidden border-b border-b-gray-300 px-8 duration-150 dark:border-b-gray-700 sm:max-h-[50rem] sm:grid-cols-2 ">
            <Image
              src="/images/iron-triangle.png"
              alt="flag"
              height={1000}
              width={1000}
              className="mx-auto my-auto w-full duration-150 dark:invert"
            />
            <div className="flex flex-col justify-center ">
              <div className="text-6xl font-extrabold ">
                The <span className="text-red-500">Iron Triangle</span>
              </div>
              <div className="mt-4 text-2xl font-light">
                The Iron Triangle is a term used to describe the relationship
                between Congress, Bureaucracy, and Interest Groups. This
                relationship is often characterized by the exchange of money for
                political favors.
              </div>
            </div>
          </section>
          <section className="relative mx-auto grid h-[calc(100vh-5rem-1.5px)] max-w-7xl gap-12 overflow-hidden border-b border-b-gray-300 px-8 duration-150 dark:border-b-gray-700 sm:max-h-[50rem] sm:grid-cols-2">
            <div className="flex flex-col justify-center ">
              <div className="text-6xl font-extrabold ">
                The{" "}
                <span className="text-red-500">
                  Military Industrial Complex
                </span>
              </div>
              <div className="mt-4 text-2xl font-light">
                The{" "}
                <span className="text-red-500">
                  Military Industrial Complex
                </span>{" "}
                is a{" "}
                <span className="text-red-500">
                  {
                    '"conjunction of an immense military establishment and a large arms industry"'
                  }
                </span>{" "}
                that has a{" "}
                <span className="text-red-500">
                  {'"total influence - economic, political, even spiritual"'}
                </span>{" "}
                on the United States.
              </div>
              <p className="mt-2 ml-2 italic">
                - Dwight D. Eisenhower, 34th President of the United States
              </p>
            </div>
            <Image
              src="/images/oil.jpg"
              alt="flag"
              height={1000}
              width={1000}
              className="mx-auto my-auto w-full duration-150 dark:invert"
            />
          </section>
          <section className="relative mx-auto grid h-[calc(100vh-5rem-1.5px)] max-w-7xl gap-12 overflow-hidden border-b border-b-gray-300 px-8 duration-150 dark:border-b-gray-700 sm:max-h-[50rem] sm:grid-cols-2">
            <Image
              src="/images/platoon.png"
              alt="flag"
              height={1000}
              width={1000}
              className="mx-auto my-auto w-full duration-150 dark:invert"
            />
            <div className="flex flex-col justify-center ">
              <div className="text-6xl font-extrabold ">
                A Legacy of <span className="text-red-500">Conflict</span>
              </div>
              <div className="mt-4 text-2xl font-light">
                From Vietnam to Iraq, the United States has been involved in{" "}
                <span className="text-red-500">conflicts</span> all over the
                world. <span className="text-red-500">For each one, </span> the{" "}
                <span className="text-red-500">
                  military industrial complex
                </span>{" "}
                has played a role in shaping the outcome.
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <Link
                  href="/eras/1940s"
                  className="rounded-lg border-2 border-red-500 py-1 px-2 text-center text-lg duration-150 hover:bg-red-500"
                >
                  1940s
                </Link>
                <Link
                  href="/eras/1950s"
                  className="rounded-lg border-2 border-red-500 py-1 px-2 text-center text-lg duration-150 hover:bg-red-500"
                >
                  1950s
                </Link>
                <Link
                  href="/eras/1960s"
                  className="rounded-lg border-2 border-red-500 py-1 px-2 text-center text-lg duration-150 hover:bg-red-500"
                >
                  1960s
                </Link>
                <Link
                  href="/eras/1970s+"
                  className="rounded-lg border-2 border-red-500 py-1 px-2 text-center text-lg duration-150 hover:bg-red-500"
                >
                  1970s+
                </Link>
              </div>
            </div>
          </section>
          <section className="relative mx-auto h-[calc(100vh-5rem-1.5px)] max-w-7xl gap-8 overflow-hidden px-8 pt-8 duration-150 sm:max-h-[50rem] ">
            <p className=" text-center text-6xl font-extrabold uppercase">
              THE BIGGEST PLAYERS
            </p>

            {/*company images are all different sizes, must be sized to fit with each other perfectly */}

            <div className="grid grid-cols-4 gap-8">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    height={200}
                    width={200}
                    className="mx-auto my-auto w-full duration-150 dark:invert"
                  />
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Home;
