'use client';
import { useEffect, useState } from "react"

export default function List(props: any) {

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
        <div className="mt-32">
            <div className="text-black" >
                {props.blogs.map((blog: any, index: number) => (
                    <div key={index} className="grid grid-cols-4">
                        <div className="text-black col-start-1 col-span-1 mb-24">
                            <h1>{formatDate(blog.createdAt).date}</h1>
                            <h1>{formatDate(blog.createdAt).time}</h1>
                        </div>
                        <div className="col-start-2 col-span-1">
                            <div className="w-5 h-5 ml-14 bg-indigo-600 rounded-full"></div>
                            {index < props.blogs.length - 1 && <div className="ml-16 h-full w-1 bg-indigo-300"></div>}
                        </div>
                        <div className="col-start-3 col-span-2 mb-24">
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                            <p>{blog.first_name} {blog.last_name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}