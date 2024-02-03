import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        
            <div className='flex justify-between items-center max-w-[87rem] mx-auto mt-4 max-sm:mx-5 '>
                <Link href="/" className='text-white text-2xl font-bold flex gap-2'>

                    <Image src='/logo.svg' alt='logo' width={30} height={30} />

                </Link>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href='/' className='text-white hover:underline'> Blogs </Link>
                    </li>

                    <li>
                        <Link href='/login' className='text-white hover:underline'> Login </Link>
                    </li>


                </ul>
            </div>
      

    )
}

export default Navbar