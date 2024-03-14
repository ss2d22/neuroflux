"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaucetButton, RainbowKitCustomConnectButton } from "./scaffold-eth";
import { BugAntIcon } from "@heroicons/react/24/outline";

type HeaderMenuLink = {
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    href: "/",
    icon: <img className="h-10 w-10" alt="Home" src="house.svg" />,
  },
  {
    href: "/debug",
    icon: <BugAntIcon className="h-10 w-10" />,
  },
  {
    href: "/swap",
    icon: <img className="h-10 w-10" alt="Swap" src="swap.svg" />,
  },
  {
    href: "/events",
    icon: <img className="h-10 w-10" alt="events" src="events.svg" />,
  },
  {
    href: "/language",
    icon: <img className="h-10 w-10" alt="language" src="globe-hemisphere-west.svg" />,
  },
  {
    href: "/greeting",
    icon: <img className="h-10 w-10" alt="greeting" src="greeting.svg" />,
  },
  {
    href: "/chart",
    icon: <img className="h-10 w-10" alt="chart" src="chart-line.svg" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md hover:animate-bounce focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  return (
    <div className="top-0 navbar w-full">
      <div className="navbar-start  " style={{ zIndex: 2 }}>
        <HeaderMenuLinks />
      </div>
      <div className="navbar-end w-full " style={{ zIndex: 2 }}>
        <FaucetButton />
        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
};
