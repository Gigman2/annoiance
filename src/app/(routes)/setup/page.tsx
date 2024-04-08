'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import InputGroup from '@/app/_components/form/InputGroup'
import Button from '@/app/_components/button'
import { validateAfterFocus, validateAll } from '@/app/_components/form'
import { makeRequest } from '@/app/_utils/clientUtils'

const Setup = () => {
  const [ formData, setFormData ]  = useState<Record<string, string>>({
    username: "",
    password: ""
  })
  const [ focusState, setFocusState ]  = useState<Record<string, boolean>>({})
  const [ errors, setErrors ]  = useState<Record<string, string|  undefined>>({})
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    validateAfterFocus(formData, focusState, setErrors)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusState])

  
  

  const handleClick = async () => {
    try {
      const isValid = validateAll(formData, setErrors)
      if(isValid){
        setSubmitting(true)
        const res = await makeRequest('setup-config','POST', {...formData, stage: "ACCOUNT"})
        setSubmitting(false)
        if(res){
          router.push('database-config')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='flex justify-center my-5'>
     <div className='w-9/12'> 
        <h3 className='text-lg text-slate-500 font-bold'>Let get you started!</h3>
        <h3 className='text-sm text-slate-400'>Provide the information below. This will be used to create your account</h3>
        <div className='mt-5 w-full'>
          <div className='mt-4'>
            <h4 className='font-mono text-slate-500'>Username</h4>
            <InputGroup 
              field="username" 
              formData={formData} 
              setFormData={setFormData}
              errors={errors}
              focusState={focusState}
              setFocusState={setFocusState}  
              successMessage="Good one there!"
              defaultMessage="A simple user name will do"
            />
          </div>
          <div className='mt-4'>
            <h4 className='font-mono text-slate-500'>Password</h4>
            <InputGroup 
              type="password"
              field="password" 
              formData={formData} 
              setFormData={setFormData}
              errors={errors}
              focusState={focusState}
              setFocusState={setFocusState}  
              successMessage="Good one there!"
              defaultMessage="Try not to use the likes of '1234', 'admin'. I wont complain though"
            />    
          </div>
        </div>

        <div className='mt-4 w-full flex justify-center'>
          <Button
            color='blue'
            type='solid'
            isDisabled={!!Object.values(errors).filter(Boolean).length} 
            title={'Save and Continue'} 
            isLoading={submitting}
            onClick={handleClick}
          />
        </div>
     </div>
    </div>
  )
}

export default Setup 

