import Image from 'next/image'
import React from 'react'

const UserPost = () => {
    return (
        <div className='w-[20rem] max-sm:w-full p-4 bg-[#fafafa] border flex flex-col items-start rounded-md'>
            <div className='relative w-full h-40'>
                <Image src="/tia.png" alt='blog-image' layout="fill" className='rounded-lg' />
            </div>
            <div className='mt-2 rounded-b-lg '>
                    <div className='font-bold text-2xl mb-2'>Buraya Başlık Gelir</div>
                    <div className='text-lg text-[#565656] mb-2 line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae...</div>
                    <div className='flex items-center'>               
                        <div className='flex items-center justify-center font-medium gap-2'>
                            <p className='text-[#636363]'>23.03.2024</p>
                            <div className='px-2 py-[2px] border text-xs rounded-md bg-[#d6e6f9] text-[#88aeff]'>Blockchain</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default UserPost