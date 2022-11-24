import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale :[1,2,2,3,1],
                opacity: [0.1, 0.2, 0.4, 0.5, 0.1, 1.0],
                borderRadius:["20%", "20%", "50%", "50%", "20%"]
            }}
            transition={{
                duration: 3
            }}
            className='relative flex justify-center items-center'>
            <div className='absolute border border-[#d4c608] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
            <div className='absolute border border-[#08d408] rounded-full w-[300px] h-[300px] mt-52 animate-ping' />
            <div className='absolute border border-[#0827d4] rounded-full w-[500px] h-[500px] mt-52 animate-ping' />
            <div className='absolute border border-[#bc08d4] rounded-full opacity-10 w-[650px] h-[650px] mt-80' />
            <div className='absolute border border-[#eeeed9] rounded-full opacity-10 w-[500px] h-[500px] mt-80' />

        </motion.div>
    )
}