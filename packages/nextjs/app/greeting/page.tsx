"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { InputBase } from "~~/components/scaffold-eth";
import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth/index";

const Greeting: NextPage = (): JSX.Element => {
  const [newGreetingSubmitted, setNewGreetingSubmitted] = useState<string>("");

  const { data: yourContract } = useScaffoldContract({
    contractName: "YourContract",
  });

  console.log("YourContract", yourContract);

  const { data: currentGreeting } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "greeting",
  });

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "setGreeting",
    args: [newGreetingSubmitted],
  });

  const handleSubmitGreeting = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newGreetingSubmitted) {
      try {
        await writeAsync({ args: [newGreetingSubmitted] });
      } catch (error) {
        console.error("Error submitting greeting", error);
      }
    } else {
      console.error("No greeting submitted");
    }
  };

  return (
<div className="bg-white flex flex-col justify-center w-full [background:linear-gradient(270deg,rgb(18.85,26.57,52.49)_19.5%,rgb(3,7,18)_40.84%)] ">
      <Header />
      <div className="flex flex-col items-center justify-center w-full mt-16 space-y-16">
        <h1 className="text-center text-7xl [text-shadow:0px_4px_4px_#00000040] font-mono font-normal ">
          What Greeting Would You Like to Set?
        </h1>
        <form
          onSubmit={handleSubmitGreeting}
          className="flex flex-row items-center justify-center w-full mt-16 space-x-10"
        >
          <InputBase
            name="greet"
            placeholder="Greeting to be Set"
            value={newGreetingSubmitted}
            onChange={setNewGreetingSubmitted}
          />
          <button
            type="submit"
            style={{
              color: "white",
              backgroundColor: "black",
              borderRadius: "10px",
            }}
          >
            <img src="greeting.svg" />
          </button>
        </form>
        <p className="text-center text-4xl [text-shadow:0px_4px_4px_#00000040] font-mono font-normal ">
          {" "}
          Current Greeting is: {String(currentGreeting)}
        </p>
      </div>
    </div>
  );
};

export default Greeting;
