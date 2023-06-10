import Link from 'next/link'
import React from 'react'
import { Social } from '../types/Social'
import Icon from './Icons'

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
  return (
    <header className=" text-gray-700 body-font z-50 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center  mb-4 md:mb-0" replace>
          <span className="ml-3 text-xl tracking-tighter font-bold ">Bernard.</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

          {
            socials.map((social) => {
              return (
                <Link key={social.name} href={social.url} className="mr-5 hover:text-gray-900 font-semibold" replace>
                  <Icon icon={social.logo} width={20} height={20} />
                </Link>
              )
            })
          }

        </nav>

      </div>

    </header>
  )
}

export default Header