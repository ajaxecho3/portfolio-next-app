import Link from "next/link";
import React from "react";
import { Social } from "../types/Social";
import Icon from "./Icons";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className=" body-font z-50 text-text">
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
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {socials.map((social) => {
            return (
              <Link
                key={social.name}
                href={social.url}
                className="mr-5 !font-semibold hover:text-accentColor"
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
