'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import UserPost from '../UserPost'
import Button from '../Button'

const User = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className='w-full h-[100vh] flex items-start justify-center '>
            <div className='w-full flex items-start max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-5  justify-between px-14 max-sm:px-5 mt-10'>
                <div className='left-sidebar flex  py-2 flex-col items-start justify-between max-sm:my-12 max-sm:w-full w-[29rem]'>
                    <div className='flex flex-col items-start justify-center'>
                        <Image src="/profile.png" alt='profile' width={250} height={250} className=' rounded-full mb-2' />
                        <h1 className='text-5xl font-bold'>Erkan Demir</h1>
                        <p className='text-2xl font-medium text-[#585858] my-2'>Software Engineer</p>
                        <p className='font-medium text-[#6a6a6a]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit illum facilis magni quas similique dicta dolores consectetur optio modi perspiciatis.</p>

                    </div>
           
                    <Button/>
                </div>

                <div className='flex flex-col items-center justify-center'>

                    <div className='grid grid-cols-1 gap-y-5 gap-x-5 md:grid-cols-1 lg:grid-cols-2 px-10 max-sm:px-0'>
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <div className='flex items-center justify-center gap-5 sm:hidden mb-5'>
                            <Link href="/login" className='flex items-center justify-center gap-2 border px-4 py-1 text-xl rounded-lg  font-normal hover:text-[#434343] border-[#aeaeae]'>
                                <Image src="/blacklogo.svg" alt='logoblack' height={15} width={15} />
                                Create Blog</Link>
                            <Link href="">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default User