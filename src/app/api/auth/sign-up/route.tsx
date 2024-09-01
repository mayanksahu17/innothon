import dbConnect  from "@/lib/dbConnect";
import {User} from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import VerificationEmail from '@/emails/verificationEmail';

export async function POST(request:NextRequest){
    try {
        await dbConnect(); 

        const {userName, email, password , role } = await request.json()
        // const {userName, email, password , role } = reqBody

        console.log(userName, email, password , role );
 
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        const verifyCode = Math.floor(100000 +   Math.random() * 900000).toString();

        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            role,
            verifyCode
        })

        const savedUser = await newUser.save()
        console.log(savedUser);
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            port: 465,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });
      
          const verificationUrl = `http://localhost:3000/verify-email`;
      
          const emailTemplate = await render(<VerificationEmail username={userName} otp={verifyCode} url={verificationUrl} />);
          
          const info = await transporter.sendMail({
            from: process.env.EMAIL_USER , // sender address
            to: email, // list of receivers
            subject: "Verify Your Email", // Subject line
            html: emailTemplate, // html body
          });

        return NextResponse.json({
            message: "Email sent successfully",
            success: true,
            savedUser
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}      