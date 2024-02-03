import React from 'react'
import Card from './Card'

const PostView = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center h-10'>
                <h1 className='text-5xl font-bold border-b-2  max-sm:px-[5rem] px-[10rem] pb-5'>Posts</h1>
            </div>
            <div className='w-full mt-10 max-sm:-ml-4'>
             
                    <Card />
        
            </div>
        </div>
    )
}

export default PostView