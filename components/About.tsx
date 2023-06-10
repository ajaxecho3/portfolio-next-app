import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='mx-auto container pt-20 h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-center'>About Me</h1>
        <p className='text-center text-lg mt-5'>
          I am a full-stack developer with a passion for building beautiful and
          functional user interfaces. I am currently a student at the University
          of Toronto studying Computer Science and Mathematics. I am also a
          teaching assistant for the course CSC309: Programming on the Web.
        </p>
      </div>
    </section>
  )
}

export default About