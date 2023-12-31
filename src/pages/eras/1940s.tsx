/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import { ChatIcon, ArrowDownIcon } from "@heroicons/react/solid";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Chat from "../components/chatgpt";
import React, { useState } from "react";

const Forties: NextPage = () => {
  const [translate, setTranslate] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const menuHandler = () => {
    setTranslate(!translate);
  };

  return (
    <main className="relative overflow-hidden  bg-white duration-150 dark:bg-black">
      <div className="font-hanken">
        <Navbar />
        <button
          className="absolute bottom-4 right-5 z-40 rounded-2xl bg-red-500 p-2 text-white shadow-lg  duration-150 hover:bg-red-600"
          onClick={() => menuHandler()}
        >
          <ChatIcon className="h-12 w-12" />
        </button>
        <Chat translate={translate} setTranslate={setTranslate} />
        <section className="scrollbar max-h-[calc(100vh-5rem-1.5px)] min-h-[calc(100vh-5rem-1.5px)] justify-center overflow-x-hidden overflow-y-scroll">
          <header
            className={
              showHeader
                ? "relative z-30 h-[calc(100vh-5rem-1.5px)] w-full translate-y-0 overflow-hidden bg-white duration-150 ease-in-out dark:bg-black"
                : "relative z-30 h-0 w-full translate-y-[-100%] overflow-hidden bg-white duration-150 ease-in-out dark:bg-black"
            }
          >
            <Image
              src="/images/headers/1940s.gif"
              alt="1940s banner"
              width={1000}
              height={1000}
              className="absolute h-full object-cover opacity-20 sm:w-full sm:object-center"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 ">
              <p className="text-lg font-semibold uppercase text-red-500">
                The 1940s
              </p>
              <span className=" text-center text-5xl font-extrabold text-red-500 sm:text-6xl">
                The Arsenal of Democracy
              </span>
              <p className="mt-1 text-lg font-semibold text-red-600">
                Curated by Liam Hoffman
              </p>
              <p className="col-span-2 mt-6 max-w-5xl text-center text-sm sm:text-base">
                Welcome to the 1940s. You have joined us as we are raring to go
                to war against the Nazis in Europe and the Japanese in Asia. Our
                greatest allies today are our defense contractors, producing our
                weapons and supplies vital to the war effort, the true patriots
                they are. Thousands of men and women across the country work in
                operations that enable our men to win battles overseas, and in
                the halls of Congress, defense contractors are some of the
                biggest proponents of our noble war. The term
                “military-industrial complex” does not exist yet. Yes, maybe
                these contractors are pressuring our lawmakers to support their
                war-hawkish interests. Maybe our budgets are being toyed with.
                Maybe we are extending our war spending far beyond the end of
                the war as well. But it’s all for the good of our country,
                right?
              </p>{" "}
              <button
                onClick={() => setShowHeader(!showHeader)}
                className="absolute bottom-4 z-50 mx-auto flex animate-bounce items-center justify-center rounded-full bg-red-500 p-2"
              >
                <ArrowDownIcon
                  className={
                    showHeader
                      ? "h-6 w-6 text-white duration-150"
                      : "h-6 w-6 rotate-180 text-white duration-150"
                  }
                />
              </button>
            </div>
          </header>
          <section className=" relative flex flex-col items-center duration-150 ">
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-2">
                <Image
                  src="/images/artifacts/truman-committee.jpg"
                  alt="truman-committee"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150"
                />
                <div className="mt-4 flex flex-col justify-center sm:mt-0">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 1:{" "}
                    <span className="text-red-500">
                      The Truman Committee (1941)
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    During World War II, the United States Senate Special
                    Committee to Investigate the National Defense Program, or
                    the Truman Committee, was established in 1941. Led by
                    Senator Harry S. Truman, the committee aimed to scrutinize
                    the efficiency, effectiveness, and expenditures of the
                    national defense program, much like the Nye Committee did 7
                    years ago.
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="mx-auto max-w-7xl py-4 px-4 sm:col-span-2 ">
              {
                "Drawing inspiration from the Nye Committee of the 1930s, which examined the role of the munitions industry in the United States' entry into World War I, the Truman Committee focused on investigating the military-industrial complex (MIC) and its impact on the war effort. Its main objective was to ensure that defense contracts were allocated efficiently and free from wasteful practices, fraud, and excessive profiteering. Through a series of hearings and investigations, the Truman Committee thoroughly examined various aspects of defense production, procurement, and logistics. It delved into the operations of defense contractors, government agencies, and military branches to uncover inefficiencies and corruption within the war machinery. The committee's investigations exposed alarming instances of overpricing, substandard production, and fraudulent practices by defense contractors. These findings shed light on the urgent need for transparency, accountability, and cost-effectiveness in defense contracting. As a result of the committee's efforts, significant reforms were implemented in defense procurement and production. The Truman Committee recommended changes such as introducing competitive bidding processes, implementing cost controls, and establishing standardized pricing to enhance efficiency and eliminate wasteful practices. These reforms resulted in substantial cost savings, streamlined production, and improved oversight of defense spending. Furthermore, the Truman Committee's investigations brought attention to the complex relationship between business interests and the government in times of war. The committee's findings highlighted the potential for undue influence, conflicts of interest, and the necessity of robust oversight mechanisms to prevent abuse and corruption."
              }
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-2">
                <Image
                  src="/images/artifacts/b17.jpg"
                  alt="b17_factory"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="flex flex-col justify-center ">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 2:{" "}
                    <span className="text-red-500">
                      Boeing Company Plant 2 (1943)
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    During World War 2, an immense 297,000 aircraft were
                    produced in the United States. Yet, less then 26
                    manufacturers provided these aircraft. Across the defense
                    industry, a handful of large companies, like Boeing, began
                    to dominate the market.
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4 px-4 ">
              {`During World War II, a disproportionate share of defense spending and research and development contracts went to large manufacturing firms. Around two-thirds of the total value of awards were claimed by the top 100 prime contractors. The concentration of military research and development contracts was even more pronounced, with the top 68 corporations receiving two-thirds of the R&D awards, and the top 10 securing nearly two-fifths of the total. The government played a major role as the primary investor, contributing over $17 billion, which accounted for about two-thirds of all investment. In addition to funding ammunition plants, the government undertook ambitious construction projects, including shipyards, steel and aluminum mills, and chemical plants. The aircraft industry experienced remarkable growth, propelled by government investment and procurement, ultimately becoming the nation's largest sector and producing a staggering 297,000 aircraft by the end of the war. This level of government involvement can be described as "war socialism." However, one source describes it as “war fascism.” Rather than directly operating these government-financed plants, the government entrusted a select group of contractors to manage them. Surprisingly, just 26 firms were given the responsibility of half the value of all governmentally financed industrial facilities leased to private contractors. Among them, Boeing, Vega, and Douglas were the only three companies involved in building the third most-produced bomber of all time, the B-17. This concentration of power among a small group of contractors underscored the entanglement of business interests with the government during the war. It highlighted the influence wielded by these contractors in shaping the course of war production and decision-making. The allocation of significant resources and control over crucial industrial facilities to a limited number of firms revealed the intricate web of relationships between the military-industrial complex and the government.`}
            </div>
            <Footer />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Forties;
