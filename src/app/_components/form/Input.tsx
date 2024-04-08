import React, { Dispatch, SetStateAction, useState } from 'react'
import { TbEye, TbEyeClosed } from 'react-icons/tb'

interface IProp {
    value: string, 
    focused: boolean | undefined
    error: string | undefined
    onChange: (a: string) => void
    setFocus: (a: boolean) => void
    [x:string]:any
}

const Input = ({value, onChange, focused, setFocus, error, ...rest}: IProp) => {
    const [showText, setShowText] = useState(false)
    let stateColor = 'bg-slate-100';
    if(focused){
        stateColor = 'bg-slate-100'
    }else if(error){
        stateColor = 'bg-red-100'
    }else if(value && !error){
        stateColor = 'bg-green-100'
    }

  return (
    <div className={`rounded-md h-12 w-full ${stateColor} flex items-center px-2`} tabIndex={-1}>
        <input 
            className='w-full h-full outline-none p-2 bg-transparent text-slate-700' 
            value={value} 
            onChange={(value) => onChange(value.currentTarget.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...rest}
            {...rest.type === 'password'? {type: showText ? 'text' : 'password'}: {}}
            
        />
        {rest.type === 'password' ? <div className='flex  text-gray-500 cursor-pointer'  onClick={() => setShowText(!showText)}>
            {showText ?  <TbEyeClosed /> : <TbEye />}
        </div>:  null}
    </div>
  )
}

export default Input