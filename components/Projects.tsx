/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Link from 'next/link';
import { Project } from '../types/Project';
import Icon from './Icons';
import { Button } from './ui/button';
type Props = {
  featuredProject: Project[]

}

//project card  component
export const ProjectCard = ({ name, image, link, tags, github, description }: Project) => {
  return (
    <div className="w-[450px]">
      <div className='w-full flex justify-between py-1 px-[2px]'>
        <h2 className='font-semibold  '>{name} </h2>
        <div className='flex justify-between space-x-2'>
          <Link href={github}>
            <Icon icon={'devicon:github'} width={20} height={20} />
          </Link>
          <Link className='border border-gray-900 text-xs  font-semibold rounded-xl px-1 py-1' href={link}>Open</Link>

        </div>
      </div>
      <div className="bg-gray-100 rounded-xl relative shadow-xl">
        <img className=" h-56 rounded w-full object-fill " src={image} alt="content" />
      </div>
      <div className='w-full py-1 px-[2px]'>
        <div className='flex space-x-2 justify-between w-full'>

          <div className=' flex justify-start w-1/4 uppercase font-semibold space-x-2'>
            {
              tags.map((tag) => (
                <Icon key={tag._id} icon={tag.logo} width={20} height={20} name={tag.name} />
              ))
            }
          </div>
        </div>
      </div>
      {
        description && <p>{description}</p>
      }
    </div>
  )
}

const Projects = ({ featuredProject }: Props) => {
  return (
    <section id='projects-section' className=' relative h-full lg:h-screen lg:mx-auto lg:w-3/4 w-full px-4 items-center'>

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
        {
          featuredProject.filter((_, index) => index % 2).map((project) => (
            <ProjectCard key={project._id} name={project.name} image={project.image} tags={project.tags} link={project.link} github={project.github} />
          ))
        }
      </div>

      <div className='relative lg:absolute flex flex-col lg:flex-row lg:bottom-8 justify-center lg:justify-end w-full lg:space-x-4 lg:py-2  '>
        {
          featuredProject.filter((_, index) => !(index % 2)).map((project) => (
            <ProjectCard key={project._id} name={project.name} image={project.image} tags={project.tags} link={project.link} github={project.github} />
          ))
        }
      </div>
      <div className='w-full flex justify-center items-center lg:absolute lg:bottom-0 '>
        <Button variant={'outline'} className='font-bold border border-gray-900 rounded-full tracking-tighter h-15 px-4' asChild>
          <Link href={'/projects'} >More Projects</Link>
        </Button>
      </div>

    </section>
  )
}

export default Projects