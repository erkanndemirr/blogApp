'use client'

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react'

interface LoginDataProps{
  email: string,
  password : string
}

const LoginForm = () => {
    const session = useSession();
    console.log(session);
  
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState<LoginDataProps | null>(null);
    const [visible,SetVisible] = useState(false);
    const router = useRouter();
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      const loginData: LoginDataProps = {
        email: email,
        password: password,
      };
      
      signIn("credentials",{
        ...loginData,
        redirect:false,
      })
      .then((res) =>{
        console.log(res);
        if(res?.status === 200){
          router.push("/erkan");
        }
        if(res?.status === 401){
          SetVisible(true)
        }    
        setData(loginData);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(() => {
      if (session?.data?.user) {
        router.push("/erkan");
      }
    }, [session, router]);
  
    useEffect(() => {
      if (password.trim() === "" || email.trim() === "") {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }, [password, email]);
  
    console.log(data);
    return (
      <section className="w-full flex items-center justify-between gap-10 px-40">
        <div className="flex flex-col items-start">
          <div>
            <p className="text-4xl font-bold mb-5">Welcome , please Login</p>
          </div>
          <form action="" onSubmit={handleSubmit} className="flex flex-col w-full">
            <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Email</label>
            <input id="handle" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 bg-[#f7f7f7] py-2 pl-5 pr-20 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john Carter" />
            <div className="flex w-full">
              <div className="flex flex-col w-full">
                <label htmlFor=""  className="text-[#7d7d7d] mb-2 ml-1">Password</label>
                <input id="handle" value={password} onChange={(e) =>setPassword(e.target.value)} type="password" className="w-full mb-2 bg-[#f7f7f7] py-2 mr-2 pl-5 pr-4 text-base placeholder-blue  p-0 outline-none text-[#6c6c6c] ml-[2px]" /></div>
            </div>
            <button type="submit" disabled={disabled} className=" px-[9.7rem] rounded-md mt-4 py-2 text-base font-medium  border bg-black text-white  cursor-pointer">Submit</button>
          </form>
          <div className='text-center w-full text-[#f46969] font-semibold mt-2'>
          { visible? 
          <div> Email Or Password Incorrect </div>
          : visible}
          </div>
          
          <Link href="/register" className="mt-5 text-[#595959]">or Register</Link>
        </div>
        <div className="w-20 h-20 bg-blue-900">
  
        </div>
      </section >
    );
  };

export default LoginForm