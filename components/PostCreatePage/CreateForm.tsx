'use client'

import React, { FormEvent, useCallback, useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useSession } from 'next-auth/react';
import axios from 'axios';

interface FormDataProps{
    title: string;
    content:string;
    published : boolean;
}
const CreateForm = () => {
    const session = useSession();
    console.log(session);

    const [title, SetTitle] = useState("");
    const [content, SetContent] = useState("");
    const [published, SetPublished] = useState(true);
    const [data, SetData] = useState<FormDataProps | null>(null);
    
    const handleSubmit = async (e:FormEvent) =>{
        e.preventDefault();

        const formData: FormDataProps = {
            title : title,
            content : content,
            published : published

        }

        try {
            const res = await axios.post("/api/post",{
                ...formData,
            })

            console.log(res);

        } catch (error) {
            console.log(error)
        }

    
        SetData(formData);
    }

    console.log(data)
    return (
        <form className='flex flex-col gap-2 w-1/2 p-3 'onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Blog Header</label>
                <input type="text" className='border' value={title} onChange={(e) => SetTitle(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="Content">Content</label>
                <SimpleMDE value={content} onChange={(value) => SetContent(value)} />
            </div>
            <input type="checkbox" checked={published} onChange={(e) => SetPublished(e.target.checked)}/>
            <input type="submit" value="Kaydet" className='border px-5 py-2 hover:bg-slate-300' />
        </form>
    )
}

export default CreateForm