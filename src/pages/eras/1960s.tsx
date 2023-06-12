/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChatIcon, ArrowUpIcon } from "@heroicons/react/solid";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
              src="/images/headers/1960s.gif"
              alt="1960s banner"
              width={1000}
              height={1000}
              className="absolute w-full opacity-20"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 ">
              <p className="text-lg font-semibold uppercase text-red-500">
                The 1960s
              </p>
              <span className=" text-center text-6xl font-extrabold text-red-500">
                Constant War
              </span>
              <p className="col-span-2 mt-8">
                {`During the 1960s, the military-industrial complex exerted
                significant influence over government policy. Through lobbying
                efforts and political pressure, defense contractors and related
                industries successfully advocated for policies that favored
                their interests. They pushed for increased defense spending,
                expanded military operations, and a sustained military presence
                in Vietnam. This influence further solidified the complex's role
                in shaping foreign and defense policies, often prioritizing
                their own profit margins over broader strategic considerations.
                The military-industrial complex's clout led to the prolongation
                of the Vietnam War, resistance to policy changes, and the
                continuation of controversial practices such as the use of
                devastating weapons like napalm and Agent Orange. The complex's
                influence in the 1960s highlighted the challenges of maintaining
                a balance between national security, corporate interests, and
                democratic decision-making processes.`}
              </p>
            </div>
          </header>
          <section className=" relative flex flex-col items-center duration-150 ">
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#212020]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <Image
                  src="/images/artifacts/farewell-address.jpg"
                  alt="farewell-address"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full duration-150 "
                />
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="text-5xl font-extrabold ">
                    Artifact 1:{" "}
                    <span className="text-red-500">
                      {`Eisenhower's Farewell Speech: Warning about the
                      Military-Industrial Complex (1961)`}
                    </span>
                  </div>
                  <div className="mt-4 text-2xl font-light">
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

            <div className="col-span-2 mx-auto max-w-7xl py-4">
              {`This artifact showcases President Dwight D. Eisenhower's historic farewell speech delivered in 1961. In this poignant address, Eisenhower issued a cautionary message about the growing influence of the military-industrial complex on American society. He expressed concerns about the potential dangers posed by the intertwining interests of the military, the government, and the defense industry. Eisenhower, a former military general himself, emphasized the need for a vigilant and balanced approach to national defense. He warned that excessive military spending and the unchecked influence of the military-industrial complex could have far-reaching consequences, including the distortion of priorities and the erosion of civil liberties. Eisenhower's speech called for a reevaluation of the relationship between the government, the military, and the defense industry to ensure the preservation of democratic values and fiscal responsibility. This artifact represents a critical moment in American history, highlighting the awareness and apprehension surrounding the military-industrial complex during the 1960s. Eisenhower's farewell speech continues to resonate, sparking discussions about the balance between national security, democratic principles, and the influence of vested interests within the defense sector. It serves as a reminder of the ongoing relevance and importance of maintaining a vigilant and transparent approach to defense policy and the potential consequences of unchecked military-industrial complex influence.`}
            </div>
            <div className="w-[100vw] bg-gray-200 p-8 dark:bg-[#212020]">
              <div className="mx-auto grid max-w-7xl gap-x-12 sm:grid-cols-3">
                <Image
                  src="/images/artifacts/napalm.jpg"
                  alt="napalm"
                  height={1000}
                  width={1000}
                  className="mx-auto my-auto w-full duration-150 "
                />
                <div className="col-span-2 flex flex-col justify-center">
                  <div className="text-5xl font-extrabold ">
                    Artifact 2:{" "}
                    <div className="inline text-red-500">
                      <span className="italic">Father and Napalmed Child</span>{" "}
                      (Anonymous, 1964)
                    </div>
                  </div>
                  <div className="mt-4 text-2xl font-light">
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

            <div className="col-span-2 mx-auto max-w-7xl py-4">
              {`During the Vietnam War, the US military used napalm, a flammable gel that sticks to human skin and causes severe burns, as a weapon against the Viet Cong and North Vietnamese forces. It is estimated that over 352,000 tonnes of napalm were dropped on Vietnam during the war, devastating millions of acres of land and killing thousands of civilians. A major culprit behind this devastation was Dow Chemical, a chemicals company that became the sole manufacturer and supplier of napalm for the US military from 1965 to 1969. Dow Chemical and its representatives used their resources to lobby the government to pursue policies that favored their interests, such as increasing military spending, expanding the draft, bombing North Vietnam, and supporting anti-communist regimes in Southeast Asia. They also used public relations techniques to justify their involvement in the war. For example, Dow Chemical claimed that napalm was a humane weapon that saved American lives, and that it was fulfilling its patriotic duty by supporting the government. By exerting political pressure on the government, Dow Chemical and other such companies contributed to prolonging the war in Vietnam, as they made it harder for the government to change its strategy, all while receiving millions of dollars in contracts and subsidies. However, they also faced increasing resistance from the public, the media, and their own shareholders, forcing them to reconsider their role in the war. In 1969, Dow Chemical voted against renewing its $5 million dollar a year Pentagon napalm contract. Dow Chemical was also one of the primary producers of Agent Orange, a herbicide that was used to destroy foliage in enemy territory and expose hostile soldiers. This has predisposed over 4 million Vietnamese and thousands of American soldiers, as well as their children, to cancer, genetic disorders, and other health problems.`}
            </div>

            <Footer />
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

export default Sixties;
