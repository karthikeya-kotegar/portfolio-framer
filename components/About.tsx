import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl font-medium'>About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        //when page scrolled(viewed) then animate
        whileInView={{
          x: 0,
          opacity: 1
        }}
        // viewport={{
        //   once:true //animate only once
        // }}
        src='about-removebg.png'
        // src={urlFor(pageInfo?.profilePic).url()}
        alt='Software developer'
        className='mb-20 md:mb-0 flex-shrink-0 w-80 h-80 rounded-full object-cover md:rounded-lg md:w-96 md:h-96'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7f019]/90'>little</span> background</h4>
        <p className='text-base'>
          {pageInfo.backgroundInformation}
        </p>
      </div>

    </motion.div>
  )
}