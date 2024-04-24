import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import {mailer} from "@/utils/mailer";

connectDB()

export async function POST(request:NextRequest){
    interface SignUpValues{
        username:string,
        email:string,
        password:string
    }
try {
    const {username,email,password}:SignUpValues=await request.json()
    if (
        !username || !email || !password ||
        username.trim()=="" || email.trim()=="" || password.trim()=="") {
        return NextResponse.json({message:"Please fill all the fields",status:false},{status:400})
    }
    const existingUser= await User.findOne(
    {$or:[{username:username},{email:email}]}
    )

    if (existingUser) {
        return NextResponse.json({message:"User already exists",status:false},{status:400})
    }

    const hashedPassword= await bcryptjs.hash(password,10)

    if (!hashedPassword) {
        return NextResponse.json({message:"Password hashing failed",status:false},{status:500})
    }
    
    const user = new User({
        username:username.toLowerCase(),
        email:email.toLowerCase(),
        password:hashedPassword
    })

    const newUser= await user.save()
    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if (!newUser) {
        return NextResponse.json({message:"User not created",status:false},{status:400})
    }
      
    const sendEmail= await mailer({email:newUser.email,emailType:"VERIFY",userID:newUser._id})
    if (!sendEmail) {
        return NextResponse.json({message:"Email not sent",status:false},{status:500})
    }

    return NextResponse.json({message:"User created successfully",status:true,user:createdUser},{status:201})
    
} catch (error: any) {
    return NextResponse.json({message:error.message,status:false},{status:500})
}

}