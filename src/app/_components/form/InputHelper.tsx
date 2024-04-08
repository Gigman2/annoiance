import React from 'react'
import { TbChecks, TbInfoCircle, TbX } from 'react-icons/tb'

/**
 * Helper properties for different types of messages.
 * @typedef {Object} HelperProperties
 * @property {React.ElementType} icon - The icon component for the message type.
 * @property {string} color - The color class for the message type.
 */

/** @type {HelperProperties} */
const helperProperties = {
    default: {
        icon: TbInfoCircle, // Icon to use for default messages
        color: 'text-slate-400' // Color to use for default messages
    },
    success: {
        icon: TbChecks, // Icon to use for success messages
        color: 'text-green-400' // Color to use for success messages
    },
    error: {
        icon: TbX, // Icon to use for error messages
        color: 'text-red-400' // Color to use for error messages
    }
};


/**
 * InputHelper component renders an icon and a message based on the provided type.
 * @param {Object} props - The component props.
 * @param {'default' | 'error' | 'success'} props.type - The type of the message.
 * @param {string} [props.message] - The message to display (optional).
 * @returns {JSX.Element} - The rendered component.
 */
const InputHelper = ({type, message}: {type: 'default'| 'error' | 'success', message?: string}) => {
    const Icon = helperProperties[type].icon; // Determine the icon based on the type prop
    
    return (
        <>
            {message ? // If there is a message, render it
                <div className='flex gap-x-0.5'>
                    <div className='w-6 h-6 mt-0.5'>
                        <Icon className={helperProperties[type].color} /> {/* Render the icon with appropriate color */}
                    </div>
                    <p className={`text-sm ${helperProperties[type].color}`}>{message} </p> {/* Render the message with appropriate color */}
                </div> :
                null // If there is no message, render nothing 
            } 
        </>
    );
}

export default InputHelper