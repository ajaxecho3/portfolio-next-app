'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
type Props = {}

//project card  component
const ProjectCard = ({ title, description, img, link }: Partial<{ title: string, description: string, img: string, link: string }>) => {
  return (
    <div className="w-[450px]">
      <div className='w-full flex justify-between py-1 px-[2px]'>
        <h2 className='font-semibold  '>Gym App </h2>
        <div className='flex justify-between space-x-2'>
          <button>
            <Icon icon={'devicon:github'} width={20} height={20} />
          </button>
          <button className='border border-gray-900 text-xs  font-semibold rounded-xl px-1'>Open</button>

        </div>
      </div>
      <div className="bg-gray-100 rounded-xl relative shadow-xl">
        <img className=" h-56 rounded w-full object-fill " src={img} alt="content" />
      </div>
      <div className='w-full py-1 px-[2px]'>
        <div className='flex space-x-2 justify-between w-full'>

          <div className=' flex justify-start w-1/4 uppercase font-semibold space-x-2'>
            <Icon icon={'vscode-icons:file-type-typescript'} width={20} height={20} />
            <Icon icon={'logos:react'} width={20} height={20} />
            <Icon icon={'devicon:tailwindcss'} width={20} height={20} />
            <Icon icon={'devicon:nextjs'} width={20} height={20} />

          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = (props: Props) => {
  return (
    <section id='projects-section' className=' relative h-full lg:h-screen lg:mx-auto lg:w-3/4 w-full  px-4  items-center'>

      <div className='relative lg:absolute lg:left-[50%] lg:top-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%] flex-col lg:flex-row-reverse flex w-full '>
        <div className='w-full lg:w-1/2 '>
          <p className='text-1xl lg:text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-500 via-purple-500 to-blue-700'> &lt;Component&gt;</p>
          <h1 className='text-3xl lg:text-9xl font-bold uppercase text-gray-400'>PRO<span className='gradiantText'>.JSX</span></h1>
          <p className='text-1xl lg:text-2xl font-bold text-right text-gray-400'> &lt;/Component&gt;</p>
        </div>
        <div className='w-full lg:w-1/2  px-4'>
          <p className=' text-sm tracking-tight'>
            Welcome to my project page! Here, you&#39;ll find a collection of some of the exciting projects I&#39;ve worked on as a React developer. Each project represents a unique challenge and showcases my skills in creating dynamic and interactive web applications. From designing intuitive user interfaces to implementing complex functionality, I&#39;ve put my expertise to work to deliver exceptional results. With a strong focus on clean code, scalability, and performance, I strive to create applications that provide a seamless user experience. Feel free to explore the projects listed below and get a glimpse into my capabilities as a React developer.
          </p>
        </div>


      </div>
      <div className='relative lg:absolute flex flex-col lg:flex-row lg:top-5 justify-center lg:justify-start w-full lg:space-x-4 lg:py-2  '>
        <ProjectCard title='hello' description='https://picsum.photos/200' img='https://picsum.photos/200' />
        <ProjectCard title='hello' description='https://picsum.photos/200' img='https://picsum.photos/201' />
        <ProjectCard title='hello' description='https://picsum.photos/200' img='https://picsum.photos/202' />


      </div>

      <div className='relative lg:absolute flex flex-col lg:flex-row lg:bottom-7 justify-center lg:justify-end w-full lg:space-x-4 lg:py-2  '>
        <ProjectCard title='hello' description='https://picsum.photos/200' img='https://picsum.photos/203' />
        <ProjectCard title='hello' description='https://picsum.photos/200' img='https://picsum.photos/204' />
        <ProjectCard title='hello' description='https://picsum.photos/200' img='https://picsum.photos/205' />
      </div>
      <div className='w-full flex justify-center items-center lg:absolute lg:bottom-5 '>
        <Link href={'/projects'} className='font-bold border border-gray-900 rounded-full tracking-tighter h-15 px-4'>More Projects</Link>
      </div>
    </section>
  )
}

export default Projects