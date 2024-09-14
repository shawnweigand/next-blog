'use client';
import { useEffect, useState } from "react"

export default function List() {

    const [blogs, setBlogs] = useState([])

    async function fetchBlogs() {
        const response = await fetch('/api/blog')
        console.log('Response: ', response)
        const data = await response.json()
        setBlogs(data)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div>
            <h1 className="text-black">Blog Posts</h1>
        </div>
    )
}