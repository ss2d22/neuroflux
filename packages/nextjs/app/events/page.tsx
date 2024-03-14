"use client";

import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { writeEvents } from "./_components";

const Events: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center w-full  ">
      <Header />
      <div className="flex flex-row spacing-x-20">
        <div className="flex flex-col w-[30%] h-full">
          <div className="flex flex-col w-full h-full rounded-md bg-[#A6A6A6] bg-opacity-40 p-1 mt-20 mx-20 font-mono">
            <div className="flex flex-row h-[15%] ml-8 mr-16 my-6 text-xl">
              <div className="my-2">Name </div>
              <div className="w-full h-full">
                <input
                  className=" rounded-md bg-[#e9e9e9] bg-opacity-30 ml-8 mr-20 w-full mt-2"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row h-[15%] ml-8 mr-16 my-6 text-xl">
              <div className="my-2">Date </div>
              <div className="w-full h-full">
                <input
                  className="w-full rounded-md bg-[#e9e9e9] bg-opacity-30 mr-2 ml-8 mt-2"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row h-[15%] ml-8 mr-11 my-6 text-xl">
              <div className="my-2">Price </div>
              <div className="w-full h-full">
                <input
                  className="rounded-md bg-[#e9e9e9] bg-opacity-30 mr-2 ml-5 mt-2 w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row h-[15%] mx-8 my-6 text-xl">
              <div className="my-2">Quant. </div>
              <div className="w-full h-full">
                <input
                  className="w-full rounded-md bg-[#e9e9e9] bg-opacity-30 mx-2 my-2"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row h-[15%] ml-8 mr-10 my-6 text-xl">
              <div className="my-2">Desc. </div>
              <div className="w-full h-full rounded-md ">
                <input
                  id="large-input"
                  className="bg-[#e9e9e9] bg-opacity-30 rounded-md w-full ml-5 mt-2 h-48"
                  style={{whiteSpace: "pre-wrap"}}
                  type="text"
                />
              </div>
            </div>
          </div>
          <button className="flex justify-center btn w-[80%] ml-36 mr-96 mt-10 custom-pink font-mono text-xl">Create Event</button>
        </div>
        <div className="grid gap-6 my-20 ml-60 mr-16 grid-cols-3 overflow-auto w-full">
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 1</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 2</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 3</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 4</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 5</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 6</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 7</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 8</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 9</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 10</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 11</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 12</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 13</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 14</div>
          <div className="border border-pink-500 border-solid border-4 w-full h-60 rounded-xl">Event 15</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
