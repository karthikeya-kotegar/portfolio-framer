import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircle from './BackgroundCircle'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, helper] = useTypewriter({
        words: [`Hey! My Name's ${pageInfo.name}`, "I'm a Full Stack Developer", "Tech Enthusiast", "Constant Learner", "Loves Coding"],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img
                className='relative rounded-full h-96 w-96 mx-auto object-cover md:w-[500px] md:h-[500px]'
                src="Developer-activity-bro.png"
                // src={urlFor(pageInfo?.heroImage).url()}
                alt='karthikeya'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo.role}</h2>

                {/* typewriter */}
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