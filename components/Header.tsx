import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials: Social[];
}

export default function Header({ socials }: Props) {
    return (
        <div className='sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center'>
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

                {socials.map((social) => {
                    console.log("socialsocial", social);
                    return (
                        <SocialIcon
                            key={social._id}
                            url={social.url}
                            fgColor='gray'
                            bgColor='transparent'
                        />
                    )

                })}

                {/* <SocialIcon url="https://youtube.com/"
                    fgColor='gray'
                    bgColor='transparent'
                /> */}


            </motion.div>

            <Link href='#contact'>
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
            </Link>
        </div>
    )
}