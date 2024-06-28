
import React from 'react'
import { Londrina_Shadow } from "next/font/google";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Navbar from "@/components/Navbar";
import Link from 'next/link';

const londrina = Londrina_Shadow({
  weight: "400",
  subsets: ["latin"]
});
const Header = () => {
  return (
    <header className='overflow-x-hidden'>
      {/* <nav className='absolute top-0 left-0 w-full'>
        <Navbar />
      </nav> */}

      <section className="flex flex-col  justify-center items-center h-[100vh] w-full pb-20 ">
  
          <Image src="/logoibloger.svg" alt='logo' width={200} height={200} />


        <h1 className='text-black text-center text-[4rem] font-bold max-sm:text-7xl  max-sm:mt-0 w-[50rem]'>Start Your Personal <span className='lock bg-gradient-to-r from-[#05D3AE] via-[#2E1EE4] to-[#990077] inline-block text-transparent bg-clip-text'>Blog </span>Share Your Thoughts</h1>
        {/* <div className='text-black text-2xl max-sm:text-lg max-sm:mt-5'>&quot;Colors of Life:<TypeAnimation sequence={[
          // Same substring at the start will only be typed out once, initially
          'Thoughts',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Experiences',
          1000,
          'Shared Stories',
          1000,

        ]}
          wrapper="span"
          speed={10}
          repeat={Infinity} />&quot;</div> */}
        <Image src="/hand1.svg" alt='hand1' width={450} height={450} className='hand1 absolute right-0 mb-2 ' />
        <Image src="/hand2.svg" alt='hand1' width={450} height={450} className='hand2 absolute left-0 mt-10' />
        <div className='text-2xl font-medium w-[50rem] text-center mt-2 text-[#7D7D7D]' >Start Your Personal Blog, Share Your Thoughts with the World and Write Your Own Story</div>
        <Link href="/login" className="flex max-w-sm rounded-3xl bg-gradient-to-tr from-[#05D3AE] via-[#2E1EE4] to-[#990077] p-0.5 shadow-lg mt-10">
          <button className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-3xl">Create Your First Blog Post</button>
        </Link>
        <Link href="/login" className='mt-2 text-lg'>Log in</Link>
      </section>
    </header>

  )
}

export default Header