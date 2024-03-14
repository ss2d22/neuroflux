"use client";

import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import EventList from "~~/components/EventsList"

const Events: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center w-full  ">
      <Header />
      <EventList />
    </div>
  );
};

export default Events;
