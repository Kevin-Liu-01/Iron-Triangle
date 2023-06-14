/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import { ChatIcon, ArrowDownIcon } from "@heroicons/react/solid";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Chat from "../components/chatgpt";
import React, { useState } from "react";

const Fifties: NextPage = () => {
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
              src="/images/headers/1950s.gif"
              alt="1950s banner"
              width={1000}
              height={1000}
              className="absolute h-full object-cover opacity-20 sm:w-full sm:object-center"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 ">
              <p className="text-lg font-semibold uppercase text-red-500">
                The 1950s
              </p>
              <span className=" text-center text-5xl font-extrabold text-red-500 sm:text-6xl">
                Lone Superpower
              </span>
              <p className="mt-1 text-lg font-semibold text-red-600">
                Curated by Sharabh Ojha
              </p>
              <p className="col-span-2 mt-6 max-w-5xl text-center text-sm sm:text-base">
                {
                  "The war has been over for a few years, and yet it seems that we never left. In the 1950s, the business and military-industrial complex holds significant sway over American policy, with the ongoing Korean War and our standoff with the USSR. It makes sense – we can’t let the Communists win on their fronts. Otherwise, they’ll come for us next. As the United States and the Soviet Union engage in an intense arms race and the nation grapples with fears of Communism, defense contractors are successfully advocating against disarmament, arguing instead for increased war production. It’s starting to look like contractors aren’t pressuring policy makers anymore either. Rather, both are in cahoots to heighten defense spending and military preparedness. Endless profits and a country safe from imminent Communist incursion? It’s a win-win situation."
                }
              </p>
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
                  src="/images/artifacts/uncle-sam.jfif"
                  alt="truman-committee"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="flex flex-col justify-center ">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 1:{" "}
                    <span className="text-red-500">
                      Anti-U.S. Propaganda Posters from the Korean War (1950)
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    These striking propaganda posters were dropped on UN trench
                    lines during the Korean War, likely created by the Koreans
                    and Chinese. These posters aimed to undermine morale,
                    provoke dissent, and raise concerns about the exploitation
                    and inequality associated with the war. They shed light on
                    the complex dynamics of the military-industrial complex
                    during the post-World War II era.
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl py-4 px-4 sm:col-span-2 ">
              {`During the post-World War II era, the military-industrial complex played a significant role in fueling the Korean War and propping up defense spending. The complex capitalized on the perceived communist threat and created a climate of fear that justified extensive defense budgets. Private defense companies expanded their operations to meet the demand for weapons and military equipment. The Korean War, which began in 1950, became a testing ground for new weapons and technologies, fueling the arms race between the United States and the Soviet Union. The defense industry lobbied for increased defense budgets, arguing that a strong military was essential for deterring aggression and protecting American interests abroad. This influence extended to the political sphere, with defense contractors exerting pressure on policymakers to maintain high military expenditures. During the Korean War, the Koreans and Chinese dropped propaganda posters on UN trench lines to undermine morale and raise concerns about the military-industrial complex. One poster depicted a dead soldier with blood flowing as coins into Uncle Sam's "war profits," suggesting that American soldiers were sacrificial pawns for war profiteers. This aimed to provoke doubt and dissent among UN forces. Another poster questioned the complex's priorities, stating, "Mr. Moneybags is in Florida this Christmas. Where are you?" It highlighted the stark contrast between soldiers' sacrifices and the luxurious lifestyles of those allegedly profiting from the war, aiming to sow disillusionment and resentment among UN troops. These posters were part of a larger psychological warfare campaign to undermine the resolve of UN forces and erode support for the war effort. By tapping into existing concerns about the military-industrial complex, they sought to exploit anti-war sentiments and raise doubts about the motives and fairness of the conflict.`}
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-2">
                <Image
                  src="/images/artifacts/gloriosa-victoria.jpg"
                  alt="gloriosa victoria"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="flex flex-col justify-center ">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 2:{" "}
                    <span className="italic text-red-500">
                      Gloriosa Victoria{" "}
                    </span>
                    <span className="text-red-500">(1954)</span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    This mural by Diego Rivera satirizes the role of the US,
                    United Fruit Company, Catholic Church and the military in
                    the Guatemalan coup. The individuals giving the handshake
                    are John Foster Dulles and General Castillo Armas, the
                    US-backed dictator.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4 px-4">
              {`From the late 19th century until 1944, Guatemala was governed by authoritarian rulers that exploited workers to produce coffee and bananas and line their pockets. During this time period, the US-backed United Fruit Company struck a deal with these rulers to seize vast swaths of Guatemalan land for American produce. In 1944, following an uprising that deposed dictator Jorge Ubico, Guatemala had its first democratic elections, leading to the tenures of Juan Jose Arevalo and Jacobo Arbenz. Both of these presidents were social reformers who instituted a variety of programs to lift workers from poverty and take back land from the UFC to nationalize the agricultural industry. Under Arbenz in particular, Decree 900 led to the redistribution of the land of 1.7k estates to 500k people. Arbenz’s policies ran afoul of the UFC, which extensively petitioned the US government to stage a coup. In 1952, Truman authorized Operation PBFortune, which would have mobilized the US’s puppet dictators in Nicaragua (Garcia) and the Dominican Republic (Trujillo) to overthrow Arbenz. Once the plan was leaked, however, it was canceled. In 1954, after the election of Dwight D. Eisenhower, the plan was revived again as Operation PBSuccess, due in part to the UFC-affiliated Dulles brothers (John Foster and Allen) becoming Secretary of State and CIA Director under his administration. PBSuccess was a two part plan to send a CIA-trained unit of 480 men to stage an uprising under fascist Carlos Armas, and wage a radio propaganda campaign to turn civilians against Arbenz. Armas and his men invaded the country on June 18th, and 9 days after, Arbenz was forced to resign. This coup was staged under the pretense that Arbenz was a communist and a threat to national security.`}
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <Image
                  src="/images/artifacts/power-elite.jpg"
                  alt="the power elite"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg  duration-150"
                />
                <div className="flex flex-col justify-center sm:col-span-2">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 3:{" "}
                    <span className="italic text-red-500">The Power Elite</span>{" "}
                    <span className=" text-red-500">(1956)</span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    Written by C. Wright Mills in 1956,{" "}
                    <span className="italic">The Power Elite</span>{" "}
                    {`is a book
                    that examines the power structures of the United States.
                    Mills argues that the US is ruled by a "power elite" of
                    business, military, and political leaders who are connected
                    to each other through a variety of social institutions. This
                    elite is able to control the government and the economy, and
                    is able to use its power to further its own interests.`}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl py-4 px-4 sm:col-span-2 ">
              {`The Power Elite is a book by sociologist C. Wright Mills, published in 1956, that analyzes the structure and role of the dominant groups in American society. One of the main arguments of the book is that the United States is ruled by a "power elite" that consists of the top leaders of corporate, political, and military bureaucracies, who share similar interests and act in concert to shape public policy and maintain their privileged position. While it would be another 5 years until the term “military industrial complex” would be coined, Mills argued that it had a disproportionate influence on American politics and society, as it promotes a permanent state of war readiness, fosters a militaristic culture, consumes vast amounts of public resources, and undermines democratic accountability. Mills identified several principles that underlie the operation and expansion of the MIC. First, he claimed that there is a "military metaphysic" that pervades the power elite, who view military force as the solution to any problem and regard war as an inevitable condition of human affairs. Second, he contended that there is a "structural imperative" that drives the MIC to constantly seek new enemies to justify its existence. Third, he observed that there is a "cultural apparatus" that supports the MIC, which includes various media, educational, and ideological institutions that propagate a pro-military worldview. Fourth, he noted that there is a "psychological wage" that attracts people to support the MIC, which consists of a sense of patriotism, heroism, adventure, and security. Mills warned that the MIC poses a serious danger to American democracy and peace, as it erodes civil liberties, distorts social priorities, increases international tensions, and contributes to fearmongering. He called for a transformation of the power structure and the culture of the United States that would disenfranchise the power elite.`}
            </div>
            <Footer />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Fifties;
