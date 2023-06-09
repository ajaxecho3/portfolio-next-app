import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=" text-gray-700 body-font z-50 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center  mb-4 md:mb-0">

          <span className="ml-3 text-xl tracking-tighter font-bold ">Bernard.</span>
          {/* <span className="ml-3 text-xl tracking-wider font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent ">Bernardino <br /> <span>Ochoa</span> </span> */}
        </Link>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/' className="mr-5 hover:text-gray-900 font-semibold">Projects</Link>
          <Link href='/' className="mr-5 hover:text-gray-900 font-semibold">About</Link>
          <Link href='/' className="mr-5 hover:text-gray-900 font-semibold">Experiences</Link>
          <Link href='/' className="mr-5 hover:text-gray-900 font-semibold">Contacts</Link>
        </nav> */}

      </div>

    </header>
  )
}

export default Header