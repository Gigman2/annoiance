import { colorScheme } from '@/app/_utils/theme'
import React from 'react'
import { ImSpinner8 } from 'react-icons/im'


interface IButtonProps {
    title: string,
    isDisabled?: boolean
    isLoading?: boolean,
    type: string,
    color: string,
    onClick?: () => void;
    [x:string]: any
}
const Button = ({title, isDisabled, isLoading, type, color, onClick, ...rest}: IButtonProps) => {
    const inactiveProps = "cursor-not-allowed"
    const activeProps = "cursor-pointer"

    const isActiveStyle = isDisabled || isLoading ? inactiveProps : activeProps
    const colorWeight = isDisabled || isLoading ? 'light' : 'default'

    const bgStyle = colorScheme[color as keyof typeof colorScheme]['bg'][colorWeight]
    const textStyle = colorScheme[color as keyof typeof colorScheme]['text'][colorWeight]
    const borderStyle = colorScheme[color as keyof typeof colorScheme]['border'][colorWeight]

    let  buttonStyle = {
        'solid': `text-white ${bgStyle}`,
        'plain':  `bg-transparent ${textStyle}`,
        'line':  `border border-2 ${borderStyle} ${textStyle}`
    }

    return (
        <button 
            {...rest} 
            className={`${rest.className ? rest.className : 'px-10 py-2 rounded-md'} ${isActiveStyle} ${buttonStyle[type as keyof typeof buttonStyle]}`}
            onClick={() => !(isDisabled || isLoading) ? onClick && onClick() :  null}
        >
            {isLoading ? <div className="loader ease-linear rounded-full border-2 border-t-4 border-white h-7 w-7 animate-spin"></div> : title}
        </button>
    )
}

export default Button