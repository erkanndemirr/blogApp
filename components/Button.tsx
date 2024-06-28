import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Button = () => {

    const [status, setStatus] = useState(false);

    return (
        <>
        {status && (
            <div className="bg-slate-100 pl-2 pr-16 py-2 rounded-md ">
              <div className="dropdown-menu-item">
                Best Match
              </div>
              <div className="dropdown-menu-item">
                Highest Price
              </div>
              <Link href="/logout" className="dropdown-menu-item text-[#d47373]">
                Logout
              </Link>
            </div>
          )}
        <div className='flex items-center justify-center gap-5 max-sm:hidden'>
            <div className='flex items-start justify-center rounded-xl p-2 bg-[#48484824] gap-2'>
                <div className='h-12 w-12 bg-white rounded-xl flex items-center justify-center cursor-pointer' onClick={() => { setStatus(!status) }}>
                    <Image src="/settings2.svg" alt='settings' width={30} height={30} />
                </div>
                <Link href="" className='px-[30px] py-[12px] bg-[#353535] rounded-xl flex items-center justify-center gap-1 text-white text-lg'>Create Post <Image src="/plus.svg" alt='plus' width={25} height={25} /></Link>
               
            </div>
        </div>
        
        </>
        
    )
}

export default Button