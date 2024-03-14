"use client";

import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { useDeployedContractInfo, useScaffoldContract } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Swap: NextPage = (): JSX.Element => {


  const [userAddress, setUserAddress] = useState<string | null>(null);
  const { address } = useAccount();
  const contractInfo = useDeployedContractInfo('SwapContract');
  const { data: swapContract, isLoading: isSwapLoading } = useScaffoldContract({
    contractName: 'SwapContract',
  });
  const handleToken1AmountChange = (newToken1Amount: string) => {
    setToken1Amount(newToken1Amount);
    if (newToken1Amount === '') {
      setToken2Amount(0);
    } else {
      setToken2Amount(calculateToken2Amount(Number(newToken1Amount)));
    }
  };
  const [token1Amount, setToken1Amount] = useState<string>('');
  const [token2Amount, setToken2Amount] = useState<number>(0);
<<<<<<< HEAD
  const [exchangeRate, setExchangeRate] = useState<number>(1); // Add this line

  const calculateToken2Amount = (token1Amount: number) => {
    return token1Amount * exchangeRate;
  };
  


=======
  const { writeAsync } = useScaffoldContractWrite({
    contractName: 'SwapContract',
    functionName: 'swap',
    args: [BigInt(token1Amount), BigInt(token2Amount)],
    value: BigInt(0),
  });
>>>>>>> c0560a7a1ac89a90cefae5d20afa376982fc09c2
  
  useEffect(() => {
    setUserAddress(address || null);
  }, [address]);

  const handleSwap = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!userAddress || isSwapLoading || !swapContract) return;
    
    try {
      await writeAsync({});
      console.log("Swap Success")
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
<<<<<<< HEAD
    <Header />
    <div className="flex flex-row ml-96 mr-96 mt-28 ">
      <AmountIn swapResult={state} onToken1AmountChange={handleToken1AmountChange} />
      <AmountOut swapResult={state} token2Amount={token2Amount} />
    </div>
    <button className="btn w-[50%] mr-auto ml-auto mt-28">
      <img className="absolute w-10 h-10" alt="Frame" src="swap.svg" />
    </button>
=======
        <Header />
        <div className="flex flex-row ml-auto mr-auto mt-28 ">
          <div className="w-full h-[75%] rounded-md bg-gradient-to-r from-pink-500 via-blue-500 to-gray-900 p-1 mr-20">
            <div className="flex flex-col h-full w-full items-center justify-center bg-gray-950 back ">
              <div className="flex h-40 w-[80%] mt-20 mr-20 ml-20 bg-[#c3c0c0b2] back rounded-2xl">
                <div className="ml-4 mt-10 [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[75px] whitespace-nowrap">
                  <input className="bg-transparent w-full" type="number" value={token1Amount} onChange={e => setToken1Amount(Number(e.target.value))} />
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
          <div className="w-full h-[75%] rounded-md bg-gradient-to-r from-gray-900 via-blue-500 to-pink-500 p-1 ml-20">
            <div className="flex flex-col h-full w-full items-center justify-center bg-gray-950 back ">
              <div className="flex h-40 w-[80%] mt-20 mr-20 ml-20 bg-[#c3c0c0b2] back rounded-2xl">
                <div className="ml-4 mt-10 [font-family:'Krona_One-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[75px] whitespace-nowrap">
                  {<input className="bg-transparent w-full" type="number" value={token2Amount} onChange={e => setToken2Amount(Number(e.target.value))} />} 
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
      </div>
      <button className="btn w-[50%] mr-auto ml-auto mt-28 mb-28" onClick={handleSwap}>
        <img className="absolute w-10 h-10" alt="Frame" src="swap.svg" />
      </button>
>>>>>>> c0560a7a1ac89a90cefae5d20afa376982fc09c2
    </>
  );
};

export default Swap;