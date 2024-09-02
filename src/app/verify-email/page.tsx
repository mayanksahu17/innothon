"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';
import { log } from 'console';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';

const VerifyEmail = () => {
  const notVerify = () => toast.error("Email Not Verified");
  const verify = () => toast.success("Email Verified");
  const [otp, setOtp] = useState('');
  const router = useRouter()
  const [verificationStatus, setVerificationStatus] = useState<boolean | null>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/verify-email",{otp})

      const data = response.data
      console.log(data);
      

      if (data.success) {
        setVerificationStatus(true);
        verify(); // Trigger success toast
        router.push("/CreateFreelencerProfile")
      } else {
        setVerificationStatus(false);
        notVerify(); // Trigger error toast
      }
    } catch (error) {
      setVerificationStatus(false);
      notVerify(); // Trigger error toast in case of catch block
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-indigo-500 mb-6 text-center">Email Verification</h1>
        <div className="mb-4">
          <label htmlFor="otp" className="text-gray-800 text-lg font-semibold block">Enter OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-center flex flex-col">
          <button 
            onClick={handleSubmit} 
            type="submit" 
            className="bg-indigo-500 text-white text-lg font-semibold px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
          >
            Verify
          </button>
          {verificationStatus ? (
            <button className="w-[75%] mx-auto text-center text-indigo-600 mt-4 border border-indigo-600 rounded-lg px-4 py-2">
              Success
            </button>  
          ) : (
            <>
              
            </>    
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
