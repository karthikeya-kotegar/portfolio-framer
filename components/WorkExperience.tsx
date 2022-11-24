import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({ }: Props) {
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
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl font-medium'>
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 sanp-x snap-mandatory 
                scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7f019]/60 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-[#f7f019]/80'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}