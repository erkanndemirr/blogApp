'use client'
import React from 'react'
import { Londrina_Shadow } from "next/font/google";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const londrina = Londrina_Shadow({
  weight: "400",
  subsets: ["latin"]
});
const Header = () => {
  return (
    <div className="flex flex-col  justify-center items-center h-[100vh] w-full bg-center bg-[url('/2.jpg')] bg-no-repeat bg-cover pb-20">

      <div className='flex gap-2 text-white '>
        <p className=' text-[4rem]'>.</p>
        <p className=' pt-[2.7rem] text-[2rem] font-bold max-sm:text-2xl'> Erkan Demir </p>
        <p className='text-[4rem]'>.</p>
      </div>
      <h1 className='text-white text-[10rem] font-bold max-sm:text-7xl -mt-10'>&lt;Blog.&gt;</h1>
      <div  className='text-white text-2xl'>"Colors of Life: <TypeAnimation sequence={[
        // Same substring at the start will only be typed out once, initially
        'Thoughts',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Experiences',
        1000,
        'and Shared Stories!',
        1000,
    
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}/>"</div>
      
      
    </div>
  )
}

export default Header