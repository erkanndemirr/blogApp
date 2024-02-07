"use client"

import { FormData } from '@/types/blog'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Card = () => {

    const [posts, setPosts] = useState<FormData[]>([])
    
    useEffect(() => {
        const getAllPost = async () => {
            try {
                const res = await axios.get("/api/posts/all-post")
                console.log(res)
                setPosts(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllPost()
    })
    return (
        <div className='mx-10 max-sm:mr-5'>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 ">

                {posts.map((post) => (
                    <li className="mb-10 ms-4 border rounded-lg p-2" key={post.id}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</p>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">{post.content}</p>
                        <Link href={`/${post.id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more </Link>
                    </li>
                ))}


            </ol>


        </div>

    )
}

export default Card