import Image from 'next/image'
import React from 'react'

const Author = () => {
    return (
        <div className='relative flex w-full justify-center items-center px-5 mt-10'>
            <div className="flex-1 h-px bg-[#c5c5c5]"></div>
            <div className='flex items-center justify-center w-[15rem] flex-col after:'>
                <Image src="/profile.png" alt='profile' width={70} height={70} className='rounded-full' />
                <h1 className='text-xl font-bold mt-1'>Erkan Demir</h1>
                <p className='text-base font-medium text-[#585858] mt-1'>Software Engineer</p>
            </div>
            <div className="flex-1 h-px bg-[#c5c5c5]"></div>
        </div>
    )
}

export default Author