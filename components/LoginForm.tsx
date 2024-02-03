import Image from 'next/image'
import React from 'react'

const LoginForm = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50 bg-[rgba(218,218,219,255)]">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
                <div className=" h-full py-6 md:py-0 md:px-6 ">
                    <h1 className="text-4xl font-bold text-center text-[#3b3b3b]">Touch the Future</h1>
                    <Image src='/02.gif' alt='Gif' width={700} height={700}/>
                </div>
                <form className="flex flex-col justify-center py-6 space-y-6 md:py-0 md:px-6 border-[#3b3b3b] ">
                    <label className="block">
                        <span className="mb-3 text-xl text-[#3b3b3b] font-semibold">Username </span>
                        <input type="text" placeholder="Kullanıcı Adı Giriniz" className="mt-2 bg-[rgba(218,218,219,255)] block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-2 " />
                    </label>
                    <label className="block">
                        <span className="mb-3 text-xl text-[#3b3b3b] font-semibold">Password</span>
                        <input type="email" placeholder="Şifre Giriniz" className="mt-2 bg-[rgba(218,218,219,255)] block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-2" />
                    </label>
                   
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri border border-[#3b3b3b] ">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default LoginForm