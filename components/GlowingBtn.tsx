import React from "react";

type Props = {};

const GlowingBtn = (props: Props) => {
  return (
    <div className="group relative">
      <div className="animate-tilt absolute -inset-[0.010rem] rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-gray-700 px-7 py-4 leading-none">
        <span className="flex items-center space-x-5">
          <span className=" text-gray-100">Download CV</span>
        </span>
      </button>
    </div>
  );
};

export default GlowingBtn;
