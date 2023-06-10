'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  url: string
  icon: string
}

const ProjectLink = ({ url, icon }: Props) => {
  return (
    <Link href={url}>
      <Icon className='' icon={icon} width={25} height={25} />
    </Link>
  )
}

export default ProjectLink