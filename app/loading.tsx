import React from 'react'
import { Skeleton } from '../components/ui/skeleton'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  )
}

export default Loading