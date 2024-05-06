'use client'
import Button from '@/app/_components/button'
import React, { useEffect } from 'react'
import { TbDotsVertical } from 'react-icons/tb'

function Website() {
    return (
    <div className='w-full'>
        <div className='h-auto bg-white p-4 shadow-sm rounded-md flex justify-between items-center'>
            <div>
                <p className='font-semibold text-yellow-dark'>Website management</p>
                <p className='text-gray-500 text-sm'>Explore the websites you've added. Here, you have the ability to both update and archive them.</p>
            </div>

            <Button type='solid' color='base' title='Add Website' onClick={() => null}/>
        </div>

        <div className='bg-white p-4 shadow-sm rounded-md mt-4'>
            <table className='table-auto w-full mt-4'>
            <thead className='text-left'>
                <tr>
                    <th className='py-2'>Website</th>
                    <th>URL</th>
                    <th>Allowed Host</th>
                    <th>Status</th>
                    <th>Created Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-amber-50 cursor-pointer'>
                    <td className='py-2'>G.W.Arthur</td>
                    <td>https://www.gwarthur.com</td>
                    <td>*</td>
                    <td>
                        <div className='inline-block px-2 rounded-sm text-green-400 bg-green-100'>Active</div>
                    </td>
                    <td className='text-gray-700 text-sm'>21st May 24</td>
                    <td className='text-gray-700 text-sm'><TbDotsVertical /></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    )
}

export default Website