import { Dispatch, SetStateAction } from "react"

export const handleChange = (key: string, value: string | boolean, state: Dispatch<SetStateAction<Record<string, string | boolean>>>) => {
    state(prev => {
        const currentValues = { ...prev }
        currentValues[key] = value
        return currentValues
    })
}

export const handleDisabled = (obj: {}) => {
    return !!Object.values(obj).filter(Boolean).length
}

export const validateAfterFocus = (formData: Record<string, string>, focusState: Record<string, boolean>, setState: Dispatch<SetStateAction<Record<string, string | undefined>>>) => {
    Object.keys(focusState).map(item => {
        if (!formData[item] || formData[item] === '') {
            setState(prev => ({ ...prev, [item]: `${item} can't be empty` }))
        } else {
            setState(prev => ({ ...prev, [item]: undefined }))
        }
    })
}


export const validateAll = (formData: Record<string, string>, setState: Dispatch<SetStateAction<Record<string, string | undefined>>>) => {
    let isValid = true
    Object.keys(formData).map(item => {
        if (formData[item] === '') {
            setState(prev => ({ ...prev, [item]: `${item} can't be empty` }))
            isValid = false
        } else {
            setState(prev => ({ ...prev, [item]: undefined }))
        }
    })

    return isValid
}