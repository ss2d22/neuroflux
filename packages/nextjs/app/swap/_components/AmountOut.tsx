"use client";
import React, { useState } from "react";

interface AmountOutProps {
  swapResult: any;
<<<<<<< HEAD
  token2Amount: number; 
}

export const AmountOut: React.FC<AmountOutProps> = ({ swapResult, token2Amount }) => {
=======
  amount: any;
}

export const AmountOut: React.FC<AmountOutProps> = ({ swapResult, amount}) => {

  const [token2Amount, setToken2Amount] = useState<number>(0);

>>>>>>> c0560a7a1ac89a90cefae5d20afa376982fc09c2
  return (
    <div className="w-full h-[75%] rounded-md bg-gradient-to-r from-gray-900 via-blue-500 to-pink-500 p-1 ml-20">
      <div className="flex flex-col h-full w-full items-center justify-center bg-gray-950 back ">
        <div className="flex h-40 w-[80%] mt-20 mr-20 ml-20 bg-[#c3c0c0b2] back rounded-2xl">
          <div className="ml-4 mt-10 [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[75px] whitespace-nowrap">
<<<<<<< HEAD
            {swapResult ? swapResult.toString() : <input className="bg-transparent w-full" type="number" value={token2Amount} disabled />} 
=======
          {swapResult ? swapResult.toString() : <input className="bg-transparent w-full" type="number" value={amount} onChange={e => setToken2Amount(Number(e.target.value))} />} 
>>>>>>> c0560a7a1ac89a90cefae5d20afa376982fc09c2
          </div>
        </div>
        <div className="flex flex-row h-[40%] w-[80%] m-20 bg-[#bdaeae5e] back rounded-2xl">
          <div className="ml-4 [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[75px] whitespace-nowrap">
            CFX
          </div>
          <button className="justify-end">
            <img className="rotate-180" src="control.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountOut;