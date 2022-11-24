import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {}

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
};



export default function ContactMe({ }: Props) {
    // React Hook Form package
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        console.log(formData)
        window.location.href = `mailto:karthikeyakotegar@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}. [${formData.email}]`
         
    }
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl font-medium'>
                Contact
            </h3>

            <div className='fles flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.
                    <span className='underline decoration-[#f7f019]/90 animate-pulse'> Let's Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7f019] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 - 9611063929</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7f019] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>karthikeyakotegar@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7f019] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Bengaluru, India</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register("name")} placeholder="Name" className='contactInput' type="text" />
                        <input {...register("email")} placeholder="Email" className='contactInput' type="email" />
                    </div>

                    <input {...register("subject")} placeholder="Subject" className='contactInput' type="text" />

                    <textarea {...register("message")} placeholder="Message" className='contactInput' />

                    <button type='submit' className='text-xl bg-[#f7f019]/80 py-5 px-10 rounded-sm text-black font-bold hover:bg-[#f7f019]'>Submit</button>
                </form>

            </div>

        </div>
    )
}