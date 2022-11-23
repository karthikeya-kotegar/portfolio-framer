import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

export default function Hero({ }: Props) {
    const [text, helper] = useTypewriter({
        words: ["Hey! My Name's Karthikeya", "I'm a Full Stack Developer", "Tech Enthusiast", "Constant Learner", "Loves Coding"],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img
                className='relative rounded-full h-80 w-80 mx-auto object-cover md:w-96 md:h-96'
                src="Developer-activity-bro.png"
                alt='karthikeya'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>

                <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
                    <span className='mr-2'>{text}</span>
                    <Cursor cursorColor='yellow' />
                </h1>

                <div className='pt-5'>
                    <Link href={'#about'}>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href={'#experience'}>
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href={'#skills'}>
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href={'#projects'}>
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>

            </div>

        </div>
    )
}