import Link from "next/link";
import React, { useState } from "react";
import { Social } from "../types/Social";
import Icon from "./Icons";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className=" body-font text-text sticky top-0 z-50">
      <div className="container mx-auto flex flex-row flex-wrap items-center p-5">
        <Link
          href="/"
          className="title-font mb-4 flex items-center  font-medium md:mb-0"
          replace
        >
          <span className="ml-3 text-xl font-bold tracking-tighter ">
            Bernard.
          </span>
        </Link>
        <nav className="ml-auto flex flex-wrap items-center justify-center text-base">
          {socials.map((social) => {
            return (
              <Link
                key={social.name}
                href={social.url}
                className="hover:text-accentColor mr-5 !font-semibold"
                replace
              >
                <Icon icon={social.logo} width={20} height={20} />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
