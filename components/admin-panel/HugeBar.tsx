import React from 'react'
import SimpleTabs from './SimplerTab'
import Summary from './Summary'

export default function HugeBar() {
  return (
    <div className='p-4 w-full'>
        <h1 className='text-[#101828] text-3xl font-medium leading-9.5 mb-8'>Welcome back, James</h1>
        <SimpleTabs />
        <Summary />
    </div>
  )
}
