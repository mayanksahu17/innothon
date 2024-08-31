"use client"; // This tells Next.js that this component will run on the client side.
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const VerifyEmail = (params: any) => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const code = searchParams.get('code');

  // const router = useRouter();
  // const { email, code } = router.query;
  // console.log(email, code);
  
  
  // Get the encoded values from the URL
  // const encodedEmail = searchParams.get('email');
  // const encodedCode = searchParams.get('code');
  
  // Decode the URL-encoded parameters
  // const email = encodedEmail ? decodeURIComponent(encodedEmail) : null;
  // const code = encodedCode ? decodeURIComponent(encodedCode) : null;
  
  const [verificationStatus, setVerificationStatus] = useState(false);

  // Log the decoded values
  console.log('Decoded email:', email);
  console.log('Decoded code:', code);
  
  const verifyUser = async () => {
    try {
      // const response = await fetch(`/api/verify-email?email=${email}&code=${code}`);
      // if (response.ok) {
        setVerificationStatus(true);
      // } else {
      //   setVerificationStatus(true);
      // }
    } catch (error) {
      setVerificationStatus(false);
    }
  };
  useEffect(() => {
    if (email && code) {
      verifyUser();
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{verificationStatus?'Verified your email Successfully':"Not verified"}</h1>
    </div>
  );
};

export default VerifyEmail;
