import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
    const projects: any = [1, 2, 3, 4, 5]

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
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl font-medium'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
                scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7f019]/60 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-[#f7f019]/80'>
                {/* Each projects */}
                {
                    projects.map((project: any, i: number) => {
                        return (
                            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y5 items-center justify-center p-20 md:p-44 h-screen' key={i}>
                                <motion.img
                                    initial={{
                                        y: -300,
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: 1.2
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    src='projects-removebg.png'
                                    alt=''
                                />
                                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='text-4xl font-semibold text-center'>
                                        <span className='underline decoration-[#f7f019]/90'>Case Study {i + 1} of {projects.length}:</span> New Idea</h4>

                                    <p className='text-lg text-center md:text-left'>
                                        The point of using Lorem Ipsum is that it has a more-or-less
                                        normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7f019]/20 left-0 h-[500px] -skew-y-12 border border-[#bfb308]/20'>

            </div>
        </motion.div>
    )
}