/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChatIcon, ArrowUpIcon } from "@heroicons/react/solid";
import Navbar from "../components/navbar";
import Chat from "../components/chatgpt";

import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import {
  Canvas,
  useFrame,
  type ThreeElements,
  useLoader,
} from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function Model(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function OBJModel() {
  const obj = useLoader(OBJLoader, "/models/model.obj");
  obj.scale.set(20, 20, 20); // Set the scale to 1000px x 1000px
  const mesh = obj.children[0];
  if (mesh instanceof THREE.Mesh) {
    mesh.rotation.y = 0.01; // Set the rotation speed
  }
  return <primitive object={obj} />;
}

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
          className="absolute bottom-4 right-5 z-20 rounded-2xl bg-red-500 p-2 text-white shadow-lg  duration-150 hover:bg-red-600"
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
              src="/images/headers/1940s.jpeg"
              alt="1940s banner"
              width={1000}
              height={1000}
              className="absolute w-full opacity-20"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 ">
              <p className="text-sm uppercase text-red-500">The 1940s</p>
              <span className=" text-center text-6xl font-extrabold text-red-500">
                The Arsenal of Democracy
              </span>
              <p className="col-span-2 mt-8">
                In the 1940s, as the United States fought in World War II,
                defense contractors emerged as key players. They produced
                weapons and supplies vital to the war effort, gaining
                significant financial resources and influence. With thousands of
                employees and operations across the country, defense contractors
                held political sway, pressuring lawmakers to support their
                interests. The close relationship between the government and
                defense contractors solidified, shaping defense policies and
                budgets. This influential dynamic, known as the military
                industrial complex, continued to impact the nation long after
                the 1940s, raising ongoing debates about the balance between
                national security and business interests.
              </p>
            </div>
          </header>
          <section className=" relative flex flex-col items-center duration-150 ">
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#212020]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-2">
                <Image
                  src="/images/artifacts/truman-committee.jpg"
                  alt="truman-committee"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full duration-150 "
                />
                <div className="flex flex-col justify-center ">
                  <div className="text-6xl font-extrabold ">
                    Artifact 1:{" "}
                    <span className="text-red-500">The Truman Committee</span>
                  </div>
                  <div className="mt-4 text-2xl font-light">
                    Like the Nye Committee of the 1930s, the 1941 Truman
                    Committee investigated the military-industrial complex and
                    its impact on the war effort during World War II.
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4">
              {
                "During World War II, the United States Senate Special Committee to Investigate the National Defense Program, popularly known as the Truman Committee, was established in 1941. Led by Senator Harry S. Truman, the committee aimed to scrutinize the efficiency, effectiveness, and expenditures of the national defense program. Drawing inspiration from the Nye Committee of the 1930s, which examined the role of the munitions industry in the United States' entry into World War I, the Truman Committee focused on investigating the military-industrial complex (MIC) and its impact on the war effort. Its main objective was to ensure that defense contracts were allocated efficiently and free from wasteful practices, fraud, and excessive profiteering. Through a series of hearings and investigations, the Truman Committee thoroughly examined various aspects of defense production, procurement, and logistics. It delved into the operations of defense contractors, government agencies, and military branches to uncover inefficiencies and corruption within the war machinery. The committee's investigations exposed alarming instances of overpricing, substandard production, and fraudulent practices by defense contractors. These findings shed light on the urgent need for transparency, accountability, and cost-effectiveness in defense contracting. As a result of the committee's efforts, significant reforms were implemented in defense procurement and production. The Truman Committee recommended changes such as introducing competitive bidding processes, implementing cost controls, and establishing standardized pricing to enhance efficiency and eliminate wasteful practices. These reforms resulted in substantial cost savings, streamlined production, and improved oversight of defense spending. Furthermore, the Truman Committee's investigations brought attention to the complex relationship between business interests and the government in times of war. The committee's findings highlighted the potential for undue influence, conflicts of interest, and the necessity of robust oversight mechanisms to prevent abuse and corruption."
              }
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#212020]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-2">
                <Image
                  src="/images/artifacts/b17.jpg"
                  alt="b17_factory"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full duration-150 "
                />
                <div className="flex flex-col justify-center ">
                  <div className="text-6xl font-extrabold ">
                    Artifact 2:{" "}
                    <span className="text-red-500">Boeing Company Plant 2</span>
                  </div>
                  <div className="mt-4 text-2xl font-light">
                    During World War 2, an immense 297,000 aircraft were
                    produced in the United States. Yet, less then 26
                    manufacturers provided these aircraft. Across the defense
                    industry, a handful of large companies, like Boeing, began
                    to dominate the market.
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="col-span-2 mx-auto max-w-7xl py-4">
              {`In World War II, large manufacturing firms enjoyed a disproportionate share of defense spending, as the top 100 prime contractors claimed about two-thirds of the total value of awards. The concentration of military research and development contracts was even more pronounced, with the top 68 corporations receiving two-thirds of the R&D awards, and the top 10 securing nearly two-fifths of the total. During the war, the government emerged as the dominant investor, contributing over $17 billion, which accounted for about two-thirds of all investment. In addition to funding ammunition plants, the government embarked on ambitious construction projects, including shipyards, steel and aluminum mills, and chemical plants. The aircraft industry experienced remarkable growth, with government investment and procurement propelling it to become the nation's largest sector, producing a staggering 297,000 aircraft by the war's end. This level of government involvement could be characterized as "war socialism." However, there was a distinctly American twist to this wartime economy that merits the term "war fascism." Rather than operating directly, the government relied on a select group of contractors to manage the government-financed plants. Remarkably, just 26 firms were entrusted with the use of half the value of all governmentally financed industrial facilities leased to private contractors. And just 3 - Boeing, Vega, and Douglas - built the 3rd most-produced bomber of all time, the B-17. This concentration of power among a small group of contractors underscored the entanglement of business interests with the government during the war. It highlighted the influence wielded by these contractors in shaping the course of war production and decision-making. The allocation of significant resources and control over crucial industrial facilities to a limited number of firms revealed the intricate web of relationships between the military-industrial complex and the government.`}
            </div>
          </section>

          <button
            onClick={() => setShowHeader(!showHeader)}
            className="absolute bottom-4  z-50 flex animate-bounce items-center justify-center rounded-full bg-red-500 p-2"
          >
            <ArrowUpIcon
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

export default Forties;
