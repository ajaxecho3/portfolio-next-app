"use client"

import { cn } from '@/lib/utils'
import { motion, stagger, useAnimate } from 'framer-motion'
import React, { useEffect } from 'react'

type Props = {
  words: string
  className?: string
  textClassName?: string
}

const TextGenerateEffect = ({ words, textClassName, className }: Props) => {

  const [scope, animate] = useAnimate()


  let wordsArray = words.split(" ")

  useEffect(() => {
    animate("span", {
      opacity: 1
    }, {
      duration: 2,
      delay: stagger(0.2)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current])


  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {
          wordsArray.map((word, idx) => {
            return (
              <motion.span key={word + idx} className={cn("dark:text-white text-black opacity-0", textClassName)}>
                {word} {" "}
              </motion.span>
            )
          })
        }
      </motion.div>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      <div className='mt-4'>
        <div className='dark:text-white text-black text-2xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  )
}

export default TextGenerateEffect 
