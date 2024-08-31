import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import VerificationEmail from '@/emails/verificationEmail';
import React from 'react';
import { User } from '@/models/User';
import validator from 'validator'
import dbConnect from '@/lib/dbConnect';

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const { email } = await req.json();

    if (!validator.isEmail(email)) {
      return NextResponse.json({ errors: ['Invalid email'] }, { status: 400 });
    }

    console.log("test");
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const verifyCode = Math.floor(100000 +   Math.random() * 900000).toString();

    await User.updateOne({ email }, { verifyCode });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verificationUrl = `http://localhost:3000/verify-email?email=${email}/code=${verifyCode}`;

    const emailTemplate = await render(<VerificationEmail username={user.userName} otp={verifyCode} url={verificationUrl} />);
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER , // sender address
      to: email, // list of receivers
      subject: "Verify Your Email", // Subject line
      html: emailTemplate, // html body
    });
    
    await transporter.sendMail(info);



    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200});
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error occurred while sending the email' }, { status: 500 });
  }
}