import HugeBar from '@/components/admin-panel/HugeBar'
import Sidebar from '@/components/admin-panel/Sidebar'
import SimpleTabs from '@/components/admin-panel/SimplerTab'
import Summary from '@/components/admin-panel/Summary'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex'>
        <Sidebar />
        <HugeBar />
    </div>
  )
}
