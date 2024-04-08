'use client'
import Button from '@/app/components/button'
import InputGroup from '@/app/components/form/InputGroup'
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
        host: "",
        port: "",
        user: "",
        password: ""
    })
    const [ focusState, setFocusState ]  = useState<Record<string, boolean>>({})
    const [ errors, setErrors ]  = useState<Record<string, string|  undefined>>({})

    useEffect(() => {
        if(formData.connection){
            const isValid = validateMongoDBUrl(formData.connection)
            if(!isValid){
                setErrors(prev => ({...prev, connection: "Invalid MongoDB URL"}))
            }
        }
    }, [formData])
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
                                field="host" 
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
                                field="port" 
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
                            field="user" 
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
                            field="password" 
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
                        <Link href={'setup/database-config'}>
                            <Button 
                                color='stone'
                                type='solid'
                                isDisabled={!!Object.values(errors).filter(Boolean).length} 
                                title={'Test'} 
                            />
                        </Link>
                        <Link href={'setup/database-config'}>
                            <Button 
                                color='blue'
                                type='solid'
                                isDisabled={!!Object.values(errors).filter(Boolean).length} 
                                title={'Continue'} 
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatabaseConfig