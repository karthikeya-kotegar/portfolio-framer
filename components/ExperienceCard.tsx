import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Experience({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 
        flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#08264d] p-6 xl:mt-12 xl:p-4
        opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.3 }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src='youtube-logo.jpg'
                alt='company'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Software Developer</h4>

                <p className='font-bold text-2xl mt-1'>Youtube</p>

                <div className='flex space-x-2 my-2'>
                    {/* tech used */}
                    <img
                        className='w-10 h-10 rounded-full'
                        src='js-icon.gif'
                        alt=''
                    />
                    <img
                        className='w-10 h-10 rounded-full'
                        src='js-icon.gif'
                        alt=''
                    />
                    <img
                        className='w-10 h-10 rounded-full'
                        src='js-icon.gif'
                        alt=''
                    />
                </div>

                <p className='uppercase py-5 text-gray-300'>Started with...</p>

                <ul className='list-disc space-y-4 xl-5 text-lg'>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>

        </article>

    )
}