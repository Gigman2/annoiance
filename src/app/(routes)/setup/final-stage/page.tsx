'use client'
import Button from '@/app/_components/button';
import { validateAfterFocus, validateAll } from '@/app/_components/form';
import InputGroup from '@/app/_components/form/InputGroup';
import { makeRequest } from '@/app/_utils/clientUtils';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import welcomeCss from '@/app/_components/welcome/welcome.module.css'

const FinalStage = () => {
    const router = useRouter()


    return (
        <div className='flex justify-center my-5'>
            <div className='w-9/12'>
                <h3 className='text-md text-center text-slate-400'>
                    Doing the final setup. This step won&rsquo;t take long
                </h3>
                <div className='flex justify-center mt-3'>
                    <div className={`w-1/2 h-0.5 bg-slate-300 ${welcomeCss.loader}`}></div>
                </div>
            </div>
        </div>
    )
}

export default FinalStage