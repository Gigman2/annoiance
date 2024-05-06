import React from 'react'
import { TbDotsVertical, TbFilterSearch } from 'react-icons/tb'

const DashboardUsers = () => {
  return (
        <div className='w-full'>
        <div className='h-auto bg-white p-4 shadow-sm rounded-md flex justify-between items-center'>
            <div>
                <p className='font-semibold text-yellow-dark'>Users</p>
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
                    <th>Username</th>
                    <th>Email</th>
                    <th>Last Login</th>
                    <th>Added On</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  <tr className='bg-white'>
                    <td className='py-2'>Gigman2 </td>
                    <td>ericabbey.8gig@gmail.com</td>
                    <td className='text-sm'>4th May 2024</td>
                    <td className='text-gray-700 text-sm'>1st May 2024</td>
                    <td className='text-gray-700 text-sm'><TbDotsVertical /></td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DashboardUsers