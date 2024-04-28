'use client'
import Button from '@/app/_components/button';
import { validateAfterFocus, validateAll } from '@/app/_components/form';
import InputGroup from '@/app/_components/form/InputGroup';
import { makeRequest } from '@/app/_utils/clientUtils';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function validateMongoDBUrl(url: string): boolean {
    const pattern: RegExp = /^mongodb\+srv:\/\/[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+@cluster\d+\.lazdg\.mongodb\.net$/;
    return pattern.test(url);
}
const DatabaseConfig = () => {
    const router = useRouter()
    const [ formData, setFormData ]  = useState<Record<string, string>>({
        smtpHost: "",
        smtpPort: "",
        smtpUser: "",
        smtpPass: ""
    })
    const [ focusState, setFocusState ]  = useState<Record<string, boolean>>({})
    const [ errors, setErrors ]  = useState<Record<string, string|  undefined>>({})
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        validateAfterFocus(formData, focusState, setErrors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focusState])


    const handleClick = async () => {
        try {
            const isValid = validateAll(formData, setErrors)
            if(isValid){
                setSubmitting(true)
                const res = await makeRequest('setup-config','POST', {...formData, stage: "MAILER"})
                setSubmitting(false)
                if(res){
                    router.push('final-stage')
                }
            }
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <div className='flex justify-center my-5'>
            <div className='w-9/12'>
                <h3 className='text-xl text-slate-500 text-bold'>Setup the mailer</h3>
                <h3 className='text-sm text-slate-400'>
                    Configuring this step is essential. Once completed, the application will have the capability to send form data as emails to website owners.
                </h3>
                <div className='mt-5 w-full' >
                    <div className='flex gap-4 justify-between mt-4'>
                        <div className='w-8/12'>
                            <h4 className='font-mono text-slate-500'>SMTP Host</h4>
                            <InputGroup
                                field="smtpHost" 
                                formData={formData} 
                                setFormData={setFormData}
                                errors={errors}
                                focusState={focusState}
                                setFocusState={setFocusState}  
                                successMessage="Good one there!"
                            />
                        </div>
                        <div className='w-4/12'>
                            <h4 className='font-mono text-slate-500'>SMTP Port</h4>
                            <InputGroup
                                type='number'
                                field="smtpPort" 
                                formData={formData} 
                                setFormData={setFormData}
                                errors={errors}
                                focusState={focusState}
                                setFocusState={setFocusState}  
                                successMessage="Good one there!"
                            />
                        </div>
                    </div>


                    <div className='mt-4'>
                        <h4 className='font-mono text-slate-500'>SMTP Username</h4>
                        <InputGroup
                            field="smtpUser" 
                            formData={formData} 
                            setFormData={setFormData}
                            errors={errors}
                            focusState={focusState}
                            setFocusState={setFocusState}  
                            successMessage="Good one there!"
                            defaultMessage=""
                        />
                    </div>

                    <div className='mt-4'>
                        <h4 className='font-mono text-slate-500'>SMTP Password</h4>
                        <InputGroup
                            type='password'
                            field="smtpPass" 
                            formData={formData} 
                            setFormData={setFormData}
                            errors={errors}
                            focusState={focusState}
                            setFocusState={setFocusState}  
                            successMessage="Good one there!"
                            defaultMessage=""
                        />
                    </div>
                    
                </div>

                <div className='mt-10 w-full flex justify-between'>
                    <Button
                        color='blue'
                        type='line'
                        isDisabled={!!Object.values(errors).filter(Boolean).length} 
                        title={'Back'} 
                    />

                    <div className='flex gap-2'>
                        <Button 
                            color='blue'
                            type='solid'
                            isDisabled={!!Object.values(errors).filter(Boolean).length} 
                            title={'Continue'} 
                            isLoading={submitting}
                            onClick={() => handleClick()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatabaseConfig