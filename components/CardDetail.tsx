"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FormData } from '@/types/blog';
const CardDetail = () => {
    const [data, setData] = useState<FormData>({
        title: "",
        content: "",
        published: false
    })

  const pathname = usePathname();
  console.log(pathname);
  const blogId = pathname.split("/").pop();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post("/api/posts/post-data", {
          postId: blogId,
        });
        setData(res.data.data)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [blogId]);

  console.log(data)
  return (
    <div className="mx-10 max-sm:mr-5 mt-10">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 h-full ">
        <li className="mb-10 ms-4 border rounded-lg p-2 h-full">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </p>
          <h3 className="text-xl font-semibold text-gray-900 ">
           {data.title}
          </h3>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          {data.content}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default CardDetail;
