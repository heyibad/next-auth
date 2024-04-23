import {connectDB} from "@/dbConfig/dbConfig";
import {User} from "@/models/user.model";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

connectDB()

export async function POST(req:NextRequest){
    interface SignUpValues{
        username:string,
        email:string,
        password:string
    }
try {
    const {username,email,password}:SignUpValues=await req.json()
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
    const user = new User({
        username:username.toLowerCase(),
        email:email.toLowerCase(),
        password
    })
    const newUser= await user.save()
    if (!newUser) {
        return NextResponse.json({message:"User not created",status:false},{status:400})
    }
    return NextResponse.json({message:"User created successfully",status:true,user:newUser},{status:201})
    
} catch (error: any) {
    return NextResponse.json({message:error.message,status:false},{status:500})
}

}