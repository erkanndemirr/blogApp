import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardDetail = () => {
    return (
        <div className='mx-10 max-sm:mr-5 mt-10'>

            <ol className="relative border-s border-gray-200 dark:border-gray-700 h-full ">
                <li className="mb-10 ms-4 border rounded-lg p-2 h-full">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</p>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore in amet dolor beatae necessitatibus hic aperiam eaque non repellendus corrupti, ipsum natus enim perferendis quas doloremque numquam, animi modi?</p>
                
                </li>
            
            </ol>


        </div>

    )
}

export default CardDetail