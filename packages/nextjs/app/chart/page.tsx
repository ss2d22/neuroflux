"use client";

import { PaginationButton, SearchBar, TransactionsTable } from "./_components";
import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { useFetchBlocks } from "~~/hooks/scaffold-eth";

const Chart: NextPage = (): JSX.Element => {
  const { blocks, transactionReceipts, currentPage, totalBlocks, setCurrentPage } = useFetchBlocks();
  return (
    <div className="flex flex-col justify-center w-full  ">
      <Header />
      <div className="flex flex-row">
        <img className="h-full w-1/2 ml-28 mr-28" src="chart-line.svg" alt="chart" />
        <div className="inline-block h-9/10 w-0.5 self-stretch bg-white" />
        <div className="flex flex-col ml-8 mt-8">
          <h1 className="font-mono font-normal text-white text-8xl tracking-[6.00px] leading-[75px]">Activity</h1>
          <SearchBar />
          <TransactionsTable blocks={blocks} transactionReceipts={transactionReceipts} />
          <PaginationButton
            currentPage={currentPage}
            totalItems={Number(totalBlocks)}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
