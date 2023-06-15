/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import { ChatIcon, ArrowDownIcon } from "@heroicons/react/solid";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Chat from "../components/chatgpt";
import React, { useState } from "react";

const Sixties: NextPage = () => {
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
              src="/images/headers/1960s.gif"
              alt="1960s banner"
              width={1000}
              height={1000}
              className="absolute h-full object-cover opacity-20 sm:w-full sm:object-center"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 ">
              <p className="text-lg font-semibold uppercase text-red-500">
                The 1960s
              </p>
              <span className=" text-center text-5xl font-extrabold text-red-500 sm:text-6xl">
                A Constant War
              </span>
              <p className="mt-1 text-lg font-semibold text-red-600">
                Curated by Ranvith Adulla
              </p>
              <p className="col-span-2 mt-6 max-w-5xl text-center text-sm sm:text-base">
                {`For a decade widely regarded as the start of the counterculture movement – an era of love, peace, and Woodstock – it’s unfortunate that our government insists on going to war. In their defense, it’s not really their choice. In the 1960s, the military-industrial complex exerts significant influence over government policy. Defense contractors and other related industries have been lobbying for increased spending, expanding our operations, and even goading us into war with Vietnam. Their profit margins are soaring while our men are dying. Why does it seem like the contractors are writing our laws and our declarations of war for us? The violence, chaos, protests, and ensuing struggle of the American people against these defense contractors leads our President to coin the term “military-industrial complex” as a warning of times to come. It seemed benevolent the first 20 years the contractors did this. Not anymore.`}
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
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <iframe
                  src={`https://www.youtube.com/embed/V9dbBWA5dmA`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Eisenhower's Speech"
                  className="my-auto h-full w-full rounded-lg duration-150 sm:mx-auto sm:w-full"
                />
                <div className="flex flex-col justify-center sm:col-span-2">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 6:{" "}
                    <span className="text-red-500">
                      {`Eisenhower's Farewell Speech: Warning about the
                      Military-Industrial Complex (1961)`}
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    Before leaving office, President Dwight D. Eisenhower gave a
                    farewell speech to the American people. In this speech, he
                    warned about the growing influence of the
                    military-industrial complex on American society. He
                    expressed concerns about the potential dangers posed by the
                    intertwining interests of the military, the government, and
                    the defense industry.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4 px-4">
              <div className="mb-4 rounded-lg bg-gray-100 p-2 shadow-inner dark:bg-[#101010]">
                <p className="italic text-red-500">
                  “Until the latest of our world conflicts, the United States
                  had no armaments industry… But now we can no longer risk
                  emergency improvisation of national defense; we have been
                  compelled to create a permanent armaments industry of vast
                  proportions. Added to this, three and a half million men and
                  women are directly engaged in the defense establishment. We
                  annually spend on military security more than the net income
                  of all United States corporations… We recognize the imperative
                  need for this development. Yet we must not fail to comprehend
                  its grave implications. Our toil, resources, and livelihood
                  are all involved; so is the very structure of our society. In
                  the councils of government, we must guard against the
                  acquisition of unwarranted influence, whether sought or
                  unsought, by the military-industrial complex. The potential
                  for the disastrous rise of misplaced power exists and will
                  persist.”
                </p>
                <p className="mt-4 ml-4 text-red-500">
                  <span className="font-semibold"> - Dwight D. Eisenhower</span>
                </p>
              </div>

              {`This artifact showcases President Dwight D. Eisenhower's historic farewell speech delivered in 1961. In this poignant address, Eisenhower issued a cautionary message about the growing influence of the military-industrial complex on American society. Eisenhower left office during a time characterized by significant international political developments. It was the height of the Cold War, and the ideological conflict between the United States and the Soviet Union was at its peak. The Soviets had recently launched Sputnik, the world's first artificial satellite, forcing American scientists to double down on their efforts to win the space race. Back at home, the recent Cuban Revolution and ongoing Vietnam War led many Americans to feel uneasy about their safety. In his speech, Eisenhower expressed concerns about the potential dangers posed by the intertwining interests of the military, the government, and the defense industry. As a former military general, he emphasized the need for a balanced approach to national defense. He warned that excessive military spending and the unchecked influence of the military-industrial complex could have far-reaching consequences. Eisenhower understood that an excessive focus on military spending could divert funds away from other essential sectors, including education and healthcare, hindering the nation's long-term prosperity. He also warned about the dangers of a perpetual state of "war readiness." Driven by profit motives, the military-industrial complex would encourage our government to support the continuous development of advanced weaponry, perpetuating a cycle of conflict. Eisenhower called for a measured approach to national defense, one that focused on seeking peaceful solutions before escalating. Eisenhower's farewell speech remains relevant today, sparking discussions about how to balance the security of our nation and the principles of a democracy. The military-industrial complex has only continued to grow, and the challenges it poses have expanded. In an era of rising defense budgets, ongoing conflicts, and heightened influence of defense lobbyists, Eisenhower’s words serve as a reminder of the importance of maintaining a transparent approach to defense policy.`}
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <Image
                  src="/images/artifacts/napalm.jpg"
                  alt="napalm"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="flex flex-col justify-center sm:col-span-2">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 7:{" "}
                    <div className="inline text-red-500">
                      <span className="italic">Father and Napalmed Child</span>{" "}
                      (Anonymous, 1964)
                    </div>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    This photograph shows a father cradling a child with severe
                    napalm burns. In the U.S., images like this sparked outrage
                    and led to protests agaisnt Dow Chemical, the company that
                    manufactured napalm and Agent Orange. Despite continued
                    public pressure, Dow continued to support the war effort and
                    lobbied the government to pursue policies that favored its
                    interests until 1969.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4 px-4">
              {`During the Vietnam War, the US military used napalm, a flammable gel that sticks to human skin and causes severe burns, as a weapon against the North Vietnamese forces. An estimated 352,000 tonnes of napalm were dropped on Vietnam during the war, devastating millions of acres of land and killing thousands of civilians. The photograph depicted shows the result of an Air Force bombing of a secluded village. Military intelligence had learned that guerilla forces were hiding there, and, without regard for the innocent civilians, dropped dozens of bombs on the area. The photographer, Horst Faas, took hundreds of photographs, showing the horrors of the war to the American public. A major culprit behind this devastation was Dow Chemical, the sole manufacturer of napalm for the military from 1965 to 1969. Dow Chemical used their resources to lobby the government to pursue policies favoring their interests, such as expanding the draft, bombing North Vietnam, and supporting anti-communist regimes in Southeast Asia. They also used public relations techniques to justify their involvement. For example, Dow Chemical claimed that napalm was a humane weapon that saved American lives, thereby fulfilling its patriotic duty. By exerting political pressure on the government, Dow Chemical and other companies prolonged the war in Vietnam while receiving millions of dollars in contracts and subsidies. However, they faced increasing resistance from the public, the media, and their own shareholders, forcing them to reconsider their role in the war. In 1969, Dow Chemical voted against renewing its Pentagon contract. As a whole, the success of Dow Chemical’s interference in the Vietnam War points to the willingness of the government in letting contractors run wild. Their greed led to suffering of an untold cruelty, leaving thousands of innocent civilians caught in the crossfire. In true opportunistic nature, the military industrial complex capitalized on the chaos, overshadowing the value of human lives and the long-term consequences of their involvement.`}
            </div>

            <Footer />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Sixties;
