
export default function Home() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      {/* Content */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="py-10 text-center text-3xl text-indigo-600 font-bold ">MyBlog</h1>
        
        {/* Form */}
        <div className="grid">
          {/* Title */}
          <h2 className="text-black">Title</h2>
          <input className="w-full p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write your blog title here..." />
          {/* Content */}
          <h2 className="text-black">Content</h2>
          <textarea className="w-full h-32 max-h-64 p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Write your blog post here..." />
          {/* Author */}
          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col justify-start">
              <h2 className="text-black">First Name</h2>
              <input className="w-full p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your first name..." />
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-black">Last Name</h2>
              <input className="w-full p-4 mt-4 mb-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your last name..." />
            </div>          
          </div>
          {/* Submit */}
          <button className="place-self-center w-1/4 py-2 px-6 mt-4 mb-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
        </div>
      </div>

    </section>
  )
}
