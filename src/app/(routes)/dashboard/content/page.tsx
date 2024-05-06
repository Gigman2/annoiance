'use client'
import Button from '@/app/_components/button'
import React from 'react'
import { TbDotsVertical, TbFilterSearch } from 'react-icons/tb'

const DashboardContent = () => {
  return (
    <div className='w-full'>
        <div className='h-auto bg-white p-4 shadow-sm rounded-md flex justify-between items-center'>
            <div>
                <p className='font-semibold text-yellow-dark'>Receive Form Data</p>
                <p className='text-gray-500 text-sm'>Review the incoming form data requests and track their current status as they are processed and forwarded.</p>
            </div>

            <div className='flex mx-4'>
                <TbFilterSearch fontSize={20} className='text-yellow-dark cursor-pointer'/>
            </div>
        </div>

        <div className='bg-white p-4 shadow-sm rounded-md mt-4'>
            <table className='table-auto w-full mt-4'>
                <thead className='text-left'>
                  <tr>
                    <th className='py-2'>SiteID</th>
                    <th>Page</th>
                    <th>Summary</th>
                    <th>Forwarded</th>
                    <th>Date Received</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  <tr className='bg-white'>
                    <td className='py-2'>Completefarmer </td>
                    <td>contact</td>
                    <td className='text-sm'>I want refund</td>
                    <td>
                      <div className='w-12 h-4 rounded-sm bg-green-400'></div>
                    </td>
                    <td className='text-gray-700 text-sm'>1st May 2024</td>
                    <td className='text-gray-700 text-sm'><TbDotsVertical /></td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DashboardContent