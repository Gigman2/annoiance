'use client'
import Button from '@/app/_components/button';
import { validateAfterFocus, validateAll } from '@/app/_components/form';
import InputGroup from '@/app/_components/form/InputGroup';
import { makeRequest } from '@/app/_utils/clientUtils';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner';

function validateMongoDBUrl(url: string): boolean {
    const pattern: RegExp = /^mongodb(?:\+srv)?:\/\/(?:[^:]+:[^@]+@)?([^\/?]+)(?:\?.*)?$/;
    return pattern.test(url);
}
const DatabaseConfig = () => {
    const [ formData, setFormData ]  = useState<Record<string, string>>({
        dbConnection: "",
        dbDatabase: ""
    })
    const [ focusState, setFocusState ]  = useState<Record<string, boolean>>({})
    const [ errors, setErrors ]  = useState<Record<string, string|  undefined>>({})

    const [submitting, setSubmitting] = useState(false)
    const [testing, setTesting] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if(formData.connection){
            const isValid = validateMongoDBUrl(formData.connection)
            if(!isValid){
                setErrors(prev => ({...prev, connection: "Invalid MongoDB URL"}))
            }else {
                setErrors(prev => ({...prev, connection: undefined}))
            }
        }
    }, [formData])

    useEffect(() => {
        validateAfterFocus(formData, focusState, setErrors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focusState])

    const testConnection = async () => {
        try {
            setTesting(true)
            if(!formData.dbConnection){
                setErrors(prev => ({...prev, dbConnection: "Connection string cant be empty"}))
            }
            const {data} = await makeRequest<{data: 'success' | null}>(
                'setup-config/database', 
                "POST", 
                JSON.stringify({connection: formData.dbConnection})
            )
            console.log(data)
            if(data !== 'success'){
                toast.error('Failed to establish a database connection')
            }else {
                toast.success('Connection was successful you can proceed')
            }
            setTesting(false)
        } catch (error) {
            setTesting(false)
        }
    };

    const handleClick = async () => {
        try {
            const isValid = validateAll(formData, setErrors)
            if(isValid){
                setSubmitting(true)
                const res = await makeRequest('setup-config','POST', {...formData, stage: "DATABASE"})
                setSubmitting(false)
                if(res){
                    router.push('/setup/mailer-config')
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='flex justify-center my-5'>
            <Toaster position="top-right" />
            <div className='w-9/12'>
                <h3 className='text-xl text-slate-500 text-bold'>Setup the database</h3>
                <h3 className='text-sm text-slate-400'>
                    We need to connect to MongoDB to keep things running smoothly. Let&rsquo;s get that set up so we can keep going.
                </h3>
                <h3 className='text-sm font-mono text-slate-400'>
                    Just drop your MongoDB connection string below, and we&rsquo;ll take it from there!
                </h3>
                <div className='mt-5 w-full '>
                    <div className='mt-4'>
                    <h4 className='font-mono text-slate-500'>Connection String</h4>
                    <InputGroup
                        field="dbConnection" 
                        formData={formData} 
                        setFormData={setFormData}
                        errors={errors}
                        focusState={focusState}
                        setFocusState={setFocusState}  
                        successMessage="Good one there!"
                        defaultMessage="A valid connection string should be in the format mongodb+srv://xxxxxxxxx:xxxxxxxx@xxxxxxxx.mongodb.net"
                    />
                    </div>
                    
                </div>

                <div className='mt-5 w-full '>
                    <div className='mt-4'>
                    <h4 className='font-mono text-slate-500'>Database name</h4>
                    <InputGroup
                        field="dbDatabase" 
                        formData={formData} 
                        setFormData={setFormData}
                        errors={errors}
                        focusState={focusState}
                        setFocusState={setFocusState}  
                        successMessage="Good one there!"
                    />
                    </div>
                    
                </div>

                <div className='mt-10 flex justify-between'>
                    <Button 
                        color='blue'
                        type='line'
                        isDisabled={!!Object.values(errors).filter(Boolean).length} 
                        title={'Back'} 
                        onClick={() => router.back()}
                    />


                    <div className='flex gap-2'>
                        <Button
                            color='stone'
                            type='solid'
                            isDisabled={!!Object.values(errors).filter(Boolean).length} 
                            title={'Test'} 
                            isLoading={testing}
                            onClick={() => testConnection()}
                        />
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