import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (

        <div className="w-full pt-10 flex items-center justify-center mt-10 mb-2 h-auto">
            <div className=" w-full px-10 text-black flex flex-col">
                <div className="w-full text-7xl font-bold">
                    <h1 className="w-full md:w-2/3">How can I help you. Contact
                        me</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 text-gray-400 text-md">Hello i am Erkan Demir, I am progressing in the field of web development ui ux design and desktop software development</p>
                    <div className="w-44 pt-6 md:pt-0">
                        <Link href='/' className="bg-black justify-center text-xl text-center rounded-lg shadow px-10 py-3 flex items-center text-white">Send Mail</Link>
                    </div>
                </div>
                <div className="flex flex-col h-5 mb-5">
                    <div className="flex mt-12 mb-6 flex-row justify-center">


                        <div className="flex flex-row space-x-8 items-center justify-between">
                            <Link href='https://web.telegram.org/a/#5445826578'>
                                <Image src='/Telegram.svg' alt='logo' width={25} height={25} />
                            </Link>
                            <Link href='https://www.linkedin.com/in/erkan-demir-1a3469284/' >
                                <Image src='/LinkedIn.svg' alt='logo' width={25} height={25} />
                            </Link>
                            <Link href='https://twitter.com/erkanndmr_'>
                                <Image src='/x.svg' alt='logo' width={25} height={25} />
                            </Link>
                        </div>
                    </div>
                    <hr className="border-gray-600" />
                    <p className="w-full text-center my-6 text-gray-600 pb-5">Copyright © 2024 Erkan Demir</p>
                </div>
            </div>
        </div>
    )
}

export default Footer