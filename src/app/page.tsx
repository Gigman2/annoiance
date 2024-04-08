'use client'
import { useEffect } from "react";
// import { checkFileExists } from "./utils/serverUtils";
import { useRouter } from "next/navigation";
import Welcome from "./_components/welcome";
import { makeRequest } from "./_utils/clientUtils";



export default function Home() {
  
  const router = useRouter()

  const fetchFile = async () => {
    try {
      const {data} = await makeRequest<{data: 'FILE_NOT_FOUND' | 'FILE_FOUND'}>('setup-config')
      console.log(data)
      if(data === 'FILE_NOT_FOUND') {
          router.push('setup')
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