import React, { Dispatch, SetStateAction } from 'react'
import InputHelper from './InputHelper'
import Input from './Input'
import { handleChange } from '.'
import { TbEye } from 'react-icons/tb'
interface IProp {
            type?: string
            field: string,
            errors: Record<string, string | undefined>, 
            formData: Record<string, string>, 
            focusState: Record<string, boolean>,
            setFormData: Dispatch<SetStateAction<Record<string, string>>>,
            setFocusState: Dispatch<SetStateAction<Record<string, boolean>>>
            successMessage: string
            defaultMessage?: string
        }

const InputGroup = (
        { 
            type,
            field,
            errors, 
            formData, 
            focusState,
            setFocusState,
            setFormData,
            successMessage,
            defaultMessage
        }: IProp
        
    ) => {
        const isGood =  (formData[field].length > 0 && !errors[field])
        return (
        <div className='w-full block gap-4 items-center'>
            <div className='w-full mb-2'>
                <Input 
                    type={type}
                    key={field}
                    value={formData?.[field]} 
                    focused={!!focusState[field]}
                    onChange={(v: string) => handleChange(field, v, setFormData as any)} 
                    setFocus={(v: boolean) => handleChange(field, v, setFocusState as any)}
                    error={errors[field]}
                />
            </div>

            <div className='w-full'>
                <InputHelper 
                    message={
                        errors[field] ? 
                        errors[field] as string : 
                        isGood ?
                        successMessage : defaultMessage as string
                    }

                    type={
                        errors[field] ? 
                        'error' : 
                        isGood ?
                        "success" : "default"
                    }
                />
                
            </div>
        </div>
  )
}

export default InputGroup