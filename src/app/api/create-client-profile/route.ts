import dbConnect  from "@/lib/dbConnect";
import { Client } from "@/models/Client";
import Profile from "@/models/Freelancer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        await dbConnect(); 

        const {name,
            bio,
            skills,
            experience,
            domain,
            education,
            projectTitle,
            projectDescription,
            Description } = await request.json()

        console.log(name,
            bio,
            skills,
            experience,
            domain,
            education,
            projectTitle,
            projectDescription,
            Description );
 
        const newProfile = new Profile({
            name,
            bio,
            skills,
            experience,
            domain,
            education,
            projectTitle,
            projectDescription,
            Description 
        })

        const savedProfile = await newProfile.save()
        console.log(savedProfile);
        
        
        return NextResponse.json({
            message: "Profile created Successfully",
            success: true,
            savedProfile
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}      

export async function GET(){
    try {
        await dbConnect(); 

        const response = Client.find()

        return NextResponse.json({
            message: response,
            success: true,
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}  