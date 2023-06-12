/* eslint-disable @next/next/no-img-element */
import { getAbout } from '@/sanity/sanity.utils'
import React from 'react'
import Icon from './Icons'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'


const AboutPage = async () => {
  const { description, name, skills, experience, image, github, twitter, linkedin } = await getAbout()
  return (
    <section className='mx-auto container pt-20 min-h-screen h-full'>
      <div className='flex flex-col items-center '>
        <div className=' w-3/4 mx-auto bg-slate-50/80 py-5 px-5 rounded-xl'>
          <div className=' flex justify-between space-x-5 w-full'>
            <div className=' w-1/3 relative'>
              <div className=' h-96 w-full  relative' >
                <Image className='rounded-lg shadow-3xl' fill src={image} alt={name + ' photo'} priority />
              </div>
              <div className=' py-2 '>
                <h1 className='text-start text-3xl font-bold gradiantText'>{name}</h1>
                <p className=' text-xl font-semibold text-start gradiantText  '>Front-end Developer</p>
                <div className='flex flex-col justify-start items-start mt-2 space-y-2'>

                  <div className='grid grid-cols-7 gap-2'>
                    {
                      skills.map((skill) => (
                        <div key={skill._id} className='flex items-center space-x-3 w-full ' >
                          <Icon className=' w-8 h-8 rounded-xl p-1 bg-white shadow-xl hover:scale-150' icon={skill.logo} />
                        </div>
                      ))
                    }
                  </div>
                </div>



              </div>
            </div>
            <div className='w-3/4'>
              <div className=' flex flex-col space-y-3'>
                <PortableText value={description} />

                <div className='flex flex-col justify-start items-start mt-2 space-y-2'>
                  <p className=' text-xl font-extrabold  tracking-widest '>Experiences</p>
                  <ol className="border-l border-neutral-300 dark:border-neutral-500 w-full">
                    {
                      experience.map(({ name, _id, position, start, current, end, description, image }) => (
                        <li key={_id} className='w-full'>
                          <div className="flex-start flex items-center pt-3">
                            <div
                              className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-300">
                              {start} - {current ? 'Present' : end}
                            </p>
                          </div>
                          <div className="mb-6 ml-4 mt-2">
                            <div className='flex w-full justify-start items-start space-x-2'>
                              <div className=' flex justify-end'>
                                <div className='h-16 w-16 shadow-3xl rounded-full relative '>
                                  <Image className=' rounded-xl  aspect-square' fill src={image} alt={name + ' photo'} priority />
                                </div>
                              </div>
                              <div className=''>
                                <h4 className="mb-1.5 text-xl font-bold">{name}</h4>
                                <h4 className="mb-1.5 text-lg font-semibold">{position}</h4>
                              </div>

                            </div>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                              {description}
                            </p>
                          </div>
                        </li>
                      ))
                    }


                  </ol>
                </div>

              </div>
            </div>
          </div>


        </div>
        <div className=' flex  items-center justify-between w-3/4 mx-auto'>
          <div className='flex items-center space-x-1'>
            <Link href={github} className='flex items-center  mt-2 hover:scale-110 hover:underline' replace>
              <Icon className=' w-8 h-8 p-1 ' icon='ri:github-fill' />
            </Link>
            <Link href={linkedin} className='flex items-center  mt-2 hover:scale-110 hover:underline' replace>
              <Icon className=' w-8 h-8 p-1 ' icon='ri:linkedin-fill' />
            </Link>
            <Link href={twitter} className='flex items-center  mt-2 hover:scale-110 hover:underline' replace>
              <Icon className=' w-8 h-8 p-1 ' icon='ri:twitter-fill' />
            </Link>
          </div>
          <div className='flex items-center space-x-1'>
            <Link href={'https://www.fiverr.com/s/qwoqo9'} className='flex items-center  mt-2 hover:scale-110 hover:underline' replace>
              <Icon className=' w-12 h-12 p-1 ' icon='simple-icons:fiverr' />
            </Link>
            <Link href={'https://www.upwork.com/freelancers/bernardinoo'} className='flex items-center  mt-2 hover:scale-110 hover:underline' replace>
              <Icon className=' w-12 h-12 p-1 ' icon='logos:upwork' />
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage