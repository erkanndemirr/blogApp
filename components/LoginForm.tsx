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
    <section className="py-6  bg-[rgba(218,218,219,255)]">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
        <div className=" h-full py-6 md:py-0 md:px-6 ">
          <h1 className="text-4xl font-bold text-center text-[#3b3b3b]">
            Touch the Future
          </h1>
          <Image src="/02.gif" alt="Gif" width={700} height={700} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center py-6 space-y-6 md:py-0 md:px-6 border-[#3b3b3b] "
        >
          <label className="block">
            <span className="mb-3 text-xl text-[#3b3b3b] font-semibold">
              Username{" "}
            </span>
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Kullanıcı Adı Giriniz"
              className="mt-2 bg-[rgba(218,218,219,255)] block w-full rounded-md shadow-sm focus:ring focus:ring-offset-2  focus:ring-blue-300  py-2  outline-blue-500 transition-all px-1"
              required
            />
          </label>
          <label className="block">
            <span className="mb-3 text-xl text-[#3b3b3b] font-semibold">
              Password
            </span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre Giriniz"
              className="mt-2 bg-[rgba(218,218,219,255)] block w-full rounded-md shadow-sm focus:ring focus:ring-offset-2  focus:ring-blue-300  py-2  outline-blue-500 transition-all px-1"
            />
          </label>

          <button
            type="submit"
            disabled={disabled}
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri focus:ri hover:ri border border-[#3b3b3b] cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
