'use client'
import React, { FC } from 'react'
import { TbInfoCircle } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';

interface IProp {title: string, description: string; id: string;  children: React.ReactNode;}
const AnalyticsCard:FC<IProp> = ({title, description, children, id}: IProp) => {
  return (
    <div className='w-full bg-white p-4 shadow-sm rounded-md'>
        <div className='flex items-start justify-between'>
            <div className='flex-1'>
                <p className='font-semibold text-neutral-800'>{title}</p>
            </div>
            <div id={id}>
                <TbInfoCircle className='text-neutral-300 cursor-pointer' fontSize={16}/>
            </div>
            <Tooltip anchorSelect={`#${id}`} content={description} noArrow={true} />
        </div>
        <div className='mt-2'>
            {children}
        </div>
    </div>

  )
}

export default AnalyticsCard
