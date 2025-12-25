import Sidebar from '@/components/admin-panel/Sidebar'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex'>
        <Sidebar />
        <h1 className='text-[#101828] text-3xl font-medium leading-9.5'>Welcome back, James</h1>
    </div>
  )
}
