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
        <section className="scrollbar flex max-h-[calc(100vh-5rem-1.5px)] min-h-[calc(100vh-5rem-1.5px)] justify-center overflow-x-hidden overflow-y-scroll">
          <header
            className={
              showHeader
                ? "absolute z-30 h-[calc(100vh-5rem-1.5px)] w-full translate-y-0 overflow-hidden bg-white duration-150 ease-in-out dark:bg-black"
                : "absolute z-30 h-[calc(100vh-5rem-1.5px)] w-full translate-y-[-100%] overflow-hidden bg-white duration-150 ease-in-out dark:bg-black"
            }
          >
            <Image
              src="/images/headers/1970s.gif"
              alt="1970s banner"
              width={1000}
              height={1000}
              className="absolute h-full object-cover opacity-20 sm:w-full sm:object-center"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 ">
              <p className="text-lg font-semibold uppercase text-red-500">
                The 1970s
              </p>
              <span className=" text-center text-5xl font-extrabold text-red-500 sm:text-6xl">
                Long Live Big Business
              </span>
              <p className="mt-2 text-lg font-semibold text-red-600">
                Created by Kevin Liu
              </p>
              <p className="col-span-2 mt-6 max-w-5xl text-center text-sm sm:text-base">
                {`Welcome to the 1970s and beyond, where business and government are one. Project after project, operation after operation is carried out, none with any rhyme or reason. Planes that can’t fly cost the taxpayer billions every year, and wars are fought over little lies the President and his businessmen friends tell on national television. In this section, you will witness the delicate dance between profit and patriotism, as well as the consequences of a system where the lines between public interest and private gain disappear. Reflect upon the challenges posed by a military-industrial complex that transcends mere defense needs, and consider the implications for our democracy, national security, and the pursuit of a more equitable society.
`}
              </p>
            </div>
          </header>
          <section className=" relative flex flex-col items-center duration-150 ">
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <Image
                  src="/images/artifacts/c5a.jpg"
                  alt="napalm"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="flex flex-col justify-center sm:col-span-2">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 1:{" "}
                    <div className="inline text-red-500">
                      <span className="italic">The C-5A Scandal</span> (Berkeley
                      Rice, 1971)
                    </div>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    Written by Berkeley Rice in 1971,{" "}
                    <span className="italic">the C-5A Scandal</span>{" "}
                    {`examines the controversial development of the Lockheed C-5A, a military transport aircraft. Despite its flawed development and the financial uncertainty of 
                    its manufacturer, Lockheed Martin, Lockheed exploited its political connections to secure continued funding for the project. This scandal underscored the notion that certain defense contractors had become "too big to fail," granting them substantial leverage and control over government decisions.
`}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4 px-4">
              {`This exhibit depicts the Lockheed C-5A, a military transport aircraft that is the first military project to have a $1 billion cost overrun. Throughout the development program, the aircraft was marred with weight issues, failing to support up to 150% limit load (it would stall at 125%), as was required to start production. Because of its inefficiency and cost, the Air Force reduced its orders of the C-5A in 1970, leaving Lockheed in a bind. By 1971, the cost overruns to the C-5A, along with overruns for the L-1011 TriStar commercial airliner, brought Lockheed to the brink of bankruptcy. Private banks cut off lending to Lockheed by the spring of 1971, and soon enough it looked like Lockheed was going under. Lockheed Martin asked Congress for a bailout in loan guarantees totaling $250 million. If Congress failed to bail the company out, Lockheed would collapse and take “25,000 to 30,000 jobs” in thirty-four states along with it, not to mention its importance to US national security interests. Lockheed gave Congress an ultimatum, putting a metaphorical gun to lawmakers’ heads. Democratic representative William Moorhead from Pennsylvania summed up the situation best: “This is like an eighty-ton dinosaur who comes to your door and says, “If you don’t feed me I will die and what are you going to do with eighty tons of stinking dinosaur in your yard?” Lockheed became one of the first companies to be dubbed, “too big to fail,” as Bill Hartung suggested in his book Prophets of War. Congress did not want to lose its investment in the plane, and to cut jobs so close on the heels of a recession and amid rising inflation rates.`}
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <Image
                  src="/images/artifacts/iraq-resolution.jpg"
                  alt="iraq resolution"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="mt-4 flex flex-col justify-center sm:col-span-2 sm:mt-0">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 2:{" "}
                    <span className="text-red-500">
                      Authorization for Use of Military Force Against Iraq
                      Resolution (2002)
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    {`After the September 11 attacks, Congress passed a resolution
                    authorizing US military intervention in Iraq, leading to
                    Operation Iraqi Freedom and the Iraq War. The Bush Administration claimed that the main objective of the operation was to eliminate Saddam Hussein's regime and destroy Iraq's alleged WMDs. However, no significant WMDs were found, casting doubt on the pre-war intelligence. Meanwhile, Vice President Dick Cheney, with ties to the oil industry, played a role in negotiating Iraqi oil field allocations, and the Bush administration pushed for the Hydrocarbons Law, raising suspicions that oil interests influenced the decision to go to war.
                    `}
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="mx-auto max-w-7xl py-4 px-4 sm:col-span-2">
              {`This resolution was passed by Congress post 9-11 and authorized US military intervention in Iraq through Operation Iraqi Freedom. 
                Iraqi Freedom was launched on March 20, 2003, considered the start of the Iraq War. Its goal was to overthrow Saddam Hussein's regime, 
                eliminate Iraq's alleged weapons of mass destruction (WMDs), and promote democracy in the region. The Bush administration, 
                particularly President George W. Bush and other top officials presented intelligence from agencies such as the CIA to support the claim that 
                Iraq possessed WMDs. However, after the invasion of Iraq, no substantial stockpiles of WMDs were found. This led to widespread criticism that 
                the administration had manipulated the intelligence to justify military action, leading to several investigations. Investigations such as the 
                2004 Iraq Survey Group and the 2008 Senate Select Committee on Intelligence reports concluded that Iraq had not possessed large stockpiles of 
                chemical or biological weapons at the time of the invasion, and that the intelligence community's judgments about Iraq's WMDs were faulty. George 
                W Bush received $1.5 million from the oil industry for his 2000 presidential campaign, the largest donation from the industry to a single political 
                candidate at the time. Bush also had close ties with oil executives, such as running mate Dick Cheney, CEO of Halliburton, a major oil services company. A week into Bush’s presidency, Cheney formed the National Energy Policy Development Group to negotiate Iraqi oil field allocation with companies like Exxon and Shell, even prior to the invasion. Bush’s administration later forced the Hydrocarbons Law through the Iraqi parliament, which would have given American oil companies more power. Oil companies dominated Iraq’s oil industry at the end of the war, in stark contrast with Iraq’s nationalized industry pre-war.`}
            </div>

            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#101010]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-2">
                <Image
                  src="/images/artifacts/f35.jfif"
                  alt="f35"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full rounded-lg duration-150 "
                />
                <div className="mt-4 flex flex-col justify-center sm:mt-0">
                  <div className="text-3xl font-extrabold sm:text-5xl ">
                    Artifact 3:{" "}
                    <span className="text-red-500">
                      F-35 Joint Strike Fighter (Modern Day)
                    </span>
                  </div>
                  <div className="mt-4 text-xl font-light sm:text-2xl">
                    {`The F35 is the world's most expensive weapons program. Lockheed Martin exercises an alarming level of control over the program, with complete dominance over the production supply chain, while the program's widespread subcontracting and the vast number of jobs it supports have dissuaded even the most progressive legislators, like Bernie Sanders, from preventing the F35 from being staged in Vermont.`}
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="mx-auto max-w-7xl py-4 px-4 sm:col-span-2">
              {`The F-35 Fighter Jet is an ongoing Lockheed Martin project since 2001, in production since 2006, and first used in combat by the Israeli Air Force in 2018. However, it has not completed its operational testing and evaluation phase and has not met its original requirements for stealth, maneuverability, and reliability. Ironically, the F-35 program’s costs have been soaring more than the plane itself; it’s expected to reach $1.7 trillion by 2070, the scheduled end of the program. Part of this is because of the level of control Lockheed exerts over the program – control that the government itself doesn’t have. The company produces not only the F-35 but also its pilot training gear, built-in logistics systems, and support equipment, such as carts and rigs. Lockheed even has complete control over the production supply chain and maintenance of the planes. This extreme example of vertical integration has put it at odds with the US government. “I had a sense, after my first 90 days, that the government was not in charge of the program… all of the major decisions… were really all being made by Lockheed Martin, and the program office was just kind of watching,” Air Force lieutenant Christopher Bogdan, executive officer of the F-35 program, was reported saying. And what can the government do about it anyway? Parts for the F-35 are made in forty-five states and Puerto Rico, and with the sheer amount of subcontractors involved in the production, almost 300k people depend on this program to feed their families. The sizable amount of jobs that would be lost across the country if this program were to be shut down deters even the most progressive legislators, like independent Vermont senator Bernie Sanders, from stopping production of the F-35 in their states.`}
            </div>

            <Footer />
          </section>

          <button
            onClick={() => setShowHeader(!showHeader)}
            className="absolute bottom-4  z-50 flex animate-bounce items-center justify-center rounded-full bg-red-500 p-2"
          >
            <ArrowDownIcon
              className={
                showHeader
                  ? "h-6 w-6 text-white duration-150"
                  : "h-6 w-6 rotate-180 text-white duration-150"
              }
            />
          </button>
        </section>
      </div>
    </main>
  );
};

export default Sixties;
