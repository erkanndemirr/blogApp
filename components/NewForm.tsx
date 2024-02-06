'use client'
import axios from "axios";
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize';
import { FormData } from '@/types/blog';
const inputClass = 'w-full py-2 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent';

const NewForm = () => {  
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
      });
      const { data } = useSession();
      const router = useRouter();
    
      const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('api/posts', formData);
    
          if (response.status === 200) {
            router.push(`/blogs/${response.data.newPost.id}`);
          }
        } catch (error) {
          console.error(error);
        }
      };
    
        
    return (
        <div>

            <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit} >
                <div className="flex items-center justify-center w-full mb-5 ">
                    <label className=" bg-transparent hover:text-gray-950 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-[#cdcdcd34] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                            <svg className="w-8 h-8 mb-4 text-white dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-white dark:text-gray-400 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-white dark:text-gray-400 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <div className='mb-4'>
                    <input 
                   value={formData.title}
                   onChange={handleChange}
                    type="text" 
                    className={inputClass} 
                    placeholder='Başlık Gir' 
                    name='title' />
                </div>
                <div className='mb-4'>
                    <ReactTextareaAutosize minLength={5} 
                      value={formData.content}
                      onChange={handleChange}
                    name='content' 
                    className={inputClass} 
                    placeholder='İçerik Girin' />
                </div>
                <button type='submit' className='border border-[#626262] bg-transparent hover:bg-[#ffffff30] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'>Gönder</button>
            </form>
        </div>
    )
}

export default NewForm