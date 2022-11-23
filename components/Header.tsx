import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>

                {/* Social Icons */}
                <SocialIcon url="https://youtube.com/"
                    fgColor='gray'
                    bgColor='transparent'
                />

                <SocialIcon url="https://youtube.com/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon url="https://youtube.com/"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5 
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    className='cursor-pointer'
                />

                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </motion.div>
        </header>
    )
}