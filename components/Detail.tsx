import React from 'react'
import CardDetail from './CardDetail'
import Navbar from './Navbar'

const Detail = () => {
  return (
    <section>
      <div className='absolute top-0 left-0 w-full' >
        <Navbar />
      </div>
      <div className="w-full h-[100vh]  bg-center bg-[url('/id.jpg')] bg-no-repeat bg-cover flex justify-center items-center flex-col ">
        <h2 className='text-[6rem] max-md:text-[4rem] max-sm:text-[3.1rem]  text-white font-bold -my-5'>&lt; Post Detail &gt;</h2>
        <div className='absolute  bottom-[3rem] border-2 rounded-full border-white p-5'>
          <svg className="animate-bounce w-12 h-12 max-sm:w-6 max-sm:h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <CardDetail />
    </section>
  )
}

export default Detail