"use client";

import type { NextPage } from "next";
import { Header } from "~~/components/Header";

const Home: NextPage = (): JSX.Element => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="flex flex-row relative">
        <div className="flex flex-col w-[40%]">
          <img className="my-20 w-[70%] h-[0.7w]" style={{ zIndex: 1 }} alt="Neuroflex" src="Neuroflex.png" />
          <div
            className="grid grid-rows w-[60%] ml-20 drop-shadow-2xl [text-shadow:0px_4px_4px_#00000040] font-mono font-normal text-white text-8xl tracking-wide leading-normal "
            style={{ zIndex: 1 }}
          >
            Transfer Your 
            Assets Swiftly<div className="row-end animate-pulse opacity-20">|</div>
          </div>
        </div>
        <img className= "animate-pulse mx-60 my-20 w-[50%]" src="computer-screen.svg" />
      </div>
    </div>
  );
};

export default Home;
