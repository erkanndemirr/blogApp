import Image from 'next/image'
import React from 'react'
import UserPost from './UserPost'

const User = () => {
    return (
        <section className='w-full h-[100vh] flex items-start justify-center '>
            <div className='w-full flex items-start max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-5  justify-between px-14 max-sm:px-5 mt-10'>
                <div className='flex flex-col items-start max-sm:my-12 max-sm:w-full w-[29rem]'>
                    <Image src="/profile.png" alt='profile' width={250} height={250} className=' rounded-full mb-2' />
                    <h1 className='text-5xl font-bold'>Erkan Demir</h1>
                    <p className='text-2xl font-medium text-[#585858] my-2'>Software Engineer</p>
                    <p className='font-medium text-[#6a6a6a]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit illum facilis magni quas similique dicta dolores consectetur optio modi perspiciatis.</p>
                    <div className='flex items-center justify-center mt-5 gap-5'>
                        <Image src="/x.png" alt='icon' width={30} height={30}/>
                        <Image src="/x.png" alt='icon' width={30} height={30}/>
                        <Image src="/x.png" alt='icon' width={30} height={30}/>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-y-5 gap-x-5 md:grid-cols-1 lg:grid-cols-2 px-10 max-sm:px-0'>
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                    <UserPost />
                </div>
            </div>
        </section>
    )
}

export default User