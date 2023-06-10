import React from 'react'

type Props = {}

const GlowingBtn = (props: Props) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-[0.010rem] bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative px-7 py-4 bg-gray-700 rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span className="flex items-center space-x-5">

          <span className=" text-gray-100">Download CV</span>
        </span>
      </button>
    </div>
  )
}

export default GlowingBtn