/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChatIcon } from "@heroicons/react/solid";
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
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model position={[-1.2, 0, 0]} />
            <Model position={[1.2, 0, 0]} />
            <OBJModel />
          </Canvas>
        </section>
      </div>
    </main>
  );
};

export default Forties;
