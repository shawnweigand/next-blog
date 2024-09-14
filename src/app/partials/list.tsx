'use client';
import Link from "next/link";
import { useEffect, useState } from "react"

export default function List({ blogs }: { blogs: Array<any> }) {

    function formatDate(timestamp: string) {
        const date = new Date(timestamp)

        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }

        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
        }
        
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

        return { date: formattedDate, time: formattedTime }
    }

    return (
        <div className="mt-24">
            <div className="text-black">
                {blogs.map((blog: any, index: number) => (
                    <div key={index} className="grid grid-cols-4">
                        <div className="text-black text-right col-start-1 col-span-1 mb-24 mt-4">
                            <h1>{formatDate(blog.createdAt).date}</h1>
                            <h1>{formatDate(blog.createdAt).time}</h1>
                        </div>
                        <div className="justify-self-center col-start-2 col-span-1 mt-4">
                            <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
                            {index < blogs.length - 1 && <div className="ml-2 h-full w-1 bg-indigo-300"></div>}
                        </div>
                        <Link href={`/blogs/${encodeURIComponent(blog.id)}`} className="col-start-3 col-span-2 rounded mb-24 p-4 hover:bg-gray-100 hover:rounded-lg">
                            <h2 className="text-lg font-bold pb-2">{blog.title}</h2>
                            <p className="pb-2">{blog.content.substring(0,255)}...</p>
                            <p className="text-indigo-600 pb-2">{'Read More >'}</p>
                            <p className="italic">{blog.first_name} {blog.last_name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}