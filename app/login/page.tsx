import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 w-full max-w-md gap-y-10 rounded-lg shadow-lg">
        <div className="text-center mb-12 mt-24">
          <h2 className="text-xl font-light text-gray-800 mb-4">
          3MR STOCK MIS
        </h2>
        <p>Don't have an account?
          <Link href={'/'} className="text-[#034833] hover:text-green-800 font-light underline"> Register</Link> 
        </p>
        </div>
        <div className="space-y-6">
          {/* Form inputs */}
        <div>
            <label className='block'>Email</label>
            <input
            className='bg-[#E5E7EB] w-full px-2 py-2 rounded-md' 
            type="text" 
            required
            placeholder="johndoe@gmail.com"
            />
        </div>
        <div>
            <label className='block'>Password</label>
            <input
            className='bg-[#E5E7EB] w-full px-2 py-2 rounded-md' 
            type="text" 
            required
            placeholder="Enter password"
            />
        </div>
        {/* Button */}
        <Link href={'/admin/dashboard'}>
        <div className="pt-4">
            <button
              type="submit"
              className="flex mx-auto bg-[#034833] hover:bg-green-800 text-white font-extralight py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div></Link>
        </div>
      </div>
    </div>
  )
}

export default page