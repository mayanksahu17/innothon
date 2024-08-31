import dbConnect  from "@/lib/dbConnect";
import {User} from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try {
        await dbConnect(); 

        const reqBody = await request.json()
        const {userName, email, password , role } = reqBody

        console.log(reqBody);
 
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            role
        })

        const savedUser = await newUser.save()
        console.log(savedUser);


        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}      