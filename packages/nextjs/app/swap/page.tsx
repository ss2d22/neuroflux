"use client";

import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { AmountIn } from "./_components";
import { AmountOut } from "./_components";
import { useDeployedContractInfo, useScaffoldContract } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Swap: NextPage = (): JSX.Element => {


  const [userAddress, setUserAddress] = useState<string | null>(null);
  const { address } = useAccount();
  const [state, setState] = useState(null);
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

  const [exchangeRate, setExchangeRate] = useState<number>(1); // Add this line

  const calculateToken2Amount = (token1Amount: number) => {
    return token1Amount * exchangeRate;
  };
  

  const { writeAsync } = useScaffoldContractWrite({
    contractName: 'SwapContract',
    functionName: 'swap',
    args: [BigInt(token1Amount), BigInt(token2Amount)],
    value: BigInt(0),
  });
  
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
    <Header />
    <div className="flex flex-row ml-96 mr-96 mt-28 ">
      <AmountIn swapResult={state} onToken1AmountChange={handleToken1AmountChange} />
      <AmountOut swapResult={state} token2Amount={token2Amount} />
    </div>
    <button className="btn w-[50%] mr-auto ml-auto mt-28" onClick={handleSwap}>
      <img className="absolute w-10 h-10" alt="Frame" src="swap.svg" />
    </button>
    </>
  );
};

export default Swap;