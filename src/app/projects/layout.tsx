

import { Montserrat } from 'next/font/google'
import React from 'react'

type Props = {
  children: React.ReactNode
}
const montserrat = Montserrat({
  subsets: ['latin-ext'],
})
const layout = ({ children }: Props) => {
  return (
    <main className={` ${montserrat.className} bg-[#E4E4DE]  min-h-screen h-full  py-2`}>{children}</main>
  )
}

export default layout