"use client"
import Image from "next/image";
import { UploadButton } from '@/utils/uploadthing';
import { Button } from "@/components/ui/button"
import { useState } from "react";
import Dashboard from "@/components/Dashborad/Dashboard";
 
export default function Home() {
  const [ imageUrl  , setImageUrl] = useState("");
  return (
    <div>
      <Dashboard />
     <UploadButton
               className="mt-40"
               endpoint='imageUploader'
               onClientUploadComplete={async(res : any) => {
                console.log(res);
                
                setImageUrl(res[0].url)
                console.log(res[0].url);
                console.log(imageUrl);
                
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
               />
    </div>
  )
}

