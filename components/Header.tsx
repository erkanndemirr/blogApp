import React from 'react'
import {  Londrina_Shadow } from "next/font/google";


const londrina = Londrina_Shadow({
    weight: "400",
    subsets: ["latin"]
});
const Header = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-[90vh]'>
        <h1 className='text-5xl font-londrina '>Blog.</h1>
    </div>
  )
}

export default Header