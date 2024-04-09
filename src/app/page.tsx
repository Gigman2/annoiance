'use client'
import { useEffect } from "react";
// import { checkFileExists } from "./utils/serverUtils";
import { useRouter } from "next/navigation";
import Welcome from "./_components/welcome";
import { makeRequest } from "./_utils/clientUtils";



export default function Home() {
  
  const router = useRouter()

  const stageAndPage = {
    'ACCOUNT': 'setup/database-config',
    'DATABASE': 'setup/mailer-config',
    'MAILER': 'setup/final-stage',
    'COMPLETE': 'dashboard'
  }

  const fetchFile = async () => {
    try {
      const {data, stage} = await makeRequest<{data: 'FILE_NOT_FOUND' | 'FILE_FOUND', stage: "DATABASE" | "ACCOUNT" | "MAILER" | "COMPLETE"}>('setup-config')
      if(data === 'FILE_NOT_FOUND') {
          router.push('setup')
      } else {
        const path = stageAndPage[stage]
        if(!path){
          router.push('setup')
        }
        router.push(path)
      }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };


  useEffect(() => { 
    fetchFile()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Welcome />
  );
}