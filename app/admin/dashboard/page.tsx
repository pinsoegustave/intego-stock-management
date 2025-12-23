import Sidebar from '@/components/admin-panel/Sidebar'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex'>
        <Sidebar />
        <p>This is the admin dashboard</p>
    </div>
  )
}
