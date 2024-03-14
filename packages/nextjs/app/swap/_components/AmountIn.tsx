"use client";
import React, { useState } from "react";

interface AmountInProps {
  swapResult: any;
<<<<<<< HEAD
  onToken1AmountChange: (amount: string) => void;
}

export const AmountIn: React.FC<AmountInProps> = ({ swapResult, onToken1AmountChange }) => {
=======
  amount: any;
}

export const AmountIn: React.FC<AmountInProps> = ({ swapResult, amount}) => {
>>>>>>> c0560a7a1ac89a90cefae5d20afa376982fc09c2

  const [token1Amount, setToken1Amount] = useState<number>(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    onToken1AmountChange(newAmount);
  };

  return (
      <div className="w-full h-[75%] rounded-md bg-gradient-to-r from-pink-500 via-blue-500 to-gray-900 p-1 mr-20">
        <div className="flex flex-col h-full w-full items-center justify-center bg-gray-950 back ">
          <div className="flex h-40 w-[80%] mt-20 mr-20 ml-20 bg-[#c3c0c0b2] back rounded-2xl">
            <div className="ml-4 mt-10 [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[75px] whitespace-nowrap">
<<<<<<< HEAD
            {swapResult ? swapResult.toString() :  <input className="bg-transparent w-full" type="number" value={token1Amount} onChange={handleInputChange} />}            
=======
            {swapResult ? swapResult.toString() :  <input className="bg-transparent w-full" type="number" value={amount} onChange={e => setToken1Amount(Number(e.target.value))} />}
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

export default AmountIn;