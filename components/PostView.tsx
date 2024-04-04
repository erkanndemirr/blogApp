import React from 'react'
import Card from './Card'

const PostView = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center h-10 mb-24'>

                <div className="relative ">
                    <div className="absolute -inset-5">
                        <div
                            className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-40 blur-3xl bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                        </div>
                    </div>
                    <div
                        className="relative z-10 items-center justify-center w-full px-20 py-10 text-7xl font-bold bg-gradient-to-r from-[#2E1EE4] to-[#990077] inline-block text-transparent bg-clip-text transition-all duration-200  border-2 border-transparent sm:w-auto rounded-xl  ">
                        Blogs
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 gap-y-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:px-28'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default PostView