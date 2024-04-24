import {connectDB} from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB()

export async function POST(request:NextRequest){

try {
const {email,password}= await request.json()
if(!email || !password || email.trim()=="" || password.trim()==""){
    return NextResponse.json({message:"Please fill all the fields",status:false},{status:400})
}

const user = await User.findOne({email:email.toLowerCase()})
if (!user) {
    return NextResponse.json({message:"User not found",status:false},{status:404})
}
const comparePassword= await bcryptjs.compare(password,user.password)

if (!comparePassword) {
    return NextResponse.json({message:"Incorrect password",status:false},{status:400})
}
const tokenData={
    id:user._id,
    email:user.email
}
const token=  jwt.sign(tokenData,
    process.env.TOKEN_SECRET!,
    {
    expiresIn:"1d"
    }
)

const response= NextResponse.json({message:"User Login successfully",status:true},{status:201})

response.cookies.set("token",token,{
    httpOnly:true,
    secure:true,
})
return response
    
} catch (error: any) {
    return NextResponse.json({message:error.message,status:false},{status:500})
}

}