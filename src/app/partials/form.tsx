'use client';
import { FormEvent } from "react"

export default function Form() {

    async function onSubmit(event: FormEvent) {
        event.preventDefault()
        console.log("Form submitted")
    }

    return (
        <form className="grid" onSubmit={onSubmit}>
        {/* Title */}
        <h2 className="text-black">Title</h2>
        <input className="w-full p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write your blog title here..." name="title" />
        {/* Content */}
        <h2 className="text-black">Content</h2>
        <textarea className="w-full h-32 max-h-64 p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write your blog post here..." name="content" />
        {/* Author */}
        <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col justify-start">
            <h2 className="text-black">First Name</h2>
            <input className="w-full p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your first name..." name="first" />
            </div>
            <div className="flex flex-col justify-start">
            <h2 className="text-black">Last Name</h2>
            <input className="w-full p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your last name..." name="last" />
            </div>          
        </div>
        {/* Submit */}
        <button className="place-self-center w-1/4 py-2 px-6 mt-4 mb-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit">Submit</button>
        </form>
    )
  }
  