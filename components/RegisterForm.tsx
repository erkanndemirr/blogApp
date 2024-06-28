"use client";

import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router, { Router } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";

interface FormDataProps {
  nameSurname: string;
  username: string;
  password: string;
  email : string;
}

interface LoginDataProps {
  username: string;
  password: string;
}
const LoginForm = () => {
  const session = useSession();
  console.log(session);

  const [nameSurname, setNameSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<FormDataProps | null>(null);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormDataProps = {
      nameSurname: nameSurname,
      username: username,
      password: password,
      email : email
    };

    const loginData: LoginDataProps = {
      username: username,
      password: password,
    };


    try {
      const res = await axios.post("/api/register", {
        ...formData,
      });

      console.log(res);

      if (res?.status === 201) {
        await signIn("credentials", {
          ...loginData,
          redirect: false,
        });

        router.push("/register");
      }
    } catch (error) {
      console.log(error);
    }

    setData(formData);
  };

  useEffect(() => {
    if (password.trim() === "" || username.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [password, username]);

  if (session?.data?.user) {
    router.push("/register");
  }
  
  console.log(data);

  return (
    <section className="w-full flex items-center justify-between gap-10 px-40">
      <div className="flex flex-col items-start">
        <div>
          <p className="text-4xl font-bold mb-5">Hi  First of all, how about a name?</p>
          <p className="text-xl  mb-5 text-[#848484]">Dont forget you will interact with this name</p>
        </div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor=""  className="text-[#7d7d7d] mb-2 ml-1">Name Surname</label>
          <input id="handle" value={nameSurname} onChange={(e)=> setNameSurname(e.target.value)} type="text" className="mb-2 bg-[#f7f7f7] py-2 pl-5 pr-10 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john Carter" />
          <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Username</label>
          <label className="input-field inline-flex items-baseline border-none rounded-md bg-[#f7f7f7] py-2 pl-5 pr-10">
            <span className="flex-none text-[#7d7d7d] select-none text-base leading-none">ibloger.me/ </span>
            <div className="flex-1 leading-none">
              <input id="handle" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-[#f7f7f7] mb-2 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john" />
            </div>
          </label>
          <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Email</label>
          <input id="handle" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 bg-[#f7f7f7] py-2 pl-5 pr-20 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john Carter" />
          <div className="flex">
            <div className="flex flex-col w-full">
              <label htmlFor=""  className="text-[#7d7d7d] mb-2 ml-1">Password</label>
              <input id="handle" value={password} onChange={(e) =>setPassword(e.target.value)} type="password" className="mb-2 bg-[#f7f7f7] py-2 mr-2 pl-5 pr-4 text-base placeholder-blue  p-0 outline-none text-[#6c6c6c] ml-[2px] w-full" /></div>
          </div>
          <button type="submit" disabled={disabled} className=" px-[9.7rem] rounded-md mt-4 py-2 text-base font-medium  border bg-black text-white  cursor-pointer">Submit</button>
        </form>
        <div className="mt-5 text-[#595959]">or <Link href="/login">Log in</Link> </div>
      </div>
      <div className="w-20 h-20 bg-blue-900">

      </div>
    </section >
  );
};

export default LoginForm;
