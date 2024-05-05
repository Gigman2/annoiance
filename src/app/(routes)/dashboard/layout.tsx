'use client'
import { useLayoutStore } from '@/app/_store/layout';
import { jura } from '@/app/_utils/clientUtils';
import Link from 'next/link';
import React from 'react'
import { TbDashboard, TbForms, TbPower, TbSettings, TbUsers, TbWorldWww } from 'react-icons/tb';

const MenuItems = [
    {
        name: 'Dashboard',
        Icon: TbDashboard,
        id: 1,
        path: '/dashboard/home'
    },
    {
        name: "Websites",
        Icon: TbWorldWww,
        path: '/dashboard/websites',
        id: 2,
    },
    {
        name: "Content",
        Icon: TbForms,
        path: '/dashboard/content',
        id: 3,
    },
    {
        name: "Users",
        Icon: TbUsers,
        path: '/dashboard/users',
        id: 4,

    },
    {
        name: "Settings",
        Icon: TbSettings,
        path: '/dashboard/settings',
        id: 5,
    }
] 

const DashboardLayout  = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const activeItem = useLayoutStore((state) => state.activeSideItem) 
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-200 relative overflow-hidden">
        <div className=' h-screen w-2/12 bg-yellow pt-8 pl-8 z-20'>
            <h1 className={`text-4xl font-bold text-yellow-dark mb-3 ${jura.className}`}>Annoiance</h1>

            <div className='mt-20'>
                {   
                    MenuItems.map(item =>(
                        <div key={item.name} className='relative'>
                            {item.id === activeItem ? <>
                                <div className='absolute top-0 -mt-5 right-0 -mr-6 w-10 h-10 bg-yellow-light rounded-full z-20'></div> 
                                <div className='absolute top-0 -mt-10 right-0 -mr-0 w-10 h-10 bg-yellow rounded-full z-20'></div> 
                            </>: null}
                            <Link href={item.path}>
                                <div className={`cursor-pointer pl-3 relative z-10 py-5 text-md flex items-center gap-2 ${item.id === activeItem ? 'bg-yellow-light' : 'bg-transparent'} rounded-s-2xl`}>
                                    <item.Icon fontSize={18} className='text-sky-950'/>
                                    <p className='text-sky-950'>{item.name}</p>
                                </div>
                            </Link>
                            {item.id === activeItem? <>
                                <div className='absolute bottom-0 -mb-5 right-0 -mr-6 w-10 h-10 bg-yellow-light rounded-full z-20'></div> 
                                <div className='absolute bottom-0 -mb-10 right-0 -mr-0 w-10 h-10 bg-yellow rounded-full z-20'></div> 
                            </>: null}
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='h-screen flex-auto w-full bg-yellow-light'>
            <div className='w-full h-16 bg-white flex drop-shadow-sm'>
                <div className='flex px-5 w-full justify-end items-center gap-4'>
                    <p className='text-yellow-dark'>Eric </p>
                    <TbPower className='text-2xl text-yellow-dark cursor-pointer'/>
                </div>
            </div>
            <div className='w-full h-full p-7 box-border overflow-y-scroll pb-12'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout 