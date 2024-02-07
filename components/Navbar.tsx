"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  return (
    <div className="flex justify-between items-center max-w-[87rem] mx-auto mt-4 max-sm:mx-5 ">
      <Link href="/" className="text-white text-2xl font-bold flex gap-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
      </Link>
      <ul className="flex space-x-4 items-center justify-center">
        <li>
          <Link href="/" className="text-white hover:underline">
            {" "}
            Blogs{" "}
          </Link>
        </li>

        {!session.data?.user?.email && (
          <li>
            <Link href="/login" className="text-white hover:underline">
              {" "}
              Login{" "}
            </Link>
          </li>
        )}

        {session.data?.user?.email && (
          <div className="flex items-center gap-2 text-white border py-1 px-2 rounded-lg border-white">
            <p> {session.data.user.email} </p>
            <li>
              <Link
                href="/newpost"
                className="bg-white flex items-center justify-center rounded-lg text-black py-1 px-2"
              >
                {" "}
                New Post{" "}
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
