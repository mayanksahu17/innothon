"use client"; // This tells Next.js that this component will run on the client side.

import { useState } from 'react';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationStatus(true);
      } else {
        setVerificationStatus(false);
      }
    } catch (error) {
      setVerificationStatus(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Email Verification</h1>
      <div >
        <div>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit} type="submit">Verify</button>
      </div>
      {verificationStatus?<p>Email Verified Successfully</p>:<p>Email Not Verified</p>}
    </div>
  );
};

export default VerifyEmail;
