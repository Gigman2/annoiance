import { jura } from '@/app/_utils/clientUtils';
import React from 'react'


const SetupLayout  = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-200">
        <h1 className={`text-5xl text-slate-700 mb-3 ${jura.className}`}>Annoiance</h1>
        <div className='w-full md:w-3/6 min-h-3/6 bg-white rounded-md p-4'>
            {children}
        </div>
    </div>
  )
}

export default SetupLayout 