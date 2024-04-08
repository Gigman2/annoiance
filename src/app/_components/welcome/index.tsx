import React from 'react'
import welcomeCss from './welcome.module.css'
import { jura } from '@/app/_utils/clientUtils'


const Welcome = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <div>
            <h1 className={`text-5xl text-slate-700 ${jura.className}`}>Annoiance</h1>
            <div className="mt-3">
                <div className={`w-full h-0.5 bg-slate-300 ${welcomeCss.loader}`}></div>
            </div>
        </div>
    </div>
  )
}

export default Welcome