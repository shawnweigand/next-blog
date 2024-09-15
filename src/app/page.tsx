'use client';
import { useEffect, useState } from 'react';
import Form from './partials/form';
import List from './partials/list';
import Loading from './components/loading';

export default function Home() {

  const [blogs, setBlogs] = useState([])
  const [refresh, setRefresh] = useState(false)

  async function fetchBlogs() {
      const response = await fetch('/api/blogs')
      console.log('Response: ', response)
      const data = await response.json()
      setBlogs([...data].sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
  }

  useEffect(() => {
    fetchBlogs()
  }, [refresh])

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      {/* Content */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="py-10 text-center text-3xl text-indigo-600 font-bold">MyBlog</h1>
        
        {/* Form */}
        <Form refresh={refresh} setRefresh={setRefresh} />

        {/* List */}
        <List blogs={blogs}/>
      </div>

    </section>
  )
}
