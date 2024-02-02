import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-transparent border shadow-md p-4'>
    <nav className='flex justify-between items-center max-w-4xl mx-auto'>
        <Link href="" className='text-black text-2xl font-bold flex gap-2'>

            <Image src='/logo.svg' alt='logo' width={30} height={30} />
            Erkan Demir

        </Link>
        <ul className='flex space-x-4'>
            <li>
                <Link href='/blogs' className='text-black hover:underline'> Blogs </Link>
            </li>
       
                <li>
                    <Link href='/api/auth/signin' className='text-black hover:underline'> Login </Link>
                </li>
        

        </ul>
    </nav>
</header>
  )
}

export default Navbar