"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

interface FormDataProps {
  username: string;
  password: string;
}
const LoginForm = () => {
  const router = useRouter();
  const session = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<FormDataProps | null>(null);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormDataProps = {
      username: username,
      password: password,
    };

    try {
      const res = await signIn("credentials", {
        ...formData,
        redirect: false,
      });

      console.log(res);

      if (res?.status === 200) {
        router.push("/newpost");
      }
    } catch (error) {
      console.log(error);
    }

    setData(formData);
  };

  useEffect(() => {
    if (session?.data?.user) {
      router.push("/newpost");
    }
  }, [session, router]);

  useEffect(() => {
    if (password.trim() === "" || username.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [password, username]);

  console.log(data);

  return (
    <section className="w-full flex items-center justify-between gap-10 px-40">
      <div className="flex flex-col items-start">
        <div>
          <p className="text-4xl font-bold mb-5">Hi  First of all, how about a name?</p>
          <p className="text-xl  mb-5 text-[#848484]">Dont forget you will interact with this name</p>
        </div>
        <form action="" className="flex flex-col">
        <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Name Surname</label>
        <input id="handle" type="text" className="mb-2 bg-[#f7f7f7] py-2 pl-5 pr-10 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john Carter" />
        <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Username</label>
          <label className="input-field inline-flex items-baseline border-none rounded-md bg-[#f7f7f7] py-2 pl-5 pr-10">
            <span className="flex-none text-[#7d7d7d] select-none text-base leading-none">ibloger.me/ </span>
            <div className="flex-1 leading-none">
              <input id="handle" type="text" className="bg-[#f7f7f7] mb-2 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john" />
            </div>
          </label>
          <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Email</label>
        <input id="handle" type="text" className="mb-2 bg-[#f7f7f7] py-2 pl-5 pr-20 text-base placeholder-blue w-full p-0 outline-none text-[#6c6c6c] ml-[2px]" name="handle" placeholder="john Carter" />
       <div className="flex">
        <div className="flex flex-col"> 
          <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Password</label>
        <input id="handle" type="password" className="mb-2 bg-[#f7f7f7] py-2 mr-2 pl-5 pr-4 text-base placeholder-blue  p-0 outline-none text-[#6c6c6c] ml-[2px]"  /></div>
        <div className="flex flex-col">
        <label htmlFor="" className="text-[#7d7d7d] mb-2 ml-1">Password Again</label>
        <input id="handle" type="password" className="mb-2 bg-[#f7f7f7] py-2 pl-5 pr-4 text-base placeholder-blue  p-0 outline-none text-[#6c6c6c] ml-[2px]"  />
        </div>
       </div>
          <button type="submit" disabled={disabled} className=" px-[9.7rem] rounded-md mt-4 py-2 text-base font-medium  border bg-black text-white  cursor-pointer">Submit</button>
        </form>
        <div className="mt-5 text-[#595959]">or Log in</div>
      </div>
      <div className="w-20 h-20 bg-blue-900">

      </div>
    </section >
  );
};

export default LoginForm;
