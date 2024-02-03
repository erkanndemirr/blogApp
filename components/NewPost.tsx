import React from 'react'
import NewForm from './NewForm'
import Navbar from '@/components/Navbar'
const NewPost = () => {
  return (
    <section>
      <div  className='absolute top-0 left-0 w-full' >
      <Navbar/>
      </div>
      <div className="w-full h-screen  bg-center bg-[url('/1.jpg')] bg-no-repeat bg-cover pt-[10rem]"><NewForm/></div>
      
    </section>
      
  
  )
}

export default NewPost