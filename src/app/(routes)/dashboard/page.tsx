import React from 'react'
import { TbInfoCircle } from 'react-icons/tb'

const DashboardHome = () => {
  return (
    <div className='w-full flex gap-5'>
        <div className='w-3/12 h-40 bg-white rounded-md px-3'>
            <div className='flex py-2 items-center justify-between bottom-1'>
                <p className='text-slate-400 text-sm'>Websites</p>
                <TbInfoCircle className='text-slate-300' />
            </div>
            <div className='mt-2 text-slate-600'>
                <div className='flex items-baseline gap-1 '>
                    <div className='text-5xl font-semibold'>12</div>
                    <p className='text-slate-400 text-sm'>connected</p>
                </div>
                <div className='flex items-baseline gap-1 mt-3 text-slate-400 text-sm'>
                    <p>14</p>
                    <p className=''>total pages</p>
                </div>
            </div>
        </div>
        <div className='w-3/12 h-40 bg-white rounded-md px-3'>
            <div className='flex py-2 items-center justify-between bottom-1'>
                <p className='text-slate-400 text-sm'>Form Data record</p>
                <TbInfoCircle className='text-slate-300' />
            </div>
            <div className='mt-2 text-slate-600'>
                <div className='flex items-baseline gap-1 '>
                    <div className='text-4xl font-semibold'>12</div>
                    <p className='text-slate-400 text-sm'>connected</p>
                </div>
                <div className='flex items-baseline gap-1 mt-3 text-slate-400 text-sm'>
                    <p>Sites yet to receive data</p>
                    <p className=''>5xl</p>
                </div>
            </div>
        </div>
        <div className='w-3/12 h-40 bg-white'></div>
        <div className='w-3/12 h-40 bg-white'></div>
    </div>
  )
}

export default DashboardHome