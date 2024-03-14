"use client";

import type { NextPage } from "next";
import { Header } from "~~/components/Header";

const Home: NextPage = (): JSX.Element => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="flex flex-col relative">
        <div className="flex flex-col w-[40%]">
          <img className="w-[60%] h-[60%]" style={{ zIndex: 1 }} alt="Neuroflex" src="Neuroflex.png" />
          <div
            className="w-[60%] ml-20 drop-shadow-2xl [text-shadow:0px_4px_4px_#00000040] [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[30px] tracking-[7.50px] leading-[75px] "
            style={{ zIndex: 1 }}
          >
            Transfer Your <br />
            Assets Swiftly
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
