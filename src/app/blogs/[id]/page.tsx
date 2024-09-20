'use client';
import { use, useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
    title: string;
    first_name: string;
    last_name: string;
    createdAt: string; // Assuming createdAt is a string, adjust if it's a Date object
    content: string;
}

export default function Blog({ params }: { params: { id: string } }) {
    
    const [blog, setBlog] = useState<Blog | null>(null);

    async function fetchBlog(id: string) {
        const response = await fetch(`/api/blogs/${id}`)
        const data = await response.json()
        setBlog(data)
    }

    useEffect(() => {
        fetchBlog(params.id)
    }, [])

    function formatDate(timestamp: string) {
        const date = new Date(timestamp)

        const dateOptions: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }

        const timeOptions: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
        }
        
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

        return { date: formattedDate, time: formattedTime }
    }

    async function onClickHandler() {
        const response = await fetch(`/api/blogs/${params.id}`, {
            method: 'DELETE'
        })
        if (response.status !== 200) {
            console.log('Error deleting blog')
        }
    }

    console.log('Blog: ', blog)

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="grid place-items-center m-48 space-y-4">
                <h1 className="text-indigo-600 text-3xl text-center">{blog?.title}</h1>
                <p className="text-gray-500 text-center">By {blog?.first_name} {blog?.last_name}</p>
                <p className="text-gray-500 text-center italic">{formatDate(blog?.createdAt).date} at {formatDate(blog?.createdAt).time}</p>  
                <p className="text-black py-16">{blog?.content}</p>
                <Link href={'/'} className="w-32 py-2 px-6 text-white text-center bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Back</Link>
                <a href={'/'} className="w-32 py-2 px-6 text-white text-center bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={onClickHandler}>Delete</a>
            </div>
        </div>
    )
}