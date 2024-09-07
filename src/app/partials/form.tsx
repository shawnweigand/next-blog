'use client';
import { FormEvent, use, useEffect, useRef, useState } from "react"

export default function Form() {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        first: '',
        last: ''
    })

    const [errors, setErrors] = useState({
        title: '',
        content: '',
        first: '',
        last: ''
    })

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = new FormData(event.currentTarget)

        setFormData({
            title: form.get('title') as string,
            content: form.get('content') as string,
            first: form.get('first') as string,
            last: form.get('last') as string
        })

        validateForm()

        console.log('Form data: ', formData)
    }

    const onChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        
        let validation = {
            title: '',
            content: '',
            first: '',
            last: ''
        }

        if (!formData.title) {
            validation.title = 'Title is required'
        }

        if (formData.content.length < 10) {
            validation.content = 'Content must have at least 10 characters'
        }

        if (!formData.first) {
            validation.first = 'First name is required'
        }

        if (!formData.last) {
            validation.last = 'Last name is required'
        }

        setErrors(validation)

        console.log('Errors:', validation)
    }

    return (
        <form className="grid gap-10" onSubmit={onSubmit}>
        {/* Title */}
        <div>
            <h2 className="text-black">Title</h2>
            <input className="w-full p-4 mt-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write your blog title here..." name="title" value={formData.title} onChange={onChange} />
            {errors.title && <p className="text-red-400 mt-2">{errors.title}</p>}
        </div>
        {/* Content */}
        <div>
            <h2 className="text-black">Content</h2>
            <textarea className="w-full h-32 max-h-64 p-4 mt-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write your blog post here..." name="content" value={formData.content} onChange={onChange} />
            {errors.content && <p className="text-red-400 mt-2">{errors.content}</p>}
        </div>
        {/* Author */}
        <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col justify-start">
            <h2 className="text-black">First Name</h2>
            <input className="w-full p-4 mt-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your first name..." name="first" value={formData.first} onChange={onChange} />
            {errors.first && <p className="text-red-400 mt-2">{errors.first}</p>}
            </div>
            <div className="flex flex-col justify-start">
            <h2 className="text-black">Last Name</h2>
            <input className="w-full p-4 mt-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your last name..." name="last" value={formData.last} onChange={onChange} />
            {errors.last && <p className="text-red-400 mt-2">{errors.last}</p>}
            </div>          
        </div>
        {/* Submit */}
        <button className="place-self-center w-1/4 py-2 px-6 mt-4 mb-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit">Submit</button>
        </form>
    )
  }
  