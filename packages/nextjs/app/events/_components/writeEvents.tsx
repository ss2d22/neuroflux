"use client";
import React from "react";

interface writeEventsProps {
  swapResult: any;
  amount: any;
}

export const writeEvents: React.FC<writeEventsProps> = ({}) => {

  return (
    <div className="flex flex-col w-[25%] h-full rounded-md bg-[#A6A6A6] bg-opacity-40 p-1 mt-20 mx-20 font-mono">
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
          className="bg-[#e9e9e9] bg-opacity-30 rounded-md w-full ml-5 mt-2 h-[30%]"
          style={{display: "block", width: "100%"}}
          type="text"
        />
      </div>
    </div>
  </div>
  );
};

export default writeEvents;