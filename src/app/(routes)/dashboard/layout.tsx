import { jura } from '@/app/_utils/clientUtils';
import Link from 'next/link';
import React from 'react'
import { TbDashboard, TbForms, TbPower, TbSettings, TbUsers, TbWorldWww } from 'react-icons/tb';

const MenuItems = [
    {
        name: 'Dashboard',
        Icon: TbDashboard,
        active: true,
        path: '/dashboard/home'
    },
    {
        name: "Websites",
        Icon: TbWorldWww,
        path: '/dashboard/websites'
    },
    {
        name: "Content",
        Icon: TbForms,
        path: '/dashboard/content'
    },
    {
        name: "Users",
        Icon: TbUsers,
        path: '/dashboard/users'

    },
    {
        name: "Settings",
        Icon: TbSettings,
        path: '/dashboard/settings'
    }
] 

const DashboardLayout  = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-200 relative">
        <div className=' h-screen w-2/12 bg-sky-300 pt-8 pl-8 z-20'>
            <h1 className={`text-4xl font-bold text-sky-950 mb-3 ${jura.className}`}>Annoiance</h1>

            <div className='mt-20'>
                {   
                    MenuItems.map(item =>(
                        <div key={item.name} className='relative'>
                            {item.active ? <>
                                <div className='absolute top-0 -mt-5 right-0 -mr-6 w-10 h-10 bg-slate-100 rounded-full z-20'></div> 
                                <div className='absolute top-0 -mt-10 right-0 -mr-0 w-10 h-10 bg-sky-300 rounded-full z-20'></div> 
                            </>: null}
                            <Link href={item.path}>
                                <div className={`cursor-pointer pl-3 relative z-10 py-5 text-md flex items-center gap-2 ${item.active ? 'bg-slate-100' : 'bg-transparent'} rounded-s-3xl`}>
                                    <item.Icon fontSize={18} className='text-sky-950'/>
                                    <p className='text-sky-950'>{item.name}</p>
                                </div>
                            </Link>
                            {item.active ? <>
                                <div className='absolute bottom-0 -mb-5 right-0 -mr-6 w-10 h-10 bg-slate-100 rounded-full z-20'></div> 
                                <div className='absolute bottom-0 -mb-10 right-0 -mr-0 w-10 h-10 bg-sky-300 rounded-full z-20'></div> 
                            </>: null}
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='h-screen flex-auto w-full bg-slate-100'>
            <div className='w-full h-14 bg-white flex'>
                <div className='flex px-5 w-full justify-end items-center gap-4'>
                    <p className='text-sky-900'>Eric </p>
                    <TbPower className='text-2xl text-sky-900 cursor-pointer'/>
                </div>
            </div>
            <div className='w-full h-auto p-7 box-border'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout 