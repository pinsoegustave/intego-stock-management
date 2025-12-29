// components/SimpleTabs.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SimpleTabs() {
    const tabs = ['1d', '7d', '1m', '3m', '6m', 'ty', '3y', 'Sy'];
    const [active, setActive] = useState('1d');

    return (
        <div className="w-full flex items-center justify-between space-x-1">
            <div className='flex '>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-3 py-1.5 text-sm border border-[#D0D5DD] rounded ${active === tab ? 'bg-black text-white' : 'bg-gray-100'}`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="ml-4 text-sm font-medium flex gap-3 border border-[#D0D5DD] px-3 py-1.5 rounded">
                <Image
                    src={'/plus.svg'}
                    alt='plus'
                    width={20}
                    height={20}
                    className='object-contain'
                />
                Ada Metrics
            </div>
        </div>
    );
}