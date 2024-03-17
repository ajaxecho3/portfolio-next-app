import { Montserrat } from "next/font/google";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const montserrat = Montserrat({
  subsets: ["latin-ext"],
});
const layout = ({ children }: Props) => {
  return (
    <main
      className={` ${montserrat.className} h-full  min-h-screen dark:text-white  dark:bg-gray-900  py-16`}
    >
      {children}
    </main>
  );
};

export default layout;
