import Link from "next/link";
import React from "react";
import { Social } from "../types/Social";
import Icon from "./Icons";
import { ThemeSwitcher } from "./ui/ThemeSwitcher";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className=" body-font text-text fixed w-full top-0 z-50 bg-transparent">
      <div className="container mx-auto max-w-screen-2xl flex flex-row flex-wrap items-center p-5">
        <Link
          href="/"
          className="title-font mb-4 flex items-center  font-medium md:mb-0"
          replace
        >
          <span className="ml-3 text-2xl dark:text-white font-bold tracking-tighter ">
            Bernard.<span className=" text-red-700 text-lg"> * </span>
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
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
