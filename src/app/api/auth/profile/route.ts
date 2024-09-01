import { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
// import { Freelancer } from "@/models/Freelancer";

export default async function POST(req:NextRequest) {
    const {
        name,
        imageUrl,
        bio,
        skills,
        experience,
        projectTitle,
        projectDescription,
        techStacks,
        degree,
        school,
        graduationYear,
        language,
    } = await req.json()
    
}   